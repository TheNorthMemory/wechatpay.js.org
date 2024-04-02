---
title: 商户主动解约
description: 商户通过调用该接口可主动解除与用户的签约关系。注意：解约后商户和用户依旧可以查询到已经解除的合约。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/edu/eduschoolpay/chapter3_3.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Eduschoolpay.Contracts._contract_id_.Terminate.PostHttpMethod {
  export interface JsonDataRequest {
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
    contract_id: string
  }
  export interface WellformedResponse {
  }
}
namespace WeChatPay.OpenAPI.V3.Eduschoolpay.Contracts._contract_id_ {
  export interface Terminate {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/edu/eduschoolpay/chapter3_3.shtml
     */
    (data: Terminate.PostHttpMethod.JsonDataRequest, config?: Terminate.PostHttpMethod.RequestConfig): AxiosPromise<Terminate.PostHttpMethod.WellformedResponse>
    /**
     * 商户主动解约API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/edu/eduschoolpay/chapter3_3.shtml
     */
    post(data: Terminate.PostHttpMethod.JsonDataRequest, config?: Terminate.PostHttpMethod.RequestConfig): AxiosPromise<Terminate.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Eduschoolpay.Contracts {
  export interface _contract_id_ {
    terminate: _contract_id_.Terminate
  }
}
namespace WeChatPay.OpenAPI.V3.Eduschoolpay {
  export interface Contracts {
    _contract_id_: Contracts._contract_id_
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface Eduschoolpay {
    contracts: Eduschoolpay.Contracts
  }
}
namespace WeChatPay.OpenAPI {
  export interface V3 {
    eduschoolpay: V3.Eduschoolpay
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
wxpay.v3.eduschoolpay.contracts._contract_id_.terminate.post({}, {
//                                                      ^^^^
  contract_id,
})
.then(({ status, }) => status === 204) // [!code hl]
```
