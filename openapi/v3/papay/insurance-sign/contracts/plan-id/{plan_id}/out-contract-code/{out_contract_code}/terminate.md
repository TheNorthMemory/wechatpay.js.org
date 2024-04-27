---
title: 保险商户通过商户协议号解除保险自动续费协议
description: 通过商户协议号解约协议, 商户可以通过该接口发起签约协议的解约。 前置条件 对应的签约协议是已生效状态的签约协议。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/docs/merchant/apis/insurance-entrusted-payment/operate-contract/terminate-contract-by-code.html)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Papay.InsuranceSign.Contracts.PlanId._plan_id_.OutContractCode._out_contract_code_.Terminate.PostHttpMethod {
  export interface JsonDataRequest {
    contract_termination_remark: string
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
    plan_id: number
    out_contract_code: string
  }
  export interface WellformedResponse {
    mchid: string
    contract_id: string
    appid: string
    plan_id: number
    out_contract_code: string
    insured_display_name: string
    contract_state: string
    contract_signed_time: string | Date
    contract_expired_time: string | Date
    contract_terminate_info: {
      contract_termination_mode: string
      contract_terminated_time: string | Date
      contract_termination_remark: string
    }
    openid: string
    out_user_code: string
  }
}
namespace WeChatPay.OpenAPI.V3.Papay.InsuranceSign.Contracts.PlanId._plan_id_.OutContractCode._out_contract_code_ {
  export interface Terminate {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/docs/merchant/apis/insurance-entrusted-payment/operate-contract/terminate-contract-by-code.html
     */
    (data: Terminate.PostHttpMethod.JsonDataRequest, config: Terminate.PostHttpMethod.RequestConfig): AxiosPromise<Terminate.PostHttpMethod.WellformedResponse>
    /**
     * 保险商户通过商户协议号解除保险自动续费协议API
     * @link https://pay.weixin.qq.com/docs/merchant/apis/insurance-entrusted-payment/operate-contract/terminate-contract-by-code.html
     */
    post(data: Terminate.PostHttpMethod.JsonDataRequest, config: Terminate.PostHttpMethod.RequestConfig): AxiosPromise<Terminate.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Papay.InsuranceSign.Contracts.PlanId._plan_id_.OutContractCode {
  export interface _out_contract_code_ {
    terminate: _out_contract_code_.Terminate
  }
}
namespace WeChatPay.OpenAPI.V3.Papay.InsuranceSign.Contracts.PlanId._plan_id_ {
  export interface OutContractCode {
    _out_contract_code_: OutContractCode._out_contract_code_
  }
}
namespace WeChatPay.OpenAPI.V3.Papay.InsuranceSign.Contracts.PlanId {
  export interface _plan_id_ {
    outContractCode: _plan_id_.OutContractCode
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
wxpay.v3.papay.insuranceSign.contracts.planId._plan_id_.outContractCode._out_contract_code_.terminate.post({
//                                                                                                    ^^^^
  contract_termination_remark,
}, { plan_id, out_contract_code, })
.then(
  ({ // [!code hl:29]
    data: {
      mchid,
      contract_id,
      appid,
      plan_id,
      out_contract_code,
      insured_display_name,
      contract_state,
      contract_signed_time,
      contract_expired_time,
      contract_terminate_info,
      openid,
      out_user_code,
    },
  }) => ({
    mchid,
    contract_id,
    appid,
    plan_id,
    out_contract_code,
    insured_display_name,
    contract_state,
    contract_signed_time,
    contract_expired_time,
    contract_terminate_info,
    openid,
    out_user_code,
  })
)
```
