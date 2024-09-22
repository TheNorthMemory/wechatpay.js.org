---
title: 查询投诉单列表
description: 商户可通过调用此接口，查询指定时间段的所有用户投诉信息，以分页输出查询结果。对于服务商、渠道商，可通过调用此接口，查询指定特约商户号下的投诉信息，若不指定，则查询的是名下所有特约商户投诉信息。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/docs/partner/apis/consumer-complaint/complaints/list-complaints-v2.html) [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3_partner/apis/chapter10_2_11.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.MerchantService.ComplaintsV2.GetHttpMethod {
  export interface RequestConfig extends AxiosRequestConfig {
    params: {
      limit: number
      offset: number
      begin_date: string
      end_date: string
      complainted_mchid: string
    }
  }
  export interface WellformedResponse {
    data: {
      complaint_id: string
      complaint_time: string
      complaint_detail: string
      complaint_state: string
      complainted_mchid: string
      payer_phone: string
      complaint_order_info: {
        transaction_id: string
        out_trade_no: string
        amount: number
      }[]
      service_order_info: {
        order_id: string
        out_order_no: string
        state: string
      }[]
      complaint_media_list: {
        media_type: string
      }[]
      complaint_full_refunded: boolean
      incoming_user_response: boolean
      problem_description: string
      user_complaint_times: number
      problem_type: string
      apply_refund_amount: number
      user_tag_list: []
      additional_info: {
        type: string
        share_power_info: {
          return_time: string
          return_address_info?: {
            return_address: string
            longitude: string
            latitude: string
          }
        }
        is_returned_to_same_machine: boolean
      }
      in_platform_service: boolean
      need_immediate_service: boolean
    }[]
    limit: number
    offset: number
    total_count: number
  }
}
namespace WeChatPay.OpenAPI.V3.MerchantService {
  export interface ComplaintsV2 {
    /**
     * 查询投诉单列表API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3_partner/apis/chapter10_2_11.shtml
     */
    get(config: ComplaintsV2.GetHttpMethod.RequestConfig): AxiosPromise<ComplaintsV2.GetHttpMethod.WellformedResponse>
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
wxpay.v3.merchantService.complaintsV2.get({
//                                    ^^^
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
