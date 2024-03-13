---
title: 数据签名
description: 微信支付目前现行两大类数据签名方法，对称算法基于MD5及HMAC-SHA256数据摘要算法，非对称算法基于RSA-OAEP(模数2048)算法。
aside: true
---

# {{ $frontmatter.title }} {#rules}

{{ $frontmatter.description }}

## 对称算法 {#symmetric}

签名生成的**通用步骤**如下：

### 后台数据交换 {#symmetric.backend}

第一步：

设所有发送或者接收到的数据为**集合M**，将**集合M**内非空参数值的参数按照**参数名**ASCII码从小到大排序(**字典序**)，使用**URL键值对的格式**(即key1=value1&key2=value2…)拼接成字符串**stringA**。

> [!IMPORTANT] 特别注意以下重要规则：
>
> - **参数名**ASCII码从小到大排序（**字典序**）；
> - 如果参数的**值为空不参与签名**；
> - 参数名区分大小写；
> - 验证调用返回或微信主动通知签名时，传送的**sign参数不参与签名**，将**生成的签名与该sign值作校验**；
> - 微信接口可能增加字段，验证签名时必须支持增加的扩展字段；

第二步：

在**stringA**最后拼接上**key**得到**stringSignTemp**字符串，并对**stringSignTemp**进行**MD5/HMAC-SHA256**运算，再将得到的字符串所有字符**转换为大写**，得到sign值**signValue**。

> [!IMPORTANT] 特别注意：
>
> - **密钥key**的长度为32个字节；
> - key设置路径：微信商户平台(pay.weixin.qq.com)-->账户中心-->账户设置-->API安全-->设置API密钥；

微信支付API接口协议中包含字段**nonce_str**，主要保证签名不可预测。微信支付官方推荐生成随机数算法如下：**调用随机数函数生成，将得到的值转换为字符串**。

举例：

设传送的参数**集合M**如下：

```js
{
  appid: 'wxd930ea5d5a258f4f',
  mch_id: '10000100',
  device_info: '1000',
  body: 'test',
  nonce_str: 'ibuaiVcKdpRxkhJA',
}
```

第一步：按照**参数名**ASCII**字典序**并对参数按照**URL键值对的格式**拼接如下：

```js
stringA="appid=wxd930ea5d5a258f4f&body=test&device_info=1000&mch_id=10000100&nonce_str=ibuaiVcKdpRxkhJA"
```

第二步：拼接API**密钥key**：

```js twoslash
const { Hash } = require('wechatpay-axios-plugin');
const MD5 = Hash.md5;
const HASH_HMAC = Hash.hmac
var stringA='',stringSignTemp='',sign='';
//---cut---
//注：key为商户平台设置的密钥key
stringSignTemp=stringA+"&key=192006250b4c09247ec02edce69f6a2d"

//注：MD5签名方式
sign=MD5(stringSignTemp).toUpperCase()
//样本值="9A0A8659F005D6984697E2CA0A9CF3B7"

//注：HMAC-SHA256签名方式，部分语言的hmac方法生成结果二进制结果，需要调对应函数转化为十六进制字符串。
sign=HASH_HMAC(stringA, key, "sha256").toUpperCase()
//样本值="6A9AE1657590FD6257D693A078E1C3E4BB6BA4DC30B23E0EE2496E54170DACD6"
```

则传输的数据即为:

```js
{
  appid: 'wxd930ea5d5a258f4f',
  mch_id: '10000100',
  device_info: '1000',
  body: 'test',
  nonce_str: 'ibuaiVcKdpRxkhJA',
  //以MD5为例
  sign: '9A0A8659F005D6984697E2CA0A9CF3B7',
}
```

APIv2是以`XML`格式作为数据交换方式，则需转换上述数据为`XML`文本格式如下:

```xml
<xml>
  <appid>wxd930ea5d5a258f4f</appid>
  <mch_id>10000100</mch_id>
  <device_info>1000</device_info>
  <body>test</body>
  <nonce_str>ibuaiVcKdpRxkhJA</nonce_str>
  <sign>9A0A8659F005D6984697E2CA0A9CF3B7</sign>
</xml>
```

