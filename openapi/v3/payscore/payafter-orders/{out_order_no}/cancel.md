---
title: 撤销先享后付订单
description: 
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/payscore.php?chapter=17_3&index=5)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Payscore.PayafterOrders._out_order_no_.Cancel.PostHttpMethod {
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
namespace WeChatPay.OpenAPI.V3.Payscore.PayafterOrders._out_order_no_ {
  export interface Cancel {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/payscore.php?chapter=17_3&index=5
     */
    (data: Cancel.PostHttpMethod.JsonDataRequest, config: Cancel.PostHttpMethod.RequestConfig): AxiosPromise<Cancel.PostHttpMethod.WellformedResponse>
    /**
     * 撤销先享后付订单
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/payscore.php?chapter=17_3&index=5
     */
    post(data: Cancel.PostHttpMethod.JsonDataRequest, config: Cancel.PostHttpMethod.RequestConfig): AxiosPromise<Cancel.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Payscore.PayafterOrders {
  export interface _out_order_no_ {
    cancel: _out_order_no_.Cancel
  }
}
namespace WeChatPay.OpenAPI.V3.Payscore {
  export interface PayafterOrders {
    _out_order_no_: PayafterOrders._out_order_no_
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface Payscore {
    payafterOrders: Payscore.PayafterOrders
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
wxpay.v3.payscore.payafterOrders._out_order_no_.cancel.post({
//                                                     ^^^^
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
