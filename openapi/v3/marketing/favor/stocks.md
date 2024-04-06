---
title: 条件查询批次列表
description: 通过此接口可查询多个批次的信息，包括批次的配置信息以及批次概况数据。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/marketing/convention/chapter3_4.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Marketing.Favor.Stocks.GetHttpMethod {
  export interface RequestConfig extends AxiosRequestConfig {
    params: {
      offset: number
      limit: number
      stock_creator_mchid: string
      create_start_time: string
      create_end_time: string
      status: string
    }
  }
  export interface WellformedResponse {
    total_count: number
    limit: number
    offset: number
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing.Favor {
  export interface Stocks {
    /**
     * 条件查询批次列表API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/marketing/convention/chapter3_4.shtml
     */
    get(config: Stocks.GetHttpMethod.RequestConfig): AxiosPromise<Stocks.GetHttpMethod.WellformedResponse>
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
wxpay.v3.marketing.favor.stocks.get({
//                              ^^^
  params,
})
.then(
  ({ // [!code hl:11]
    data: {
      total_count,
      limit,
      offset,
    },
  }) => ({
    total_count,
    limit,
    offset,
  })
)
```