> [!TIP] 以上签名及数据格式转换过程，用本开发包即如下：
> ```js twoslash
> /** @type {'MD5'|'HMAC-SHA256'} */
> var signType;
> /** @type {{appid: 'wxd930ea5d5a258f4f', mch_id: '10000100', device_info: '1000', body: 'test', nonce_str: 'ibuaiVcKdpRxkhJA'}} 样本数据集合 */
> var M;
> /** @type {'192006250b4c09247ec02edce69f6a2d'} 样本密钥key */
> var key;
> //---cut---
> const { Formatter, Hash, Transformer } = require('wechatpay-axios-plugin')
>
> // XML格式转换
> Transformer.toXml({
>   ...M,
>   // 数据签名并把值大写
>   sign: Hash.sign(
>     // 签名方式
>     signType,
>     // URL风格拼接数据
>     Formatter.queryStringLike(
>       // 按键值字典序排列
>       Formatter.ksort(M)
>     ),
>     key
>   )
> })
> ```

### 前台数据交换 {#symmetric.frontend}

此种方式也遵循**通用步骤**原则，只是**集合M**按业务表现不同而不同，归纳如下：

#### 现金支付 {#symmetric.frontend.cashpay}

> [!TIP] JSAPI 唤起微信支付收银台场景
> ```js twoslash
> /** @type {'MD5'|'HMAC-SHA256'} */
> var previousSignType;
> var appId = '', prepay_id = '';
> /** @type {import('crypto').CipherKey} the APIv2 secret key */
> var apiv2Secret;
> //---cut---
> const { Formatter, Hash, Transformer } = require('wechatpay-axios-plugin')
>
> const nonceStr = Formatter.nonce();
> const timeStamp = '' + Formatter.timestamp();
> const packageStr = 'prepay_id=' + prepay_id;
> // previousSignType 即后台调用 unifiedorder 接口时的签名方法
> const signType = previousSignType || 'MD5';
> const data = {
>   appId,
>   timeStamp,
>   nonceStr,
>   package: packageStr,
>   signType,
>   paySign: Hash.sign( // [!code hl:5]
>     signType,
>     { appId, timeStamp, nonceStr, package: packageStr, signType },
>     apiv2Secret
>   )
> }
> ```
> [官方文档](https://pay.weixin.qq.com/wiki/doc/api/jsapi.php?chapter=7_7&index=6) [官方文档](https://pay.weixin.qq.com/wiki/doc/api/wxa/wxa_api.php?chapter=7_7&index=5)

> [!TIP] APP 唤起微信支付收银台场景
> ```js twoslash
> /** @type {'MD5'|'HMAC-SHA256'} */
> var previousSignType;
> var appid = '', partnerid = '', prepayid = '';
> /** @type {import('crypto').CipherKey} the APIv2 secret key */
> var apiv2Secret;
> //---cut---
> const { Formatter, Hash, Transformer } = require('wechatpay-axios-plugin')
>
> const noncestr = Formatter.nonce();
> const timestamp = '' + Formatter.timestamp();
> const packageStr = 'Sign=WXPay';
> // previousSignType 即后台调用 unifiedorder 接口时的签名方法
> const signType = previousSignType || 'MD5';
> const data = {
>   appid,
>   partnerid,
>   prepayid,
>   package: packageStr,
>   timestamp,
>   noncestr,
>   sign: Hash.sign( // [!code hl:5]
>     signType,
>     { appid, partnerid, prepayid, package: packageStr, timestamp, noncestr },
>     apiv2Secret
>   )
> }
> ```
> [官方文档](https://pay.weixin.qq.com/wiki/doc/api/app/app.php?chapter=9_12&index=2)

#### 小程序红包 {#symmetric.frontend.wxaredpack}

> [!TIP] 微信小程序 唤起发放小程序红包场景
> ```js twoslash
> var appId = '', prepay_id = '', packageStr = '';
> /** @type {import('crypto').CipherKey} the APIv2 secret key */
> var apiv2Secret;
> //---cut---
> const { Formatter, Hash, Transformer } = require('wechatpay-axios-plugin')
>
> const nonceStr = Formatter.nonce();
> const timeStamp = '' + Formatter.timestamp();
> // 签名方法为固定值
> const signType = 'MD5';
> const data = {
>   appId,
>   timeStamp,
>   nonceStr,
>   // packageStr 即后台调用 sendminiprogramhb 接口的 package 返回字符串
>   package: encodeURIComponent(packageStr),
>   signType,
>   paySign: Hash.sign( // [!code hl:5]
>     signType,
>     { appId, timeStamp, nonceStr, package: packageStr },
>     apiv2Secret
>   )
> }
> ```
> [官方文档](https://pay.weixin.qq.com/wiki/doc/api/tools/cash_coupon_xcx.php?chapter=18_3&index=4)

#### 微信支付分 {#symmetric.frontend.payscore}

> [!TIP] APP 唤起微信支付分小程序订单详情场景
> ```js twoslash
> var mch_id = '', service_id = '', outOrderNo = '';
> /** @type { {miniProgramType?: 0|1|2, [k: string]?: string|number } } */
> var extInfo;
> /** @type {import('crypto').CipherKey} the APIv2 secret key */
> var apiv2Secret;
> //---cut---
> const { Formatter, Hash } = require('wechatpay-axios-plugin')
>
> const nonce_str = Formatter.nonce()
> const timestamp = '' + Formatter.timestamp()
> const out_order_no = encodeURIComponent(outOrderNo)
> // 签名方法为固定值
> const signType = 'HMAC-SHA256'
> const input = {
>   mch_id,
>   service_id,
>   out_order_no,
>   timestamp,
>   nonce_str,
>   sign_type: signType,
> }
> const sign = Hash.sign(signType, input, apiv2Secret) // [!code hl]
> const data = {
>   businessType: 'wxpayScoreDetail',
>   query: Formatter.queryStringLike(input) + '&sign=' + sign,
>   extInfo,
> }
> ```
> [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/apis/chapter6_1_24.shtml)

> [!TIP] JSAPI 唤起微信支付分小程序订单详情场景
> ```js twoslash
> var mch_id = '', service_id = '', outOrderNo = '';
> /** @type {import('crypto').CipherKey} the APIv2 secret key */
> var apiv2Secret;
> //---cut---
> const { Formatter, Hash } = require('wechatpay-axios-plugin')
>
> const nonce_str = Formatter.nonce()
> const timestamp = '' + Formatter.timestamp()
> const out_order_no = encodeURIComponent(outOrderNo)
> // 签名方法为固定值
> const signType = 'HMAC-SHA256'
> const input = {
>   mch_id,
>   service_id,
>   out_order_no,
>   timestamp,
>   nonce_str,
>   sign_type: signType,
> }
> const sign = Hash.sign(signType, input, apiv2Secret) // [!code hl]
> const data = {
>   businessType: 'wxpayScoreDetail',
>   queryString: Formatter.queryStringLike(input) + '&sign=' + sign,
> }
> ```
> [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/apis/chapter6_1_24.shtml)

> [!TIP] 微信小程序 唤起微信支付分小程序订单详情场景
> ```js twoslash
> var mch_id = '', service_id = '', out_order_no = '';
> /** @type {import('crypto').CipherKey} the APIv2 secret key */
> var apiv2Secret;
> //---cut---
> const { Formatter, Hash } = require('wechatpay-axios-plugin')
>
> const nonce_str = Formatter.nonce()
> const timestamp = '' + Formatter.timestamp()
> // 签名方法为固定值
> const signType = 'HMAC-SHA256'
> const input = {
>   mch_id,
>   service_id,
>   out_order_no,
>   timestamp,
>   nonce_str,
>   sign_type: signType,
> }
> const sign = Hash.sign(signType, input, apiv2Secret) // [!code hl]
> const data = {
>   businessType: 'wxpayScoreDetail',
>   extraData: { ...input, sign },
> }
> ```
> [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/apis/chapter6_1_25.shtml)

## 非对称算法 {#asymmetric}

此种签名方法，[官方文档介绍](https://pay.weixin.qq.com/docs/merchant/development/interface-rules/signature-generation.html) 已经很明晰，这里不再细述规则，仅做实现介绍如下：

### 后台数据交换 {#asymmetric.backend}

> [!TIP] 请求数据签名，用本开发包如下：
> ```js twoslash
> /** @type {'GET'|'POST'|'PUT'|'PATCH'|'DELETE'} */
> var httpMethod;
> /** @type {string} */
> var uri;
> /** @type {string} */
> var body;
> /** @type {import('crypto').BinaryLike} */
> var merchantPrivateKeyInstance;
> //---cut---
> const { Formatter, Rsa } = require('wechatpay-axios-plugin')
>
> Rsa.sign(
>   Formatter.request(
>      httpMethod,
>      uri,
>      Formatter.timestamp(),
>      Formatter.nonce(),
>      body
>   ),
>   merchantPrivateKeyInstance
> )
> ```

> [!TIP] 返回值数据验签，用本开发包如下：
> ```js twoslash
> /** @type {'GET'|'POST'|'PUT'|'PATCH'|'DELETE'} */
> var httpMethod;
> /** @type {string} 请求返回的头'wechatpay-serial'值 */
> var serial;
> /** @type {string} 请求返回的头'wechatpay-timestamp'值 */
> var timestamp;
> /** @type {string} 请求返回的头'wechatpay-nonce'值 */
> var nonce;
> /** @type {string} 请求返回的头'wechatpay-signature'值 */
> var signature;
> /** @type {string} 请求返回的body */
> var body;
> /** @type {{[k: string]: import('crypto').BinaryLike}} 微信支付平台证书{序列号:实例}键值对 */
> var platformCertificates;
> //---cut---
> const { Formatter, Rsa } = require('wechatpay-axios-plugin')
>
> Rsa.verify(
>   Formatter.response(
>      timestamp,
>      nonce,
>      body
>   ),
>   signature,
>   platformCertificates[serial],
> )
> ```

### 前台数据交换 {#asymmetric.frontend}

> [!TIP] JSAPI 唤起微信支付收银台场景
> ```js twoslash
> var appId = '', prepay_id = '';
> /** @type {import('crypto').BinaryLike} */
> var merchantPrivateKeyInstance;
> //---cut---
> const { Formatter, Rsa } = require('wechatpay-axios-plugin')
>
> const nonceStr = Formatter.nonce();
> const timeStamp = '' + Formatter.timestamp();
> const packageStr = 'prepay_id=' + prepay_id;
> const data = {
>   appId,
>   timeStamp,
>   nonceStr,
>   package: packageStr,
>   signType: 'RSA',
>   paySign: Rsa.sign( // [!code hl:4]
>     Formatter.joinedByLineFeed(appId, timeStamp, nonceStr, packageStr),
>     merchantPrivateKeyInstance
>   )
> }
> ```
> [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/apis/chapter3_1_4.shtml)

> [!TIP] APP 唤起微信支付收银台场景
> ```js twoslash
> var appid = '', partnerid = '', prepayid = '';
> /** @type {import('crypto').BinaryLike} */
> var merchantPrivateKeyInstance;
> //---cut---
> const { Formatter, Hash, Transformer } = require('wechatpay-axios-plugin')
>
> const noncestr = Formatter.nonce();
> const timestamp = '' + Formatter.timestamp();
> const data = {
>   appid,
>   partnerid,
>   prepayid,
>   package: 'Sign=WXPay',
>   timestamp,
>   noncestr,
>   sign: Rsa.sign( // [!code hl:4]
>     Formatter.joinedByLineFeed(appid, timestamp, noncestr, prepayid),
>     merchantPrivateKeyInstance
>   )
> }
> ```
> [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/apis/chapter3_2_4.shtml) [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3_partner/apis/chapter4_2_4.shtml) [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/apis/chapter5_1_6.shtml)
