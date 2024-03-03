---
title: Native下单
description: 商户Native支付下单接口，微信后台系统返回链接参数code_url，商户后台系统将code_url值生成二维码图片，用户使用微信客户端扫码后发起支付。
---

# {{ $frontmatter.title }}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/pay/transactions/chapter3_3.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Pay.Transactions.Native.PostHttpMethod {
  export interface JsonDataRequest {
    appid: string
    mchid: string
    description: string
    out_trade_no: string
    time_expire?: string | Date
    attach?: string
    notify_url: string
    amount: {
      total: number
      currency?: 'CNY'
    }
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
  }
  export interface WellformedResponse {
    code_url: string
  }
}
namespace WeChatPay.OpenAPI.V3.Pay.Transactions {
  export interface Native {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/pay/transactions/chapter3_3.shtml
     */
    (data: Native.PostHttpMethod.JsonDataRequest, config?: Native.PostHttpMethod.RequestConfig): AxiosPromise<Native.PostHttpMethod.WellformedResponse>
    /**
     * Native下单API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/pay/transactions/chapter3_3.shtml
     */
    post(data: Native.PostHttpMethod.JsonDataRequest, config?: Native.PostHttpMethod.RequestConfig): AxiosPromise<Native.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Pay {
  export interface Transactions {
    native: Transactions.Native
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

wxpay.v3.pay.transactions.native.post({
                               //^^^^
  mchid,
  appid,
  description,
  out_trade_no,
  notify_url,
  amount: { total, currency },
})
.then(({ data: { code_url } }) => code_url) // [!code hl]
```
