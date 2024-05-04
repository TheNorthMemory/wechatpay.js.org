---
title: 扣费受理
description: 商户请求扣费受理接口，会完成订单受理。微信支付进行异步扣款，支付完成后，会将订单支付结果发送给商户。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Qrcode.Transactions.PostHttpMethod {
  export interface JsonDataRequest {
    appid: string
    sub_appid: string
    sub_mchid: string
    description: string
    attach: string
    out_trade_no: string
    trade_scene: string
    goods_tag: string
    contract_id: string
    notify_url: string
    amount: {
      total: number
      currency: string
    }
    bus_info: {
      start_time: string | Date
      line_name: string
      plate_number: string
    }
    metro_info: {
      start_time: string | Date
      end_time: string | Date
      start_station: string
      end_station: string
    }
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
  }
  export interface WellformedResponse {
    appid: string
    sub_appid: string
    sp_mchid: string
    sub_mchid: string
    description: string
    create_time: string | Date
    out_trade_no: string
    transaction_id: string
    trade_state: string
    trade_state_description: string
    success_time: string | Date
    bank_type: string
    user_repay_state: string
    repay_transaction_id: string
    repay_time: string | Date
    attach: string
    contract_id: string
    trade_scene: string
    bus_info: {
      start_time: string | Date
      line_name: string
      plate_number: string
    }
    metro_info: {
      start_time: string | Date
      end_time: string | Date
      start_station: string
      end_station: string
    }
    amount: {
    }
    promotion_detail: {
      coupon_id: string
      name: string
      scope: string
      type: string
      stock_id: string
      amount: number
      wechatpay_contribute: number
      merchant_contribute: number
      other_contribute: number
      currency: string
    }[]
  }
}
namespace WeChatPay.OpenAPI.V3.Qrcode {
  export interface Transactions {
    /**
     * shortland
     * @link 商户请求扣费受理接口，会完成订单受理。微信支付进行异步扣款，支付完成后，会将订单支付结果发送给商户。
     */
    (data: Transactions.PostHttpMethod.JsonDataRequest, config?: Transactions.PostHttpMethod.RequestConfig): AxiosPromise<Transactions.PostHttpMethod.WellformedResponse>
    /**
     * 扣费受理
     * @link 商户请求扣费受理接口，会完成订单受理。微信支付进行异步扣款，支付完成后，会将订单支付结果发送给商户。
     */
    post(data: Transactions.PostHttpMethod.JsonDataRequest, config?: Transactions.PostHttpMethod.RequestConfig): AxiosPromise<Transactions.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface Qrcode {
    transactions: Qrcode.Transactions
  }
}
namespace WeChatPay.OpenAPI {
  export interface V3 {
    qrcode: V3.Qrcode
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
wxpay.v3.qrcode.transactions.post({
//                           ^^^^
  appid,
  sub_appid,
  sub_mchid,
  description,
  attach,
  out_trade_no,
  trade_scene,
  goods_tag,
  contract_id,
  notify_url,
  amount,
  bus_info,
  metro_info,
})
.then(
  ({ // [!code hl:49]
    data: {
      appid,
      sub_appid,
      sp_mchid,
      sub_mchid,
      description,
      create_time,
      out_trade_no,
      transaction_id,
      trade_state,
      trade_state_description,
      success_time,
      bank_type,
      user_repay_state,
      repay_transaction_id,
      repay_time,
      attach,
      contract_id,
      trade_scene,
      bus_info,
      metro_info,
      amount,
      promotion_detail,
    },
  }) => ({
    appid,
    sub_appid,
    sp_mchid,
    sub_mchid,
    description,
    create_time,
    out_trade_no,
    transaction_id,
    trade_state,
    trade_state_description,
    success_time,
    bank_type,
    user_repay_state,
    repay_transaction_id,
    repay_time,
    attach,
    contract_id,
    trade_scene,
    bus_info,
    metro_info,
    amount,
    promotion_detail,
  })
)
```
