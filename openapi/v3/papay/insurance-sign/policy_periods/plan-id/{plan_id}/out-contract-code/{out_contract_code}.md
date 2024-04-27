---
title: 保险商户查询保险扣费周期列表
description: 商户可通过本接口查询已经签订的保险自动续费协议对应的扣费周期列表。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/docs/merchant/apis/insurance-entrusted-payment/insurance/query-policy-periods-by-code.html)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Papay.InsuranceSign.Policy_periods.PlanId._plan_id_.OutContractCode._out_contract_code_.GetHttpMethod {
  export interface RequestConfig extends AxiosRequestConfig {
    out_contract_code: string
    plan_id: number
    params: {
      limit: number
      offset: number
    }
  }
  export interface WellformedResponse {
    data: {
      policy_period_id: number
      estimated_deduct_date: string
      estimated_deduct_amount: {
        total: number
        currency: string
      }
      policy_period_state: string
      scheduled_amount: {
        total: number
        currency: string
      }
      deduct_amount: {
        total: number
        currency: string
      }
      deduct_date: string
    }[]
    limit: number
    offset: number
    total_count: number
  }
}
namespace WeChatPay.OpenAPI.V3.Papay.InsuranceSign.Policy_periods.PlanId._plan_id_.OutContractCode {
  export interface _out_contract_code_ {
    /**
     * 保险商户查询保险扣费周期列表API
     * @link https://pay.weixin.qq.com/docs/merchant/apis/insurance-entrusted-payment/insurance/query-policy-periods-by-code.html
     */
    get(config: _out_contract_code_.GetHttpMethod.RequestConfig): AxiosPromise<_out_contract_code_.GetHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Papay.InsuranceSign.Policy_periods.PlanId._plan_id_ {
  export interface OutContractCode {
    _out_contract_code_: OutContractCode._out_contract_code_
  }
}
namespace WeChatPay.OpenAPI.V3.Papay.InsuranceSign.Policy_periods.PlanId {
  export interface _plan_id_ {
    outContractCode: _plan_id_.OutContractCode
  }
}
namespace WeChatPay.OpenAPI.V3.Papay.InsuranceSign.Policy_periods {
  export interface PlanId {
    _plan_id_: PlanId._plan_id_
  }
}
namespace WeChatPay.OpenAPI.V3.Papay.InsuranceSign {
  export interface Policy_periods {
    planId: Policy_periods.PlanId
  }
}
namespace WeChatPay.OpenAPI.V3.Papay {
  export interface InsuranceSign {
    policy_periods: InsuranceSign.Policy_periods
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface Papay {
    insuranceSign: Papay.InsuranceSign
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
wxpay.v3.papay.insuranceSign.policy_periods.planId._plan_id_.outContractCode._out_contract_code_.get({
//                                                                                               ^^^
  out_contract_code,
  plan_id,
  params,
})
.then(
  ({ // [!code hl:13]
    data: {
      data,
      limit,
      offset,
      total_count,
    },
  }) => ({
    data,
    limit,
    offset,
    total_count,
  })
)
```
