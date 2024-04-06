---
title: 签到签退
description: 签到签退数据主要用于控制微信支付凭证是否包含开发票入口、是否创建用户行程单
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/docs/partner/apis/taxi-fapiao/attendance/punch-attendance.html)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.TaxiInvoice.Attendance.Punch.PostHttpMethod {
  export interface JsonDataRequest {
    plate_number: string
    driver_license: string
    event_time: string
    event_type: string
    region_id: number
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
  }
  export interface WellformedResponse {
  }
}
namespace WeChatPay.OpenAPI.V3.TaxiInvoice.Attendance {
  export interface Punch {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/docs/partner/apis/taxi-fapiao/attendance/punch-attendance.html
     */
    (data: Punch.PostHttpMethod.JsonDataRequest, config?: Punch.PostHttpMethod.RequestConfig): AxiosPromise<Punch.PostHttpMethod.WellformedResponse>
    /**
     * 签到签退API
     * @link https://pay.weixin.qq.com/docs/partner/apis/taxi-fapiao/attendance/punch-attendance.html
     */
    post(data: Punch.PostHttpMethod.JsonDataRequest, config?: Punch.PostHttpMethod.RequestConfig): AxiosPromise<Punch.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.TaxiInvoice {
  export interface Attendance {
    punch: Attendance.Punch
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface TaxiInvoice {
    attendance: TaxiInvoice.Attendance
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
wxpay.v3.taxiInvoice.attendance.punch.post({
//                                    ^^^^
  plate_number,
  driver_license,
  event_time,
  event_type,
  region_id,
})
.then(({ status }) => status === 204) // [!code hl]
```
