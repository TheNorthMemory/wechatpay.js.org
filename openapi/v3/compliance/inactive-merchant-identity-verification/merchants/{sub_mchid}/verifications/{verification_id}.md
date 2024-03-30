---
title: 查询不活跃商户身份核实结果
description: 在代特约商户发起不活跃商户身份核实后，服务商可以通过该接口，查询特定特约商户下单笔核实单的核实结果。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/docs/partner/apis/inactive-merchant-identity-verification/inactive-mch-identity-verification/query-inactive-merchant-identity-verification.html)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Compliance.InactiveMerchantIdentityVerification.Merchants._sub_mchid_.Verifications._verification_id_.GetHttpMethod {
  export interface RequestConfig extends AxiosRequestConfig {
    sub_mchid: string
    verification_id: string
  }
  export interface WellformedResponse {
    sub_mchid: string
    verification_id: string
    state: string
    fail_reason: string
    create_time: string
    finish_time: string
  }
}
namespace WeChatPay.OpenAPI.V3.Compliance.InactiveMerchantIdentityVerification.Merchants._sub_mchid_.Verifications {
  export interface _verification_id_ {
    /**
     * 查询不活跃商户身份核实结果
     * @link https://pay.weixin.qq.com/docs/partner/apis/inactive-merchant-identity-verification/inactive-mch-identity-verification/query-inactive-merchant-identity-verification.html
     */
    get(config: _verification_id_.GetHttpMethod.RequestConfig): AxiosPromise<_verification_id_.GetHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Compliance.InactiveMerchantIdentityVerification.Merchants._sub_mchid_ {
  export interface Verifications {
    _verification_id_: Verifications._verification_id_
  }
}
namespace WeChatPay.OpenAPI.V3.Compliance.InactiveMerchantIdentityVerification.Merchants {
  export interface _sub_mchid_ {
    verifications: _sub_mchid_.Verifications
  }
}
namespace WeChatPay.OpenAPI.V3.Compliance.InactiveMerchantIdentityVerification {
  export interface Merchants {
    _sub_mchid_: Merchants._sub_mchid_
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
wxpay.v3.compliance.inactiveMerchantIdentityVerification.merchants._sub_mchid_.verifications._verification_id_.get({
//                                                                                                             ^^^
  sub_mchid,
  verification_id,
})
.then(
  ({ // [!code hl:17]
    data: {
      sub_mchid,
      verification_id,
      state,
      fail_reason,
      create_time,
      finish_time,
    },
  }) => ({
    sub_mchid,
    verification_id,
    state,
    fail_reason,
    create_time,
    finish_time,
  })
)
```
