---
title: 增加用户记录
description: 当用户在商户侧消费时，用户完成了微信先享卡的目标或者获取使用优惠时，商户需要把这个信息同步给微信先享卡平台，用于在微信先享卡小程序展示及先享卡到期后的用户结算。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/discount-card/chapter3_2.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.DiscountCard.Cards._out_card_code_.AddUserRecords.PostHttpMethod {
  export interface JsonDataRequest {
    card_template_id: string
    objective_completion_records: {
      objective_completion_serial_no: string
      objective_id: string
      completion_time: string
      completion_type: string
      description: string
      completion_count: number
      remark: string
    }[]
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
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
    out_card_code: string
  }
  export interface WellformedResponse {
  }
}
namespace WeChatPay.OpenAPI.V3.DiscountCard.Cards._out_card_code_ {
  export interface AddUserRecords {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/discount-card/chapter3_2.shtml
     */
    (data: AddUserRecords.PostHttpMethod.JsonDataRequest, config: AddUserRecords.PostHttpMethod.RequestConfig): AxiosPromise<AddUserRecords.PostHttpMethod.WellformedResponse>
    /**
     * 增加用户记录API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/discount-card/chapter3_2.shtml
     */
    post(data: AddUserRecords.PostHttpMethod.JsonDataRequest, config: AddUserRecords.PostHttpMethod.RequestConfig): AxiosPromise<AddUserRecords.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.DiscountCard.Cards {
  export interface _out_card_code_ {
    addUserRecords: _out_card_code_.AddUserRecords
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
wxpay.v3.discountCard.cards._out_card_code_.addUserRecords.post({
//                                                         ^^^^
  card_template_id,
  objective_completion_records,
  reward_usage_records,
}, { out_card_code, })
.then(({ status, }) => status === 204) // [!code hl]
```
