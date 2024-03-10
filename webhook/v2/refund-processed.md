---
title: 退款结果通知(XML)
description: 当商户申请的退款有结果后（退款状态为：退款成功、退款关闭、退款异常），微信会把相关结果发送给商户，商户需要接收处理，并返回应答。
---

# {{ $frontmatter.title }} {#post}

> [!IMPORTANT] 注意：
> - 当商户申请的退款有结果后（退款状态为：退款成功、退款关闭、退款异常），微信会把相关结果发送给商户，商户需要接收处理，并返回应答。
> - 对后台通知交互时，如果微信收到商户的应答不是成功或超时，微信认为通知失败，微信会通过一定的策略定期重新发起通知，尽可能提高通知的成功率，但微信不保证通知最终能成功（通知频率为15s/15s/30s/3m/10m/20m/30m/30m/30m/60m/3h/3h/3h/6h/6h - 总计 24h4m）。
> - 注意：同样的通知可能会多次发送给商户系统。商户系统必须能够正确处理重复的通知。
> - 推荐的做法是，当收到通知进行处理时，首先检查对应业务数据的状态，判断该通知是否已经处理过，如果没有处理过再进行处理，如果处理过直接返回结果成功。在对业务数据进行状态检查和处理之前，要采用数据锁进行并发控制，以避免函数重入造成的数据混乱。
> - 特别说明：退款结果对重要的数据进行了加密，商户需要用商户密钥进行解密后才能获得结果通知的内容

## 请求报文 {#req}

```xml
<xml>
  <return_code>SUCCESS</return_code>
  <appid><![CDATA[wx8888888888888888]]></appid>
  <mch_id><![CDATA[1900000109]]></mch_id>
  <nonce_str><![CDATA[5K8264ILTKCH16CQ2502SI8ZNMTM67VS]]></nonce_str>
  <req_info><![CDATA[T87GAHG17TGAHG1TGHAHAHA1Y1CIOA9UGJH1GAHV871HAGAGQYQQPOOJMXNBCXBVNMNMAJAA]]></req_info>
  <return_msg><![CDATA[90]]></return_msg>
</xml>
```

::: details req_info 解密后明文格式

```xml
<root>
  <out_refund_no><![CDATA[131811191610442717309]]></out_refund_no>
  <out_trade_no><![CDATA[71106718111915575302817]]></out_trade_no>
  <refund_account><![CDATA[REFUND_SOURCE_RECHARGE_FUNDS]]></refund_account>
  <refund_fee><![CDATA[3960]]></refund_fee>
  <refund_id><![CDATA[50000408942018111907145868882]]></refund_id>
  <refund_recv_accout><![CDATA[支付用户零钱]]></refund_recv_accout>
  <refund_request_source><![CDATA[API]]></refund_request_source>
  <refund_status><![CDATA[SUCCESS]]></refund_status>
  <settlement_refund_fee><![CDATA[3960]]></settlement_refund_fee>
  <settlement_total_fee><![CDATA[3960]]></settlement_total_fee>
  <success_time><![CDATA[2018-11-19 16:24:13]]></success_time>
  <total_fee><![CDATA[3960]]></total_fee>
  <transaction_id><![CDATA[4200000215201811190261405420]]></transaction_id>
  <cash_refund_fee><![CDATA[90]]></cash_refund_fee>
</root>
```
:::

## 处理程序 {#app}

```js twoslash
/// <reference types="node" />
/**
 * @typedef XmlDataRequest
 * @prop {'SUCCESS'|'FAIL'} return_code 返回状态码
 * @prop {string} return_msg 返回信息
 * @prop {string} appid 公众账号ID
 * @prop {string} mch_id 退款的商户号
 * @prop {string} nonce_str 随机字符串
 * @prop {string} req_info 加密信息
 * @typedef ReqInfo
 * @prop {string} out_refund_no
 * @prop {string} out_trade_no
 * @prop {string} refund_account
 * @prop {string} refund_fee
 * @prop {string} refund_id
 * @prop {string} refund_recv_accout
 * @prop {string} refund_request_source
 * @prop {string} refund_status
 * @prop {string} settlement_refund_fee
 * @prop {string} settlement_total_fee
 * @prop {string} success_time
 * @prop {string} total_fee
 * @prop {string} transaction_id
 * @prop {string} cash_refund_fee
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
const {
  return_code: incomming_code,
  return_msg: incomming_msg,
  appid,
  mch_id,
  nonce_str,
  req_info,
} = Transformer.toObject(xml)

// ---cut-start---
/** @type {ReqInfo} */
// ---cut-end---
const {
  out_refund_no,
  out_trade_no,
  refund_account,
  refund_fee,
  refund_id,
  refund_recv_accout,
  refund_request_source,
  refund_status,
  settlement_refund_fee,
  settlement_total_fee,
  success_time,
  total_fee,
  transaction_id,
  cash_refund_fee,
} = Transformer.toObject(Aes.AesEcb.decrypt(req_info, Hash.md5(apiv2Secret).toLowerCase()))

let return_code = 'SUCCESS', return_msg = 'OK'

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
