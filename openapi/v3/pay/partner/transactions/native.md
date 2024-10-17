---
title: Native下单(合作伙伴模式)
description: 商户Native支付下单接口，微信后台系统返回链接参数code_url，商户后台系统将code_url值生成二维码图片，用户使用微信客户端扫码后发起支付。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/pay/transactions/chapter5_3.shtml) [官方文档](https://pay.weixin.qq.com/docs/partner/apis/partner-native-payment/partner-jsons/partner-native-prepay.html)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Pay.Partner.Transactions.Native.PostHttpMethod {
  export interface JsonDataRequest {
    sp_appid: string
    sp_mchid: string
    sub_mchid: string
    sub_appid?: string
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
namespace WeChatPay.OpenAPI.V3.Pay.Partner.Transactions {
  export interface Native {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/docs/partner/apis/partner-native-payment/partner-jsons/partner-native-prepay.html
     */
    (data: Native.PostHttpMethod.JsonDataRequest, config?: Native.PostHttpMethod.RequestConfig): AxiosPromise<Native.PostHttpMethod.WellformedResponse>
    /**
     * Native下单API
     * @link https://pay.weixin.qq.com/docs/partner/apis/partner-native-payment/partner-jsons/partner-native-prepay.html
     */
    post(data: Native.PostHttpMethod.JsonDataRequest, config?: Native.PostHttpMethod.RequestConfig): AxiosPromise<Native.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Pay.Partner {
  export interface Transactions {
    native: Transactions.Native
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

wxpay.v3.pay.partner.transactions.native.post({
                                       //^^^^
  sp_mchid,
  sp_appid,
  sub_mchid,
  sub_appid,
  description,
  out_trade_no,
  notify_url,
  amount: { total, currency },
})
.then(({ data: { code_url } }) => code_url) // [!code hl]
```
