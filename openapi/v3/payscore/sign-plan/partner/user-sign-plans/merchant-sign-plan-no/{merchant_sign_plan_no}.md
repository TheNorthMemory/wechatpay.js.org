---
title: 查询用户的签约计划(合作伙伴模式)
description: 用于商户查询用户的签约计划，必须是该签约计划的创建方商户才能查询。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/docs/partner/apis/partner-payscore-plan/partner-user-sign-plan/query-partner-user-sign-plan.html)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Payscore.SignPlan.Partner.UserSignPlans.MerchantSignPlanNo._merchant_sign_plan_no_.GetHttpMethod {
  export interface RequestConfig extends AxiosRequestConfig {
    merchant_sign_plan_no: string
    params: {
      sub_mchid: string
    }
  }
  export interface WellformedResponse {
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
}
namespace WeChatPay.OpenAPI.V3.Payscore.SignPlan.Partner.UserSignPlans.MerchantSignPlanNo {
  export interface _merchant_sign_plan_no_ {
    /**
     * 查询用户的签约计划
     * @link https://pay.weixin.qq.com/docs/partner/apis/partner-payscore-plan/partner-user-sign-plan/query-partner-user-sign-plan.html
     */
    get(config: _merchant_sign_plan_no_.GetHttpMethod.RequestConfig): AxiosPromise<_merchant_sign_plan_no_.GetHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Payscore.SignPlan.Partner.UserSignPlans {
  export interface MerchantSignPlanNo {
    _merchant_sign_plan_no_: MerchantSignPlanNo._merchant_sign_plan_no_
  }
}
namespace WeChatPay.OpenAPI.V3.Payscore.SignPlan.Partner {
  export interface UserSignPlans {
    merchantSignPlanNo: UserSignPlans.MerchantSignPlanNo
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
wxpay.v3.payscore.signPlan.partner.userSignPlans.merchantSignPlanNo._merchant_sign_plan_no_.get({
//                                                                                          ^^^
  merchant_sign_plan_no,
  params,
})
.then(
  ({ // [!code hl:51]
    data: {
      sign_plan_id,
      openid,
      sub_openid,
      service_id,
      mchid,
      sub_mchid,
      appid,
      sub_appid,
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
    sub_openid,
    service_id,
    mchid,
    sub_mchid,
    appid,
    sub_appid,
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
