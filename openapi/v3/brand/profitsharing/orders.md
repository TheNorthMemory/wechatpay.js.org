---
title: 请求分账/查询分账结果
description: 微信订单支付成功后，由服务商发起分账请求，将结算后的资金分给分账接收方。
---

# 请求分账 {#post}

微信订单支付成功后，由服务商发起分账请求，将结算后的资金分给分账接收方。 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/brand/chapter3_1.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Brand.Profitsharing.Orders.PostHttpMethod {
  export interface JsonDataRequest {
    brand_mchid: string
    sub_mchid: string
    appid: string
    sub_appid: string
    transaction_id: string
    out_order_no: string
    receivers: {
      type: string
      account: string
      amount: number
      description: string
    }[]
    finish: boolean
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
  }
  export interface WellformedResponse {
    brand_mchid: string
    sub_mchid: string
    transaction_id: string
    out_order_no: string
    order_id: string
  }
}
namespace WeChatPay.OpenAPI.V3.Brand.Profitsharing {
  export interface Orders {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/brand/chapter3_1.shtml
     */
    (data: Orders.PostHttpMethod.JsonDataRequest, config?: Orders.PostHttpMethod.RequestConfig): AxiosPromise<Orders.PostHttpMethod.WellformedResponse>
    /**
     * 请求分账API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/brand/chapter3_1.shtml
     */
    post(data: Orders.PostHttpMethod.JsonDataRequest, config?: Orders.PostHttpMethod.RequestConfig): AxiosPromise<Orders.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Brand {
  export interface Profitsharing {
    orders: Profitsharing.Orders
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface Brand {
    profitsharing: Brand.Profitsharing
  }
}
namespace WeChatPay.OpenAPI {
  export interface V3 {
    brand: V3.Brand
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
wxpay.v3.brand.profitsharing.orders.post({
//                                  ^^^^
  brand_mchid,
  sub_mchid,
  appid,
  sub_appid,
  transaction_id,
  out_order_no,
  receivers,
  finish,
})
.then(
  ({ // [!code hl:15]
    data: {
      brand_mchid,
      sub_mchid,
      transaction_id,
      out_order_no,
      order_id,
    },
  }) => ({
    brand_mchid,
    sub_mchid,
    transaction_id,
    out_order_no,
    order_id,
  })
)
```

# 查询分账结果 {#get}

发起分账请求后，可调用此接口查询分账结果。发起分账完结请求后，可调用此接口查询分账完结的结果。 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/brand/chapter3_2.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Brand.Profitsharing.Orders.GetHttpMethod {
  export interface RequestConfig extends AxiosRequestConfig {
    params: {
      sub_mchid: string
      transaction_id: string
      out_order_no: string
    }
  }
  export interface WellformedResponse {
    sub_mchid: string
    transaction_id: string
    out_order_no: string
    order_id: string
    status: string
    receivers: {
      type: string
      account: string
      amount: number
      description: string
      result: string
      finish_time: string
      fail_reason: string
    }[]
    close_reason: string
    finish_amount: number
    finish_description: string
  }
}
namespace WeChatPay.OpenAPI.V3.Brand.Profitsharing {
  export interface Orders {
    /**
     * 查询分账结果API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/brand/chapter3_2.shtml
     */
    get(config: Orders.GetHttpMethod.RequestConfig): AxiosPromise<Orders.GetHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Brand {
  export interface Profitsharing {
    orders: Profitsharing.Orders
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface Brand {
    profitsharing: Brand.Profitsharing
  }
}
namespace WeChatPay.OpenAPI {
  export interface V3 {
    brand: V3.Brand
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
wxpay.v3.brand.profitsharing.orders.get({
//                                  ^^^
  params,
})
.then(
  ({ // [!code hl:23]
    data: {
      sub_mchid,
      transaction_id,
      out_order_no,
      order_id,
      status,
      receivers,
      close_reason,
      finish_amount,
      finish_description,
    },
  }) => ({
    sub_mchid,
    transaction_id,
    out_order_no,
    order_id,
    status,
    receivers,
    close_reason,
    finish_amount,
    finish_description,
  })
)
```
