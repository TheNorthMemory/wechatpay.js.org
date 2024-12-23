---
title: 查询投诉协商历史
description: 商户可通过调用此接口，查询指定投诉的用户商户协商历史，以分页输出查询结果，方便商户根据处理历史来制定后续处理方案。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/docs/partner/apis/consumer-complaint/complaints/query-negotiation-history-v2.html) [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3_partner/apis/chapter10_2_12.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.MerchantService.ComplaintsV2._complaint_id_.NegotiationHistorys.GetHttpMethod {
  export interface RequestConfig extends AxiosRequestConfig {
    complaint_id: string
    params: {
      limit: number
      offset: number
    }
  }
  export interface WellformedResponse {
    data: {
      complaint_media_list: {
        media_type: 'USER_COMPLAINT_IMAGE' | 'OPERATION_IMAGE'
        media_url: string[]
      }
      log_id: string
      operator: string
      operate_time: string | Date
      operate_type: string
      operate_details: string
      image_list: string[]
      user_appy_platform_service_reason: string
      user_appy_platform_service_reason_description: string
    }[]
    limit: number
    offset: number
    total_count: number
  }
}
namespace WeChatPay.OpenAPI.V3.MerchantService.ComplaintsV2._complaint_id_ {
  export interface NegotiationHistorys {
    /**
     * 查询投诉协商历史API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3_partner/apis/chapter10_2_12.shtml
     */
    get(config: NegotiationHistorys.GetHttpMethod.RequestConfig): AxiosPromise<NegotiationHistorys.GetHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.MerchantService.ComplaintsV2 {
  export interface _complaint_id_ {
    negotiationHistorys: _complaint_id_.NegotiationHistorys
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
wxpay.v3.merchantService.complaintsV2._complaint_id_.negotiationHistorys.get({
//                                                                       ^^^
  complaint_id,
  params,
})
.then(
  ({ // [!code hl:13]
    data: {
      data,
      limit,
      offset,
      total_count,
    },
  }) => ({
    data,
    limit,
    offset,
    total_count,
  })
)
```
