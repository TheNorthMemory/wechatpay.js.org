---
title: 保险商户委托代扣解约完成通知(JSON)
description: 根据「国家金融监督管理总局深圳监督局」的2023 - 28号文 【关于个别短期健康险业务中存在问题及相关风险的通报】的精神指导，微信支付期望做到“让用户清晰签约、明确通知、有感扣费”。签约、解约成功后（包含用户主动解约），微信会把相关签约、解约信息异步通知给商户。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/docs/merchant/apis/insurance-entrusted-payment/contract-alter-notify.html)

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
  "event_type":"INSURANCE_ENTRUST.TERMINATE",
  "summary": "保险委托代扣解约通知",
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
  "contract_expired_time": "2021-09-10T13:29:35+08:00",
  "contract_id": "123124412412423431",
  "contract_signed_time": "2020-09-10T13:29:35+08:00",
  "contract_state": "TERMINATED",
  "insured_display_name": "*明",
  "mchid": "1900000109",
  "openid": "o-MYE42l80oelYMDE34nYD456Xoy",
  "contract_terminate_info": {
    "contract_termination_mode": "USER_TERMINATE",
    "contract_terminated_time": "2020-09-10T13:29:35+08:00",
    "contract_termination_remark": "签约信息有误，须重新签约。"
  },
  "out_contract_code": "wxwtdk20200910100000",
  "out_user_code": "用户A",
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
 * @prop {'INSURANCE_ENTRUST.TERMINATE'} event_type
 * @prop {{algorithm: string, ciphertext: string, nonce: string, associated_data: string}} resource
 * @typedef PlainObject
 * @prop {string} appid
 * @prop {string} contract_expired_time
 * @prop {string} contract_id
 * @prop {string} contract_signed_time
 * @prop {'SIGNED'|'TERMINATED'|'TO_BE_RENEWED'} contract_state
 * @prop {string} insured_display_name
 * @prop {string} mchid
 * @prop {string} openid
 * @prop {contract_termination_mode: 'USER_TERMINATE'|'MCH_API_TERMINATE'|'WEPAY_WEB_TERMINATE'|'CUSTOMER_SERVICE_TERMINATE'|'SYSTEM_TERMINATE', contract_terminated_time: string, contract_termination_remark: string}} contract_terminate_info
 * @prop {string} out_contract_code
 * @prop {string} out_user_code
 * @prop {number} plan_id
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
  contract_expired_time,
  contract_id,
  contract_signed_time,
  contract_state,
  insured_display_name,
  mchid,
  openid,
  contract_terminate_info,
  out_contract_code,
  out_user_code,
  plan_id,
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
> - 对后台通知交互时，如果微信收到商户的应答不符合规范或超时，微信认为通知失败，微信会通过一定的策略定期重新发起通知，尽可能提高通知的成功率，但微信不保证通知最终能成功。（通知频率为15s/15s/30s/3m/10m/20m/30m/30m/30m/60m/3h/3h/3h/6h/6h - 总计 24h4m）
