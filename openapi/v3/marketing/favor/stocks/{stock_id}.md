---
title: 查询批次详情
description: 通过此接口可查询批次信息，包括批次的配置信息以及批次概况数据。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/marketing/convention/chapter3_5.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Marketing.Favor.Stocks._stock_id_.GetHttpMethod {
  export interface RequestConfig extends AxiosRequestConfig {
    stock_id: string
    params: {
      stock_creator_mchid: string
    }
  }
  export interface WellformedResponse {
    stock_name: string
    available_begin_time: string | Date
    available_end_time: string | Date
    stock_use_rule: {
      max_coupons: number
      max_amount: number
      max_amount_by_day: number
      max_coupons_per_user: number
      natural_person_limit: boolean
      prevent_api_abuse: boolean
    }
    no_cash: boolean
    stock_type: string
    stock_id: string
    stock_creator_mchid: string
    status: string
    description: string
    create_time: string | Date
    start_time: string | Date
    stop_time: string | Date
    singleitem: boolean
    cut_to_message: {
      single_price_max: number
      cut_to_price: number
    }
    distributed_coupons: number
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing.Favor.Stocks {
  export interface _stock_id_ {
    /**
     * 查询批次详情API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/marketing/convention/chapter3_5.shtml
     */
    get(config: _stock_id_.GetHttpMethod.RequestConfig): AxiosPromise<_stock_id_.GetHttpMethod.WellformedResponse>
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
wxpay.v3.marketing.favor.stocks._stock_id_.get({
//                                         ^^^
  stock_id,
  params,
})
.then(
  ({ // [!code hl:37]
    data: {
      stock_name,
      available_begin_time,
      available_end_time,
      stock_use_rule,
      no_cash,
      stock_type,
      stock_id,
      stock_creator_mchid,
      status,
      description,
      create_time,
      start_time,
      stop_time,
      singleitem,
      cut_to_message,
      distributed_coupons,
    },
  }) => ({
    stock_name,
    available_begin_time,
    available_end_time,
    stock_use_rule,
    no_cash,
    stock_type,
    stock_id,
    stock_creator_mchid,
    status,
    description,
    create_time,
    start_time,
    stop_time,
    singleitem,
    cut_to_message,
    distributed_coupons,
  })
)
```
