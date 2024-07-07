---
title: 通过openid查询与用户授权记录
description: 通过openid查询用户授权信息
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/payscore/chapter9_5.shtml) [官方文档](https://pay.weixin.qq.com/docs/merchant/apis/weixin-pay-score/service-auth/get-permissions-by-open-id.html)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Payscore.Permissions.Openid._openid_.GetHttpMethod {
  export interface RequestConfig extends AxiosRequestConfig {
    openid: string
    params: {
      service_id: string
      appid: string
    }
  }
  export interface WellformedResponse {
    service_id: string
    appid: string
    mchid: string
    openid: string
    authorization_code: string
    cancel_authorization_time: string | Date
    authorization_success_time: string | Date
    user_risk_level: number
    risk_level_version: number
  }
}
namespace WeChatPay.OpenAPI.V3.Payscore.Permissions.Openid {
  export interface _openid_ {
    /**
     * 查询与用户授权记录（openid）API
     * @link https://pay.weixin.qq.com/docs/merchant/apis/weixin-pay-score/service-auth/get-permissions-by-open-id.html
     */
    get(config: _openid_.GetHttpMethod.RequestConfig): AxiosPromise<_openid_.GetHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Payscore.Permissions {
  export interface Openid {
    _openid_: Openid._openid_
  }
}
namespace WeChatPay.OpenAPI.V3.Payscore {
  export interface Permissions {
    openid: Permissions.Openid
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
wxpay.v3.payscore.permissions.openid._openid_.get({
//                                            ^^^
  openid,
  params,
})
.then(
  ({ // [!code hl:23]
    data: {
      service_id,
      appid,
      mchid,
      openid,
      authorization_code,
      cancel_authorization_time,
      authorization_success_time,
      user_risk_level,
      risk_level_version,
    },
  }) => ({
    service_id,
    appid,
    mchid,
    openid,
    authorization_code,
    cancel_authorization_time,
    authorization_success_time,
    user_risk_level,
    risk_level_version,
  })
)
```
