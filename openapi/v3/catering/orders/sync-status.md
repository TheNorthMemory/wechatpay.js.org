---
title: 点餐订单信息同步（渠道商/服务商）
description: 当点餐订单状态发生变化时，都上传全量的订单明细。1、用户在扫码点餐小程序/h5页面中下单时，上报用户的下单信息，此时status为CREATE_DEAL;2、确定支付成功后上报用户的支付信息，此时status为PAY_SUCCESS
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Catering.Orders.SyncStatus.PostHttpMethod {
  export interface JsonDataRequest {
    sp_mchid: string
    sp_appid: string
    channel_id: string
    sub_mchid: string
    sub_appid: string
    out_shop_no: string
    sub_openid: string
    login_token: string
    order_entry: string
    total_amount: number
    discount_amount: number
    user_amount: number
    status: string
    action_time: string
    pay_time: string
    transaction_id: string
    out_trade_no: string
    out_order_no: string
    out_table_no: string
    people_count: number
    dish_list: {
      out_dish_no: string
      name: string
      price: number
      unit: string
      count: number
      discount: number
      type: string
      priority: number
      properties: {
        taste: string
        cuisine: string
        main_material: string
        ingredients: string
        others: string
      }
    }[]
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
  }
  export interface WellformedResponse {
  }
}
namespace WeChatPay.OpenAPI.V3.Catering.Orders {
  export interface SyncStatus {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/catering.php?chapter=26_1
     */
    (data: SyncStatus.PostHttpMethod.JsonDataRequest, config?: SyncStatus.PostHttpMethod.RequestConfig): AxiosPromise<SyncStatus.PostHttpMethod.WellformedResponse>
    /**
     * 点餐订单信息同步（渠道商/服务商）
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/catering.php?chapter=26_1
     */
    post(data: SyncStatus.PostHttpMethod.JsonDataRequest, config?: SyncStatus.PostHttpMethod.RequestConfig): AxiosPromise<SyncStatus.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Catering {
  export interface Orders {
    syncStatus: Orders.SyncStatus
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface Catering {
    orders: Catering.Orders
  }
}
namespace WeChatPay.OpenAPI {
  export interface V3 {
    catering: V3.Catering
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
wxpay.v3.catering.orders.syncStatus.post({
//                                  ^^^^
  sp_mchid,
  sp_appid,
  channel_id,
  sub_mchid,
  sub_appid,
  out_shop_no,
  sub_openid,
  login_token,
  order_entry,
  total_amount,
  discount_amount,
  user_amount,
  status,
  action_time,
  pay_time,
  transaction_id,
  out_trade_no,
  out_order_no,
  out_table_no,
  people_count,
  dish_list,
})
.then(({ status }) => status === 204) // [!code hl]
```

参阅 [官方文档](https://pay.weixin.qq.com/doc/v2/partner/4011939936) [官方文档](https://pay.weixin.qq.com/doc/v2/institution/4011941011)
