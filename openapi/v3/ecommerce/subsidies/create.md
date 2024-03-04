---
title: 请求补差(平台收付通)
description: 服务商下单的时候带上补差标识，微信订单支付成功并结算完成后，发起分账前，调用该口进行补差。
---

# {{ $frontmatter.title }}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/ecommerce/subsidies/chapter3_1.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Ecommerce.Subsidies.Create.PostHttpMethod {
  export interface JsonDataRequest {
    sub_mchid: string
    transaction_id: string
    amount: number
    description: string
    refund_id: string
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
  }
  export interface WellformedResponse {
    sub_mchid: string
    transaction_id: string
    subsidy_id: string
    description: string
    amount: number
    result: string
    success_time: string | Date
  }
}
namespace WeChatPay.OpenAPI.V3.Ecommerce.Subsidies {
  export interface Create {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/ecommerce/subsidies/chapter3_1.shtml
     */
    (data: Create.PostHttpMethod.JsonDataRequest, config?: Create.PostHttpMethod.RequestConfig): AxiosPromise<Create.PostHttpMethod.WellformedResponse>
    /**
     * 请求补差API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/ecommerce/subsidies/chapter3_1.shtml
     */
    post(data: Create.PostHttpMethod.JsonDataRequest, config?: Create.PostHttpMethod.RequestConfig): AxiosPromise<Create.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Ecommerce {
  export interface Subsidies {
    create: Subsidies.Create
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface Ecommerce {
    subsidies: Ecommerce.Subsidies
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
wxpay.v3.ecommerce.subsidies.create.post({
//                                  ^^^^
  sub_mchid,
  transaction_id,
  amount,
  description,
  refund_id,
})
.then(
  ({ // [!code hl:19]
    data: {
      sub_mchid,
      transaction_id,
      subsidy_id,
      description,
      amount,
      result,
      success_time,
    },
  }) => ({
    sub_mchid,
    transaction_id,
    subsidy_id,
    description,
    amount,
    result,
    success_time,
  })
)
```