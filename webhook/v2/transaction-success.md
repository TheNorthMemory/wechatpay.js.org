---
title: 普通支付通知(XML)
description: 当收到通知进行处理时，首先检查对应业务数据的状态，判断该通知是否已经处理过，如果没有处理过再进行处理，如果处理过直接返回结果成功。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方JSAPI文档](https://pay.weixin.qq.com/wiki/doc/api/jsapi.php?chapter=9_7&index=8) [官方NATIVE文档](https://pay.weixin.qq.com/wiki/doc/api/native.php?chapter=9_7&index=8) [官方APP文档](https://pay.weixin.qq.com/wiki/doc/api/app/app.php?chapter=9_7&index=3) [官方H5文档](https://pay.weixin.qq.com/wiki/doc/api/H5.php?chapter=9_3&index=8) [官方小程序支付文档](https://pay.weixin.qq.com/wiki/doc/api/wxa/wxa_api.php?chapter=9_7&index=8)

## 请求报文 {#req}

```xml
<xml>
  <appid><![CDATA[wx2421b1c4370ec43b]]></appid>
  <attach><![CDATA[支付测试]]></attach>
  <bank_type><![CDATA[CFT]]></bank_type>
  <fee_type><![CDATA[CNY]]></fee_type>
  <is_subscribe><![CDATA[N]]></is_subscribe>
  <mch_id><![CDATA[10000100]]></mch_id>
  <nonce_str><![CDATA[5d2b6c2a8db53831f7eda20af46e531c]]></nonce_str>
  <openid><![CDATA[oUpF8uMEb4qRXf22hE3X68TekukE]]></openid>
  <out_trade_no><![CDATA[1409811653]]></out_trade_no>
  <result_code><![CDATA[SUCCESS]]></result_code>
  <return_code><![CDATA[SUCCESS]]></return_code>
  <sign><![CDATA[B552ED6B279343CB493C5DD0D78AB241]]></sign>
  <time_end><![CDATA[20140903131540]]></time_end>
  <total_fee>1</total_fee>
  <coupon_fee><![CDATA[10]]></coupon_fee>
  <coupon_count><![CDATA[1]]></coupon_count>
  <coupon_type><![CDATA[CASH]]></coupon_type>
  <coupon_id><![CDATA[10000]]></coupon_id>
  <trade_type><![CDATA[JSAPI]]></trade_type>
  <transaction_id><![CDATA[1004400740201409030005092168]]></transaction_id>
</xml>
```

## 处理程序 {#app}

```js twoslash
/**
 * @typedef XmlDataRequest
 * @prop {string} appid
 * @prop {string} attach
 * @prop {string} bank_type
 * @prop {string} fee_type
 * @prop {string} is_subscribe
 * @prop {string} mch_id
 * @prop {string} nonce_str
 * @prop {string} openid
 * @prop {string} out_trade_no
 * @prop {string} result_code
 * @prop {string} return_code
 * @prop {string} sign
 * @prop {string} time_end
 * @prop {string} total_fee
 * @prop {string} coupon_fee
 * @prop {string} coupon_count
 * @prop {string} coupon_type
 * @prop {string} coupon_id
 * @prop {string} trade_type
 * @prop {string} transaction_id
 */

/** @type {string} the raw HTTP POST body */
var xml;
/** @type {import('crypto').CipherKey} the APIv2 secret key */
var apiv2Secret;
// ---cut---
const { Transformer, Hash } = require('wechatpay-axios-plugin')

// ---cut-start---
/** @type {XmlDataRequest} */
// ---cut-end---
const obj = Transformer.toObject(xml)

const sign_type = 64 === obj?.sign?.length ? 'HMAC-SHA256' : 'MD5'

let return_code = 'SUCCESS', return_msg = 'OK'

if (!Hash.equals(Hash.sign(sign_type, obj, apiv2Secret), obj?.sign)) {
  return_code = 'FAIL'
  return_msg = 'sign mismatched'
}

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
> - 同样的通知可能会多次发送给商户系统。商户系统必须能够正确处理重复的通知。
> - 后台通知交互时，如果微信收到商户的应答不符合规范或超时，微信会判定本次通知失败，重新发送通知，直到成功为止（在通知一直不成功的情况下，微信总共会发起多次通知，通知频率为15s/15s/30s/3m/10m/20m/30m/30m/30m/60m/3h/3h/3h/6h/6h - 总计 24h4m），但微信不保证通知最终一定能成功。
> - 在订单状态不明或者没有收到微信支付结果通知的情况下，建议商户主动调用[微信支付查单API](/openapi/v2/pay/orderquery)确认订单状态。
> - 商户系统对于支付结果通知的内容一定要做签名验证,并校验返回的订单金额是否与商户侧的订单金额一致，防止数据泄露导致出现“假通知”，造成资金损失。
> - 当收到通知进行处理时，首先检查对应业务数据的状态，判断该通知是否已经处理过，如果没有处理过再进行处理，如果处理过直接返回结果成功。在对业务数据进行状态检查和处理之前，要采用数据锁进行并发控制，以避免函数重入造成的数据混乱。
