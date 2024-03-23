---
title: 创建停车入场
description: 车辆入场以后，商户调用该接口，创建停车入场信息。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/apis/chapter8_8_2.shtml) [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3_partner/apis/chapter8_8_2.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Vehicle.Parking.Parkings.PostHttpMethod {
  export interface JsonDataRequest {
    sub_mchid?: string
    out_parking_no: string
    plate_number: string
    plate_color: string
    notify_url: string
    start_time: string
    parking_name: string
    free_duration: number
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
    headers: {
      'Wechatpay-Serial': string
    }
  }
  export interface WellformedResponse {
    id: string
    out_parking_no: string
    plate_number: string
    start_time: string
    parking_name: string
    free_duration: number
    state: string
    block_reason: string
  }
}
namespace WeChatPay.OpenAPI.V3.Vehicle.Parking {
  export interface Parkings {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3_partner/apis/chapter8_8_2.shtml
     */
    (data: Parkings.PostHttpMethod.JsonDataRequest, config: Parkings.PostHttpMethod.RequestConfig): AxiosPromise<Parkings.PostHttpMethod.WellformedResponse>
    /**
     * 创建停车入场API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3_partner/apis/chapter8_8_2.shtml
     */
    post(data: Parkings.PostHttpMethod.JsonDataRequest, config: Parkings.PostHttpMethod.RequestConfig): AxiosPromise<Parkings.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Vehicle {
  export interface Parking {
    parkings: Parking.Parkings
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface Vehicle {
    parking: Vehicle.Parking
  }
}
namespace WeChatPay.OpenAPI {
  export interface V3 {
    vehicle: V3.Vehicle
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
wxpay.v3.vehicle.parking.parkings.post({
//                                ^^^^
  sub_mchid,
  out_parking_no,
  plate_number,
  plate_color,
  notify_url,
  start_time,
  parking_name,
  free_duration,
}, { headers })
.then(
  ({ // [!code hl:21]
    data: {
      id,
      out_parking_no,
      plate_number,
      start_time,
      parking_name,
      free_duration,
      state,
      block_reason,
    },
  }) => ({
    id,
    out_parking_no,
    plate_number,
    start_time,
    parking_name,
    free_duration,
    state,
    block_reason,
  })
)
```
