---
title: 查询订单
description: 商户通过商户订单号，来查询订单信息
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Qrcode.Transactions.OutTradeNo._out_trade_no_.GetHttpMethod {
  export interface RequestConfig extends AxiosRequestConfig {
    out_trade_no: string
    params: {
      sub_mchid: string
    }
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
namespace WeChatPay.OpenAPI.V3.Qrcode.Transactions.OutTradeNo {
  export interface _out_trade_no_ {
    /**
     * 查询订单
     * @link 商户通过商户订单号，来查询订单信息
     */
    get(config: _out_trade_no_.GetHttpMethod.RequestConfig): AxiosPromise<_out_trade_no_.GetHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Qrcode.Transactions {
  export interface OutTradeNo {
    _out_trade_no_: OutTradeNo._out_trade_no_
  }
}
namespace WeChatPay.OpenAPI.V3.Qrcode {
  export interface Transactions {
    outTradeNo: Transactions.OutTradeNo
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
wxpay.v3.qrcode.transactions.outTradeNo._out_trade_no_.get({
//                                                     ^^^
  out_trade_no,
  params,
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
