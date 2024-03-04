---
title: 微信明细单号查询明细单
description: 商户可以通过该接口查询单笔转账明细单。
---

# {{ $frontmatter.title }}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/pay/transfer/chapter3_3.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Transfer.Batches.BatchId._batch_id_.Details.DetailId._detail_id_.GetHttpMethod {
  export interface RequestConfig extends AxiosRequestConfig {
    batch_id: string
    detail_id: string
  }
  export interface WellformedResponse {
    mchid: string
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
    user_name: string
    initiate_time: string
    update_time: string
  }
}
namespace WeChatPay.OpenAPI.V3.Transfer.Batches.BatchId._batch_id_.Details.DetailId {
  export interface _detail_id_ {
    /**
     * 微信明细单号查询明细单API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/pay/transfer/chapter3_3.shtml
     */
    get(config: _detail_id_.GetHttpMethod.RequestConfig): AxiosPromise<_detail_id_.GetHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Transfer.Batches.BatchId._batch_id_.Details {
  export interface DetailId {
    _detail_id_: DetailId._detail_id_
  }
}
namespace WeChatPay.OpenAPI.V3.Transfer.Batches.BatchId._batch_id_ {
  export interface Details {
    detailId: Details.DetailId
  }
}
namespace WeChatPay.OpenAPI.V3.Transfer.Batches.BatchId {
  export interface _batch_id_ {
    details: _batch_id_.Details
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
wxpay.v3.transfer.batches.batchId._batch_id_.details.detailId._detail_id_.get({
//                                                                        ^^^
  batch_id,
  detail_id,
})
.then(
  ({ // [!code hl:33]
    data: {
      mchid,
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
      user_name,
      initiate_time,
      update_time,
    },
  }) => ({
    mchid,
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
    user_name,
    initiate_time,
    update_time,
  })
)
```
