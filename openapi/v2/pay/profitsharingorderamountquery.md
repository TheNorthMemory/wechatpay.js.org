---
title: 查询订单待分账金额
description: 商户可通过调用此接口查询订单剩余待分金额。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/api/allocation.php?chapter=27_10&index=7)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V2.Pay.Profitsharingorderamountquery.PostHttpMethod {
  export interface XmlDataRequest {
    mch_id: string
    transaction_id: string
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
    transaction_id: string
    unsplit_amount: number
    nonce_str: string
    sign: string
  }
}
namespace WeChatPay.OpenAPI.V2.Pay {
  export interface Profitsharingorderamountquery {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/wiki/doc/api/allocation.php?chapter=27_10&index=7
     */
    (data: Profitsharingorderamountquery.PostHttpMethod.XmlDataRequest, config?: Profitsharingorderamountquery.PostHttpMethod.RequestConfig): AxiosPromise<Profitsharingorderamountquery.PostHttpMethod.WellformedResponse>
    /**
     * 查询订单待分账金额
     * @link https://pay.weixin.qq.com/wiki/doc/api/allocation.php?chapter=27_10&index=7
     */
    post(data: Profitsharingorderamountquery.PostHttpMethod.XmlDataRequest, config?: Profitsharingorderamountquery.PostHttpMethod.RequestConfig): AxiosPromise<Profitsharingorderamountquery.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V2 {
  export interface Pay {
    profitsharingorderamountquery: Pay.Profitsharingorderamountquery
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
wxpay.v2.pay.profitsharingorderamountquery.post({
//                                         ^^^^
  mch_id,
  transaction_id,
  nonce_str,
  sign_type,
})
.then(
  ({ // [!code hl:19]
    data: {
      return_code,
      return_msg,
      mch_id,
      transaction_id,
      unsplit_amount,
      nonce_str,
      sign,
    },
  }) => ({
    return_code,
    return_msg,
    mch_id,
    transaction_id,
    unsplit_amount,
    nonce_str,
    sign,
  })
)
```
