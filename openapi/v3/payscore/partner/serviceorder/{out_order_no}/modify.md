---
title: 修改订单金额(合作伙伴模式)
description: 完结订单总金额与实际金额不符时，且当服务订单收款状态处于“待支付（USER_PAYING）”时，商户可通过该接口修改订单金额。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3_partner/Offline/apis/chapter6_2_4.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Payscore.Partner.Serviceorder._out_order_no_.Modify.PostHttpMethod {
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
    reason: string
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
    out_order_no: string
  }
  export interface WellformedResponse {
  }
}
namespace WeChatPay.OpenAPI.V3.Payscore.Partner.Serviceorder._out_order_no_ {
  export interface Modify {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3_partner/Offline/apis/chapter6_2_4.shtml
     */
    (data: Modify.PostHttpMethod.JsonDataRequest, config: Modify.PostHttpMethod.RequestConfig): AxiosPromise<Modify.PostHttpMethod.WellformedResponse>
    /**
     * 修改订单金额API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3_partner/Offline/apis/chapter6_2_4.shtml
     */
    post(data: Modify.PostHttpMethod.JsonDataRequest, config: Modify.PostHttpMethod.RequestConfig): AxiosPromise<Modify.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Payscore.Partner.Serviceorder {
  export interface _out_order_no_ {
    modify: _out_order_no_.Modify
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
wxpay.v3.payscore.partner.serviceorder._out_order_no_.modify.post({
//                                                           ^^^^
  service_id,
  sub_mchid,
  post_payments,
  post_discounts,
  total_amount,
  reason,
}, { out_order_no })
.then(({ data, }) => data) // [!code hl:1]
```
