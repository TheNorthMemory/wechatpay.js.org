---
title: 商家明细单号查询明细单(合作伙伴模式)
description: 商户明细单号查单接口。转账处理后延迟一段时间（异步进行转账），服务商可以通过该接口查询单笔转账明细单。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3_partner/Offline/apis/chapter4_1_10.shtml) [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/pay/transfer_partner/chapter3_5.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.PartnerTransfer.Batches.OutBatchNo._out_batch_no_.Details.OutDetailNo._out_detail_no_.GetHttpMethod {
  export interface RequestConfig extends AxiosRequestConfig {
    out_batch_no: string
    out_detail_no: string
  }
  export interface WellformedResponse {
    sp_mchid: string
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
    username: string
    initiate_time: string
    update_time: string
    account_type: string
    bank_name: string
    bank_card_number_tail: string
  }
}
namespace WeChatPay.OpenAPI.V3.PartnerTransfer.Batches.OutBatchNo._out_batch_no_.Details.OutDetailNo {
  export interface _out_detail_no_ {
    /**
     * 商家明细单号查询明细单API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/pay/transfer_partner/chapter3_5.shtml
     */
    get(config: _out_detail_no_.GetHttpMethod.RequestConfig): AxiosPromise<_out_detail_no_.GetHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.PartnerTransfer.Batches.OutBatchNo._out_batch_no_.Details {
  export interface OutDetailNo {
    _out_detail_no_: OutDetailNo._out_detail_no_
  }
}
namespace WeChatPay.OpenAPI.V3.PartnerTransfer.Batches.OutBatchNo._out_batch_no_ {
  export interface Details {
    outDetailNo: Details.OutDetailNo
  }
}
namespace WeChatPay.OpenAPI.V3.PartnerTransfer.Batches.OutBatchNo {
  export interface _out_batch_no_ {
    details: _out_batch_no_.Details
  }
}
namespace WeChatPay.OpenAPI.V3.PartnerTransfer.Batches {
  export interface OutBatchNo {
    _out_batch_no_: OutBatchNo._out_batch_no_
  }
}
namespace WeChatPay.OpenAPI.V3.PartnerTransfer {
  export interface Batches {
    outBatchNo: Batches.OutBatchNo
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface PartnerTransfer {
    batches: PartnerTransfer.Batches
  }
}
namespace WeChatPay.OpenAPI {
  export interface V3 {
    partnerTransfer: V3.PartnerTransfer
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
wxpay.v3.partnerTransfer.batches.outBatchNo._out_batch_no_.details.outDetailNo._out_detail_no_.get({
//                                                                                             ^^^
  out_batch_no,
  out_detail_no,
})
.then(
  ({ // [!code hl:39]
    data: {
      sp_mchid,
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
      username,
      initiate_time,
      update_time,
      account_type,
      bank_name,
      bank_card_number_tail,
    },
  }) => ({
    sp_mchid,
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
    username,
    initiate_time,
    update_time,
    account_type,
    bank_name,
    bank_card_number_tail,
  })
)
```
