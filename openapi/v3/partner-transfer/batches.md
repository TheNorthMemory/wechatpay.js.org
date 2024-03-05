---
title: 发起批量转账(合作伙伴模式)
description: 服务商可以通过该接口，批量向用户零钱进行转账操作。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3_partner/Offline/apis/chapter4_1_6.shtml) [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/pay/transfer_partner/chapter3_1.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.PartnerTransfer.Batches.PostHttpMethod {
  export interface JsonDataRequest {
    sub_mchid: string
    sub_appid: string
    authorization_type: string
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
      user_name: string
      user_id_card: string
    }[]
    sp_appid: string
    transfer_purpose: string
    transfer_scene: string
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
    headers: {
      'Wechatpay-Serial': string
    }
  }
  export interface WellformedResponse {
    out_batch_no: string
    batch_id: string
    create_time: string
  }
}
namespace WeChatPay.OpenAPI.V3.PartnerTransfer {
  export interface Batches {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/pay/transfer_partner/chapter3_1.shtml
     */
    (data: Batches.PostHttpMethod.JsonDataRequest, config: Batches.PostHttpMethod.RequestConfig): AxiosPromise<Batches.PostHttpMethod.WellformedResponse>
    /**
     * 发起批量转账API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/pay/transfer_partner/chapter3_1.shtml
     */
    post(data: Batches.PostHttpMethod.JsonDataRequest, config: Batches.PostHttpMethod.RequestConfig): AxiosPromise<Batches.PostHttpMethod.WellformedResponse>
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
wxpay.v3.partnerTransfer.batches.post({
//                               ^^^^
  sub_mchid,
  sub_appid,
  authorization_type,
  out_batch_no,
  batch_name,
  batch_remark,
  total_amount,
  total_num,
  transfer_detail_list,
  sp_appid,
  transfer_purpose,
  transfer_scene,
}, { headers })
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
