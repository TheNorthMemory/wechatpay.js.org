---
title: APP下单
description: 商户系统先调用该接口在微信支付服务后台生成预支付交易单，返回正确的预支付交易会话标识后再在APP里面调起支付。
---

# {{ $frontmatter.title }}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/pay/transactions/chapter3_1.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Pay.Transactions.App.PostHttpMethod {
  export interface JsonDataRequest {
    appid: string
    mchid: string
    description: string
    out_trade_no: string
    time_expire?: string | Date
    attach?: string
    notify_url: string
    amount: {
      total: number
      currency?: 'CNY'
    }
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
  }
  export interface WellformedResponse {
    prepay_id: string
  }
}
namespace WeChatPay.OpenAPI.V3.Pay.Transactions {
  export interface App {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/pay/transactions/chapter3_1.shtml
     */
    (data: App.PostHttpMethod.JsonDataRequest, config?: App.PostHttpMethod.RequestConfig): AxiosPromise<App.PostHttpMethod.WellformedResponse>
    /**
     * APP下单API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/pay/transactions/chapter3_1.shtml
     */
    post(data: App.PostHttpMethod.JsonDataRequest, config?: App.PostHttpMethod.RequestConfig): AxiosPromise<App.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Pay {
  export interface Transactions {
    app: Transactions.App
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface Pay {
    transactions: Pay.Transactions
  }
}
namespace WeChatPay.OpenAPI {
  export interface V3 {
    pay: V3.Pay
  }
}
export interface Wechatpay {
  /**
   * APIv3 endpoint
   */
  v3: WeChatPay.OpenAPI.V3
}

import { BinaryLike } from 'crypto'
export var wxpay: Wechatpay
export var appid: WeChatPay.OpenAPI.V3.Pay.Transactions.App.PostHttpMethod.JsonDataRequest['appid']
export var partnerid: WeChatPay.OpenAPI.V3.Pay.Transactions.App.PostHttpMethod.JsonDataRequest['mchid']
export var merchantPrivateKeyInstance: BinaryLike

// @filename: business.js
import { wxpay, appid, partnerid, merchantPrivateKeyInstance } from './virtual'
// ---cut---
const { Formatter, Rsa } = require('wechatpay-axios-plugin')

wxpay.v3.pay.transactions.app.post({
                            //^^^^
  mchid,
  appid,
  description,
  out_trade_no,
  notify_url,
  amount: { total, currency },
})
.then(({ data: { prepay_id: prepayid } }) => {
  const noncestr = Formatter.nonce();
  const timestamp = '' + Formatter.timestamp();
  return { // [!code hl:12]
    appid,
    partnerid,
    prepayid,
    noncestr,
    timestamp,
    package: 'Sign=WXPay',
    sign: Rsa.sign(
      Formatter.joinedByLineFeed(appid, noncestr, partnerid, prepayid),
      merchantPrivateKeyInstance
    )
  }
})
```
