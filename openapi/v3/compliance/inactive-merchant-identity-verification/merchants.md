---
title: 发起不活跃商户身份核实
description: 服务商可以通过该接口，代特约商户发起不活跃商户身份核实，并得到核实单单号。 此接口采用异步处理模式，即在接收到服务商请求后，优先受理请求再异步处理，最终的核实结果可以通过“查询不活跃商户身份核实结果”接口获取。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Compliance.InactiveMerchantIdentityVerification.Merchants.PostHttpMethod {
  export interface JsonDataRequest {
    sub_mchid: string
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
  }
  export interface WellformedResponse {
    verification_id: string
  }
}
namespace WeChatPay.OpenAPI.V3.Compliance.InactiveMerchantIdentityVerification {
  export interface Merchants {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/docs/partner/apis/inactive-merchant-identity-verification/inactive-mch-identity-verification/create-inactive-merchant-identity-verification.html
     */
    (data: Merchants.PostHttpMethod.JsonDataRequest, config?: Merchants.PostHttpMethod.RequestConfig): AxiosPromise<Merchants.PostHttpMethod.WellformedResponse>
    /**
     * 发起不活跃商户身份核实
     * @link https://pay.weixin.qq.com/docs/partner/apis/inactive-merchant-identity-verification/inactive-mch-identity-verification/create-inactive-merchant-identity-verification.html
     */
    post(data: Merchants.PostHttpMethod.JsonDataRequest, config?: Merchants.PostHttpMethod.RequestConfig): AxiosPromise<Merchants.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Compliance {
  export interface InactiveMerchantIdentityVerification {
    merchants: InactiveMerchantIdentityVerification.Merchants
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface Compliance {
    inactiveMerchantIdentityVerification: Compliance.InactiveMerchantIdentityVerification
  }
}
namespace WeChatPay.OpenAPI {
  export interface V3 {
    compliance: V3.Compliance
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
wxpay.v3.compliance.inactiveMerchantIdentityVerification.merchants.post({
//                                                                 ^^^^
  sub_mchid,
})
.then(
  ({ // [!code hl:7]
    data: {
      verification_id,
    },
  }) => ({
    verification_id,
  })
)
```

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012471357)
