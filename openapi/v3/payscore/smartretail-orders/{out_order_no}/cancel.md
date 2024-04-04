---
title: 撤销智慧零售订单
description: 前置条件：订单创建后，用户确认订单前。用户确认订单后不可调用该接口。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/payscore.php?chapter=14_3&index=5)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Payscore.SmartretailOrders._out_order_no_.Cancel.PostHttpMethod {
  export interface JsonDataRequest {
    appid: string
    service_id: string
    reason: string
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
  export interface Cancel {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/payscore.php?chapter=14_3&index=5
     */
    (data: Cancel.PostHttpMethod.JsonDataRequest, config: Cancel.PostHttpMethod.RequestConfig): AxiosPromise<Cancel.PostHttpMethod.WellformedResponse>
    /**
     * 撤销智慧零售订单
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/payscore.php?chapter=14_3&index=5
     */
    post(data: Cancel.PostHttpMethod.JsonDataRequest, config: Cancel.PostHttpMethod.RequestConfig): AxiosPromise<Cancel.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Payscore.SmartretailOrders {
  export interface _out_order_no_ {
    cancel: _out_order_no_.Cancel
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
wxpay.v3.payscore.smartretailOrders._out_order_no_.cancel.post({
//                                                        ^^^^
  appid,
  service_id,
  reason,
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
