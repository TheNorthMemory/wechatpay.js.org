---
title: 指南
description: 此开发包承载了三部分内容，1、CLI：用符合官方开发规范的方式，获取微信支付平台证书，支持以命令行的方式，与服务端接口交互；2、CLIENT：通过链接相对路径(pathname)，用HTTP METHOD作为驱动执行函数，发起HTTP请求；3、SERVER：提供简单易用的方法，支持应用级快速集成。
aside: true
---

# 使用指南

{{ $frontmatter.description }}

## CLI 模式 {#cli}

在试用微信支付`APIv3`初始阶段，获取微信支付平台证书一直是件即简单又麻烦的过程，nodejs环境也鲜有一键获取的解决方案。本包在[0.0.4](https://github.com/TheNorthMemory/wechatpay-axios-plugin/releases/tag/v0.0.4)版本的时候即提供了与Java版参数语义一致的下载方案(并且原生支持应答验签功能)；在[0.5.0](https://github.com/TheNorthMemory/wechatpay-axios-plugin/releases/tag/v0.5.0)版本时，扩展了CLI命令集，支持以命令行的方式，用符合官方开发规范的方式，与服务端接口交互。

::: details $ ./node_modules/.bin/wxpay --help
```ansi
cli.js <uri>

Play the WeChatPay OpenAPI requests over command line

Commands:
  cli.js crt        The WeChatPay APIv3's Certificate Downloader  [aliases: cert, certificateDownloader, downloader]
  cli.js req <uri>  Play the WeChatPay OpenAPI requests over command line  [default] [aliases: request, remote]

<uri>
  -c, --config   The configuration  [required]
  -b, --binary   True for the `arraybuffer` response, two for without-verifier-response, otherwise for showing the origin
  -m, --method   The request HTTP verb  [choices: "DELETE", "GET", "POST", "PUT", "PATCH", "delete", "get", "post", "put", "patch"] [default: "POST"]
  -h, --headers  The request HTTP header(s)
  -d, --data     The request HTTP body
  -p, --params   The request HTTP query parameter(s)

Options:
      --version  Show version number  [boolean]
      --help     Show help  [boolean]
  -u, --baseURL  The baseURL  [string] [default: "https://api.mch.weixin.qq.com/"]

for more information visit https://github.com/TheNorthMemory/wechatpay-axios-plugin
```
:::

::: details $ ./node_modules/.bin/wxpay crt --help
```ansi
cli.js crt

The WeChatPay APIv3's Certificate Downloader

cert
  -m, --mchid       The merchant's ID, aka [1;32mmchid[0m.  [string] [required]
  -s, --serialno    The serial number of the merchant's certificate aka [1;32mserialno[0m.  [string] [required]
  -f, --privatekey  The path of the merchant's private key certificate aka [1;32mprivatekey[0m.  [string] [required]
  -k, --key         The secret key string of the merchant's APIv3 aka [1;32mkey[0m.  [string] [required]
  -o, --output      Path to output the downloaded WeChatPay's platform certificate(s)  [string] [default: "/tmp"]

Options:
      --version  Show version number  [boolean]
      --help     Show help  [boolean]
  -u, --baseURL  The baseURL  [string] [default: "https://api.mch.weixin.qq.com/"]
```
:::

[快速开始](/guide/getting-started)的第一步，即使用此模式先行下载微信支付`APIv3`平台证书。

>[!TIP] 小技巧
> 在平时的问题诊断过程中，比如查单、查进件状态等，可以使用`shell`套壳形式，简化每次都需要输入冗余初始化参数，例如:
> ::: details my-cli.sh
> ```ansi
> #!/bin/bash
>
> ./node_modules/.bin/wxpay \
>   -c.mchid 1900000000 \
>   -c.serial 3775B6A45ACD588826D15E583A95F5DD888888888 \
>   -c.privateKey /path/to/merchant/apiclient_key.pem \
>   -c.certs.7132D72A03E93CDDF8C03BBD1F37EEDF888888888 /path/to/wechatpay/cert.pem \
> $@
> ```
> :::
>
> **查询平台收付通进件审核状态**
>
> ::: details ./my-cli.sh v3.ecommerce.applyments&#8203;.2000004250058765 -m get
> ```js
> {
>   config: {
>     transitional: {
>       silentJSONParsing: true,
>       forcedJSONParsing: true,
>       clarifyTimeoutError: false
>     },
>     adapter: [Function: httpAdapter],
>     transformRequest: [ [Function: transformRequest] ],
>     transformResponse: [ [Function: verifier], [Function: transformResponse] ],
>     timeout: 0,
>     xsrfCookieName: 'XSRF-TOKEN',
>     xsrfHeaderName: 'X-XSRF-TOKEN',
>     maxContentLength: -1,
>     maxBodyLength: -1,
>     env: { FormData: [Function], Blob: [class Blob] },
>     validateStatus: [Function: validateStatus],
>     headers: {
>       Accept: 'application/json, text/plain, application/x-gzip, application/pdf, image/png, image/*;q=0.5',
>       Authorization: 'WECHATPAY2-SHA256-RSA2048 mchid="1900000000"',
>       'Content-Type': 'application/json; charset=utf-8',
>       'User-Agent': 'wechatpay-axios-plugin/0.8.12 axios/0.28.0 node/20.11.1 darwin/x64'
>     },
>     baseURL: 'https://api.mch.weixin.qq.com/',
>     mchid: '1900000000',
>     serial: '3775B6A45ACD588826D15E583A95F5DD888888888',
>     privateKey: <Buffer 2d 2d 2d 2d 2d ... 1654 more bytes>,
>     certs: {
>       '7132D72A03E93CDDF8C03BBD1F37EEDF888888888': <Buffer 2d 2d 2d 2d 2d ... 1425 more bytes>
>     },
>     url: 'v3/ecommerce/applyments/2000004250058765',
>     method: 'get',
>     data: undefined
>   },
>   headers: {
>     server: 'nginx',
>     date: 'Sun, 17 Mar 2024 07:01:26 GMT',
>     'content-type': 'application/json; charset=utf-8',
>     'content-length': '206',
>     connection: 'keep-alive',
>     'keep-alive': 'timeout=8',
>     'cache-control': 'no-cache, must-revalidate',
>     'x-content-type-options': 'nosniff',
>     'request-id': '08C6AADAAF0120BF1F28E3BE04-0',
>     'content-language': 'zh-CN',
>     'wechatpay-nonce': 'b5a72801e7a00465273854355b95e2da',
>     'wechatpay-signature': 'TBqrF8zfK9ce3Q6R==',
>     'wechatpay-timestamp': '1710658886',
>     'wechatpay-serial': '7132D72A03E93CDDF8C03BBD1F37EEDF888888888',
>     'wechatpay-signature-type': 'WECHATPAY2-SHA256-RSA2048'
>   },
>   data: {
>     applyment_id: 2000004250058765,
>     applyment_state: 'FINISH',
>     applyment_state_desc: '完成',
>     audit_detail: [],
>     out_request_no: 'APPLYMENT_2022122000000000001',
>     sign_state: 'SIGNED',
>     sub_mchid: '1900000001'
>   }
> }
> ```
> :::

## CLIENT 模式 {#client}

大体上来说，一个[URL](https://developer.mozilla.org/docs/Web/API/URL)可分为如下三部分：

```ansi vp-copy-ignore
[1;32mhttps://api.mch.weixin.qq.com/[0m[1;94mv3/certificates[0m?[1;31malgorithm_type=RSA[0m
[1;32m└──────────────┬─────────────┴[0m[1;94m───────┬──────┘[0m [1;31m└────────┬───────┘[0m
           [1;32mendpoint[0m               [1;94mpathname[0m        [1;31mquerystring[0m
```

- 接入点(**endpoint**): `https://api.mch.weixin.qq.com/`
- 相对路径(**pathname**): `v3/certificates`
- 查询参数(**querystring**): `algorithm_type=RSA`

微信支付当前已知的OpenAPI接入点(**endpoint**)有:

- `https://api.mch.weixin.qq.com/` 默认
- `https://api2.mch.weixin.qq.com/`
- `https://fraud.mch.weixin.qq.com/`
- `https://payapp.mch.weixin.qq.com/`
- `https://apihk.mch.weixin.qq.com/`
- `https://pay.wechatpay.cn/`

本开发包在初始化阶段，内置了默认的接入点(**endpoint**)，在特殊接口，如[付款到银行卡获取加密敏感信息的RSA公钥](/openapi/v2/risk/getpublickey)，就需要显式声明所对应的接入点(**endpoint**)；
在构造请求链时，把 相对路径(**pathname**) 以`/`做切分，取出 `segments` 映射成实例对象属性，接口支持的**HTTP METHOD**即作为末尾驱动执行函数，按需代入 查询参数(**querystring**)，发起HTTP请求。

编码书写方式有如下约定：

1. 请求 `segments` 按照顺序作为级联对象，例如 `v3/pay/transactions/native` 即链接成 `v3.pay.transactions.native`;

2. 每个 `segments` 所支持的 `HTTP METHOD`，即作为 请求对象的末尾执行方法，例如: `v3.pay.transactions.native.post({})`;

3. 每个 `segments` 级联对象默认为HTTP`POST`方法，其同时隐式内置`GET/POST/PUT/PATCH/DELETE` 方法链，小写`verb`格式，说明见`变更历史`;

4. 每个 `segments` 有中线(dash)分隔符的，可以使用驼峰`camelCase`风格书写，例如: `merchant-service`可写成 `merchantService`，或者字面量属性，如 `v3['merchant-service']`;

5. 每个 `segments` 中，若有动态参数，例如 `business_code/{business_code}` 可写成 `business_code.$business_code$` 或者字面量属性风格，如 `business_code['{business_code}']`;

6. 以 `v2` 开头的`segment`，其特殊标识为`APIv2`级联对象开始位，之后串接其他`segments`，如源 `pay/micropay` 即串接成 `v2.pay.micropay` 即以XML形式请求远端接口；

[开放接口](/openapi/)包含了大量的使用示例代码，请按需参阅使用。

## SERVER 模式 {#server}

[回调通知](/webhook/) 章节，当应用工作在服务端模式时，需要接收 微信支付 的后台数据(消息)通知时，按照开发规范，需要对数据：1. 验签、2. 解密、3. 应答。微信支付后台数据目前有两大类数据结构，APIv2基于XML规范，APIv3基于JSON规范。

### APIv2 XML规范 {#server.apiv2}

此类通知数据，首先需要对数据文本做转换，得到**集合M**，本开发包提供了方法即：

```js twoslash
const { Transformer } = require('wechatpay-axios-plugin')
//---cut---
Transformer.toObject
```

然后基于 [对称算法的通用步骤](/guide/digital-signature#symmetric) 计算出签名值，然后对值比对。

#### 验签 {#server.apiv2.verify}

历史上，随官方业务的推进，在具体实现上，部分接口`signType`默认签名方法是`MD5`，部分接口是`HMAC-SHA256`，还有部分接口`无`签名(原因无从考证)，存在即合理，应用端需要以微信支付官方公布的开发文档为准。

```js twoslash
const { Hash } = require('wechatpay-axios-plugin')
//---cut---
// 对 集合M 做本地运算
Hash.sign
// 拿运算结果与通知签名值做安全比对
Hash.equals
```

#### 解密 {#server.apiv2.decrypt}

**密文**是通过`AES-ECB`加密的，**密钥**是对**APIv2密钥**做`MD5`运算后取值小写的：

```js twoslash
const { Aes, Hash } = require('wechatpay-axios-plugin')
//---cut---
//对APIv2密钥做标准MD5取值
Hash.md5
//对密文做解密
Aes.AesEcb.decrypt
```

#### 应答 {#server.apiv2.response}

纯粹的数据格式转换，使用如下方法即：

```js twoslash
const { Transformer } = require('wechatpay-axios-plugin')
//---cut---
Transformer.toXml
```

### APIv3 JSON规范 {#apiv3}

此类通知数据，是基于 [非对称算法](/guide/digital-signature#asymmetric) 对请求的`载荷`整体做验签，签名值在请求头(`headers`)的`Wechatpay-Signature`字段里。

#### 验签 {#server.apiv3.verify}

```js twoslash
const { Rsa, Formatter } = require('wechatpay-axios-plugin')
//---cut---
//对请求报文做算法格式化
Formatter.joinedByLineFeed
//格式化后的内容做公钥验签
Rsa.verify
```

#### 解密 {#server.apiv3.decrypt}

```js twoslash
const { Aes } = require('wechatpay-axios-plugin')
//---cut---
//对请求载荷做转换
JSON.parse
//对`$.resource.ciphertext`做解密
Aes.AesGcm.decrypt
```

#### 应答 {#server.apiv3.response}

纯粹的数据格式转换，使用全局的`JSON`字符串化即：

```js twoslash
JSON.stringify
```
