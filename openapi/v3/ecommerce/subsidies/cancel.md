---
title: 取消补差(平台收付通)
description: 对带有补差标识的订单，如果不需要补差，可在发起发起分账前，可调用这个接口进行取消补差。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/ecommerce/subsidies/chapter3_3.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Ecommerce.Subsidies.Cancel.PostHttpMethod {
  export interface JsonDataRequest {
    sub_mchid: string
    transaction_id: string
    description: string
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
  }
  export interface WellformedResponse {
    sub_mchid: string
    transaction_id: string
    result: string
    description: string
  }
}
namespace WeChatPay.OpenAPI.V3.Ecommerce.Subsidies {
  export interface Cancel {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/ecommerce/subsidies/chapter3_3.shtml
     */
    (data: Cancel.PostHttpMethod.JsonDataRequest, config?: Cancel.PostHttpMethod.RequestConfig): AxiosPromise<Cancel.PostHttpMethod.WellformedResponse>
    /**
     * 取消补差API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/ecommerce/subsidies/chapter3_3.shtml
     */
    post(data: Cancel.PostHttpMethod.JsonDataRequest, config?: Cancel.PostHttpMethod.RequestConfig): AxiosPromise<Cancel.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Ecommerce {
  export interface Subsidies {
    cancel: Subsidies.Cancel
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface Ecommerce {
    subsidies: Ecommerce.Subsidies
  }
}
namespace WeChatPay.OpenAPI {
  export interface V3 {
    ecommerce: V3.Ecommerce
  }
}
export interface Wechatpay {
  /**
   * APIv3 endpoint
   */
  v3: WeChatPay.OpenAPI.V3
}
export var wxpay: Wechatpay
// @filename: business.js
import { wxpay } from './virtual'
// ---cut---
wxpay.v3.ecommerce.subsidies.cancel.post({
//                                  ^^^^
  sub_mchid,
  transaction_id,
  description,
})
.then(
  ({ // [!code hl:13]
    data: {
      sub_mchid,
      transaction_id,
      result,
      description,
    },
  }) => ({
    sub_mchid,
    transaction_id,
    result,
    description,
  })
)
```