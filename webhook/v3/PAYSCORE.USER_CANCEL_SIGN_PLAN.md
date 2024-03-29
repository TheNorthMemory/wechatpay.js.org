---
title: 取消签约回调通知(JSON)
description: 用户在取消签约或者取消服务授权导致服务下签约计划取消后，微信会把相关计划取消签约信息发送给商户，商户需要接收处理，并按照文档规范返回应答。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/docs/merchant/apis/payscore-plan/cancel-sign-plan-notice.html) [官方文档](https://pay.weixin.qq.com/docs/partner/apis/partner-payscore-plan/cancel-sign-plan-notice.html)

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
  "event_type":"PAYSCORE.USER_CANCEL_SIGN_PLAN",
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
  "sign_plan_id": "01020033210023606914000000007830",
  "openid": "oBgbt4sGN3Vl76KF7QgLF37UdjDU",
  "service_id": "00109000000000169034377913212082",
  "mchid": "2480262201",
  "appid": "wxa620f17681c6b0c7",
  "merchant_sign_plan_no": "1693882928726",
  "merchant_callback_url": "https://payapp.weixin.qq.com/wxvaluetest/common/indirect_bank/2492014071/listennotify",
  "plan_id": "01000033210032606914000000007983",
  "going_detail_no": 0,
  "sign_state": "UNSIGNED",
  "cancel_sign_time": "2023-09-05T10:28:50+08:00",
  "cancel_sign_type": "REVOKE_SERVICE",
  "cancel_reason": "",
  "plan_name": "瑜伽课5节",
  "plan_over_time": "2024-07-02T00:00:00+08:00",
  "total_origin_price": 1000,
  "deduction_quantity": 5,
  "total_actual_price": 500,
  "signed_detail_list": [
    {
      "plan_detail_no": 1,
      "original_price": 200,
      "plan_discount_description": "享受五折",
      "actual_price": 100,
      "plan_detail_state": "NOT_USED",
      "order_id": "",
      "merchant_plan_detail_no": "1693882928727",
      "plan_detail_name": "服务费1",
      "actual_pay_price": 0,
      "use_time": "",
      "complete_time": "",
      "cancel_time": ""
    }
  ],
  "sign_time": "2023-09-05T11:03:56+08:00"
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
 * @prop {'PAYSCORE.USER_CANCEL_SIGN_PLAN'} event_type
 * @prop {{algorithm: string, ciphertext: string, nonce: string, associated_data: string}} resource
 * @typedef PlainObject
 * @prop {string} sign_plan_id
 * @prop {string} openid
 * @prop {string=} sub_openid
 * @prop {string} service_id
 * @prop {string} mchid
 * @prop {string=} sub_mchid
 * @prop {string} appid
 * @prop {string=} sub_appid
 * @prop {string} merchant_sign_plan_no
 * @prop {string} merchant_callback_url
 * @prop {string} plan_id
 * @prop {number} going_detail_no
 * @prop {string} sign_state
 * @prop {string} cancel_sign_time
 * @prop {string} cancel_sign_type
 * @prop {string} cancel_reason
 * @prop {string} plan_name
 * @prop {string} plan_over_time
 * @prop {number} total_origin_price
 * @prop {number} deduction_quantity
 * @prop {number} total_actual_price
 * @prop {{plan_detail_no: number, original_price: number, plan_discount_description: string, actual_price: number, plan_detail_state: string, order_id: string, merchant_plan_detail_no: string, plan_detail_name: string, actual_pay_price: string, use_time: string, complete_time: string, cancel_time: string}[]} signed_detail_list
 * @prop {string} sign_time
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
  sign_plan_id,
  openid,
  sub_openid,
  service_id,
  mchid,
  sub_mchid,
  appid,
  sub_appid,
  merchant_sign_plan_no,
  merchant_callback_url,
  plan_id,
  going_detail_no,
  sign_state,
  cancel_sign_time,
  cancel_sign_type,
  cancel_reason,
  plan_name,
  plan_over_time,
  total_origin_price,
  deduction_quantity,
  total_actual_price,
  signed_detail_list,
  sign_time,
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
