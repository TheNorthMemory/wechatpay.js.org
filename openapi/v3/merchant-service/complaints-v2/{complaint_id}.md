---
title: 查询投诉单详情
description: 商户可通过调用此接口，查询指定投诉单的用户投诉详情，包含投诉内容、投诉关联订单、投诉人联系方式等信息，方便商户处理投诉。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3_partner/apis/chapter10_2_13.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.MerchantService.ComplaintsV2._complaint_id_.GetHttpMethod {
  export interface RequestConfig extends AxiosRequestConfig {
    complaint_id: string
  }
  export interface WellformedResponse {
    complaint_id: string
    complaint_time: string
    complaint_detail: string
    complaint_state: string
    complainted_mchid: string
    payer_phone: string
    payer_openid: string
    complaint_media_list: {
      media_type: string
    }[]
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
      }
    }
  }
}
namespace WeChatPay.OpenAPI.V3.MerchantService.ComplaintsV2 {
  export interface _complaint_id_ {
    /**
     * 查询投诉单详情API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3_partner/apis/chapter10_2_13.shtml
     */
    get(config: _complaint_id_.GetHttpMethod.RequestConfig): AxiosPromise<_complaint_id_.GetHttpMethod.WellformedResponse>
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
wxpay.v3.merchantService.complaintsV2._complaint_id_.get({
//                                                   ^^^
  complaint_id,
})
.then(
  ({ // [!code hl:41]
    data: {
      complaint_id,
      complaint_time,
      complaint_detail,
      complaint_state,
      complainted_mchid,
      payer_phone,
      payer_openid,
      complaint_media_list,
      complaint_order_info,
      service_order_info,
      complaint_full_refunded,
      incoming_user_response,
      problem_description,
      user_complaint_times,
      problem_type,
      apply_refund_amount,
      user_tag_list,
      additional_info,
    },
  }) => ({
    complaint_id,
    complaint_time,
    complaint_detail,
    complaint_state,
    complainted_mchid,
    payer_phone,
    payer_openid,
    complaint_media_list,
    complaint_order_info,
    service_order_info,
    complaint_full_refunded,
    incoming_user_response,
    problem_description,
    user_complaint_times,
    problem_type,
    apply_refund_amount,
    user_tag_list,
    additional_info,
  })
)
```
