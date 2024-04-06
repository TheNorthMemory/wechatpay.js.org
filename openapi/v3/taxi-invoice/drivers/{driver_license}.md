---
title: 获取司机信息
description: 获取司机信息
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/docs/partner/apis/taxi-fapiao/driver/query-driver.html)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.TaxiInvoice.Drivers._driver_license_.GetHttpMethod {
  export interface RequestConfig extends AxiosRequestConfig {
    driver_license: string
    params: {
      region_id: number
    }
  }
  export interface WellformedResponse {
    driver_name: string
    company_name: string
    company_mchid: string
    driver_license: string
    driver_category: string
    driver_photo: {
      photo_type: string
      photo_digest: {
        hash_type: string
        hash_value: string
      }
      photo_url: string
      photo_data: string
    }
    region_id: number
    driver_state: string
  }
}
namespace WeChatPay.OpenAPI.V3.TaxiInvoice.Drivers {
  export interface _driver_license_ {
    /**
     * 获取司机信息API
     * @link https://pay.weixin.qq.com/docs/partner/apis/taxi-fapiao/driver/query-driver.html
     */
    get(config: _driver_license_.GetHttpMethod.RequestConfig): AxiosPromise<_driver_license_.GetHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.TaxiInvoice {
  export interface Drivers {
    _driver_license_: Drivers._driver_license_
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface TaxiInvoice {
    drivers: TaxiInvoice.Drivers
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
wxpay.v3.taxiInvoice.drivers._driver_license_.get({
//                                            ^^^
  driver_license,
  params,
})
.then(
  ({ // [!code hl:21]
    data: {
      driver_name,
      company_name,
      company_mchid,
      driver_license,
      driver_category,
      driver_photo,
      region_id,
      driver_state,
    },
  }) => ({
    driver_name,
    company_name,
    company_mchid,
    driver_license,
    driver_category,
    driver_photo,
    region_id,
    driver_state,
  })
)
```
