---
title: 查询/修改商家券详情
description: 商户可通过该接口查询(GET)已创建的商家券批次详情信息;也可以通过该接口修改(PATCH)商家券基本信息。
---

# 查询商家券详情 {#get}

商户可通过该接口查询已创建的商家券批次详情信息。 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/apis/chapter9_2_2.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Marketing.Busifavor.Stocks._stock_id_.GetHttpMethod {
  export interface RequestConfig extends AxiosRequestConfig {
    stock_id: string
  }
  export interface WellformedResponse {
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
      max_amount: number
      max_coupons: number
      max_coupons_per_user: number
      max_amount_by_day: number
      max_coupons_by_day: number
      natural_person_limit: boolean
      prevent_api_abuse: boolean
      transferable: boolean
      shareable: boolean
    }
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
    stock_state: string
    coupon_code_mode: string
    stock_id: string
    coupon_code_count: {
      total_count: number
      available_count: number
    }
    notify_config: {
      notify_appid: string
    }
    send_count_information: {
      total_send_num: number
      total_send_amount: number
      today_send_num: number
      today_send_amount: number
    }
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing.Busifavor.Stocks {
  export interface _stock_id_ {
    /**
     * 查询商家券详情API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/apis/chapter9_2_2.shtml
     */
    get(config: _stock_id_.GetHttpMethod.RequestConfig): AxiosPromise<_stock_id_.GetHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing.Busifavor {
  export interface Stocks {
    _stock_id_: Stocks._stock_id_
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
wxpay.v3.marketing.busifavor.stocks._stock_id_.get({
//                                             ^^^
  stock_id,
})
.then(
  ({ // [!code hl:35]
    data: {
      stock_name,
      belong_merchant,
      comment,
      goods_name,
      stock_type,
      coupon_use_rule,
      stock_send_rule,
      custom_entrance,
      display_pattern_info,
      stock_state,
      coupon_code_mode,
      stock_id,
      coupon_code_count,
      notify_config,
      send_count_information,
    },
  }) => ({
    stock_name,
    belong_merchant,
    comment,
    goods_name,
    stock_type,
    coupon_use_rule,
    stock_send_rule,
    custom_entrance,
    display_pattern_info,
    stock_state,
    coupon_code_mode,
    stock_id,
    coupon_code_count,
    notify_config,
    send_count_information,
  })
)
```

# 修改商家券基本信息 {#patch}

商户可以通过该接口修改商家券基本信息 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/apis/chapter9_2_12.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Marketing.Busifavor.Stocks._stock_id_.PatchHttpMethod {
  export interface JsonDataRequest {
    custom_entrance: {
      mini_programs_info: {
        mini_programs_appid: string
        mini_programs_path: string
        entrance_words: string
        guiding_words: string
      }
      appid: string
      hall_id: string
      code_display_mode: string
    }
    comment: string
    goods_name: string
    out_request_no: string
    display_pattern_info: {
      description: string
      background_color: string
      coupon_image_url: string
      finder_info: {
        finder_id: string
        finder_video_id: string
        finder_video_cover_image_url: string
      }
    }
    coupon_use_rule: {
      use_method: string
      mini_programs_appid: string
      mini_programs_path: string
    }
    stock_send_rule: {
      natural_person_limit: boolean
      prevent_api_abuse: boolean
    }
    notify_config: {
      notify_appid: string
    }
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
    stock_id: string
  }
  export interface WellformedResponse {
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing.Busifavor.Stocks {
  export interface _stock_id_ {
    /**
     * 修改商家券基本信息API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/apis/chapter9_2_12.shtml
     */
    patch(data: _stock_id_.PatchHttpMethod.JsonDataRequest, config: _stock_id_.PatchHttpMethod.RequestConfig): AxiosPromise<_stock_id_.PatchHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing.Busifavor {
  export interface Stocks {
    _stock_id_: Stocks._stock_id_
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
wxpay.v3.marketing.busifavor.stocks._stock_id_.patch({
//                                             ^^^^^
  custom_entrance,
  comment,
  goods_name,
  out_request_no,
  display_pattern_info,
  coupon_use_rule,
  stock_send_rule,
  notify_config,
}, { stock_id, })
.then(({ status, }) => status === 204) // [!code hl]
```
