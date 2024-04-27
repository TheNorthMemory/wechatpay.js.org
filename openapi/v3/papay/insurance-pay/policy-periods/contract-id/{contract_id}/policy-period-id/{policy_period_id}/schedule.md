---
title: 保险商户预约保险自动续费
description: 保险行业商户再进行委托代扣费前，需要提前在微信支付系统中预约保险自动续费，预约成功后方可在约定时间内扣费。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/docs/merchant/apis/insurance-entrusted-payment/schedule/schedule-policy-period.html)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Papay.InsurancePay.PolicyPeriods.ContractId._contract_id_.PolicyPeriodId._policy_period_id_.Schedule.PostHttpMethod {
  export interface JsonDataRequest {
    appid: string
    scheduled_amount: {
      total: number
      currency: string
    }
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
    policy_period_id: number
    contract_id: string
  }
  export interface WellformedResponse {
    policy_period_id: number
    policy_period_state: string
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
namespace WeChatPay.OpenAPI.V3.Papay.InsurancePay.PolicyPeriods.ContractId._contract_id_.PolicyPeriodId._policy_period_id_ {
  export interface Schedule {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/docs/merchant/apis/insurance-entrusted-payment/schedule/schedule-policy-period.html
     */
    (data: Schedule.PostHttpMethod.JsonDataRequest, config: Schedule.PostHttpMethod.RequestConfig): AxiosPromise<Schedule.PostHttpMethod.WellformedResponse>
    /**
     * 保险商户预约保险自动续费API
     * @link https://pay.weixin.qq.com/docs/merchant/apis/insurance-entrusted-payment/schedule/schedule-policy-period.html
     */
    post(data: Schedule.PostHttpMethod.JsonDataRequest, config: Schedule.PostHttpMethod.RequestConfig): AxiosPromise<Schedule.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Papay.InsurancePay.PolicyPeriods.ContractId._contract_id_.PolicyPeriodId {
  export interface _policy_period_id_ {
    schedule: _policy_period_id_.Schedule
  }
}
namespace WeChatPay.OpenAPI.V3.Papay.InsurancePay.PolicyPeriods.ContractId._contract_id_ {
  export interface PolicyPeriodId {
    _policy_period_id_: PolicyPeriodId._policy_period_id_
  }
}
namespace WeChatPay.OpenAPI.V3.Papay.InsurancePay.PolicyPeriods.ContractId {
  export interface _contract_id_ {
    policyPeriodId: _contract_id_.PolicyPeriodId
  }
}
namespace WeChatPay.OpenAPI.V3.Papay.InsurancePay.PolicyPeriods {
  export interface ContractId {
    _contract_id_: ContractId._contract_id_
  }
}
namespace WeChatPay.OpenAPI.V3.Papay.InsurancePay {
  export interface PolicyPeriods {
    contractId: PolicyPeriods.ContractId
  }
}
namespace WeChatPay.OpenAPI.V3.Papay {
  export interface InsurancePay {
    policyPeriods: InsurancePay.PolicyPeriods
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface Papay {
    insurancePay: Papay.InsurancePay
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
wxpay.v3.papay.insurancePay.policyPeriods.contractId._contract_id_.policyPeriodId._policy_period_id_.schedule.post({
//                                                                                                            ^^^^
  appid,
  scheduled_amount,
}, { policy_period_id, contract_id, })
.then(
  ({ // [!code hl:19]
    data: {
      policy_period_id,
      policy_period_state,
      deduct_start_date,
      deduct_end_date,
      scheduled_amount,
      deduct_amount,
      deduct_date,
    },
  }) => ({
    policy_period_id,
    policy_period_state,
    deduct_start_date,
    deduct_end_date,
    scheduled_amount,
    deduct_amount,
    deduct_date,
  })
)
```
