---
title: 提交申请单
description: 普通服务商（银行、支付机构、电商平台不可用）使用该接口提交商家资料，帮助商家入驻成为微信支付的特约商户。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3_partner/apis/chapter11_1_1.shtml) [官方文档](https://pay.weixin.qq.com/docs/partner/apis/ecommerce-merchant-application/applyment/submit-applyment.html)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Applyment4sub.Applyment._empty_.PostHttpMethod {
  export interface JsonDataRequest {
    business_code: string
    contact_info: {
      contact_type: string
      contact_name: string
      contact_id_doc_type: string
      contact_id_number: string
      contact_id_doc_copy: string
      contact_id_doc_copy_back: string
      contact_period_begin: string
      contact_period_end: string
      business_authorization_letter: string
      openid: string
      mobile_phone: string
    }
    subject_info: {
      subject_type: string
      business_license_info: {
        license_copy: string
        license_number: string
        merchant_name: string
        legal_person: string
        license_address: string
        period_begin: string
        period_end: string
      }
      certificate_info: {
        cert_copy: string
        cert_type: string
        cert_number: string
        merchant_name: string
        company_address: string
        legal_person: string
        period_begin: string
        period_end: string
      }
      organization_info: {
        organization_copy: string
        organization_code: string
        org_period_begin: string
        org_period_end: string
      }
      certificate_letter_copy: string
      finance_institution_info: {
        finance_type: string
        finance_license_pics: string[]
      }
      identity_info: {
        id_holder_type: string
        id_doc_type: string
        authorize_letter_copy: string
        id_card_info: {
          id_card_copy: string
          id_card_national: string
          id_card_name: string
          id_card_number: string
          card_period_begin: string
          card_period_end: string
        }
        id_doc_info: {
          id_doc_copy: string
          id_doc_copy_back: string
          id_doc_name: string
          id_doc_number: string
          doc_period_begin: string
          doc_period_end: string
        }
        owner: boolean
      }
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
    }
    business_info: {
      merchant_shortname: string
      service_phone: string
      sales_info: {
        sales_scenes_type: string[]
        biz_store_info: {
          biz_store_name: string
          biz_address_code: string
          biz_store_address: string
          store_entrance_pic: string[]
          indoor_pic: string[]
          biz_sub_appid: string
        }
        mp_info: {
          mp_appid: string
          mp_sub_appid: string
          mp_pics: string[]
        }
        mini_program_info: {
          mini_program_appid: string
          mini_program_sub_appid: string
          mini_program_pics: string[]
        }
        app_info: {
          app_appid: string
          app_sub_appid: string
          app_pics: string[]
        }
        web_info: {
          domain: string
          web_authorisation: string
          web_appid: string
        }
        wework_info: {
          sub_corp_id: string
          wework_pics: string[]
        }
      }
    }
    settlement_info: {
      settlement_id: string
      qualification_type: string
      qualifications: string[]
      activities_id: string
      activities_rate: string
      activities_additions: string[]
    }
    bank_account_info: {
      bank_account_type: string
      account_name: string
      account_bank: string
      bank_address_code: string
      bank_name: string
      bank_branch_id: string
      account_number: string
    }
    addition_info: {
      legal_person_commitment: string
      legal_person_video: string
      business_addition_pics: string[]
      business_addition_msg: string
    }
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
  }
}
namespace WeChatPay.OpenAPI.V3.Applyment4sub.Applyment {
  export interface _empty_ {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3_partner/apis/chapter11_1_1.shtml
     */
    (data: _empty_.PostHttpMethod.JsonDataRequest, config: _empty_.PostHttpMethod.RequestConfig): AxiosPromise<_empty_.PostHttpMethod.WellformedResponse>
    /**
     * 提交申请单API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3_partner/apis/chapter11_1_1.shtml
     */
    post(data: _empty_.PostHttpMethod.JsonDataRequest, config: _empty_.PostHttpMethod.RequestConfig): AxiosPromise<_empty_.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Applyment4sub {
  export interface Applyment {
    _empty_: Applyment._empty_
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface Applyment4sub {
    applyment: Applyment4sub.Applyment
  }
}
namespace WeChatPay.OpenAPI {
  export interface V3 {
    applyment4sub: V3.Applyment4sub
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
wxpay.v3.applyment4sub.applyment._empty_.post({
//                                       ^^^^
  business_code,
  contact_info,
  subject_info,
  business_info,
  settlement_info,
  bank_account_info,
  addition_info,
}, { empty, headers, })
.then(
  ({ // [!code hl:7]
    data: {
      applyment_id,
    },
  }) => ({
    applyment_id,
  })
)
```
