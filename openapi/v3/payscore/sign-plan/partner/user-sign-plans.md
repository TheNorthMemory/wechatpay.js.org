---
title: 创建用户的签约计划(合作伙伴模式)
description: 商户通过此接口基于商户已创建且正常进行中的支付分计划，创建用户的签约计划以供用户签约。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/docs/partner/apis/partner-payscore-plan/partner-user-sign-plan/create-partner-user-sign-plan.html)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Payscore.SignPlan.Partner.UserSignPlans.PostHttpMethod {
  export interface JsonDataRequest {
    service_id: string
    plan_id: string
    appid: string
    sub_mchid: string
    sub_appid: string
    openid: string
    sub_openid: string
    merchant_sign_plan_no: string
    notify_url: string
    sign_plan_detail: {
      plan_detail_no: number
      merchant_plan_detail_no: string
    }[]
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
  }
  export interface WellformedResponse {
    sign_plan: {
      sign_plan_id: string
      openid: string
      sub_openid: string
      service_id: string
      mchid: string
      sub_mchid: string
      appid: string
      sub_appid: string
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
    package: string
  }
}
namespace WeChatPay.OpenAPI.V3.Payscore.SignPlan.Partner {
  export interface UserSignPlans {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/docs/partner/apis/partner-payscore-plan/partner-user-sign-plan/create-partner-user-sign-plan.html
     */
    (data: UserSignPlans.PostHttpMethod.JsonDataRequest, config?: UserSignPlans.PostHttpMethod.RequestConfig): AxiosPromise<UserSignPlans.PostHttpMethod.WellformedResponse>
    /**
     * 创建用户的签约计划
     * @link https://pay.weixin.qq.com/docs/partner/apis/partner-payscore-plan/partner-user-sign-plan/create-partner-user-sign-plan.html
     */
    post(data: UserSignPlans.PostHttpMethod.JsonDataRequest, config?: UserSignPlans.PostHttpMethod.RequestConfig): AxiosPromise<UserSignPlans.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Payscore.SignPlan {
  export interface Partner {
    userSignPlans: Partner.UserSignPlans
  }
}
namespace WeChatPay.OpenAPI.V3.Payscore {
  export interface SignPlan {
    partner: SignPlan.Partner
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
wxpay.v3.payscore.signPlan.partner.userSignPlans.post({
//                                               ^^^^
  service_id,
  plan_id,
  appid,
  sub_mchid,
  sub_appid,
  openid,
  sub_openid,
  merchant_sign_plan_no,
  notify_url,
  sign_plan_detail,
})
.then(
  ({ // [!code hl:9]
    data: {
      sign_plan,
      package: packageStr,
    },
  }) => ({
    sign_plan,
    package: packageStr,
  })
)
```
