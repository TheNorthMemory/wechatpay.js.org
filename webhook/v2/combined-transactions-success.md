---
title: 合单支付通知(XML)
description: 合单支付的支付结果将只通知给合单支付发起方（即combine_appid一方），支付完成后，微信会把相关支付结果和用户信息发送给商户，商户需要接收处理，并返回应答。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/api/combine.php?chapter=24_4&index=5)

## 请求报文 {#req}

```xml
<xml>
  <return_code>SUCCESS</return_code>
  <return_msg>签名失败</return_msg>
  <combine_appid>wx8888888888888888</combine_appid>
  <combine_mch_id>1900000109</combine_mch_id>
  <nonce_str>5K8264ILTKCH16CQ2502SI8ZNMTM67VS</nonce_str>
  <device_info>000077</device_info>
  <combine_openid>oUpF8uMuAJO_M2pxb1Q9zNjWeS6o</combine_openid>
  <combine_out_trade_no>1217752501201407033233368018</combine_out_trade_no>
  <trade_type>MWEB</trade_type>
  <bank_type>CMC</bank_type>
  <sign>C380BEC2BFD727A4B6845133519F3AD6</sign>
  <sign_type>HMAC-SHA256</sign_type>
  <result_code>SUCCESS</result_code>
  <result_msg>OK</result_msg>
  <err_code>SYSTEMERROR</err_code>
  <err_code_des>系统错误</err_code_des>
  <sub_order_list><![CDATA[{"order_num": 3,"order_list": [{},{},{}]}]]></sub_order_list>
</xml>
```

## 处理程序 {#app}

```js twoslash
/**
 * @typedef XmlDataRequest
 * @prop {string} return_code
 * @prop {string} return_msg
 * @prop {string} combine_appid
 * @prop {string} combine_mch_id
 * @prop {string} nonce_str
 * @prop {string} device_info
 * @prop {string} combine_openid
 * @prop {string} combine_out_trade_no
 * @prop {string} trade_type
 * @prop {string} bank_type
 * @prop {string} sign
 * @prop {string} sign_type
 * @prop {string} result_code
 * @prop {string} result_msg
 * @prop {string} err_code
 * @prop {string} err_code_des
 * @prop {string} sub_order_list
 * @typedef SubOrders
 * @prop {number} order_num
 * @prop {{appid: string, mch_id: string, openid: string, total_fee: number, cash_fee: number, transaction_id: string, out_trade_no: string, attach?: string, time_end: string}[]} order_list
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

// ---cut-start---
/** @type {SubOrders} */
// ---cut-end---
const {
  order_num,
  order_list,
} = JSON.parse(obj.sub_order_list)

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
> - 合单支付的支付结果将只通知给合单支付发起方（即combine_appid一方）。
> - 支付完成后，微信会把相关支付结果和用户信息发送给商户，商户需要接收处理，并返回应答。
> - 对后台通知交互时，如果微信收到商户的应答不是成功或超时，微信认为通知失败，微信会通过一定的策略（如30分钟共8次）定期重新发起通知，尽可能提高通知的成功率，但微信不保证通知最终能成功。（通知频率为15/15/30/180/1800/1800/1800/1800/3600，单位：秒）
> - 注意：同样的通知可能会多次发送给商户系统。商户系统必须能够正确处理重复的通知。
> - 推荐的做法是，当收到通知进行处理时，首先检查对应业务数据的状态，判断该通知是否已经处理过，如果没有处理过再进行处理，如果处理过直接返回结果成功。在对业务数据进行状态检查和处理之前，要采用数据锁进行并发控制，以避免函数重入造成的数据混乱。
> - 特别提醒：商户系统对于支付结果通知的内容一定要做签名验证,并校验返回的订单金额是否与商户侧的订单金额一致，防止数据泄露导致出现“假通知”，造成资金损失。
