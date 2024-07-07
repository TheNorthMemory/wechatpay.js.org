---
title: 微信支付转账明细单号查询明细单
description: 微信商家转账明细单号查单接口。商户可以通过该接口查询单笔转账明细单。返回消息中包含微信明细单号、明细状态、转账金额、失败原因、收款用户姓名、收款用户OpenID等信息。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/docs/partner/apis/platsolution-mch-transfer/transfer-batch/get-transfer-detail-by-no.html)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Platsolution.MchTransfer.Batches.BatchId._batch_id_.Details.DetailId._detail_id_.GetHttpMethod {
  export interface RequestConfig extends AxiosRequestConfig {
    batch_id: string
    detail_id: string
    params: {
      sub_mchid: string
    }
  }
  export interface WellformedResponse {
    out_batch_no: string
    batch_id: string
    out_detail_no: string
    detail_id: string
    sp_appid: string
    sub_mchid: string
    sub_appid: string
    create_time: string | Date
    detail_state: string
    transfer_amount: number
    transfer_remark: string
    fail_reason: string
    openid: string
    bank_type: string
    user_name: string
    transfer_finish_time: string | Date
    bank_refund_time: string | Date
  }
}
namespace WeChatPay.OpenAPI.V3.Platsolution.MchTransfer.Batches.BatchId._batch_id_.Details.DetailId {
  export interface _detail_id_ {
    /**
     * 微信支付转账明细单号查询明细单
     * @link https://pay.weixin.qq.com/docs/partner/apis/platsolution-mch-transfer/transfer-batch/get-transfer-detail-by-no.html
     */
    get(config: _detail_id_.GetHttpMethod.RequestConfig): AxiosPromise<_detail_id_.GetHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Platsolution.MchTransfer.Batches.BatchId._batch_id_.Details {
  export interface DetailId {
    _detail_id_: DetailId._detail_id_
  }
}
namespace WeChatPay.OpenAPI.V3.Platsolution.MchTransfer.Batches.BatchId._batch_id_ {
  export interface Details {
    detailId: Details.DetailId
  }
}
namespace WeChatPay.OpenAPI.V3.Platsolution.MchTransfer.Batches.BatchId {
  export interface _batch_id_ {
    details: _batch_id_.Details
  }
}
namespace WeChatPay.OpenAPI.V3.Platsolution.MchTransfer.Batches {
  export interface BatchId {
    _batch_id_: BatchId._batch_id_
  }
}
namespace WeChatPay.OpenAPI.V3.Platsolution.MchTransfer {
  export interface Batches {
    batchId: Batches.BatchId
  }
}
namespace WeChatPay.OpenAPI.V3.Platsolution {
  export interface MchTransfer {
    batches: MchTransfer.Batches
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface Platsolution {
    mchTransfer: Platsolution.MchTransfer
  }
}
namespace WeChatPay.OpenAPI {
  export interface V3 {
    platsolution: V3.Platsolution
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
wxpay.v3.platsolution.mchTransfer.batches.batchId._batch_id_.details.detailId._detail_id_.get({
//                                                                                        ^^^
  batch_id,
  detail_id,
  params,
})
.then(
  ({ // [!code hl:39]
    data: {
      out_batch_no,
      batch_id,
      out_detail_no,
      detail_id,
      sp_appid,
      sub_mchid,
      sub_appid,
      create_time,
      detail_state,
      transfer_amount,
      transfer_remark,
      fail_reason,
      openid,
      bank_type,
      user_name,
      transfer_finish_time,
      bank_refund_time,
    },
  }) => ({
    out_batch_no,
    batch_id,
    out_detail_no,
    detail_id,
    sp_appid,
    sub_mchid,
    sub_appid,
    create_time,
    detail_state,
    transfer_amount,
    transfer_remark,
    fail_reason,
    openid,
    bank_type,
    user_name,
    transfer_finish_time,
    bank_refund_time,
  })
)
```
