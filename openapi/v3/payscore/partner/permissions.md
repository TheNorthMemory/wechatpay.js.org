---
title: 商户预授权(合作伙伴模式)
description: 商户预授权
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3_partner/Offline/apis/chapter6_2_18.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Payscore.Partner.Permissions.PostHttpMethod {
  export interface JsonDataRequest {
    service_id: string
    appid: string
    sub_appid: string
    sub_mchid: string
    authorization_code: string
    notify_url: string
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
  }
  export interface WellformedResponse {
    apply_permissions_token: string
  }
}
namespace WeChatPay.OpenAPI.V3.Payscore.Partner {
  export interface Permissions {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3_partner/Offline/apis/chapter6_2_18.shtml
     */
    (data: Permissions.PostHttpMethod.JsonDataRequest, config?: Permissions.PostHttpMethod.RequestConfig): AxiosPromise<Permissions.PostHttpMethod.WellformedResponse>
    /**
     * 商户预授权API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3_partner/Offline/apis/chapter6_2_18.shtml
     */
    post(data: Permissions.PostHttpMethod.JsonDataRequest, config?: Permissions.PostHttpMethod.RequestConfig): AxiosPromise<Permissions.PostHttpMethod.WellformedResponse>
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
wxpay.v3.payscore.partner.permissions.post({
//                                    ^^^^
  service_id,
  appid,
  sub_appid,
  sub_mchid,
  authorization_code,
  notify_url,
})
.then(
  ({ // [!code hl:7]
    data: {
      apply_permissions_token,
    },
  }) => ({
    apply_permissions_token,
  })
)
```
