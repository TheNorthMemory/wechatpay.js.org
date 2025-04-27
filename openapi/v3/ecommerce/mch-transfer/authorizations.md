---
title: 申请二级商户商家转账授权
description: 申请二级商户商家转账授权。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Ecommerce.MchTransfer.Authorizations.PostHttpMethod {
  export interface JsonDataRequest {
    sub_mchid: string
    agreement_list: {
      agreement_code: string
      agreement_version: string
      sign_organization: string
      sign_time: string
    }[]
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
  }
  export interface WellformedResponse {
    sub_mchid: string
    authorization_state: string
    accept_time: string
    authorize_time: string
  }
}
namespace WeChatPay.OpenAPI.V3.Ecommerce.MchTransfer {
  export interface Authorizations {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/docs/partner/apis/platsolution-mch-transfer/authorization/create-authorization.html
     */
    (data: Authorizations.PostHttpMethod.JsonDataRequest, config?: Authorizations.PostHttpMethod.RequestConfig): AxiosPromise<Authorizations.PostHttpMethod.WellformedResponse>
    /**
     * 申请二级商户商家转账授权
     * @link https://pay.weixin.qq.com/docs/partner/apis/platsolution-mch-transfer/authorization/create-authorization.html
     */
    post(data: Authorizations.PostHttpMethod.JsonDataRequest, config?: Authorizations.PostHttpMethod.RequestConfig): AxiosPromise<Authorizations.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Ecommerce {
  export interface MchTransfer {
    authorizations: MchTransfer.Authorizations
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface Ecommerce {
    mchTransfer: Ecommerce.MchTransfer
  }
}
namespace WeChatPay.OpenAPI {
  export interface V3 {
    ecommerce: V3.Ecommerce
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
wxpay.v3.ecommerce.mchTransfer.authorizations.post({
//                                            ^^^^
  sub_mchid,
  agreement_list,
})
.then(
  ({ // [!code hl:13]
    data: {
      sub_mchid,
      authorization_state,
      accept_time,
      authorize_time,
    },
  }) => ({
    sub_mchid,
    authorization_state,
    accept_time,
    authorize_time,
  })
)
```

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4013504208)
