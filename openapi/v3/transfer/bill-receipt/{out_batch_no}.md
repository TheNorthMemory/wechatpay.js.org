---
title: 查询转账电子回单
description: 查询转账电子回单接口，商户通过该接口可以查询电子回单受理进度信息，包括电子回单据信息，电子回单文件的hash值，电子回单文件的下载地址等
---

# {{ $frontmatter.title }}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3_partner/Offline/apis/chapter4_1_12.shtml) [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/pay/transfer_partner/chapter4_2.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Transfer.BillReceipt._out_batch_no_.GetHttpMethod {
  export interface RequestConfig extends AxiosRequestConfig {
    out_batch_no: string
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
namespace WeChatPay.OpenAPI.V3.Transfer.BillReceipt {
  export interface _out_batch_no_ {
    /**
     * 查询转账电子回单API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/pay/transfer_partner/chapter4_2.shtml
     */
    get(config: _out_batch_no_.GetHttpMethod.RequestConfig): AxiosPromise<_out_batch_no_.GetHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Transfer {
  export interface BillReceipt {
    _out_batch_no_: BillReceipt._out_batch_no_
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
wxpay.v3.transfer.billReceipt._out_batch_no_.get({
//                                           ^^^
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
