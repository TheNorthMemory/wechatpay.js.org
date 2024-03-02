---
title: 合单关单
description: 合单支付订单只能使用此合单关单api完成关单。调用关单接口：商户订单支付失败需要生成新单号重新发起支付，要对原订单号调用关单，避免重复支付；系统下单后，用户支付超时，系统退出不再受理，避免用户继续，请调用关单接口。
---

# {{ $frontmatter.title }}

{{ $frontmatter.description }} [官方合单支付文档](https://pay.weixin.qq.com/wiki/doc/api/combine.php?chapter=24_2&index=3)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V2.Pay.Closecombinedorder.PostHttpMethod {
  export interface XmlDataRequest {
    combine_appid: string
    combine_mch_id: string
    nonce_str: string
    sign: string
    sign_type: string
    combine_out_trade_no: string
    sub_order_list: string
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: XmlDataRequest
  }
  export interface WellformedResponse {
    return_code: string
    return_msg: string
    combine_appid: string
    combine_mch_id: string
    nonce_str: string
    sign: string
    result_code: string
    err_code: string
    err_code_des: string
  }
}
namespace WeChatPay.OpenAPI.V2.Pay {
  export interface Closecombinedorder {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/wiki/doc/api/combine.php?chapter=24_2&index=3
     */
    (data: Closecombinedorder.PostHttpMethod.XmlDataRequest, config?: Closecombinedorder.PostHttpMethod.RequestConfig): AxiosPromise<Closecombinedorder.PostHttpMethod.WellformedResponse>
    /**
     * 合单关单
     * @link https://pay.weixin.qq.com/wiki/doc/api/combine.php?chapter=24_2&index=3
     */
    post(data: Closecombinedorder.PostHttpMethod.XmlDataRequest, config?: Closecombinedorder.PostHttpMethod.RequestConfig): AxiosPromise<Closecombinedorder.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V2 {
  export interface Pay {
    closecombinedorder: Pay.Closecombinedorder
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
wxpay.v2.pay.closecombinedorder.post({
//                              ^^^^
  combine_appid,
  combine_mch_id,
  nonce_str,
  sign_type,
  combine_out_trade_no,
  sub_order_list,
})
.then(
  ({ // [!code hl:23]
    data: {
      return_code,
      return_msg,
      combine_appid,
      combine_mch_id,
      nonce_str,
      sign,
      result_code,
      err_code,
      err_code_des,
    },
  }) => ({
    return_code,
    return_msg,
    combine_appid,
    combine_mch_id,
    nonce_str,
    sign,
    result_code,
    err_code,
    err_code_des,
  })
)
```
