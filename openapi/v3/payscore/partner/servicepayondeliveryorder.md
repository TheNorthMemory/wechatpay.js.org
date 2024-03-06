---
title: 创建先用后付订单(合作伙伴模式)
description: 用户在购买带有“先用后付”服务标识的商品，有机会享受“0元下单，确认收货再付款”的专享服务，加入先用后付服务后，可先0元下单在商品确认收货之前消费者可以选择付款/退货。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/docs/partner/apis/partner-weixin-pay-score/partner-service-order/create-partner-pay-on-delivery-service-order.html)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Payscore.Partner.Servicepayondeliveryorder.PostHttpMethod {
  export interface JsonDataRequest {
    out_order_no: string
    appid: string
    sub_mchid: string
    sub_appid: string
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
    sub_openid: string
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
      }[]
    }
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
  }
  export interface WellformedResponse {
  }
}
namespace WeChatPay.OpenAPI.V3.Payscore.Partner {
  export interface Servicepayondeliveryorder {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/docs/partner/apis/partner-weixin-pay-score/partner-service-order/create-partner-pay-on-delivery-service-order.html
     */
    (data: Servicepayondeliveryorder.PostHttpMethod.JsonDataRequest, config?: Servicepayondeliveryorder.PostHttpMethod.RequestConfig): AxiosPromise<Servicepayondeliveryorder.PostHttpMethod.WellformedResponse>
    /**
     * 创建先用后付订单
     * @link https://pay.weixin.qq.com/docs/partner/apis/partner-weixin-pay-score/partner-service-order/create-partner-pay-on-delivery-service-order.html
     */
    post(data: Servicepayondeliveryorder.PostHttpMethod.JsonDataRequest, config?: Servicepayondeliveryorder.PostHttpMethod.RequestConfig): AxiosPromise<Servicepayondeliveryorder.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Payscore {
  export interface Partner {
    servicepayondeliveryorder: Partner.Servicepayondeliveryorder
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
wxpay.v3.payscore.partner.servicepayondeliveryorder.post({
//                                                  ^^^^
  out_order_no,
  appid,
  sub_mchid,
  sub_appid,
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
  sub_openid,
  need_user_confirm,
  mchid,
  shopping_info,
})
.then(({ data, }) => data) // [!code hl:1]
```
