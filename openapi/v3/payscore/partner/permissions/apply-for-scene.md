---
title: 服务商场景中预授权
description: 服务商场景中预授权
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/docs/partner/apis/partner-weixin-pay-score/partner-service-auth/scene-apply-partner-permissions.html)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Payscore.Partner.Permissions.ApplyForScene.PostHttpMethod {
  export interface JsonDataRequest {
    service_id: string
    appid: string
    sub_appid: string
    sub_mchid: string
    authorization_code: string
    notify_url: string
    scene: 'TRANSACTION'
    transaction_scene_info: {
      mchid: string
      sub_mchid: string
    }
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
  }
  export interface WellformedResponse {
    scene: 'TRANSACTION'
    transaction_permissions_token: string
  }
}
namespace WeChatPay.OpenAPI.V3.Payscore.Partner.Permissions {
  export interface ApplyForScene {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/docs/partner/apis/partner-weixin-pay-score/partner-service-auth/scene-apply-partner-permissions.html
     */
    (data: ApplyForScene.PostHttpMethod.JsonDataRequest, config?: ApplyForScene.PostHttpMethod.RequestConfig): AxiosPromise<ApplyForScene.PostHttpMethod.WellformedResponse>
    /**
     * 服务商场景中预授权
     * @link https://pay.weixin.qq.com/docs/partner/apis/partner-weixin-pay-score/partner-service-auth/scene-apply-partner-permissions.html
     */
    post(data: ApplyForScene.PostHttpMethod.JsonDataRequest, config?: ApplyForScene.PostHttpMethod.RequestConfig): AxiosPromise<ApplyForScene.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Payscore.Partner {
  export interface Permissions {
    applyForScene: Permissions.ApplyForScene
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
wxpay.v3.payscore.partner.permissions.applyForScene.post({
//                                                  ^^^^
  service_id,
  appid,
  sub_appid,
  sub_mchid,
  authorization_code,
  notify_url,
  scene,
  transaction_scene_info,
})
.then(
  ({ // [!code hl:9]
    data: {
      scene,
      transaction_permissions_token,
    },
  }) => ({
    scene,
    transaction_permissions_token,
  })
)
```
