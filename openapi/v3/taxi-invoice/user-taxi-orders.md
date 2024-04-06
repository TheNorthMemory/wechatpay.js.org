---
title: 获取乘客行程单列表
description: 服务商可以凭“用户openid”查询该乘客对应的“出租车行程单”，微信支付返回该“openid”下最多最近半年内的“出租车行程单”
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/docs/partner/products/taxi-fapiao/introduction.html)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.TaxiInvoice.UserTaxiOrders.GetHttpMethod {
  export interface RequestConfig extends AxiosRequestConfig {
    params: {
      limit: number
      offset: number
      openid: string
      appid: string
      begin_date: string
      end_date: string
      region_id: number
    }
  }
  export interface WellformedResponse {
    data: {
      plate_number: string
      driver_license: string
      up_time: string
    }[]
    offset: number
    limit: number
    total_count: number
    links: {
      next: string
      prev: string
      self: string
    }
  }
}
namespace WeChatPay.OpenAPI.V3.TaxiInvoice {
  export interface UserTaxiOrders {
    /**
     * 获取乘客行程单列表API
     * @link https://pay.weixin.qq.com/docs/partner/products/taxi-fapiao/introduction.html
     */
    get(config: UserTaxiOrders.GetHttpMethod.RequestConfig): AxiosPromise<UserTaxiOrders.GetHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface TaxiInvoice {
    userTaxiOrders: TaxiInvoice.UserTaxiOrders
  }
}
namespace WeChatPay.OpenAPI {
  export interface V3 {
    taxiInvoice: V3.TaxiInvoice
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
wxpay.v3.taxiInvoice.userTaxiOrders.get({
//                                  ^^^
  params,
})
.then(
  ({ // [!code hl:15]
    data: {
      data,
      offset,
      limit,
      total_count,
      links,
    },
  }) => ({
    data,
    offset,
    limit,
    total_count,
    links,
  })
)
```
