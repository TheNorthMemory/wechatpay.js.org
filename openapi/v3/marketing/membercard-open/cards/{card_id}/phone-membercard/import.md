---
title: 根据手机号导入用户会员卡
description: 商户可通过加密后的用户手机号，将存量会员通过接口导入至微信侧后台。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Marketing.MembercardOpen.Cards._card_id_.PhoneMembercard.Import.PostHttpMethod {
  export interface JsonDataRequest {
    encrypted_phone_number: string
    code: string
    out_request_no: string
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
    card_id: string
    headers: {
      'Wechatpay-Serial': string
    }
  }
  export interface WellformedResponse {
    code: string
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing.MembercardOpen.Cards._card_id_.PhoneMembercard {
  export interface Import {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/marketing/membercard_open/chapter3_14.shtml
     */
    (data: Import.PostHttpMethod.JsonDataRequest, config: Import.PostHttpMethod.RequestConfig): AxiosPromise<Import.PostHttpMethod.WellformedResponse>
    /**
     * 根据手机号导入用户会员卡API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/marketing/membercard_open/chapter3_14.shtml
     */
    post(data: Import.PostHttpMethod.JsonDataRequest, config: Import.PostHttpMethod.RequestConfig): AxiosPromise<Import.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing.MembercardOpen.Cards._card_id_ {
  export interface PhoneMembercard {
    import: PhoneMembercard.Import
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing.MembercardOpen.Cards {
  export interface _card_id_ {
    phoneMembercard: _card_id_.PhoneMembercard
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
wxpay.v3.marketing.membercardOpen.cards._card_id_.phoneMembercard.import.post({
//                                                                       ^^^^
  encrypted_phone_number,
  code,
  out_request_no,
}, { card_id, headers, })
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

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4012550535) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012727629)
