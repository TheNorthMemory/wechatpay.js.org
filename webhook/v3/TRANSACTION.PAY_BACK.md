---
title: 用户对垫资单还款通知(JSON)
description: 商户请求微信支付分停车服务扣费受理接口，会完成订单受理。如果由于用户余额不足等原因，微信支付会进行垫资，用户对该垫资单进行了还款以后，微信支付会把该笔订单还款信息通知到商户。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [停车服务扣费受理通知](https://pay.weixin.qq.com/wiki/doc/apiv3/apis/chapter8_8_6.shtml) [服务商停车服务扣费受理通知](https://pay.weixin.qq.com/wiki/doc/apiv3_partner/apis/chapter8_8_6.shtml) [校园轻松付订单还款通知](https://pay.weixin.qq.com/wiki/doc/apiv3_partner/Offline/apis/chapter5_3_12.shtml)

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
  "event_type":"TRANSACTION.PAY_BACK",
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
  "appid": "wx2421b1c4370ec43b",
  "sp_mchid": "10000100",
  "sub_appid": "wxd678efh567hg6797",
  "sub_mchid": "10000109",
  "out_trade_no": "20150806125346",
  "trade_state": "PAY_BACK",
  "trade_state_description": "用户还款",
  "bank_type": "BPA",
  "attach": "支付测试",
  "success_time": "2017-08-26T10:43:39+08:00",
  "create_time": "2017-08-26T10:43:39+08:00",
  "user_repaid": "Y",
  "description": "停车场扣费",
  "trade_scene":"PARKING",
  "payer": {
    "openid": "oUpF8uN95-Ptaags6E_roPHg7AG0"
  },
  "amount" : {
    "total": 528800,
    "discount_total" : 1,
    "payer_total": 518799,
    "currency": "CNY",
  },
  "parking_info":{
    "parking_id":"5K8264ILTKCH16CQ250",
    "plate_number":"粤B88888",
    "plate_color":"BLUE",
    "start_time":"2017-08-26T10:43:39+08:00",
    "end_time":"2017-08-26T10:43:39+08:00",
    "parking_name":"欢乐海岸停车场",
    "charging_duration":3600,
    "device_id":"12321"
  },
  "promotion_detail":[
    {
      "promotion_id":"109519",
      "name":"单品惠-6",
      "scope":"SINGLE",
      "type":"DISCOUNT",
      "amount":1,
      "activity_id":"931386",
      "wechatpay_contribute":1,
      "merchant_contribute":0,
      "other_contribute":0
    }
  ]
}
```
:::

1. 停车服务会返回(**trade_scene=PARKING**)字段 {#PARKING}

1. 校园轻松付交易类型，订单已受理，但未完成扣款时不返回(**trade_type=AUTH**)字段 {#EDUSCHOOLPAY}

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
 * @prop {'TRANSACTION.PAY_BACK'} event_type
 * @prop {{algorithm: string, ciphertext: string, nonce: string, associated_data: string}} resource
 * @typedef PlainObject
 * @prop {string} transaction_id
 * @prop {string} amount
 * @prop {string} mchid
 * @prop {string} trade_state
 * @prop {string} bank_type
 * @prop {string} promotion_detail
 * @prop {string} success_time
 * @prop {'PARKING'} trade_scene
 * @prop {{openid:string}} payer
 * @prop {string} out_trade_no
 * @prop {string} appid
 * @prop {string} trade_state_desc
 * @prop {'AUTH'=} trade_type
 * @prop {string} attach
 * @prop {string} scene_info
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
  transaction_id,
  mchid,
  trade_state,
  bank_type,
  success_time,
  payer,
  out_trade_no,
  appid,
  trade_state_desc,
  trade_type,
  trade_scene,
  attach,
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
> - 如果在所有通知频率后没有收到微信侧回调，商户应调用查询订单接口确认订单状态。
> - 特别提醒：商户系统对于开启结果通知的内容一定要做签名验证，并校验通知的信息是否与商户侧的信息一致，防止数据泄露导致出现“假通知”，造成资金损失。
> - 用户支付完成后，微信会把相关支付结果和用户信息发送给商户，商户需要接收处理该消息，并返回应答。
> - 对后台通知交互时，如果微信收到商户的应答不符合规范或超时，微信认为通知失败，微信会通过一定的策略定期重新发起通知，尽可能提高通知的成功率，但微信不保证通知最终能成功。（通知频率为15s/15s/30s/3m/10m/20m/30m/30m/30m/60m/3h/3h/3h/6h/6h - 总计 24h4m）
