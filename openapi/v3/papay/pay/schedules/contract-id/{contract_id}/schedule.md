---
title: 预约扣费
description: 商户在进行委托代扣费前，需要提前在微信支付系统中预约扣费，预约成功后方可在约定时间内扣费。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/docs/merchant/apis/entrusted-payment/normal/normal-schedule-deduction.html)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Papay.Pay.Schedules.ContractId._contract_id_.Schedule.PostHttpMethod {
  export interface JsonDataRequest {
    appid: string
    schedule_amount: {
      total: number
      currency: string
    }
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
    contract_id: string
  }
  export interface WellformedResponse {
    schedule_state: string
    deduct_start_date: string
    deduct_end_date: string
    scheduled_amount: {
      total: number
      currency: string
    }
    deduct_amount: {
      total: number
      currency: string
    }
    deduct_date: string
  }
}
namespace WeChatPay.OpenAPI.V3.Papay.Pay.Schedules.ContractId._contract_id_ {
  export interface Schedule {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/docs/merchant/apis/entrusted-payment/normal/normal-schedule-deduction.html
     */
    (data: Schedule.PostHttpMethod.JsonDataRequest, config: Schedule.PostHttpMethod.RequestConfig): AxiosPromise<Schedule.PostHttpMethod.WellformedResponse>
    /**
     * 预约扣费API
     * @link https://pay.weixin.qq.com/docs/merchant/apis/entrusted-payment/normal/normal-schedule-deduction.html
     */
    post(data: Schedule.PostHttpMethod.JsonDataRequest, config: Schedule.PostHttpMethod.RequestConfig): AxiosPromise<Schedule.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Papay.Pay.Schedules.ContractId {
  export interface _contract_id_ {
    schedule: _contract_id_.Schedule
  }
}
namespace WeChatPay.OpenAPI.V3.Papay.Pay.Schedules {
  export interface ContractId {
    _contract_id_: ContractId._contract_id_
  }
}
namespace WeChatPay.OpenAPI.V3.Papay.Pay {
  export interface Schedules {
    contractId: Schedules.ContractId
  }
}
namespace WeChatPay.OpenAPI.V3.Papay {
  export interface Pay {
    schedules: Pay.Schedules
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface Papay {
    pay: Papay.Pay
  }
}
namespace WeChatPay.OpenAPI {
  export interface V3 {
    papay: V3.Papay
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
wxpay.v3.papay.pay.schedules.contractId._contract_id_.schedule.post({
//                                                             ^^^^
  appid,
  schedule_amount,
}, { contract_id })
.then(
  ({ // [!code hl:17]
    data: {
      schedule_state,
      deduct_start_date,
      deduct_end_date,
      scheduled_amount,
      deduct_amount,
      deduct_date,
    },
  }) => ({
    schedule_state,
    deduct_start_date,
    deduct_end_date,
    scheduled_amount,
    deduct_amount,
    deduct_date,
  })
)
```
