---
title: 申请资金出境
description: 商户发起资金出境请求，需要传微信支付单号，商户出境单号，出境金额等信息成功，接口请求成功仅代表受理，如需知晓业务执行情况请通过查询接口获取。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.FundsToOversea.Orders.PostHttpMethod {
  export interface JsonDataRequest {
    out_order_id: string
    sub_mchid: string
    transaction_id: string
    amount: number
    foreign_currency: string
    goods_info: {
      goods_name: string
      goods_category: string
      goods_unit_price: number
      goods_quantity: number
    }[]
    seller_info: {
      oversea_business_name: string
      oversea_shop_name: string
      seller_id: string
    }
    express_info: {
      courier_number: string
      express_company_name: string
    }
    payee_info: {
      payee_id: string
    }
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
  }
  export interface WellformedResponse {
    out_order_id: string
    sub_mchid: string
    order_id: string
    result: string
    fail_reason: string
    amount: number
    foreign_amount: number
    foreign_currency: string
    rate: number
    exchange_rate_time: string
    estimate_exchange_rate_time: string
    departure_amount: number
    fee: number
    charge_mchid: string
    charge_account_type: string
  }
}
namespace WeChatPay.OpenAPI.V3.FundsToOversea {
  export interface Orders {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3_partner/apis/chapter7_10_2.shtml
     */
    (data: Orders.PostHttpMethod.JsonDataRequest, config?: Orders.PostHttpMethod.RequestConfig): AxiosPromise<Orders.PostHttpMethod.WellformedResponse>
    /**
     * 申请资金出境API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3_partner/apis/chapter7_10_2.shtml
     */
    post(data: Orders.PostHttpMethod.JsonDataRequest, config?: Orders.PostHttpMethod.RequestConfig): AxiosPromise<Orders.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface FundsToOversea {
    orders: FundsToOversea.Orders
  }
}
namespace WeChatPay.OpenAPI {
  export interface V3 {
    fundsToOversea: V3.FundsToOversea
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
wxpay.v3.fundsToOversea.orders.post({
//                             ^^^^
  out_order_id,
  sub_mchid,
  transaction_id,
  amount,
  foreign_currency,
  goods_info,
  seller_info,
  express_info,
  payee_info,
})
.then(
  ({ // [!code hl:35]
    data: {
      out_order_id,
      sub_mchid,
      order_id,
      result,
      fail_reason,
      amount,
      foreign_amount,
      foreign_currency,
      rate,
      exchange_rate_time,
      estimate_exchange_rate_time,
      departure_amount,
      fee,
      charge_mchid,
      charge_account_type,
    },
  }) => ({
    out_order_id,
    sub_mchid,
    order_id,
    result,
    fail_reason,
    amount,
    foreign_amount,
    foreign_currency,
    rate,
    exchange_rate_time,
    estimate_exchange_rate_time,
    departure_amount,
    fee,
    charge_mchid,
    charge_account_type,
  })
)
```

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012476113)
