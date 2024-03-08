---
title: 关闭订单
description: 以下情况需要调用关单接口：1、商户订单支付失败需要生成新单号重新发起支付，要对原订单号调用关单，避免重复支付；2、系统下单后，用户支付超时，系统退出不再受理，避免用户继续，请调用关单接口。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/pay/transactions/chapter3_6.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Pay.Transactions.OutTradeNo._out_trade_no_.Close.PostHttpMethod {
  export interface JsonDataRequest {
    mchid: string
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
    out_trade_no: string
  }
  export interface WellformedResponse {
  }
}
namespace WeChatPay.OpenAPI.V3.Pay.Transactions.OutTradeNo._out_trade_no_ {
  export interface Close {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/pay/transactions/chapter3_6.shtml
     */
    (data: Close.PostHttpMethod.JsonDataRequest, config: Close.PostHttpMethod.RequestConfig): AxiosPromise<Close.PostHttpMethod.WellformedResponse>
    /**
     * 关单API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/pay/transactions/chapter3_6.shtml
     */
    post(data: Close.PostHttpMethod.JsonDataRequest, config: Close.PostHttpMethod.RequestConfig): AxiosPromise<Close.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Pay.Transactions.OutTradeNo {
  export interface _out_trade_no_ {
    close: _out_trade_no_.Close
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
wxpay.v3.pay.transactions.outTradeNo._out_trade_no_.close.post({
  mchid,
}, { out_trade_no })
.then(({ status, }) => status === 204) // [!code hl]
```

> [!IMPORTANT] 注意：
> - 关单没有时间限制，建议在订单生成后间隔几分钟（最短5分钟）再调用关单接口，避免出现订单状态同步不及时导致关单失败。
