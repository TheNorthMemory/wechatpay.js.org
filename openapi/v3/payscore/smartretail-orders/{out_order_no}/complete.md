---
title: 完结智慧零售订单
description: 用户结束服务，商户根据实际情况调用【完结智慧零售订单】接口（如最终消费金额为0，则可以在【完结智慧零售订单】时传递取消订单的标识参数来达成），微信根据【完结智慧零售订单】接口中传递的扣款金额完成扣款；前置条件：用户确认订单成功后。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/payscore.php?chapter=14_4&index=6)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Payscore.SmartretailOrders._out_order_no_.Complete.PostHttpMethod {
  export interface JsonDataRequest {
    appid: string
    service_id: string
    finish_type: 1 | 2
    cancel_reason: string
    real_service_start_time: string
    real_service_end_time: string
    real_service_end_location: string
    fees: {
      fee_name: string
      fee_count: number
      fee_amount: number
      fee_desc: string
    }[]
    discounts: {
      discount_name: string
      discount_amount: number
      discount_desc: string
    }[]
    total_amount: number
    finish_ticket: string
    profit_sharing: boolean
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
    out_order_no: string
  }
  export interface WellformedResponse {
    appid: string
    mchid: string
    out_order_no: string
    service_id: string
    order_id: string
  }
}
namespace WeChatPay.OpenAPI.V3.Payscore.SmartretailOrders._out_order_no_ {
  export interface Complete {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/payscore.php?chapter=14_4&index=6
     */
    (data: Complete.PostHttpMethod.JsonDataRequest, config: Complete.PostHttpMethod.RequestConfig): AxiosPromise<Complete.PostHttpMethod.WellformedResponse>
    /**
     * 完结智慧零售订单
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/payscore.php?chapter=14_4&index=6
     */
    post(data: Complete.PostHttpMethod.JsonDataRequest, config: Complete.PostHttpMethod.RequestConfig): AxiosPromise<Complete.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Payscore.SmartretailOrders {
  export interface _out_order_no_ {
    complete: _out_order_no_.Complete
  }
}
namespace WeChatPay.OpenAPI.V3.Payscore {
  export interface SmartretailOrders {
    _out_order_no_: SmartretailOrders._out_order_no_
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface Payscore {
    smartretailOrders: Payscore.SmartretailOrders
  }
}
namespace WeChatPay.OpenAPI {
  export interface V3 {
    payscore: V3.Payscore
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
wxpay.v3.payscore.smartretailOrders._out_order_no_.complete.post({
//                                                          ^^^^
  appid,
  service_id,
  finish_type,
  cancel_reason,
  real_service_start_time,
  real_service_end_time,
  real_service_end_location,
  fees,
  discounts,
  total_amount,
  finish_ticket,
  profit_sharing,
})
.then(
  ({ // [!code hl:15]
    data: {
      appid,
      mchid,
      out_order_no,
      service_id,
      order_id,
    },
  }) => ({
    appid,
    mchid,
    out_order_no,
    service_id,
    order_id,
  })
)
```
