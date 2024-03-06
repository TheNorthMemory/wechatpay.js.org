---
title: 查询用户授权状态
description: 用户申请使用服务时，商户可通过此接口查询用户是否“已授权”本服务。在“已授权”状态下的服务，用户才可以申请使用。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/payscore/chapter3_8.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Payscore.UserServiceState.GetHttpMethod {
  export interface RequestConfig extends AxiosRequestConfig {
    params: {
      appid: string
      service_id: string
      openid: string
    }
  }
  export interface WellformedResponse {
    appid: string
    service_id: string
    openid: string
    use_service_state: string
  }
}
namespace WeChatPay.OpenAPI.V3.Payscore {
  export interface UserServiceState {
    /**
     * 查询用户授权状态API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/payscore/chapter3_8.shtml
     */
    get(config: UserServiceState.GetHttpMethod.RequestConfig): AxiosPromise<UserServiceState.GetHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface Payscore {
    userServiceState: Payscore.UserServiceState
  }
}
namespace WeChatPay.OpenAPI {
  export interface V3 {
    payscore: V3.Payscore
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
wxpay.v3.payscore.userServiceState.get({
//                                 ^^^
  params,
})
.then(
  ({ // [!code hl:13]
    data: {
      appid,
      service_id,
      openid,
      use_service_state,
    },
  }) => ({
    appid,
    service_id,
    openid,
    use_service_state,
  })
)
```
