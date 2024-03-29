---
title: 创建支付分计划
description: 商户可以基于有按计划确认权限的服务，通过此接口创建支付分计划。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/docs/merchant/apis/payscore-plan/pay-score-plan/create-pay-score-plan.html)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Payscore.Plan.PayscorePlans.PostHttpMethod {
  export interface JsonDataRequest {
    service_id: string
    appid: string
    plan_name: string
    plan_duration: number
    deduction_quantity: number
    total_original_price: number
    total_actual_price: number
    plan_detail_list: {
      original_price: number
      plan_discount_description: string
      actual_price: number
      plan_detail_name: string
    }[]
    merchant_plan_no: string
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
  }
  export interface WellformedResponse {
    plan_id: string
    service_id: string
    mchid: string
    appid: string
    merchant_plan_no: string
    plan_name: string
    plan_duration: number
    plan_state: string
    total_original_price: number
    deduction_quantity: number
    total_actual_price: number
    plan_detail_list: {
      plan_detail_no: number
      plan_detail_name: string
      original_price: number
      plan_discount_description: string
      actual_price: number
    }[]
    stop_mchid: string
    stop_time: string | Date
  }
}
namespace WeChatPay.OpenAPI.V3.Payscore.Plan {
  export interface PayscorePlans {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/docs/merchant/apis/payscore-plan/pay-score-plan/create-pay-score-plan.html
     */
    (data: PayscorePlans.PostHttpMethod.JsonDataRequest, config?: PayscorePlans.PostHttpMethod.RequestConfig): AxiosPromise<PayscorePlans.PostHttpMethod.WellformedResponse>
    /**
     * 创建支付分计划
     * @link https://pay.weixin.qq.com/docs/merchant/apis/payscore-plan/pay-score-plan/create-pay-score-plan.html
     */
    post(data: PayscorePlans.PostHttpMethod.JsonDataRequest, config?: PayscorePlans.PostHttpMethod.RequestConfig): AxiosPromise<PayscorePlans.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Payscore {
  export interface Plan {
    payscorePlans: Plan.PayscorePlans
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface Payscore {
    plan: Payscore.Plan
  }
}
namespace WeChatPay.OpenAPI {
  export interface V3 {
    payscore: V3.Payscore
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
wxpay.v3.payscore.plan.payscorePlans.post({
//                                   ^^^^
  service_id,
  appid,
  plan_name,
  plan_duration,
  deduction_quantity,
  total_original_price,
  total_actual_price,
  plan_detail_list,
  merchant_plan_no,
})
.then(
  ({ // [!code hl:33]
    data: {
      plan_id,
      service_id,
      mchid,
      appid,
      merchant_plan_no,
      plan_name,
      plan_duration,
      plan_state,
      total_original_price,
      deduction_quantity,
      total_actual_price,
      plan_detail_list,
      stop_mchid,
      stop_time,
    },
  }) => ({
    plan_id,
    service_id,
    mchid,
    appid,
    merchant_plan_no,
    plan_name,
    plan_duration,
    plan_state,
    total_original_price,
    deduction_quantity,
    total_actual_price,
    plan_detail_list,
    stop_mchid,
    stop_time,
  })
)
```
