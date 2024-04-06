---
title: 查询代金券可用商户
description: 通过调用此接口可查询批次的可用商户号，判断券是否在某商户号可用，来决定是否展示。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/marketing/convention/chapter3_7.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Marketing.Favor.Stocks._stock_id_.Merchants.GetHttpMethod {
  export interface RequestConfig extends AxiosRequestConfig {
    stock_id: string
    params: {
      offset: number
      limit: string
      stock_creator_mchid: string
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
  export interface Merchants {
    /**
     * 查询代金券可用商户API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/marketing/convention/chapter3_7.shtml
     */
    get(config: Merchants.GetHttpMethod.RequestConfig): AxiosPromise<Merchants.GetHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing.Favor.Stocks {
  export interface _stock_id_ {
    merchants: _stock_id_.Merchants
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
wxpay.v3.marketing.favor.stocks._stock_id_.merchants.get({
//                                                   ^^^
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
