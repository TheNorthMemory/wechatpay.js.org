---
title: 查询订单
description: 商户通过商户订单号，来查询订单信息
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/apis/chapter8_8_4.shtml) [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3_partner/apis/chapter8_8_4.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Vehicle.Transactions.OutTradeNo._out_trade_no_.GetHttpMethod {
  export interface RequestConfig extends AxiosRequestConfig {
    out_trade_no: string
    params: {
      sub_mchid?: string
    }
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
    trade_state: string
    trade_state_description: string
    success_time: string
    bank_type: string
    user_repaid: string
    attach: string
    trade_scene: string
    parking_info: {
      parking_id: string
      plate_number: string

      start_time: string
      end_time: string
      parking_name: string
      charging_duration: number
      device_id: string
    }
    payer: {
      openid: string
      sub_openid: string
    }
    amount: {
      total: number
      currency: string
      payer_total: number
      discount_total: number
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
namespace WeChatPay.OpenAPI.V3.Vehicle.Transactions.OutTradeNo {
  export interface _out_trade_no_ {
    /**
     * 查询订单API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3_partner/apis/chapter8_8_4.shtml
     */
    get(config: _out_trade_no_.GetHttpMethod.RequestConfig): AxiosPromise<_out_trade_no_.GetHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Vehicle.Transactions {
  export interface OutTradeNo {
    _out_trade_no_: OutTradeNo._out_trade_no_
  }
}
namespace WeChatPay.OpenAPI.V3.Vehicle {
  export interface Transactions {
    outTradeNo: Transactions.OutTradeNo
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
wxpay.v3.vehicle.transactions.outTradeNo._out_trade_no_.get({
//                                                      ^^^
  out_trade_no,
  params,
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
