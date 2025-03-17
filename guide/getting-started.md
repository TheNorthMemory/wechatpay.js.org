---
title: 快速开始
aside: true
---

# 快速开始

## 安装 {#install}

`$ npm install wechatpay-axios-plugin`

## 下载平台公钥 {#pubkey}

> [!NOTE]
> 2024年Q3，微信支付官方开启了「微信支付公钥」平替「平台证书」方案，初始化所需的参数仅需配置上 **微信支付公钥ID** 及 **微信支付公钥** 即完全兼容支持，CLI/API下载 **微信支付平台证书** 已不是一个必要步骤，可略过。
> **微信支付公钥ID** 及 **微信支付公钥** 均可在 [微信支付商户平台](https://pay.weixin.qq.com/) -> 账户中心 -> API安全 查看及/或下载。

## 下载平台证书 {#cli}

下载命令行需额外安装依赖 `$ npm install --no-save yargs`，然后执行如下命令：

```bash
$ ./node_modules/.bin/wxpay crt \
-m merchantId \
-s merchantCertificateSerial \
-f /path/to/merchant/apiclient_key.pem \
-k APIv3KeyString \
-o .
```

提供正确的`商户号`、`商户API证书序列号`、`商户API私钥文件地址`、`APIv3密钥`，执行后，屏幕输出样例：

```ansi
The WeChatPay Platform Certificate[1;31m#0[0m
  serial=[1;32m7132d72a03e93cddf8c03bbd1f37eedf********[0m
  notBefore=Wed, 22 Apr 2020 01:43:19 GMT
  notAfter=Mon, 21 Apr 2025 01:43:19 GMT
  Saved to: [1;32m./wechatpay_7132d72a03e93cddf8c03bbd1f37eedf********.pem[0m
You may confirm the above infos again even if this library already did(by Rsa.verify):
	[1;32mopenssl x509 -in ./wechatpay_7132d72a03e93cddf8c03bbd1f37eedf********.pem -noout -serial -dates[0m
```

`./wechatpay_7132d72a03e93cddf8c03bbd1f37eedf********.pem` 即为 `微信支付平台证书` 文件。

> [!IMPORTANT] 重要提示
> 当下载证书后，屏显有几条证书信息，就在应用中配置**certs**几条，尤其是在[新旧平台证书交替灰度时](https://pay.weixin.qq.com/docs/merchant/development/interface-rules/wechatpay-certificates-rotation.html)，需要把新旧证书都配上，应用才不会出现事故。

## 应用代码 {#sample}

### 初始化 {#init}

请按照你的商户号所能接入的方式选择对应实例化客户端， APIv2 & APIv3 可以融合进同一个实例，本站默认以 **融合客户端实例(wxpay)** 方式介绍每一个接口的请求用法。

::: code-group

```js twoslash [APIv3 微信支付公钥 模式]
const { Wechatpay } = require('wechatpay-axios-plugin');
const { readFileSync } = require('fs');

// 商户号，支持「普通商户/特约商户」或「服务商商户」
const merchantId = '190000****';

// 「商户API证书」的「证书序列号」
const merchantCertificateSerial = '3775B6A45ACD588826D15E583A95F5DD********';

// 从本地文件中加载「商户API私钥」，用于生成请求的签名
const merchantPrivateKeyFilePath = '/path/to/merchant/apiclient_key.pem';
const merchantPrivateKeyInstance = readFileSync(merchantPrivateKeyFilePath);

// 从本地文件中加载「微信支付平台公钥」，用来验证微信支付应答的签名
const platformPublicKeyFilePath = '/path/to/wechatpay/publickey.pem';
const platformPublicKeyInstance = readFileSync(platformPublicKeyFilePath);

// 「微信支付平台公钥」的「平台公钥ID」
// 需要在 商户平台 -> 账户中心 -> API安全 查询
const platformPublicKeyId = 'PUB_KEY_ID_01142321349124100000000000********';

// 构造一个 APIv3 客户端实例(微信支付公钥模式)
const wxpay = new Wechatpay({
  mchid: merchantId,
  serial: merchantCertificateSerial,
  privateKey: merchantPrivateKeyInstance,
  certs: {
    [platformPublicKeyId]: platformPublicKeyInstance,
  },
});
```

```js twoslash [APIv3 平台证书 模式]
const { Wechatpay } = require('wechatpay-axios-plugin');

// 商户号，支持「普通商户/特约商户」或「服务商商户」
const merchantId = '190000****';

// 「商户API证书」的「证书序列号」
const merchantCertificateSerial = '3775B6A45ACD588826D15E583A95F5DD********';

// 从本地文件中加载「商户API私钥」，用于生成请求的签名
const merchantPrivateKeyFilePath = 'file:///path/to/merchant/apiclient_key.pem';

// 「微信支付平台证书」的「平台证书序列号」
// 可以从「微信支付平台证书」文件解析，也可以在 商户平台 -> 账户中心 -> API安全 查询到
const platformCertificateSerial = '7132D72A03E93CDDF8C03BBD1F37EEDF********';

// 从本地文件中加载「微信支付平台证书」，可由内置的CLI工具下载到，用来验证微信支付应答的签名
const platformCertificateFilePath = 'file:///path/to/wechatpay/certificate.pem';

// 构造一个 APIv3 客户端实例(平台证书模式)
const wxpay = new Wechatpay({
  mchid: merchantId,
  serial: merchantCertificateSerial,
  privateKey: merchantPrivateKeyFilePath, //v0.9新特性支持file://协议加载
  certs: {
    [platformCertificateSerial]: platformCertificateFilePath,
  },
});
```

```js twoslash [APIv2 客户端]
const { Wechatpay } = require('wechatpay-axios-plugin');
const { readFileSync } = require('fs');

// 商户号，支持「普通商户/特约商户」或「服务商商户」
const merchantId = '190000****';

// 构造一个 APIv2 客户端实例
const wxpay = new Wechatpay({
  mchid: merchantId,
  serial: '',
  privateKey: '',
  certs: {
    'any': '',
  },
  // APIv2(密钥32字节)
  secret: 'your_merchant_secret_key_string',
  // 部分接口要求使用「商户API证书」的场景，需要额外配置如下参数
  merchant: {
    cert: readFileSync('/path/to/merchant/apiclient_cert.pem'),
    key: readFileSync('/path/to/merchant/apiclient_key.pem'),
    // 或者配置如下配置项
    // passphrase: 'your_merchant_id',
    // pfx: readFileSync('/your/merchant/cert/apiclient_cert.p12'),
  },
});
```

:::

### Native下单 {#v3.pay.transactions.native.post}

```js
wxpay.v3.pay.transactions.native.post({})
```

详细见[这里](/openapi/v3/pay/transactions/native)

### 查询订单 {#v3.pay.transactions.id.$transaction_id$.get}

```js twoslash
var transaction_id = ''
//---cut---
// _placeholder_ 语法糖会转换成 '{placeholder}' 格式
wxpay.v3.pay.transactions.id._transaction_id_.get({ transaction_id })
//                           ^^^^^^^^^^^^^^^^
```

详细见[这里](/openapi/v3/pay/transactions/id/{transaction_id})

### 关闭订单 {#v3.pay.transactions.outTradeNo.$out_trade_no$.close.post}

```js twoslash
var out_trade_no = ''
//---cut---
// $placeholder$ 语法糖会转换成 '{placeholder}' 格式
wxpay.v3.pay.transactions.outTradeNo.$out_trade_no$.close.post({}, { out_trade_no })
//                                   ^^^^^^^^^^^^^^
```

详细见[这里](/openapi/v3/pay/transactions/out-trade-no/{out_trade_no}/close)

### 申请退款 {#v3.refund.domestic.refunds.post}

```js
wxpay.v3.refund.domestic.refunds.post({})
```

详细见[这里](/openapi/v3/refund/domestic/refunds)

### 查询单笔退款 {#v3.refund.domestic.refunds.$out_refund_no$.get}

```js twoslash
var out_refund_no = ''
//---cut---
// _placeholder_ 语法糖会转换成 '{placeholder}' 格式
wxpay.v3.refund.domestic.refunds._out_refund_no_.get({ out_refund_no })
//                               ^^^^^^^^^^^^^^^
```

详细见[这里](/openapi/v3/refund/domestic/refunds/{out_refund_no})
