---
title: 完结分账
description: 1、不需要进行分账的订单，可直接调用本接口将订单的金额全部解冻给特约商户 2、调用多次分账接口后，需要解冻剩余资金时，调用本接口将剩余的分账金额全部解冻给特约商户 3、已调用请求单次分账后，剩余待分账金额为零，不需要再调用此接口。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/api/allocation_sl.php?chapter=25_5&index=6)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V2.Secapi.Pay.Profitsharingfinish.PostHttpMethod {
  export interface XmlDataRequest {
    mch_id: string
    sub_mch_id: string
    appid: string
    nonce_str: string
    sign: string
    sign_type: string
    transaction_id: string
    out_order_no: string
    description: string
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: XmlDataRequest
    security: true
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
  }
}
namespace WeChatPay.OpenAPI.V2.Secapi.Pay {
  export interface Profitsharingfinish {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/wiki/doc/api/allocation_sl.php?chapter=25_5&index=6
     */
    (data: Profitsharingfinish.PostHttpMethod.XmlDataRequest, config: Profitsharingfinish.PostHttpMethod.RequestConfig): AxiosPromise<Profitsharingfinish.PostHttpMethod.WellformedResponse>
    /**
     * 完结分账
     * @link https://pay.weixin.qq.com/wiki/doc/api/allocation_sl.php?chapter=25_5&index=6
     */
    post(data: Profitsharingfinish.PostHttpMethod.XmlDataRequest, config: Profitsharingfinish.PostHttpMethod.RequestConfig): AxiosPromise<Profitsharingfinish.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V2.Secapi {
  export interface Pay {
    profitsharingfinish: Pay.Profitsharingfinish
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
wxpay.v2.secapi.pay.profitsharingfinish.post({
//                                      ^^^^
  mch_id,
  sub_mch_id,
  appid,
  nonce_str,
  sign_type,
  transaction_id,
  out_order_no,
  description,
}, { security })
.then(
  ({ // [!code hl:33]
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
  })
)
```
