---
title: 申请商家转账批次电子回单
description: 商家转账批次汇总电子回单申请受理接口，商户通过该接口可以申请受理商家转账批次汇总电子回单。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/docs/partner/apis/platsolution-mch-transfer/receipts/receipts-apply-by-batch-out-no.html)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Platsolution.MchTransfer.Batches.SummaryReceipts.OutBatchNo._out_batch_no_.Apply.PostHttpMethod {
  export interface JsonDataRequest {
    sub_mchid: string
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
    out_batch_no: string
  }
  export interface WellformedResponse {
    sub_mchid: string
    out_batch_no: string
    receipt_state: string
  }
}
namespace WeChatPay.OpenAPI.V3.Platsolution.MchTransfer.Batches.SummaryReceipts.OutBatchNo._out_batch_no_ {
  export interface Apply {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/docs/partner/apis/platsolution-mch-transfer/receipts/receipts-apply-by-batch-out-no.html
     */
    (data: Apply.PostHttpMethod.JsonDataRequest, config: Apply.PostHttpMethod.RequestConfig): AxiosPromise<Apply.PostHttpMethod.WellformedResponse>
    /**
     * 申请商家转账批次电子回单
     * @link https://pay.weixin.qq.com/docs/partner/apis/platsolution-mch-transfer/receipts/receipts-apply-by-batch-out-no.html
     */
    post(data: Apply.PostHttpMethod.JsonDataRequest, config: Apply.PostHttpMethod.RequestConfig): AxiosPromise<Apply.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Platsolution.MchTransfer.Batches.SummaryReceipts.OutBatchNo {
  export interface _out_batch_no_ {
    apply: _out_batch_no_.Apply
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
wxpay.v3.platsolution.mchTransfer.batches.summaryReceipts.outBatchNo._out_batch_no_.apply.post({
//                                                                                        ^^^^
  sub_mchid,
}, { out_batch_no })
.then(
  ({ // [!code hl:11]
    data: {
      sub_mchid,
      out_batch_no,
      receipt_state,
    },
  }) => ({
    sub_mchid,
    out_batch_no,
    receipt_state,
  })
)
```
