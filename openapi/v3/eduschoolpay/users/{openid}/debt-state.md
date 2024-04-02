---
title: 商户查询用户欠款状态
description: 商户通过调用该接口可主动查询微信用户的欠款状态。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/edu/eduschoolpay/chapter4_4.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Eduschoolpay.Users._openid_.DebtState.GetHttpMethod {
  export interface RequestConfig extends AxiosRequestConfig {
    openid: string
  }
  export interface WellformedResponse {
    appid: string
    openid: string
    state: string
    debt_count: number
    update_time: string
  }
}
namespace WeChatPay.OpenAPI.V3.Eduschoolpay.Users._openid_ {
  export interface DebtState {
    /**
     * 商户查询用户欠款状态API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/edu/eduschoolpay/chapter4_4.shtml
     */
    get(config: DebtState.GetHttpMethod.RequestConfig): AxiosPromise<DebtState.GetHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Eduschoolpay.Users {
  export interface _openid_ {
    debtState: _openid_.DebtState
  }
}
namespace WeChatPay.OpenAPI.V3.Eduschoolpay {
  export interface Users {
    _openid_: Users._openid_
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface Eduschoolpay {
    users: Eduschoolpay.Users
  }
}
namespace WeChatPay.OpenAPI {
  export interface V3 {
    eduschoolpay: V3.Eduschoolpay
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
wxpay.v3.eduschoolpay.users._openid_.debtState.get({
//                                             ^^^
  openid,
})
.then(
  ({ // [!code hl:15]
    data: {
      appid,
      openid,
      state,
      debt_count,
      update_time,
    },
  }) => ({
    appid,
    openid,
    state,
    debt_count,
    update_time,
  })
)
```
