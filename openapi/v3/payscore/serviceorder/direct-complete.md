---
title: 创单结单合并
description: 该接口适用于无需微信支付分做订单风控判断的业务场景，在服务完成后，通过该接口对用户进行免密代扣。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/payscore/chapter3_9.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Payscore.Serviceorder.DirectComplete.PostHttpMethod {
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
    service_introduction: string
    attach: string
    notify_url: string
    openid: string
    total_amount: number
    profit_sharing: boolean
    goods_tag: string
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
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
    mchid: string
    order_id: string
    state: string
    state_description: string
    attach: string
    notify_url: string
    total_amount: number
  }
}
namespace WeChatPay.OpenAPI.V3.Payscore.Serviceorder {
  export interface DirectComplete {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/payscore/chapter3_9.shtml
     */
    (data: DirectComplete.PostHttpMethod.JsonDataRequest, config?: DirectComplete.PostHttpMethod.RequestConfig): AxiosPromise<DirectComplete.PostHttpMethod.WellformedResponse>
    /**
     * 创单结单合并API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/payscore/chapter3_9.shtml
     */
    post(data: DirectComplete.PostHttpMethod.JsonDataRequest, config?: DirectComplete.PostHttpMethod.RequestConfig): AxiosPromise<DirectComplete.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Payscore {
  export interface Serviceorder {
    directComplete: Serviceorder.DirectComplete
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
wxpay.v3.payscore.serviceorder.directComplete.post({
//                                            ^^^^
  out_order_no,
  appid,
  service_id,
  post_payments,
  post_discounts,
  time_range,
  location,
  service_introduction,
  attach,
  notify_url,
  openid,
  total_amount,
  profit_sharing,
  goods_tag,
}, { out_order_no })
.then(
  ({ // [!code hl:35]
    data: {
      out_order_no,
      appid,
      service_id,
      post_payments,
      post_discounts,
      time_range,
      location,
      service_introduction,
      mchid,
      order_id,
      state,
      state_description,
      attach,
      notify_url,
      total_amount,
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
    mchid,
    order_id,
    state,
    state_description,
    attach,
    notify_url,
    total_amount,
  })
)
```
