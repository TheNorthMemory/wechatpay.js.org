---
title: 商户解除用户授权关系
description: 商户通过调用该接口，可主动与用户解除此前授权关系。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/payscore/chapter9_1.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Payscore.Users._openid_.Permissions._service_id_.Terminate.PostHttpMethod {
  export interface JsonDataRequest {
    appid: string
    reason: string
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
    params: {
      openid: string
      service_id: string
    }
  }
  export interface WellformedResponse {
  }
}
namespace WeChatPay.OpenAPI.V3.Payscore.Users._openid_.Permissions._service_id_ {
  export interface Terminate {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/payscore/chapter9_1.shtml
     */
    (data: Terminate.PostHttpMethod.JsonDataRequest, config: Terminate.PostHttpMethod.RequestConfig): AxiosPromise<Terminate.PostHttpMethod.WellformedResponse>
    /**
     * 商户解除用户授权关系API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/payscore/chapter9_1.shtml
     */
    post(data: Terminate.PostHttpMethod.JsonDataRequest, config: Terminate.PostHttpMethod.RequestConfig): AxiosPromise<Terminate.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Payscore.Users._openid_.Permissions {
  export interface _service_id_ {
    terminate: _service_id_.Terminate
  }
}
namespace WeChatPay.OpenAPI.V3.Payscore.Users._openid_ {
  export interface Permissions {
    _service_id_: Permissions._service_id_
  }
}
namespace WeChatPay.OpenAPI.V3.Payscore.Users {
  export interface _openid_ {
    permissions: _openid_.Permissions
  }
}
namespace WeChatPay.OpenAPI.V3.Payscore {
  export interface Users {
    _openid_: Users._openid_
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface Payscore {
    users: Payscore.Users
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
wxpay.v3.payscore.users._openid_.permissions._service_id_.terminate.post({
//                                                                  ^^^^
  appid,
  reason,
}, { openid, service_id })
.then(({ status, }) => status === 204) // [!code hl]
```
