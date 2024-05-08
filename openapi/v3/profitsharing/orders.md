---
title: 请求分账
description: 微信订单支付成功后，服务商代特约商户发起分账请求，将结算后的资金分到分账接收方
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3_partner/apis/chapter8_1_1.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Profitsharing.Orders.PostHttpMethod {
  export interface JsonDataRequest {
    sub_mchid: string
    appid: string
    sub_appid: string
    transaction_id: string
    out_order_no: string
    receivers: {
      type: string
      account: string
      name: string
      amount: number
      description: string
    }[]
    unfreeze_unsplit: boolean
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
    headers: {
      'Wechatpay-Serial': string
    }
  }
  export interface WellformedResponse {
    sub_mchid: string
    transaction_id: string
    out_order_no: string
    order_id: string
    state: string
    receivers: {
      amount: number
      description: string
      type: string
      account: string
      result: string
      fail_reason: string
      detail_id: string
      create_time: string
      finish_time: string
    }[]
  }
}
namespace WeChatPay.OpenAPI.V3.Profitsharing {
  export interface Orders {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3_partner/apis/chapter8_1_1.shtml
     */
    (data: Orders.PostHttpMethod.JsonDataRequest, config: Orders.PostHttpMethod.RequestConfig): AxiosPromise<Orders.PostHttpMethod.WellformedResponse>
    /**
     * 请求分账API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3_partner/apis/chapter8_1_1.shtml
     */
    post(data: Orders.PostHttpMethod.JsonDataRequest, config: Orders.PostHttpMethod.RequestConfig): AxiosPromise<Orders.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface Profitsharing {
    orders: Profitsharing.Orders
  }
}
namespace WeChatPay.OpenAPI {
  export interface V3 {
    profitsharing: V3.Profitsharing
  }
}
export interface Wechatpay {
  /**
   * APIv3 endpoint
   */
  v3: WeChatPay.OpenAPI.V3
}
export var wxpay: Wechatpay
// @filename: business.js
import { wxpay } from './virtual'
// ---cut---
wxpay.v3.profitsharing.orders.post({
//                            ^^^^
  sub_mchid,
  appid,
  sub_appid,
  transaction_id,
  out_order_no,
  receivers,
  unfreeze_unsplit,
}, { headers, })
.then(
  ({ // [!code hl:17]
    data: {
      sub_mchid,
      transaction_id,
      out_order_no,
      order_id,
      state,
      receivers,
    },
  }) => ({
    sub_mchid,
    transaction_id,
    out_order_no,
    order_id,
    state,
    receivers,
  })
)
```
