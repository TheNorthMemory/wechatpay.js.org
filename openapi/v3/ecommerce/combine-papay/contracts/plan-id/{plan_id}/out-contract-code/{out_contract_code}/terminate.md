---
title: 商户协议号解约协议(平台收付通)
description: 电商服务商可以通过该接口发起签约协议的解约。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3_partner/Offline/apis/chapter5_5_3.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Ecommerce.CombinePapay.Contracts.PlanId._plan_id_.OutContractCode._out_contract_code_.Terminate.PostHttpMethod {
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
    plan_id: number
    out_contract_code: string
  }
}
namespace WeChatPay.OpenAPI.V3.Ecommerce.CombinePapay.Contracts.PlanId._plan_id_.OutContractCode._out_contract_code_ {
  export interface Terminate {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3_partner/Offline/apis/chapter5_5_3.shtml
     */
    (data: Terminate.PostHttpMethod.JsonDataRequest, config: Terminate.PostHttpMethod.RequestConfig): AxiosPromise<Terminate.PostHttpMethod.WellformedResponse>
    /**
     * 商户协议号解约协议API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3_partner/Offline/apis/chapter5_5_3.shtml
     */
    post(data: Terminate.PostHttpMethod.JsonDataRequest, config: Terminate.PostHttpMethod.RequestConfig): AxiosPromise<Terminate.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Ecommerce.CombinePapay.Contracts.PlanId._plan_id_.OutContractCode {
  export interface _out_contract_code_ {
    terminate: _out_contract_code_.Terminate
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
wxpay.v3.ecommerce.combinePapay.contracts.planId._plan_id_.outContractCode._out_contract_code_.terminate.post({
//                                                                                                       ^^^^
  contract_termination_remark,
}, { plan_id, out_contract_code, })
.then(
  ({ // [!code hl:11]
    data: {
      mchid,
      plan_id,
      out_contract_code,
    },
  }) => ({
    mchid,
    plan_id,
    out_contract_code,
  })
)
```
