---
title: 设置会员卡模板权益项
description: 通过此接口商家可设置是否在用户的会员卡详情页展示积分、优惠、发票等权益及服务模块
---

# {{ $frontmatter.title }} {#patch}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/marketing/membercard_open/chapter5_1.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Marketing.MembercardOpen.Cards._card_id_.Rights.PatchHttpMethod {
  export interface JsonDataRequest {
    show_bonus: boolean
    show_favor: boolean
    bonus: {
      init_bonus: number
      bonus_value_word: string
      bonus_cost_title: string
      bonus_cost_word: string
      bonus_jump_word: string
      bonus_jump_appid: string
      bonus_jump_path: string
      bonus_support_appid: string
      bonus_support_path: string
    }
    favor: {
      show_coupon: boolean
      member_price_word: string
      member_price_appid: string
      member_price_path: string
    }
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
    card_id: string
  }
  export interface WellformedResponse {
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing.MembercardOpen.Cards._card_id_ {
  export interface Rights {
    /**
     * 设置会员卡模板权益项API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/marketing/membercard_open/chapter5_1.shtml
     */
    patch(data: Rights.PatchHttpMethod.JsonDataRequest, config: Rights.PatchHttpMethod.RequestConfig): AxiosPromise<Rights.PatchHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing.MembercardOpen.Cards {
  export interface _card_id_ {
    rights: _card_id_.Rights
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
wxpay.v3.marketing.membercardOpen.cards._card_id_.rights.patch({
//                                                       ^^^^^
  show_bonus,
  show_favor,
  bonus,
  favor,
}, { card_id, })
.then(({ status }) => status === 204) // [!code hl]
```
