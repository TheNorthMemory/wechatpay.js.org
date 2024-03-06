---
title: 通过openid解除用户授权关系(合作伙伴模式)
description: 通过openid，服务商帮子商户解除用户授权关系
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3_partner/Offline/apis/chapter6_2_22.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Payscore.Partner.Permissions.Terminate.PostHttpMethod {
  export interface JsonDataRequest {
    openid: string
    sub_openid: string
    service_id: string
    appid: string
    sub_appid: string
    sub_mchid: string
    reason: string
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
  }
  export interface WellformedResponse {
  }
}
namespace WeChatPay.OpenAPI.V3.Payscore.Partner.Permissions {
  export interface Terminate {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3_partner/Offline/apis/chapter6_2_22.shtml
     */
    (data: Terminate.PostHttpMethod.JsonDataRequest, config?: Terminate.PostHttpMethod.RequestConfig): AxiosPromise<Terminate.PostHttpMethod.WellformedResponse>
    /**
     * 解除用户授权关系（openid）API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3_partner/Offline/apis/chapter6_2_22.shtml
     */
    post(data: Terminate.PostHttpMethod.JsonDataRequest, config?: Terminate.PostHttpMethod.RequestConfig): AxiosPromise<Terminate.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Payscore.Partner {
  export interface Permissions {
    terminate: Permissions.Terminate
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
wxpay.v3.payscore.partner.permissions.terminate.post({
//                                              ^^^^
  openid,
  sub_openid,
  service_id,
  appid,
  sub_appid,
  sub_mchid,
  reason,
})
.then(({ data, }) => data) // [!code hl:1]
```
