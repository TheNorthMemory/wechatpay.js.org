---
title: 核销用户券
description: 在用户满足优惠门槛后，商户可通过该接口核销用户微信卡包中具体某一张商家券。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/apis/chapter9_2_3.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Marketing.Busifavor.Coupons.Use.PostHttpMethod {
  export interface JsonDataRequest {
    coupon_code: string
    stock_id: string
    appid: string
    use_time: string
    use_request_no: string
    openid: string
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
  }
  export interface WellformedResponse {
    stock_id: string
    openid: string
    wechatpay_use_time: string
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing.Busifavor.Coupons {
  export interface Use {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/apis/chapter9_2_3.shtml
     */
    (data: Use.PostHttpMethod.JsonDataRequest, config?: Use.PostHttpMethod.RequestConfig): AxiosPromise<Use.PostHttpMethod.WellformedResponse>
    /**
     * 核销用户券API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/apis/chapter9_2_3.shtml
     */
    post(data: Use.PostHttpMethod.JsonDataRequest, config?: Use.PostHttpMethod.RequestConfig): AxiosPromise<Use.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing.Busifavor {
  export interface Coupons {
    use: Coupons.Use
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
wxpay.v3.marketing.busifavor.coupons.use.post({
//                                       ^^^^
  coupon_code,
  stock_id,
  appid,
  use_time,
  use_request_no,
  openid,
})
.then(
  ({ // [!code hl:11]
    data: {
      stock_id,
      openid,
      wechatpay_use_time,
    },
  }) => ({
    stock_id,
    openid,
    wechatpay_use_time,
  })
)
```
