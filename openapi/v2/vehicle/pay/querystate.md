---
title: 用户状态查询
description: 在停车场、高速、加油等场景下，商户需获取用户车主服务状态/需要关联车主服务。本接口，会查询用户是否开通、授权、有欠费或黑名单用户情况，并将对应的用户状态进行返回。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/api/vehicle_v2.php?chapter=20_93&index=9)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V2.Vehicle.Pay.Querystate.PostHttpMethod {
  export interface XmlDataRequest {
    appid: string
    mch_id: string
    nonce_str?: string
    sign_type: 'HMAC-SHA256'
    trade_scene: string
    jump_scene: string
    openid: string
    version: '3.0' | '2.0'
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: XmlDataRequest
  }
  export interface WellformedResponse {
    return_code: string
    return_msg: string
    appid: string
    mch_id: string
    nonce_str: string
    sign: string
    result_code: string
    err_code: string
    err_code_des: string
    user_state: string
    openid: string
    deduct_mode: string
    path: string
    plate_number_info: string
    plate_number: string
    channel_type: string
    common_use_flag: string
  }
}
namespace WeChatPay.OpenAPI.V2.Vehicle.Pay {
  export interface Querystate {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/wiki/doc/api/vehicle_v2.php?chapter=20_93&index=9
     */
    (data: Querystate.PostHttpMethod.XmlDataRequest, config?: Querystate.PostHttpMethod.RequestConfig): AxiosPromise<Querystate.PostHttpMethod.WellformedResponse>
    /**
     * 用户状态查询
     * @link https://pay.weixin.qq.com/wiki/doc/api/vehicle_v2.php?chapter=20_93&index=9
     */
    post(data: Querystate.PostHttpMethod.XmlDataRequest, config?: Querystate.PostHttpMethod.RequestConfig): AxiosPromise<Querystate.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V2.Vehicle {
  export interface Pay {
    querystate: Pay.Querystate
  }
}
namespace WeChatPay.OpenAPI.V2 {
  export interface Vehicle {
    pay: Vehicle.Pay
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
wxpay.v2.vehicle.pay.querystate.post({
//                              ^^^^
  appid,
  mch_id,
  nonce_str,
  sign_type,
  trade_scene,
  jump_scene,
  openid,
  version,
})
.then(
  ({ // [!code hl:39]
    data: {
      return_code,
      return_msg,
      appid,
      mch_id,
      nonce_str,
      sign,
      result_code,
      err_code,
      err_code_des,
      user_state,
      openid,
      deduct_mode,
      path,
      plate_number_info,
      plate_number,
      channel_type,
      common_use_flag,
    },
  }) => ({
    return_code,
    return_msg,
    appid,
    mch_id,
    nonce_str,
    sign,
    result_code,
    err_code,
    err_code_des,
    user_state,
    openid,
    deduct_mode,
    path,
    plate_number_info,
    plate_number,
    channel_type,
    common_use_flag,
  })
)
```
