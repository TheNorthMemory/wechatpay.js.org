---
title: 查询租借订单
description: 前置条件：商户下单待受理后。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/payscore.php?chapter=18_2&index=3)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V2.Wxv.Queryrentbill.PostHttpMethod {
  export interface XmlDataRequest {
    version: '1.0'
    appid: string
    mch_id: string
    nonce_str: string
    sign: string
    sign_type: 'HMAC-SHA256'
    out_order_no: string
    return_query_id: string
    service_id: string
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
    state: string
    goods_name: string
    returned: string
    start_time: string
    service_location: string
    deposit_amount: number
    rent_unit: string
    rent_unit_fee: number
    rent_fee_desc: string
    real_end_time: string
    rent_fee: number
    compensation_fee: number
    compensation_fee_desc: string
    service_end_location: string
    order_id: string
    finish_ticket: string
    attach: string
    finish_transaction_id: string
    pay_type: string
  }
}
namespace WeChatPay.OpenAPI.V2.Wxv {
  export interface Queryrentbill {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/payscore.php?chapter=18_2&index=3
     */
    (data: Queryrentbill.PostHttpMethod.XmlDataRequest, config: Queryrentbill.PostHttpMethod.RequestConfig): AxiosPromise<Queryrentbill.PostHttpMethod.WellformedResponse>
    /**
     * 查询租借订单
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/payscore.php?chapter=18_2&index=3
     */
    post(data: Queryrentbill.PostHttpMethod.XmlDataRequest, config: Queryrentbill.PostHttpMethod.RequestConfig): AxiosPromise<Queryrentbill.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V2 {
  export interface Wxv {
    queryrentbill: Wxv.Queryrentbill
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
wxpay.v2.wxv.queryrentbill.post({
//                         ^^^^
  version,
  appid,
  mch_id,
  nonce_str,
  sign_type,
  out_order_no,
  return_query_id,
  service_id,
}, { security })
.then(
  ({ // [!code hl:65]
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
      state,
      goods_name,
      returned,
      start_time,
      service_location,
      deposit_amount,
      rent_unit,
      rent_unit_fee,
      rent_fee_desc,
      real_end_time,
      rent_fee,
      compensation_fee,
      compensation_fee_desc,
      service_end_location,
      order_id,
      finish_ticket,
      attach,
      finish_transaction_id,
      pay_type,
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
    state,
    goods_name,
    returned,
    start_time,
    service_location,
    deposit_amount,
    rent_unit,
    rent_unit_fee,
    rent_fee_desc,
    real_end_time,
    rent_fee,
    compensation_fee,
    compensation_fee_desc,
    service_end_location,
    order_id,
    finish_ticket,
    attach,
    finish_transaction_id,
    pay_type,
  })
)
```
