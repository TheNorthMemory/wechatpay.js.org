---
title: 完结租借订单
description: 
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/payscore.php?chapter=18_4&index=5)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V2.Wxv.Finishrentbill.PostHttpMethod {
  export interface XmlDataRequest {
    version: string
    appid: string
    mch_id: string
    nonce_str: string
    sign: string
    sign_type: string
    out_order_no: string
    service_id: string
    returned: string
    real_end_time: string
    service_end_location: string
    total_amount: number
    rent_fee: number
    compensation_fee: string
    compensation_fee_desc: string
    finish_ticket: string
    profit_sharing: string
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
  }
}
namespace WeChatPay.OpenAPI.V2.Wxv {
  export interface Finishrentbill {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/payscore.php?chapter=18_4&index=5
     */
    (data: Finishrentbill.PostHttpMethod.XmlDataRequest, config: Finishrentbill.PostHttpMethod.RequestConfig): AxiosPromise<Finishrentbill.PostHttpMethod.WellformedResponse>
    /**
     * 完结租借订单
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/payscore.php?chapter=18_4&index=5
     */
    post(data: Finishrentbill.PostHttpMethod.XmlDataRequest, config: Finishrentbill.PostHttpMethod.RequestConfig): AxiosPromise<Finishrentbill.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V2 {
  export interface Wxv {
    finishrentbill: Wxv.Finishrentbill
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
wxpay.v2.wxv.finishrentbill.post({
//                          ^^^^
  version,
  appid,
  mch_id,
  nonce_str,
  sign_type,
  out_order_no,
  service_id,
  returned,
  real_end_time,
  service_end_location,
  total_amount,
  rent_fee,
  compensation_fee,
  compensation_fee_desc,
  finish_ticket,
  profit_sharing,
})
.then(
  ({ // [!code hl:29]
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
  })
)
```
