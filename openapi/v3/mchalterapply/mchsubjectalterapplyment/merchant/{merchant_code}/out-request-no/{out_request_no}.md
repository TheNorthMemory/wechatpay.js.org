---
title: 查询申请单状态-使用业务单号
description: 使用业务单号查询申请单状态
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3_partner/Offline/apis/chapter11_3_3.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Mchalterapply.Mchsubjectalterapplyment.Merchant._merchant_code_.OutRequestNo._out_request_no_.GetHttpMethod {
  export interface RequestConfig extends AxiosRequestConfig {
    merchant_code: string
    out_request_no: string
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
namespace WeChatPay.OpenAPI.V3.Mchalterapply.Mchsubjectalterapplyment.Merchant._merchant_code_.OutRequestNo {
  export interface _out_request_no_ {
    /**
     * 查询申请单状态-使用业务单号
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3_partner/Offline/apis/chapter11_3_3.shtml
     */
    get(config: _out_request_no_.GetHttpMethod.RequestConfig): AxiosPromise<_out_request_no_.GetHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Mchalterapply.Mchsubjectalterapplyment.Merchant._merchant_code_ {
  export interface OutRequestNo {
    _out_request_no_: OutRequestNo._out_request_no_
  }
}
namespace WeChatPay.OpenAPI.V3.Mchalterapply.Mchsubjectalterapplyment.Merchant {
  export interface _merchant_code_ {
    outRequestNo: _merchant_code_.OutRequestNo
  }
}
namespace WeChatPay.OpenAPI.V3.Mchalterapply.Mchsubjectalterapplyment {
  export interface Merchant {
    _merchant_code_: Merchant._merchant_code_
  }
}
namespace WeChatPay.OpenAPI.V3.Mchalterapply {
  export interface Mchsubjectalterapplyment {
    merchant: Mchsubjectalterapplyment.Merchant
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
wxpay.v3.mchalterapply.mchsubjectalterapplyment.merchant._merchant_code_.outRequestNo._out_request_no_.get({
//                                                                                                     ^^^
  merchant_code,
  out_request_no,
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
