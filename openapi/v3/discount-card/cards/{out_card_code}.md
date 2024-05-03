---
title: 查询先享卡订单
description: 商户可以通过商户领卡号查询指定的先享卡，可用于对账或者界面展示。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/discount-card/chapter3_3.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.DiscountCard.Cards._out_card_code_.GetHttpMethod {
  export interface RequestConfig extends AxiosRequestConfig {
    out_card_code: string
  }
  export interface WellformedResponse {
    card_id: string
    card_template_id: string
    out_card_code: string
    appid: string
    mchid: string
    time_range: {
      begin_time: string
      end_time: string
    }
    state: string
    unfinished_reason: string
    total_amount: number
    pay_information: {
      pay_amount: number
      pay_state: string
      transaction_id: string
      pay_time: string
    }
    create_time: string
    objectives: {
      objective_id: string
      name: string
      count: number
      unit: string
      description: string
      objective_completion_records: {
        objective_completion_serial_no: string
        objective_id: string
        completion_time: string
        completion_type: string
        description: string
        completion_count: number
        remark: string
      }[]
    }[]
    rewards: {
      reward_id: string
      name: string
      count_type: string
      count: number
      unit: string
      amount: number
      description: string
      reward_usage_records: {
        reward_usage_serial_no: string
        reward_id: string
        usage_time: string
        usage_type: string
        description: string
        usage_count: number
        amount: number
        remark: string
      }[]
    }[]
    sharer_openid: string
  }
}
namespace WeChatPay.OpenAPI.V3.DiscountCard.Cards {
  export interface _out_card_code_ {
    /**
     * 查询先享卡订单API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/discount-card/chapter3_3.shtml
     */
    get(config: _out_card_code_.GetHttpMethod.RequestConfig): AxiosPromise<_out_card_code_.GetHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.DiscountCard {
  export interface Cards {
    _out_card_code_: Cards._out_card_code_
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface DiscountCard {
    cards: DiscountCard.Cards
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
wxpay.v3.discountCard.cards._out_card_code_.get({
//                                          ^^^
  out_card_code,
})
.then(
  ({ // [!code hl:33]
    data: {
      card_id,
      card_template_id,
      out_card_code,
      appid,
      mchid,
      time_range,
      state,
      unfinished_reason,
      total_amount,
      pay_information,
      create_time,
      objectives,
      rewards,
      sharer_openid,
    },
  }) => ({
    card_id,
    card_template_id,
    out_card_code,
    appid,
    mchid,
    time_range,
    state,
    unfinished_reason,
    total_amount,
    pay_information,
    create_time,
    objectives,
    rewards,
    sharer_openid,
  })
)
```
