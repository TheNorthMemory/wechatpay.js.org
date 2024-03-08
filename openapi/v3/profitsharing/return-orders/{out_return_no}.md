---
title: 查询分账回退结果
description: 商户需要核实回退结果，可调用此接口查询回退结果
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3_partner/apis/chapter8_1_4.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Profitsharing.ReturnOrders._out_return_no_.GetHttpMethod {
  export interface RequestConfig extends AxiosRequestConfig {
    out_return_no: string
    params: {
      sub_mchid: string
      out_order_no: string
    }
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
namespace WeChatPay.OpenAPI.V3.Profitsharing.ReturnOrders {
  export interface _out_return_no_ {
    /**
     * 查询分账回退结果API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3_partner/apis/chapter8_1_4.shtml
     */
    get(config: _out_return_no_.GetHttpMethod.RequestConfig): AxiosPromise<_out_return_no_.GetHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Profitsharing {
  export interface ReturnOrders {
    _out_return_no_: ReturnOrders._out_return_no_
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
wxpay.v3.profitsharing.returnOrders._out_return_no_.get({
//                                                  ^^^
  out_return_no,
  params,
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
