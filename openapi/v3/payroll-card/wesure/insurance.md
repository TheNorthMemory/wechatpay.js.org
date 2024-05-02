---
title: 生成投保结果
description: 生成投保结果
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3_partner/Offline/apis/chapter4_1_32.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.PayrollCard.Wesure.Insurance.PostHttpMethod {
  export interface JsonDataRequest {
    sp_mchid: string
    wesure_order_no: string
    token: string
    insurance_company_order_no: string
    openid: string
    insure_state: 'INSURE_SUCCESS' | 'INSURE_FAIL' | 'INSURE_PROCESSING'
    insure_effect_time: string
    insure_invalid_time: string
    insurance_company_name: string
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
  }
  export interface WellformedResponse {
  }
}
namespace WeChatPay.OpenAPI.V3.PayrollCard.Wesure {
  export interface Insurance {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3_partner/Offline/apis/chapter4_1_32.shtml
     */
    (data: Insurance.PostHttpMethod.JsonDataRequest, config?: Insurance.PostHttpMethod.RequestConfig): AxiosPromise<Insurance.PostHttpMethod.WellformedResponse>
    /**
     * 生成投保结果API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3_partner/Offline/apis/chapter4_1_32.shtml
     */
    post(data: Insurance.PostHttpMethod.JsonDataRequest, config?: Insurance.PostHttpMethod.RequestConfig): AxiosPromise<Insurance.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.PayrollCard {
  export interface Wesure {
    insurance: Wesure.Insurance
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface PayrollCard {
    wesure: PayrollCard.Wesure
  }
}
namespace WeChatPay.OpenAPI {
  export interface V3 {
    payrollCard: V3.PayrollCard
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
wxpay.v3.payrollCard.wesure.insurance.post({
//                                    ^^^^
  sp_mchid,
  wesure_order_no,
  token,
  insurance_company_order_no,
  openid,
  insure_state,
  insure_effect_time,
  insure_invalid_time,
  insurance_company_name,
})
.then(({ status, }) => status === 204) // [!code hl]
```
