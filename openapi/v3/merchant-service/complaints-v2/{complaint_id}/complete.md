---
title: 反馈处理完成
description: 商户可通过调用此接口，反馈投诉单已处理完成。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/docs/partner/apis/consumer-complaint/complaints/complete-complaint-v2.html) [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3_partner/apis/chapter10_2_15.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.MerchantService.ComplaintsV2._complaint_id_.Complete.PostHttpMethod {
  export interface JsonDataRequest {
    complainted_mchid: string
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
    complaint_id: string
  }
  export interface WellformedResponse {
  }
}
namespace WeChatPay.OpenAPI.V3.MerchantService.ComplaintsV2._complaint_id_ {
  export interface Complete {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3_partner/apis/chapter10_2_15.shtml
     */
    (data: Complete.PostHttpMethod.JsonDataRequest, config: Complete.PostHttpMethod.RequestConfig): AxiosPromise<Complete.PostHttpMethod.WellformedResponse>
    /**
     * 反馈处理完成API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3_partner/apis/chapter10_2_15.shtml
     */
    post(data: Complete.PostHttpMethod.JsonDataRequest, config: Complete.PostHttpMethod.RequestConfig): AxiosPromise<Complete.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.MerchantService.ComplaintsV2 {
  export interface _complaint_id_ {
    complete: _complaint_id_.Complete
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
wxpay.v3.merchantService.complaintsV2._complaint_id_.complete.post({
//                                                            ^^^^
  complainted_mchid,
})
.then(({ status, }) => status === 204) // [!code hl]
```
