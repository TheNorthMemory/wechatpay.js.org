---
title: 查询用户服务可用信息
description: 在商户生成乘车码前，商户请求查询用户服务可用信息接口，查询用户服务可用信息，通过用户服务可用信息中的服务可用状态，来判断是否可以正常使用公共出行代扣服务
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Qrcode.UserServices.ContractId._contract_id_.GetHttpMethod {
  export interface RequestConfig extends AxiosRequestConfig {
    contract_id: string
    params: {
      appid: string
      sub_appid: string
      sub_mchid: string
    }
  }
  export interface WellformedResponse {
    contract_id: string
    user_service_state: string
    block_reason: string
  }
}
namespace WeChatPay.OpenAPI.V3.Qrcode.UserServices.ContractId {
  export interface _contract_id_ {
    /**
     * 查询用户服务可用信息
     * @link 在商户生成乘车码前，商户请求查询用户服务可用信息接口，查询 用户服务可用信息，通过用户服务可用信息中的服务可用状态，来判断是否可以正常使用公共出行代扣服务
     */
    get(config: _contract_id_.GetHttpMethod.RequestConfig): AxiosPromise<_contract_id_.GetHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Qrcode.UserServices {
  export interface ContractId {
    _contract_id_: ContractId._contract_id_
  }
}
namespace WeChatPay.OpenAPI.V3.Qrcode {
  export interface UserServices {
    contractId: UserServices.ContractId
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface Qrcode {
    userServices: Qrcode.UserServices
  }
}
namespace WeChatPay.OpenAPI {
  export interface V3 {
    qrcode: V3.Qrcode
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
wxpay.v3.qrcode.userServices.contractId._contract_id_.get({
//                                                    ^^^
  contract_id,
  params,
})
.then(
  ({ // [!code hl:11]
    data: {
      contract_id,
      user_service_state,
      block_reason,
    },
  }) => ({
    contract_id,
    user_service_state,
    block_reason,
  })
)
```
