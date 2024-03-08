---
title: 更新退款审批结果
description: 商户可通过调用此接口，更新“申请退款”单据的退款审批结果。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/apis/chapter10_2_19.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.MerchantService.ComplaintsV2._complaint_id_.UpdateRefundProgress.PostHttpMethod {
  export interface JsonDataRequest {
    action: 'REJECT' | 'APPROVE'
    launch_refund_day: number
    reject_reason: string
    reject_media_list: string[]
    remark: string
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
    complaint_id: string
  }
  export interface WellformedResponse {
  }
}
namespace WeChatPay.OpenAPI.V3.MerchantService.ComplaintsV2._complaint_id_ {
  export interface UpdateRefundProgress {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/apis/chapter10_2_19.shtml
     */
    (data: UpdateRefundProgress.PostHttpMethod.JsonDataRequest, config?: UpdateRefundProgress.PostHttpMethod.RequestConfig): AxiosPromise<UpdateRefundProgress.PostHttpMethod.WellformedResponse>
    /**
     * 更新退款审批结果API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/apis/chapter10_2_19.shtml
     */
    post(data: UpdateRefundProgress.PostHttpMethod.JsonDataRequest, config?: UpdateRefundProgress.PostHttpMethod.RequestConfig): AxiosPromise<UpdateRefundProgress.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.MerchantService.ComplaintsV2 {
  export interface _complaint_id_ {
    updateRefundProgress: _complaint_id_.UpdateRefundProgress
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
wxpay.v3.merchantService.complaintsV2._complaint_id_.updateRefundProgress.post({
//                                                                        ^^^^
  complaint_id,
  action,
  launch_refund_day,
  reject_reason,
  reject_media_list,
  remark,
}, { complaint_id })
.then(({ status, }) => status === 204) // [!code hl]
```
