---
title: 商圈会员积分服务授权状态查询
description: 通过积分授权查询API，商圈商户可自行查询用户积分功能开通情况
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/docs/merchant/apis/smart-business-circle/user-authorizations/query-user-authorization.html) [官方文档](https://pay.weixin.qq.com/docs/partner/apis/smart-business-circle/user-authorizations/query-user-authorization.html)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Businesscircle.UserAuthorizations._openid_.GetHttpMethod {
  export interface RequestConfig extends AxiosRequestConfig {
    openid: string
    params: {
      sub_mchid?: string
      appid: string
    }
  }
  export interface WellformedResponse {
    openid: string
    authorize_state: string
    authorize_time: string
    deauthorize_time: string
  }
}
namespace WeChatPay.OpenAPI.V3.Businesscircle.UserAuthorizations {
  export interface _openid_ {
    /**
     * 商圈会员积分服务授权状态查询
     * @link https://pay.weixin.qq.com/docs/partner/apis/smart-business-circle/user-authorizations/query-user-authorization.html
     */
    get(config: _openid_.GetHttpMethod.RequestConfig): AxiosPromise<_openid_.GetHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Businesscircle {
  export interface UserAuthorizations {
    _openid_: UserAuthorizations._openid_
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface Businesscircle {
    userAuthorizations: Businesscircle.UserAuthorizations
  }
}
namespace WeChatPay.OpenAPI {
  export interface V3 {
    businesscircle: V3.Businesscircle
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
wxpay.v3.businesscircle.userAuthorizations._openid_.get({
//                                                  ^^^
  openid,
  params,
})
.then(
  ({ // [!code hl:13]
    data: {
      openid,
      authorize_state,
      authorize_time,
      deauthorize_time,
    },
  }) => ({
    openid,
    authorize_state,
    authorize_time,
    deauthorize_time,
  })
)
```
