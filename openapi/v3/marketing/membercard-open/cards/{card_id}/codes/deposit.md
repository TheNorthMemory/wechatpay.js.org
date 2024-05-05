---
title: 导入会员Code 
description: 如果会员卡的code分配类型是“预存code”模式，商户可向特定会员卡card_id导入code，导入后自动将会员卡库存数量更新成code数量。用户领取会员卡时，将从这些code里随机分配。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/marketing/membercard_open/chapter3_7.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Marketing.MembercardOpen.Cards._card_id_.Codes.Deposit.PostHttpMethod {
  export interface JsonDataRequest {
    code: string[]
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
    card_id: string
  }
  export interface WellformedResponse {
    data: {
      code: string
      result: 'SUCCESS'|'DUPLICATE'|'FAIL'
    }[]
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing.MembercardOpen.Cards._card_id_.Codes {
  export interface Deposit {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/marketing/membercard_open/chapter3_7.shtml
     */
    (data: Deposit.PostHttpMethod.JsonDataRequest, config: Deposit.PostHttpMethod.RequestConfig): AxiosPromise<Deposit.PostHttpMethod.WellformedResponse>
    /**
     * 导入会员Code API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/marketing/membercard_open/chapter3_7.shtml
     */
    post(data: Deposit.PostHttpMethod.JsonDataRequest, config: Deposit.PostHttpMethod.RequestConfig): AxiosPromise<Deposit.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing.MembercardOpen.Cards._card_id_ {
  export interface Codes {
    deposit: Codes.Deposit
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
wxpay.v3.marketing.membercardOpen.cards._card_id_.codes.deposit.post({
//                                                              ^^^^
  code,
}, { card_id, })
.then(
  ({ // [!code hl:7]
    data: {
      data,
    },
  }) => ({
    data,
  })
)
```
