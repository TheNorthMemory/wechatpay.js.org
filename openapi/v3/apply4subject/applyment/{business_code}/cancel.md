---
title: 撤销商户开户意愿申请单
description: 服务商提交申请单后需要修改信息时，或者申请单审核结果为”已驳回“时服务商要修改申请材料时，均需要先调用撤销申请单接口。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/applysubject/chapter5_2.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Apply4subject.Applyment._business_code_.Cancel.PostHttpMethod {
  export interface JsonDataRequest {
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
    business_code: string
  }
  export interface WellformedResponse {
  }
}
namespace WeChatPay.OpenAPI.V3.Apply4subject.Applyment._business_code_ {
  export interface Cancel {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/applysubject/chapter5_2.shtml
     */
    (data: Cancel.PostHttpMethod.JsonDataRequest, config: Cancel.PostHttpMethod.RequestConfig): AxiosPromise<Cancel.PostHttpMethod.WellformedResponse>
    /**
     * 撤销商户开户意愿申请单API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/applysubject/chapter5_2.shtml
     */
    post(data: Cancel.PostHttpMethod.JsonDataRequest, config: Cancel.PostHttpMethod.RequestConfig): AxiosPromise<Cancel.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Apply4subject.Applyment {
  export interface _business_code_ {
    cancel: _business_code_.Cancel
  }
}
namespace WeChatPay.OpenAPI.V3.Apply4subject {
  export interface Applyment {
    _business_code_: Applyment._business_code_
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface Apply4subject {
    applyment: Apply4subject.Applyment
  }
}
namespace WeChatPay.OpenAPI {
  export interface V3 {
    apply4subject: V3.Apply4subject
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
wxpay.v3.apply4subject.applyment._business_code_.cancel.post({}, { business_code })
//                                                      ^^^^
.then(({ status, }) => status === 204)  // [!code hl]
```
