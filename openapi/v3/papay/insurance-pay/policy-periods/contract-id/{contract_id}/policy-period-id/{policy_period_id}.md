---
title: 保险商户查询保险自动续费预约
description: 商户调用「预约保险自动续费」接口，因系统原因未能明确预约结果时，可使用本接口查询预结果。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/docs/merchant/apis/insurance-entrusted-payment/schedule/query-policy-period.html)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Papay.InsurancePay.PolicyPeriods.ContractId._contract_id_.PolicyPeriodId._policy_period_id_.GetHttpMethod {
  export interface RequestConfig extends AxiosRequestConfig {
    contract_id: string
    policy_period_id: number
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
namespace WeChatPay.OpenAPI.V3.Papay.InsurancePay.PolicyPeriods.ContractId._contract_id_.PolicyPeriodId {
  export interface _policy_period_id_ {
    /**
     * 保险商户查询保险自动续费预约API
     * @link https://pay.weixin.qq.com/docs/merchant/apis/insurance-entrusted-payment/schedule/query-policy-period.html
     */
    get(config: _policy_period_id_.GetHttpMethod.RequestConfig): AxiosPromise<_policy_period_id_.GetHttpMethod.WellformedResponse>
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
wxpay.v3.papay.insurancePay.policyPeriods.contractId._contract_id_.policyPeriodId._policy_period_id_.get({
//                                                                                                   ^^^
  contract_id,
  policy_period_id,
})
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
