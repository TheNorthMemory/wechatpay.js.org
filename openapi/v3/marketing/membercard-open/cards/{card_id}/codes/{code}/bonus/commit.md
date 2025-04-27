---
title: 设置支付后展示的积分到账
description: 商户调此接口，若已设置支付后展示积分，且该笔订单对应的积分已到账，则可以入参积分对应的交易商户号+商户订单号将该笔支付后展示的积分状态设置为“已到账”
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Marketing.MembercardOpen.Cards._card_id_.Codes._code_.Bonus.Commit.PostHttpMethod {
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
  export interface Commit {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/marketing/membercard_open/chapter10_2.shtml
     */
    (data: Commit.PostHttpMethod.JsonDataRequest, config: Commit.PostHttpMethod.RequestConfig): AxiosPromise<Commit.PostHttpMethod.WellformedResponse>
    /**
     * 设置支付后展示的积分到账API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/marketing/membercard_open/chapter10_2.shtml
     */
    post(data: Commit.PostHttpMethod.JsonDataRequest, config: Commit.PostHttpMethod.RequestConfig): AxiosPromise<Commit.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing.MembercardOpen.Cards._card_id_.Codes._code_ {
  export interface Bonus {
    commit: Bonus.Commit
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
wxpay.v3.marketing.membercardOpen.cards._card_id_.codes._code_.bonus.commit.post({
//                                                                          ^^^^
  out_trade_no,
  mchid,
  sub_mchid,
  bonus_value,
}, { card_id, code, })
.then(({ status }) => status === 204) // [!code hl]
```

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4012551350) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012729634)
