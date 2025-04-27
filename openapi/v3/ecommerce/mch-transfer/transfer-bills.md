---
title: 发起转账
description: 商户可通过此接口申请创建商家转账订单。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Ecommerce.MchTransfer.TransferBills.PostHttpMethod {
  export interface JsonDataRequest {
    sub_mchid: string
    appid: string
    out_bill_no: string
    transfer_scene_id: string
    openid: string
    user_name: string
    transfer_amount: number
    transfer_remark: string
    notify_url: string
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
    headers: {
      'Wechatpay-Serial': string
    }
  }
  export interface WellformedResponse {
    sub_mchid: string
    out_bill_no: string
    transfer_bill_no: string
    create_time: string
    state: string
    fail_reason: string
    package_info: string
  }
}
namespace WeChatPay.OpenAPI.V3.Ecommerce.MchTransfer {
  export interface TransferBills {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/docs/partner/apis/platsolution-mch-transfer/transfer-bill/transfer-to-user.html
     */
    (data: TransferBills.PostHttpMethod.JsonDataRequest, config: TransferBills.PostHttpMethod.RequestConfig): AxiosPromise<TransferBills.PostHttpMethod.WellformedResponse>
    /**
     * 发起转账
     * @link https://pay.weixin.qq.com/docs/partner/apis/platsolution-mch-transfer/transfer-bill/transfer-to-user.html
     */
    post(data: TransferBills.PostHttpMethod.JsonDataRequest, config: TransferBills.PostHttpMethod.RequestConfig): AxiosPromise<TransferBills.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Ecommerce {
  export interface MchTransfer {
    transferBills: MchTransfer.TransferBills
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface Ecommerce {
    mchTransfer: Ecommerce.MchTransfer
  }
}
namespace WeChatPay.OpenAPI {
  export interface V3 {
    ecommerce: V3.Ecommerce
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
wxpay.v3.ecommerce.mchTransfer.transferBills.post({
//                                           ^^^^
  sub_mchid,
  appid,
  out_bill_no,
  transfer_scene_id,
  openid,
  user_name,
  transfer_amount,
  transfer_remark,
  notify_url,
})
.then(
  ({ // [!code hl:19]
    data: {
      sub_mchid,
      out_bill_no,
      transfer_bill_no,
      create_time,
      state,
      fail_reason,
      package_info,
    },
  }) => ({
    sub_mchid,
    out_bill_no,
    transfer_bill_no,
    create_time,
    state,
    fail_reason,
    package_info,
  })
)
```

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4013504211)
