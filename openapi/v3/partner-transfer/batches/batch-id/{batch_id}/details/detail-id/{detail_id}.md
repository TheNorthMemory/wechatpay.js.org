---
title: 微信支付明细单号查询明细单(合作伙伴模式)
description: 服务商可以通过该接口查询单笔转账明细单。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3_partner/Offline/apis/chapter4_1_8.shtml) [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/pay/transfer_partner/chapter3_3.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.PartnerTransfer.Batches.BatchId._batch_id_.Details.DetailId._detail_id_.GetHttpMethod {
  export interface RequestConfig extends AxiosRequestConfig {
    batch_id: string
    detail_id: string
  }
  export interface WellformedResponse {
    sp_mchid: string
    out_batch_no: string
    batch_id: string
    appid: string
    out_detail_no: string
    detail_id: string
    detail_status: string
    transfer_amount: number
    transfer_remark: string
    fail_reason: string
    openid: string
    username: string
    initiate_time: string
    update_time: string
    account_type: string
    bank_name: string
    bank_card_number_tail: string
  }
}
namespace WeChatPay.OpenAPI.V3.PartnerTransfer.Batches.BatchId._batch_id_.Details.DetailId {
  export interface _detail_id_ {
    /**
     * 微信支付明细单号查询明细单API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/pay/transfer_partner/chapter3_3.shtml
     */
    get(config: _detail_id_.GetHttpMethod.RequestConfig): AxiosPromise<_detail_id_.GetHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.PartnerTransfer.Batches.BatchId._batch_id_.Details {
  export interface DetailId {
    _detail_id_: DetailId._detail_id_
  }
}
namespace WeChatPay.OpenAPI.V3.PartnerTransfer.Batches.BatchId._batch_id_ {
  export interface Details {
    detailId: Details.DetailId
  }
}
namespace WeChatPay.OpenAPI.V3.PartnerTransfer.Batches.BatchId {
  export interface _batch_id_ {
    details: _batch_id_.Details
  }
}
namespace WeChatPay.OpenAPI.V3.PartnerTransfer.Batches {
  export interface BatchId {
    _batch_id_: BatchId._batch_id_
  }
}
namespace WeChatPay.OpenAPI.V3.PartnerTransfer {
  export interface Batches {
    batchId: Batches.BatchId
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
wxpay.v3.partnerTransfer.batches.batchId._batch_id_.details.detailId._detail_id_.get({
//                                                                               ^^^
  batch_id,
  detail_id,
})
.then(
  ({ // [!code hl:39]
    data: {
      sp_mchid,
      out_batch_no,
      batch_id,
      appid,
      out_detail_no,
      detail_id,
      detail_status,
      transfer_amount,
      transfer_remark,
      fail_reason,
      openid,
      username,
      initiate_time,
      update_time,
      account_type,
      bank_name,
      bank_card_number_tail,
    },
  }) => ({
    sp_mchid,
    out_batch_no,
    batch_id,
    appid,
    out_detail_no,
    detail_id,
    detail_status,
    transfer_amount,
    transfer_remark,
    fail_reason,
    openid,
    username,
    initiate_time,
    update_time,
    account_type,
    bank_name,
    bank_card_number_tail,
  })
)
```
