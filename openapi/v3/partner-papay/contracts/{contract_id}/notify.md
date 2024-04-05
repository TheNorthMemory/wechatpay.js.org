---
title: 服务商商户预扣费通知
description: 商户进行委托代扣扣费前需要在可通知时间段内调用「预扣费通知」的接口为用户发送扣费提醒，并设定预计扣费金额，经过扣费等待期后，在可扣费期内可发起扣费，扣款金额不能高于预计扣费金额，扣费失败可主动发起重试扣费（重试次数由其他规则限制），直到扣费成功，或者可扣费期结束。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/docs/partner/apis/entrusted-payment/json/partner-deduct-notify.html)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.PartnerPapay.Contracts._contract_id_.Notify.PostHttpMethod {
  export interface JsonDataRequest {
    sp_mchid: string
    sp_appid: string
    sub_mchid: string
    sub_appid: string
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
namespace WeChatPay.OpenAPI.V3.PartnerPapay.Contracts._contract_id_ {
  export interface Notify {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/docs/partner/apis/entrusted-payment/json/partner-deduct-notify.html
     */
    (data: Notify.PostHttpMethod.JsonDataRequest, config: Notify.PostHttpMethod.RequestConfig): AxiosPromise<Notify.PostHttpMethod.WellformedResponse>
    /**
     * 服务商商户预扣费通知API
     * @link https://pay.weixin.qq.com/docs/partner/apis/entrusted-payment/json/partner-deduct-notify.html
     */
    post(data: Notify.PostHttpMethod.JsonDataRequest, config: Notify.PostHttpMethod.RequestConfig): AxiosPromise<Notify.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.PartnerPapay.Contracts {
  export interface _contract_id_ {
    notify: _contract_id_.Notify
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
wxpay.v3.partnerPapay.contracts._contract_id_.notify.post({
//                                                   ^^^^
  sp_mchid,
  sp_appid,
  sub_mchid,
  sub_appid,
  deduct_duration,
  estimated_amount,
}, { contract_id })
.then(({ status, }) => status === 204) // [!code hl]
```
