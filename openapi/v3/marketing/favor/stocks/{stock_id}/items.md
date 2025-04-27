---
title: 查询代金券可用单品
description: 通过此接口可查询批次的可用商品编码，判断券是否可用于某些商品，来决定是否展示。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Marketing.Favor.Stocks._stock_id_.Items.GetHttpMethod {
  export interface RequestConfig extends AxiosRequestConfig {
    stock_id: string
    params: {
      stock_creator_mchid: string
      offset: number
      limit: string
    }
  }
  export interface WellformedResponse {
    total_count: number
    data: string[]
    offset: number
    limit: number
    stock_id: string
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing.Favor.Stocks._stock_id_ {
  export interface Items {
    /**
     * 查询代金券可用单品API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/marketing/convention/chapter3_8.shtml
     */
    get(config: Items.GetHttpMethod.RequestConfig): AxiosPromise<Items.GetHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing.Favor.Stocks {
  export interface _stock_id_ {
    items: _stock_id_.Items
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing.Favor {
  export interface Stocks {
    _stock_id_: Stocks._stock_id_
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing {
  export interface Favor {
    stocks: Favor.Stocks
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface Marketing {
    favor: Marketing.Favor
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
wxpay.v3.marketing.favor.stocks._stock_id_.items.get({
//                                               ^^^
  stock_id,
  params,
})
.then(
  ({ // [!code hl:15]
    data: {
      total_count,
      data,
      offset,
      limit,
      stock_id,
    },
  }) => ({
    total_count,
    data,
    offset,
    limit,
    stock_id,
  })
)
```

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4012463442) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012463475)
