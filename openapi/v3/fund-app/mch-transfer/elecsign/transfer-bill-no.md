---
title: 微信单号申请电子回单(用户确认模式)
description: 商户可以 指定微信转账单号通过该接口申请 商家转账用户确认模式转账单据 对应的电子回单。微信支付会在校验满足回单申请条件后受理回单的申请，商户后续可以通过电子回单查询接口查询回单处理进度。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/docs/merchant/apis/mch-trans/elecsign/accept-elecsign-by-no.html)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.FundApp.MchTransfer.Elecsign.TransferBillNo.PostHttpMethod {
  export interface JsonDataRequest {
    transfer_bill_no: string
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
  }
  export interface WellformedResponse {
    state: string
    create_time: string
  }
}
namespace WeChatPay.OpenAPI.V3.FundApp.MchTransfer.Elecsign {
  export interface TransferBillNo {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/docs/merchant/apis/mch-trans/elecsign/accept-elecsign-by-no.html
     */
    (data: TransferBillNo.PostHttpMethod.JsonDataRequest, config?: TransferBillNo.PostHttpMethod.RequestConfig): AxiosPromise<TransferBillNo.PostHttpMethod.WellformedResponse>
    /**
     * 微信单号申请电子回单
     * @link https://pay.weixin.qq.com/docs/merchant/apis/mch-trans/elecsign/accept-elecsign-by-no.html
     */
    post(data: TransferBillNo.PostHttpMethod.JsonDataRequest, config?: TransferBillNo.PostHttpMethod.RequestConfig): AxiosPromise<TransferBillNo.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.FundApp.MchTransfer {
  export interface Elecsign {
    transferBillNo: Elecsign.TransferBillNo
  }
}
namespace WeChatPay.OpenAPI.V3.FundApp {
  export interface MchTransfer {
    elecsign: MchTransfer.Elecsign
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
wxpay.v3.fundApp.mchTransfer.elecsign.transferBillNo.post({
//                                                   ^^^^
  transfer_bill_no,
})
.then(
  ({ // [!code hl:9]
    data: {
      state,
      create_time,
    },
  }) => ({
    state,
    create_time,
  })
)
```
