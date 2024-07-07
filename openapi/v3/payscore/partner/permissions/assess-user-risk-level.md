---
title: 服务商评估用户分层(合作伙伴模式)
description: 服务商评估用户分层
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/docs/partner/apis/partner-weixin-pay-score/partner-service-auth/assess-partner-user-risk-level.html)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Payscore.Partner.Permissions.AssessUserRiskLevel.PostHttpMethod {
  export interface JsonDataRequest {
    service_id: string
    appid: string
    sub_appid: string
    authorization_code: string
    openid: string
    sub_openid: string
    shopping_info: {
      goods: {
        name: string
        picture: string
        amount: number
        count: number
        category_id: string[]
      }[]
    }
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
    params: {
      sub_mchid: string
    }
  }
  export interface WellformedResponse {
    service_id: string
    appid: string
    mchid: string
    openid: string
    authorization_code: string
    authorization_state: string
    notify_url: string
    cancel_authorization_time: string | Date
    authorization_success_time: string | Date
    sub_mchid: string
    sub_appid: string
    sub_openid: string
    user_label: string
    channel_id: string
    user_risk_level: number
    risk_level_version: number
  }
}
namespace WeChatPay.OpenAPI.V3.Payscore.Partner.Permissions {
  export interface AssessUserRiskLevel {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/docs/partner/apis/partner-weixin-pay-score/partner-service-auth/assess-partner-user-risk-level.html
     */
    (data: AssessUserRiskLevel.PostHttpMethod.JsonDataRequest, config: AssessUserRiskLevel.PostHttpMethod.RequestConfig): AxiosPromise<AssessUserRiskLevel.PostHttpMethod.WellformedResponse>
    /**
     * 服务商评估用户分层
     * @link https://pay.weixin.qq.com/docs/partner/apis/partner-weixin-pay-score/partner-service-auth/assess-partner-user-risk-level.html
     */
    post(data: AssessUserRiskLevel.PostHttpMethod.JsonDataRequest, config: AssessUserRiskLevel.PostHttpMethod.RequestConfig): AxiosPromise<AssessUserRiskLevel.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Payscore.Partner {
  export interface Permissions {
    assessUserRiskLevel: Permissions.AssessUserRiskLevel
  }
}
namespace WeChatPay.OpenAPI.V3.Payscore {
  export interface Partner {
    permissions: Partner.Permissions
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
wxpay.v3.payscore.partner.permissions.assessUserRiskLevel.post({
//                                                        ^^^^
  service_id,
  appid,
  sub_appid,
  authorization_code,
  openid,
  sub_openid,
  shopping_info,
}, { params })
.then(
  ({ // [!code hl:37]
    data: {
      service_id,
      appid,
      mchid,
      openid,
      authorization_code,
      authorization_state,
      notify_url,
      cancel_authorization_time,
      authorization_success_time,
      sub_mchid,
      sub_appid,
      sub_openid,
      user_label,
      channel_id,
      user_risk_level,
      risk_level_version,
    },
  }) => ({
    service_id,
    appid,
    mchid,
    openid,
    authorization_code,
    authorization_state,
    notify_url,
    cancel_authorization_time,
    authorization_success_time,
    sub_mchid,
    sub_appid,
    sub_openid,
    user_label,
    channel_id,
    user_risk_level,
    risk_level_version,
  })
)
```
