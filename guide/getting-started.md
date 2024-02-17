---
title: 快速开始
aside: true
---

# 快速开始

## 安装

`$ npm install wechatpay-axios-plugin`

## 下载平台证书

执行以下命令行，需额外安装依赖 `$ npm install --no-save yargs`

```bash
$ ./node_modules/.bin/wxpay crt \
-m merchantId \
-s merchantCertificateSerial \
-f /path/to/merchant/apiclient_key.pem \
-k APIv3KeyString \
-o .
```

```
The WeChatPay Platform Certificate#0
  serial=HEXADECIAL
  notBefore=Wed, 22 Apr 2020 01:43:19 GMT
  notAfter=Mon, 21 Apr 2025 01:43:19 GMT
  Saved to: wechatpay_HEXADECIAL.pem
You may confirm the above infos again even if this library already did(by Rsa.verify):
    openssl x509 -in wechatpay_HEXADECIAL.pem -noout -serial -dates
```

## 应用代码

### 初始化

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

### Native下单

```js
wxpay.v3.pay.transactions.native.post({})
```

详细见[这里](/openapi/v3/pay/transactions/native)

### 查询订单

```js
wxpay.v3.pay.transactions.id._transaction_id_ // _placeholder_ 语法糖会转换成 '{placeholder}' 格式
  .get({
    params: {
      mchid: '1230000109'
    },
    transaction_id: '1217752501201407033233368018'
  })
```

### 关闭订单

```js
wxpay.v3.pay.transactions.outTradeNo.$transaction_id$.close // $placeholder$ 语法糖会转换成 '{placeholder}' 格式
  .post({
    mchid: '1230000109'
  }, {
    transaction_id: '1217752501201407033233368018'
  })
```

### 发起单笔退款

```js
wxpay.v3.refund.domestic.refunds.post({})
```
