---
title: 支付结果页展示会员积分
description: 商户调此接口，可以给用户每笔订单支付结果页展示本次订单会员积分变更信息
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Marketing.MembercardOpen.Cards._card_id_.Codes._code_.Bonus.Prepare.PostHttpMethod {
  export interface JsonDataRequest {
    out_trade_no: string
    mchid: string
    sub_mchid: string
    bonus_value: number
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
    card_id: string
    code: string
  }
  export interface WellformedResponse {
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing.MembercardOpen.Cards._card_id_.Codes._code_.Bonus {
  export interface Prepare {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/marketing/membercard_open/chapter10_3.shtml
     */
    (data: Prepare.PostHttpMethod.JsonDataRequest, config: Prepare.PostHttpMethod.RequestConfig): AxiosPromise<Prepare.PostHttpMethod.WellformedResponse>
    /**
     * 支付结果页展示会员积分API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/marketing/membercard_open/chapter10_3.shtml
     */
    post(data: Prepare.PostHttpMethod.JsonDataRequest, config: Prepare.PostHttpMethod.RequestConfig): AxiosPromise<Prepare.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing.MembercardOpen.Cards._card_id_.Codes._code_ {
  export interface Bonus {
    prepare: Bonus.Prepare
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing.MembercardOpen.Cards._card_id_.Codes {
  export interface _code_ {
    bonus: _code_.Bonus
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
wxpay.v3.marketing.membercardOpen.cards._card_id_.codes._code_.bonus.prepare.post({
//                                                                           ^^^^
  out_trade_no,
  mchid,
  sub_mchid,
  bonus_value,
}, { card_id, code, })
.then(({ status }) => status === 204) // [!code hl]
```

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4012595808) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012729629)
