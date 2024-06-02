---
title: 商户通过商户协议号查询协议
description: 通过商户协议号查询协议。 直连商户、普通服务商、从业机构服务商、电商收付通服务商均可以通过该接口发起签约协议的查询。 前置条件：商户已经成功获取过免密支付的签约协议。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/docs/merchant/apis/password-free-contract/contracts/get-by-code.html)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.PasswordExemptContract.Contracts.ServiceId._service_id_.OutContractCode._out_contract_code_.GetHttpMethod {
  export interface RequestConfig extends AxiosRequestConfig {
    out_contract_code: string
    service_id: number
  }
  export interface WellformedResponse {
    mchid: string
    contract_id: string
    appid: string
    openid: string
    sub_appid: string
    sub_openid: string
    service_id: number
    out_contract_code: string
    contract_display_account: string
    contract_state: string
    contract_signed_time: string | Date
    contract_terminate_info: {
      contract_termination_mode: string
      contract_terminated_time: string | Date
      contract_termination_remark: string
    }
  }
}
namespace WeChatPay.OpenAPI.V3.PasswordExemptContract.Contracts.ServiceId._service_id_.OutContractCode {
  export interface _out_contract_code_ {
    /**
     * 商户通过商户协议号查询协议API
     * @link https://pay.weixin.qq.com/docs/merchant/apis/password-free-contract/contracts/get-by-code.html
     */
    get(config: _out_contract_code_.GetHttpMethod.RequestConfig): AxiosPromise<_out_contract_code_.GetHttpMethod.WellformedResponse>
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
wxpay.v3.passwordExemptContract.contracts.serviceId._service_id_.outContractCode._out_contract_code_.get({
//                                                                                                   ^^^
  out_contract_code,
  service_id,
})
.then(
  ({ // [!code hl:29]
    data: {
      mchid,
      contract_id,
      appid,
      openid,
      sub_appid,
      sub_openid,
      service_id,
      out_contract_code,
      contract_display_account,
      contract_state,
      contract_signed_time,
      contract_terminate_info,
    },
  }) => ({
    mchid,
    contract_id,
    appid,
    openid,
    sub_appid,
    sub_openid,
    service_id,
    out_contract_code,
    contract_display_account,
    contract_state,
    contract_signed_time,
    contract_terminate_info,
  })
)
```
