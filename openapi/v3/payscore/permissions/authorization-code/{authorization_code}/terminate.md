---
title: 通过授权协议号解除用户授权关系
description: 通过authorization_code，商户解除用户授权关系
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/payscore/chapter9_4.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Payscore.Permissions.AuthorizationCode._authorization_code_.Terminate.PostHttpMethod {
  export interface JsonDataRequest {
    service_id: string
    reason: string
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
    authorization_code: string
  }
  export interface WellformedResponse {
  }
}
namespace WeChatPay.OpenAPI.V3.Payscore.Permissions.AuthorizationCode._authorization_code_ {
  export interface Terminate {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/payscore/chapter9_4.shtml
     */
    (data: Terminate.PostHttpMethod.JsonDataRequest, config: Terminate.PostHttpMethod.RequestConfig): AxiosPromise<Terminate.PostHttpMethod.WellformedResponse>
    /**
     * 解除用户授权关系（授权协议号）API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/payscore/chapter9_4.shtml
     */
    post(data: Terminate.PostHttpMethod.JsonDataRequest, config: Terminate.PostHttpMethod.RequestConfig): AxiosPromise<Terminate.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Payscore.Permissions.AuthorizationCode {
  export interface _authorization_code_ {
    terminate: _authorization_code_.Terminate
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
wxpay.v3.payscore.permissions.authorizationCode._authorization_code_.terminate.post({
//                                                                             ^^^^
  service_id,
  reason,
}, { authorization_code })
.then(({ status, }) => status === 204) // [!code hl]
```
