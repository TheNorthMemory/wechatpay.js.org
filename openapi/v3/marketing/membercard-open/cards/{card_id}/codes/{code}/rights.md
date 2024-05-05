---
title: 设置会员权益
description: 通过此接口商家可设置是否在用户的会员卡详情页展示积分、优惠、发票等权益及服务模块
---

# {{ $frontmatter.title }} {#patch}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/marketing/membercard_open/chapter5_2.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Marketing.MembercardOpen.Cards._card_id_.Codes._code_.Rights.PatchHttpMethod {
  export interface JsonDataRequest {
    before_bonus_value: number
    bonus_value: number
    add_bonus_value: number
    out_request_no: string
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
  export interface Rights {
    /**
     * 设置会员权益API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/marketing/membercard_open/chapter5_2.shtml
     */
    patch(data: Rights.PatchHttpMethod.JsonDataRequest, config: Rights.PatchHttpMethod.RequestConfig): AxiosPromise<Rights.PatchHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing.MembercardOpen.Cards._card_id_.Codes {
  export interface _code_ {
    rights: _code_.Rights
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
wxpay.v3.marketing.membercardOpen.cards._card_id_.codes._code_.rights.patch({
//                                                                    ^^^^^
  before_bonus_value,
  bonus_value,
  add_bonus_value,
  out_request_no,
}, { card_id, code, })
.then(({ status }) => status === 204) // [!code hl]
```
