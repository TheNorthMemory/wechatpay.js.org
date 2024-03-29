---
title: 创建用户的签约计划详情对应的服务订单
description: 根据用户签约的计划和对应要服务的计划详情序号，创建服务订单。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/docs/merchant/apis/payscore-plan/service-order/create-service-order.html)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Payscore.SignPlan.Serviceorder.PostHttpMethod {
  export interface JsonDataRequest {
    service_id: string
    sign_plan_id: string
    plan_detail_no: number
    appid: string
    openid: string
    notify_url: string
    service_introduction: string
    time_range: {
      start_time: string
      end_time: string
      start_time_remark: string
      end_time_remark: string
    }
    location: {
      start_location: string
      end_location: string
    }
    attach: string
    out_trade_no: string
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
  }
  export interface WellformedResponse {
    out_order_no: string
    service_id: string
    appid: string
    mchid: string
    service_introduction: string
    state: string
    state_description: string
    post_payments: {
      name: string
      amount: number
      description: string
    }[]
    post_discounts: {
      name: string
      amount: number
    }[]
    risk_fund: {
      amount: number
    }
    time_range: {
      start_time: string
      end_time: string
      start_time_remark: string
      end_time_remark: string
    }
    location: {
      start_location: string
      end_location: string
    }
    attach: string
    notify_url: string
    order_id: string
  }
}
namespace WeChatPay.OpenAPI.V3.Payscore.SignPlan {
  export interface Serviceorder {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/docs/merchant/apis/payscore-plan/service-order/create-service-order.html
     */
    (data: Serviceorder.PostHttpMethod.JsonDataRequest, config?: Serviceorder.PostHttpMethod.RequestConfig): AxiosPromise<Serviceorder.PostHttpMethod.WellformedResponse>
    /**
     * 创建用户的签约计划详情对应的服务订单
     * @link https://pay.weixin.qq.com/docs/merchant/apis/payscore-plan/service-order/create-service-order.html
     */
    post(data: Serviceorder.PostHttpMethod.JsonDataRequest, config?: Serviceorder.PostHttpMethod.RequestConfig): AxiosPromise<Serviceorder.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Payscore {
  export interface SignPlan {
    serviceorder: SignPlan.Serviceorder
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
wxpay.v3.payscore.signPlan.serviceorder.post({
//                                      ^^^^
  service_id,
  sign_plan_id,
  plan_detail_no,
  appid,
  openid,
  notify_url,
  service_introduction,
  time_range,
  location,
  attach,
  out_trade_no,
})
.then(
  ({ // [!code hl:35]
    data: {
      out_order_no,
      service_id,
      appid,
      mchid,
      service_introduction,
      state,
      state_description,
      post_payments,
      post_discounts,
      risk_fund,
      time_range,
      location,
      attach,
      notify_url,
      order_id,
    },
  }) => ({
    out_order_no,
    service_id,
    appid,
    mchid,
    service_introduction,
    state,
    state_description,
    post_payments,
    post_discounts,
    risk_fund,
    time_range,
    location,
    attach,
    notify_url,
    order_id,
  })
)
```
