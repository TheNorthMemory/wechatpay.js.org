---
title: 商家批次单号查询批次单(合作伙伴模式)
description: 服务商可以通过该接口查询转账批次单以及指定状态的转账明细单。
---

# {{ $frontmatter.title }}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3_partner/Offline/apis/chapter4_1_9.shtml) [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/pay/transfer_partner/chapter3_4.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.PartnerTransfer.Batches.OutBatchNo._out_batch_no_.GetHttpMethod {
  export interface RequestConfig extends AxiosRequestConfig {
    out_batch_no: string
    params: {
      need_query_detail: boolean
      offset: number
      limit: number
      detail_status: string
    }
  }
  export interface WellformedResponse {
    sp_mchid: string
    sub_mchid: string
    out_batch_no: string
    batch_id: string
    sub_appid: string
    batch_status: string
    batch_type: string
    authorization_type: string
    batch_name: string
    batch_remark: string
    close_reason: string
    total_amount: number
    total_num: number
    create_time: string
    update_time: string
    success_amount: number
    success_num: number
    fail_amount: number
    fail_num: number
    transfer_detail_list: {
      detail_id: string
      out_detail_no: string
      detail_status: string
    }[]
    sp_appid: string
    transfer_purpose: string
    transfer_scene: string
  }
}
namespace WeChatPay.OpenAPI.V3.PartnerTransfer.Batches.OutBatchNo {
  export interface _out_batch_no_ {
    /**
     * 商家批次单号查询批次单API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/pay/transfer_partner/chapter3_4.shtml
     */
    get(config: _out_batch_no_.GetHttpMethod.RequestConfig): AxiosPromise<_out_batch_no_.GetHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.PartnerTransfer.Batches {
  export interface OutBatchNo {
    _out_batch_no_: OutBatchNo._out_batch_no_
  }
}
namespace WeChatPay.OpenAPI.V3.PartnerTransfer {
  export interface Batches {
    outBatchNo: Batches.OutBatchNo
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface PartnerTransfer {
    batches: PartnerTransfer.Batches
  }
}
namespace WeChatPay.OpenAPI {
  export interface V3 {
    partnerTransfer: V3.PartnerTransfer
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
wxpay.v3.partnerTransfer.batches.outBatchNo._out_batch_no_.get({
//                                                         ^^^
  out_batch_no,
  params,
})
.then(
  ({ // [!code hl:51]
    data: {
      sp_mchid,
      sub_mchid,
      out_batch_no,
      batch_id,
      sub_appid,
      batch_status,
      batch_type,
      authorization_type,
      batch_name,
      batch_remark,
      close_reason,
      total_amount,
      total_num,
      create_time,
      update_time,
      success_amount,
      success_num,
      fail_amount,
      fail_num,
      transfer_detail_list,
      sp_appid,
      transfer_purpose,
      transfer_scene,
    },
  }) => ({
    sp_mchid,
    sub_mchid,
    out_batch_no,
    batch_id,
    sub_appid,
    batch_status,
    batch_type,
    authorization_type,
    batch_name,
    batch_remark,
    close_reason,
    total_amount,
    total_num,
    create_time,
    update_time,
    success_amount,
    success_num,
    fail_amount,
    fail_num,
    transfer_detail_list,
    sp_appid,
    transfer_purpose,
    transfer_scene,
  })
)
```
