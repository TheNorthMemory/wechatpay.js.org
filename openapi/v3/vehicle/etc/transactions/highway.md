---
title: 高速场景商户扣款
description: ETC高速场景订单扣款下单，注意：扣款结果同步返回，不会有异步回调，当返回结果不明确或为“USERPAYING”时，商户系统可通过订单查询接口核实订单状态。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/docs/partner/apis/etc-authorization/transactions/pay-etc-on-highway.html)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Vehicle.Etc.Transactions.Highway.PostHttpMethod {
  export interface JsonDataRequest {
    out_trade_no: string
    sub_mchid: string
    appid: string
    sub_appid: string
    contract_id: string
    description: string
    attach: string
    goods_tag: string
    highway_info: {
      plate_number: string
      start_time: string
      end_time: string
      channel_type: string
      car_type: string
      entrance: string
      exit: string
      carrying_capacity: number
      carrying_range: string
    }
    amount: {
      total: number
      currency: string
    }
    device_info: {
      device_id: string
      device_ip: string
    }
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
  }
  export interface WellformedResponse {
    mchid: string
    sub_mchid: string
    appid: string
    sub_appid: string
    out_trade_no: string
    transaction_id: string
    attach: string
    trade_type: string
    bank_type: string
    success_time: string
    trade_state: string
    trade_state_desc: string
    payer: {
      sp_openid: string
      sub_openid: string
    }
    amount: {
      total: number
      currency: string
      payer_total: number
      discount_total: number
    }
    device_info: {
      device_id: string
      device_ip: string
    }
    promotion_detail: {
      promotion_id: string
      name: string
      scope: string
      type: string
      activity_id: string
      amount: number
      wxpay_contribute: number
      merchant_contribute: number
      other_contribute: number
    }[]
  }
}
namespace WeChatPay.OpenAPI.V3.Vehicle.Etc.Transactions {
  export interface Highway {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/docs/partner/apis/etc-authorization/transactions/pay-etc-on-highway.html
     */
    (data: Highway.PostHttpMethod.JsonDataRequest, config?: Highway.PostHttpMethod.RequestConfig): AxiosPromise<Highway.PostHttpMethod.WellformedResponse>
    /**
     * 高速场景商户扣款API
     * @link https://pay.weixin.qq.com/docs/partner/apis/etc-authorization/transactions/pay-etc-on-highway.html
     */
    post(data: Highway.PostHttpMethod.JsonDataRequest, config?: Highway.PostHttpMethod.RequestConfig): AxiosPromise<Highway.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Vehicle.Etc {
  export interface Transactions {
    highway: Transactions.Highway
  }
}
namespace WeChatPay.OpenAPI.V3.Vehicle {
  export interface Etc {
    transactions: Etc.Transactions
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface Vehicle {
    etc: Vehicle.Etc
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
wxpay.v3.vehicle.etc.transactions.highway.post({
//                                        ^^^^
  out_trade_no,
  sub_mchid,
  appid,
  sub_appid,
  contract_id,
  description,
  attach,
  goods_tag,
  highway_info,
  amount,
  device_info,
})
.then(
  ({ // [!code hl:37]
    data: {
      mchid,
      sub_mchid,
      appid,
      sub_appid,
      out_trade_no,
      transaction_id,
      attach,
      trade_type,
      bank_type,
      success_time,
      trade_state,
      trade_state_desc,
      payer,
      amount,
      device_info,
      promotion_detail,
    },
  }) => ({
    mchid,
    sub_mchid,
    appid,
    sub_appid,
    out_trade_no,
    transaction_id,
    attach,
    trade_type,
    bank_type,
    success_time,
    trade_state,
    trade_state_desc,
    payer,
    amount,
    device_info,
    promotion_detail,
  })
)
```
