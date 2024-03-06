---
title: 修改订单金额
description: 完结订单总金额与实际金额不符时，可通过该接口修改订单金额。前置条件：服务订单支付状态为待支付
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/payscore/chapter3_4.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Payscore.Serviceorder._out_order_no_.Modify.PostHttpMethod {
  export interface JsonDataRequest {
    appid: string
    service_id: string
    post_payments: {
      name: string
      amount: number
      description: string
      count: number
    }[]
    post_discounts: {
      name: string
      description: string
      amount: number
      count: number
    }[]
    total_amount: number
    reason: string
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
    out_order_no: string
  }
  export interface WellformedResponse {
    out_order_no: string
    appid: string
    service_id: string
    post_payments: {
      name: string
      amount: number
      description: string
      count: number
    }[]
    post_discounts: {
      name: string
      description: string
      amount: number
      count: number
    }[]
    time_range: {
      start_time: string
      start_time_remark: string
      end_time: string
      end_time_remark: string
    }
    location: {
      start_location: string
      end_location: string
    }
    service_introduction: string
    risk_fund: {
      name: string
      amount: number
      description: string
    }
    attach: string
    notify_url: string
    mchid: string
    state: string
    state_description: string
    order_id: string
    total_amount: number
    need_collection: boolean
    collection: {
      state: string
      total_amount: number
      paying_amount: number
      paid_amount: number
      details: {
        seq: number
        amount: number
        paid_type: string
        paid_time: string
        transaction_id: string
        promotion_detail: {
          coupon_id: string
          name: string
          scope: string
          type: string
          amount: number
          stock_id: string
          wechatpay_contribute: number
          merchant_contribute: number
          other_contribute: number
          currency: string
          goods_detail: {
            goods_id: string
            quantity: number
            unit_price: number
            discount_amount: number
            goods_remark: string
          }[]
        }[]
      }[]
    }
  }
}
namespace WeChatPay.OpenAPI.V3.Payscore.Serviceorder._out_order_no_ {
  export interface Modify {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/payscore/chapter3_4.shtml
     */
    (data: Modify.PostHttpMethod.JsonDataRequest, config: Modify.PostHttpMethod.RequestConfig): AxiosPromise<Modify.PostHttpMethod.WellformedResponse>
    /**
     * 修改订单金额API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/payscore/chapter3_4.shtml
     */
    post(data: Modify.PostHttpMethod.JsonDataRequest, config: Modify.PostHttpMethod.RequestConfig): AxiosPromise<Modify.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Payscore.Serviceorder {
  export interface _out_order_no_ {
    modify: _out_order_no_.Modify
  }
}
namespace WeChatPay.OpenAPI.V3.Payscore {
  export interface Serviceorder {
    _out_order_no_: Serviceorder._out_order_no_
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface Payscore {
    serviceorder: Payscore.Serviceorder
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
wxpay.v3.payscore.serviceorder._out_order_no_.modify.post({
//                                                   ^^^^
  appid,
  service_id,
  post_payments,
  post_discounts,
  total_amount,
  reason,
}, { out_order_no })
.then(
  ({ // [!code hl:41]
    data: {
      out_order_no,
      appid,
      service_id,
      post_payments,
      post_discounts,
      time_range,
      location,
      service_introduction,
      risk_fund,
      attach,
      notify_url,
      mchid,
      state,
      state_description,
      order_id,
      total_amount,
      need_collection,
      collection,
    },
  }) => ({
    out_order_no,
    appid,
    service_id,
    post_payments,
    post_discounts,
    time_range,
    location,
    service_introduction,
    risk_fund,
    attach,
    notify_url,
    mchid,
    state,
    state_description,
    order_id,
    total_amount,
    need_collection,
    collection,
  })
)
```
