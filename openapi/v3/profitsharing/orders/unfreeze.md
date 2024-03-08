---
title: 解冻剩余资金
description: 不需要进行分账的订单，可直接调用本接口将订单的金额全部解冻给特约商户
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3_partner/apis/chapter8_1_5.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Profitsharing.Orders.Unfreeze.PostHttpMethod {
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
    state: string
    receivers: {
      amount: number
      description: string
      type: string
      account: string
      result: string
      fail_reason: string
      detail_id: string
      create_time: string
      finish_time: string
    }[]
  }
}
namespace WeChatPay.OpenAPI.V3.Profitsharing.Orders {
  export interface Unfreeze {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3_partner/apis/chapter8_1_5.shtml
     */
    (data: Unfreeze.PostHttpMethod.JsonDataRequest, config?: Unfreeze.PostHttpMethod.RequestConfig): AxiosPromise<Unfreeze.PostHttpMethod.WellformedResponse>
    /**
     * 解冻剩余资金API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3_partner/apis/chapter8_1_5.shtml
     */
    post(data: Unfreeze.PostHttpMethod.JsonDataRequest, config?: Unfreeze.PostHttpMethod.RequestConfig): AxiosPromise<Unfreeze.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Profitsharing {
  export interface Orders {
    unfreeze: Orders.Unfreeze
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface Profitsharing {
    orders: Profitsharing.Orders
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
wxpay.v3.profitsharing.orders.unfreeze.post({
//                                     ^^^^
  sub_mchid,
  transaction_id,
  out_order_no,
  description,
})
.then(
  ({ // [!code hl:17]
    data: {
      sub_mchid,
      transaction_id,
      out_order_no,
      order_id,
      state,
      receivers,
    },
  }) => ({
    sub_mchid,
    transaction_id,
    out_order_no,
    order_id,
    state,
    receivers,
  })
)
```
