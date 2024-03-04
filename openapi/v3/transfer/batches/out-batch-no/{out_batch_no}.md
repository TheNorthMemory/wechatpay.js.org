---
title: 商家批次单号查询批次单
description: 商户可以通过该接口查询转账批次单以及指定状态的转账明细单。
---

# {{ $frontmatter.title }}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/pay/transfer/chapter3_4.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Transfer.Batches.OutBatchNo._out_batch_no_.GetHttpMethod {
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
    offset: number
    limit: number
  }
}
namespace WeChatPay.OpenAPI.V3.Transfer.Batches.OutBatchNo {
  export interface _out_batch_no_ {
    /**
     * 商家批次单号查询批次单API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/pay/transfer/chapter3_4.shtml
     */
    get(config: _out_batch_no_.GetHttpMethod.RequestConfig): AxiosPromise<_out_batch_no_.GetHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Transfer.Batches {
  export interface OutBatchNo {
    _out_batch_no_: OutBatchNo._out_batch_no_
  }
}
namespace WeChatPay.OpenAPI.V3.Transfer {
  export interface Batches {
    outBatchNo: Batches.OutBatchNo
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
wxpay.v3.transfer.batches.outBatchNo._out_batch_no_.get({
//                                                  ^^^
  out_batch_no,
  params,
})
.then(
  ({ // [!code hl:13]
    data: {
      transfer_batch,
      transfer_detail_list,
      offset,
      limit,
    },
  }) => ({
    transfer_batch,
    transfer_detail_list,
    offset,
    limit,
  })
)
```
