---
title: 创建代金券批次
description: 通过调用此接口可创建代金券批次，包括预充值&免充值类型。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/marketing/convention/chapter3_1.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Marketing.Favor.CouponStocks.PostHttpMethod {
  export interface JsonDataRequest {
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
    comment: string
    belong_merchant: string
    pattern_info: {
      description: string
      merchant_logo: string
      merchant_name: string
      background_color: string
      coupon_image: string
    }
    coupon_use_rule: {
      coupon_available_time: {
        available_begin_time: string | Date
        available_end_time: string | Date
        fix_available_time: {
          available_week_day: number[]
          begin_time: number
          end_time: number
        }
        second_day_available: boolean
        available_time_after_receive: number
      }
      fixed_normal_coupon: {
        coupon_amount: number
        transaction_minimum: number
      }
      discount_coupon: {
        discount_amount_max: number
        discount_percent: number
        transaction_minimum: number
      }
      exchange_coupon: {
        exchange_price: number
        transaction_minimum: number
      }
      goods_tag: string[]
      limit_pay: string[]
      limit_card: {
        name: string
        bin: string[]
      }
      trade_type: string[]
      available_items: string[]
      unavailable_items: string[]
      available_merchants: string[]
    }
    out_request_no: string
    ext_info: string
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
  }
  export interface WellformedResponse {
    stock_id: string
    create_time: string | Date
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing.Favor {
  export interface CouponStocks {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/marketing/convention/chapter3_1.shtml
     */
    (data: CouponStocks.PostHttpMethod.JsonDataRequest, config?: CouponStocks.PostHttpMethod.RequestConfig): AxiosPromise<CouponStocks.PostHttpMethod.WellformedResponse>
    /**
     * 创建代金券批次API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/marketing/convention/chapter3_1.shtml
     */
    post(data: CouponStocks.PostHttpMethod.JsonDataRequest, config?: CouponStocks.PostHttpMethod.RequestConfig): AxiosPromise<CouponStocks.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing {
  export interface Favor {
    couponStocks: Favor.CouponStocks
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
wxpay.v3.marketing.favor.couponStocks.post({
//                                    ^^^^
  stock_name,
  available_begin_time,
  available_end_time,
  stock_use_rule,
  no_cash,
  stock_type,
  comment,
  belong_merchant,
  pattern_info,
  coupon_use_rule,
  out_request_no,
  ext_info,
})
.then(
  ({ // [!code hl:9]
    data: {
      stock_id,
      create_time,
    },
  }) => ({
    stock_id,
    create_time,
  })
)
```
