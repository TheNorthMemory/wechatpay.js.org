---
title: 停止支付分计划(合作伙伴模式)
description: 商户通过此接口停止正在生效中的支付分计划，商户只能停止自己创建的支付分计划。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/docs/partner/apis/partner-payscore-plan/partner-pay-score-plan/stop-partner-pay-score-plan.html)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Payscore.Plan.Partner.PayscorePlans.MerchantPlanNo._merchant_plan_no_.Stop.PostHttpMethod {
  export interface JsonDataRequest {
    sub_mchid: string
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
    merchant_plan_no: string
  }
  export interface WellformedResponse {
    plan_id: string
    service_id: string
    mchid: string
    sub_mchid: string
    appid: string
    sub_appid: string
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
namespace WeChatPay.OpenAPI.V3.Payscore.Plan.Partner.PayscorePlans.MerchantPlanNo._merchant_plan_no_ {
  export interface Stop {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/docs/partner/apis/partner-payscore-plan/partner-pay-score-plan/stop-partner-pay-score-plan.html
     */
    (data: Stop.PostHttpMethod.JsonDataRequest, config: Stop.PostHttpMethod.RequestConfig): AxiosPromise<Stop.PostHttpMethod.WellformedResponse>
    /**
     * 停止支付分计划
     * @link https://pay.weixin.qq.com/docs/partner/apis/partner-payscore-plan/partner-pay-score-plan/stop-partner-pay-score-plan.html
     */
    post(data: Stop.PostHttpMethod.JsonDataRequest, config: Stop.PostHttpMethod.RequestConfig): AxiosPromise<Stop.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Payscore.Plan.Partner.PayscorePlans.MerchantPlanNo {
  export interface _merchant_plan_no_ {
    stop: _merchant_plan_no_.Stop
  }
}
namespace WeChatPay.OpenAPI.V3.Payscore.Plan.Partner.PayscorePlans {
  export interface MerchantPlanNo {
    _merchant_plan_no_: MerchantPlanNo._merchant_plan_no_
  }
}
namespace WeChatPay.OpenAPI.V3.Payscore.Plan.Partner {
  export interface PayscorePlans {
    merchantPlanNo: PayscorePlans.MerchantPlanNo
  }
}
namespace WeChatPay.OpenAPI.V3.Payscore.Plan {
  export interface Partner {
    payscorePlans: Partner.PayscorePlans
  }
}
namespace WeChatPay.OpenAPI.V3.Payscore {
  export interface Plan {
    partner: Plan.Partner
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
wxpay.v3.payscore.plan.partner.payscorePlans.merchantPlanNo._merchant_plan_no_.stop.post({
//                                                                                  ^^^^
  sub_mchid,
}, { merchant_plan_no })
.then(
  ({ // [!code hl:37]
    data: {
      plan_id,
      service_id,
      mchid,
      sub_mchid,
      appid,
      sub_appid,
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
    sub_mchid,
    appid,
    sub_appid,
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
