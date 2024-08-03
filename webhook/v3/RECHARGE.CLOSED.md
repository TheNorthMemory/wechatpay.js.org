---
title: 平台收付通商家充值-关闭充值通知(JSON)
description: 微信支付通过该接口将二级商户的充值结果通知给平台商户的系统。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [充值结果通知](https://pay.weixin.qq.com/docs/partner/apis/platsolution-mch-recharge/notification/recharge-notice.html)

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
  "event_type":"RECHARGE.CLOSED",
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
  "sp_mchid": "1900001109",
  "sub_mchid": "1900001121",
  "out_recharge_no": "cz202407181234",
  "recharge_id": "100000202405180012345678",
  "recharge_scene": "ECOMMERCE_DEPOSIT",
  "account_type": "DEPOSIT",
  "recharge_channel": "QR_RECHARGE",
  "recharge_amount": {
    "amount": 500000,
    "currency": "CNY"
  },
  "recharge_state": "CLOSED",
  "recharge_state_desc": "充值成功",
  "accept_time": "2015-05-19T13:29:35+08:00",
  "close_time": "2015-05-20T14:29:35+08:00",
  "remark": "备注"
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
 * @prop {'RECHARGE.SUCCESS'} event_type
 * @prop {{algorithm: string, ciphertext: string, nonce: string, associated_data: string}} resource
 * @typedef PlainObject
 * @prop {string} sp_mchid
 * @prop {string} sub_mchid
 * @prop {string} out_recharge_no
 * @prop {string} recharge_id
 * @prop {'ECOMMERCE_DEPOSIT'} recharge_scene
 * @prop {'DEPOSIT'} account_type
 * @prop {'QR_RECHARGE' | 'BANK_TRANSFER'} recharge_channel
 * @prop {{amount:number,currency:'CNY'}} recharge_amount
 * @prop {'SUCCESS'|'RECHARGING'|'CLOSED'} recharge_state
 * @prop {string} recharge_state_desc
 * @prop {string} accept_time
 * @prop {string} close_time
 * @prop {string} remark
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
  sp_mchid,
  sub_mchid,
  out_recharge_no,
  recharge_id,
  recharge_scene,
  account_type,
  recharge_channel,
  recharge_amount,
  recharge_state,
  recharge_state_desc,
  accept_time,
  close_time,
  remark,
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
