---
title: 获取用户信息（跳转型激活）
description: 如果商家选择跳转激活的投放方式，用户点击开卡跳转至商家H5网页/小程序时，会员组件会在跳转链接activate_url后拼接若干个参数，包括：用户的openid、加密的会员code(encrypt_code)、激活ticket(activate_ticket)。对于其中的activate_ticket，商家可调用当前api，获取用户的开卡信息。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/marketing/membercard_open/chapter4_5.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Marketing.MembercardOpen.ActivateInformations._activate_ticket_.GetHttpMethod {
  export interface RequestConfig extends AxiosRequestConfig {
    activate_ticket: string
  }
  export interface WellformedResponse {
    nickname: string
    head_image_url: string
    user_information: {
      common_field_list: {

        value: string
      }[]
      custom_field_list: {
        name: string
        value: string
        value_list: string[]
      }[]
    }
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing.MembercardOpen.ActivateInformations {
  export interface _activate_ticket_ {
    /**
     * 获取用户信息（跳转型激活）API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/marketing/membercard_open/chapter4_5.shtml
     */
    get(config: _activate_ticket_.GetHttpMethod.RequestConfig): AxiosPromise<_activate_ticket_.GetHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing.MembercardOpen {
  export interface ActivateInformations {
    _activate_ticket_: ActivateInformations._activate_ticket_
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing {
  export interface MembercardOpen {
    activateInformations: MembercardOpen.ActivateInformations
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface Marketing {
    membercardOpen: Marketing.MembercardOpen
  }
}
namespace WeChatPay.OpenAPI {
  export interface V3 {
    marketing: V3.Marketing
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
wxpay.v3.marketing.membercardOpen.activateInformations._activate_ticket_.get({
//                                                                       ^^^
  activate_ticket,
})
.then(
  ({ // [!code hl:11]
    data: {
      nickname,
      head_image_url,
      user_information,
    },
  }) => ({
    nickname,
    head_image_url,
    user_information,
  })
)
```
