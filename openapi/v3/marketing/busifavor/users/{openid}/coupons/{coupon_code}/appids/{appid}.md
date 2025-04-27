---
title: 查询用户单张券详情
description: 服务商可通过该接口查询微信用户卡包中某一张商家券的详情信息。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Marketing.Busifavor.Users._openid_.Coupons._coupon_code_.Appids._appid_.GetHttpMethod {
  export interface RequestConfig extends AxiosRequestConfig {
    coupon_code: string
    appid: string
    openid: string
  }
  export interface WellformedResponse {
    stock_name: string
    belong_merchant: string
    comment: string
    goods_name: string
    stock_type: string
    coupon_use_rule: {
      coupon_available_time: {
        available_begin_time: string | Date
        available_end_time: string | Date
        available_day_after_receive: number
      }
      available_week: {
        week_day: number[]
        available_day_time: {
          begin_time: number
          end_time: number
        }[]
      }
      irregulary_avaliable_time: {
        begin_time: string | Date
        end_time: string | Date
      }[]
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
    coupon_code: string
    coupon_state: string
    stock_id: string
    transferable: boolean
    shareable: boolean
    send_request_no: string
    use_request_no: string
    available_start_time: string | Date
    expire_time: string | Date
    receive_time: string | Date
    use_time: string | Date
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing.Busifavor.Users._openid_.Coupons._coupon_code_.Appids {
  export interface _appid_ {
    /**
     * 查询用户单张券详情API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/marketing/busifavor/chapter3_5.shtml
     */
    get(config: _appid_.GetHttpMethod.RequestConfig): AxiosPromise<_appid_.GetHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing.Busifavor.Users._openid_.Coupons._coupon_code_ {
  export interface Appids {
    _appid_: Appids._appid_
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing.Busifavor.Users._openid_.Coupons {
  export interface _coupon_code_ {
    appids: _coupon_code_.Appids
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing.Busifavor.Users._openid_ {
  export interface Coupons {
    _coupon_code_: Coupons._coupon_code_
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing.Busifavor.Users {
  export interface _openid_ {
    coupons: _openid_.Coupons
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing.Busifavor {
  export interface Users {
    _openid_: Users._openid_
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing {
  export interface Busifavor {
    users: Busifavor.Users
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
wxpay.v3.marketing.busifavor.users._openid_.coupons._coupon_code_.appids._appid_.get({
//                                                                               ^^^
  coupon_code,
  appid,
  openid,
})
.then(
  ({ // [!code hl:43]
    data: {
      stock_name,
      belong_merchant,
      comment,
      goods_name,
      stock_type,
      coupon_use_rule,
      custom_entrance,
      display_pattern_info,
      coupon_code,
      coupon_state,
      stock_id,
      transferable,
      shareable,
      send_request_no,
      use_request_no,
      available_start_time,
      expire_time,
      receive_time,
      use_time,
    },
  }) => ({
    stock_name,
    belong_merchant,
    comment,
    goods_name,
    stock_type,
    coupon_use_rule,
    custom_entrance,
    display_pattern_info,
    coupon_code,
    coupon_state,
    stock_id,
    transferable,
    shareable,
    send_request_no,
    use_request_no,
    available_start_time,
    expire_time,
    receive_time,
    use_time,
  })
)
```

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4012535011) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012693103)
