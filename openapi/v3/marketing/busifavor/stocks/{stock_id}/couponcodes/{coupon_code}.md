---
title: 查询预存code详情
description: 查询或删除预存code
---

# 查询预存code详情 {#get}

[官方文档](https://pay.weixin.qq.com/docs/merchant/products/merchant-exclusive-coupon/introduction.html)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Marketing.Busifavor.Stocks._stock_id_.Couponcodes._coupon_code_.GetHttpMethod {
  export interface RequestConfig extends AxiosRequestConfig {
    stock_id: string
    coupon_code: string
    params: {
      appid: string
    }
  }
  export interface WellformedResponse {
    code_information: {
      code: string
      code_status: string
      upload_time: string | Date
      dispatched_time: string | Date
      openid: string
      unionid: string
      coupon_code: string
    }
    coupon_information: {
      stock_name: string
      belong_merchant: string
      comment: string
      goods_name: string
      stock_type: string
      transferable: boolean
      shareable: boolean
      coupon_state: string
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
    }
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing.Busifavor.Stocks._stock_id_.Couponcodes {
  export interface _coupon_code_ {
    /**
     * 查询预存code详情
     * @link https://pay.weixin.qq.com/docs/merchant/products/merchant-exclusive-coupon/introduction.html
     */
    get(config: _coupon_code_.GetHttpMethod.RequestConfig): AxiosPromise<_coupon_code_.GetHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing.Busifavor.Stocks._stock_id_ {
  export interface Couponcodes {
    _coupon_code_: Couponcodes._coupon_code_
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing.Busifavor.Stocks {
  export interface _stock_id_ {
    couponcodes: _stock_id_.Couponcodes
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
wxpay.v3.marketing.busifavor.stocks._stock_id_.couponcodes._coupon_code_.get({
//                                                                       ^^^
  stock_id,
  coupon_code,
  params,
})
.then(
  ({ // [!code hl:9]
    data: {
      code_information,
      coupon_information,
    },
  }) => ({
    code_information,
    coupon_information,
  })
)
```

# 删除预存code {#delete}

[官方文档](https://pay.weixin.qq.com/docs/merchant/products/merchant-exclusive-coupon/introduction.html)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Marketing.Busifavor.Stocks._stock_id_.Couponcodes._coupon_code_.DeleteHttpMethod {
  export interface RequestConfig extends AxiosRequestConfig {
    stock_id: string
    coupon_code: string
    params: {
      delete_request_no: string
    }
  }
  export interface WellformedResponse {
    stock_id: string
    delete_time: string | Date
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing.Busifavor.Stocks._stock_id_.Couponcodes {
  export interface _coupon_code_ {
    /**
     * 删除预存code
     * @link https://pay.weixin.qq.com/docs/merchant/products/merchant-exclusive-coupon/introduction.html
     */
    delete(config: _coupon_code_.DeleteHttpMethod.RequestConfig): AxiosPromise<_coupon_code_.DeleteHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing.Busifavor.Stocks._stock_id_ {
  export interface Couponcodes {
    _coupon_code_: Couponcodes._coupon_code_
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing.Busifavor.Stocks {
  export interface _stock_id_ {
    couponcodes: _stock_id_.Couponcodes
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
wxpay.v3.marketing.busifavor.stocks._stock_id_.couponcodes._coupon_code_.delete({
//                                                                       ^^^^^^
  stock_id,
  coupon_code,
  params,
})
.then(
  ({ // [!code hl:9]
    data: {
      stock_id,
      delete_time,
    },
  }) => ({
    stock_id,
    delete_time,
  })
)
```
