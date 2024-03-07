---
title: 发起批量转账
description: 商户可以通过该接口同时向多个用户微信零钱进行转账操作。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/pay/transfer/chapter3_1.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Transfer.Batches.PostHttpMethod {
  export interface JsonDataRequest {
    appid: string
    out_batch_no: string
    batch_name: string
    batch_remark: string
    total_amount: number
    total_num: number
    transfer_detail_list: {
      out_detail_no: string
      transfer_amount: number
      transfer_remark: string
      openid: string
      user_name?: string
    }[]
    transfer_scene_id?: string
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
    headers?: {
      'Wechatpay-Serial': string
    }
  }
  export interface WellformedResponse {
    out_batch_no: string
    batch_id: string
    create_time: string
  }
}
namespace WeChatPay.OpenAPI.V3.Transfer {
  export interface Batches {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/pay/transfer/chapter3_1.shtml
     */
    (data: Batches.PostHttpMethod.JsonDataRequest, config: Batches.PostHttpMethod.RequestConfig): AxiosPromise<Batches.PostHttpMethod.WellformedResponse>
    /**
     * 发起批量转账API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/pay/transfer/chapter3_1.shtml
     */
    post(data: Batches.PostHttpMethod.JsonDataRequest, config: Batches.PostHttpMethod.RequestConfig): AxiosPromise<Batches.PostHttpMethod.WellformedResponse>
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
wxpay.v3.transfer.batches.post({
//                        ^^^^
  appid,
  out_batch_no,
  batch_name,
  batch_remark,
  total_amount,
  total_num,
  transfer_detail_list,
  transfer_scene_id,
}, { headers, })
.then(
  ({ // [!code hl:11]
    data: {
      out_batch_no,
      batch_id,
      create_time,
    },
  }) => ({
    out_batch_no,
    batch_id,
    create_time,
  })
)
```
