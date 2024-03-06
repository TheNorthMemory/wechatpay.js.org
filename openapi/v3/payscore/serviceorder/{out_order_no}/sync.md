---
title: 同步服务订单信息
description: 由于收款商户进行的某些“线下操作”会导致微信支付侧的订单状态与实际情况不符。**前置条件：**同步商户渠道收款成功信息时，即场景类型=“Order_Paid”，订单的状态需为
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [FINISHED:商户完结订单] [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/payscore/chapter3_6.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Payscore.Serviceorder._out_order_no_.Sync.PostHttpMethod {
  export interface JsonDataRequest {
    appid: string
    service_id: string
    type: string
    detail: {
      paid_time: string
    }
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
  export interface Sync {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/payscore/chapter3_6.shtml
     */
    (data: Sync.PostHttpMethod.JsonDataRequest, config: Sync.PostHttpMethod.RequestConfig): AxiosPromise<Sync.PostHttpMethod.WellformedResponse>
    /**
     * 同步服务订单信息API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/payscore/chapter3_6.shtml
     */
    post(data: Sync.PostHttpMethod.JsonDataRequest, config: Sync.PostHttpMethod.RequestConfig): AxiosPromise<Sync.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Payscore.Serviceorder {
  export interface _out_order_no_ {
    sync: _out_order_no_.Sync
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
wxpay.v3.payscore.serviceorder._out_order_no_.sync.post({
//                                                 ^^^^
  appid,
  service_id,
  type,
  detail,
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
