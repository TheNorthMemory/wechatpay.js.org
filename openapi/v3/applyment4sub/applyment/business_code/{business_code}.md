---
title: 通过业务申请编号查询申请状态
description: 通过业务申请编号查询申请状态
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Applyment4sub.Applyment.Business_code._business_code_.GetHttpMethod {
  export interface RequestConfig extends AxiosRequestConfig {
    business_code: string
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
namespace WeChatPay.OpenAPI.V3.Applyment4sub.Applyment.Business_code {
  export interface _business_code_ {
    /**
     * 通过业务申请编号查询申请状态
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/tool/applyment4sub/chapter3_2.shtml
     */
    get(config: _business_code_.GetHttpMethod.RequestConfig): AxiosPromise<_business_code_.GetHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Applyment4sub.Applyment {
  export interface Business_code {
    _business_code_: Business_code._business_code_
  }
}
namespace WeChatPay.OpenAPI.V3.Applyment4sub {
  export interface Applyment {
    business_code: Applyment.Business_code
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
wxpay.v3.applyment4sub.applyment.business_code._business_code_.get({
//                                                             ^^^
  business_code,
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

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012697168) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012721709)
