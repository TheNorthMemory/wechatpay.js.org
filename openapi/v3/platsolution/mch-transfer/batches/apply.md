---
title: 受理商家转账
description: 发起商家转账接口。商户可以通过该接口同时向多个已经确认预约的用户进行转账操作。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/docs/partner/apis/platsolution-mch-transfer/transfer-batch/transfer-batch-apply.html)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Platsolution.MchTransfer.Batches.Apply.PostHttpMethod {
  export interface JsonDataRequest {
    sub_mchid: string
    sp_appid: string
    sub_appid: string
    out_batch_no: string
    batch_name: string
    batch_remark: string
    total_amount: number
    total_num: number
    transfer_scene_id: string
    transfer_detail_list: {
      out_detail_no: string
      transfer_amount: number
      transfer_remark: string
      reservation_id: string
      openid: string
    }[]
    notify_url: string
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
  }
  export interface WellformedResponse {
    out_batch_no: string
    batch_id: string
    create_time: string | Date
    batch_state: string
  }
}
namespace WeChatPay.OpenAPI.V3.Platsolution.MchTransfer.Batches {
  export interface Apply {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/docs/partner/apis/platsolution-mch-transfer/transfer-batch/transfer-batch-apply.html
     */
    (data: Apply.PostHttpMethod.JsonDataRequest, config?: Apply.PostHttpMethod.RequestConfig): AxiosPromise<Apply.PostHttpMethod.WellformedResponse>
    /**
     * 受理商家转账
     * @link https://pay.weixin.qq.com/docs/partner/apis/platsolution-mch-transfer/transfer-batch/transfer-batch-apply.html
     */
    post(data: Apply.PostHttpMethod.JsonDataRequest, config?: Apply.PostHttpMethod.RequestConfig): AxiosPromise<Apply.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Platsolution.MchTransfer {
  export interface Batches {
    apply: Batches.Apply
  }
}
namespace WeChatPay.OpenAPI.V3.Platsolution {
  export interface MchTransfer {
    batches: MchTransfer.Batches
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface Platsolution {
    mchTransfer: Platsolution.MchTransfer
  }
}
namespace WeChatPay.OpenAPI {
  export interface V3 {
    platsolution: V3.Platsolution
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
wxpay.v3.platsolution.mchTransfer.batches.apply.post({
//                                              ^^^^
  sub_mchid,
  sp_appid,
  sub_appid,
  out_batch_no,
  batch_name,
  batch_remark,
  total_amount,
  total_num,
  transfer_scene_id,
  transfer_detail_list,
  notify_url,
})
.then(
  ({ // [!code hl:13]
    data: {
      out_batch_no,
      batch_id,
      create_time,
      batch_state,
    },
  }) => ({
    out_batch_no,
    batch_id,
    create_time,
    batch_state,
  })
)
```
