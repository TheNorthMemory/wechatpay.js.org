---
title: 取消用户的签约计划
description: 用于商户停止用户的签约计划，必须是该签约计划的创建方商户才能取消。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/docs/merchant/apis/payscore-plan/user-sign-plan/stop-user-sign-plan.html)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Payscore.SignPlan.UserSignPlans.MerchantSignPlanNo._merchant_sign_plan_no_.Stop.PostHttpMethod {
  export interface JsonDataRequest {
    stop_reason: string
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
    merchant_sign_plan_no: string
  }
  export interface WellformedResponse {
    sign_plan_id: string
    openid: string
    service_id: string
    mchid: string
    appid: string
    merchant_sign_plan_no: string
    merchant_callback_url: string
    plan_id: string
    going_detail_no: number
    sign_state: string
    cancel_sign_time: string | Date
    cancel_sign_type: string
    cancel_reason: string
    plan_name: string
    plan_over_time: string | Date
    total_origin_price: number
    deduction_quantity: number
    total_actual_price: number
    signed_detail_list: {
      plan_detail_no: number
      original_price: number
      plan_discount_description: string
      actual_price: number
      plan_detail_state: string
      order_id: string
      merchant_plan_detail_no: string
      plan_detail_name: string
      actual_pay_price: number
      use_time: string
      complete_time: string
      cancel_time: string
    }[]
    sign_time: string | Date
  }
}
namespace WeChatPay.OpenAPI.V3.Payscore.SignPlan.UserSignPlans.MerchantSignPlanNo._merchant_sign_plan_no_ {
  export interface Stop {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/docs/merchant/apis/payscore-plan/user-sign-plan/stop-user-sign-plan.html
     */
    (data: Stop.PostHttpMethod.JsonDataRequest, config: Stop.PostHttpMethod.RequestConfig): AxiosPromise<Stop.PostHttpMethod.WellformedResponse>
    /**
     * 直连商户取消用户的签约计划
     * @link https://pay.weixin.qq.com/docs/merchant/apis/payscore-plan/user-sign-plan/stop-user-sign-plan.html
     */
    post(data: Stop.PostHttpMethod.JsonDataRequest, config: Stop.PostHttpMethod.RequestConfig): AxiosPromise<Stop.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Payscore.SignPlan.UserSignPlans.MerchantSignPlanNo {
  export interface _merchant_sign_plan_no_ {
    stop: _merchant_sign_plan_no_.Stop
  }
}
namespace WeChatPay.OpenAPI.V3.Payscore.SignPlan.UserSignPlans {
  export interface MerchantSignPlanNo {
    _merchant_sign_plan_no_: MerchantSignPlanNo._merchant_sign_plan_no_
  }
}
namespace WeChatPay.OpenAPI.V3.Payscore.SignPlan {
  export interface UserSignPlans {
    merchantSignPlanNo: UserSignPlans.MerchantSignPlanNo
  }
}
namespace WeChatPay.OpenAPI.V3.Payscore {
  export interface SignPlan {
    userSignPlans: SignPlan.UserSignPlans
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface Payscore {
    signPlan: Payscore.SignPlan
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
wxpay.v3.payscore.signPlan.userSignPlans.merchantSignPlanNo._merchant_sign_plan_no_.stop.post({
//                                                                                       ^^^^
  stop_reason,
}, { merchant_sign_plan_no })
.then(
  ({ // [!code hl:45]
    data: {
      sign_plan_id,
      openid,
      service_id,
      mchid,
      appid,
      merchant_sign_plan_no,
      merchant_callback_url,
      plan_id,
      going_detail_no,
      sign_state,
      cancel_sign_time,
      cancel_sign_type,
      cancel_reason,
      plan_name,
      plan_over_time,
      total_origin_price,
      deduction_quantity,
      total_actual_price,
      signed_detail_list,
      sign_time,
    },
  }) => ({
    sign_plan_id,
    openid,
    service_id,
    mchid,
    appid,
    merchant_sign_plan_no,
    merchant_callback_url,
    plan_id,
    going_detail_no,
    sign_state,
    cancel_sign_time,
    cancel_sign_type,
    cancel_reason,
    plan_name,
    plan_over_time,
    total_origin_price,
    deduction_quantity,
    total_actual_price,
    signed_detail_list,
    sign_time,
  })
)
```
