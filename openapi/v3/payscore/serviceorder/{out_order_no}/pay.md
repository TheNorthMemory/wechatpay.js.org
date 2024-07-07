---
title: 商户发起催收扣款
description: 当微信支付分订单支付状态处于“待支付”时，商户可使用该接口向用户发起收款。**前置条件：**服务订单支付状态处于“待支付”状态
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/payscore/chapter3_6.shtml) [官方文档](https://pay.weixin.qq.com/docs/merchant/apis/weixin-pay-score/service-order/collect-service-order.html)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Payscore.Serviceorder._out_order_no_.Pay.PostHttpMethod {
  export interface JsonDataRequest {
    appid: string
    service_id: string
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
  export interface Pay {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/docs/merchant/apis/weixin-pay-score/service-order/collect-service-order.html
     */
    (data: Pay.PostHttpMethod.JsonDataRequest, config: Pay.PostHttpMethod.RequestConfig): AxiosPromise<Pay.PostHttpMethod.WellformedResponse>
    /**
     * 商户发起催收扣款API
     * @link https://pay.weixin.qq.com/docs/merchant/apis/weixin-pay-score/service-order/collect-service-order.html
     */
    post(data: Pay.PostHttpMethod.JsonDataRequest, config: Pay.PostHttpMethod.RequestConfig): AxiosPromise<Pay.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Payscore.Serviceorder {
  export interface _out_order_no_ {
    pay: _out_order_no_.Pay
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
wxpay.v3.payscore.serviceorder._out_order_no_.pay.post({
//                                                ^^^^
  appid,
  service_id,
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
