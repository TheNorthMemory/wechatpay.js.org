---
title: 直连商户预扣费通知
description: 如：若需要在3号扣费，则需要在1号将通知下发给用户，2号为用户的扣费等待期，用户可以选择等待扣费或关闭扣费服务，3号商户可正常发起扣费。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/docs/merchant/apis/entrusted-payment/json/deduct-notify.html)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Papay.Contracts._contract_id_.Notify.PostHttpMethod {
  export interface JsonDataRequest {
    mchid: string
    appid: string
    deduct_duration: {
      count: number
      unit: string
    }
    estimated_amount: {
      amount: number
      currency: string
    }
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
    contract_id: string
  }
  export interface WellformedResponse {
  }
}
namespace WeChatPay.OpenAPI.V3.Papay.Contracts._contract_id_ {
  export interface Notify {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/docs/merchant/apis/entrusted-payment/json/deduct-notify.html
     */
    (data: Notify.PostHttpMethod.JsonDataRequest, config: Notify.PostHttpMethod.RequestConfig): AxiosPromise<Notify.PostHttpMethod.WellformedResponse>
    /**
     * 直连商户预扣费通知API
     * @link https://pay.weixin.qq.com/docs/merchant/apis/entrusted-payment/json/deduct-notify.html
     */
    post(data: Notify.PostHttpMethod.JsonDataRequest, config: Notify.PostHttpMethod.RequestConfig): AxiosPromise<Notify.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Papay.Contracts {
  export interface _contract_id_ {
    notify: _contract_id_.Notify
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
wxpay.v3.papay.contracts._contract_id_.notify.post({
//                                            ^^^^
  mchid,
  appid,
  deduct_duration,
  estimated_amount,
}, { contract_id })
.then(({ status, }) => status === 204) // [!code hl]
```
