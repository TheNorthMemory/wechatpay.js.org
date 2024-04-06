---
title: 申请退券
description: 商户可以通过该接口为已核销的券申请退券
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/apis/chapter9_2_13.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Marketing.Busifavor.Coupons.Return.PostHttpMethod {
  export interface JsonDataRequest {
    coupon_code: string
    stock_id: string
    return_request_no: string
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
  }
  export interface WellformedResponse {
    wechatpay_return_time: string
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing.Busifavor.Coupons {
  export interface Return {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/apis/chapter9_2_13.shtml
     */
    (data: Return.PostHttpMethod.JsonDataRequest, config?: Return.PostHttpMethod.RequestConfig): AxiosPromise<Return.PostHttpMethod.WellformedResponse>
    /**
     * 申请退券API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/apis/chapter9_2_13.shtml
     */
    post(data: Return.PostHttpMethod.JsonDataRequest, config?: Return.PostHttpMethod.RequestConfig): AxiosPromise<Return.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing.Busifavor {
  export interface Coupons {
    return: Coupons.Return
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
wxpay.v3.marketing.busifavor.coupons.return.post({
//                                          ^^^^
  coupon_code,
  stock_id,
  return_request_no,
})
.then(
  ({ // [!code hl:7]
    data: {
      wechatpay_return_time,
    },
  }) => ({
    wechatpay_return_time,
  })
)
```
