---
title: 请求多次分账
description: 微信订单支付成功后，服务商代子商户发起分账请求，将结算后的钱分到分账接收方。多次分账请求仅会按照传入的分账接收方进行分账，不会对剩余的金额进行任何操作。故操作成功后，在待分账金额不等于零时，订单依旧能够再次进行分账。● 多次分账，可以将本商户作为分账接收方直接传入，实现释放资金给本商户的功能。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/api/allocation_sl.php?chapter=25_6&index=2)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V2.Secapi.Pay.Multiprofitsharing.PostHttpMethod {
  export interface XmlDataRequest {
    mch_id: string
    sub_mch_id: string
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
    transaction_id: string
    out_order_no: string
    order_id: string
  }
}
namespace WeChatPay.OpenAPI.V2.Secapi.Pay {
  export interface Multiprofitsharing {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/wiki/doc/api/allocation_sl.php?chapter=25_6&index=2
     */
    (data: Multiprofitsharing.PostHttpMethod.XmlDataRequest, config: Multiprofitsharing.PostHttpMethod.RequestConfig): AxiosPromise<Multiprofitsharing.PostHttpMethod.WellformedResponse>
    /**
     * 请求多次分账
     * @link https://pay.weixin.qq.com/wiki/doc/api/allocation_sl.php?chapter=25_6&index=2
     */
    post(data: Multiprofitsharing.PostHttpMethod.XmlDataRequest, config: Multiprofitsharing.PostHttpMethod.RequestConfig): AxiosPromise<Multiprofitsharing.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V2.Secapi {
  export interface Pay {
    multiprofitsharing: Pay.Multiprofitsharing
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
wxpay.v2.secapi.pay.multiprofitsharing.post({
//                                     ^^^^
  mch_id,
  sub_mch_id,
  appid,
  sub_appid,
  nonce_str,
  sign_type,
  transaction_id,
  out_order_no,
  receivers,
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
