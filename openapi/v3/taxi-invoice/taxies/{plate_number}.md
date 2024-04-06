---
title: 获取出租车信息
description: 获取出租车信息
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/docs/partner/apis/taxi-fapiao/taxi/query-taxi.html)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.TaxiInvoice.Taxies._plate_number_.GetHttpMethod {
  export interface RequestConfig extends AxiosRequestConfig {
    plate_number: string
    params: {
      region_id: number
    }
  }
  export interface WellformedResponse {
    plate_number: string
    company_name: string
    company_mchid: string
    main_license: string
    deputy_license: string
    region_id: number
    support_invoice: boolean
    taxi_state: string
  }
}
namespace WeChatPay.OpenAPI.V3.TaxiInvoice.Taxies {
  export interface _plate_number_ {
    /**
     * 获取出租车信息API
     * @link https://pay.weixin.qq.com/docs/partner/apis/taxi-fapiao/taxi/query-taxi.html
     */
    get(config: _plate_number_.GetHttpMethod.RequestConfig): AxiosPromise<_plate_number_.GetHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.TaxiInvoice {
  export interface Taxies {
    _plate_number_: Taxies._plate_number_
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface TaxiInvoice {
    taxies: TaxiInvoice.Taxies
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
wxpay.v3.taxiInvoice.taxies._plate_number_.get({
//                                         ^^^
  plate_number,
  params,
})
.then(
  ({ // [!code hl:21]
    data: {
      plate_number,
      company_name,
      company_mchid,
      main_license,
      deputy_license,
      region_id,
      support_invoice,
      taxi_state,
    },
  }) => ({
    plate_number,
    company_name,
    company_mchid,
    main_license,
    deputy_license,
    region_id,
    support_invoice,
    taxi_state,
  })
)
```
