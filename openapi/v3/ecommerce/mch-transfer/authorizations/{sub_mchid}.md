---
title: 查询二级商户商家转账授权状态
description: 查询二级商户商家转账授权状态。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Ecommerce.MchTransfer.Authorizations._sub_mchid_.GetHttpMethod {
  export interface RequestConfig extends AxiosRequestConfig {
    sub_mchid: string
  }
  export interface WellformedResponse {
    sub_mchid: string
    authorization_state: string
    authorize_time: string
  }
}
namespace WeChatPay.OpenAPI.V3.Ecommerce.MchTransfer.Authorizations {
  export interface _sub_mchid_ {
    /**
     * 查询二级商户商家转账授权状态
     * @link https://pay.weixin.qq.com/docs/partner/apis/platsolution-mch-transfer/authorization/get-authorization.html
     */
    get(config: _sub_mchid_.GetHttpMethod.RequestConfig): AxiosPromise<_sub_mchid_.GetHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Ecommerce.MchTransfer {
  export interface Authorizations {
    _sub_mchid_: Authorizations._sub_mchid_
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
wxpay.v3.ecommerce.mchTransfer.authorizations._sub_mchid_.get({
//                                                        ^^^
  sub_mchid,
})
.then(
  ({ // [!code hl:11]
    data: {
      sub_mchid,
      authorization_state,
      authorize_time,
    },
  }) => ({
    sub_mchid,
    authorization_state,
    authorize_time,
  })
)
```

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4013504209)
