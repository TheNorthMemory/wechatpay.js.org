---
title: 微工卡核身预下单（流程中完成授权）
description: 本接口适用于用户需同步完成服务开通、授权及身份核验的场景。在拉起微工卡前端服务为用户核身前，需调用本接口预下单，下单成功后才能进行核身。如此时用户未开通微工卡服务或未完成对商户的授权，则先完成开通、授权，同步完成身份核验，并提供可信的核验结果。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3_partner/Offline/apis/chapter4_1_29.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.PayrollCard.Authentications.PreOrderWithAuth.PostHttpMethod {
  export interface JsonDataRequest {
    openid: string
    appid: string
    sub_mchid: string
    sub_appid: string
    authenticate_number: string
    project_name: string
    employer_name: string
    user_name: string
    id_card_number: string
    employment_type: 'LONG_TERM_EMPLOYMENT' | 'SHORT_TERM_EMPLOYMENT' | 'COOPERATION_EMPLOYMENT'
    authenticate_type: 'SIGN_IN' | 'INSURANCE' | 'CONTRACT'
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
    headers: {
      'Wechatpay-Serial': string
    }
  }
  export interface WellformedResponse {
    authenticate_number: string
    openid: string
    mchid: string
    sub_mchid: string
    token: string
    expires_in: number
  }
}
namespace WeChatPay.OpenAPI.V3.PayrollCard.Authentications {
  export interface PreOrderWithAuth {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3_partner/Offline/apis/chapter4_1_29.shtml
     */
    (data: PreOrderWithAuth.PostHttpMethod.JsonDataRequest, config: PreOrderWithAuth.PostHttpMethod.RequestConfig): AxiosPromise<PreOrderWithAuth.PostHttpMethod.WellformedResponse>
    /**
     * 微工卡核身预下单（流程中完成授权）
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3_partner/Offline/apis/chapter4_1_29.shtml
     */
    post(data: PreOrderWithAuth.PostHttpMethod.JsonDataRequest, config: PreOrderWithAuth.PostHttpMethod.RequestConfig): AxiosPromise<PreOrderWithAuth.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.PayrollCard {
  export interface Authentications {
    preOrderWithAuth: Authentications.PreOrderWithAuth
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface PayrollCard {
    authentications: PayrollCard.Authentications
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
wxpay.v3.payrollCard.authentications.preOrderWithAuth.post({
//                                                    ^^^^
  openid,
  appid,
  sub_mchid,
  sub_appid,
  authenticate_number,
  project_name,
  employer_name,
  user_name,
  id_card_number,
  employment_type,
  authenticate_type,
}, { headers, })
.then(
  ({ // [!code hl:17]
    data: {
      authenticate_number,
      openid,
      mchid,
      sub_mchid,
      token,
      expires_in,
    },
  }) => ({
    authenticate_number,
    openid,
    mchid,
    sub_mchid,
    token,
    expires_in,
  })
)
```
