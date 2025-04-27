---
title: 商户预授权
description: 生成商户预授权投放会员卡的凭证
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Marketing.MembercardOpen.Cards._card_id_.PermissionTokens.PostHttpMethod {
  export interface JsonDataRequest {
    activate_type: string
    navigate_back_previous_page: boolean
    activate_url: string
    activate_appid: string
    activate_path: string
    outer_str: string
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
    card_id: string
  }
  export interface WellformedResponse {
    permission_token: string
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing.MembercardOpen.Cards._card_id_ {
  export interface PermissionTokens {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/marketing/membercard_open/chapter4_7.shtml
     */
    (data: PermissionTokens.PostHttpMethod.JsonDataRequest, config: PermissionTokens.PostHttpMethod.RequestConfig): AxiosPromise<PermissionTokens.PostHttpMethod.WellformedResponse>
    /**
     * 商户预授权
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/marketing/membercard_open/chapter4_7.shtml
     */
    post(data: PermissionTokens.PostHttpMethod.JsonDataRequest, config: PermissionTokens.PostHttpMethod.RequestConfig): AxiosPromise<PermissionTokens.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing.MembercardOpen.Cards {
  export interface _card_id_ {
    permissionTokens: _card_id_.PermissionTokens
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing.MembercardOpen {
  export interface Cards {
    _card_id_: Cards._card_id_
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing {
  export interface MembercardOpen {
    cards: MembercardOpen.Cards
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface Marketing {
    membercardOpen: Marketing.MembercardOpen
  }
}
namespace WeChatPay.OpenAPI {
  export interface V3 {
    marketing: V3.Marketing
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
wxpay.v3.marketing.membercardOpen.cards._card_id_.permissionTokens.post({
//                                                                 ^^^^
  activate_type,
  navigate_back_previous_page,
  activate_url,
  activate_appid,
  activate_path,
  outer_str,
})
.then(
  ({ // [!code hl:7]
    data: {
      permission_token,
    },
  }) => ({
    permission_token,
  })
)
```

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4012550867) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012728179)
