---
title: 向用户发券
description: 向用户发券API
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/docs/merchant/products/merchant-exclusive-coupon/introduction.html)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Marketing.Busifavor.Coupons.Send.PostHttpMethod {
  export interface JsonDataRequest {
    openid: string
    appid: string
    stock_id: string
    out_request_no: string
    coupon_code: string
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
  }
  export interface WellformedResponse {
    stock_id: string
    coupon_code: string
    out_request_no: string
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing.Busifavor.Coupons {
  export interface Send {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/docs/merchant/products/merchant-exclusive-coupon/introduction.html
     */
    (data: Send.PostHttpMethod.JsonDataRequest, config?: Send.PostHttpMethod.RequestConfig): AxiosPromise<Send.PostHttpMethod.WellformedResponse>
    /**
     * 向用户发券
     * @link https://pay.weixin.qq.com/docs/merchant/products/merchant-exclusive-coupon/introduction.html
     */
    post(data: Send.PostHttpMethod.JsonDataRequest, config?: Send.PostHttpMethod.RequestConfig): AxiosPromise<Send.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing.Busifavor {
  export interface Coupons {
    send: Coupons.Send
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing {
  export interface Busifavor {
    coupons: Busifavor.Coupons
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface Marketing {
    busifavor: Marketing.Busifavor
  }
}
namespace WeChatPay.OpenAPI {
  export interface V3 {
    marketing: V3.Marketing
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
wxpay.v3.marketing.busifavor.coupons.send.post({
//                                        ^^^^
  openid,
  appid,
  stock_id,
  out_request_no,
  coupon_code,
})
.then(
  ({ // [!code hl:11]
    data: {
      stock_id,
      coupon_code,
      out_request_no,
    },
  }) => ({
    stock_id,
    coupon_code,
    out_request_no,
  })
)
```
