---
title: 通过openid解除用户授权关系
description: 通过openid， 商户解除用户授权关系
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/payscore/chapter9_6.shtml) [官方文档](https://pay.weixin.qq.com/docs/merchant/apis/weixin-pay-score/service-auth/terminate-permissions-by-open-id.html)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Payscore.Permissions.Openid._openid_.Terminate.PostHttpMethod {
  export interface JsonDataRequest {
    service_id: string
    appid: string
    reason: string
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
    openid: string
  }
  export interface WellformedResponse {
  }
}
namespace WeChatPay.OpenAPI.V3.Payscore.Permissions.Openid._openid_ {
  export interface Terminate {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/docs/merchant/apis/weixin-pay-score/service-auth/terminate-permissions-by-open-id.html
     */
    (data: Terminate.PostHttpMethod.JsonDataRequest, config: Terminate.PostHttpMethod.RequestConfig): AxiosPromise<Terminate.PostHttpMethod.WellformedResponse>
    /**
     * 解除用户授权关系（openid）API
     * @link https://pay.weixin.qq.com/docs/merchant/apis/weixin-pay-score/service-auth/terminate-permissions-by-open-id.html
     */
    post(data: Terminate.PostHttpMethod.JsonDataRequest, config: Terminate.PostHttpMethod.RequestConfig): AxiosPromise<Terminate.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Payscore.Permissions.Openid {
  export interface _openid_ {
    terminate: _openid_.Terminate
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
wxpay.v3.payscore.permissions.openid._openid_.terminate.post({
//                                                      ^^^^
  service_id,
  appid,
  reason,
}, { openid })
.then(({ status, }) => status === 204) // [!code hl]
```
