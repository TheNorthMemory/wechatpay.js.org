---
title: 发放代金券
description: 商户平台/API完成制券后，可使用发放代金券接口发券。通过调用此接口可发放指定批次给指定用户，发券场景可以是小程序、H5、APP等。
---

# 发放代金券 {#post}

商户平台/API完成制券后，可使用发放代金券接口发券。通过调用此接口可发放指定批次给指定用户，发券场景可以是小程序、H5、APP等。 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/marketing/convention/chapter3_2.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Marketing.Favor.Users._openid_.Coupons.PostHttpMethod {
  export interface JsonDataRequest {
    stock_id: string
    out_request_no: string
    appid: string
    stock_creator_mchid: string
    coupon_value: number
    coupon_minimum: number
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
    openid: string
  }
  export interface WellformedResponse {
    coupon_id: string
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing.Favor.Users._openid_ {
  export interface Coupons {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/marketing/convention/chapter3_2.shtml
     */
    (data: Coupons.PostHttpMethod.JsonDataRequest, config: Coupons.PostHttpMethod.RequestConfig): AxiosPromise<Coupons.PostHttpMethod.WellformedResponse>
    /**
     * 发放代金券API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/marketing/convention/chapter3_2.shtml
     */
    post(data: Coupons.PostHttpMethod.JsonDataRequest, config: Coupons.PostHttpMethod.RequestConfig): AxiosPromise<Coupons.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing.Favor.Users {
  export interface _openid_ {
    coupons: _openid_.Coupons
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing.Favor {
  export interface Users {
    _openid_: Users._openid_
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing {
  export interface Favor {
    users: Favor.Users
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
wxpay.v3.marketing.favor.users._openid_.coupons.post({
//                                              ^^^^
  stock_id,
  out_request_no,
  appid,
  stock_creator_mchid,
  coupon_value,
  coupon_minimum,
}, { openid })
.then(
  ({ // [!code hl:7]
    data: {
      coupon_id,
    },
  }) => ({
    coupon_id,
  })
)
```

# 根据商户号查用户的券 {#get}

可通过该接口查询用户在某商户号可用的全部券，可用于商户的小程序/H5中，用户"我的代金券"或"提交订单页"展示优惠信息。无法查询到微信支付立减金。本接口查不到用户的微信支付立减金（又称“全平台通用券”），即在所有商户都可以使用的券，例如：摇摇乐红包 [官方文档](https://pay.weixin.qq.com/docs/merchant/apis/cash-coupons/coupon/list-coupons-by-filter.html) [官方文档](https://pay.weixin.qq.com/docs/partner/apis/cash-coupons/coupon/list-coupons-by-filter.html) [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/marketing/convention/chapter3_9.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Marketing.Favor.Users._openid_.Coupons.GetHttpMethod {
  export interface RequestConfig extends AxiosRequestConfig {
    openid: string
    params: {
      appid: string
      stock_id: string
      status: string
      creator_mchid: string
      sender_mchid: string
      available_mchid: string
      offset: number
      limit: number
      business_type?: 'MULTIUSE'
    }
  }
  export interface WellformedResponse {
    data: {
      stock_creator_mchid: string
      stock_id: string
      coupon_id: string
      coupon_name: string
      status: string
      description: string
      create_time: string | Date
      coupon_type: string
      start_time: string | Date
      stop_time: string | Date
      singleitem: boolean
      cut_to_message: {
        single_price_max: number
        cut_to_price: number
      }
      available_begin_time: string | Date
      available_end_time: string | Date
      normal_coupon_information: {
        coupon_amount: number
        transaction_minimum: number
      }
      consume_information: {
        consume_time: string | Date
        consume_mchid: string
        transaction_id: string
        goods_detail: {
          goods_id: string
          quantity: number
          price: number
          discount_amount: number
        }[]
      }
      available_balance?: number
      business_type?: 'MULTIUSE'
    }[]
    total_count: number
    offset: number
    limit: number
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing.Favor.Users._openid_ {
  export interface Coupons {
    /**
     * 根据商户号查用户的券
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/marketing/convention/chapter3_9.shtml
     */
    get(config: Coupons.GetHttpMethod.RequestConfig): AxiosPromise<Coupons.GetHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing.Favor.Users {
  export interface _openid_ {
    coupons: _openid_.Coupons
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing.Favor {
  export interface Users {
    _openid_: Users._openid_
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing {
  export interface Favor {
    users: Favor.Users
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
wxpay.v3.marketing.favor.users._openid_.coupons.get({
//                                              ^^^^
  openid,
  params,
})
.then(
  ({ // [!code hl:13]
    data: {
      data,
      total_count,
      limit,
      offset,
    },
  }) => ({
    data,
    total_count,
    limit,
    offset,
  })
)
```
