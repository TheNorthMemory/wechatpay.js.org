---
title: 查询出境结果
description: 根据微信支付单号+商户出境单号，查询出境结果，出境失败会返回错误码
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3_partner/apis/chapter7_10_3.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.FundsToOversea.Orders._out_order_id_.GetHttpMethod {
  export interface RequestConfig extends AxiosRequestConfig {
    out_order_id: string
    params: {
      sub_mchid: string
      transaction_id: string
    }
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
namespace WeChatPay.OpenAPI.V3.FundsToOversea.Orders {
  export interface _out_order_id_ {
    /**
     * 查询出境结果API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3_partner/apis/chapter7_10_3.shtml
     */
    get(config: _out_order_id_.GetHttpMethod.RequestConfig): AxiosPromise<_out_order_id_.GetHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.FundsToOversea {
  export interface Orders {
    _out_order_id_: Orders._out_order_id_
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
wxpay.v3.fundsToOversea.orders._out_order_id_.get({
//                                            ^^^
  out_order_id,
  params,
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
