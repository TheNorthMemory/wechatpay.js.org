---
title: 取消支付分订单
description: 微信支付分订单创建之后，由于某些原因导致订单不能正常支付时，可使用此接口取消订单。前置条件：服务订单状态为已创单或进行中
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/payscore/chapter3_3.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Payscore.Serviceorder._out_order_no_.Cancel.PostHttpMethod {
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
namespace WeChatPay.OpenAPI.V3.Payscore.Serviceorder._out_order_no_ {
  export interface Cancel {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/payscore/chapter3_3.shtml
     */
    (data: Cancel.PostHttpMethod.JsonDataRequest, config: Cancel.PostHttpMethod.RequestConfig): AxiosPromise<Cancel.PostHttpMethod.WellformedResponse>
    /**
     * 取消支付分订单API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/payscore/chapter3_3.shtml
     */
    post(data: Cancel.PostHttpMethod.JsonDataRequest, config: Cancel.PostHttpMethod.RequestConfig): AxiosPromise<Cancel.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Payscore.Serviceorder {
  export interface _out_order_no_ {
    cancel: _out_order_no_.Cancel
  }
}
namespace WeChatPay.OpenAPI.V3.Payscore {
  export interface Serviceorder {
    _out_order_no_: Serviceorder._out_order_no_
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface Payscore {
    serviceorder: Payscore.Serviceorder
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
wxpay.v3.payscore.serviceorder._out_order_no_.cancel.post({
//                                                   ^^^^
  appid,
  service_id,
  reason,
}, { out_order_no })
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
