---
title: 创单结单合并(合作伙伴模式)
description: 该接口适用于无需微信支付分做订单风控判断的业务场景，在服务完成后，通过该接口对用户进行免密代扣。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3_partner/Offline/apis/chapter6_2_8.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Payscore.Partner.Serviceorder.DirectComplete.PostHttpMethod {
  export interface JsonDataRequest {
    service_id: string
    appid: string
    sub_appid: string
    sub_mchid: string
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
      amount: number
      count: number
    }[]
    total_amount: number
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
    profit_sharing: boolean
    goods_tag: string
    attach: string
    notify_url: string
    openid: string
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
  }
  export interface WellformedResponse {
  }
}
namespace WeChatPay.OpenAPI.V3.Payscore.Partner.Serviceorder {
  export interface DirectComplete {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3_partner/Offline/apis/chapter6_2_8.shtml
     */
    (data: DirectComplete.PostHttpMethod.JsonDataRequest, config?: DirectComplete.PostHttpMethod.RequestConfig): AxiosPromise<DirectComplete.PostHttpMethod.WellformedResponse>
    /**
     * 创单结单合并API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3_partner/Offline/apis/chapter6_2_8.shtml
     */
    post(data: DirectComplete.PostHttpMethod.JsonDataRequest, config?: DirectComplete.PostHttpMethod.RequestConfig): AxiosPromise<DirectComplete.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Payscore.Partner {
  export interface Serviceorder {
    directComplete: Serviceorder.DirectComplete
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
wxpay.v3.payscore.partner.serviceorder.directComplete.post({
//                                                    ^^^^
  service_id,
  appid,
  sub_appid,
  sub_mchid,
  out_order_no,
  service_introduction,
  post_payments,
  post_discounts,
  total_amount,
  time_range,
  location,
  profit_sharing,
  goods_tag,
  attach,
  notify_url,
  openid,
}, { out_order_no })
.then(({ data, }) => data) // [!code hl:1]
```
