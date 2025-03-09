---
title: 商家转账批次关闭回调通知(JSON)
description: 商家转账批次单据到终态后（批次关闭，对应批次状态batch_status的值为CLOSED），微信支付会把批次单据的信息发送给商户，商户需要接收处理该消息，并返回应答。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [商家转账回调通知](https://pay.weixin.qq.com/docs/merchant/apis/batch-transfer-to-balance/transfer-batch-callback-notice.html)

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
  "event_type":"MCHTRANSFER.BATCH.CLOSED",
  "summary": "商家转账批次关闭通知",
  "resource" : {
    "original_type": "mch_payment",
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
  "out_batch_no": "bfatestnotify000033",
  "batch_id": "131000007026709999520922023081519403795655",
  "batch_status": "CLOSED",
  "total_num": 2,
  "total_amount": 200,
  "success_amount": 100,
  "success_num": 1,
  "fail_amount": 100,
  "fail_num": 1,
  "mchid": "2483775951",
  "close_reason": "OVERDUE_CLOSE",
  "update_time": "2023-08-15T20:33:22+08:00"
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
 * @prop {'MCHTRANSFER.BATCH.FINISHED'} event_type
 * @prop {'商家转账批次关闭通知'} summary
 * @prop {{original_type: string, algorithm: string, ciphertext: string, nonce: string, associated_data: string}} resource
 * @typedef PlainObject
 * @prop {string} out_batch_no
 * @prop {string} batch_id
 * @prop {'FINISHED'|'WAIT_PAY'|'ACCEPTED'|'PROCESSING'|'CLOSED'} batch_status
 * @prop {number} total_num
 * @prop {number} total_amount
 * @prop {number} success_amount
 * @prop {number} success_num
 * @prop {number} fail_amount
 * @prop {number} fail_num
 * @prop {string} mchid
 * @prop {'OVERDUE_CLOSE'|'TRANSFER_SCENE_INVALID'} close_reason
 * @prop {string} update_time
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
  out_batch_no,
  batch_id,
  batch_status,
  total_num,
  total_amount,
  success_amount,
  success_num,
  fail_amount,
  fail_num,
  mchid,
  close_reason,
  update_time,
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
> - 如果在所有通知频率后没有收到微信侧回调，商户应调用查询批次接口确认批次状态。
> - 特别提醒：商户系统对于开启结果通知的内容一定要做签名验证，并校验通知的信息是否与商户侧的信息一致，防止数据泄露导致出现“假通知”，造成资金损失。
> - 对后台通知交互时，如果微信收到商户的应答不符合规范或超时，微信认为通知失败，微信会通过一定的策略定期重新发起通知，尽可能提高通知的成功率，但微信不保证通知最终能成功。 （通知频率为0s/15s（尝试10次）/300s（尝试10次）/1800s（尝试44次)）
