---
title: 撤销订单
description: 支付交易返回失败或支付系统超时，调用该接口撤销交易。如果此订单用户支付失败，微信支付系统会将此订单关闭；如果用户支付成功，微信支付系统会将此订单资金退还给用户。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/docs/partner/apis/partner-code-payment-v3/partner/partner-reverse.html)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Pay.Partner.Transactions.OutTradeNo._out_trade_no_.Reverse.PostHttpMethod {
  export interface JsonDataRequest {
    sp_appid: string
    sp_mchid: string
    sub_appid: string
    sub_mchid: string
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
    out_trade_no: string
  }
  export interface WellformedResponse {
    sp_appid: string
    sp_mchid: string
    sub_appid: string
    sub_mchid: string
    out_trade_no: string
  }
}
namespace WeChatPay.OpenAPI.V3.Pay.Partner.Transactions.OutTradeNo._out_trade_no_ {
  export interface Reverse {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/docs/partner/apis/partner-code-payment-v3/partner/partner-reverse.html
     */
    (data: Reverse.PostHttpMethod.JsonDataRequest, config: Reverse.PostHttpMethod.RequestConfig): AxiosPromise<Reverse.PostHttpMethod.WellformedResponse>
    /**
     * 撤销
     * @link https://pay.weixin.qq.com/docs/partner/apis/partner-code-payment-v3/partner/partner-reverse.html
     */
    post(data: Reverse.PostHttpMethod.JsonDataRequest, config: Reverse.PostHttpMethod.RequestConfig): AxiosPromise<Reverse.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Pay.Partner.Transactions.OutTradeNo {
  export interface _out_trade_no_ {
    reverse: _out_trade_no_.Reverse
  }
}
namespace WeChatPay.OpenAPI.V3.Pay.Partner.Transactions {
  export interface OutTradeNo {
    _out_trade_no_: OutTradeNo._out_trade_no_
  }
}
namespace WeChatPay.OpenAPI.V3.Pay.Partner {
  export interface Transactions {
    outTradeNo: Transactions.OutTradeNo
  }
}
namespace WeChatPay.OpenAPI.V3.Pay {
  export interface Partner {
    transactions: Partner.Transactions
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface Pay {
    partner: Pay.Partner
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
wxpay.v3.pay.partner.transactions.outTradeNo._out_trade_no_.reverse.post({
//                                                                  ^^^^
  sp_appid,
  sp_mchid,
  sub_appid,
  sub_mchid,
}, { out_trade_no })
.then(
  ({ // [!code hl:15]
    data: {
      sp_appid,
      sp_mchid,
      sub_appid,
      sub_mchid,
      out_trade_no,
    },
  }) => ({
    sp_appid,
    sp_mchid,
    sub_appid,
    sub_mchid,
    out_trade_no,
  })
)
```
