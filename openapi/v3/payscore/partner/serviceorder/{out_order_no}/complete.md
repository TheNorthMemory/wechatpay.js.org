---
title: 完结支付分订单(合作伙伴模式)
description: 完结微信支付分订单。用户使用服务完成后，商户可通过此接口完结订单。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3_partner/Offline/apis/chapter6_2_5.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Payscore.Partner.Serviceorder._out_order_no_.Complete.PostHttpMethod {
  export interface JsonDataRequest {
    service_id: string
    sub_mchid: string
    post_payments: {
      name: string
      description: string
      amount: number
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
      start_time_remark: string
      end_time: string
      end_time_remark: string
    }
    location: {
      start_location: string
      end_location: string
    }
    profit_sharing: boolean
    complete_time: string
    goods_tag: string
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
    out_order_no: string
  }
  export interface WellformedResponse {
  }
}
namespace WeChatPay.OpenAPI.V3.Payscore.Partner.Serviceorder._out_order_no_ {
  export interface Complete {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3_partner/Offline/apis/chapter6_2_5.shtml
     */
    (data: Complete.PostHttpMethod.JsonDataRequest, config: Complete.PostHttpMethod.RequestConfig): AxiosPromise<Complete.PostHttpMethod.WellformedResponse>
    /**
     * 完结支付分订单API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3_partner/Offline/apis/chapter6_2_5.shtml
     */
    post(data: Complete.PostHttpMethod.JsonDataRequest, config: Complete.PostHttpMethod.RequestConfig): AxiosPromise<Complete.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Payscore.Partner.Serviceorder {
  export interface _out_order_no_ {
    complete: _out_order_no_.Complete
  }
}
namespace WeChatPay.OpenAPI.V3.Payscore.Partner {
  export interface Serviceorder {
    _out_order_no_: Serviceorder._out_order_no_
  }
}
namespace WeChatPay.OpenAPI.V3.Payscore {
  export interface Partner {
    serviceorder: Partner.Serviceorder
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface Payscore {
    partner: Payscore.Partner
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
wxpay.v3.payscore.partner.serviceorder._out_order_no_.complete.post({
//                                                             ^^^^
  service_id,
  sub_mchid,
  post_payments,
  post_discounts,
  total_amount,
  time_range,
  location,
  profit_sharing,
  complete_time,
  goods_tag,
}, { out_order_no })
.then(({ status, }) => status === 204) // [!code hl]
```
