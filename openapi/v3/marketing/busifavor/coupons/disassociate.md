---
title: 取消关联订单信息
description: 取消商家券与订单信息的关联关系
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/apis/chapter9_2_10.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Marketing.Busifavor.Coupons.Disassociate.PostHttpMethod {
  export interface JsonDataRequest {
    stock_id: string
    coupon_code: string
    out_trade_no: string
    out_request_no: string
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
  }
  export interface WellformedResponse {
    wechatpay_associate_time: string | Date
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing.Busifavor.Coupons {
  export interface Disassociate {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/apis/chapter9_2_10.shtml
     */
    (data: Disassociate.PostHttpMethod.JsonDataRequest, config?: Disassociate.PostHttpMethod.RequestConfig): AxiosPromise<Disassociate.PostHttpMethod.WellformedResponse>
    /**
     * 取消关联订单信息API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/apis/chapter9_2_10.shtml
     */
    post(data: Disassociate.PostHttpMethod.JsonDataRequest, config?: Disassociate.PostHttpMethod.RequestConfig): AxiosPromise<Disassociate.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing.Busifavor {
  export interface Coupons {
    disassociate: Coupons.Disassociate
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
wxpay.v3.marketing.busifavor.coupons.disassociate.post({
//                                                ^^^^
  stock_id,
  coupon_code,
  out_trade_no,
  out_request_no,
})
.then(
  ({ // [!code hl:7]
    data: {
      wechatpay_associate_time,
    },
  }) => ({
    wechatpay_associate_time,
  })
)
```
