---
title: 微信先享卡用户结算通知(JSON)
description: 用户结算后，微信会把用户结算信息发送给商户。该链接是通过【先享卡模板配置】中提交的结算通知URL设置，必须为https协议。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/payscore/discount-card/chapter4_2.shtml)

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
  "event_type":"DISCOUNT_CARD.SETTLEMENT",
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
  "appid": "wxd678efh567hg6787",
  "card_begin_time": "2015-05-20T13:29:35.120+08:00",
  "card_end_time": "2015-05-20T13:29:35.120+08:00",
  "card_name": "五一品牌活动",
  "create_time": "2015-05-20T13:29:35.120+08:00",
  "deduction_amount": 1000,
  "discount_card_id": "87789b2f25177433bcbf407e8e471f95",
  "estimated_reward_amount": 1000,
  "objective_description": "购买商品3次",
  "objectives": [
    {
      "count": 1,
      "name": "一周购买三次商品",
      "objective_id": 123456,
      "objective_serial_no": "578354545",
      "performance_description": "购买商品",
      "performance_time": "2015-05-20T13:29:35.120+08:00",
      "performance_type": "INCREASE",
      "remark": "特价商品",
      "unit": "个"
    }
  ],
  "offline_instructions": "仅限商户门店使用",
  "online_instructions": "仅限商户APP使用",
  "openid": "oUpF8uMuAJ2pxb1Q9zNjWeS6o",
  "order_id": "15646546545165651651",
  "out_order_no": "233bcbf407e87789b8e471f251774f95",
  "out_trade_no": "6e8369071cd942c0476613f9d1ce9ca3",
  "pay_time": "2015-05-20T13:29:35.120+08:00",
  "reward_description": "每次减5元",
  "rewards": [
    {
      "amount": 1,
      "count": 100,
      "description": "购买商品",
      "name": "八折优惠",
      "remark": "特价商品",
      "reward_id": 123456,
      "reward_serial_no": "578354",
      "reward_time": "2015-05-20T13:29:35.120+08:00",
      "reward_type": "INCREASE",
      "unit": "个"
    }
  ],
  "service_id": "500001",
  "settlement_amount": 1000,
  "state": "CREATED",
  "total_amount": 1000,
  "transaction_id": "1009660380201506130728806387"
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
 * @prop {'DISCOUNT_CARD.SETTLEMENT'} event_type
 * @prop {{algorithm: string, ciphertext: string, nonce: string, associated_data: string}} resource
 * @typedef PlainObject
 * @prop {string} appid
 * @prop {string} card_begin_time
 * @prop {string} card_end_time
 * @prop {string} card_name
 * @prop {string} create_time
 * @prop {number} deduction_amount
 * @prop {string} discount_card_id
 * @prop {number} estimated_reward_amount
 * @prop {string} objective_description
 * @prop {{count: number, name: string, objective_id: number, objective_serial_no: string, performance_description: string, performance_time: string, performance_type: 'INCREASE'|'DECREASE', remark: string, unit: string}[]} objectives
 * @prop {string} offline_instructions
 * @prop {string} online_instructions
 * @prop {string} openid
 * @prop {string} order_id
 * @prop {string} out_order_no
 * @prop {string} out_trade_no
 * @prop {string} pay_time
 * @prop {string} reward_description
 * @prop {{amount: number, count: number, description: string, name: string, remark: string, reward_id: number, reward_serial_no: string, reward_time: string, reward_type: 'INCREASE'|'DECREASE', unit: string}[]} rewards
 * @prop {string} service_id
 * @prop {number} settlement_amount
 * @prop {'CREATED'|'SETTLING'|'CHARGING'|'CHARGED'|'NO_CHARGE'|'REVOKED'} state
 * @prop {number} total_amount
 * @prop {string} transaction_id
 */
/** @type {string} 原始HTTP POST的文本 */
var json;
/** @type {import('crypto').CipherKey} APIv3密钥 */
var apiv3Key;
/** @type {RequestHeader} */
var headers;
/** @type {{[k: string]: import('crypto').KeyLike}} 微信支付公钥{微信支付公钥ID:实例}/平台证书{序列号:实例}键值对 */
var platformPublicKeys;
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
if (!Object.hasOwn(platformPublicKeys, wechatpaySerial)) {
  code = 'FAIL'
  message = 'platform certificate not exists'
}
else
if (!Rsa.verify(
  Formatter.joinedByLineFeed(wechatpayTimestamp, wechatpayNonce, json),
  wechatpaySignature,
  platformPublicKeys[wechatpaySerial]
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
  appid,
  card_begin_time,
  card_end_time,
  card_name,
  create_time,
  deduction_amount,
  discount_card_id,
  estimated_reward_amount,
  objective_description,
  objectives,
  offline_instructions,
  online_instructions,
  openid,
  order_id,
  out_order_no,
  out_trade_no,
  pay_time,
  reward_description,
  rewards,
  service_id,
  settlement_amount,
  state,
  total_amount,
  transaction_id,
} = JSON.parse(Aes.AesGcm.decrypt(ciphertext, apiv3Key, nonce, associated_data))

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
> - 对后台通知交互时，如果微信收到商户的应答不符合规范或超时，微信认为通知失败，微信会通过一定的策略定期重新发起通知，尽可能提高通知的成功率，但微信不保证通知最终能成功。 （通按照一定的频率重试，最多重试9次。）
