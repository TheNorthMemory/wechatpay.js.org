---
title: 通过授权协议号查询与用户授权记录(合作伙伴模式)
description: 通过authorization_code，商户查询与用户授权关系
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3_partner/Offline/apis/chapter6_2_19.shtml) [官方文档](https://pay.weixin.qq.com/docs/partner/apis/partner-weixin-pay-score/partner-service-auth/get-partner-permissions-by-code.html)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Payscore.Partner.Permissions.AuthorizationCode._authorization_code_.GetHttpMethod {
  export interface RequestConfig extends AxiosRequestConfig {
    authorization_code: string
    params: {
      service_id: string
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
    user_risk_level: number
    risk_level_version: number
  }
}
namespace WeChatPay.OpenAPI.V3.Payscore.Partner.Permissions.AuthorizationCode {
  export interface _authorization_code_ {
    /**
     * 查询与用户授权记录（授权协议号）API
     * @link https://pay.weixin.qq.com/docs/partner/apis/partner-weixin-pay-score/partner-service-auth/get-partner-permissions-by-code.html
     */
    get(config: _authorization_code_.GetHttpMethod.RequestConfig): AxiosPromise<_authorization_code_.GetHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Payscore.Partner.Permissions {
  export interface AuthorizationCode {
    _authorization_code_: AuthorizationCode._authorization_code_
  }
}
namespace WeChatPay.OpenAPI.V3.Payscore.Partner {
  export interface Permissions {
    authorizationCode: Permissions.AuthorizationCode
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
wxpay.v3.payscore.partner.permissions.authorizationCode._authorization_code_.get({
//                                                                           ^^^
  authorization_code,
  params,
})
.then(
  ({ // [!code hl:33]
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
    user_risk_level,
    risk_level_version,
  })
)
```
