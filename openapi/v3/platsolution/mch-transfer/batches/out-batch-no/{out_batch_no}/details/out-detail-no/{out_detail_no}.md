---
title: 商户明细单号查询明细单
description: 商户明细单号查单接口。商户可以通过该接口查询单笔转账明细单。返回消息中包含微信明细单号、明细状态、转账金额、失败原因、收款用户姓名、收款用户OpenID等信息。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/docs/partner/apis/platsolution-mch-transfer/transfer-batch/transfer-batch-get-detail-by-out-no.html)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Platsolution.MchTransfer.Batches.OutBatchNo._out_batch_no_.Details.OutDetailNo._out_detail_no_.GetHttpMethod {
  export interface RequestConfig extends AxiosRequestConfig {
    out_batch_no: string
    out_detail_no: string
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
namespace WeChatPay.OpenAPI.V3.Platsolution.MchTransfer.Batches.OutBatchNo._out_batch_no_.Details.OutDetailNo {
  export interface _out_detail_no_ {
    /**
     * 商户明细单号查询明细单
     * @link https://pay.weixin.qq.com/docs/partner/apis/platsolution-mch-transfer/transfer-batch/transfer-batch-get-detail-by-out-no.html
     */
    get(config: _out_detail_no_.GetHttpMethod.RequestConfig): AxiosPromise<_out_detail_no_.GetHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Platsolution.MchTransfer.Batches.OutBatchNo._out_batch_no_.Details {
  export interface OutDetailNo {
    _out_detail_no_: OutDetailNo._out_detail_no_
  }
}
namespace WeChatPay.OpenAPI.V3.Platsolution.MchTransfer.Batches.OutBatchNo._out_batch_no_ {
  export interface Details {
    outDetailNo: Details.OutDetailNo
  }
}
namespace WeChatPay.OpenAPI.V3.Platsolution.MchTransfer.Batches.OutBatchNo {
  export interface _out_batch_no_ {
    details: _out_batch_no_.Details
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
wxpay.v3.platsolution.mchTransfer.batches.outBatchNo._out_batch_no_.details.outDetailNo._out_detail_no_.get({
//                                                                                                      ^^^
  out_batch_no,
  out_detail_no,
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
