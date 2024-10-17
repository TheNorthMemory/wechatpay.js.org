---
title: 发起转账(用户确认模式)
description: 商家转账用户确认模式下，用户申请收款时，商户可通过此接口申请创建转账单
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/docs/merchant/apis/mch-trans/transfer-bill/transfer-to-user.html)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.FundApp.MchTransfer.TransferBills.PostHttpMethod {
  export interface JsonDataRequest {
    appid: string
    out_bill_no: string
    transfer_scene_id: string
    openid: string
    user_name: string
    transfer_amount: number
    transfer_remark: string
    notify_url: string
    user_recv_perception: string
    transfer_scene_report_infos: {
      info_type: string
      info_content: string
    }[]
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
    headers: {
      'Wechatpay-Serial': string
    }
  }
  export interface WellformedResponse {
    out_bill_no: string
    transfer_bill_no: string
    create_time: string
    state: string
    fail_reason: string
    package_info: string
  }
}
namespace WeChatPay.OpenAPI.V3.FundApp.MchTransfer {
  export interface TransferBills {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/docs/merchant/apis/mch-trans/transfer-bill/transfer-to-user.html
     */
    (data: TransferBills.PostHttpMethod.JsonDataRequest, config: TransferBills.PostHttpMethod.RequestConfig): AxiosPromise<TransferBills.PostHttpMethod.WellformedResponse>
    /**
     * 发起转账
     * @link https://pay.weixin.qq.com/docs/merchant/apis/mch-trans/transfer-bill/transfer-to-user.html
     */
    post(data: TransferBills.PostHttpMethod.JsonDataRequest, config: TransferBills.PostHttpMethod.RequestConfig): AxiosPromise<TransferBills.PostHttpMethod.WellformedResponse>
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
wxpay.v3.fundApp.mchTransfer.transferBills.post({
//                                         ^^^^
  appid,
  out_bill_no,
  transfer_scene_id,
  openid,
  user_name,
  transfer_amount,
  transfer_remark,
  notify_url,
  user_recv_perception,
  transfer_scene_report_infos,
}, { headers, })
.then(
  ({ // [!code hl:17]
    data: {
      out_bill_no,
      transfer_bill_no,
      create_time,
      state,
      fail_reason,
      package_info,
    },
  }) => ({
    out_bill_no,
    transfer_bill_no,
    create_time,
    state,
    fail_reason,
    package_info,
  })
)
```
