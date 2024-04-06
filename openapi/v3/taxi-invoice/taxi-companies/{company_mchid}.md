---
title: 获取出租车公司商户信息
description: 获取出租车公司商户信息
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }} [官方文档](hhttps://pay.weixin.qq.com/docs/partner/apis/taxi-fapiao/taxi-company/query-taxi-company.html)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.TaxiInvoice.TaxiCompanies._company_mchid_.GetHttpMethod {
  export interface RequestConfig extends AxiosRequestConfig {
    company_mchid: string
    params: {
      region_id: number
    }
  }
  export interface WellformedResponse {
    company_mchid: string
    enterprise_type: string
    company_name: string
    short_name: string
    tax_id: string
    address: string
    phone: string
    bank_name: string
    bank_account: string
    legal_person: string
    invoice_mode: string
    region_id: number
  }
}
namespace WeChatPay.OpenAPI.V3.TaxiInvoice.TaxiCompanies {
  export interface _company_mchid_ {
    /**
     * 获取出租车公司商户信息API
     * @link 获取出租车公司商户信息 [官方文档](hhttps://pay.weixin.qq.com/docs/partner/apis/taxi-fapiao/taxi-company/query-taxi-company.html)
     */
    get(config: _company_mchid_.GetHttpMethod.RequestConfig): AxiosPromise<_company_mchid_.GetHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.TaxiInvoice {
  export interface TaxiCompanies {
    _company_mchid_: TaxiCompanies._company_mchid_
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface TaxiInvoice {
    taxiCompanies: TaxiInvoice.TaxiCompanies
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
wxpay.v3.taxiInvoice.taxiCompanies._company_mchid_.get({
//                                                 ^^^
  company_mchid,
  params,
})
.then(
  ({ // [!code hl:29]
    data: {
      company_mchid,
      enterprise_type,
      company_name,
      short_name,
      tax_id,
      address,
      phone,
      bank_name,
      bank_account,
      legal_person,
      invoice_mode,
      region_id,
    },
  }) => ({
    company_mchid,
    enterprise_type,
    company_name,
    short_name,
    tax_id,
    address,
    phone,
    bank_name,
    bank_account,
    legal_person,
    invoice_mode,
    region_id,
  })
)
```
