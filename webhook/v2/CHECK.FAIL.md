---
title: 用户确认订单失败(CHECK.FAIL)回调通知(XML)
description: 用户确认完成后，微信后台会把相关确认结果和订单信息发送给商户，商户需要接收处理该消息，并返回应答。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [免押租借确认订单通知](https://pay.weixin.qq.com/wiki/doc/apiv3/payscore.php?chapter=18_7&index=7) [免押速住确认订单通知](https://pay.weixin.qq.com/wiki/doc/apiv3/payscore.php?chapter=19_7&index=6)

## 请求报文 {#req}

```xml
<xml>
  <mch_id>10000100</mch_id>
  <app_id>wx2134213414324</app_id>
  <event_id>EV-2018022511223320873</event_id>
  <event_create_time>20180225112233</event_create_time>
  <event_type>CHECK.FAIL</event_type>
  <event_algorithm>AEAD_AES_256_GCM</event_algorithm>
  <event_nonce>...</event_nonce>
  <event_associated_data>...</event_associated_data>
  <event_ciphertext>...</event_ciphertext>
  <algorithm>HMAC-SHA256</algorithm>
  <nonce_str>...</nonce_str>
  <sign>xxxxxxx</sign>
</xml>
```

::: details event_ciphertext 解密后明文格式

```xml
<xml>
  <state>USER_ACCEPTED</state>
  <service_id>1234352342</service_id>
  <out_order_no >1234352342545345454</out_order_no>
  <order_id>1234352342545345454</order_id>
  <room>豪华双人房</room>
  <start_time>20091225091010</start_time>
  <deposit_amount>10000</deposit_amount>
  <finish_ticket>XXXXX</finish_ticket>
</xml>
```
:::

- 免押租借 event_ciphertext 解密后含 **goods_name** 字段
- 免押速住 event_ciphertext 解密后含 **room** 字段

## 处理程序 {#app}

```js twoslash
/// <reference types="node" />
/**
 * @typedef XmlDataRequest
 * @prop {string} mch_id
 * @prop {string} app_id
 * @prop {string} event_id
 * @prop {string} event_create_time
 * @prop {'CHECK.FAIL'} event_type
 * @prop {'AEAD_AES_256_GCM'} event_algorithm
 * @prop {string} event_nonce
 * @prop {string} event_associated_data
 * @prop {string} event_ciphertext
 * @prop {'HMAC-SHA256'} algorithm
 * @prop {string} nonce_str
 * @prop {string} sign
 * @typedef eventPlainObject
 * @prop {string} state
 * @prop {string} service_id
 * @prop {string} out_order_no
 * @prop {string} order_id
 * @prop {string} room
 * @prop {string} start_time
 * @prop {string} deposit_amount
 * @prop {string} finish_ticket
 */

/** @type {string} the raw HTTP POST body */
var xml;
/** @type {import('crypto').CipherKey} the APIv2 secret key */
var apiv2Secret;
/** @type {import('crypto').CipherKey} the APIv3 secret key */
var apiv3Key;
// ---cut---
const { Transformer, Hash, Aes } = require('wechatpay-axios-plugin')

// ---cut-start---
/** @type {XmlDataRequest} */
// ---cut-end---
const {
  mch_id,
  app_id,
  event_id,
  event_create_time,
  event_type,
  event_algorithm,
  event_nonce,
  event_associated_data,
  event_ciphertext,
  algorithm,
  nonce_str,
  sign,
} = Transformer.toObject(xml)

const obj = {
  mch_id,
  app_id,
  event_id,
  event_create_time,
  event_type,
  event_algorithm,
  event_nonce,
  event_associated_data,
  event_ciphertext,
  algorithm,
  nonce_str,
}
const sign_type = algorithm || 'HMAC-SHA256'

let return_code = 'SUCCESS', return_msg = 'OK'

if (!Hash.equals(Hash.sign(sign_type, obj, apiv2Secret), sign)) {
  return_code = 'FAIL'
  return_msg = 'sign mismatched'
}

// do your business
// ...
// ...

// ---cut-start---
/** @type {eventPlainObject} */
// ---cut-end---
const {
  state,
  service_id,
  out_order_no,
  order_id,
  room,
  start_time,
  deposit_amount,
  finish_ticket,
} = Transformer.toObject(Aes.AesGcm.decrypt(
  event_ciphertext, apiv3Key, event_nonce, event_associated_data
))

// do your business
// ...
// ...

const response = Transformer.toXml({code: return_code, message: return_msg})
```

## 应答报文 {#resp}

```xml
<xml>
  <code><![CDATA[SUCCESS]]></code>
  <message><![CDATA[OK]]></message>
</xml>
```

> [!IMPORTANT] 注意：
> - 用户确认完成后，微信后台会把相关确认结果和订单信息发送给商户，商户需要接收处理该消息，并返回应答。
> - 对后台通知交互时，如果微信收到商户的应答不符合规范或超时，微信认为通知失败，微信会通过一定的策略定期重新发起通知，尽可能提高通知的成功率，但微信不保证通知最终能成功。 （通知频率为15s/15s/30s/3m/10m/20m/30m/30m/30m/60m/3h/3h/3h/6h/6h - 总计 24h4m）
> - 同样的通知可能会多次发送给商户系统。商户系统必须能够正确处理重复的通知。
> - 推荐的做法是，当商户系统收到通知进行处理时，先检查对应业务数据的状态，并判断该通知是否已经处理。如果未处理，则再进行处理；如果已处理，则直接返回结果成功。在对业务数据进行状态检查和处理之前，要采用数据锁进行并发控制，以避免函数重入造成的数据混乱。
> - 如果在所有通知频率(4小时)后没有收到微信侧回调,商户应调用查询订单接口确认订单状态。
> - 特别提醒：商户系统对于确认结果通知的内容一定要做签名验证，并校验通知的信息是否与商户侧的信息一致，防止数据泄露导致出现“假通知”，造成资金损失。
