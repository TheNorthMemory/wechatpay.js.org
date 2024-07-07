---
title: 通过openid查询与用户授权记录(合作伙伴模式)
description: 通过openid查询用户授权信息
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3_partner/Offline/apis/chapter6_2_21.shtml) [官方文档](https://pay.weixin.qq.com/docs/partner/apis/partner-weixin-pay-score/partner-service-auth/get-partner-permissions-by-open-id.html)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Payscore.Partner.Permissions.Search.GetHttpMethod {
  export interface RequestConfig extends AxiosRequestConfig {
    params: {
      service_id: string
      appid: string
      sub_mchid: string
      sub_appid: string
      openid: string
      sub_openid: string
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
namespace WeChatPay.OpenAPI.V3.Payscore.Partner.Permissions {
  export interface Search {
    /**
     * 查询与用户授权记录（openid）API
     * @link https://pay.weixin.qq.com/docs/partner/apis/partner-weixin-pay-score/partner-service-auth/get-partner-permissions-by-open-id.html
     */
    get(config: Search.GetHttpMethod.RequestConfig): AxiosPromise<Search.GetHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Payscore.Partner {
  export interface Permissions {
    search: Permissions.Search
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
wxpay.v3.payscore.partner.permissions.search.get({
//                                           ^^^
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
