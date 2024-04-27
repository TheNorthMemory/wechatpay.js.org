---
title: 保险商户受理续期自动续费协议
description: 商户可通过本接口续期保险自动续费协议。前置条件：用户签约成功，当协议到期后且预签约中参数是否自动续保（can_auto_insure）或是否自动重新投保（can_auto_reinsure）为true。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/docs/merchant/apis/insurance-entrusted-payment/insurance/apply-renew-contract.html)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Papay.InsuranceSign.Contracts.PlanId._plan_id_.ContractId._contract_id_.Renew.PostHttpMethod {
  export interface JsonDataRequest {
    appid: string
    policy_periods: {
      policy_period_id: number
      estimated_deduct_date: string
      estimated_deduct_amount: {
        total: number
        currency: string
      }
    }[]
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
    plan_id: number
    contract_id: string
  }
  export interface WellformedResponse {
  }
}
namespace WeChatPay.OpenAPI.V3.Papay.InsuranceSign.Contracts.PlanId._plan_id_.ContractId._contract_id_ {
  export interface Renew {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/docs/merchant/apis/insurance-entrusted-payment/insurance/apply-renew-contract.html
     */
    (data: Renew.PostHttpMethod.JsonDataRequest, config: Renew.PostHttpMethod.RequestConfig): AxiosPromise<Renew.PostHttpMethod.WellformedResponse>
    /**
     * 保险商户受理续期自动续费协议
     * @link https://pay.weixin.qq.com/docs/merchant/apis/insurance-entrusted-payment/insurance/apply-renew-contract.html
     */
    post(data: Renew.PostHttpMethod.JsonDataRequest, config: Renew.PostHttpMethod.RequestConfig): AxiosPromise<Renew.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Papay.InsuranceSign.Contracts.PlanId._plan_id_.ContractId {
  export interface _contract_id_ {
    renew: _contract_id_.Renew
  }
}
namespace WeChatPay.OpenAPI.V3.Papay.InsuranceSign.Contracts.PlanId._plan_id_ {
  export interface ContractId {
    _contract_id_: ContractId._contract_id_
  }
}
namespace WeChatPay.OpenAPI.V3.Papay.InsuranceSign.Contracts.PlanId {
  export interface _plan_id_ {
    contractId: _plan_id_.ContractId
  }
}
namespace WeChatPay.OpenAPI.V3.Papay.InsuranceSign.Contracts {
  export interface PlanId {
    _plan_id_: PlanId._plan_id_
  }
}
namespace WeChatPay.OpenAPI.V3.Papay.InsuranceSign {
  export interface Contracts {
    planId: Contracts.PlanId
  }
}
namespace WeChatPay.OpenAPI.V3.Papay {
  export interface InsuranceSign {
    contracts: InsuranceSign.Contracts
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
wxpay.v3.papay.insuranceSign.contracts.planId._plan_id_.contractId._contract_id_.renew.post({
//                                                                                     ^^^^
  appid,
  policy_periods,
}, { plan_id, contract_id, })
.then(({ status, }) => status === 204) // [!code hl]
```
