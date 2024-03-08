---
title: 同步订单信息(合作伙伴模式)
description: 由于收款商户进行的某些“线下操作”会导致微信支付侧的订单状态与实际情况不符。例如，用户通过线下付款的方式已经完成支付，而微信支付侧并未支付成功，此时可能导致用户重复支付。因此商户需要通过订单同步接口将订单状态同步给微信支付，修改订单在微信支付系统中的状态。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3_partner/Offline/apis/chapter6_2_7.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Payscore.Partner.Serviceorder._out_order_no_.Sync.PostHttpMethod {
  export interface JsonDataRequest {
    service_id: string
    sub_mchid: string
    type: string
    detail: {
      seq: number
      paid_time: string
      paid_amount: number
    }
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
    out_order_no: string
  }
  export interface WellformedResponse {
  }
}
namespace WeChatPay.OpenAPI.V3.Payscore.Partner.Serviceorder._out_order_no_ {
  export interface Sync {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3_partner/Offline/apis/chapter6_2_7.shtml
     */
    (data: Sync.PostHttpMethod.JsonDataRequest, config: Sync.PostHttpMethod.RequestConfig): AxiosPromise<Sync.PostHttpMethod.WellformedResponse>
    /**
     * 同步订单信息API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3_partner/Offline/apis/chapter6_2_7.shtml
     */
    post(data: Sync.PostHttpMethod.JsonDataRequest, config: Sync.PostHttpMethod.RequestConfig): AxiosPromise<Sync.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Payscore.Partner.Serviceorder {
  export interface _out_order_no_ {
    sync: _out_order_no_.Sync
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
wxpay.v3.payscore.partner.serviceorder._out_order_no_.sync.post({
//                                                         ^^^^
  service_id,
  sub_mchid,
  type,
  detail,
}, { out_order_no })
.then(({ status, }) => status === 204) // [!code hl]
```
