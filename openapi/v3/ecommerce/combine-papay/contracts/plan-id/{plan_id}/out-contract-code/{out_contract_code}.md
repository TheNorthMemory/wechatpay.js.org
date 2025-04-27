---
title: 通过商户协议号查询协议(平台收付通)
description: 电商服务商可以通过该接口发起签约协议的查询。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Ecommerce.CombinePapay.Contracts.PlanId._plan_id_.OutContractCode._out_contract_code_.GetHttpMethod {
  export interface RequestConfig extends AxiosRequestConfig {
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
    contract_signed_time: string
    contract_expired_time: string
    contract_terminate_info: {
      contract_termination_mode: string
      contract_terminated_time: string
      contract_termination_remark: string
    }
    openid: string
  }
}
namespace WeChatPay.OpenAPI.V3.Ecommerce.CombinePapay.Contracts.PlanId._plan_id_.OutContractCode {
  export interface _out_contract_code_ {
    /**
     * 通过商户协议号查询协议API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3_partner/Offline/apis/chapter5_5_2.shtml
     */
    get(config: _out_contract_code_.GetHttpMethod.RequestConfig): AxiosPromise<_out_contract_code_.GetHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Ecommerce.CombinePapay.Contracts.PlanId._plan_id_ {
  export interface OutContractCode {
    _out_contract_code_: OutContractCode._out_contract_code_
  }
}
namespace WeChatPay.OpenAPI.V3.Ecommerce.CombinePapay.Contracts.PlanId {
  export interface _plan_id_ {
    outContractCode: _plan_id_.OutContractCode
  }
}
namespace WeChatPay.OpenAPI.V3.Ecommerce.CombinePapay.Contracts {
  export interface PlanId {
    _plan_id_: PlanId._plan_id_
  }
}
namespace WeChatPay.OpenAPI.V3.Ecommerce.CombinePapay {
  export interface Contracts {
    planId: Contracts.PlanId
  }
}
namespace WeChatPay.OpenAPI.V3.Ecommerce {
  export interface CombinePapay {
    contracts: CombinePapay.Contracts
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface Ecommerce {
    combinePapay: Ecommerce.CombinePapay
  }
}
namespace WeChatPay.OpenAPI {
  export interface V3 {
    ecommerce: V3.Ecommerce
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
wxpay.v3.ecommerce.combinePapay.contracts.planId._plan_id_.outContractCode._out_contract_code_.get({
//                                                                                             ^^^
  plan_id,
  out_contract_code,
})
.then(
  ({ // [!code hl:27]
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
      contract_terminate_info,
      openid,
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
    contract_terminate_info,
    openid,
  })
)
```

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012884060)
