---
title: 完结分账
description: 不需要进行分账的订单，可直接调用本接口将订单的金额全部解冻给分账方商户
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Brand.Profitsharing.FinishOrder.PostHttpMethod {
  export interface JsonDataRequest {
    sub_mchid: string
    transaction_id: string
    out_order_no: string
    description: string
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
  }
  export interface WellformedResponse {
    sub_mchid: string
    transaction_id: string
    out_order_no: string
    order_id: string
  }
}
namespace WeChatPay.OpenAPI.V3.Brand.Profitsharing {
  export interface FinishOrder {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/brand/chapter3_5.shtml
     */
    (data: FinishOrder.PostHttpMethod.JsonDataRequest, config?: FinishOrder.PostHttpMethod.RequestConfig): AxiosPromise<FinishOrder.PostHttpMethod.WellformedResponse>
    /**
     * 完结分账API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/brand/chapter3_5.shtml
     */
    post(data: FinishOrder.PostHttpMethod.JsonDataRequest, config?: FinishOrder.PostHttpMethod.RequestConfig): AxiosPromise<FinishOrder.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Brand {
  export interface Profitsharing {
    finishOrder: Profitsharing.FinishOrder
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface Brand {
    profitsharing: Brand.Profitsharing
  }
}
namespace WeChatPay.OpenAPI {
  export interface V3 {
    brand: V3.Brand
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
wxpay.v3.brand.profitsharing.finishOrder.post({
//                                       ^^^^
  sub_mchid,
  transaction_id,
  out_order_no,
  description,
})
.then(
  ({ // [!code hl:13]
    data: {
      sub_mchid,
      transaction_id,
      out_order_no,
      order_id,
    },
  }) => ({
    sub_mchid,
    transaction_id,
    out_order_no,
    order_id,
  })
)
```

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012467016)
