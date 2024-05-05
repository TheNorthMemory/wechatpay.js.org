---
title: 根据openid导入用户会员卡
description: 对于经营会员生意的商户来说，存量会员的注册渠道广泛，包括但不限于线下渠道、微信渠道、APP及其他线上渠道。因而，在微信生态下经营会员时常遇到两类问题：（1）存量会员的身份难统一识别；（2）在应用「开卡有礼」活动能力时，容易对存量（但未同步身份至微信侧的）老会员重复补贴。因而，针对大部分存量会员在微信内的商户，商户可通过用户在微信公众号/小程序内的openid，将存量会员通过接口导入至微信侧后台。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/marketing/membercard_open/chapter3_13.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Marketing.MembercardOpen.Cards._card_id_.Users.Import.PostHttpMethod {
  export interface JsonDataRequest {
    openid: string
    code: string
    out_request_no: string
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
    card_id: string
  }
  export interface WellformedResponse {
    code: string
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing.MembercardOpen.Cards._card_id_.Users {
  export interface Import {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/marketing/membercard_open/chapter3_13.shtml
     */
    (data: Import.PostHttpMethod.JsonDataRequest, config: Import.PostHttpMethod.RequestConfig): AxiosPromise<Import.PostHttpMethod.WellformedResponse>
    /**
     * 根据openid导入用户会员卡API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/marketing/membercard_open/chapter3_13.shtml
     */
    post(data: Import.PostHttpMethod.JsonDataRequest, config: Import.PostHttpMethod.RequestConfig): AxiosPromise<Import.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing.MembercardOpen.Cards._card_id_ {
  export interface Users {
    import: Users.Import
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing.MembercardOpen.Cards {
  export interface _card_id_ {
    users: _card_id_.Users
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
wxpay.v3.marketing.membercardOpen.cards._card_id_.users.import.post({
//                                                             ^^^^
  openid,
  code,
  out_request_no,
}, { card_id, })
.then(
  ({ // [!code hl:7]
    data: {
      code,
    },
  }) => ({
    code,
  })
)
```
