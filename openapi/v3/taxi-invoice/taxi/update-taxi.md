---
title: 更新出租车信息
description: 商户可通过调用该接口新增、更新出租车信息，出租车所在的公司必须已经成为服务商的特约商户，否则新增失败
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/docs/partner/apis/taxi-fapiao/taxi/update-taxi.html)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.TaxiInvoice.Taxi.UpdateTaxi.PostHttpMethod {
  export interface JsonDataRequest {
    plate_number: string
    company_name: string
    mchid: string
    main_license: string
    deputy_license: string
    region_id: number
    invoice_flag: string
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
  }
  export interface WellformedResponse {
    plate_number: string
    company_name: string
    mchid: string
    main_license: string
    deputy_license: string
    region_id: number
  }
}
namespace WeChatPay.OpenAPI.V3.TaxiInvoice.Taxi {
  export interface UpdateTaxi {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/docs/partner/apis/taxi-fapiao/taxi/update-taxi.html
     */
    (data: UpdateTaxi.PostHttpMethod.JsonDataRequest, config?: UpdateTaxi.PostHttpMethod.RequestConfig): AxiosPromise<UpdateTaxi.PostHttpMethod.WellformedResponse>
    /**
     * 更新出租车信息API
     * @link https://pay.weixin.qq.com/docs/partner/apis/taxi-fapiao/taxi/update-taxi.html
     */
    post(data: UpdateTaxi.PostHttpMethod.JsonDataRequest, config?: UpdateTaxi.PostHttpMethod.RequestConfig): AxiosPromise<UpdateTaxi.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.TaxiInvoice {
  export interface Taxi {
    updateTaxi: Taxi.UpdateTaxi
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface TaxiInvoice {
    taxi: TaxiInvoice.Taxi
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
wxpay.v3.taxiInvoice.taxi.updateTaxi.post({
//                                   ^^^^
  plate_number,
  company_name,
  mchid,
  main_license,
  deputy_license,
  region_id,
  invoice_flag,
})
.then(
  ({ // [!code hl:17]
    data: {
      plate_number,
      company_name,
      mchid,
      main_license,
      deputy_license,
      region_id,
    },
  }) => ({
    plate_number,
    company_name,
    mchid,
    main_license,
    deputy_license,
    region_id,
  })
)
```
