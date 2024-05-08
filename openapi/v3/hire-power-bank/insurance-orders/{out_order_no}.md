---
title: 查询保险订单详情
description: 商户通过该接口可根据商户订单号查询保险订单详情。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/docs/merchant/apis/hire-power-bank-insurance/insurance-orders/get-by-out-trade-no.html)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.HirePowerBank.InsuranceOrders._out_order_no_.GetHttpMethod {
  export interface RequestConfig extends AxiosRequestConfig {
    out_order_no: string
  }
  export interface WellformedResponse {
    order_id: string
    out_order_no: string
    openid: string
    max_claim_count: number
    claimed_count: number
    order_receive_time: string
    order_begin_time: string
    order_end_time: string
    order_receive_state: string
  }
}
namespace WeChatPay.OpenAPI.V3.HirePowerBank.InsuranceOrders {
  export interface _out_order_no_ {
    /**
     * 查询保险订单详情
     * @link https://pay.weixin.qq.com/docs/merchant/apis/hire-power-bank-insurance/insurance-orders/get-by-out-trade-no.html
     */
    get(config: _out_order_no_.GetHttpMethod.RequestConfig): AxiosPromise<_out_order_no_.GetHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.HirePowerBank {
  export interface InsuranceOrders {
    _out_order_no_: InsuranceOrders._out_order_no_
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface HirePowerBank {
    insuranceOrders: HirePowerBank.InsuranceOrders
  }
}
namespace WeChatPay.OpenAPI {
  export interface V3 {
    hirePowerBank: V3.HirePowerBank
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
wxpay.v3.hirePowerBank.insuranceOrders._out_order_no_.get({
//                                                    ^^^
  out_order_no,
})
.then(
  ({ // [!code hl:23]
    data: {
      order_id,
      out_order_no,
      openid,
      max_claim_count,
      claimed_count,
      order_receive_time,
      order_begin_time,
      order_end_time,
      order_receive_state,
    },
  }) => ({
    order_id,
    out_order_no,
    openid,
    max_claim_count,
    claimed_count,
    order_receive_time,
    order_begin_time,
    order_end_time,
    order_receive_state,
  })
)
```
