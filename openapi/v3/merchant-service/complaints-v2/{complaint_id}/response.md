---
title: 提交回复
description: 商户可通过调用此接口，提交回复内容。其中上传图片凭证需首先调用商户上传反馈图片接口，得到图片id，再将id填入请求。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3_partner/apis/chapter10_2_14.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.MerchantService.ComplaintsV2._complaint_id_.Response.PostHttpMethod {
  export interface JsonDataRequest {
    complaint_id: string
    complainted_mchid: string
    response_content: string
    response_images: string[]
    jump_url: string
    jump_url_text: string
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
  }
  export interface WellformedResponse {
  }
}
namespace WeChatPay.OpenAPI.V3.MerchantService.ComplaintsV2._complaint_id_ {
  export interface Response {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3_partner/apis/chapter10_2_14.shtml
     */
    (data: Response.PostHttpMethod.JsonDataRequest, config?: Response.PostHttpMethod.RequestConfig): AxiosPromise<Response.PostHttpMethod.WellformedResponse>
    /**
     * 提交回复API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3_partner/apis/chapter10_2_14.shtml
     */
    post(data: Response.PostHttpMethod.JsonDataRequest, config?: Response.PostHttpMethod.RequestConfig): AxiosPromise<Response.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.MerchantService.ComplaintsV2 {
  export interface _complaint_id_ {
    response: _complaint_id_.Response
  }
}
namespace WeChatPay.OpenAPI.V3.MerchantService {
  export interface ComplaintsV2 {
    _complaint_id_: ComplaintsV2._complaint_id_
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface MerchantService {
    complaintsV2: MerchantService.ComplaintsV2
  }
}
namespace WeChatPay.OpenAPI {
  export interface V3 {
    merchantService: V3.MerchantService
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
wxpay.v3.merchantService.complaintsV2._complaint_id_.response.post({
//                                                            ^^^^
  complaint_id,
  complainted_mchid,
  response_content,
  response_images,
  jump_url,
  jump_url_text,
})
.then(({ status, }) => status === 204) // [!code hl]
```
