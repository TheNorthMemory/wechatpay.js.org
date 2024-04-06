---
title: 冲红电子发票
description: 商户对已开具的电子发票进行冲红（开具红票），并将其从微信用户的卡包中删除。商户对已开具的电子发票进行冲红（开具红票），仅在微信支付侧开具的电子发票才允许发起冲红。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/new-tax-control-fapiao/chapter3_9.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.NewTaxControlFapiao.FapiaoApplications._fapiao_apply_id_.Reverse.PostHttpMethod {
  export interface JsonDataRequest {
    sub_mchid: string
    reverse_reason: string
    fapiao_information: {
      fapiao_id: string
      fapiao_code: string
      fapiao_number: string
    }[]
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
    fapiao_apply_id: string
  }
  export interface WellformedResponse {
  }
}
namespace WeChatPay.OpenAPI.V3.NewTaxControlFapiao.FapiaoApplications._fapiao_apply_id_ {
  export interface Reverse {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/new-tax-control-fapiao/chapter3_9.shtml
     */
    (data: Reverse.PostHttpMethod.JsonDataRequest, config: Reverse.PostHttpMethod.RequestConfig): AxiosPromise<Reverse.PostHttpMethod.WellformedResponse>
    /**
     * 冲红电子发票
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/new-tax-control-fapiao/chapter3_9.shtml
     */
    post(data: Reverse.PostHttpMethod.JsonDataRequest, config: Reverse.PostHttpMethod.RequestConfig): AxiosPromise<Reverse.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.NewTaxControlFapiao.FapiaoApplications {
  export interface _fapiao_apply_id_ {
    reverse: _fapiao_apply_id_.Reverse
  }
}
namespace WeChatPay.OpenAPI.V3.NewTaxControlFapiao {
  export interface FapiaoApplications {
    _fapiao_apply_id_: FapiaoApplications._fapiao_apply_id_
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface NewTaxControlFapiao {
    fapiaoApplications: NewTaxControlFapiao.FapiaoApplications
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
wxpay.v3.newTaxControlFapiao.fapiaoApplications._fapiao_apply_id_.reverse.post({
//                                                                        ^^^^
  sub_mchid,
  reverse_reason,
  fapiao_information,
}, { fapiao_apply_id, })
.then(({ status }) => status === 202) // [!code hl]
```
