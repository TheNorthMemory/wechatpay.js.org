---
title: 商户评估用户分层
description: 商户评估用户分层
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/docs/merchant/apis/weixin-pay-score/service-auth/assess-user-risk-level.html)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Payscore.Permissions.AssessUserRiskLevel.PostHttpMethod {
  export interface JsonDataRequest {
    service_id: string
    appid: string
    authorization_code: string
    openid: string
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
namespace WeChatPay.OpenAPI.V3.Payscore.Permissions {
  export interface AssessUserRiskLevel {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/docs/merchant/apis/weixin-pay-score/service-auth/assess-user-risk-level.html
     */
    (data: AssessUserRiskLevel.PostHttpMethod.JsonDataRequest, config?: AssessUserRiskLevel.PostHttpMethod.RequestConfig): AxiosPromise<AssessUserRiskLevel.PostHttpMethod.WellformedResponse>
    /**
     * 商户评估用户分层
     * @link https://pay.weixin.qq.com/docs/merchant/apis/weixin-pay-score/service-auth/assess-user-risk-level.html
     */
    post(data: AssessUserRiskLevel.PostHttpMethod.JsonDataRequest, config?: AssessUserRiskLevel.PostHttpMethod.RequestConfig): AxiosPromise<AssessUserRiskLevel.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Payscore {
  export interface Permissions {
    assessUserRiskLevel: Permissions.AssessUserRiskLevel
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface Payscore {
    permissions: Payscore.Permissions
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
wxpay.v3.payscore.permissions.assessUserRiskLevel.post({
//                                                ^^^^
  service_id,
  appid,
  authorization_code,
  openid,
  shopping_info,
})
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
