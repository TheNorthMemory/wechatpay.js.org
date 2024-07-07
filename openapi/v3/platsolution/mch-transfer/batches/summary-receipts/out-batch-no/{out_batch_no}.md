---
title: 查询商家转账批次电子回单
description: 查询商家转账批次汇总电子回单接口，商户通过该接口可以查询商家转账批次汇总电子回单受理进度信息，当电子回单文件生成结束后，将返回电子回单文件的hash值、电子回单文件的下载地址等。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/docs/partner/apis/platsolution-mch-transfer/receipts/receipts-query-by-batch-out-no.html)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Platsolution.MchTransfer.Batches.SummaryReceipts.OutBatchNo._out_batch_no_.GetHttpMethod {
  export interface RequestConfig extends AxiosRequestConfig {
    out_batch_no: string
    params: {
      sub_mchid: string
    }
  }
  export interface WellformedResponse {
    batch_id: string
    out_batch_no: string
    sub_mchid: string
    receipt_state: string
    hash_type: string
    hash_value: string
    download_url: string
  }
}
namespace WeChatPay.OpenAPI.V3.Platsolution.MchTransfer.Batches.SummaryReceipts.OutBatchNo {
  export interface _out_batch_no_ {
    /**
     * 查询商家转账批次电子回单
     * @link https://pay.weixin.qq.com/docs/partner/apis/platsolution-mch-transfer/receipts/receipts-query-by-batch-out-no.html
     */
    get(config: _out_batch_no_.GetHttpMethod.RequestConfig): AxiosPromise<_out_batch_no_.GetHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Platsolution.MchTransfer.Batches.SummaryReceipts {
  export interface OutBatchNo {
    _out_batch_no_: OutBatchNo._out_batch_no_
  }
}
namespace WeChatPay.OpenAPI.V3.Platsolution.MchTransfer.Batches {
  export interface SummaryReceipts {
    outBatchNo: SummaryReceipts.OutBatchNo
  }
}
namespace WeChatPay.OpenAPI.V3.Platsolution.MchTransfer {
  export interface Batches {
    summaryReceipts: Batches.SummaryReceipts
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
wxpay.v3.platsolution.mchTransfer.batches.summaryReceipts.outBatchNo._out_batch_no_.get({
//                                                                                  ^^^
  out_batch_no,
  params,
})
.then(
  ({ // [!code hl:19]
    data: {
      batch_id,
      out_batch_no,
      sub_mchid,
      receipt_state,
      hash_type,
      hash_value,
      download_url,
    },
  }) => ({
    batch_id,
    out_batch_no,
    sub_mchid,
    receipt_state,
    hash_type,
    hash_value,
    download_url,
  })
)
```
