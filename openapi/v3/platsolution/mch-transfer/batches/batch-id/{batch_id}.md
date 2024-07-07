---
title: 微信支付转账批次单号查询批次单
description: 微信商家转账批次单号查单接口。商户可以通过该接口查询转账批次单以及指定状态的转账明细单。返回消息中包含微信批次单号、批次状态、批次类型、转账总金额、转账总笔数、成功金额、失败金额等信息。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/docs/partner/apis/platsolution-mch-transfer/transfer-batch/transfer-batch-get-by-id.html)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Platsolution.MchTransfer.Batches.BatchId._batch_id_.GetHttpMethod {
  export interface RequestConfig extends AxiosRequestConfig {
    batch_id: string
    params: {
      sub_mchid: string
      need_query_detail: boolean
      detail_state: string
      offset: number
      limit: number
    }
  }
  export interface WellformedResponse {
    transfer_batch: {
      out_batch_no: string
      batch_id: string
      sp_appid: string
      sub_mchid: string
      sub_appid: string
      batch_state: string
      batch_name: string
      batch_remark: string
      close_reason: string
      total_amount: number
      total_num: number
      create_time: string | Date
      success_amount: number
      success_num: number
      failed_amount: number
      failed_num: number
      transfer_scene_id: string
    }
    data: {
      detail_id: string
      out_detail_no: string
      detail_state: string
    }[]
    offset: number
    limit: number
  }
}
namespace WeChatPay.OpenAPI.V3.Platsolution.MchTransfer.Batches.BatchId {
  export interface _batch_id_ {
    /**
     * 微信支付转账批次单号查询批次单
     * @link https://pay.weixin.qq.com/docs/partner/apis/platsolution-mch-transfer/transfer-batch/transfer-batch-get-by-id.html
     */
    get(config: _batch_id_.GetHttpMethod.RequestConfig): AxiosPromise<_batch_id_.GetHttpMethod.WellformedResponse>
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
wxpay.v3.platsolution.mchTransfer.batches.batchId._batch_id_.get({
//                                                           ^^^
  batch_id,
  params,
})
.then(
  ({ // [!code hl:13]
    data: {
      transfer_batch,
      data,
      offset,
      limit,
    },
  }) => ({
    transfer_batch,
    data,
    offset,
    limit,
  })
)
```
