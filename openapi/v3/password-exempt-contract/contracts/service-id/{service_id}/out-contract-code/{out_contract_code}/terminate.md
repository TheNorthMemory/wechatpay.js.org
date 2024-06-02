---
title: 商户通过商户协议号解约协议
description: 通过商户协议号解约协议。 直连商户、普通服务商、从业机构服务商、电商收付通服务商均可以通过该接口发起签约协议的解约。 前置条件：对应的签约协议是已生效状态的签约协议。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/docs/merchant/apis/password-free-contract/contracts/terminate-by-code.html)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.PasswordExemptContract.Contracts.ServiceId._service_id_.OutContractCode._out_contract_code_.Terminate.PostHttpMethod {
  export interface JsonDataRequest {
    contract_termination_remark: string
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
    service_id: number
    out_contract_code: string
  }
  export interface WellformedResponse {
    mchid: string
    service_id: number
    out_contract_code: string
  }
}
namespace WeChatPay.OpenAPI.V3.PasswordExemptContract.Contracts.ServiceId._service_id_.OutContractCode._out_contract_code_ {
  export interface Terminate {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/docs/merchant/apis/password-free-contract/contracts/terminate-by-code.html
     */
    (data: Terminate.PostHttpMethod.JsonDataRequest, config: Terminate.PostHttpMethod.RequestConfig): AxiosPromise<Terminate.PostHttpMethod.WellformedResponse>
    /**
     * 商户通过商户协议号解约协议API
     * @link https://pay.weixin.qq.com/docs/merchant/apis/password-free-contract/contracts/terminate-by-code.html
     */
    post(data: Terminate.PostHttpMethod.JsonDataRequest, config: Terminate.PostHttpMethod.RequestConfig): AxiosPromise<Terminate.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.PasswordExemptContract.Contracts.ServiceId._service_id_.OutContractCode {
  export interface _out_contract_code_ {
    terminate: _out_contract_code_.Terminate
  }
}
namespace WeChatPay.OpenAPI.V3.PasswordExemptContract.Contracts.ServiceId._service_id_ {
  export interface OutContractCode {
    _out_contract_code_: OutContractCode._out_contract_code_
  }
}
namespace WeChatPay.OpenAPI.V3.PasswordExemptContract.Contracts.ServiceId {
  export interface _service_id_ {
    outContractCode: _service_id_.OutContractCode
  }
}
namespace WeChatPay.OpenAPI.V3.PasswordExemptContract.Contracts {
  export interface ServiceId {
    _service_id_: ServiceId._service_id_
  }
}
namespace WeChatPay.OpenAPI.V3.PasswordExemptContract {
  export interface Contracts {
    serviceId: Contracts.ServiceId
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface PasswordExemptContract {
    contracts: PasswordExemptContract.Contracts
  }
}
namespace WeChatPay.OpenAPI {
  export interface V3 {
    passwordExemptContract: V3.PasswordExemptContract
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
wxpay.v3.passwordExemptContract.contracts.serviceId._service_id_.outContractCode._out_contract_code_.terminate.post({
//                                                                                                             ^^^^
  contract_termination_remark,
}, {
  service_id,
  out_contract_code,
})
.then(
  ({ // [!code hl:11]
    data: {
      mchid,
      service_id,
      out_contract_code,
    },
  }) => ({
    mchid,
    service_id,
    out_contract_code,
  })
)
```
