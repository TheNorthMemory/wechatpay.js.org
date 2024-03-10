---
title: 快速开始
aside: true
---

# 快速开始

## 安装 {#install}

`$ npm install wechatpay-axios-plugin`

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

## 应用代码 {#sample}

### 初始化 {#init}

```js twoslash
const { Wechatpay } = require('wechatpay-axios-plugin');
const { readFileSync } = require('fs');

// 商户号，支持「普通商户/特约商户」或「服务商商户」
const merchantId = '190000****';

// 「商户API证书」的「证书序列号」
const merchantCertificateSerial = '3775B6A45ACD588826D15E583A95F5DD********';

// 从本地文件中加载「商户API私钥」
const merchantPrivateKeyFilePath = '/path/to/merchant/apiclient_key.pem';
const merchantPrivateKeyInstance = readFileSync(merchantPrivateKeyFilePath);

// 「微信支付平台证书」的「证书序列号」，下载器下载后有提示`serial`序列号字段
const platformCertificateSerial = '7132d72a03e93cddf8c03bbd1f37eedf********';

// 从本地文件中加载「微信支付平台证书」，用来验证微信支付请求响应体的签名
const platformCertificateFilePath = '/path/to/wechatpay/cert.pem';
const platformCertificateInstance = readFileSync(platformCertificateFilePath);

const wxpay = new Wechatpay({
  //              ^?
  mchid: merchantId,
  serial: merchantCertificateSerial,
  privateKey: merchantPrivateKeyInstance,
  certs: { [platformCertificateSerial]: platformCertificateInstance, },
  // 使用APIv2时，需要至少设置 `secret`字段，示例代码未开启
  // APIv2密钥(32字节)
  // secret: 'your_merchant_secret_key_string',
  // // 接口不要求证书情形，例如仅收款merchant对象参数可选
  // merchant: {
  //   cert: readFileSync('/path/to/merchant/apiclient_cert.pem'),
  //   key: merchantPrivateKeyInstance,
  //   // or
  //   // passphrase: 'your_merchant_id',
  //   // pfx: fs.readFileSync('/your/merchant/cert/apiclient_cert.p12'),
  // },
});
```

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
