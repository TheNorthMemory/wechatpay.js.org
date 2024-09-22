---
title: 服务商商户重试扣费通知
description: 若在可扣费期内扣费失败，商户在可通知时间段可以选择性调用「重试扣费通知」接口，提醒用户补足余额待下次扣费。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/api/wxpay_v2/papay/chapter5_16.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.PartnerPapay.Contracts._contract_id_.FailNotify.PostHttpMethod {
  export interface JsonDataRequest {
    sp_mchid: string
    sp_appid: string
    sub_mchid: string
    sub_appid: string
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
    contract_id: string
  }
  export interface WellformedResponse {
  }
}
namespace WeChatPay.OpenAPI.V3.PartnerPapay.Contracts._contract_id_ {
  export interface FailNotify {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/wiki/doc/api/wxpay_v2/papay/chapter5_16.shtml
     */
    (data: FailNotify.PostHttpMethod.JsonDataRequest, config: FailNotify.PostHttpMethod.RequestConfig): AxiosPromise<FailNotify.PostHttpMethod.WellformedResponse>
    /**
     * 服务商商户重试扣费通知API
     * @link https://pay.weixin.qq.com/wiki/doc/api/wxpay_v2/papay/chapter5_16.shtml
     */
    post(data: FailNotify.PostHttpMethod.JsonDataRequest, config: FailNotify.PostHttpMethod.RequestConfig): AxiosPromise<FailNotify.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.PartnerPapay.Contracts {
  export interface _contract_id_ {
    failNotify: _contract_id_.FailNotify
  }
}
namespace WeChatPay.OpenAPI.V3.PartnerPapay {
  export interface Contracts {
    _contract_id_: Contracts._contract_id_
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface PartnerPapay {
    contracts: PartnerPapay.Contracts
  }
}
namespace WeChatPay.OpenAPI {
  export interface V3 {
    partnerPapay: V3.PartnerPapay
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
wxpay.v3.partnerPapay.contracts._contract_id_.failNotify.post({
//                                                       ^^^^
  sp_mchid,
  sp_appid,
  sub_mchid,
  sub_appid,
}, { contract_id })
.then(({ status, }) => status === 204) // [!code hl]
```
