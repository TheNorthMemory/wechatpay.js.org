---
title: 查询微工卡授权关系
description: 查询商户和微信支付用户的微工卡授权关系
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3_partner/Offline/apis/chapter4_1_2.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.PayrollCard.Relations._openid_.GetHttpMethod {
  export interface RequestConfig extends AxiosRequestConfig {
    openid: string
    params: {
      sub_mchid: string
      appid: string
      sub_appid: string
    }
  }
  export interface WellformedResponse {
    openid: string
    mchid: string
    sub_mchid: string
    authorize_state: string
    authorize_time: string
    deauthorize_time: string
  }
}
namespace WeChatPay.OpenAPI.V3.PayrollCard.Relations {
  export interface _openid_ {
    /**
     * 查询微工卡授权关系API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3_partner/Offline/apis/chapter4_1_2.shtml
     */
    get(config: _openid_.GetHttpMethod.RequestConfig): AxiosPromise<_openid_.GetHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.PayrollCard {
  export interface Relations {
    _openid_: Relations._openid_
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface PayrollCard {
    relations: PayrollCard.Relations
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
wxpay.v3.payrollCard.relations._openid_.get({
//                                      ^^^
  openid,
  params,
})
.then(
  ({ // [!code hl:17]
    data: {
      openid,
      mchid,
      sub_mchid,
      authorize_state,
      authorize_time,
      deauthorize_time,
    },
  }) => ({
    openid,
    mchid,
    sub_mchid,
    authorize_state,
    authorize_time,
    deauthorize_time,
  })
)
```
