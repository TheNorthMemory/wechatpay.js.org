---
title: 出行券切卡组件预下单
description: 商户在拉起快捷切卡小程序前，需要先调用本接口预下单，下单成功后，通过返回的token拉起小程序，本接口的调用商户需要和拉起组件传入的调用商户是同一个。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/apis/chapter9_9_1.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.IndustryCoupon.Tokens.PostHttpMethod {
  export interface JsonDataRequest {
    open_id: string
    coupon_list: {
      stock_id: number
      coupon_id: string
    }[]
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
  }
  export interface WellformedResponse {
    token: string
    expires_time: string
  }
}
namespace WeChatPay.OpenAPI.V3.IndustryCoupon {
  export interface Tokens {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/apis/chapter9_9_1.shtml
     */
    (data: Tokens.PostHttpMethod.JsonDataRequest, config?: Tokens.PostHttpMethod.RequestConfig): AxiosPromise<Tokens.PostHttpMethod.WellformedResponse>
    /**
     * 出行券切卡组件预下单API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/apis/chapter9_9_1.shtml
     */
    post(data: Tokens.PostHttpMethod.JsonDataRequest, config?: Tokens.PostHttpMethod.RequestConfig): AxiosPromise<Tokens.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface IndustryCoupon {
    tokens: IndustryCoupon.Tokens
  }
}
namespace WeChatPay.OpenAPI {
  export interface V3 {
    industryCoupon: V3.IndustryCoupon
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
wxpay.v3.industryCoupon.tokens.post({
//                             ^^^^
  open_id,
  coupon_list,
})
.then(
  ({ // [!code hl:9]
    data: {
      token,
      expires_time,
    },
  }) => ({
    token,
    expires_time,
  })
)
```
