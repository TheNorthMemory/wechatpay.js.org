---
title: 代扣解约挽留业务-获取解约挽留信息(JSON)
description: 当用户关闭协议时，协议所关联的模板在获取范围内，则主动的获取挽留信息。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/docs/merchant/apis/termination-retention/termination-retention-information.html)

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
  "create_time":"20180225112233",
  "resource_type":"encrypt-resource",
  "event_type":"ENTRUST.TERMINATE_RETENTION",
  "summary": "获取解约挽留信息",
  "resource" : {
    "original_type":"entrust",
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
  "contract_id": "123124412412423431",
  "mchid": "1900000109",
  "openid": "o-MYE42l80oelYMDE34nYD456Xoy",
  "out_contract_code": "wxwtdk20200910100000",
  "plan_id": 12535
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
 * @prop {'ENTRUST.TERMINATE_RETENTION'} event_type
 * @prop {{algorithm: string, ciphertext: string, nonce: string, associated_data: string}} resource
 * @typedef PlainObject
 * @prop {string} appid
 * @prop {string} contract_id
 * @prop {string} mchid
 * @prop {string} openid
 * @prop {string} out_contract_code
 * @prop {number} plan_id
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
/** @type {'COUPON'} */
var retention_type;
/** @type {'SEND_COUPON'|'UNUSED_COUPON'|'NOT_SEND_COUPON'} */
var state;
/** @type {string} */
var coupon_id;
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
  appid,
  contract_id,
  mchid,
  openid,
  out_contract_code,
  plan_id,
} = JSON.parse(Aes.AesGcm.decrypt(ciphertext, apiv3Key, nonce, associated_data))

// do your business
// ...
// ...
const response = { code, message, retention_type, coupon_info: { state, coupon_id } }
```

## 正常应答头(headers) {#resp.headers}

```ansi
Status: 200
```

## 正常应答报文(body) {#resp.body}

```json
{
  "code": "SUCCESS",
  "message": "",
  "retention_type": "COUPON",
  "coupon_info": {
    "state": "SEND_COUPON",
    "coupon_id": "9867041"
  }
}
```

> [!IMPORTANT] 注意：
> - 对后台交互时，如果微信收到应答不是成功或超时（当前是1秒的超时），微信认为获取失败，不会展示挽留信息。
> - 特别提醒：商户系统对于开启结果通知的内容一定要做签名验证，并校验通知的信息是否与商户侧的信息一致，防止数据泄露导致出现“假通知”，造成资金损失。
