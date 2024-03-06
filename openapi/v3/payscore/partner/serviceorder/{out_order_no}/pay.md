---
title: 商户发起催收扣款(合作伙伴模式)
description: 当微信支付分订单支付状态处于“待支付”时，商户可使用该接口向用户发起收款。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3_partner/Offline/apis/chapter6_2_6.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Payscore.Partner.Serviceorder._out_order_no_.Pay.PostHttpMethod {
  export interface JsonDataRequest {
    service_id: string
    sub_mchid: string
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
    out_order_no: string
  }
  export interface WellformedResponse {
  }
}
namespace WeChatPay.OpenAPI.V3.Payscore.Partner.Serviceorder._out_order_no_ {
  export interface Pay {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3_partner/Offline/apis/chapter6_2_6.shtml
     */
    (data: Pay.PostHttpMethod.JsonDataRequest, config: Pay.PostHttpMethod.RequestConfig): AxiosPromise<Pay.PostHttpMethod.WellformedResponse>
    /**
     * 商户发起催收扣款API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3_partner/Offline/apis/chapter6_2_6.shtml
     */
    post(data: Pay.PostHttpMethod.JsonDataRequest, config: Pay.PostHttpMethod.RequestConfig): AxiosPromise<Pay.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Payscore.Partner.Serviceorder {
  export interface _out_order_no_ {
    pay: _out_order_no_.Pay
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
wxpay.v3.payscore.partner.serviceorder._out_order_no_.pay.post({
//                                                        ^^^^
  service_id,
  sub_mchid,
}, { out_order_no })
.then(({ data, }) => data) // [!code hl:1]
```
