---
title: 查询代金券详情
description: 通过此接口可查询代金券信息，包括代金券的基础信息、状态。如代金券已核销，会包括代金券核销的订单信息（订单号、单品信息等）。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/docs/merchant/apis/cash-coupons/coupon/query-coupon.html) [官方文档](https://pay.weixin.qq.com/docs/partner/apis/cash-coupons/coupon/query-coupon.html) [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/marketing/convention/chapter3_6.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Marketing.Favor.Users._openid_.Coupons._coupon_id_.GetHttpMethod {
  export interface RequestConfig extends AxiosRequestConfig {
    openid: string
    coupon_id: string
    params: {
      appid: string
    }
  }
  export interface WellformedResponse {
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
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing.Favor.Users._openid_.Coupons {
  export interface _coupon_id_ {
    /**
     * 查询代金券详情API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/marketing/convention/chapter3_6.shtml
     */
    get(config: _coupon_id_.GetHttpMethod.RequestConfig): AxiosPromise<_coupon_id_.GetHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing.Favor.Users._openid_ {
  export interface Coupons {
    _coupon_id_: Coupons._coupon_id_
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
wxpay.v3.marketing.favor.users._openid_.coupons._coupon_id_.get({
//                                                          ^^^
  openid,
  coupon_id,
  params,
})
.then(
  ({ // [!code hl:41]
    data: {
      stock_creator_mchid,
      stock_id,
      coupon_id,
      coupon_name,
      status,
      description,
      create_time,
      coupon_type,
      start_time,
      stop_time,
      singleitem,
      cut_to_message,
      available_begin_time,
      available_end_time,
      normal_coupon_information,
      consume_information,
      available_balance,
      business_type,
    },
  }) => ({
    stock_creator_mchid,
    stock_id,
    coupon_id,
    coupon_name,
    status,
    description,
    create_time,
    coupon_type,
    start_time,
    stop_time,
    singleitem,
    cut_to_message,
    available_begin_time,
    available_end_time,
    normal_coupon_information,
    consume_information,
    available_balance,
    business_type,
  })
)
```
