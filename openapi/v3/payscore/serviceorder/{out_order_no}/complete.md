---
title: 完结支付分订单
description: 完结微信支付分订单。用户使用服务完成后，商户可通过此接口完结订单。**前置条件：**服务订单状态为“进行中”且订单状态说明需为
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [USER_CONFIRM:用户确认] [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/payscore/chapter3_5.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Payscore.Serviceorder._out_order_no_.Complete.PostHttpMethod {
  export interface JsonDataRequest {
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
    total_amount: number
    profit_sharing: boolean
    goods_tag: string
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
  export interface Complete {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/payscore/chapter3_5.shtml
     */
    (data: Complete.PostHttpMethod.JsonDataRequest, config: Complete.PostHttpMethod.RequestConfig): AxiosPromise<Complete.PostHttpMethod.WellformedResponse>
    /**
     * 完结支付分订单API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/payscore/chapter3_5.shtml
     */
    post(data: Complete.PostHttpMethod.JsonDataRequest, config: Complete.PostHttpMethod.RequestConfig): AxiosPromise<Complete.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Payscore.Serviceorder {
  export interface _out_order_no_ {
    complete: _out_order_no_.Complete
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
wxpay.v3.payscore.serviceorder._out_order_no_.complete.post({
//                                                     ^^^^
  out_order_no,
  appid,
  service_id,
  post_payments,
  post_discounts,
  time_range,
  location,
  total_amount,
  profit_sharing,
  goods_tag,
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
