---
title: 使券失效
description: 商户可以通过该接口将可用券进行失效处理，券失效后无法再被核销
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Marketing.Busifavor.Coupons.Deactivate.PostHttpMethod {
  export interface JsonDataRequest {
    coupon_code: string
    stock_id: string
    deactivate_request_no: string
    deactivate_reason: string
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
  }
  export interface WellformedResponse {
    wechatpay_deactivate_time: string
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing.Busifavor.Coupons {
  export interface Deactivate {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/apis/chapter9_2_14.shtml
     */
    (data: Deactivate.PostHttpMethod.JsonDataRequest, config?: Deactivate.PostHttpMethod.RequestConfig): AxiosPromise<Deactivate.PostHttpMethod.WellformedResponse>
    /**
     * 使券失效API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/apis/chapter9_2_14.shtml
     */
    post(data: Deactivate.PostHttpMethod.JsonDataRequest, config?: Deactivate.PostHttpMethod.RequestConfig): AxiosPromise<Deactivate.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing.Busifavor {
  export interface Coupons {
    deactivate: Coupons.Deactivate
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
wxpay.v3.marketing.busifavor.coupons.deactivate.post({
//                                              ^^^^
  coupon_code,
  stock_id,
  deactivate_request_no,
  deactivate_reason,
})
.then(
  ({ // [!code hl:7]
    data: {
      wechatpay_deactivate_time,
    },
  }) => ({
    wechatpay_deactivate_time,
  })
)
```

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4012465890) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012465924)
