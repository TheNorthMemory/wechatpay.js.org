---
title: 创建会员卡二维码
description: 商户创建会员卡后，可以调用此api创建二维码，用于投放会员卡，用户可扫码开通会员卡
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/marketing/membercard_open/chapter4_3.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Marketing.MembercardOpen.Cards._card_id_.Qrcode.PostHttpMethod {
  export interface JsonDataRequest {
    activate_type: string
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
    url: string
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing.MembercardOpen.Cards._card_id_ {
  export interface Qrcode {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/marketing/membercard_open/chapter4_3.shtml
     */
    (data: Qrcode.PostHttpMethod.JsonDataRequest, config: Qrcode.PostHttpMethod.RequestConfig): AxiosPromise<Qrcode.PostHttpMethod.WellformedResponse>
    /**
     * 创建会员卡二维码API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/marketing/membercard_open/chapter4_3.shtml
     */
    post(data: Qrcode.PostHttpMethod.JsonDataRequest, config: Qrcode.PostHttpMethod.RequestConfig): AxiosPromise<Qrcode.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing.MembercardOpen.Cards {
  export interface _card_id_ {
    qrcode: _card_id_.Qrcode
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
wxpay.v3.marketing.membercardOpen.cards._card_id_.qrcode.post({
//                                                       ^^^^
  activate_type,
  activate_url,
  activate_appid,
  activate_path,
  outer_str,
}, { card_id, })
.then(
  ({ // [!code hl:7]
    data: {
      url,
    },
  }) => ({
    url,
  })
)
```
