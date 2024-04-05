---
title: 通过商户协议号解除委托代扣签约协议
description: 商户可通过本接口解约委托代扣签约协议。前置条件 对应的委托代扣签约协议是已生效状态的委托代扣签约协议。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/docs/partner/apis/entrusted-payment/partner/partner-terminate-contract-by-code.html)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Papay.Sign.Partner.Contracts.PlanId._plan_id_.OutContractCode._out_contract_code_.Terminate.PostHttpMethod {
  export interface JsonDataRequest {
    sub_mchid: string
    contract_termination_remark: string
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
    plan_id: number
    out_contract_code: string
  }
  export interface WellformedResponse {
    contract_id: string
    sp_mchid: string
    sp_appid: string
    sub_mchid: string
    sub_appid: string
    plan_id: number
    out_contract_code: string
    contract_display_account: string
    contract_state: string
    contract_signed_time: string | Date
    contract_expired_time: string | Date
    sp_openid: string
    sub_openid: string
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
namespace WeChatPay.OpenAPI.V3.Papay.Sign.Partner.Contracts.PlanId._plan_id_.OutContractCode._out_contract_code_ {
  export interface Terminate {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/docs/partner/apis/entrusted-payment/partner/partner-terminate-contract-by-code.html
     */
    (data: Terminate.PostHttpMethod.JsonDataRequest, config: Terminate.PostHttpMethod.RequestConfig): AxiosPromise<Terminate.PostHttpMethod.WellformedResponse>
    /**
     * 通过商户协议号解除委托代扣签约协议API
     * @link https://pay.weixin.qq.com/docs/partner/apis/entrusted-payment/partner/partner-terminate-contract-by-code.html
     */
    post(data: Terminate.PostHttpMethod.JsonDataRequest, config: Terminate.PostHttpMethod.RequestConfig): AxiosPromise<Terminate.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Papay.Sign.Partner.Contracts.PlanId._plan_id_.OutContractCode {
  export interface _out_contract_code_ {
    terminate: _out_contract_code_.Terminate
  }
}
namespace WeChatPay.OpenAPI.V3.Papay.Sign.Partner.Contracts.PlanId._plan_id_ {
  export interface OutContractCode {
    _out_contract_code_: OutContractCode._out_contract_code_
  }
}
namespace WeChatPay.OpenAPI.V3.Papay.Sign.Partner.Contracts.PlanId {
  export interface _plan_id_ {
    outContractCode: _plan_id_.OutContractCode
  }
}
namespace WeChatPay.OpenAPI.V3.Papay.Sign.Partner.Contracts {
  export interface PlanId {
    _plan_id_: PlanId._plan_id_
  }
}
namespace WeChatPay.OpenAPI.V3.Papay.Sign.Partner {
  export interface Contracts {
    planId: Contracts.PlanId
  }
}
namespace WeChatPay.OpenAPI.V3.Papay.Sign {
  export interface Partner {
    contracts: Partner.Contracts
  }
}
namespace WeChatPay.OpenAPI.V3.Papay {
  export interface Sign {
    partner: Sign.Partner
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
wxpay.v3.papay.sign.partner.contracts.planId._plan_id_.outContractCode._out_contract_code_.terminate.post({
//                                                                                                   ^^^^
  sub_mchid,
  contract_termination_remark,
}, { plan_id, out_contract_code, })
.then(
  ({ // [!code hl:37]
    data: {
      contract_id,
      sp_mchid,
      sp_appid,
      sub_mchid,
      sub_appid,
      plan_id,
      out_contract_code,
      contract_display_account,
      contract_state,
      contract_signed_time,
      contract_expired_time,
      sp_openid,
      sub_openid,
      contract_terminate_info,
      out_user_code,
      deduct_schedule,
    },
  }) => ({
    contract_id,
    sp_mchid,
    sp_appid,
    sub_mchid,
    sub_appid,
    plan_id,
    out_contract_code,
    contract_display_account,
    contract_state,
    contract_signed_time,
    contract_expired_time,
    sp_openid,
    sub_openid,
    contract_terminate_info,
    out_user_code,
    deduct_schedule,
  })
)
```
