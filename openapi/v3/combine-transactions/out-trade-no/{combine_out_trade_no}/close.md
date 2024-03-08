---
title: 关闭合单订单
description: 合单支付订单只能使用此合单关单api完成关单。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/pay/combine/chapter3_4.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.CombineTransactions.OutTradeNo._combine_out_trade_no_.Close.PostHttpMethod {
  export interface JsonDataRequest {
    combine_appid: string
    sub_orders: {
      mchid: string
      out_trade_no: string
      sub_mchid: string
      sub_appid: string
    }[]
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
    combine_out_trade_no: string
  }
  export interface WellformedResponse {
  }
}
namespace WeChatPay.OpenAPI.V3.CombineTransactions.OutTradeNo._combine_out_trade_no_ {
  export interface Close {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/pay/combine/chapter3_4.shtml
     */
    (data: Close.PostHttpMethod.JsonDataRequest, config: Close.PostHttpMethod.RequestConfig): AxiosPromise<Close.PostHttpMethod.WellformedResponse>
    /**
     * 合单关闭订单API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/pay/combine/chapter3_4.shtml
     */
    post(data: Close.PostHttpMethod.JsonDataRequest, config: Close.PostHttpMethod.RequestConfig): AxiosPromise<Close.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.CombineTransactions.OutTradeNo {
  export interface _combine_out_trade_no_ {
    close: _combine_out_trade_no_.Close
  }
}
namespace WeChatPay.OpenAPI.V3.CombineTransactions {
  export interface OutTradeNo {
    _combine_out_trade_no_: OutTradeNo._combine_out_trade_no_
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface CombineTransactions {
    outTradeNo: CombineTransactions.OutTradeNo
  }
}
namespace WeChatPay.OpenAPI {
  export interface V3 {
    combineTransactions: V3.CombineTransactions
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
wxpay.v3.combineTransactions.outTradeNo._combine_out_trade_no_.close.post({
//                                                                   ^^^^
  combine_appid,
  sub_orders,
}, { combine_out_trade_no })
.then(({ status, }) => status === 204) // [!code hl]
```
