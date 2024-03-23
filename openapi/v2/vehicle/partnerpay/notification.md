---
title: 用户入场通知(合作伙伴模式)
description: 在停车场场景下，如用户已加入车主平台，则进行入场通知；如用户已经欠费，会发送用户欠费入场通知。本接口，会查询用户是否有欠费或黑名单用户情况，并将对应的用户状态进行返回。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/api/vehicle_v2_sl.php?chapter=20_992&index=1&p=202)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V2.Vehicle.Partnerpay.Notification.PostHttpMethod {
  export interface XmlDataRequest {
    appid: string
    mch_id: string
    sub_appid: string
    sub_mch_id: string
    nonce_str?: string
    sign_type: 'HMAC-SHA256'
    version: '3.0' | '2.0'
    trade_scene: 'PARKING' | 'PARKING SPACE'
    scene_info: string
    start_time: string
    plate_number: string
    notify_url: string
    car_type: string
    parking_name: string
    free_time: string
    openid: string
    sub_openid: string
    space_number: string
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: XmlDataRequest
  }
  export interface WellformedResponse {
    return_code: string
    return_msg: string
    appid: string
    mch_id: string
    sub_appid: string
    sub_mch_id: string
    nonce_str: string
    sign: string
    result_code: string
    err_code: string
    err_code_des: string
    user_state: string
    deduct_mode: string
  }
}
namespace WeChatPay.OpenAPI.V2.Vehicle.Partnerpay {
  export interface Notification {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/wiki/doc/api/vehicle_v2_sl.php?chapter=20_992&index=1&p=202
     */
    (data: Notification.PostHttpMethod.XmlDataRequest, config?: Notification.PostHttpMethod.RequestConfig): AxiosPromise<Notification.PostHttpMethod.WellformedResponse>
    /**
     * 用户入场通知api
     * @link https://pay.weixin.qq.com/wiki/doc/api/vehicle_v2_sl.php?chapter=20_992&index=1&p=202
     */
    post(data: Notification.PostHttpMethod.XmlDataRequest, config?: Notification.PostHttpMethod.RequestConfig): AxiosPromise<Notification.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V2.Vehicle {
  export interface Partnerpay {
    notification: Partnerpay.Notification
  }
}
namespace WeChatPay.OpenAPI.V2 {
  export interface Vehicle {
    partnerpay: Vehicle.Partnerpay
  }
}
namespace WeChatPay.OpenAPI {
  export interface V2 {
    vehicle: V2.Vehicle
  }
}
export interface Wechatpay {
  /**
   * APIv2 endpoint
   */
  v2: WeChatPay.OpenAPI.V2
}
export var wxpay: Wechatpay
// @filename: business.js
import { wxpay } from './virtual'
// ---cut---
wxpay.v2.vehicle.partnerpay.notification.post({
//                                       ^^^^
  appid,
  mch_id,
  sub_appid,
  sub_mch_id,
  nonce_str,
  sign_type,
  version,
  trade_scene,
  scene_info,
  start_time,
  plate_number,
  notify_url,
  car_type,
  parking_name,
  free_time,
  openid,
  sub_openid,
  space_number,
})
.then(
  ({ // [!code hl:31]
    data: {
      return_code,
      return_msg,
      appid,
      mch_id,
      sub_appid,
      sub_mch_id,
      nonce_str,
      sign,
      result_code,
      err_code,
      err_code_des,
      user_state,
      deduct_mode,
    },
  }) => ({
    return_code,
    return_msg,
    appid,
    mch_id,
    sub_appid,
    sub_mch_id,
    nonce_str,
    sign,
    result_code,
    err_code,
    err_code_des,
    user_state,
    deduct_mode,
  })
)
```
