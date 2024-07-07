---
title: 创建先用后付订单
description: 用户在购买带有“先用后付”服务标识的商品，有机会享受“0元下单，确认收货再付款”的专享服务，加入先用后付服务后，可先0元下单在商品确认收货之前消费者可以选择付款/退货。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/docs/merchant/apis/weixin-pay-score/service-order/create-pay-on-delivery-service-order.html)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Payscore.Servicepayondeliveryorder.PostHttpMethod {
  export interface JsonDataRequest {
    out_order_no: string
    appid: string
    service_id: string
    service_introduction: string
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
    risk_fund: {
      name: string
      amount: number
      description: string
    }
    attach: string
    notify_url: string
    openid: string
    need_user_confirm: boolean
    mchid: string
    shopping_info: {
      real_merchant_appid: string
      jump_link: {
        jump_link_type: string
        appid: string
        path: string
      }
      goods: {
        name: string
        picture: string
        amount: number
        count: number
        category_id: string[]
      }[]
    }
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
  }
  export interface WellformedResponse {
    appid: string
    mchid: string
    out_order_no: string
    service_id: string
    service_introduction: string
    state: string
    state_description: string
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
    risk_fund: {
      name: string
      amount: number
      description: string
    }
    time_range: {
      start_time: string
      end_time: string
      start_time_remark: string
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
    shopping_info: {
      real_merchant_appid: string
      jump_link: {
        jump_link_type: string
        appid: string
        path: string
      }
      goods: {
        name: string
        picture: string
        amount: number
        count: number
        category_id: string[]
      }[]
    }
  }
}
namespace WeChatPay.OpenAPI.V3.Payscore {
  export interface Servicepayondeliveryorder {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/docs/merchant/apis/weixin-pay-score/service-order/create-pay-on-delivery-service-order.html
     */
    (data: Servicepayondeliveryorder.PostHttpMethod.JsonDataRequest, config?: Servicepayondeliveryorder.PostHttpMethod.RequestConfig): AxiosPromise<Servicepayondeliveryorder.PostHttpMethod.WellformedResponse>
    /**
     * 创建先用后付订单
     * @link https://pay.weixin.qq.com/docs/merchant/apis/weixin-pay-score/service-order/create-pay-on-delivery-service-order.html
     */
    post(data: Servicepayondeliveryorder.PostHttpMethod.JsonDataRequest, config?: Servicepayondeliveryorder.PostHttpMethod.RequestConfig): AxiosPromise<Servicepayondeliveryorder.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface Payscore {
    servicepayondeliveryorder: Payscore.Servicepayondeliveryorder
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
wxpay.v3.payscore.servicepayondeliveryorder.post({
//                                          ^^^^
  out_order_no,
  appid,
  service_id,
  service_introduction,
  post_payments,
  post_discounts,
  time_range,
  location,
  risk_fund,
  attach,
  notify_url,
  openid,
  need_user_confirm,
  mchid,
  shopping_info,
})
.then(
  ({ // [!code hl:39]
    data: {
      appid,
      mchid,
      out_order_no,
      service_id,
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
      shopping_info,
    },
  }) => ({
    appid,
    mchid,
    out_order_no,
    service_id,
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
    shopping_info,
  })
)
```
