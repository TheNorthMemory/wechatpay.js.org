---
title: 发送扣款预通知
description: 给用户发送扣款预通知
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.EduPapay.UserNotifications._contract_id_.Send.PostHttpMethod {
  export interface JsonDataRequest {
    appid: string
    sub_mchid: string
    sub_appid: string
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
    contract_id: string
  }
  export interface WellformedResponse {
  }
}
namespace WeChatPay.OpenAPI.V3.EduPapay.UserNotifications._contract_id_ {
  export interface Send {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/Offline/apis/chapter5_2_6.shtml
     */
    (data: Send.PostHttpMethod.JsonDataRequest, config: Send.PostHttpMethod.RequestConfig): AxiosPromise<Send.PostHttpMethod.WellformedResponse>
    /**
     * 发送扣款预通知API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/Offline/apis/chapter5_2_6.shtml
     */
    post(data: Send.PostHttpMethod.JsonDataRequest, config: Send.PostHttpMethod.RequestConfig): AxiosPromise<Send.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.EduPapay.UserNotifications {
  export interface _contract_id_ {
    send: _contract_id_.Send
  }
}
namespace WeChatPay.OpenAPI.V3.EduPapay {
  export interface UserNotifications {
    _contract_id_: UserNotifications._contract_id_
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface EduPapay {
    userNotifications: EduPapay.UserNotifications
  }
}
namespace WeChatPay.OpenAPI {
  export interface V3 {
    eduPapay: V3.EduPapay
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
wxpay.v3.eduPapay.userNotifications._contract_id_.send.post({
//                                                     ^^^^
  appid,
  sub_mchid,
  sub_appid,
}, { contract_id })
.then(({ status, }) => status === 204) // [!code hl]
```

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4012524814) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012855408)
