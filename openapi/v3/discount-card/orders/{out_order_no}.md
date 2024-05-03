---
title: 更新先享卡订单
description: 当用户在商户侧消费时，用户完成微信先享卡的目标或者领取奖励时，商户需要将信息同步至微信先享卡平台，用于在微信先享卡小程序展示及先享卡到期后的用户结算。
---

# 更新先享卡订单 {#patch}

当用户在商户侧消费时，用户完成微信先享卡的目标或者领取奖励时，商户需要将信息同步至微信先享卡平台，用于在微信先享卡小程序展示及先享卡到期后的用户结算。 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/payscore/discount-card/chapter3_2.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.DiscountCard.Orders._out_order_no_.PatchHttpMethod {
  export interface JsonDataRequest {
    objectives: {
      objective_serial_no: string
      objective_id: number
      performance_description: string
      performance_type: string
      count: number
      performance_time: string
      remark: string
    }[]
    rewards: {
      reward_serial_no: string
      reward_id: number
      description: string
      reward_type: string
      count: number
      amount: number
      reward_time: string
      remark: string
    }[]
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
    out_order_no: string
  }
  export interface WellformedResponse {
    out_order_no: string
    order_id: string
  }
}
namespace WeChatPay.OpenAPI.V3.DiscountCard.Orders {
  export interface _out_order_no_ {
    /**
     * 更新先享卡订单API
     * @deprecated - since 2020.03.26
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/payscore/discount-card/chapter3_2.shtml
     */
    patch(data: _out_order_no_.PatchHttpMethod.JsonDataRequest, config: _out_order_no_.PatchHttpMethod.RequestConfig): AxiosPromise<_out_order_no_.PatchHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.DiscountCard {
  export interface Orders {
    _out_order_no_: Orders._out_order_no_
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface DiscountCard {
    orders: DiscountCard.Orders
  }
}
namespace WeChatPay.OpenAPI {
  export interface V3 {
    discountCard: V3.DiscountCard
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
wxpay.v3.discountCard.orders._out_order_no_.patch({
//                                          ^^^^^
  objectives,
  rewards,
}, { out_order_no, })
.then(
  ({ // [!code hl:9]
    data: {
      out_order_no,
      order_id,
    },
  }) => ({
    out_order_no,
    order_id,
  })
)
```

# 通过先享卡订单号查询订单 {#get}

商户可以通过先享卡订单号或商户订单号查询用户目前的先享卡使用情况、订单状态，可用于对账或者界面展示。 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/payscore/discount-card/chapter3_1.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.DiscountCard.Orders._out_order_no_.GetHttpMethod {
  export interface RequestConfig extends AxiosRequestConfig {
    out_order_no: string
  }
  export interface WellformedResponse {
    out_order_no: string
    discount_card_id: string
    out_trade_no: string
    appid: string
    service_id: string
    order_id: string
    transaction_id: string
    openid: string
    card_begin_time: string
    card_end_time: string
    card_name: string
    objective_description: string
    reward_description: string
    estimated_reward_amount: number
    online_instructions: string
    offline_instructions: string
    state: string
    total_amount: number
    deduction_amount: number
    settlement_amount: number
    create_time: string
    pay_time: string
    objectives: {
      objective_serial_no: string
      objective_id: number
      name: string
      unit: string
      performance_description: string
      performance_type: string
      count: number
      performance_time: string
      remark: string
    }[]
    rewards: {
      reward_serial_no: string
      reward_id: number
      name: string
      unit: string
      description: string
      reward_type: string
      count: number
      amount: number
      reward_time: string
      remark: string
    }[]
  }
}
namespace WeChatPay.OpenAPI.V3.DiscountCard.Orders {
  export interface _out_order_no_ {
    /**
     * 通过先享卡订单号查询订单API
     * @deprecated - since 2020.03.26
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/payscore/discount-card/chapter3_1.shtml
     */
    get(config: _out_order_no_.GetHttpMethod.RequestConfig): AxiosPromise<_out_order_no_.GetHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.DiscountCard {
  export interface Orders {
    _out_order_no_: Orders._out_order_no_
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface DiscountCard {
    orders: DiscountCard.Orders
  }
}
namespace WeChatPay.OpenAPI {
  export interface V3 {
    discountCard: V3.DiscountCard
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
wxpay.v3.discountCard.orders._out_order_no_.get({
//                                          ^^^
  out_order_no,
})
.then(
  ({ // [!code hl:53]
    data: {
      out_order_no,
      discount_card_id,
      out_trade_no,
      appid,
      service_id,
      order_id,
      transaction_id,
      openid,
      card_begin_time,
      card_end_time,
      card_name,
      objective_description,
      reward_description,
      estimated_reward_amount,
      online_instructions,
      offline_instructions,
      state,
      total_amount,
      deduction_amount,
      settlement_amount,
      create_time,
      pay_time,
      objectives,
      rewards,
    },
  }) => ({
    out_order_no,
    discount_card_id,
    out_trade_no,
    appid,
    service_id,
    order_id,
    transaction_id,
    openid,
    card_begin_time,
    card_end_time,
    card_name,
    objective_description,
    reward_description,
    estimated_reward_amount,
    online_instructions,
    offline_instructions,
    state,
    total_amount,
    deduction_amount,
    settlement_amount,
    create_time,
    pay_time,
    objectives,
    rewards,
  })
)
```
