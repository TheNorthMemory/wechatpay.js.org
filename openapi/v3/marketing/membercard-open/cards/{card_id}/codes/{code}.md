---
title: 查询用户会员卡信息
description: 通过此接口可查询指定用户会员卡的信息，如会员积分、储值余额、开卡信息等
---

# 查询用户会员卡信息 {#get}

通过此接口可查询指定用户会员卡的信息，如会员积分、储值余额、开卡信息等

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Marketing.MembercardOpen.Cards._card_id_.Codes._code_.GetHttpMethod {
  export interface RequestConfig extends AxiosRequestConfig {
    card_id: string
    code: string
  }
  export interface WellformedResponse {
    card_id: string
    code: string
    openid: string
    membership_number: string
    level: string
    nickname: string
    head_image_url: string
    background_picture_url: string
    balance: number
    user_card_status: string
    user_information: {
      common_field_list: {
        name: string
        value: string
      }[]
      custom_field_list: {
        name: string
        value: string
        value_list: string[]
      }[]
    }
    bonus_value: number
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing.MembercardOpen.Cards._card_id_.Codes {
  export interface _code_ {
    /**
     * 查询用户会员卡信息API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/marketing/membercard_open/chapter3_4.shtml
     */
    get(config: _code_.GetHttpMethod.RequestConfig): AxiosPromise<_code_.GetHttpMethod.WellformedResponse>
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
wxpay.v3.marketing.membercardOpen.cards._card_id_.codes._code_.get({
//                                                             ^^^
  card_id,
  code,
})
.then(
  ({ // [!code hl:29]
    data: {
      card_id,
      code,
      openid,
      membership_number,
      level,
      nickname,
      head_image_url,
      background_picture_url,
      balance,
      user_card_status,
      user_information,
      bonus_value,
    },
  }) => ({
    card_id,
    code,
    openid,
    membership_number,
    level,
    nickname,
    head_image_url,
    background_picture_url,
    balance,
    user_card_status,
    user_information,
    bonus_value,
  })
)
```

# 修改用户会员卡信息 {#patch}

通过此接口可更新指定用户的会员卡背景图、会员卡号、等级、储值余额 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/marketing/membercard_open/chapter3_8.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Marketing.MembercardOpen.Cards._card_id_.Codes._code_.PatchHttpMethod {
  export interface JsonDataRequest {
    membership_number: string
    background_picture_url: string
    level: string
    out_request_no: string
    balance_information: {
      before_balance: number
      balance: number
      add_balance: number
      balance_remark: string
    }
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
    card_id: string
    code: string
  }
  export interface WellformedResponse {
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing.MembercardOpen.Cards._card_id_.Codes {
  export interface _code_ {
    /**
     * 修改用户会员卡信息API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/marketing/membercard_open/chapter3_8.shtml
     */
    patch(data: _code_.PatchHttpMethod.JsonDataRequest, config: _code_.PatchHttpMethod.RequestConfig): AxiosPromise<_code_.PatchHttpMethod.WellformedResponse>
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
wxpay.v3.marketing.membercardOpen.cards._card_id_.codes._code_.patch({
//                                                             ^^^^^
  membership_number,
  background_picture_url,
  level,
  out_request_no,
  balance_information,
}, { card_id, code, })
.then(({ status }) => status === 204) // [!code hl]
```

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4012549292) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012709735)
