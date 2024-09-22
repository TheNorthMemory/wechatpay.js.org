---
title: 提交资料变更申请单
description: 服务商使用该接口提交商家主体资料变更申请，帮助商家修改主体资料。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3_partner/Offline/apis/chapter11_3_1.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Mchalterapply.Mchsubjectalterapplyment.PostHttpMethod {
  export interface JsonDataRequest {
    merchant_code: string
    out_request_no: string
    organization_type: string
    finance_institution: boolean
    business_license_info: {
      license_number: string
      license_copy: string
      merchant_name: string
      legal_person: string
      company_address: string
      license_period_begin: string
      license_period_end: string
    }
    certificate_info: {
      cert_type: string
      cert_number: string
      cert_copy: string
      merchant_name: string
      legal_person: string
      company_address: string
      cert_period_begin: string
      cert_period_end: string
    }
    finance_institution_info: {
      finance_type: string
      finance_license_pics: string[]
    }
    legal_person_info: {
      id_holder_type: string
      id_doc_type: string
      authorize_letter_copy: string
      card_front: string
      card_back: string
      card_name: string
      card_number: string
      card_address: string
      card_period_begin: string
      card_period_end: string
      as_ubo: boolean
    }
    ubo_info_list: {
      id_doc_type: string
      card_front: string
      card_back: string
      card_name: string
      card_number: string
      card_address: string
      card_period_begin: string
      card_period_end: string
    }[]
    addition: {
      bank_openaccount_license: string[]
      openaccount_approval: string[]
      legal_other_prove: string[]
      agency_prove: string[]
    }
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
  }
  export interface WellformedResponse {
    apply_id: string
  }
}
namespace WeChatPay.OpenAPI.V3.Mchalterapply {
  export interface Mchsubjectalterapplyment {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3_partner/Offline/apis/chapter11_3_1.shtml
     */
    (data: Mchsubjectalterapplyment.PostHttpMethod.JsonDataRequest, config?: Mchsubjectalterapplyment.PostHttpMethod.RequestConfig): AxiosPromise<Mchsubjectalterapplyment.PostHttpMethod.WellformedResponse>
    /**
     * 提交资料变更申请单
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3_partner/Offline/apis/chapter11_3_1.shtml
     */
    post(data: Mchsubjectalterapplyment.PostHttpMethod.JsonDataRequest, config?: Mchsubjectalterapplyment.PostHttpMethod.RequestConfig): AxiosPromise<Mchsubjectalterapplyment.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface Mchalterapply {
    mchsubjectalterapplyment: Mchalterapply.Mchsubjectalterapplyment
  }
}
namespace WeChatPay.OpenAPI {
  export interface V3 {
    mchalterapply: V3.Mchalterapply
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
wxpay.v3.mchalterapply.mchsubjectalterapplyment.post({
//                                              ^^^^
  merchant_code,
  out_request_no,
  organization_type,
  finance_institution,
  business_license_info,
  certificate_info,
  finance_institution_info,
  legal_person_info,
  ubo_info_list,
  addition,
})
.then(
  ({ // [!code hl:7]
    data: {
      apply_id,
    },
  }) => ({
    apply_id,
  })
)
```
