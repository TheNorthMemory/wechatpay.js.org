---
title: 付款码支付
description: 收银员使用扫码设备读取微信用户付款码以后，二维码或条码信息会传送至商户收银台，由商户收银台或者商户后台调用该接口发起支付。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/docs/merchant/apis/code-payment-v3/direct/code-pay.html)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Pay.Transactions.Codepay.PostHttpMethod {
  export interface JsonDataRequest {
    appid: string
    mchid: string
    description: string
    out_trade_no: string
    attach: string
    goods_tag: string
    support_fapiao: boolean
    payer: {
      auth_code: string
    }
    amount: {
      total: number
      currency: string
    }
    scene_info: {
      device_id: string
      device_ip: string
      store_info: {
        id: string
        out_id: string
      }
    }
    detail: {
      cost_price: number
      invoice_id: string
      goods_detail: {
        merchant_goods_id: string
        wxpay_goods_id: string
        goods_name: string
        quantity: number
        unit_price: number
      }[]
    }
    settle_info: {
      profit_sharing: boolean
    }
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
  }
  export interface WellformedResponse {
    appid: string
    mchid: string
    out_trade_no: string
    transaction_id: string
    trade_type: string
    bank_type: string
    success_time: string
    trade_state: string
    trade_state_desc: string
    attach: string
    payer: {
      openid: string
    }
    amount: {
      total: number
      payer_total: number
      currency: string
      payer_currency: string
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
      currency: string
      goods_detail: {
        goods_id: string
        quantity: number
        unit_price: number
        discount_amount: number
        goods_remark: string
      }[]
    }[]
  }
}
namespace WeChatPay.OpenAPI.V3.Pay.Transactions {
  export interface Codepay {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/docs/merchant/apis/code-payment-v3/direct/code-pay.html
     */
    (data: Codepay.PostHttpMethod.JsonDataRequest, config?: Codepay.PostHttpMethod.RequestConfig): AxiosPromise<Codepay.PostHttpMethod.WellformedResponse>
    /**
     * 付款码支付
     * @link https://pay.weixin.qq.com/docs/merchant/apis/code-payment-v3/direct/code-pay.html
     */
    post(data: Codepay.PostHttpMethod.JsonDataRequest, config?: Codepay.PostHttpMethod.RequestConfig): AxiosPromise<Codepay.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Pay {
  export interface Transactions {
    codepay: Transactions.Codepay
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface Pay {
    transactions: Pay.Transactions
  }
}
namespace WeChatPay.OpenAPI {
  export interface V3 {
    pay: V3.Pay
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
wxpay.v3.pay.transactions.codepay.post({
//                                ^^^^
  appid,
  mchid,
  description,
  out_trade_no,
  attach,
  goods_tag,
  support_fapiao,
  payer,
  amount,
  scene_info,
  detail,
  settle_info,
})
.then(
  ({ // [!code hl:31]
    data: {
      appid,
      mchid,
      out_trade_no,
      transaction_id,
      trade_type,
      bank_type,
      success_time,
      trade_state,
      trade_state_desc,
      attach,
      payer,
      amount,
      promotion_detail,
    },
  }) => ({
    appid,
    mchid,
    out_trade_no,
    transaction_id,
    trade_type,
    bank_type,
    success_time,
    trade_state,
    trade_state_desc,
    attach,
    payer,
    amount,
    promotion_detail,
  })
)
```
