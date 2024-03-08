---
title: 查询最大分账比例
description: 服务商可以查询子商户设置的允许服务商分账的最大比例。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/api/allocation_sl.php?chapter=25_11&index=8)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V2.Pay.Profitsharingmerchantratioquery.PostHttpMethod {
  export interface XmlDataRequest {
    mch_id: string
    sub_mch_id: string
    brand_mch_id: string
    nonce_str: string
    sign: string
    sign_type: string
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: XmlDataRequest
  }
  export interface WellformedResponse {
    return_code: string
    return_msg: string
    mch_id: string
    sub_mch_id: string
    brand_mch_id: string
    transaction_id: string
    max_ratio: number
    nonce_str: string
    sign: string
  }
}
namespace WeChatPay.OpenAPI.V2.Pay {
  export interface Profitsharingmerchantratioquery {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/wiki/doc/api/allocation_sp.php?chapter=25_11&index=8
     */
    (data: Profitsharingmerchantratioquery.PostHttpMethod.XmlDataRequest, config?: Profitsharingmerchantratioquery.PostHttpMethod.RequestConfig): AxiosPromise<Profitsharingmerchantratioquery.PostHttpMethod.WellformedResponse>
    /**
     * 查询最大分账比例API
     * @link https://pay.weixin.qq.com/wiki/doc/api/allocation_sp.php?chapter=25_11&index=8
     */
    post(data: Profitsharingmerchantratioquery.PostHttpMethod.XmlDataRequest, config?: Profitsharingmerchantratioquery.PostHttpMethod.RequestConfig): AxiosPromise<Profitsharingmerchantratioquery.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V2 {
  export interface Pay {
    profitsharingmerchantratioquery: Pay.Profitsharingmerchantratioquery
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
wxpay.v2.pay.profitsharingmerchantratioquery.post({
//                                           ^^^^
  mch_id,
  sub_mch_id,
  brand_mch_id,
  nonce_str,
  sign_type,
})
.then(
  ({ // [!code hl:23]
    data: {
      return_code,
      return_msg,
      mch_id,
      sub_mch_id,
      brand_mch_id,
      transaction_id,
      max_ratio,
      nonce_str,
      sign,
    },
  }) => ({
    return_code,
    return_msg,
    mch_id,
    sub_mch_id,
    brand_mch_id,
    transaction_id,
    max_ratio,
    nonce_str,
    sign,
  })
)
```
