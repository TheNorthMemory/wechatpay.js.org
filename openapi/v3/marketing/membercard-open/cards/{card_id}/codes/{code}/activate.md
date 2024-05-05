---
title: 激活会员卡（跳转型激活）
description: 如果商家选择跳转激活的投放方式，用户跳转至商家页商家H5网页/小程序后，商家可调用激活会员卡接口激活会员。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/marketing/membercard_open/chapter3_10.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Marketing.MembercardOpen.Cards._card_id_.Codes._code_.Activate.PostHttpMethod {
  export interface JsonDataRequest {
    membership_number: string
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
  export interface Activate {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/marketing/membercard_open/chapter3_10.shtml
     */
    (data: Activate.PostHttpMethod.JsonDataRequest, config: Activate.PostHttpMethod.RequestConfig): AxiosPromise<Activate.PostHttpMethod.WellformedResponse>
    /**
     * 激活会员卡（跳转型激活）API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/marketing/membercard_open/chapter3_10.shtml
     */
    post(data: Activate.PostHttpMethod.JsonDataRequest, config: Activate.PostHttpMethod.RequestConfig): AxiosPromise<Activate.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing.MembercardOpen.Cards._card_id_.Codes {
  export interface _code_ {
    activate: _code_.Activate
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
wxpay.v3.marketing.membercardOpen.cards._card_id_.codes._code_.activate.post({
//                                                                      ^^^^
  membership_number,
}, { card_id, code, })
.then(({ status }) => status === 204) // [!code hl]
```
