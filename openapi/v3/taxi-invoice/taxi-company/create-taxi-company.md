---
title: 新增出租车公司
description: 新增出租车公司，主要用于服务商绑定特约商户，为出租车公司开通电子发票功能，提交开票信息等
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/docs/partner/apis/taxi-fapiao/taxi-company/create-taxi-company.html)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.TaxiInvoice.TaxiCompany.CreateTaxiCompany.PostHttpMethod {
  export interface JsonDataRequest {
    company_name: string
    tax_id: string
    address: string
    phone: string
    bank_name: string
    bank_account: string
    invoice_mode: string
    legal_person: string
    short_name: string
    region_id: number
    enterprise_type: string
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
  }
  export interface WellformedResponse {
    mchid: string
    company_name: string
  }
}
namespace WeChatPay.OpenAPI.V3.TaxiInvoice.TaxiCompany {
  export interface CreateTaxiCompany {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/docs/partner/apis/taxi-fapiao/taxi-company/create-taxi-company.html
     */
    (data: CreateTaxiCompany.PostHttpMethod.JsonDataRequest, config?: CreateTaxiCompany.PostHttpMethod.RequestConfig): AxiosPromise<CreateTaxiCompany.PostHttpMethod.WellformedResponse>
    /**
     * 新增出租车公司API
     * @link https://pay.weixin.qq.com/docs/partner/apis/taxi-fapiao/taxi-company/create-taxi-company.html
     */
    post(data: CreateTaxiCompany.PostHttpMethod.JsonDataRequest, config?: CreateTaxiCompany.PostHttpMethod.RequestConfig): AxiosPromise<CreateTaxiCompany.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.TaxiInvoice {
  export interface TaxiCompany {
    createTaxiCompany: TaxiCompany.CreateTaxiCompany
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface TaxiInvoice {
    taxiCompany: TaxiInvoice.TaxiCompany
  }
}
namespace WeChatPay.OpenAPI {
  export interface V3 {
    taxiInvoice: V3.TaxiInvoice
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
wxpay.v3.taxiInvoice.taxiCompany.createTaxiCompany.post({
//                                                 ^^^^
  company_name,
  tax_id,
  address,
  phone,
  bank_name,
  bank_account,
  invoice_mode,
  legal_person,
  short_name,
  region_id,
  enterprise_type,
})
.then(
  ({ // [!code hl:9]
    data: {
      mchid,
      company_name,
    },
  }) => ({
    mchid,
    company_name,
  })
)
```
