---
title: 生成授权token
description: 生成授权token信息
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3_partner/Offline/apis/chapter4_1_1.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.PayrollCard.Tokens.PostHttpMethod {
  export interface JsonDataRequest {
    openid: string
    appid: string
    sub_appid: string
    sub_mchid: string
    user_name: string
    id_card_number: string
    employment_type: string
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
    headers: {
      'Wechatpay-Serial': string
    }
  }
  export interface WellformedResponse {
    openid: string
    mchid: string
    sub_mchid: string
    token: string
    expires_in: number
  }
}
namespace WeChatPay.OpenAPI.V3.PayrollCard {
  export interface Tokens {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3_partner/Offline/apis/chapter4_1_1.shtml
     */
    (data: Tokens.PostHttpMethod.JsonDataRequest, config: Tokens.PostHttpMethod.RequestConfig): AxiosPromise<Tokens.PostHttpMethod.WellformedResponse>
    /**
     * 生成授权token API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3_partner/Offline/apis/chapter4_1_1.shtml
     */
    post(data: Tokens.PostHttpMethod.JsonDataRequest, config: Tokens.PostHttpMethod.RequestConfig): AxiosPromise<Tokens.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface PayrollCard {
    tokens: PayrollCard.Tokens
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
wxpay.v3.payrollCard.tokens.post({
//                          ^^^^
  openid,
  appid,
  sub_appid,
  sub_mchid,
  user_name,
  id_card_number,
  employment_type,
}, { headers, })
.then(
  ({ // [!code hl:15]
    data: {
      openid,
      mchid,
      sub_mchid,
      token,
      expires_in,
    },
  }) => ({
    openid,
    mchid,
    sub_mchid,
    token,
    expires_in,
  })
)
```
