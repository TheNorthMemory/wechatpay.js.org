---
title: 创建及查询先享后付订单
description: 如用户可使用服务，则请求【创建先享后付订单】接口，创建订单。在收到订单确认成功通知前，商户也可以通过【查询先享后付订单】接口主动查询订单确认情况；
---

# 创建先享后付订单 {#post}

如用户可使用服务，则请求【创建先享后付订单】接口，创建订单。 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/payscore.php?chapter=17_1&index=3)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Payscore.PayafterOrders.PostHttpMethod {
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
    name: string
    phone: string
    userid: string
    address: string
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
    headers: {
      'Wechatpay-Serial': string
    }
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
  export interface PayafterOrders {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/payscore.php?chapter=17_1&index=3
     */
    (data: PayafterOrders.PostHttpMethod.JsonDataRequest, config: PayafterOrders.PostHttpMethod.RequestConfig): AxiosPromise<PayafterOrders.PostHttpMethod.WellformedResponse>
    /**
     * 创建先享后付订单
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/payscore.php?chapter=17_1&index=3
     */
    post(data: PayafterOrders.PostHttpMethod.JsonDataRequest, config: PayafterOrders.PostHttpMethod.RequestConfig): AxiosPromise<PayafterOrders.PostHttpMethod.WellformedResponse>
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
wxpay.v3.payscore.payafterOrders.post({
//                               ^^^^
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
  name,
  phone,
  userid,
  address,
}, { headers })
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

# 查询先享后付订单 {#get}

在收到订单确认成功通知前，商户也可以通过【查询先享后付订单】接口主动查询订单确认情况；前置条件: 商户下单已受理后。 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/payscore.php?chapter=17_2&index=4)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Payscore.PayafterOrders.GetHttpMethod {
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
  export interface PayafterOrders {
    /**
     * 查询先享后付订单
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/payscore.php?chapter=17_2&index=4
     */
    get(config: PayafterOrders.GetHttpMethod.RequestConfig): AxiosPromise<PayafterOrders.GetHttpMethod.WellformedResponse>
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
wxpay.v3.payscore.payafterOrders.get({
//                               ^^^^
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
