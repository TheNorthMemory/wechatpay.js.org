---
title: 撤销转账(用户确认模式)
description: 商户通过转账接口发起付款后，在用户确认收款之前可以通过该接口撤销付款。该接口返回成功仅表示撤销请求已受理，系统会异步处理退款等操作，以最终查询单据返回状态为准。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/docs/merchant/apis/mch-trans/transfer-bill/cancel-transfer.html)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.FundApp.MchTransfer.TransferBills.OutBillNo._out_bill_no_.Cancel.PostHttpMethod {
  export interface JsonDataRequest {
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
    out_bill_no: string
  }
  export interface WellformedResponse {
    out_bill_no: string
    transfer_bill_no: string
    state: string
    update_time: string
  }
}
namespace WeChatPay.OpenAPI.V3.FundApp.MchTransfer.TransferBills.OutBillNo._out_bill_no_ {
  export interface Cancel {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/docs/merchant/apis/mch-trans/transfer-bill/cancel-transfer.html
     */
    (data: Cancel.PostHttpMethod.JsonDataRequest, config: Cancel.PostHttpMethod.RequestConfig): AxiosPromise<Cancel.PostHttpMethod.WellformedResponse>
    /**
     * 撤销转账
     * @link https://pay.weixin.qq.com/docs/merchant/apis/mch-trans/transfer-bill/cancel-transfer.html
     */
    post(data: Cancel.PostHttpMethod.JsonDataRequest, config: Cancel.PostHttpMethod.RequestConfig): AxiosPromise<Cancel.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.FundApp.MchTransfer.TransferBills.OutBillNo {
  export interface _out_bill_no_ {
    cancel: _out_bill_no_.Cancel
  }
}
namespace WeChatPay.OpenAPI.V3.FundApp.MchTransfer.TransferBills {
  export interface OutBillNo {
    _out_bill_no_: OutBillNo._out_bill_no_
  }
}
namespace WeChatPay.OpenAPI.V3.FundApp.MchTransfer {
  export interface TransferBills {
    outBillNo: TransferBills.OutBillNo
  }
}
namespace WeChatPay.OpenAPI.V3.FundApp {
  export interface MchTransfer {
    transferBills: MchTransfer.TransferBills
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface FundApp {
    mchTransfer: FundApp.MchTransfer
  }
}
namespace WeChatPay.OpenAPI {
  export interface V3 {
    fundApp: V3.FundApp
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
wxpay.v3.fundApp.mchTransfer.transferBills.outBillNo._out_bill_no_.cancel.post({}, {
//                                                                        ^^^^
  out_bill_no,
})
.then(
  ({ // [!code hl:13]
    data: {
      out_bill_no,
      transfer_bill_no,
      state,
      update_time,
    },
  }) => ({
    out_bill_no,
    transfer_bill_no,
    state,
    update_time,
  })
)
```
