---
title: 查询分账结果
description: 发起分账请求后，可调用此接口查询分账结果
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3_partner/apis/chapter8_1_2.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Profitsharing.Orders._out_order_no_.GetHttpMethod {
  export interface RequestConfig extends AxiosRequestConfig {
    out_order_no: string
    params: {
      sub_mchid: string
      transaction_id: string
    }
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
  export interface _out_order_no_ {
    /**
     * 查询分账结果API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3_partner/apis/chapter8_1_2.shtml
     */
    get(config: _out_order_no_.GetHttpMethod.RequestConfig): AxiosPromise<_out_order_no_.GetHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Profitsharing {
  export interface Orders {
    _out_order_no_: Orders._out_order_no_
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
wxpay.v3.profitsharing.orders._out_order_no_.get({
//                                           ^^^
  out_order_no,
  params,
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
