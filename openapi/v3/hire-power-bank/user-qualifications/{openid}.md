---
title: 查询用户保险订单领取资格
description: 商户通过该接口查询用户保险订单领取资格。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/docs/merchant/apis/hire-power-bank-insurance/insurance-orders/get-qualification-by-open-id.html)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.HirePowerBank.UserQualifications._openid_.GetHttpMethod {
  export interface RequestConfig extends AxiosRequestConfig {
    openid: string
  }
  export interface WellformedResponse {
    qualified_user: boolean
  }
}
namespace WeChatPay.OpenAPI.V3.HirePowerBank.UserQualifications {
  export interface _openid_ {
    /**
     * 查询用户保险订单领取资格
     * @link https://pay.weixin.qq.com/docs/merchant/apis/hire-power-bank-insurance/insurance-orders/get-qualification-by-open-id.html
     */
    get(config: _openid_.GetHttpMethod.RequestConfig): AxiosPromise<_openid_.GetHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.HirePowerBank {
  export interface UserQualifications {
    _openid_: UserQualifications._openid_
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface HirePowerBank {
    userQualifications: HirePowerBank.UserQualifications
  }
}
namespace WeChatPay.OpenAPI {
  export interface V3 {
    hirePowerBank: V3.HirePowerBank
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
wxpay.v3.hirePowerBank.userQualifications._openid_.get({
//                                                 ^^^
  openid,
})
.then(
  ({ // [!code hl:7]
    data: {
      qualified_user,
    },
  }) => ({
    qualified_user,
  })
)
```
