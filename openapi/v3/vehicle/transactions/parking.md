---
title: 扣费受理
description: 商户请求扣费受理接口，会完成订单受理。微信支付进行异步扣款，支付完成后，会将订单支付结果发送给商户。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/apis/chapter8_8_3.shtml) [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3_partner/apis/chapter8_8_3.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Vehicle.Transactions.Parking.PostHttpMethod {
  export interface JsonDataRequest {
    appid: string
    sub_appid?: string
    sub_mchid?: string
    description: string
    attach: string
    out_trade_no: string
    trade_scene: 'PARKING'
    goods_tag?: string
    notify_url: string
    profit_sharing: 'N'|'Y'
    amount: {
      total: number
      currency: string
    }
    parking_info: {
      parking_id: string
      plate_number: string
      plate_color: string
      start_time: string
      end_time: string
      parking_name: string
      charging_duration: number
      device_id: string
    }
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
  }
  export interface WellformedResponse {
    appid: string
    sub_appid?: string
    sp_mchid: string
    sub_mchid?: string
    description: string
    create_time: string
    out_trade_no: string
    transaction_id: string
    trade_state: 'SUCCESS' | 'ACCEPTED' | 'PAY_FAIL' | 'REFUND'
    trade_state_description: string
    success_time: string
    bank_type?: string
    user_repaid?: 'Y'|'N'
    attach: string
    trade_scene: string
    parking_info: {
      parking_id: string
      plate_number: string
      plate_color: string
      start_time: string
      end_time: string
      parking_name: string
      charging_duration: number
      device_id: string
    }
    payer: {
      openid: string
      sub_openid?: string
    }
    amount: {
      total: number
      currency: string
      payer_total: number
      discount_total: number
    }
    promotion_detail?: {
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
namespace WeChatPay.OpenAPI.V3.Vehicle.Transactions {
  export interface Parking {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3_partner/apis/chapter8_8_3.shtml
     */
    (data: Parking.PostHttpMethod.JsonDataRequest, config?: Parking.PostHttpMethod.RequestConfig): AxiosPromise<Parking.PostHttpMethod.WellformedResponse>
    /**
     * 扣费受理API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3_partner/apis/chapter8_8_3.shtml
     */
    post(data: Parking.PostHttpMethod.JsonDataRequest, config?: Parking.PostHttpMethod.RequestConfig): AxiosPromise<Parking.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Vehicle {
  export interface Transactions {
    parking: Transactions.Parking
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface Vehicle {
    transactions: Vehicle.Transactions
  }
}
namespace WeChatPay.OpenAPI {
  export interface V3 {
    vehicle: V3.Vehicle
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
wxpay.v3.vehicle.transactions.parking.post({
//                                    ^^^^
  appid,
  sub_appid,
  sub_mchid,
  description,
  attach,
  out_trade_no,
  trade_scene,
  goods_tag,
  notify_url,
  profit_sharing,
  amount,
  parking_info,
})
.then(
  ({ // [!code hl:43]
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
      user_repaid,
      attach,
      trade_scene,
      parking_info,
      payer,
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
    user_repaid,
    attach,
    trade_scene,
    parking_info,
    payer,
    amount,
    promotion_detail,
  })
)
```

> [!IMPORTANT] 注意：
> - 必须确认扣费受理接口的交易状态返回“ACCEPTED”才能放行车辆，若未接收到该状态而放行车辆离场，造成的资金损失由商户侧自行承担。
