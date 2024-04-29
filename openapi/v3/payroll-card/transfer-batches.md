---
title: 发起批量转账(微工卡)
description: 服务商可以通过该接口，批量向用户选择的收款账户转账。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3_partner/Offline/apis/chapter4_1_6.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.PayrollCard.TransferBatches.PostHttpMethod {
  export interface JsonDataRequest {
    sub_mchid: string
    sub_appid: string
    authorization_type: 'INFORMATION_AUTHORIZATION_TYPE' | 'FUND_AUTHORIZATION_TYPE' | 'INFORMATION_AND_FUND_AUTHORIZATION_TYPE'
    out_batch_no: string
    batch_name: string
    batch_remark: string
    total_amount: number
    total_num: number
    transfer_detail_list: {
      out_detail_no: string
      transfer_amount: number
      transfer_remark: string
      openid: string
      user_name: string
    }[]
    sp_appid: string
    employment_type: 'LONG_TERM_EMPLOYMENT' | 'SHORT_TERM_EMPLOYMENT' | 'COOPERATION_EMPLOYMENT'
    employment_scene: 'LOGISTICS' | 'MANUFACTURING' | 'HOTEL' | 'CATERING' | 'EVENT' | 'RETAIL' | 'OTHERS'
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
    headers: {
      'Wechatpay-Serial': string
    }
  }
  export interface WellformedResponse {
    out_batch_no: string
    batch_id: string
    create_time: string
  }
}
namespace WeChatPay.OpenAPI.V3.PayrollCard {
  export interface TransferBatches {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3_partner/Offline/apis/chapter4_1_6.shtml
     */
    (data: TransferBatches.PostHttpMethod.JsonDataRequest, config: TransferBatches.PostHttpMethod.RequestConfig): AxiosPromise<TransferBatches.PostHttpMethod.WellformedResponse>
    /**
     * 发起批量转账API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3_partner/Offline/apis/chapter4_1_6.shtml
     */
    post(data: TransferBatches.PostHttpMethod.JsonDataRequest, config: TransferBatches.PostHttpMethod.RequestConfig): AxiosPromise<TransferBatches.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface PayrollCard {
    transferBatches: PayrollCard.TransferBatches
  }
}
namespace WeChatPay.OpenAPI {
  export interface V3 {
    payrollCard: V3.PayrollCard
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
wxpay.v3.payrollCard.transferBatches.post({
//                                   ^^^^
  sub_mchid,
  sub_appid,
  authorization_type,
  out_batch_no,
  batch_name,
  batch_remark,
  total_amount,
  total_num,
  transfer_detail_list,
  sp_appid,
  employment_type,
  employment_scene,
}, { headers, })
.then(
  ({ // [!code hl:11]
    data: {
      out_batch_no,
      batch_id,
      create_time,
    },
  }) => ({
    out_batch_no,
    batch_id,
    create_time,
  })
)
```
