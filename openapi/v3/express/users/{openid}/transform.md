---
title: 用户openid转换
description: 将另一个应用的用户openid转换为指定appid应用下的用户openid
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3_partner/Offline/apis/chapter4_9_1.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Express.Users._openid_.Transform.PostHttpMethod {
  export interface JsonDataRequest {
    appid: string
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
    openid: string
  }
  export interface WellformedResponse {
    openid: string
  }
}
namespace WeChatPay.OpenAPI.V3.Express.Users._openid_ {
  export interface Transform {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3_partner/Offline/apis/chapter4_9_1.shtml
     */
    (data: Transform.PostHttpMethod.JsonDataRequest, config: Transform.PostHttpMethod.RequestConfig): AxiosPromise<Transform.PostHttpMethod.WellformedResponse>
    /**
     * 用户openid转换API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3_partner/Offline/apis/chapter4_9_1.shtml
     */
    post(data: Transform.PostHttpMethod.JsonDataRequest, config: Transform.PostHttpMethod.RequestConfig): AxiosPromise<Transform.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Express.Users {
  export interface _openid_ {
    transform: _openid_.Transform
  }
}
namespace WeChatPay.OpenAPI.V3.Express {
  export interface Users {
    _openid_: Users._openid_
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface Express {
    users: Express.Users
  }
}
namespace WeChatPay.OpenAPI {
  export interface V3 {
    express: V3.Express
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
wxpay.v3.express.users._openid_.transform.post({
//                                        ^^^^
  appid,
}, { openid, })
.then(
  ({ // [!code hl:7]
    data: {
      openid,
    },
  }) => ({
    openid,
  })
)
```
