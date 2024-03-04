---
title: 转账电子回单申请受理
description: 转账电子回单申请受理接口，商户通过该接口可以申请受理电子回单服务。
---

# {{ $frontmatter.title }}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3_partner/Offline/apis/chapter4_1_11.shtml) [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/pay/transfer_partner/chapter4_1.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Transfer.BillReceipt.PostHttpMethod {
  export interface JsonDataRequest {
    out_batch_no: string
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
  }
  export interface WellformedResponse {
    out_batch_no: string
    signature_no: string
    signature_status: string
    hash_type: string
    hash_value: string
    download_url: string
    create_time: string
    update_time: string
  }
}
namespace WeChatPay.OpenAPI.V3.Transfer {
  export interface BillReceipt {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/pay/transfer_partner/chapter4_1.shtml
     */
    (data: BillReceipt.PostHttpMethod.JsonDataRequest, config?: BillReceipt.PostHttpMethod.RequestConfig): AxiosPromise<BillReceipt.PostHttpMethod.WellformedResponse>
    /**
     * 转账电子回单申请受理API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/pay/transfer_partner/chapter4_1.shtml
     */
    post(data: BillReceipt.PostHttpMethod.JsonDataRequest, config?: BillReceipt.PostHttpMethod.RequestConfig): AxiosPromise<BillReceipt.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface Transfer {
    billReceipt: Transfer.BillReceipt
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
wxpay.v3.transfer.billReceipt.post({
//                            ^^^^
  out_batch_no,
})
.then(
  ({ // [!code hl:21]
    data: {
      out_batch_no,
      signature_no,
      signature_status,
      hash_type,
      hash_value,
      download_url,
      create_time,
      update_time,
    },
  }) => ({
    out_batch_no,
    signature_no,
    signature_status,
    hash_type,
    hash_value,
    download_url,
    create_time,
    update_time,
  })
)
```
