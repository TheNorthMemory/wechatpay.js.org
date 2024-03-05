---
title: 商家明细单号查询明细单
description: 商户可以通过该接口查询单笔转账明细单。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/pay/transfer/chapter3_5.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Transfer.Batches.OutBatchNo._out_batch_no_.Details.OutDetailNo._out_detail_no_.GetHttpMethod {
  export interface RequestConfig extends AxiosRequestConfig {
    out_detail_no: string
    out_batch_no: string
  }
  export interface WellformedResponse {
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
namespace WeChatPay.OpenAPI.V3.Transfer.Batches.OutBatchNo._out_batch_no_.Details.OutDetailNo {
  export interface _out_detail_no_ {
    /**
     * 商家明细单号查询明细单API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/pay/transfer/chapter3_5.shtml
     */
    get(config: _out_detail_no_.GetHttpMethod.RequestConfig): AxiosPromise<_out_detail_no_.GetHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Transfer.Batches.OutBatchNo._out_batch_no_.Details {
  export interface OutDetailNo {
    _out_detail_no_: OutDetailNo._out_detail_no_
  }
}
namespace WeChatPay.OpenAPI.V3.Transfer.Batches.OutBatchNo._out_batch_no_ {
  export interface Details {
    outDetailNo: Details.OutDetailNo
  }
}
namespace WeChatPay.OpenAPI.V3.Transfer.Batches.OutBatchNo {
  export interface _out_batch_no_ {
    details: _out_batch_no_.Details
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
wxpay.v3.transfer.batches.outBatchNo._out_batch_no_.details.outDetailNo._out_detail_no_.get({
//                                                                                      ^^^
  out_detail_no,
  out_batch_no,
})
.then(
  ({ // [!code hl:31]
    data: {
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
