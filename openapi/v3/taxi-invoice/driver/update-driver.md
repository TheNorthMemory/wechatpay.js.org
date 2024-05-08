---
title: 更新司机信息
description: 新增、更新司机信息，司机需有实名认证的微信号，否则新增、更新失败，司机所在的公司必须已经成为服务商的特约商户，否则新增、更新失败。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/docs/partner/apis/taxi-fapiao/driver/update-driver.html)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.TaxiInvoice.Driver.UpdateDriver.PostHttpMethod {
  export interface JsonDataRequest {
    driver_name: string
    id_card_number: string
    company_name: string
    mchid: string
    driver_license: string
    driver_category: string
    driver_status: string
    driver_photo: {
      photo_type: string
      photo_digest: {
        hash_type: string
        hash_value: string
      }
      photo_url: string
      photo_icon: string
    }
    region_id: number
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
    headers: {
      'Wechatpay-Serial': string
    }
  }
  export interface WellformedResponse {
    driver_name: string
    id_card_number: string
    company_name: string
    mchid: string
    driver_license: string
    driver_category: string
    driver_status: string
    driver_photo: {
      photo_type: string
      photo_digest: {
        hash_type: string
        hash_value: string
      }
      photo_url: string
      photo_icon: string
    }
    region_id: number
  }
}
namespace WeChatPay.OpenAPI.V3.TaxiInvoice.Driver {
  export interface UpdateDriver {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/docs/partner/apis/taxi-fapiao/driver/update-driver.html
     */
    (data: UpdateDriver.PostHttpMethod.JsonDataRequest, config: UpdateDriver.PostHttpMethod.RequestConfig): AxiosPromise<UpdateDriver.PostHttpMethod.WellformedResponse>
    /**
     * 更新司机信息API
     * @link https://pay.weixin.qq.com/docs/partner/apis/taxi-fapiao/driver/update-driver.html
     */
    post(data: UpdateDriver.PostHttpMethod.JsonDataRequest, config: UpdateDriver.PostHttpMethod.RequestConfig): AxiosPromise<UpdateDriver.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.TaxiInvoice {
  export interface Driver {
    updateDriver: Driver.UpdateDriver
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface TaxiInvoice {
    driver: TaxiInvoice.Driver
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
wxpay.v3.taxiInvoice.driver.updateDriver.post({
//                                       ^^^^
  driver_name,
  id_card_number,
  company_name,
  mchid,
  driver_license,
  driver_category,
  driver_status,
  driver_photo,
  region_id,
}, { headers, })
.then(
  ({ // [!code hl:23]
    data: {
      driver_name,
      id_card_number,
      company_name,
      mchid,
      driver_license,
      driver_category,
      driver_status,
      driver_photo,
      region_id,
    },
  }) => ({
    driver_name,
    id_card_number,
    company_name,
    mchid,
    driver_license,
    driver_category,
    driver_status,
    driver_photo,
    region_id,
  })
)
```
