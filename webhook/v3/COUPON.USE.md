---
title: 核销事件回调通知(JSON)
description: 用户使用券后，微信会把相关核销券信息发送给商户，商户需要接收处理，并按照文档规范返回应答。出于安全的考虑，我们对核销券信息数据进行了加密，商户需要先对通知数据进行解密，才能得到核销券信息数据。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/docs/merchant/apis/cash-coupons/check-notice.html) [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/payscore.php?chapter=17_9&index=8)

## 请求头(headers) {#req.headers}

```ansi
Wechatpay-Nonce: 3d980fb850fdce97f6bfb3d248597f16
Wechatpay-Serial: 7132d72a03e93cddf8c03bbd1f37eedf********
Wechatpay-Signature: i48r5y8IQw1qpTO+ywoV...
Wechatpay-Signature-Type: WECHATPAY2-SHA256-RSA2048
Wechatpay-Timestamp: 1710048759
Request-ID: 08F78BB5AF0610D302189F99DD5C20BA56F89845-0
```

## 请求报文(body) {#req.body}

```json
{
  "id":"EV-2018022511223320873",
  "create_time":"2015-05-20T13:29:35+08:00",
  "resource_type":"encrypt-resource",
  "event_type":"COUPON.USE",
  "resource" : {
    "algorithm":"AEAD_AES_256_GCM",
    "ciphertext": "...",
    "nonce": "...",
    "associated_data": ""
  }
}
```

::: details resource.ciphertext 解密后的明文格式

```json
{
  "stock_creator_mchid": "9800064",
  "stock_id": "9865888",
  "coupon_id": "98674556",
  "singleitem_discount_off": {
    "single_price_max": 100
  },
  "discount_to": {
    "cut_to_price": 100,
    "max_price": 10
  },
  "coupon_name": "微信支付代金券",
  "status": "USED",
  "description": "微信支付营销",
  "create_time": "2015-05-20T13:29:35+08:00",
  "coupon_type": "NORMAL",
  "no_cash": true,
  "available_begin_time": "2015-05-20T13:29:35+08:00",
  "available_end_time": "2015-05-20T13:29:35+08:00",
  "singleitem": true,
  "normal_coupon_information": {
    "coupon_amount": 100,
    "transaction_minimum": 100
  },
  "consume_information": {
    "consume_time": "2015-05-20T13:29:35+08:00",
    "consume_mchid": "9856081",
    "transaction_id": "4200752501201407033233368018",
    "goods_detail": [
      {
        "goods_id": "a_goods1",
        "quantity": 7,
        "price": 1,
        "discount_amount": 4
      }
    ]
  }
}
```
:::

## 处理程序 {#app}

```js twoslash
/**
 * @typedef RequestHeader
 * @prop {string} wechatpay-nonce
 * @prop {string} wechatpay-serial
 * @prop {string} wechatpay-signature
 * @prop {string} wechatpay-signature-type
 * @prop {string} wechatpay-timestamp
 * @prop {string} request-id
 * @typedef RequestJsonData
 * @prop {string} id
 * @prop {string} create_time
 * @prop {string} resource_type
 * @prop {'COUPON.USE'} event_type
 * @prop {{algorithm: string, ciphertext: string, nonce: string, associated_data: string}} resource
 * @typedef PlainObject
 * @prop {string} stock_creator_mchid
 * @prop {string} stock_id
 * @prop {string} coupon_id
 * @prop {string} create_time
 * @prop {{single_price_max:number}=} singleitem_discount_off
 * @prop {{cut_to_price: number, max_price: number}=} discount_to
 * @prop {string} coupon_name
 * @prop {'SENDED'|'USED'|'EXPIRED'} status
 * @prop {string} description
 * @prop {'NORMAL'|'CUT_TO'} coupon_type
 * @prop {string} no_cash
 * @prop {string} available_begin_time
 * @prop {string} available_end_time
 * @prop {boolean} singleitem
 * @prop {{coupon_amount: number, transaction_minimum: number}} normal_coupon_information
 * @prop {{consume_time: string, consume_mchid: string, transaction_id: string}} consume_information
 */
/** @type {string} 原始HTTP POST的文本 */
var json;
/** @type {import('crypto').CipherKey} APIv3密钥 */
var apiv3Key;
/** @type {RequestHeader} */
var headers;
/** @type {{[k: string]: import('crypto').BinaryLike}} 微信支付平台证书{序列号:实例}键值对 */
var platformCertificates;
/** @type {300} 推荐的时间偏移量 */
var MAXIMUM_CLOCK_OFFSET = 300;
// ---cut---
const { Formatter, Rsa, Aes } = require('wechatpay-axios-plugin')

const {
  'wechatpay-nonce': wechatpayNonce,
  'wechatpay-serial': wechatpaySerial,
  'wechatpay-signature': wechatpaySignature,
  'wechatpay-timestamp': wechatpayTimestamp,
} = headers

let code = 'SUCCESS', message = undefined

if (Math.abs(Formatter.timestamp() - wechatpayTimestamp) > MAXIMUM_CLOCK_OFFSET) {
  code = 'FAIL'
  message = 'Over clock offset'
}
else
if (!Object.hasOwn(platformCertificates, wechatpaySerial)) {
  code = 'FAIL'
  message = 'platform certificate not exists'
}
else
if (!Rsa.verify(
  Formatter.joinedByLineFeed(wechatpayTimestamp, wechatpayNonce, json),
  wechatpaySignature,
  platformCertificates[wechatpaySerial]
)) {
  code = 'FAIL'
  message = 'sign mismatched'
}

// do your business
// ...
// ...

// ---cut-start---
/** @type {RequestJsonData} */
// ---cut-end---
const {
  id,
  create_time,
  resource_type,
  event_type,
  resource: {
    ciphertext,
    nonce,
    associated_data
  },
} = JSON.parse(json)

// ---cut-start---
/** @type {PlainObject} */
// ---cut-end---
const {
  stock_creator_mchid,
  stock_id,
  coupon_id,
  singleitem_discount_off,
  discount_to,
  coupon_name,
  status,
  description,
  create_time: create_time_,
  coupon_type,
  no_cash,
  available_begin_time,
  available_end_time,
  singleitem,
  normal_coupon_information,
  consume_information,
} = JSON.parse(Aes.AesGcm.decrypt(nonce, apiv3Key, ciphertext, associated_data))

// do your business
// ...
// ...

const response = { code, message }
```

## 正常应答头(headers) {#resp.headers}

```ansi
Status: 200
```

## 正常应答报文(body) {#resp.body}

```json
{
  "code": "SUCCESS"
}
```

> [!IMPORTANT] 注意：
> - 同样的通知可能会多次发送给商户系统。商户系统必须能够正确处理重复的通知。 推荐的做法是，当商户系统收到通知进行处理时，先检查对应业务数据的状态，并判断该通知是否已经处理。如果未处理，则再进行处理；如果已处理，则直接返回结果成功。在对业务数据进行状态检查和处理之前，要采用数据锁进行并发控制，以避免函数重入造成的数据混乱。
> - 特别提醒：商户系统对于开启结果通知的内容一定要做签名验证，并校验通知的信息是否与商户侧的信息一致，防止数据泄露导致出现“假通知”，造成资金损失。
> - 对后台通知交互时，如果微信收到应答不是成功或超时，微信认为通知失败，微信会通过一定的策略定期重新发起通知，尽可能提高通知的成功率，但微信不保证通知最终能成功。（通知频率为1min1次，总计9次）
