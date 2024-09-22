---
title: 重试扣费通知
description: 若在可扣费期内扣费失败，商户在可通知时间段可以选择性调用「重试扣费通知」接口，提醒用户补足余额待下次扣费。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/api/wxpay_v2/papay/chapter3_11.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Papay.Contracts._contract_id_.FailNotify.PostHttpMethod {
  export interface JsonDataRequest {
    mchid: string
    appid: string
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
    contract_id: string
  }
  export interface WellformedResponse {
  }
}
namespace WeChatPay.OpenAPI.V3.Papay.Contracts._contract_id_ {
  export interface FailNotify {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/wiki/doc/api/wxpay_v2/papay/chapter3_11.shtml
     */
    (data: FailNotify.PostHttpMethod.JsonDataRequest, config: FailNotify.PostHttpMethod.RequestConfig): AxiosPromise<FailNotify.PostHttpMethod.WellformedResponse>
    /**
     * 重试扣费通知API
     * @link https://pay.weixin.qq.com/wiki/doc/api/wxpay_v2/papay/chapter3_11.shtml
     */
    post(data: FailNotify.PostHttpMethod.JsonDataRequest, config: FailNotify.PostHttpMethod.RequestConfig): AxiosPromise<FailNotify.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Papay.Contracts {
  export interface _contract_id_ {
    failNotify: _contract_id_.FailNotify
  }
}
namespace WeChatPay.OpenAPI.V3.Papay {
  export interface Contracts {
    _contract_id_: Contracts._contract_id_
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface Papay {
    contracts: Papay.Contracts
  }
}
namespace WeChatPay.OpenAPI {
  export interface V3 {
    papay: V3.Papay
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
wxpay.v3.papay.contracts._contract_id_.failNotify.post({
//                                                ^^^^
  mchid,
  appid,
}, { contract_id })
.then(({ status, }) => status === 204) // [!code hl]
```
