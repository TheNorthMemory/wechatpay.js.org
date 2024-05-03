---
title: 微信先享卡用户领卡通知(JSON)
description: 用户领取优惠卡后，微信会把用户领卡信息发送给商户。该链接是通过商户【预受理领卡请求】中提交notify_url参数，必须为https协议。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/apis/chapter6_3_4.shtml)

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
  "event_type":"DISCOUNT_CARD.USER_ACCEPTED",
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
  "card_id": "233bcbf407e87789b8e471f251774f95",
  "card_template_id": "87789b2f25177433bcbf407e8e471f95",
  "openid": "oUpF8uMuAJ2pxb1Q9zNjWeS6o",
  "out_card_code": "6e8369071cd942c0476613f9d1ce9ca3",
  "appid": "wxd678efh567hg6787",
  "mchid": "1230000109",
  "time_range": {
    "begin_time": "2020-05-20T13:29:35.120+08:00",
    "end_time": "2020-05-21T13:29:35.120+08:00"
  },
  "state": "ONGOING",
  "create_time": "2020-05-20T13:29:35.120+08:00",
  "objectives" : [
    {
      "unit" : "次",
      "name" : "一周购买三次商品",
      "count" : 1,
      "description" : "特价商品",
      "objective_id" : "123456"
    },
    {
      "unit" : "次",
      "name" : "一周购买三次商品",
      "count" : 1,
      "description" : "特价商品",
      "objective_id" : "123456"
    }
  ],
  "rewards" : [
    {
      "unit" : "个",
      "amount" : 100,
      "count_type" : "COUNT_LIMIT",
      "name" : "八折优惠",
      "count" : 1,
      "description" : "特价商品优惠",
      "reward_id" : "123456",
    },
    {
      "unit" : "个",
      "amount" : 100,
      "count_type" : "COUNT_LIMIT",
      "name" : "八折优惠",
      "count" : 1,
      "description" : "特价商品优惠",
      "reward_id" : "123456"
    }
  ],
  "sharer_openid" : "oUpF8uMuAJ2pxb1Q9zNjWUHsd"
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
 * @prop {'DISCOUNT_CARD.USER_ACCEPTED'} event_type
 * @prop {{algorithm: string, ciphertext: string, nonce: string, associated_data: string}} resource
 * @typedef PlainObject
 * @prop {string} card_id
 * @prop {string} card_template_id
 * @prop {string} openid
 * @prop {string} out_card_code
 * @prop {string} appid
 * @prop {string} mchid
 * @prop {{begin_time: string, end_time: string}} time_range
 * @prop {string} state
 * @prop {string} create_time
 * @prop {{unit: string, name: string, count: number, description: string, objective_id: string}[]} objectives
 * @prop {{unit: string, amount: number, name: string, count: number, count_type: string, description: string, reward_id: string}[]} rewards
 * @prop {string} sharer_openid
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
  create_time: event_create_time,
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
  card_id,
  card_template_id,
  openid,
  out_card_code,
  appid,
  mchid,
  time_range,
  state,
  create_time,
  objectives,
  rewards,
  sharer_openid,
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
> - 商户退款完成后，微信会把相关退款结果和用户信息发送给清算机构，清算机构需要接收处理后返回应答成功，然后继续给异步通知到下游从业机构。
> - 对后台通知交互时，如果微信收到商户的应答不符合规范或超时，微信认为通知失败，微信会通过一定的策略定期重新发起通知，尽可能提高通知的成功率，但微信不保证通知最终能成功。 （通按照一定的频率重试，最多重试9次。）
