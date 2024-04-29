---
title: 获取核身结果
description: 按商户拉起核身时预下单的单号获取该次微工卡核身的结果
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3_partner/Offline/apis/chapter4_1_4.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.PayrollCard.Authentications._authenticate_number_.GetHttpMethod {
  export interface RequestConfig extends AxiosRequestConfig {
    authenticate_number: string
    params: {
      sub_mchid: string
    }
  }
  export interface WellformedResponse {
    mchid: string
    sub_mchid: string
    openid: string
    authenticate_scene: string
    authenticate_source: string
    project_name: string
    employer_name: string
    authenticate_state: string
    authenticate_time: string
    authenticate_number: string
    authenticate_failed_reason: string
  }
}
namespace WeChatPay.OpenAPI.V3.PayrollCard.Authentications {
  export interface _authenticate_number_ {
    /**
     * 获取核身结果API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3_partner/Offline/apis/chapter4_1_4.shtml
     */
    get(config: _authenticate_number_.GetHttpMethod.RequestConfig): AxiosPromise<_authenticate_number_.GetHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.PayrollCard {
  export interface Authentications {
    _authenticate_number_: Authentications._authenticate_number_
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
wxpay.v3.payrollCard.authentications._authenticate_number_.get({
//                                                         ^^^
  authenticate_number,
  params,
})
.then(
  ({ // [!code hl:27]
    data: {
      mchid,
      sub_mchid,
      openid,
      authenticate_scene,
      authenticate_source,
      project_name,
      employer_name,
      authenticate_state,
      authenticate_time,
      authenticate_number,
      authenticate_failed_reason,
    },
  }) => ({
    mchid,
    sub_mchid,
    openid,
    authenticate_scene,
    authenticate_source,
    project_name,
    employer_name,
    authenticate_state,
    authenticate_time,
    authenticate_number,
    authenticate_failed_reason,
  })
)
```
