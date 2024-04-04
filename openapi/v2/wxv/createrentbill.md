---
title: 创建租借订单
description: 创建订单后如果超过一小时用户没有进行确认订单操作，订单将失效，无法被用户确认。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/payscore.php?chapter=18_1&index=2)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V2.Wxv.Createrentbill.PostHttpMethod {
  export interface XmlDataRequest {
    version: '1.0'
    appid: string
    mch_id: string
    nonce_str: string
    sign_type: 'HMAC-SHA256'
    out_order_no: string
    service_id: string
    goods_name: string
    start_time: string
    end_time: string
    service_location: string
    deposit_amount: number
    rent_unit: string
    rent_unit_fee: number
    rent_fee_desc: string
    attach: string
    cert_serial_no: string
    openid: string
    name: string
    phone: string
    userid: string
    address: string
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: XmlDataRequest
    security: true
  }
  export interface WellformedResponse {
    return_code: string
    return_msg: string
    sign: string
    nonce_str: string
    result_code: string
    err_code: string
    err_code_des: string
    appid: string
    mch_id: string
    out_order_no: string
    service_id: string
    order_id: string
    miniprogram_appid: string
    miniprogram_path: string
    miniprogram_username: string
    package: string
  }
}
namespace WeChatPay.OpenAPI.V2.Wxv {
  export interface Createrentbill {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/payscore.php?chapter=18_1&index=2
     */
    (data: Createrentbill.PostHttpMethod.XmlDataRequest, config: Createrentbill.PostHttpMethod.RequestConfig): AxiosPromise<Createrentbill.PostHttpMethod.WellformedResponse>
    /**
     * 创建租借订单
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/payscore.php?chapter=18_1&index=2
     */
    post(data: Createrentbill.PostHttpMethod.XmlDataRequest, config: Createrentbill.PostHttpMethod.RequestConfig): AxiosPromise<Createrentbill.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V2 {
  export interface Wxv {
    createrentbill: Wxv.Createrentbill
  }
}
namespace WeChatPay.OpenAPI {
  export interface V2 {
    wxv: V2.Wxv
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
wxpay.v2.wxv.createrentbill.post({
//                          ^^^^
  version,
  appid,
  mch_id,
  nonce_str,
  sign_type,
  out_order_no,
  service_id,
  goods_name,
  start_time,
  end_time,
  service_location,
  deposit_amount,
  rent_unit,
  rent_unit_fee,
  rent_fee_desc,
  attach,
  cert_serial_no,
  openid,
  name,
  phone,
  userid,
  address,
}, { security })
.then(
  ({ // [!code hl:37]
    data: {
      return_code,
      return_msg,
      sign,
      nonce_str,
      result_code,
      err_code,
      err_code_des,
      appid,
      mch_id,
      out_order_no,
      service_id,
      order_id,
      miniprogram_appid,
      miniprogram_path,
      miniprogram_username,
      package: packageStr,
    },
  }) => ({
    return_code,
    return_msg,
    sign,
    nonce_str,
    result_code,
    err_code,
    err_code_des,
    appid,
    mch_id,
    out_order_no,
    service_id,
    order_id,
    miniprogram_appid,
    miniprogram_path,
    miniprogram_username,
    package: packageStr,
  })
)
```
