---
title: 车牌状态变更通知(XML)
description: 从用户进入开通车主服务的停车场（用户入场通知接口），到用户离场期间（扣款接口），这个时间段内如果用户状态变为可用或者不可用，微信会把相关状态变更情况（可用/不可用）异步发送给商户，回调url为调用上述用户入场通知接口时填写的notify_url字段。商户在收到车主状态变更通知后，需进行接收处理并返回应答。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/api/vehicle_v2.php?chapter=20_912&index=12) [官方文档](https://pay.weixin.qq.com/wiki/doc/api/vehicle_v2_sl.php?chapter=20_912&index=12&p=202)

## 请求报文 {#req}

```xml
<xml>
  <mch_id>100000981</mch_id>
  <sub_mch_id>10000100</sub_mch_id>
  <appid>wxcbda96de0b165486</appid>
  <nonce_str>5K8264ILTKCH16CQ2502SI8ZNMTM67VS</nonce_str>
  <sign_type>HMAC-SHA256</sign_type>
  <sign>EE088059BBC9141264F8D14293AD6C4BB94CEA8C08AA98FBF93E262D445F8FF5</sign>
  <plate_number>粤A00000</plate_number>
  <vehicle_event_type>NORMAL</vehicle_event_type>
  <vehicle_event_des>OVERDUE</vehicle_event_des>
  <deduct_mode>PROACTIVE</deduct_mode>
  <vehicle_event_createtime>20180101100000</vehicle_event_createtime>
</xml>
```

## 处理程序 {#app}

```js twoslash
/// <reference types="node" />
/**
 * @typedef XmlDataRequest
 * @prop {string} mch_id
 * @prop {string=} sub_mch_id
 * @prop {string} appid
 * @prop {string} nonce_str
 * @prop {string} sign_type
 * @prop {string} sign
 * @prop {string} plate_number
 * @prop {'NORMAL'|'BLOCKED'} vehicle_event_type
 * @prop {'OVERDUE'|'REMOVE'|'PAUSE'=} vehicle_event_des
 * @prop {'PROACTIVE'|'AUTOPAY'=} deduct_mode
 * @prop {string} vehicle_event_createtime
 */

/** @type {string} the raw HTTP POST body */
var xml;
/** @type {import('crypto').CipherKey} the APIv2 secret key */
var apiv2Secret;
// ---cut---
const { Transformer, Hash, Aes } = require('wechatpay-axios-plugin')

// ---cut-start---
/** @type {XmlDataRequest} */
// ---cut-end---
const obj = Transformer.toObject(xml)

let return_code = 'SUCCESS', return_msg = 'OK'

if (!Hash.equals(Hash.sign('HMAC-SHA256', obj, apiv2Secret), obj?.sign)) {
  return_code = 'FAIL'
  return_msg = 'sign mismatched'
}

const {
  mch_id,
  sub_mch_id,
  appid,
  plate_number,
  vehicle_event_type,
  vehicle_event_des,
  deduct_mode,
  vehicle_event_createtime,
} = obj;

// do your business
// ...
// ...

const response = Transformer.toXml({return_code, return_msg})
```

## 应答报文 {#resp}

```xml
<xml>
  <return_code><![CDATA[SUCCESS]]></return_code>
  <return_msg><![CDATA[OK]]></return_msg>
</xml>
```

> [!IMPORTANT] 注意：
> - 对后台通知交互时，如果微信收到商户的应答不是成功或超时，微信认为通知失败，微信会通过一定的策略定期重新发起通知，尽可能提高通知的成功率，但微信不保证通知最终能成功（通知频率为6/12/24/48/96/192/384/768/1536，单位：秒）。
> - 注意：同样的通知可能会多次发送给商户系统。商户系统必须能够正确处理重复的通知。
> - 推荐的做法是，当收到通知进行处理时，首先检查对应业务数据的状态，判断该通知是否已经处理过，如果没有处理过再进行处理，如果处理过直接返回结果成功。在对业务数据进行状态检查和处理之前，要采用数据锁进行并发控制，以避免函数重入造成的数据混乱。
