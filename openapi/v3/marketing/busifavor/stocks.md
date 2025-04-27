---
title: 创建商家券
description: 商户可以通过该接口创建商家券。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Marketing.Busifavor.Stocks.PostHttpMethod {
  export interface JsonDataRequest {
    stock_name: string
    belong_merchant: string
    comment: string
    goods_name: string
    stock_type: string
    coupon_use_rule: {
      coupon_available_time: {
        available_begin_time: string
        available_end_time: string
        available_day_after_receive: number
        available_week: {
          week_day: []
          available_day_time: {
            begin_time: number
            end_time: number
          }[]
        }
        irregulary_avaliable_time: {
          begin_time: string
          end_time: string
        }[]
        wait_days_after_receive: number
      }
      fixed_normal_coupon: {
        discount_amount: number
        transaction_minimum: number
      }
      discount_coupon: {
        discount_percent: number
        transaction_minimum: number
      }
      exchange_coupon: {
        exchange_price: number
        transaction_minimum: number
      }
      use_method: string
      mini_programs_appid: string
      mini_programs_path: string
    }
    stock_send_rule: {
      max_coupons: number
      max_coupons_per_user: number
      max_coupons_by_day: number
      natural_person_limit: boolean
      prevent_api_abuse: boolean
      transferable: boolean
      shareable: boolean
    }
    out_request_no: string
    custom_entrance: {
      mini_programs_info: {
        mini_programs_appid: string
        mini_programs_path: string
        entrance_words: string
        guiding_words: string
      }
      appid: string
      hall_id: string
      store_id: string
      code_display_mode: string
    }
    display_pattern_info: {
      description: string
      merchant_logo_url: string
      merchant_name: string
      background_color: string
      coupon_image_url: string
      finder_info: {
        finder_id: string
        finder_video_id: string
        finder_video_cover_image_url: string
      }
    }
    coupon_code_mode: string
    notify_config: {
      notify_appid: string
    }
    subsidy: boolean
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
  }
  export interface WellformedResponse {
    stock_id: string
    create_time: string
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing.Busifavor {
  export interface Stocks {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/apis/chapter9_2_1.shtml
     */
    (data: Stocks.PostHttpMethod.JsonDataRequest, config?: Stocks.PostHttpMethod.RequestConfig): AxiosPromise<Stocks.PostHttpMethod.WellformedResponse>
    /**
     * 创建商家券API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/apis/chapter9_2_1.shtml
     */
    post(data: Stocks.PostHttpMethod.JsonDataRequest, config?: Stocks.PostHttpMethod.RequestConfig): AxiosPromise<Stocks.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing {
  export interface Busifavor {
    stocks: Busifavor.Stocks
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface Marketing {
    busifavor: Marketing.Busifavor
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
wxpay.v3.marketing.busifavor.stocks.post({
//                                  ^^^^
  stock_name,
  belong_merchant,
  comment,
  goods_name,
  stock_type,
  coupon_use_rule,
  stock_send_rule,
  out_request_no,
  custom_entrance,
  display_pattern_info,
  coupon_code_mode,
  notify_config,
  subsidy,
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

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4012534855) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012692931)
