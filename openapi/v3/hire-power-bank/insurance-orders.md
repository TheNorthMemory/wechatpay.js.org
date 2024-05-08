---
title: 创建保险订单
description: 商户可通过该接口创建保险订单。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/docs/merchant/apis/hire-power-bank-insurance/insurance-orders/create-insurance-order.html)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.HirePowerBank.InsuranceOrders.PostHttpMethod {
  export interface JsonDataRequest {
    out_order_no: string
    openid: string
    notify_url: string
    service_id: string
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
  }
  export interface WellformedResponse {
    order_id: string
    out_order_no: string
    openid: string
    max_claim_count: number
    claimed_count: number
    order_receive_time: string
    order_begin_time: string
    order_end_time: string
    order_receive_state: string
  }
}
namespace WeChatPay.OpenAPI.V3.HirePowerBank {
  export interface InsuranceOrders {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/docs/merchant/apis/hire-power-bank-insurance/insurance-orders/create-insurance-order.html
     */
    (data: InsuranceOrders.PostHttpMethod.JsonDataRequest, config?: InsuranceOrders.PostHttpMethod.RequestConfig): AxiosPromise<InsuranceOrders.PostHttpMethod.WellformedResponse>
    /**
     * 创建保险订单
     * @link https://pay.weixin.qq.com/docs/merchant/apis/hire-power-bank-insurance/insurance-orders/create-insurance-order.html
     */
    post(data: InsuranceOrders.PostHttpMethod.JsonDataRequest, config?: InsuranceOrders.PostHttpMethod.RequestConfig): AxiosPromise<InsuranceOrders.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface HirePowerBank {
    insuranceOrders: HirePowerBank.InsuranceOrders
  }
}
namespace WeChatPay.OpenAPI {
  export interface V3 {
    hirePowerBank: V3.HirePowerBank
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
wxpay.v3.hirePowerBank.insuranceOrders.post({
//                                     ^^^^
  out_order_no,
  openid,
  notify_url,
  service_id,
})
.then(
  ({ // [!code hl:23]
    data: {
      order_id,
      out_order_no,
      openid,
      max_claim_count,
      claimed_count,
      order_receive_time,
      order_begin_time,
      order_end_time,
      order_receive_state,
    },
  }) => ({
    order_id,
    out_order_no,
    openid,
    max_claim_count,
    claimed_count,
    order_receive_time,
    order_begin_time,
    order_end_time,
    order_receive_state,
  })
)
```
