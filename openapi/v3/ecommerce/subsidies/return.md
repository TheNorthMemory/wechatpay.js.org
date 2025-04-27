---
title: 请求补差回退(平台收付通)
description: 订单发送退款的时候，可以对补贴成功的补差单发起回退。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Ecommerce.Subsidies.Return.PostHttpMethod {
  export interface JsonDataRequest {
    sub_mchid: string
    out_order_no: string
    transaction_id: string
    refund_id: string
    amount: number
    description: string
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
  }
  export interface WellformedResponse {
    sub_mchid: string
    transaction_id: string
    subsidy_refund_id: string
    refund_id: string
    out_order_no: string
    amount: number
    description: string
    result: string
    success_time: string | Date
  }
}
namespace WeChatPay.OpenAPI.V3.Ecommerce.Subsidies {
  export interface Return {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/ecommerce/subsidies/chapter3_2.shtml
     */
    (data: Return.PostHttpMethod.JsonDataRequest, config?: Return.PostHttpMethod.RequestConfig): AxiosPromise<Return.PostHttpMethod.WellformedResponse>
    /**
     * 请求补差回退API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/ecommerce/subsidies/chapter3_2.shtml
     */
    post(data: Return.PostHttpMethod.JsonDataRequest, config?: Return.PostHttpMethod.RequestConfig): AxiosPromise<Return.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Ecommerce {
  export interface Subsidies {
    return: Subsidies.Return
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
wxpay.v3.ecommerce.subsidies.return.post({
//                                  ^^^^
  sub_mchid,
  out_order_no,
  transaction_id,
  refund_id,
  amount,
  description,
})
.then(
  ({ // [!code hl:23]
    data: {
      sub_mchid,
      transaction_id,
      subsidy_refund_id,
      refund_id,
      out_order_no,
      amount,
      description,
      result,
      success_time,
    },
  }) => ({
    sub_mchid,
    transaction_id,
    subsidy_refund_id,
    refund_id,
    out_order_no,
    amount,
    description,
    result,
    success_time,
  })
)
```

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012477636)
