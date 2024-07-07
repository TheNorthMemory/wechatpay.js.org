---
title: 查询用户分层对应建议先享金额(合作伙伴模式)
description: 查询用户分层对应建议先享金额
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/docs/partner/apis/partner-weixin-pay-score/service-quota/get-partner-user-risk-level-quota.html)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Payscore.Partner.Servicequotas.ServiceId._service_id_.GetHttpMethod {
  export interface RequestConfig extends AxiosRequestConfig {
    service_id: string
    params: {
      sub_mchid: string
      appid: string
      sub_appid: string
      risk_level_version: number
    }
  }
  export interface WellformedResponse {
    service_id: string
    mchid: string
    sub_mchid: string
    appid: string
    sub_appid: string
    risk_level_version: number
    quotas: {
      risk_level: number
      suggested_quota: number
    }[]
  }
}
namespace WeChatPay.OpenAPI.V3.Payscore.Partner.Servicequotas.ServiceId {
  export interface _service_id_ {
    /**
     * 查询用户分层对应建议先享金额
     * @link https://pay.weixin.qq.com/docs/partner/apis/partner-weixin-pay-score/service-quota/get-partner-user-risk-level-quota.html
     */
    get(config: _service_id_.GetHttpMethod.RequestConfig): AxiosPromise<_service_id_.GetHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Payscore.Partner.Servicequotas {
  export interface ServiceId {
    _service_id_: ServiceId._service_id_
  }
}
namespace WeChatPay.OpenAPI.V3.Payscore.Partner {
  export interface Servicequotas {
    serviceId: Servicequotas.ServiceId
  }
}
namespace WeChatPay.OpenAPI.V3.Payscore {
  export interface Partner {
    servicequotas: Partner.Servicequotas
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
wxpay.v3.payscore.partner.servicequotas.serviceId._service_id_.get({
//                                                             ^^^
  service_id,
  params,
})
.then(
  ({ // [!code hl:19]
    data: {
      service_id,
      mchid,
      sub_mchid,
      appid,
      sub_appid,
      risk_level_version,
      quotas,
    },
  }) => ({
    service_id,
    mchid,
    sub_mchid,
    appid,
    sub_appid,
    risk_level_version,
    quotas,
  })
)
```
