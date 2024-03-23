---
title: 申请扣款(合作伙伴模式)
description: 委托代扣可应用于定期扣款或需事后扣款以期提高效率的场景。例如高速，停车场等通过用户授权给商户，进行委托扣款的场景。注：扣费请求首先按签约协议中记录的优先支付方式扣费，否则从可用扣款方式中依次选择扣款。扣款接口请求成功，返回success仅代表扣款申请受理成功，不代表扣款成功。扣款是否成功以支付通知的结果为准。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/api/vehicle_v2_sl.php?chapter=20_982&index=2&p=202)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V2.Vehicle.Partnerpay.Payapply.PostHttpMethod {
  export interface XmlDataRequest {
    appid: string
    sub_appid: string
    mch_id: string
    sub_mch_id: string
    nonce_str?: string
    sign_type: 'HMAC-SHA256'
    body: string
    detail: string
    attach: string
    out_trade_no: string
    total_fee: number
    fee_type: string
    spbill_create_ip: string
    goods_tag: string
    notify_url: string
    trade_type: string
    version: string
    trade_scene: string
    openid: string
    profit_sharing: string
    scene_info: string
    start_time: string
    end_time: string
    charging_time: string
    plate_number: string
    car_type: string
    parking_name: string
    deduct_mode: string
    support_deduct_mode: string
    space_number: string
    gas_station: string
    gas_label_name: string
    gas_type: string
    gas_standard: string
    gas_amount: string
    gas_gun_no: string
    entrance_name: string
    exit_name: string
    carrying_capacity: string
    carrying_range: string
    channel_type: string
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: XmlDataRequest
  }
  export interface WellformedResponse {
    return_code: string
    return_msg: string
    appid: string
    sub_appid: string
    mch_id: string
    sub_mch_id: string
    device_info: string
    nonce_str: string
    sign: string
    result_code: string
    err_code: string
    err_code_des: string
  }
}
namespace WeChatPay.OpenAPI.V2.Vehicle.Partnerpay {
  export interface Payapply {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/wiki/doc/api/vehicle_v2_sl.php?chapter=20_982&index=2&p=202
     */
    (data: Payapply.PostHttpMethod.XmlDataRequest, config?: Payapply.PostHttpMethod.RequestConfig): AxiosPromise<Payapply.PostHttpMethod.WellformedResponse>
    /**
     * 申请扣款
     * @link https://pay.weixin.qq.com/wiki/doc/api/vehicle_v2_sl.php?chapter=20_982&index=2&p=202
     */
    post(data: Payapply.PostHttpMethod.XmlDataRequest, config?: Payapply.PostHttpMethod.RequestConfig): AxiosPromise<Payapply.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V2.Vehicle {
  export interface Partnerpay {
    payapply: Partnerpay.Payapply
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
wxpay.v2.vehicle.partnerpay.payapply.post({
//                                   ^^^^
  appid,
  sub_appid,
  mch_id,
  sub_mch_id,
  nonce_str,
  sign_type,
  body,
  detail,
  attach,
  out_trade_no,
  total_fee,
  fee_type,
  spbill_create_ip,
  goods_tag,
  notify_url,
  trade_type,
  version,
  trade_scene,
  openid,
  profit_sharing,
  scene_info,
  start_time,
  end_time,
  charging_time,
  plate_number,
  car_type,
  parking_name,
  deduct_mode,
  support_deduct_mode,
  space_number,
  gas_station,
  gas_label_name,
  gas_type,
  gas_standard,
  gas_amount,
  gas_gun_no,
  entrance_name,
  exit_name,
  carrying_capacity,
  carrying_range,
  channel_type,
})
.then(
  ({ // [!code hl:29]
    data: {
      return_code,
      return_msg,
      appid,
      sub_appid,
      mch_id,
      sub_mch_id,
      device_info,
      nonce_str,
      sign,
      result_code,
      err_code,
      err_code_des,
    },
  }) => ({
    return_code,
    return_msg,
    appid,
    sub_appid,
    mch_id,
    sub_mch_id,
    device_info,
    nonce_str,
    sign,
    result_code,
    err_code,
    err_code_des,
  })
)
```
