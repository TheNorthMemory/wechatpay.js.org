---
title: 收付通子商户申请绑定支付分服务(合作伙伴模式)
description: 已接入收付通的商户，在已完成支付分权限开通及服务入驻后，可通过该能力为关联的子商户完成与支付分服务的绑定
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3_partner/Offline/apis/chapter6_2_13.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Payscore.Partner.ServiceAccountApplications.PostHttpMethod {
  export interface JsonDataRequest {
    service_id: string
    appid: string
    sub_mchid: string
    sub_appid: string
    out_apply_no: string
    result_notify_url: string
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
  }
  export interface WellformedResponse {
    service_id: string
    mchid: string
    appid: string
    sub_mchid: string
    sub_appid: string
    out_apply_no: string
    result_notify_url: string
    apply_state: string
    reject_reason: string
  }
}
namespace WeChatPay.OpenAPI.V3.Payscore.Partner {
  export interface ServiceAccountApplications {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3_partner/Offline/apis/chapter6_2_13.shtml
     */
    (data: ServiceAccountApplications.PostHttpMethod.JsonDataRequest, config?: ServiceAccountApplications.PostHttpMethod.RequestConfig): AxiosPromise<ServiceAccountApplications.PostHttpMethod.WellformedResponse>
    /**
     * 收付通子商户申请绑定支付分服务
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3_partner/Offline/apis/chapter6_2_13.shtml
     */
    post(data: ServiceAccountApplications.PostHttpMethod.JsonDataRequest, config?: ServiceAccountApplications.PostHttpMethod.RequestConfig): AxiosPromise<ServiceAccountApplications.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Payscore {
  export interface Partner {
    serviceAccountApplications: Partner.ServiceAccountApplications
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
wxpay.v3.payscore.partner.serviceAccountApplications.post({
//                                                   ^^^^
  service_id,
  appid,
  sub_mchid,
  sub_appid,
  out_apply_no,
  result_notify_url,
})
.then(
  ({ // [!code hl:23]
    data: {
      service_id,
      mchid,
      appid,
      sub_mchid,
      sub_appid,
      out_apply_no,
      result_notify_url,
      apply_state,
      reject_reason,
    },
  }) => ({
    service_id,
    mchid,
    appid,
    sub_mchid,
    sub_appid,
    out_apply_no,
    result_notify_url,
    apply_state,
    reject_reason,
  })
)
```
