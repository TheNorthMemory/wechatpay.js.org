---
title: 商户订单号查单
description: 通过商户订单号查询微信支付订单
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/edu/eduschoolpay/chapter4_3.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Eduschoolpay.Transactions.OutTradeNo._out_trade_no_.GetHttpMethod {
  export interface RequestConfig extends AxiosRequestConfig {
    out_trade_no: string
    params: {
      sub_mchid: string
    }
  }
  export interface WellformedResponse {
    mchid: string
    appid: string
    sub_mchid: string
    sub_appid: string
    out_trade_no: string
    transaction_id: string
    trade_type: string
    trade_state: string
    trade_state_desc: string
    bank_type: string
    attach: string
    success_time: string
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
    device_info: {
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
namespace WeChatPay.OpenAPI.V3.Eduschoolpay.Transactions.OutTradeNo {
  export interface _out_trade_no_ {
    /**
     * 商户订单号查单API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/edu/eduschoolpay/chapter4_3.shtml
     */
    get(config: _out_trade_no_.GetHttpMethod.RequestConfig): AxiosPromise<_out_trade_no_.GetHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Eduschoolpay.Transactions {
  export interface OutTradeNo {
    _out_trade_no_: OutTradeNo._out_trade_no_
  }
}
namespace WeChatPay.OpenAPI.V3.Eduschoolpay {
  export interface Transactions {
    outTradeNo: Transactions.OutTradeNo
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface Eduschoolpay {
    transactions: Eduschoolpay.Transactions
  }
}
namespace WeChatPay.OpenAPI {
  export interface V3 {
    eduschoolpay: V3.Eduschoolpay
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
wxpay.v3.eduschoolpay.transactions.outTradeNo._out_trade_no_.get({
//                                                           ^^^
  out_trade_no,
  params,
})
.then(
  ({ // [!code hl:37]
    data: {
      mchid,
      appid,
      sub_mchid,
      sub_appid,
      out_trade_no,
      transaction_id,
      trade_type,
      trade_state,
      trade_state_desc,
      bank_type,
      attach,
      success_time,
      payer,
      amount,
      device_info,
      promotion_detail,
    },
  }) => ({
    mchid,
    appid,
    sub_mchid,
    sub_appid,
    out_trade_no,
    transaction_id,
    trade_type,
    trade_state,
    trade_state_desc,
    bank_type,
    attach,
    success_time,
    payer,
    amount,
    device_info,
    promotion_detail,
  })
)
```
