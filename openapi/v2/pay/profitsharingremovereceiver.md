---
title: 删除分账接收方
description: 服务商代子商户发起删除分账接收方请求，删除后不支持将结算后的钱分到该分账接收方。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/api/allocation_sl.php?chapter=25_4&index=5)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V2.Pay.Profitsharingremovereceiver.PostHttpMethod {
  export interface XmlDataRequest {
    mch_id: string
    sub_mch_id: string
    appid: string
    sub_appid: string
    nonce_str: string
    sign: string
    sign_type: string
    receiver: string
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
    receiver: string
  }
}
namespace WeChatPay.OpenAPI.V2.Pay {
  export interface Profitsharingremovereceiver {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/wiki/doc/api/allocation_sl.php?chapter=25_4&index=5
     */
    (data: Profitsharingremovereceiver.PostHttpMethod.XmlDataRequest, config?: Profitsharingremovereceiver.PostHttpMethod.RequestConfig): AxiosPromise<Profitsharingremovereceiver.PostHttpMethod.WellformedResponse>
    /**
     * 删除分账接收方
     * @link https://pay.weixin.qq.com/wiki/doc/api/allocation_sl.php?chapter=25_4&index=5
     */
    post(data: Profitsharingremovereceiver.PostHttpMethod.XmlDataRequest, config?: Profitsharingremovereceiver.PostHttpMethod.RequestConfig): AxiosPromise<Profitsharingremovereceiver.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V2 {
  export interface Pay {
    profitsharingremovereceiver: Pay.Profitsharingremovereceiver
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
wxpay.v2.pay.profitsharingremovereceiver.post({
//                                       ^^^^
  mch_id,
  sub_mch_id,
  appid,
  sub_appid,
  nonce_str,
  sign_type,
  receiver,
})
.then(
  ({ // [!code hl:29]
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
      receiver,
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
    receiver,
  })
)
```
