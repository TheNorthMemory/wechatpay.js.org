---
title: 通过商户协议号解除委托代扣签约协议
description: 直连商户可通过本接口解约委托代扣签约协议。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/docs/merchant/apis/entrusted-payment/normal/normal-terminate-contract-by-code.html)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Papay.Sign.Contracts.PlanId._plan_id_.OutContractCode._out_contract_code_.Terminate.PostHttpMethod {
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
    contract_display_account: string
    contract_state: string
    contract_signed_time: string | Date
    contract_expired_time: string | Date
    openid: string
    contract_terminate_info: {
      contract_termination_mode: string
      contract_terminated_time: string | Date
      contract_termination_remark: string
    }
    out_user_code: string
    deduct_schedule: {
      estimated_deduct_date: string
      estimated_deduct_amount: {
        total: number
        currency: string
      }
      schedule_state: string
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
}
namespace WeChatPay.OpenAPI.V3.Papay.Sign.Contracts.PlanId._plan_id_.OutContractCode._out_contract_code_ {
  export interface Terminate {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/docs/merchant/apis/entrusted-payment/normal/normal-terminate-contract-by-code.html
     */
    (data: Terminate.PostHttpMethod.JsonDataRequest, config: Terminate.PostHttpMethod.RequestConfig): AxiosPromise<Terminate.PostHttpMethod.WellformedResponse>
    /**
     * 通过商户协议号解除委托代扣签约协议API
     * @link https://pay.weixin.qq.com/docs/merchant/apis/entrusted-payment/normal/normal-terminate-contract-by-code.html
     */
    post(data: Terminate.PostHttpMethod.JsonDataRequest, config: Terminate.PostHttpMethod.RequestConfig): AxiosPromise<Terminate.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Papay.Sign.Contracts.PlanId._plan_id_.OutContractCode {
  export interface _out_contract_code_ {
    terminate: _out_contract_code_.Terminate
  }
}
namespace WeChatPay.OpenAPI.V3.Papay.Sign.Contracts.PlanId._plan_id_ {
  export interface OutContractCode {
    _out_contract_code_: OutContractCode._out_contract_code_
  }
}
namespace WeChatPay.OpenAPI.V3.Papay.Sign.Contracts.PlanId {
  export interface _plan_id_ {
    outContractCode: _plan_id_.OutContractCode
  }
}
namespace WeChatPay.OpenAPI.V3.Papay.Sign.Contracts {
  export interface PlanId {
    _plan_id_: PlanId._plan_id_
  }
}
namespace WeChatPay.OpenAPI.V3.Papay.Sign {
  export interface Contracts {
    planId: Contracts.PlanId
  }
}
namespace WeChatPay.OpenAPI.V3.Papay {
  export interface Sign {
    contracts: Sign.Contracts
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface Papay {
    sign: Papay.Sign
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
wxpay.v3.papay.sign.contracts.planId._plan_id_.outContractCode._out_contract_code_.terminate.post({
//                                                                                           ^^^^
  contract_termination_remark,
}, { plan_id, out_contract_code, })
.then(
  ({ // [!code hl:31]
    data: {
      mchid,
      contract_id,
      appid,
      plan_id,
      out_contract_code,
      contract_display_account,
      contract_state,
      contract_signed_time,
      contract_expired_time,
      openid,
      contract_terminate_info,
      out_user_code,
      deduct_schedule,
    },
  }) => ({
    mchid,
    contract_id,
    appid,
    plan_id,
    out_contract_code,
    contract_display_account,
    contract_state,
    contract_signed_time,
    contract_expired_time,
    openid,
    contract_terminate_info,
    out_user_code,
    deduct_schedule,
  })
)
```
