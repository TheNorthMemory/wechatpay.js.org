---
title: 通过申请单号查询申请状态
description: 通过申请单号查询申请状态
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Applyment4sub.Applyment.Applyment_id._applyment_id_.GetHttpMethod {
  export interface RequestConfig extends AxiosRequestConfig {
    applyment_id: number
  }
  export interface WellformedResponse {
    business_code: string
    applyment_id: number
    sub_mchid: string
    sign_url: string
    applyment_state: string
    applyment_state_msg: string
    audit_detail: {
      field: string
      field_name: string
      reject_reason: string
    }[]
  }
}
namespace WeChatPay.OpenAPI.V3.Applyment4sub.Applyment.Applyment_id {
  export interface _applyment_id_ {
    /**
     * 通过申请单号查询申请状态
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/tool/applyment4sub/chapter3_2.shtml
     */
    get(config: _applyment_id_.GetHttpMethod.RequestConfig): AxiosPromise<_applyment_id_.GetHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Applyment4sub.Applyment {
  export interface Applyment_id {
    _applyment_id_: Applyment_id._applyment_id_
  }
}
namespace WeChatPay.OpenAPI.V3.Applyment4sub {
  export interface Applyment {
    applyment_id: Applyment.Applyment_id
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface Applyment4sub {
    applyment: Applyment4sub.Applyment
  }
}
namespace WeChatPay.OpenAPI {
  export interface V3 {
    applyment4sub: V3.Applyment4sub
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
wxpay.v3.applyment4sub.applyment.applyment_id._applyment_id_.get({
//                                                           ^^^
  applyment_id,
})
.then(
  ({ // [!code hl:19]
    data: {
      business_code,
      applyment_id,
      sub_mchid,
      sign_url,
      applyment_state,
      applyment_state_msg,
      audit_detail,
    },
  }) => ({
    business_code,
    applyment_id,
    sub_mchid,
    sign_url,
    applyment_state,
    applyment_state_msg,
    audit_detail,
  })
)
```

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012697052) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012721630)
