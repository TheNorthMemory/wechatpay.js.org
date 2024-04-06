---
title: 领券事件回调通知(JSON)
description: 领券完成后，微信会把相关领券结果和用户信息发送给商户，商户需要接收处理，并按照文档规范返回应答。出于安全的考虑，我们对支付结果数据进行了加密，商户需要先对通知数据进行解密，才能得到支付结果数据。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/docs/merchant/apis/cash-coupons/check-notice.html) [官方文档](https://pay.weixin.qq.com/docs/partner/apis/merchant-exclusive-coupon/coupon/busicoupon-send.html)

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
  "event_type":"COUPON.SEND",
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
  "event_type":"EVENT_TYPE_BUSICOUPON_SEND",
  "coupon_code":"1227944959000000911017",
  "stock_id":"1286950000000039",
  "send_time":"2019-12-17T10:35:53+08:00",
  "openid":"odXnH1CJjeQoWTld48db-pnxs-Wg",
  "unionid":"oOuyajgxj0oVwjocSoQm6mp7PGKw",
  "send_channel":"BUSICOUPON_SEND_CHANNEL_PAYGIFT",
  "send_merchant":"98568888",
  "attach_info":{
    "transaction_id":"4200000462220200226114599",
    "act_code":"540358695"
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
 * @prop {'COUPON.SEND'} event_type
 * @prop {{algorithm: string, ciphertext: string, nonce: string, associated_data: string}} resource
 * @typedef PlainObject
 * @prop {'EVENT_TYPE_BUSICOUPON_SEND'} event_type
 * @prop {string} coupon_code
 * @prop {string} stock_id
 * @prop {string} send_time
 * @prop {string} openid
 * @prop {string} unionid
 * @prop {'BUSICOUPON_SEND_CHANNEL_MINIAPP' | 'BUSICOUPON_SEND_CHANNEL_API' | 'BUSICOUPON_SEND_CHANNEL_PAYGIFT' | 'BUSICOUPON_SEND_CHANNEL_H5' | 'BUSICOUPON_SEND_CHANNEL_FTOF' | 'BUSICOUPON_SEND_CHANNEL_MEMBERCARD_ACT' | 'BUSICOUPON_SEND_CHANNEL_HALL' | 'BUSICOUPON_SEND_CHANNEL_JSAPI' | 'BUSICOUPON_SEND_CHANNEL_MINI_APP_LIVE' | 'BUSICOUPON_SEND_CHANNEL_WECHAT_SEARCH' | 'BUSICOUPON_SEND_CHANNEL_PAY_HAS_DISCOUNT' | 'BUSICOUPON_SEND_CHANNEL_WECHAT_AD' | 'BUSICOUPON_SEND_CHANNEL_RIGHTS_PLATFORM' | 'BUSICOUPON_SEND_CHANNEL_RECEIVE_MONEY_GIFT' | 'BUSICOUPON_SEND_CHANNEL_MEMBER_PAY_RIGHT' | 'BUSICOUPON_SEND_CHANNEL_BUSI_SMART_RETAIL' | 'BUSICOUPON_SEND_CHANNEL_FINDER_LIVEROOM'} send_channel
 * @prop {string} send_merchant
 * @prop {{transaction_id: string, act_code: string, hall_code?: string, hall_belong_mch_id?: number, card_id?: string, activity_id?: string}} attach_info
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
  event_type: event_type_,
  coupon_code,
  stock_id,
  send_time,
  openid,
  unionid,
  send_channel,
  send_merchant,
  attach_info,
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
> - 对后台通知交互时，如果微信收到应答不是成功或超时，微信认为通知失败，微信会通过一定的策略定期重新发起通知，尽可能提高通知的成功率，但微信不保证通知最终能成功。（通知频率为60s/次 - 总计11次 ）
