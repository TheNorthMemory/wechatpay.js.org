---
title: 开通保险理赔功能(平台收付通)
description: 平台服务商可通过该接口为保险公司开通保险理赔功能。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/docs/partner/apis/plat-compensation/plat-compensation/open-insurance-compensation.html)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Platsolution.Ecommerce.InsuranceCompensationContracts.PostHttpMethod {
  export interface JsonDataRequest {
    out_apply_no: string
    sub_mchid: string
    agreement_list: {
      agreement_code: string
      agreement_version: string
      sign_organization: string
      sign_time: string
    }[]
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
  }
  export interface WellformedResponse {
    sub_mchid: string
    opened: boolean
    success_time: string
  }
}
namespace WeChatPay.OpenAPI.V3.Platsolution.Ecommerce {
  export interface InsuranceCompensationContracts {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/docs/partner/apis/plat-compensation/plat-compensation/open-insurance-compensation.html
     */
    (data: InsuranceCompensationContracts.PostHttpMethod.JsonDataRequest, config?: InsuranceCompensationContracts.PostHttpMethod.RequestConfig): AxiosPromise<InsuranceCompensationContracts.PostHttpMethod.WellformedResponse>
    /**
     * 开通保险理赔功能
     * @link https://pay.weixin.qq.com/docs/partner/apis/plat-compensation/plat-compensation/open-insurance-compensation.html
     */
    post(data: InsuranceCompensationContracts.PostHttpMethod.JsonDataRequest, config?: InsuranceCompensationContracts.PostHttpMethod.RequestConfig): AxiosPromise<InsuranceCompensationContracts.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Platsolution {
  export interface Ecommerce {
    insuranceCompensationContracts: Ecommerce.InsuranceCompensationContracts
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface Platsolution {
    ecommerce: Platsolution.Ecommerce
  }
}
namespace WeChatPay.OpenAPI {
  export interface V3 {
    platsolution: V3.Platsolution
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
wxpay.v3.platsolution.ecommerce.insuranceCompensationContracts.post({
//                                                             ^^^^
  out_apply_no,
  sub_mchid,
  agreement_list,
})
.then(
  ({ // [!code hl:11]
    data: {
      sub_mchid,
      opened,
      success_time,
    },
  }) => ({
    sub_mchid,
    opened,
    success_time,
  })
)
```
