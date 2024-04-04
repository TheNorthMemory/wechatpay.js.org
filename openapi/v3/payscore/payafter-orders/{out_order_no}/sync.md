---
title: 支付分订单同步
description: 由于收款商户进行的某些“线下操作”会导致微信支付侧的订单状态与实际情况不符，例如用户通过线下付款的方式已经完成了支付，而微信支付侧还没有支付成功，此时可能导致用户重复支付。因此商户需要通过订单同步接口将订单状态同步给微信支付，修改订单在微信支付系统中的状态。 **注意：** 本接口只适用于智慧零售、先享后付、免押租借、免押速住的免押订单。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/payscore.php?chapter=24_1&index=1)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Payscore.PayafterOrders._out_order_no_.Sync.PostHttpMethod {
  export interface JsonDataRequest {
    appid: string
    service_id: string
    type: string
    detail: {
      paid_time: string
    }
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
    out_order_no: string
  }
  export interface WellformedResponse {
    appid: string
    mchid: string
    out_order_no: string
    order_id: string
  }
}
namespace WeChatPay.OpenAPI.V3.Payscore.PayafterOrders._out_order_no_ {
  export interface Sync {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/payscore.php?chapter=24_1&index=1
     */
    (data: Sync.PostHttpMethod.JsonDataRequest, config: Sync.PostHttpMethod.RequestConfig): AxiosPromise<Sync.PostHttpMethod.WellformedResponse>
    /**
     * 支付分订单同步
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/payscore.php?chapter=24_1&index=1
     */
    post(data: Sync.PostHttpMethod.JsonDataRequest, config: Sync.PostHttpMethod.RequestConfig): AxiosPromise<Sync.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Payscore.PayafterOrders {
  export interface _out_order_no_ {
    sync: _out_order_no_.Sync
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
wxpay.v3.payscore.payafterOrders._out_order_no_.sync.post({
//                                                   ^^^^
  appid,
  service_id,
  type,
  detail,
})
.then(
  ({ // [!code hl:13]
    data: {
      appid,
      mchid,
      out_order_no,
      order_id,
    },
  }) => ({
    appid,
    mchid,
    out_order_no,
    order_id,
  })
)
```
