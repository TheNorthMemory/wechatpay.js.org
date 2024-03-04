---
title: 微信批次单号查询批次单
description: 商户可以通过该接口查询转账批次单以及指定状态的转账明细单。
---

# {{ $frontmatter.title }}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/pay/transfer/chapter3_2.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Transfer.Batches.BatchId._batch_id_.GetHttpMethod {
  export interface RequestConfig extends AxiosRequestConfig {
    batch_id: string
    params: {
      need_query_detail: boolean
      offset: number
      limit: number
      detail_status: string
    }
  }
  export interface WellformedResponse {
    transfer_batch: {
      mchid: string
      out_batch_no: string
      batch_id: string
      appid: string
      batch_status: string
      batch_type: string
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
    }
    transfer_detail_list: {
      detail_id: string
      out_detail_no: string
      detail_status: string
    }[]
  }
}
namespace WeChatPay.OpenAPI.V3.Transfer.Batches.BatchId {
  export interface _batch_id_ {
    /**
     * 微信批次单号查询批次单API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/pay/transfer/chapter3_2.shtml
     */
    get(config: _batch_id_.GetHttpMethod.RequestConfig): AxiosPromise<_batch_id_.GetHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Transfer.Batches {
  export interface BatchId {
    _batch_id_: BatchId._batch_id_
  }
}
namespace WeChatPay.OpenAPI.V3.Transfer {
  export interface Batches {
    batchId: Batches.BatchId
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface Transfer {
    batches: Transfer.Batches
  }
}
namespace WeChatPay.OpenAPI {
  export interface V3 {
    transfer: V3.Transfer
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
wxpay.v3.transfer.batches.batchId._batch_id_.get({
//                                           ^^^
  batch_id,
  params,
})
.then(
  ({ // [!code hl:9]
    data: {
      transfer_batch,
      transfer_detail_list,
    },
  }) => ({
    transfer_batch,
    transfer_detail_list,
  })
)
```
