---
title: 根据凭证查询乘客行程单
description: 服务商可以凭“凭证”查询对应的“乘客行程单”。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/docs/partner/apis/taxi-fapiao/user-taxi-order/query-user-taxi-order-by-token.html)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.TaxiInvoice.UserTaxiOrder.FindByToken.GetHttpMethod {
  export interface RequestConfig extends AxiosRequestConfig {
    params: {
      token: string
      openid: string
      appid: string
      region_id: number
      auth_mode: string
    }
  }
  export interface WellformedResponse {
    plate_number: string
    driver_license: string
    up_time: string
    region_id: number
    source: string
    pay_time: string
    pay_amount: number
  }
}
namespace WeChatPay.OpenAPI.V3.TaxiInvoice.UserTaxiOrder {
  export interface FindByToken {
    /**
     * 根据凭证查询乘客行程单API
     * @link https://pay.weixin.qq.com/docs/partner/apis/taxi-fapiao/user-taxi-order/query-user-taxi-order-by-token.html
     */
    get(config: FindByToken.GetHttpMethod.RequestConfig): AxiosPromise<FindByToken.GetHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.TaxiInvoice {
  export interface UserTaxiOrder {
    findByToken: UserTaxiOrder.FindByToken
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface TaxiInvoice {
    userTaxiOrder: TaxiInvoice.UserTaxiOrder
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
wxpay.v3.taxiInvoice.userTaxiOrder.findByToken.get({
//                                             ^^^
  params,
})
.then(
  ({ // [!code hl:19]
    data: {
      plate_number,
      driver_license,
      up_time,
      region_id,
      source,
      pay_time,
      pay_amount,
    },
  }) => ({
    plate_number,
    driver_license,
    up_time,
    region_id,
    source,
    pay_time,
    pay_amount,
  })
)
```
