---
title: 检查子商户开票功能状态
description: 服务商检查子商户的电子发票功能状态是否正常，若商户已经开通API开票功能并已对服务商授权，则返回成功。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/new-tax-control-fapiao/chapter3_1.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.NewTaxControlFapiao.Merchant._sub_mchid_.Check.PostHttpMethod {
  export interface JsonDataRequest {
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
    sub_mchid: string
  }
  export interface WellformedResponse {
  }
}
namespace WeChatPay.OpenAPI.V3.NewTaxControlFapiao.Merchant._sub_mchid_ {
  export interface Check {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/new-tax-control-fapiao/chapter3_1.shtml
     */
    (data: Check.PostHttpMethod.JsonDataRequest, config: Check.PostHttpMethod.RequestConfig): AxiosPromise<Check.PostHttpMethod.WellformedResponse>
    /**
     * 检查子商户开票功能状态
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/new-tax-control-fapiao/chapter3_1.shtml
     */
    post(data: Check.PostHttpMethod.JsonDataRequest, config: Check.PostHttpMethod.RequestConfig): AxiosPromise<Check.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.NewTaxControlFapiao.Merchant {
  export interface _sub_mchid_ {
    check: _sub_mchid_.Check
  }
}
namespace WeChatPay.OpenAPI.V3.NewTaxControlFapiao {
  export interface Merchant {
    _sub_mchid_: Merchant._sub_mchid_
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface NewTaxControlFapiao {
    merchant: NewTaxControlFapiao.Merchant
  }
}
namespace WeChatPay.OpenAPI {
  export interface V3 {
    newTaxControlFapiao: V3.NewTaxControlFapiao
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
wxpay.v3.newTaxControlFapiao.merchant._sub_mchid_.check.post({}, { sub_mchid })
//                                                      ^^^^
.then(({ status }) => status === 204) // [!code hl]
```
