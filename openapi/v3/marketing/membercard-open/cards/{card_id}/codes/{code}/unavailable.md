---
title: 作废用户会员卡
description: 将用户的会员卡设置为失效状态。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/marketing/membercard_open/chapter3_12.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Marketing.MembercardOpen.Cards._card_id_.Codes._code_.Unavailable.PostHttpMethod {
  export interface JsonDataRequest {
    reason: string
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
    card_id: string
    code: string
  }
  export interface WellformedResponse {
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing.MembercardOpen.Cards._card_id_.Codes._code_ {
  export interface Unavailable {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/marketing/membercard_open/chapter3_12.shtml
     */
    (data: Unavailable.PostHttpMethod.JsonDataRequest, config: Unavailable.PostHttpMethod.RequestConfig): AxiosPromise<Unavailable.PostHttpMethod.WellformedResponse>
    /**
     * 作废用户会员卡API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/marketing/membercard_open/chapter3_12.shtml
     */
    post(data: Unavailable.PostHttpMethod.JsonDataRequest, config: Unavailable.PostHttpMethod.RequestConfig): AxiosPromise<Unavailable.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing.MembercardOpen.Cards._card_id_.Codes {
  export interface _code_ {
    unavailable: _code_.Unavailable
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing.MembercardOpen.Cards._card_id_ {
  export interface Codes {
    _code_: Codes._code_
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing.MembercardOpen.Cards {
  export interface _card_id_ {
    codes: _card_id_.Codes
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
wxpay.v3.marketing.membercardOpen.cards._card_id_.codes._code_.unavailable.post({
//                                                                         ^^^^
  reason,
}, { card_id, code, })
.then(({ status }) => status === 204) // [!code hl]
```
