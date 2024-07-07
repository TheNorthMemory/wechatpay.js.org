---
title: 下发服务费用待处理消息(合作伙伴模式)
description: 商户系统请求支付分系统，下发服务费用待处理消息; 一笔服务订单仅可以发送一次服务费用待处理消息;
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/docs/partner/apis/partner-weixin-pay-score/partner-service-order/send-partner-order-pending-message.html)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Payscore.Partner.Serviceorder._out_order_no_.SendPendingmessage.PostHttpMethod {
  export interface JsonDataRequest {
    service_id: string
    sub_mchid: string
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
    prepaid_time: string
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
    out_order_no: string
  }
  export interface WellformedResponse {
  }
}
namespace WeChatPay.OpenAPI.V3.Payscore.Partner.Serviceorder._out_order_no_ {
  export interface SendPendingmessage {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/docs/partner/apis/partner-weixin-pay-score/partner-service-order/send-partner-order-pending-message.html
     */
    (data: SendPendingmessage.PostHttpMethod.JsonDataRequest, config: SendPendingmessage.PostHttpMethod.RequestConfig): AxiosPromise<SendPendingmessage.PostHttpMethod.WellformedResponse>
    /**
     * 下发服务费用待处理消息
     * @link https://pay.weixin.qq.com/docs/partner/apis/partner-weixin-pay-score/partner-service-order/send-partner-order-pending-message.html
     */
    post(data: SendPendingmessage.PostHttpMethod.JsonDataRequest, config: SendPendingmessage.PostHttpMethod.RequestConfig): AxiosPromise<SendPendingmessage.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Payscore.Partner.Serviceorder {
  export interface _out_order_no_ {
    sendPendingmessage: _out_order_no_.SendPendingmessage
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
wxpay.v3.payscore.partner.serviceorder._out_order_no_.sendPendingmessage.post({
//                                                                       ^^^^
  service_id,
  sub_mchid,
  post_payments,
  post_discounts,
  total_amount,
  prepaid_time,
}, { out_order_no })
.then(({ status, }) => status === 204) // [!code hl]
```
