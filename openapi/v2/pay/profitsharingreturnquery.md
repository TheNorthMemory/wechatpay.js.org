---
title: 回退结果查询
description: 商户需要核实回退结果，可调用此接口查询回退结果。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/api/allocation_sp.php?chapter=25_8&index=10)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V2.Pay.Profitsharingreturnquery.PostHttpMethod {
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
    sub_mch_id: string
    sub_appid: string
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
namespace WeChatPay.OpenAPI.V2.Pay {
  export interface Profitsharingreturnquery {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/wiki/doc/api/allocation_sp.php?chapter=25_8&index=10
     */
    (data: Profitsharingreturnquery.PostHttpMethod.XmlDataRequest, config?: Profitsharingreturnquery.PostHttpMethod.RequestConfig): AxiosPromise<Profitsharingreturnquery.PostHttpMethod.WellformedResponse>
    /**
     * 回退结果查询
     * @link https://pay.weixin.qq.com/wiki/doc/api/allocation_sp.php?chapter=25_8&index=10
     */
    post(data: Profitsharingreturnquery.PostHttpMethod.XmlDataRequest, config?: Profitsharingreturnquery.PostHttpMethod.RequestConfig): AxiosPromise<Profitsharingreturnquery.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V2 {
  export interface Pay {
    profitsharingreturnquery: Pay.Profitsharingreturnquery
  }
}
namespace WeChatPay.OpenAPI {
  export interface V2 {
    pay: V2.Pay
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
wxpay.v2.pay.profitsharingreturnquery.post({
//                                    ^^^^
  mch_id,
  sub_mch_id,
  appid,
  sub_appid,
  nonce_str,
  sign_type,
  order_id,
  out_order_no,
  out_return_no,
})
.then(
  ({ // [!code hl:49]
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
