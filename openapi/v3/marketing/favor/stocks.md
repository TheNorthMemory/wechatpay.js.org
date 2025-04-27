---
title: 条件查询批次列表
description: 通过此接口可查询多个批次的信息，包括批次的配置信息以及批次概况数据。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

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
    data: {
      stock_id: string
      stock_creator_mchid: string
      stock_name: string
      status: string
      create_time: string
      description: string
      stock_use_rule: {
        max_coupons: number
        max_amount: number
        max_amount_by_day: number
        fixed_normal_coupon: {
          coupon_amount: number
          transaction_minimum: number
        },
        max_coupons_per_user: number
        coupon_type: string
        goods_tag: string[]
        trade_type: string[]
        combine_use: string
      },
      available_begin_time: string
      available_end_time: string
      distributed_coupons: number
      no_cash: string
      start_time: string
      stop_time: string
      cut_to_message: {
        single_price_max: number
        cut_to_price: number
      },
      singleitem: boolean
      stock_type: string
      card_id: string
      business_type?: 'MULTIUSE'
      available_region_list?: {
        type: string
        province: string
        city: string
        district: string
        country: string
      }[]
      available_industry_list?: string[]
    }[]
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
  ({ // [!code hl:13]
    data: {
      total_count,
      limit,
      offset,
      data,
    },
  }) => ({
    total_count,
    limit,
    offset,
    data,
  })
)
```

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4012460489) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012460518)
