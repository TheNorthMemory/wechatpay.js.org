---
title: 请求单次分账
description: 单次分账请求按照传入的分账接收方账号和资金进行分账，同时会将订单剩余的待分账金额解冻给特约商户。故操作成功后，订单不能再进行分账，也不能进行分账完结。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/api/allocation_sl.php?chapter=25_1&index=1)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V2.Secapi.Pay.Profitsharing.PostHttpMethod {
  export interface XmlDataRequest {
    mch_id: string
    sub_mch_id: string
    brand_mch_id: string
    appid: string
    sub_appid: string
    nonce_str: string
    sign: string
    sign_type: string
    transaction_id: string
    out_order_no: string
    receivers: string
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
    brand_mch_id: string
    transaction_id: string
    out_order_no: string
    order_id: string
    status: string
    receivers: string
  }
}
namespace WeChatPay.OpenAPI.V2.Secapi.Pay {
  export interface Profitsharing {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/wiki/doc/api/allocation_sl.php?chapter=25_1&index=1
     */
    (data: Profitsharing.PostHttpMethod.XmlDataRequest, config: Profitsharing.PostHttpMethod.RequestConfig): AxiosPromise<Profitsharing.PostHttpMethod.WellformedResponse>
    /**
     * 请求单次分账
     * @link https://pay.weixin.qq.com/wiki/doc/api/allocation_sl.php?chapter=25_1&index=1
     */
    post(data: Profitsharing.PostHttpMethod.XmlDataRequest, config: Profitsharing.PostHttpMethod.RequestConfig): AxiosPromise<Profitsharing.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V2.Secapi {
  export interface Pay {
    profitsharing: Pay.Profitsharing
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
wxpay.v2.secapi.pay.profitsharing.post({
//                                ^^^^
  mch_id,
  sub_mch_id,
  brand_mch_id,
  appid,
  sub_appid,
  nonce_str,
  sign_type,
  transaction_id,
  out_order_no,
  receivers,
}, { security })
.then(
  ({ // [!code hl:39]
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
      brand_mch_id,
      transaction_id,
      out_order_no,
      order_id,
      status,
      receivers,
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
    brand_mch_id,
    transaction_id,
    out_order_no,
    order_id,
    status,
    receivers,
  })
)
```
