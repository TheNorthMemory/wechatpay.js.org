---
title: 电商合单委托代扣撤销订单
description: 商户可以通过该接口发起免密的合单撤销
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Ecommerce.CombinePapay.Transactions._combine_out_trade_no_.Reverse.PostHttpMethod {
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
namespace WeChatPay.OpenAPI.V3.Ecommerce.CombinePapay.Transactions._combine_out_trade_no_ {
  export interface Reverse {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3_partner/Offline/apis/chapter5_5_5.shtml
     */
    (data: Reverse.PostHttpMethod.JsonDataRequest, config: Reverse.PostHttpMethod.RequestConfig): AxiosPromise<Reverse.PostHttpMethod.WellformedResponse>
    /**
     * 电商合单委托代扣撤销订单API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3_partner/Offline/apis/chapter5_5_5.shtml
     */
    post(data: Reverse.PostHttpMethod.JsonDataRequest, config: Reverse.PostHttpMethod.RequestConfig): AxiosPromise<Reverse.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Ecommerce.CombinePapay.Transactions {
  export interface _combine_out_trade_no_ {
    reverse: _combine_out_trade_no_.Reverse
  }
}
namespace WeChatPay.OpenAPI.V3.Ecommerce.CombinePapay {
  export interface Transactions {
    _combine_out_trade_no_: Transactions._combine_out_trade_no_
  }
}
namespace WeChatPay.OpenAPI.V3.Ecommerce {
  export interface CombinePapay {
    transactions: CombinePapay.Transactions
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface Ecommerce {
    combinePapay: Ecommerce.CombinePapay
  }
}
namespace WeChatPay.OpenAPI {
  export interface V3 {
    ecommerce: V3.Ecommerce
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
wxpay.v3.ecommerce.combinePapay.transactions._combine_out_trade_no_.reverse.post({
//                                                                          ^^^^
  combine_appid,
  sub_orders,
}, { combine_out_trade_no, })
.then(({ status, }) => status === 204) // [!code hl]
```

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012884126)
