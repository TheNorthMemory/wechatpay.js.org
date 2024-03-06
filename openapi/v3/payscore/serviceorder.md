---
title: 创建及查询支付分订单
description: 用户申请使用服务时，商户可通过此接口申请创建/查询单笔微信支付分订单。
---

# 创建支付分订单 {#post}

用户申请使用服务时，商户可通过此接口申请创建微信支付分订单。 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/payscore/chapter3_1.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Payscore.Serviceorder.PostHttpMethod {
  export interface JsonDataRequest {
    out_order_no: string
    appid: string
    service_id: string
    post_payments: {
      name: string
      amount: number
      description: string
      count: number
    }[]
    post_discounts: {
      name: string
      description: string
      amount: number
      count: number
    }[]
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
    service_introduction: string
    risk_fund: {
      name: string
      amount: number
      description: string
    }
    attach: string
    notify_url: string
    openid: string
    need_user_confirm: boolean
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
  }
  export interface WellformedResponse {
    out_order_no: string
    appid: string
    service_id: string
    post_payments: {
      name: string
      amount: number
      description: string
      count: number
    }[]
    post_discounts: {
      name: string
      description: string
      amount: number
      count: number
    }[]
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
    service_introduction: string
    risk_fund: {
      name: string
      amount: number
      description: string
    }
    attach: string
    notify_url: string
    mchid: string
    state: string
    state_description: string
    order_id: string
    package: string
  }
}
namespace WeChatPay.OpenAPI.V3.Payscore {
  export interface Serviceorder {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/payscore/chapter3_1.shtml
     */
    (data: Serviceorder.PostHttpMethod.JsonDataRequest, config?: Serviceorder.PostHttpMethod.RequestConfig): AxiosPromise<Serviceorder.PostHttpMethod.WellformedResponse>
    /**
     * 创建支付分订单API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/payscore/chapter3_1.shtml
     */
    post(data: Serviceorder.PostHttpMethod.JsonDataRequest, config?: Serviceorder.PostHttpMethod.RequestConfig): AxiosPromise<Serviceorder.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface Payscore {
    serviceorder: Payscore.Serviceorder
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
wxpay.v3.payscore.serviceorder.post({
//                             ^^^^
  out_order_no,
  appid,
  service_id,
  post_payments,
  post_discounts,
  time_range,
  location,
  service_introduction,
  risk_fund,
  attach,
  notify_url,
  openid,
  need_user_confirm,
})
.then(
  ({ // [!code hl:37]
    data: {
      out_order_no,
      appid,
      service_id,
      post_payments,
      post_discounts,
      time_range,
      location,
      service_introduction,
      risk_fund,
      attach,
      notify_url,
      mchid,
      state,
      state_description,
      order_id,
      package: packageStr,
    },
  }) => ({
    out_order_no,
    appid,
    service_id,
    post_payments,
    post_discounts,
    time_range,
    location,
    service_introduction,
    risk_fund,
    attach,
    notify_url,
    mchid,
    state,
    state_description,
    order_id,
    package: packageStr,
  })
)
```

# 查询支付分订单 {#get}

用于查询单笔微信支付分订单详细信息。 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/payscore/chapter3_2.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Payscore.Serviceorder.GetHttpMethod {
  export interface RequestConfig extends AxiosRequestConfig {
    params: {
      out_order_no: string
      query_id: string
      service_id: string
      appid: string
    }
  }
  export interface WellformedResponse {
    out_order_no: string
    appid: string
    service_id: string
    post_payments: {
      name: string
      amount: number
      description: string
      count: number
    }[]
    post_discounts: {
      name: string
      description: string
      amount: number
      count: number
    }[]
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
    service_introduction: string
    risk_fund: {
      name: string
      amount: number
      description: string
    }
    attach: string
    notify_url: string
    mchid: string
    state: string
    state_description: string
    order_id: string
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
    openid: string
  }
}
namespace WeChatPay.OpenAPI.V3.Payscore.Serviceorder.PostHttpMethod {
  export interface JsonDataRequest {
    out_order_no: string
    appid: string
    service_id: string
    post_payments: {
      name: string
      amount: number
      description: string
      count: number
    }[]
    post_discounts: {
      name: string
      description: string
      amount: number
      count: number
    }[]
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
    service_introduction: string
    risk_fund: {
      name: string
      amount: number
      description: string
    }
    attach: string
    notify_url: string
    openid: string
    need_user_confirm: boolean
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
  }
  export interface WellformedResponse {
    out_order_no: string
    appid: string
    service_id: string
    post_payments: {
      name: string
      amount: number
      description: string
      count: number
    }[]
    post_discounts: {
      name: string
      description: string
      amount: number
      count: number
    }[]
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
    service_introduction: string
    risk_fund: {
      name: string
      amount: number
      description: string
    }
    attach: string
    notify_url: string
    mchid: string
    state: string
    state_description: string
    order_id: string
    package: string
  }
}
namespace WeChatPay.OpenAPI.V3.Payscore {
  export interface Serviceorder {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/payscore/chapter3_1.shtml
     */
    (data: Serviceorder.PostHttpMethod.JsonDataRequest, config?: Serviceorder.PostHttpMethod.RequestConfig): AxiosPromise<Serviceorder.PostHttpMethod.WellformedResponse>
    /**
     * 创建支付分订单API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/payscore/chapter3_1.shtml
     */
    post(data: Serviceorder.PostHttpMethod.JsonDataRequest, config?: Serviceorder.PostHttpMethod.RequestConfig): AxiosPromise<Serviceorder.PostHttpMethod.WellformedResponse>
    /**
     * 查询支付分订单API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/payscore/chapter3_2.shtml
     */
    get(config: Serviceorder.GetHttpMethod.RequestConfig): AxiosPromise<Serviceorder.GetHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface Payscore {
    serviceorder: Payscore.Serviceorder
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
wxpay.v3.payscore.serviceorder.get({
//                             ^^^
  params,
})
.then(
  ({ // [!code hl:37]
    data: {
      out_order_no,
      appid,
      service_id,
      post_payments,
      post_discounts,
      time_range,
      location,
      service_introduction,
      risk_fund,
      attach,
      notify_url,
      mchid,
      state,
      state_description,
      order_id,
      package: packageStr,
    },
  }) => ({
    out_order_no,
    appid,
    service_id,
    post_payments,
    post_discounts,
    time_range,
    location,
    service_introduction,
    risk_fund,
    attach,
    notify_url,
    mchid,
    state,
    state_description,
    order_id,
    package: packageStr,
  })
)
```
