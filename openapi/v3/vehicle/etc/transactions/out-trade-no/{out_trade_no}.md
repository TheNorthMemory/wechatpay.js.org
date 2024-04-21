---
title: 通过商户订单号查询订单
description: 可通过“微信订单号”和“商户订单号”两种方式查单，两种方式查单，返回结果相同。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/docs/partner/apis/etc-authorization/transactions/get-by-trade-no.html)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Vehicle.Etc.Transactions.OutTradeNo._out_trade_no_.GetHttpMethod {
  export interface RequestConfig extends AxiosRequestConfig {
    out_trade_no: string
    params: {
      sub_mchid: string
    }
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
namespace WeChatPay.OpenAPI.V3.Vehicle.Etc.Transactions.OutTradeNo {
  export interface _out_trade_no_ {
    /**
     * 查询订单API
     * @link https://pay.weixin.qq.com/docs/partner/apis/etc-authorization/transactions/get-by-trade-no.html
     */
    get(config: _out_trade_no_.GetHttpMethod.RequestConfig): AxiosPromise<_out_trade_no_.GetHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Vehicle.Etc.Transactions {
  export interface OutTradeNo {
    _out_trade_no_: OutTradeNo._out_trade_no_
  }
}
namespace WeChatPay.OpenAPI.V3.Vehicle.Etc {
  export interface Transactions {
    outTradeNo: Transactions.OutTradeNo
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
wxpay.v3.vehicle.etc.transactions.outTradeNo._out_trade_no_.get({
//                                                          ^^^
  out_trade_no,
  params,
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
