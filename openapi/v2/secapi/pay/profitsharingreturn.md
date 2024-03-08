---
title: 分账回退
description: 此功能需要接收方在商户平台-交易中心-分账-分账接收设置下，开启同意分账回退后，才能使用。分账回退的时限是180天。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/api/allocation_sp.php?chapter=25_7&index=9)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V2.Secapi.Pay.Profitsharingreturn.PostHttpMethod {
  export interface XmlDataRequest {
    mch_id: string
    sub_mch_id: string
    appid: string
    sub_appid: string
    nonce_str: string
    sign: string
    sign_type: string
    order_id: string
    out_order_no: string
    out_return_no: string
    return_account_type: string
    return_account: string
    return_amount: number
    description: string
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: XmlDataRequest
    security: true
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
    sub_mch_id: string
    sub_appid: string
    sign_type: string
    order_id: string
    out_order_no: string
    out_return_no: string
    return_no: string
    return_account_type: string
    return_account: string
    return_amount: number
    description: string
    result: string
    fail_reason: string
    finish_time: string
  }
}
namespace WeChatPay.OpenAPI.V2.Secapi.Pay {
  export interface Profitsharingreturn {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/wiki/doc/api/allocation_sp.php?chapter=25_7&index=9
     */
    (data: Profitsharingreturn.PostHttpMethod.XmlDataRequest, config: Profitsharingreturn.PostHttpMethod.RequestConfig): AxiosPromise<Profitsharingreturn.PostHttpMethod.WellformedResponse>
    /**
     * 分账回退
     * @link https://pay.weixin.qq.com/wiki/doc/api/allocation_sp.php?chapter=25_7&index=9
     */
    post(data: Profitsharingreturn.PostHttpMethod.XmlDataRequest, config: Profitsharingreturn.PostHttpMethod.RequestConfig): AxiosPromise<Profitsharingreturn.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V2.Secapi {
  export interface Pay {
    profitsharingreturn: Pay.Profitsharingreturn
  }
}
namespace WeChatPay.OpenAPI.V2 {
  export interface Secapi {
    pay: Secapi.Pay
  }
}
namespace WeChatPay.OpenAPI {
  export interface V2 {
    secapi: V2.Secapi
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
wxpay.v2.secapi.pay.profitsharingreturn.post({
//                                      ^^^^
  mch_id,
  sub_mch_id,
  appid,
  sub_appid,
  nonce_str,
  sign_type,
  order_id,
  out_order_no,
  out_return_no,
  return_account_type,
  return_account,
  return_amount,
  description,
}, { security })
.then(
  ({ // [!code hl:51]
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
      sub_mch_id,
      sub_appid,
      sign_type,
      order_id,
      out_order_no,
      out_return_no,
      return_no,
      return_account_type,
      return_account,
      return_amount,
      description,
      result,
      fail_reason,
      finish_time,
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
    sub_mch_id,
    sub_appid,
    sign_type,
    order_id,
    out_order_no,
    out_return_no,
    return_no,
    return_account_type,
    return_account,
    return_amount,
    description,
    result,
    fail_reason,
    finish_time,
  })
)
```
