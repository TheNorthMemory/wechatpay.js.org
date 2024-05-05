---
title: 通过加密手机号查询会员领卡状态
description: 商户可查询导入成功的加密手机号是否已被用户领取。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/marketing/membercard_open/chapter4_2.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Marketing.MembercardOpen.PhonenumberMember.Search.GetHttpMethod {
  export interface RequestConfig extends AxiosRequestConfig {
    params: {
      card_id: string
      encrypted_phone_number: string
    }
    headers: {
      'Wechatpay-Serial': string
    }
  }
  export interface WellformedResponse {
    user_card_information: {
      code: string
      openid: string
      unionid: string
      receive_time: string | Date
      card_appid: string
      card_id: string
    }
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing.MembercardOpen.PhonenumberMember {
  export interface Search {
    /**
     * 通过加密手机号查询会员领卡状态API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/marketing/membercard_open/chapter4_2.shtml
     */
    get(config: Search.GetHttpMethod.RequestConfig): AxiosPromise<Search.GetHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing.MembercardOpen {
  export interface PhonenumberMember {
    search: PhonenumberMember.Search
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing {
  export interface MembercardOpen {
    phonenumberMember: MembercardOpen.PhonenumberMember
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
wxpay.v3.marketing.membercardOpen.phonenumberMember.search.get({
//                                                         ^^^
  params,
  headers,
})
.then(
  ({ // [!code hl:7]
    data: {
      user_card_information,
    },
  }) => ({
    user_card_information,
  })
)
```
