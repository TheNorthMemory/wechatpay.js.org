---
title: 通过授权协议号查询与用户授权记录
description: 通过authorization_code，商户查询与用户授权关系
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/payscore/chapter9_3.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Payscore.Permissions.AuthorizationCode._authorization_code_.GetHttpMethod {
  export interface RequestConfig extends AxiosRequestConfig {
    authorization_code: string
    params: {
      service_id: string
    }
  }
  export interface WellformedResponse {
    service_id: string
    appid: string
    mchid: string
    openid: string
    authorization_code: string
    notify_url: string
    cancel_authorization_time: string | Date
    authorization_success_time: string | Date
  }
}
namespace WeChatPay.OpenAPI.V3.Payscore.Permissions.AuthorizationCode {
  export interface _authorization_code_ {
    /**
     * 查询与用户授权记录（授权协议号）API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/payscore/chapter9_3.shtml
     */
    get(config: _authorization_code_.GetHttpMethod.RequestConfig): AxiosPromise<_authorization_code_.GetHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Payscore.Permissions {
  export interface AuthorizationCode {
    _authorization_code_: AuthorizationCode._authorization_code_
  }
}
namespace WeChatPay.OpenAPI.V3.Payscore {
  export interface Permissions {
    authorizationCode: Permissions.AuthorizationCode
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
wxpay.v3.payscore.permissions.authorizationCode._authorization_code_.get({
//                                                                   ^^^
  authorization_code,
  params,
})
.then(
  ({ // [!code hl:21]
    data: {
      service_id,
      appid,
      mchid,
      openid,
      authorization_code,
      notify_url,
      cancel_authorization_time,
      authorization_success_time,
    },
  }) => ({
    service_id,
    appid,
    mchid,
    openid,
    authorization_code,
    notify_url,
    cancel_authorization_time,
    authorization_success_time,
  })
)
```
