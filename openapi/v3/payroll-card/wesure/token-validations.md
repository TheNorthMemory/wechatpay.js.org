---
title: 校验核身结果
description: 校验按商户拉起核身时预下单的token值对应的微工卡核身结果是否成功
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3_partner/Offline/apis/chapter4_1_31.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.PayrollCard.Wesure.TokenValidations.PostHttpMethod {
  export interface JsonDataRequest {
    sp_mchid: string
    sub_mchid: string
    token: string
    user_name: string
    id_card_number: string
    authenticate_type: 'NORMAL' | 'SIGN_IN' | 'INSURANCE' | 'CONTRACT'
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
    headers: {
      'Wechatpay-Serial': string
    }
  }
  export interface WellformedResponse {
    result: string
    authenticate_success_time: string
    openid: string
    fail_reason: 'SP_MCH_NO_PERMISSION' | 'SUB_MCH_NO_PERMISSION' | 'USER_NAME_NOT_MATCH' | 'ID_CARD_NUMBER_NOT_MATCH' | 'AUTHENTICATION_STATE_PROCESSING' | 'AUTHENTICATION_STATE_FAIL' | 'AUTHENTICATE_TYPE_NOT_MATCH'
  }
}
namespace WeChatPay.OpenAPI.V3.PayrollCard.Wesure {
  export interface TokenValidations {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3_partner/Offline/apis/chapter4_1_31.shtml
     */
    (data: TokenValidations.PostHttpMethod.JsonDataRequest, config: TokenValidations.PostHttpMethod.RequestConfig): AxiosPromise<TokenValidations.PostHttpMethod.WellformedResponse>
    /**
     * 校验核身结果API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3_partner/Offline/apis/chapter4_1_31.shtml
     */
    post(data: TokenValidations.PostHttpMethod.JsonDataRequest, config: TokenValidations.PostHttpMethod.RequestConfig): AxiosPromise<TokenValidations.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.PayrollCard {
  export interface Wesure {
    tokenValidations: Wesure.TokenValidations
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
wxpay.v3.payrollCard.wesure.tokenValidations.post({
//                                           ^^^^
  sp_mchid,
  sub_mchid,
  token,
  user_name,
  id_card_number,
  authenticate_type,
}, { headers, })
.then(
  ({ // [!code hl:13]
    data: {
      result,
      authenticate_success_time,
      openid,
      fail_reason,
    },
  }) => ({
    result,
    authenticate_success_time,
    openid,
    fail_reason,
  })
)
```
