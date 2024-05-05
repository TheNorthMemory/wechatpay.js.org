---
title: 加密code解码（跳转型激活）
description: 如果商家选择跳转激活的投放方式，用户点击开卡跳转至商家H5网页/小程序时，会员组件会在跳转链接activate_url后拼接若干个参数，包括：用户的openid、加密的会员code(encrypt_code)、激活ticket(activate_ticket)。对于加密的encrypt_code，商家可调用此api解码接口，获取真实code。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/marketing/membercard_open/chapter4_4.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Marketing.MembercardOpen.Cards._card_id_.DecryptCode.GetHttpMethod {
  export interface RequestConfig extends AxiosRequestConfig {
    card_id: string
    params: {
      encrypt_code: string
    }
  }
  export interface WellformedResponse {
    code: string
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing.MembercardOpen.Cards._card_id_ {
  export interface DecryptCode {
    /**
     * 加密code解码（跳转型激活）API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/marketing/membercard_open/chapter4_4.shtml
     */
    get(config: DecryptCode.GetHttpMethod.RequestConfig): AxiosPromise<DecryptCode.GetHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing.MembercardOpen.Cards {
  export interface _card_id_ {
    decryptCode: _card_id_.DecryptCode
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing.MembercardOpen {
  export interface Cards {
    _card_id_: Cards._card_id_
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing {
  export interface MembercardOpen {
    cards: MembercardOpen.Cards
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
wxpay.v3.marketing.membercardOpen.cards._card_id_.decryptCode.get({
//                                                            ^^^
  card_id,
  params,
})
.then(
  ({ // [!code hl:7]
    data: {
      code,
    },
  }) => ({
    code,
  })
)
```
