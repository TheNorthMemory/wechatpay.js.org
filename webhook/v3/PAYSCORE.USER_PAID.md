---
title: 支付分服务用户支付成功通知(JSON)
description: 支付分服务用户支付成功通知
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [支付分服务用户支付成功通知](https://pay.weixin.qq.com/wiki/doc/apiv3_partner/Offline/apis/chapter6_2_9.shtml)

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
  "event_type":"PAYSCORE.USER_PAID",
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
  "service_id": "500001",
  "appid": "wxd678efh567hg6787",
  "mchid": "1230000109",
  "sub_appid": "wxd678efh567hg6999",
  "sub_mchid": "1900000109",
  "out_order_no": "1234323JKHDFE1243252",
  "sub_openid": "oUpF8uMuAJO_M2pxb1Q9zNjWeS6o",
  "state": "DONE",
  "service_introduction": "嗨客餐厅用餐",
  "total_amount": 40000,
  "post_payments": [
    {
      "name": "服务费",
      "amount": 40000,
      "description": "每分钟1元"
    }
  ],
  "post_discounts": [
    {
      "name": "满20减1元",
      "amount": 1,
      "description": "不与其他优惠叠加"
    }
  ],
  "risk_fund": {
    "name": "预估订单费用",
    "amount": 10000,
    "description": "就餐的预估费用"
  },
  "time_range": {
    "start_time": "20091225091010",
    "start_time_remark": "xxx",
    "end_time": "20091225091210",
    "end_time_remark": "xxx"
  },
  "location": {
    "start_location": "嗨客时尚主题展餐厅",
    "end_location": "嗨客时尚主题展餐厅"
  },
  "attach": "attach",
  "order_id": "165461131",
  "need_collection": true,
  "collection": {
    "state": "",
    "total_amount": 40000,
    "paying_amount": 40000,
    "paid_amount": 0,
    "details": [
      {
        "seq": 1,
        "amount": 10000,
        "paid_type": "MCH",
        "paid_time": "20091225091210",
        "transaction_id": "15646546545165651651",
        "promotion_detail": [
          {
            "coupon_id": "123456",
            "name": "单品优惠-6",
            "scope": "GLOBAL",
            "type": "CASH",
            "amount": 100,
            "stock_id": "activity_id",
            "wechatpay_contribute": 100,
            "merchant_contribute": 100,
            "other_contribute": 0,
            "currency": "CNY",
            "goods_detail": [
              {
                "goods_id": "M1006",
                "quantity": 1,
                "unit_price": 1,
                "discount_amount": 0,
                "goods_remark": "商品备注信息",
              }
            ]
          }
        ]
      }
    ]
  }
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
 * @prop {'PAYSCORE.USER_PAID'} event_type
 * @prop {{algorithm: string, ciphertext: string, nonce: string, associated_data: string}} resource
 * @typedef PlainObject
 * @prop {string} service_id
 * @prop {string} appid
 * @prop {string} mchid
 * @prop {string} sub_appid
 * @prop {string} sub_mchid
 * @prop {string} out_order_no
 * @prop {string} sub_openid
 * @prop {'DONE'} state
 * @prop {string} service_introduction
 * @prop {number} total_amount
 * @prop {{}[]} post_payments
 * @prop {{}[]} post_discounts
 * @prop {{}} risk_fund
 * @prop {{}} time_range
 * @prop {{}} location
 * @prop {string} attach
 * @prop {string} order_id
 * @prop {bool} need_collection
collection
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
  service_id,
  appid,
  mchid,
  sub_appid,
  sub_mchid,
  state,
  total_amount,
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
> - 商户退款完成后，微信会把相关退款结果和用户信息发送给清算机构，清算机构需要接收处理后返回应答成功，然后继续给异步通知到下游从业机构。
> - 对后台通知交互时，如果微信收到商户的应答不符合规范或超时，微信认为通知失败，微信会通过一定的策略定期重新发起通知，尽可能提高通知的成功率，但微信不保证通知最终能成功。（通知频率为15s/15s/30s/3m/10m/20m/30m/30m/30m/60m/3h/3h/3h/6h/6h - 总计 24h4m）
