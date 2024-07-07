---
title: 完结支付分订单
description: 完结微信支付分订单。用户使用服务完成后，商户可通过此接口完结订单。**前置条件：**服务订单状态为“进行中”且订单状态说明需为
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [USER_CONFIRM:用户确认] [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/payscore/chapter3_5.shtml) [官方文档](https://pay.weixin.qq.com/docs/merchant/apis/weixin-pay-score/service-order/complete-service-order.html)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Payscore.Serviceorder._out_order_no_.Complete.PostHttpMethod {
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
    time_range: {
      start_time: string
      end_time: string
      start_time_remark: string
      end_time_remark: string
    }
    location: {
      end_location: string
    }
    profit_sharing: boolean
    goods_tag: string
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
    out_order_no: string
  }
  export interface WellformedResponse {
    appid: string
    mchid: string
    out_order_no: string
    service_id: string
    service_introduction: string
    state: string
    state_description: string
    total_amount: number
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
    risk_fund: {
      name: string
      amount: number
      description: string
    }
    time_range: {
      start_time: string
      end_time: string
      start_time_remark: string
      end_time_remark: string
    }
    location: {
      end_location: string
    }
    order_id: string
    need_collection: boolean
  }
}
namespace WeChatPay.OpenAPI.V3.Payscore.Serviceorder._out_order_no_ {
  export interface Complete {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/docs/merchant/apis/weixin-pay-score/service-order/complete-service-order.html
     */
    (data: Complete.PostHttpMethod.JsonDataRequest, config: Complete.PostHttpMethod.RequestConfig): AxiosPromise<Complete.PostHttpMethod.WellformedResponse>
    /**
     * 完结支付分订单API
     * @link https://pay.weixin.qq.com/docs/merchant/apis/weixin-pay-score/service-order/complete-service-order.html
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
  appid,
  service_id,
  post_payments,
  post_discounts,
  total_amount,
  time_range,
  location,
  profit_sharing,
  goods_tag,
}, { out_order_no })
.then(
  ({ // [!code hl:35]
    data: {
      appid,
      mchid,
      out_order_no,
      service_id,
      service_introduction,
      state,
      state_description,
      total_amount,
      post_payments,
      post_discounts,
      risk_fund,
      time_range,
      location,
      order_id,
      need_collection,
    },
  }) => ({
    appid,
    mchid,
    out_order_no,
    service_id,
    service_introduction,
    state,
    state_description,
    total_amount,
    post_payments,
    post_discounts,
    risk_fund,
    time_range,
    location,
    order_id,
    need_collection,
  })
)
```
