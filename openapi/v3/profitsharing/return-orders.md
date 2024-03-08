---
title: 请求分账回退
description: 如果订单已经分账，在退款时，可以先调此接口，将已分账的资金从分账接收方的账户回退给分账方，再发起退款
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3_partner/apis/chapter8_1_3.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Profitsharing.ReturnOrders.PostHttpMethod {
  export interface JsonDataRequest {
    sub_mchid: string
    order_id: string
    out_order_no: string
    out_return_no: string
    return_mchid: string
    amount: number
    description: string
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
  }
  export interface WellformedResponse {
    sub_mchid: string
    order_id: string
    out_order_no: string
    out_return_no: string
    return_id: string
    return_mchid: string
    amount: number
    description: string
    result: string
    fail_reason: string
    create_time: string
    finish_time: string
  }
}
namespace WeChatPay.OpenAPI.V3.Profitsharing {
  export interface ReturnOrders {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3_partner/apis/chapter8_1_3.shtml
     */
    (data: ReturnOrders.PostHttpMethod.JsonDataRequest, config?: ReturnOrders.PostHttpMethod.RequestConfig): AxiosPromise<ReturnOrders.PostHttpMethod.WellformedResponse>
    /**
     * 请求分账回退API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3_partner/apis/chapter8_1_3.shtml
     */
    post(data: ReturnOrders.PostHttpMethod.JsonDataRequest, config?: ReturnOrders.PostHttpMethod.RequestConfig): AxiosPromise<ReturnOrders.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface Profitsharing {
    returnOrders: Profitsharing.ReturnOrders
  }
}
namespace WeChatPay.OpenAPI {
  export interface V3 {
    profitsharing: V3.Profitsharing
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
wxpay.v3.profitsharing.returnOrders.post({
//                                  ^^^^
  sub_mchid,
  order_id,
  out_order_no,
  out_return_no,
  return_mchid,
  amount,
  description,
})
.then(
  ({ // [!code hl:29]
    data: {
      sub_mchid,
      order_id,
      out_order_no,
      out_return_no,
      return_id,
      return_mchid,
      amount,
      description,
      result,
      fail_reason,
      create_time,
      finish_time,
    },
  }) => ({
    sub_mchid,
    order_id,
    out_order_no,
    out_return_no,
    return_id,
    return_mchid,
    amount,
    description,
    result,
    fail_reason,
    create_time,
    finish_time,
  })
)
```
