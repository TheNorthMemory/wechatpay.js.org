---
title: 创建及查询支付分订单(合作伙伴模式)
description: 用户申请使用服务时，商户可通过此接口申请创建/查询单笔微信支付分订单。
---

# 创建支付分订单(合作伙伴模式) {#post}

用户申请使用服务时，商户可通过此接口申请创建微信支付分订单。 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3_partner/Offline/apis/chapter6_2_1.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Payscore.Partner.Serviceorder.PostHttpMethod {
  export interface JsonDataRequest {
    service_id: string
    appid: string
    sub_mchid: string
    sub_appid: string
    out_order_no: string
    service_introduction: string
    post_payments: {
      name: string
      description: string
      amount: number
      count: number
    }[]
    post_discounts: {
      name: string
      description: string
      count: number
    }[]
    risk_fund: {
      name: string
      amount: number
      description: string
    }
    time_range: {
      start_time: string
      start_time_remark: string
      end_time: string
      end_time_remark: string
    }
    location: {
      start_location: string
      end_location: string
    }
    openid: string
    sub_openid: string
    need_user_confirm: boolean
    notify_url: string
    attach: string
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
  }
  export interface WellformedResponse {
    out_order_no: string
    service_id: string
    appid: string
    mchid: string
    sub_appid: string
    sub_mchid: string
    service_introduction: string
    state: string
    state_description: string
    post_payments: {
      name: string
      description: string
      amount: number
      count: number
    }[]
    post_discounts: {
      name: string
      description: string
      count: number
    }[]
    risk_fund: {
      name: string
      amount: number
      description: string
    }
    time_range: {
      start_time: string
      start_time_remark: string
      end_time: string
      end_time_remark: string
    }
    location: {
      start_location: string
      end_location: string
    }
    attach: string
    notify_url: string
    order_id: string
    package: string
  }
}
namespace WeChatPay.OpenAPI.V3.Payscore.Partner {
  export interface Serviceorder {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3_partner/Offline/apis/chapter6_2_1.shtml
     */
    (data: Serviceorder.PostHttpMethod.JsonDataRequest, config?: Serviceorder.PostHttpMethod.RequestConfig): AxiosPromise<Serviceorder.PostHttpMethod.WellformedResponse>
    /**
     * 创建支付分订单API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3_partner/Offline/apis/chapter6_2_1.shtml
     */
    post(data: Serviceorder.PostHttpMethod.JsonDataRequest, config?: Serviceorder.PostHttpMethod.RequestConfig): AxiosPromise<Serviceorder.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Payscore {
  export interface Partner {
    serviceorder: Partner.Serviceorder
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface Payscore {
    partner: Payscore.Partner
  }
}
namespace WeChatPay.OpenAPI {
  export interface V3 {
    payscore: V3.Payscore
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
wxpay.v3.payscore.partner.serviceorder.post({
//                                     ^^^^
  service_id,
  appid,
  sub_mchid,
  sub_appid,
  out_order_no,
  service_introduction,
  post_payments,
  post_discounts,
  risk_fund,
  time_range,
  location,
  openid,
  sub_openid,
  need_user_confirm,
  notify_url,
  attach,
})
.then(
  ({ // [!code hl:41]
    data: {
      out_order_no,
      service_id,
      appid,
      mchid,
      sub_appid,
      sub_mchid,
      service_introduction,
      state,
      state_description,
      post_payments,
      post_discounts,
      risk_fund,
      time_range,
      location,
      attach,
      notify_url,
      order_id,
      package: packageStr,
    },
  }) => ({
    out_order_no,
    service_id,
    appid,
    mchid,
    sub_appid,
    sub_mchid,
    service_introduction,
    state,
    state_description,
    post_payments,
    post_discounts,
    risk_fund,
    time_range,
    location,
    attach,
    notify_url,
    order_id,
    package: packageStr,
  })
)
```

# 查询支付分订单(合作伙伴模式) {#get}

用于查询单笔微信支付分订单详细信息。 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3_partner/Offline/apis/chapter6_2_2.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Payscore.Partner.Serviceorder.GetHttpMethod {
  export interface RequestConfig extends AxiosRequestConfig {
    params: {
      service_id: string
      sub_mchid: string
      out_order_no: string
      query_id: string
    }
  }
  export interface WellformedResponse {
    out_order_no: string
    service_id: string
    appid: string
    mchid: string
    sub_appid: string
    sub_mchid: string
    service_introduction: string
    state: string
    state_description: string
    post_payments: {
      name: string
      description: string
      amount: number
      count: number
    }[]
    post_discounts: {
      name: string
      description: string
      amount: number
      count: number
    }[]
    risk_fund: {
      name: string
      amount: number
      description: string
    }
    total_amount: number
    need_collection: boolean
    collection: {
      state: string
      total_amount: number
      paying_amount: number
      paid_amount: number
      details: {
        seq: number
        amount: number
        paid_type: string
        paid_time: string
        transaction_id: string
        promotion_detail: {
          coupon_id: string
          name: string
          scope: string
          type: string
          amount: number
          stock_id: string
          wechatpay_contribute: number
          merchant_contribute: number
          other_contribute: number
          currency: string
          goods_detail: {
            goods_id: string
            quantity: number
            unit_price: number
            discount_amount: number
            goods_remark: string
          }[]
        }[]
      }[]
    }
    time_range: {
      start_time: string
      start_time_remark: string
      end_time: string
      end_time_remark: string
    }
    location: {
      start_location: string
      end_location: string
    }
    attach: string
    notify_url: string
    openid: string
    sub_openid: string
    order_id: string
    package?: string
  }
}
namespace WeChatPay.OpenAPI.V3.Payscore.Partner {
  export interface Serviceorder {
    /**
     * 查询支付分订单API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3_partner/Offline/apis/chapter6_2_2.shtml
     */
    get(config: Serviceorder.GetHttpMethod.RequestConfig): AxiosPromise<Serviceorder.GetHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Payscore {
  export interface Partner {
    serviceorder: Partner.Serviceorder
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface Payscore {
    partner: Payscore.Partner
  }
}
namespace WeChatPay.OpenAPI {
  export interface V3 {
    payscore: V3.Payscore
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
wxpay.v3.payscore.partner.serviceorder.get({
//                                     ^^^
  params,
})
.then(
  ({ // [!code hl:41]
    data: {
      out_order_no,
      service_id,
      appid,
      mchid,
      sub_appid,
      sub_mchid,
      service_introduction,
      state,
      state_description,
      post_payments,
      post_discounts,
      risk_fund,
      time_range,
      location,
      attach,
      notify_url,
      order_id,
      package: packageStr,
    },
  }) => ({
    out_order_no,
    service_id,
    appid,
    mchid,
    sub_appid,
    sub_mchid,
    service_introduction,
    state,
    state_description,
    post_payments,
    post_discounts,
    risk_fund,
    time_range,
    location,
    attach,
    notify_url,
    order_id,
    package: packageStr,
  })
)
```
