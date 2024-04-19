---
title: 撤销订单
description: 支付交易返回失败或支付系统超时，调用该接口撤销交易。如果此订单用户支付失败，微信支付系统会将此订单关闭；如果用户支付成功，微信支付系统会将此订单资金退还给用户。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/docs/merchant/apis/code-payment-v3/direct/reverse.html)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Pay.Transactions.OutTradeNo._out_trade_no_.Reverse.PostHttpMethod {
  export interface JsonDataRequest {
    appid: string
    mchid: string
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
    out_trade_no: string
  }
  export interface WellformedResponse {
    appid: string
    mchid: string
    out_trade_no: string
  }
}
namespace WeChatPay.OpenAPI.V3.Pay.Transactions.OutTradeNo._out_trade_no_ {
  export interface Reverse {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/docs/merchant/apis/code-payment-v3/direct/reverse.html
     */
    (data: Reverse.PostHttpMethod.JsonDataRequest, config: Reverse.PostHttpMethod.RequestConfig): AxiosPromise<Reverse.PostHttpMethod.WellformedResponse>
    /**
     * 撤销
     * @link https://pay.weixin.qq.com/docs/merchant/apis/code-payment-v3/direct/reverse.html
     */
    post(data: Reverse.PostHttpMethod.JsonDataRequest, config: Reverse.PostHttpMethod.RequestConfig): AxiosPromise<Reverse.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Pay.Transactions.OutTradeNo {
  export interface _out_trade_no_ {
    reverse: _out_trade_no_.Reverse
  }
}
namespace WeChatPay.OpenAPI.V3.Pay.Transactions {
  export interface OutTradeNo {
    _out_trade_no_: OutTradeNo._out_trade_no_
  }
}
namespace WeChatPay.OpenAPI.V3.Pay {
  export interface Transactions {
    outTradeNo: Transactions.OutTradeNo
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
wxpay.v3.pay.transactions.outTradeNo._out_trade_no_.reverse.post({
//                                                          ^^^^
  appid,
  mchid,
}, { out_trade_no })
.then(
  ({ // [!code hl:11]
    data: {
      appid,
      mchid,
      out_trade_no,
    },
  }) => ({
    appid,
    mchid,
    out_trade_no,
  })
)
```
