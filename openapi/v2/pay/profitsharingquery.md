---
title: 查询分账结果
description: 发起分账请求后，可调用此接口查询分账结果；发起分账完结请求后，可调用此接口查询分账完结的执行结果。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/api/allocation_sl.php?chapter=25_2&index=3)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V2.Pay.Profitsharingquery.PostHttpMethod {
  export interface XmlDataRequest {
    mch_id: string
    sub_mch_id: string
    transaction_id: string
    out_order_no: string
    nonce_str: string
    sign: string
    sign_type: string
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: XmlDataRequest
  }
  export interface WellformedResponse {
    sub_appid: string
    sub_mch_id: string
    return_code: string
    return_msg: string
    appid: string
    mch_id: string
    nonce_str: string
    sign: string
    result_code: string
    err_code: string
    err_code_des: string
    transaction_id: string
    out_order_no: string
    order_id: string
    status: string
    close_reason: string
    receivers: string
    amount: number
    description: string
  }
}
namespace WeChatPay.OpenAPI.V2.Pay {
  export interface Profitsharingquery {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/wiki/doc/api/allocation_sl.php?chapter=25_2&index=3
     */
    (data: Profitsharingquery.PostHttpMethod.XmlDataRequest, config?: Profitsharingquery.PostHttpMethod.RequestConfig): AxiosPromise<Profitsharingquery.PostHttpMethod.WellformedResponse>
    /**
     * 查询分账结果
     * @link https://pay.weixin.qq.com/wiki/doc/api/allocation_sl.php?chapter=25_2&index=3
     */
    post(data: Profitsharingquery.PostHttpMethod.XmlDataRequest, config?: Profitsharingquery.PostHttpMethod.RequestConfig): AxiosPromise<Profitsharingquery.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V2 {
  export interface Pay {
    profitsharingquery: Pay.Profitsharingquery
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
wxpay.v2.pay.profitsharingquery.post({
//                              ^^^^
  mch_id,
  sub_mch_id,
  transaction_id,
  out_order_no,
  nonce_str,
  sign_type,
})
.then(
  ({ // [!code hl:43]
    data: {
      sub_appid,
      sub_mch_id,
      return_code,
      return_msg,
      appid,
      mch_id,
      nonce_str,
      sign,
      result_code,
      err_code,
      err_code_des,
      transaction_id,
      out_order_no,
      order_id,
      status,
      close_reason,
      receivers,
      amount,
      description,
    },
  }) => ({
    sub_appid,
    sub_mch_id,
    return_code,
    return_msg,
    appid,
    mch_id,
    nonce_str,
    sign,
    result_code,
    err_code,
    err_code_des,
    transaction_id,
    out_order_no,
    order_id,
    status,
    close_reason,
    receivers,
    amount,
    description,
  })
)
```
