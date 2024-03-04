---
title: 商户进件(平台收付通)
description: 电商平台通过提交二级商户资料，完成二级商户入驻，入驻成为微信支付商户。
---

# {{ $frontmatter.title }}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3_partner/apis/chapter7_1_1.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Ecommerce.Applyments._empty_.PostHttpMethod {
  export interface JsonDataRequest {
    out_request_no: string
    organization_type: string
    finance_institution: boolean
    business_license_info: {
      cert_type: string
      business_license_copy: string
      business_license_number: string
      merchant_name: string
      legal_person: string
      company_address: string
      business_time: string
    }
    finance_institution_info: {
      finance_type: string
      finance_license_pics: string[]
    }
    id_holder_type: string
    id_doc_type: string
    authorize_letter_copy: string
    id_card_info: {
      id_card_copy: string
      id_card_national: string
      id_card_name: string
      id_card_number: string
      id_card_address: string
      id_card_valid_time_begin: string
      id_card_valid_time: string
    }
    id_doc_info: {
      id_doc_name: string
      id_doc_number: string
      id_doc_address: string
      id_doc_copy: string
      id_doc_copy_back: string
      doc_period_begin: string
      doc_period_end: string
    }
    owner: boolean
    ubo_info_list: {
      ubo_id_doc_type: string
      ubo_id_doc_copy: string
      ubo_id_doc_copy_back: string
      ubo_id_doc_name: string
      ubo_id_doc_number: string
      ubo_id_doc_address: string
      ubo_period_begin: string
      ubo_period_end: string
    }[]
    account_info: {
      bank_account_type: string
      account_bank: string
      account_name: string
      bank_address_code: string
      bank_branch_id: string
      bank_name: string
      account_number: string
      account_cert_info: {
        settlement_cert_pic: string
        relation_cert_pic: string
        other_cert_pics: string[]
      }
    }
    contact_info: {
      contact_type: string
      contact_name: string
      contact_id_doc_type: string
      contact_id_card_number: string
      contact_id_doc_copy: string
      contact_id_doc_copy_back: string
      contact_period_begin: string
      contact_period_end: string
      business_authorization_letter: string
      mobile_phone: string
      contact_email: string
    }
    sales_scene_info: {
      store_name: string
      store_url: string
      store_qr_code: string
      mini_program_sub_appid: string
    }
    settlement_info: {
      settlement_id: string
      qualification_type: string
    }
    merchant_shortname: string
    qualifications: string[]
    business_addition_pics: string[]
    business_addition_desc: string[]
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
    empty: ''
    headers: {
      'Wechatpay-Serial': string
    }
  }
  export interface WellformedResponse {
    applyment_id: number
    out_request_no: string
  }
}
namespace WeChatPay.OpenAPI.V3.Ecommerce.Applyments {
  export interface _empty_ {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3_partner/apis/chapter7_1_1.shtml
     */
    (data: _empty_.PostHttpMethod.JsonDataRequest, config: _empty_.PostHttpMethod.RequestConfig): AxiosPromise<_empty_.PostHttpMethod.WellformedResponse>
    /**
     * 二级商户进件API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3_partner/apis/chapter7_1_1.shtml
     */
    post(data: _empty_.PostHttpMethod.JsonDataRequest, config: _empty_.PostHttpMethod.RequestConfig): AxiosPromise<_empty_.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Ecommerce {
  export interface Applyments {
    _empty_: Applyments._empty_
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface Ecommerce {
    applyments: Ecommerce.Applyments
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
wxpay.v3.ecommerce.applyments._empty_.post({
//                                    ^^^^
  out_request_no,
  organization_type,
  finance_institution,
  business_license_info,
  finance_institution_info,
  id_holder_type,
  id_doc_type,
  authorize_letter_copy,
  id_card_info,
  id_doc_info,
  owner,
  ubo_info_list,
  account_info,
  contact_info,
  sales_scene_info,
  settlement_info,
  merchant_shortname,
  qualifications,
  business_addition_pics,
  business_addition_desc,
}, { empty, headers, })
.then(
  ({ // [!code hl:9]
    data: {
      applyment_id,
      out_request_no,
    },
  }) => ({
    applyment_id,
    out_request_no,
  })
)
```