---
title: 导入加密手机号提醒会员领卡
description: 如商户有存量注册会员未领取会员卡，可导入最近一年在品牌内有微信支付交易的活跃会员手机号（需加密后才能导入），导入后微信将通过卡包提醒用户将会员卡领取到卡包。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/marketing/membercard_open/chapter4_1.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Marketing.MembercardOpen.PhonenumberMember.Import.PostHttpMethod {
  export interface JsonDataRequest {
    member_information: {
      card_id: string
      code: string
      membership_number: string
      registration_time: string | Date
    }
    encrypted_phone_number: string
    outer_str: string
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
    headers: {
      'Wechatpay-Serial': string
    }
  }
  export interface WellformedResponse {
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing.MembercardOpen.PhonenumberMember {
  export interface Import {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/marketing/membercard_open/chapter4_1.shtml
     */
    (data: Import.PostHttpMethod.JsonDataRequest, config: Import.PostHttpMethod.RequestConfig): AxiosPromise<Import.PostHttpMethod.WellformedResponse>
    /**
     * 导入加密手机号提醒会员领卡API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/marketing/membercard_open/chapter4_1.shtml
     */
    post(data: Import.PostHttpMethod.JsonDataRequest, config: Import.PostHttpMethod.RequestConfig): AxiosPromise<Import.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing.MembercardOpen {
  export interface PhonenumberMember {
    import: PhonenumberMember.Import
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
wxpay.v3.marketing.membercardOpen.phonenumberMember.import.post({
//                                                         ^^^^
  member_information,
  encrypted_phone_number,
  outer_str,
}, { headers, })
.then(({ status }) => status === 204) // [!code hl]
```
