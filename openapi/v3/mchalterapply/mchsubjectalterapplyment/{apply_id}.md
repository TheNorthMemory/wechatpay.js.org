---
title: 查询资料变更申请单状态-使用申请单号
description: 使用申请单号查询申请单状态
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3_partner/Offline/apis/chapter11_3_2.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Mchalterapply.Mchsubjectalterapplyment._apply_id_.GetHttpMethod {
  export interface RequestConfig extends AxiosRequestConfig {
    apply_id: string
  }
  export interface WellformedResponse {
    merchant_code: string
    apply_id: string
    out_request_no: string
    state: string
    audit_reject_reason: string
    audit_reject_detail: {
      param_name: string
      reject_reason: string
    }[]
  }
}
namespace WeChatPay.OpenAPI.V3.Mchalterapply.Mchsubjectalterapplyment {
  export interface _apply_id_ {
    /**
     * 查询资料变更申请单状态-使用申请单号
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3_partner/Offline/apis/chapter11_3_2.shtml
     */
    get(config: _apply_id_.GetHttpMethod.RequestConfig): AxiosPromise<_apply_id_.GetHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Mchalterapply {
  export interface Mchsubjectalterapplyment {
    _apply_id_: Mchsubjectalterapplyment._apply_id_
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface Mchalterapply {
    mchsubjectalterapplyment: Mchalterapply.Mchsubjectalterapplyment
  }
}
namespace WeChatPay.OpenAPI {
  export interface V3 {
    mchalterapply: V3.Mchalterapply
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
wxpay.v3.mchalterapply.mchsubjectalterapplyment._apply_id_.get({
//                                                         ^^^
  apply_id,
})
.then(
  ({ // [!code hl:17]
    data: {
      merchant_code,
      apply_id,
      out_request_no,
      state,
      audit_reject_reason,
      audit_reject_detail,
    },
  }) => ({
    merchant_code,
    apply_id,
    out_request_no,
    state,
    audit_reject_reason,
    audit_reject_detail,
  })
)
```
