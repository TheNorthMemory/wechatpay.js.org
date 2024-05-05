---
title: 老会员卡模板升级
description: 商户可调用此api将微信公众平台创建微信会员卡升级为微信支付新版会员卡，将老会员卡card_id绑定品牌id，完成会员卡升级后可以使用新版特性，包括会员权益、会员服务、会员有礼等功能。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/marketing/membercard_open/chapter3_6.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Marketing.MembercardOpen.Cards._card_id_.Upgrade.PostHttpMethod {
  export interface JsonDataRequest {
    brand_id: string
    appid: string
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
    card_id: string
  }
  export interface WellformedResponse {
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing.MembercardOpen.Cards._card_id_ {
  export interface Upgrade {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/marketing/membercard_open/chapter3_6.shtml
     */
    (data: Upgrade.PostHttpMethod.JsonDataRequest, config: Upgrade.PostHttpMethod.RequestConfig): AxiosPromise<Upgrade.PostHttpMethod.WellformedResponse>
    /**
     * 老会员卡模板升级API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/marketing/membercard_open/chapter3_6.shtml
     */
    post(data: Upgrade.PostHttpMethod.JsonDataRequest, config: Upgrade.PostHttpMethod.RequestConfig): AxiosPromise<Upgrade.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing.MembercardOpen.Cards {
  export interface _card_id_ {
    upgrade: _card_id_.Upgrade
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
wxpay.v3.marketing.membercardOpen.cards._card_id_.upgrade.post({
//                                                        ^^^^
  brand_id,
  appid,
}, { card_id, })
.then(({ status }) => status === 204) // [!code hl]
```
