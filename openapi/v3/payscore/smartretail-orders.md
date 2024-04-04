---
title: 创建及查询智慧零售订单
description: 如用户可使用服务，则请求【创建智慧零售订单】接口，创建订单。在收到订单确认成功通知前，商户也可以通过【查询智慧零售订单】接口主动查询订单确认情况；
---

# 创建智慧零售订单 {#post}

如用户可使用服务，则请求【创建智慧零售订单】接口，创建订单。 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/payscore.php?chapter=14_1&index=3)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Payscore.SmartretailOrders.PostHttpMethod {
  export interface JsonDataRequest {
    appid: string
    out_order_no: string
    service_id: string
    service_start_time: string
    service_end_time: string
    service_start_location: string
    service_end_location: string
    service_introduction: string
    fees: {
      fee_name: string
      fee_count: number
      fee_amount: number
      fee_desc: string
    }[]
    discounts: {
      discount_name: string
      discount_desc: string
    }[]
    risk_amount: number
    attach: string
    need_user_confirm: boolean
    openid: string
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
  }
  export interface WellformedResponse {
    appid: string
    mchid: string
    out_order_no: string
    service_id: string
    order_id: string
    miniprogram_businesstype: string
    miniprogram_appid: string
    miniprogram_path: string
    miniprogram_username: string
    package: string
  }
}
namespace WeChatPay.OpenAPI.V3.Payscore {
  export interface SmartretailOrders {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/payscore.php?chapter=14_1&index=3
     */
    (data: SmartretailOrders.PostHttpMethod.JsonDataRequest, config?: SmartretailOrders.PostHttpMethod.RequestConfig): AxiosPromise<SmartretailOrders.PostHttpMethod.WellformedResponse>
    /**
     * 创建智慧零售订单
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/payscore.php?chapter=14_1&index=3
     */
    post(data: SmartretailOrders.PostHttpMethod.JsonDataRequest, config?: SmartretailOrders.PostHttpMethod.RequestConfig): AxiosPromise<SmartretailOrders.PostHttpMethod.WellformedResponse>
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
wxpay.v3.payscore.smartretailOrders.post({
//                                  ^^^^
  appid,
  out_order_no,
  service_id,
  service_start_time,
  service_end_time,
  service_start_location,
  service_end_location,
  service_introduction,
  fees,
  discounts,
  risk_amount,
  attach,
  need_user_confirm,
  openid,
})
.then(
  ({ // [!code hl:25]
    data: {
      appid,
      mchid,
      out_order_no,
      service_id,
      order_id,
      miniprogram_businesstype,
      miniprogram_appid,
      miniprogram_path,
      miniprogram_username,
      package: packageStr,
    },
  }) => ({
    appid,
    mchid,
    out_order_no,
    service_id,
    order_id,
    miniprogram_businesstype,
    miniprogram_appid,
    miniprogram_path,
    miniprogram_username,
    package: packageStr,
  })
)
```


# 查询智慧零售订单 {#get}

在收到订单确认成功通知前，商户也可以通过【查询智慧零售订单】接口主动查询订单确认情况； [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/payscore.php?chapter=14_2&index=4)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Payscore.SmartretailOrders.GetHttpMethod {
  export interface RequestConfig extends AxiosRequestConfig {
    params: {
      service_id: string
      out_order_no: string
      query_id: string
      appid: string
    }
  }
  export interface WellformedResponse {
    appid: string
    mchid: string
    out_order_no: string
    service_id: string
    state: string
    finish_type: number
    service_start_time: string
    service_end_time: string
    real_service_start_time: string
    real_service_end_time: string
    pay_succ_time: string
    service_start_location: string
    service_end_location: string
    real_service_start_location: string
    real_service_end_location: string
    service_introduction: string
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
    risk_amount: number
    total_amount: number
    attach: string
    finish_ticket: string
    finish_transaction_id: string
    pay_type: string
  }
}
namespace WeChatPay.OpenAPI.V3.Payscore {
  export interface SmartretailOrders {
    /**
     * 查询智慧零售订单
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/payscore.php?chapter=14_2&index=4
     */
    get(config: SmartretailOrders.GetHttpMethod.RequestConfig): AxiosPromise<SmartretailOrders.GetHttpMethod.WellformedResponse>
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
wxpay.v3.payscore.smartretailOrders.get({
//                                  ^^^^
  params,
})
.then(
  ({ // [!code hl:53]
    data: {
      appid,
      mchid,
      out_order_no,
      service_id,
      state,
      finish_type,
      service_start_time,
      service_end_time,
      real_service_start_time,
      real_service_end_time,
      pay_succ_time,
      service_start_location,
      service_end_location,
      real_service_start_location,
      real_service_end_location,
      service_introduction,
      fees,
      discounts,
      risk_amount,
      total_amount,
      attach,
      finish_ticket,
      finish_transaction_id,
      pay_type,
    },
  }) => ({
    appid,
    mchid,
    out_order_no,
    service_id,
    state,
    finish_type,
    service_start_time,
    service_end_time,
    real_service_start_time,
    real_service_end_time,
    pay_succ_time,
    service_start_location,
    service_end_location,
    real_service_start_location,
    real_service_end_location,
    service_introduction,
    fees,
    discounts,
    risk_amount,
    total_amount,
    attach,
    finish_ticket,
    finish_transaction_id,
    pay_type,
  })
)
```
