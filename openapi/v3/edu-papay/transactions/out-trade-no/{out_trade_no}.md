---
title: 商户订单号查单
description: 通过商户订单号查单
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/docs/merchant/apis/education-fee-payment/transactions/query-transaction-by-out-trade-no.html) [官方文档](https://pay.weixin.qq.com/docs/partner/apis/education-fee-payment/transactions/query-transaction-by-out-trade-no.html)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.EduPapay.Transactions.OutTradeNo._out_trade_no_.GetHttpMethod {
  export interface RequestConfig extends AxiosRequestConfig {
    out_trade_no: string
    params: {
      sub_mchid: string
    }
  }
  export interface WellformedResponse {
    sp_mchid: string
    appid: string
    sub_mchid: string
    sub_appid: string
    out_trade_no: string
    transaction_id: string
    attach: string
    bank_type: string
    success_time: string
    trade_state: string
    trade_state_description: string
    payer: {
      openid: string
      sub_openid: string
    }
    amount: {
      total: number
      payer_total: number
      discount_total: number
      currency: string
    }
    device_information: {
      device_id: string
      device_ip: string
    }
    promotion_detail: {
      coupon_id: string
      name: string
      scope: string
      type: string
      amount: number
      stock_id: string
      wechatpay_contribute: number
      merchant_contribute: number
      other_contribute: number
    }[]
  }
}
namespace WeChatPay.OpenAPI.V3.EduPapay.Transactions.OutTradeNo {
  export interface _out_trade_no_ {
    /**
     * 商户订单号查单API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/Offline/apis/chapter5_2_9.shtml
     */
    get(config: _out_trade_no_.GetHttpMethod.RequestConfig): AxiosPromise<_out_trade_no_.GetHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.EduPapay.Transactions {
  export interface OutTradeNo {
    _out_trade_no_: OutTradeNo._out_trade_no_
  }
}
namespace WeChatPay.OpenAPI.V3.EduPapay {
  export interface Transactions {
    outTradeNo: Transactions.OutTradeNo
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface EduPapay {
    transactions: EduPapay.Transactions
  }
}
namespace WeChatPay.OpenAPI {
  export interface V3 {
    eduPapay: V3.EduPapay
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
wxpay.v3.eduPapay.transactions.outTradeNo._out_trade_no_.get({
//                                                       ^^^
  out_trade_no,
  params,
})
.then(
  ({ // [!code hl:35]
    data: {
      sp_mchid,
      appid,
      sub_mchid,
      sub_appid,
      out_trade_no,
      transaction_id,
      attach,
      bank_type,
      success_time,
      trade_state,
      trade_state_description,
      payer,
      amount,
      device_information,
      promotion_detail,
    },
  }) => ({
    sp_mchid,
    appid,
    sub_mchid,
    sub_appid,
    out_trade_no,
    transaction_id,
    attach,
    bank_type,
    success_time,
    trade_state,
    trade_state_description,
    payer,
    amount,
    device_information,
    promotion_detail,
  })
)
```
