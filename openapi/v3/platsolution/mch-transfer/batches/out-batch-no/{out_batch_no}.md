---
title: 商户转账批次单号查询批次单
description: 商家批次单号查单接口。商户可以通过该接口查询转账批次单以及指定状态的转账明细单。返回消息中包含微信批次单号、批次状态、批次类型、转账总金额、转账总笔数、成功金额、失败金额等信息。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/docs/partner/apis/platsolution-mch-transfer/transfer-batch/transfer-batch-get-by-out-code.html)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Platsolution.MchTransfer.Batches.OutBatchNo._out_batch_no_.GetHttpMethod {
  export interface RequestConfig extends AxiosRequestConfig {
    out_batch_no: string
    params: {
      sub_mchid: string
      need_query_detail: boolean
      offset: number
      limit: number
      detail_state: string
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
namespace WeChatPay.OpenAPI.V3.Platsolution.MchTransfer.Batches.OutBatchNo {
  export interface _out_batch_no_ {
    /**
     * 商户转账批次单号查询批次单
     * @link https://pay.weixin.qq.com/docs/partner/apis/platsolution-mch-transfer/transfer-batch/transfer-batch-get-by-out-code.html
     */
    get(config: _out_batch_no_.GetHttpMethod.RequestConfig): AxiosPromise<_out_batch_no_.GetHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Platsolution.MchTransfer.Batches {
  export interface OutBatchNo {
    _out_batch_no_: OutBatchNo._out_batch_no_
  }
}
namespace WeChatPay.OpenAPI.V3.Platsolution.MchTransfer {
  export interface Batches {
    outBatchNo: Batches.OutBatchNo
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
wxpay.v3.platsolution.mchTransfer.batches.outBatchNo._out_batch_no_.get({
//                                                                  ^^^
  out_batch_no,
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
