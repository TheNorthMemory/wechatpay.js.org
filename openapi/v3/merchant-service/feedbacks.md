---
title: 商户反馈
description: 商户上传反馈处理结果的接口。 包括商户反馈类型、商户反馈内容以及图片凭证。 其中上传图片凭证需首先调用“商户上传反馈图片”接口，得到图片id，再将id填入请求。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/tool/merchant-service/chapter3_6.shtml)

::: danger :no_entry_sign: {.im-deprecated}

本接口服务已于 `2020.11.27` (北京时间)下线，文档仅做留存参考。
:::

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.MerchantService.Feedbacks.PostHttpMethod {
  export interface JsonDataRequest {
    transaction_id: string
    complainted_mchid: string
    feedback_type: number
    feedback_content: string
    feedback_images: string[]
    launch_confirm_process: boolean
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
  }
  export interface WellformedResponse {
  }
}
namespace WeChatPay.OpenAPI.V3.MerchantService {
  export interface Feedbacks {
    /**
     * shortland
     * @deprecated - since 2021.01.08
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/tool/merchant-service/chapter3_6.shtml
     */
    (data: Feedbacks.PostHttpMethod.JsonDataRequest, config?: Feedbacks.PostHttpMethod.RequestConfig): AxiosPromise<Feedbacks.PostHttpMethod.WellformedResponse>
    /**
     * 商户反馈API
     * @deprecated - since 2021.01.08
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/tool/merchant-service/chapter3_6.shtml
     */
    post(data: Feedbacks.PostHttpMethod.JsonDataRequest, config?: Feedbacks.PostHttpMethod.RequestConfig): AxiosPromise<Feedbacks.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface MerchantService {
    feedbacks: MerchantService.Feedbacks
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
wxpay.v3.merchantService.feedbacks.post({
//                                 ^^^^
  transaction_id,
  complainted_mchid,
  feedback_type,
  feedback_content,
  feedback_images,
  launch_confirm_process,
})
.then(({ status, }) => status === 204) // [!code hl]
```
