---
title: 预签约
description: 商户调用该接口可获取预签约码（presign_token），预签约码对应用户一次的签约信息，之后用户可以从商户小程序跳转到微信签约小程序时使用该预签约码进行签约。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Eduschoolpay.Contracts.Presign.PostHttpMethod {
  export interface JsonDataRequest {
    appid: string
    openid: string
    plan_id: string
    user_id: string
    school_id: string
    out_contract_code: string
    contract_mode: string
    downgrade_default_contract: boolean
    identity: {
      real_name: string
      credential_type: string
      id_card_number: string
    }
    bank_card: {
      bank_card_no: string
      valid_thru: string
      phone: string
      bank_type: string
    }
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
    headers: {
      'Wechatpay-Serial': string
    }
  }
  export interface WellformedResponse {
    presign_token: string
  }
}
namespace WeChatPay.OpenAPI.V3.Eduschoolpay.Contracts {
  export interface Presign {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/edu/eduschoolpay/chapter3_1.shtml
     */
    (data: Presign.PostHttpMethod.JsonDataRequest, config: Presign.PostHttpMethod.RequestConfig): AxiosPromise<Presign.PostHttpMethod.WellformedResponse>
    /**
     * 预签约API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/edu/eduschoolpay/chapter3_1.shtml
     */
    post(data: Presign.PostHttpMethod.JsonDataRequest, config: Presign.PostHttpMethod.RequestConfig): AxiosPromise<Presign.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Eduschoolpay {
  export interface Contracts {
    presign: Contracts.Presign
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface Eduschoolpay {
    contracts: Eduschoolpay.Contracts
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
wxpay.v3.eduschoolpay.contracts.presign.post({
//                                      ^^^^
  appid,
  openid,
  plan_id,
  user_id,
  school_id,
  out_contract_code,
  contract_mode,
  downgrade_default_contract,
  identity,
  bank_card,
}, { headers, })
.then(
  ({ // [!code hl:7]
    data: {
      presign_token,
    },
  }) => ({
    presign_token,
  })
)
```

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012468952)
