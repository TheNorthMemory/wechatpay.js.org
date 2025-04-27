---
title: 查询用户在品牌下所有会员卡
description: 通过此接口可查询用户在当前品牌下领取的所有会员卡
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Marketing.MembercardOpen.User.Cards.GetHttpMethod {
  export interface RequestConfig extends AxiosRequestConfig {
    params: {
      openid: string
      appid: string
      offset: number
      limit: number
    }
  }
  export interface WellformedResponse {
    data: {
      card_id: string
      code: string
    }[]
    total_count: number
    offset: number
    limit: number
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing.MembercardOpen.User {
  export interface Cards {
    /**
     * 查询用户在品牌下所有会员卡API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/marketing/membercard_open/chapter3_5.shtml
     */
    get(config: Cards.GetHttpMethod.RequestConfig): AxiosPromise<Cards.GetHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing.MembercardOpen {
  export interface User {
    cards: User.Cards
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing {
  export interface MembercardOpen {
    user: MembercardOpen.User
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
wxpay.v3.marketing.membercardOpen.user.cards.get({
//                                           ^^^
  params,
})
.then(
  ({ // [!code hl:13]
    data: {
      data,
      total_count,
      offset,
      limit,
    },
  }) => ({
    data,
    total_count,
    offset,
    limit,
  })
)
```

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4012549255) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012709674)
