---
title: 撤销租借订单
description: 前置条件：订单创建后，调用完结租借订单接口前。调用完结租借订单接口后不可调用该接口。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/payscore.php?chapter=18_3&index=4)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V2.Wxv.Cancelbill.PostHttpMethod {
  export interface XmlDataRequest {
    version: '1.0'
    appid: string
    mch_id: string
    nonce_str: string
    sign: string
    sign_type: 'HMAC-SHA256'
    out_order_no: string
    reason: string
    service_id: string
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: XmlDataRequest
    security: true
  }
  export interface WellformedResponse {
    return_code: string
    return_msg: string
    order_id: string
  }
}
namespace WeChatPay.OpenAPI.V2.Wxv {
  export interface Cancelbill {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/payscore.php?chapter=18_3&index=4
     */
    (data: Cancelbill.PostHttpMethod.XmlDataRequest, config: Cancelbill.PostHttpMethod.RequestConfig): AxiosPromise<Cancelbill.PostHttpMethod.WellformedResponse>
    /**
     * 撤销租借订单
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/payscore.php?chapter=18_3&index=4
     */
    post(data: Cancelbill.PostHttpMethod.XmlDataRequest, config: Cancelbill.PostHttpMethod.RequestConfig): AxiosPromise<Cancelbill.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V2 {
  export interface Wxv {
    cancelbill: Wxv.Cancelbill
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
wxpay.v2.wxv.cancelbill.post({
//                      ^^^^
  version,
  appid,
  mch_id,
  nonce_str,
  sign_type,
  out_order_no,
  reason,
  service_id,
}, { security })
.then(
  ({ // [!code hl:11]
    data: {
      return_code,
      return_msg,
      order_id,
    },
  }) => ({
    return_code,
    return_msg,
    order_id,
  })
)
```
