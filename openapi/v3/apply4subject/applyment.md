---
title: 提交商户开户意愿申请单
description: 服务商可以通过该接口向微信支付提交商户的联系人信息、主体信息以及联系人信息。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3_partner/apis/chapter10_1_1.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Apply4subject.Applyment.PostHttpMethod {
  export interface JsonDataRequest {
    business_code: string
    contact_info: {
      contact_type: string
      name: string
      contact_id_doc_type: string
      id_card_number: string
      contact_id_doc_copy: string
      contact_id_doc_copy_back: string
      contact_period_begin: string
      contact_period_end: string
      business_authorization_letter: string
      mobile: string
    }
    subject_info: {
      subject_type: string
      is_finance_institution: boolean
      business_license_info: {
        licence_number: string
        licence_copy: string
        merchant_name: string
        legal_person: string
        company_address: string
        licence_valid_date: string
      }
      certificate_info: {
        cert_type: string
        cert_number: string
        cert_copy: string
        merchant_name: string
        legal_person: string
        company_address: string
        cert_valid_date: string
      }
      company_prove_copy: string
      assist_prove_info: {
        micro_biz_type: string
        store_name: string
        store_address_code: string
        store_address: string
        store_header_copy: string
        store_indoor_copy: string
      }
      special_operation_info: {
        category_id: number
        store_indoor_copy: string[]
      }[]
      finance_institution_info: {
        finance_type: string
        finance_license_pics: string[]
      }
    }
    identification_info: {
      id_holder_type: string
      identification_type: string
      authorize_letter_copy: string
      identification_name: string
      identification_number: string
      identification_valid_date: string
      identification_address: string
      identification_front_copy: string
      identification_back_copy: string
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
    addition_info: {
      confirm_mchid_list: string[]
    }
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
    params?: {
      channel_id: string
    }
    headers: {
      'Wechatpay-Serial': string
    }
  }
  export interface WellformedResponse {
    applyment_id: number
  }
}
namespace WeChatPay.OpenAPI.V3.Apply4subject {
  export interface Applyment {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3_partner/apis/chapter10_1_1.shtml
     */
    (data: Applyment.PostHttpMethod.JsonDataRequest, config: Applyment.PostHttpMethod.RequestConfig): AxiosPromise<Applyment.PostHttpMethod.WellformedResponse>
    /**
     * 提交商户开户意愿申请单API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3_partner/apis/chapter10_1_1.shtml
     */
    post(data: Applyment.PostHttpMethod.JsonDataRequest, config: Applyment.PostHttpMethod.RequestConfig): AxiosPromise<Applyment.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface Apply4subject {
    applyment: Apply4subject.Applyment
  }
}
namespace WeChatPay.OpenAPI {
  export interface V3 {
    apply4subject: V3.Apply4subject
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
wxpay.v3.apply4subject.applyment.post({
//                               ^^^^
  business_code,
  contact_info,
  subject_info,
  identification_info,
  ubo_info_list,
  addition_info,
}, { headers, params, })
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

# 查询商户开户意愿申请单审核结果 {#get}

当服务商提交申请单后，需要定期调用此接口查询申请单的审核状态。 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3_partner/apis/chapter10_1_3.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Apply4subject.Applyment.GetHttpMethod {
  export interface RequestConfig extends AxiosRequestConfig {
    params: {
      applyment_id: string
      business_code: string
    }
  }
  export interface WellformedResponse {
    qrcode_data: string
    reject_param: string
    reject_reason: string
  }
}
namespace WeChatPay.OpenAPI.V3.Apply4subject {
  export interface Applyment {
    /**
     * 查询商户开户意愿申请单审核结果API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3_partner/apis/chapter10_1_3.shtml
     */
    get(config: Applyment.GetHttpMethod.RequestConfig): AxiosPromise<Applyment.GetHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface Apply4subject {
    applyment: Apply4subject.Applyment
  }
}
namespace WeChatPay.OpenAPI {
  export interface V3 {
    apply4subject: V3.Apply4subject
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
wxpay.v3.apply4subject.applyment.get({
//                               ^^^^
  params,
})
.then(
  ({ // [!code hl:11]
    data: {
      qrcode_data,
      reject_param,
      reject_reason,
    },
  }) => ({
    qrcode_data,
    reject_param,
    reject_reason,
  })
)
```
