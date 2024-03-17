---
title: 普通支付通知(JSON)
description: 微信支付通过支付通知接口将用户支付成功消息通知给商户
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [普通支付通知](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/pay/transactions/chapter3_11.shtml) [服务商支付通知](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/pay/transactions/chapter5_11.shtml) [合单支付通知](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/pay/combine/chapter3_7.shtml)

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
  "event_type":"TRANSACTION.SUCCESS",
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
    "transaction_id":"1217752501201407033233368018",
    "amount":{
        "payer_total":100,
        "total":100,
        "currency":"CNY",
        "payer_currency":"CNY"
    },
    "mchid":"1230000109",
    "trade_state":"SUCCESS",
    "bank_type":"CMC",
    "promotion_detail":[
        {
            "amount":100,
            "wechatpay_contribute":0,
            "coupon_id":"109519",
            "scope":"GLOBAL",
            "merchant_contribute":0,
            "name":"单品惠-6",
            "other_contribute":0,
            "currency":"CNY",
            "stock_id":"931386",
            "goods_detail":[
                {
                    "goods_remark":"商品备注信息",
                    "quantity":1,
                    "discount_amount":1,
                    "goods_id":"M1006",
                    "unit_price":100
                },
                {
                    "goods_remark":"商品备注信息",
                    "quantity":1,
                    "discount_amount":1,
                    "goods_id":"M1006",
                    "unit_price":100
                }
            ]
        },
        {
            "amount":100,
            "wechatpay_contribute":0,
            "coupon_id":"109519",
            "scope":"GLOBAL",
            "merchant_contribute":0,
            "name":"单品惠-6",
            "other_contribute":0,
            "currency":"CNY",
            "stock_id":"931386",
            "goods_detail":[
                {
                    "goods_remark":"商品备注信息",
                    "quantity":1,
                    "discount_amount":1,
                    "goods_id":"M1006",
                    "unit_price":100
                },
                {
                    "goods_remark":"商品备注信息",
                    "quantity":1,
                    "discount_amount":1,
                    "goods_id":"M1006",
                    "unit_price":100
                }
            ]
        }
    ],
    "success_time":"2018-06-08T10:34:56+08:00",
    "payer":{
        "openid":"oUpF8uMuAJO_M2pxb1Q9zNjWeS6o"
    },
    "out_trade_no":"1217752501201407033233368018",
    "appid":"wxd678efh567hg6787",
    "trade_state_desc":"支付成功",
    "trade_type":"MICROPAY",
    "attach":"自定义数据",
    "scene_info":{
        "device_id":"013467007045764"
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
 * @prop {'TRANSACTION.SUCCESS'} event_type
 * @prop {{algorithm: string, ciphertext: string, nonce: string, associated_data: string}} resource
 * @typedef PlainObject
 * @prop {string} transaction_id
 * @prop {string} amount
 * @prop {string} mchid
 * @prop {string} trade_state
 * @prop {string} bank_type
 * @prop {string} promotion_detail
 * @prop {string} success_time
 * @prop {{openid:string}} payer
 * @prop {string} out_trade_no
 * @prop {string} appid
 * @prop {string} trade_state_desc
 * @prop {string} trade_type
 * @prop {string} attach
 * @prop {string} scene_info
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
  transaction_id,
  mchid,
  trade_state,
  bank_type,
  success_time,
  payer,
  out_trade_no,
  appid,
  trade_state_desc,
  trade_type,
  attach,
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
> - 如果在所有通知频率后没有收到微信侧回调，商户应调用查询订单接口确认订单状态。
> - 特别提醒：商户系统对于开启结果通知的内容一定要做签名验证，并校验通知的信息是否与商户侧的信息一致，防止数据泄露导致出现“假通知”，造成资金损失。
> - 用户支付完成后，微信会把相关支付结果和用户信息发送给商户，商户需要接收处理该消息，并返回应答。
> - 对后台通知交互时，如果微信收到商户的应答不符合规范或超时，微信认为通知失败，微信会通过一定的策略定期重新发起通知，尽可能提高通知的成功率，但微信不保证通知最终能成功。（通知频率为15s/15s/30s/3m/10m/20m/30m/30m/30m/60m/3h/3h/3h/6h/6h - 总计 24h4m）
