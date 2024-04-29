---
title: 微工卡核身预下单
description: 服务商在拉起微工卡前端服务给用户做微工卡核身前，需要先调用本接口预下单，下单成功后才能进行核身
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3_partner/Offline/apis/chapter4_1_3.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.PayrollCard.Authentications.PreOrder.PostHttpMethod {
  export interface JsonDataRequest {
    openid: string
    appid: string
    sub_mchid: string
    sub_appid: string
    authenticate_number: string
    project_name: string
    employer_name: string
    authenticate_type: 'SIGN_IN' | 'INSURANCE' | 'CONTRACT'
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
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
  export interface PreOrder {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3_partner/Offline/apis/chapter4_1_3.shtml
     */
    (data: PreOrder.PostHttpMethod.JsonDataRequest, config?: PreOrder.PostHttpMethod.RequestConfig): AxiosPromise<PreOrder.PostHttpMethod.WellformedResponse>
    /**
     * 微工卡核身预下单API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3_partner/Offline/apis/chapter4_1_3.shtml
     */
    post(data: PreOrder.PostHttpMethod.JsonDataRequest, config?: PreOrder.PostHttpMethod.RequestConfig): AxiosPromise<PreOrder.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.PayrollCard {
  export interface Authentications {
    preOrder: Authentications.PreOrder
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
wxpay.v3.payrollCard.authentications.preOrder.post({
//                                            ^^^^
  openid,
  appid,
  sub_mchid,
  sub_appid,
  authenticate_number,
  project_name,
  employer_name,
  authenticate_type,
})
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
