---
title: 商户单号查询转账单
description: 根据商户单号查询商家转账订单的详细信息。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Ecommerce.MchTransfer.TransferBills.OutBillNo._out_bill_no_.GetHttpMethod {
  export interface RequestConfig extends AxiosRequestConfig {
    out_bill_no: string
    params: {
      sub_mchid: string
    }
  }
  export interface WellformedResponse {
    mchid: string
    sub_mchid: string
    out_bill_no: string
    transfer_bill_no: string
    appid: string
    transfer_scene_id: string
    state: string
    transfer_amount: number
    transfer_remark: string
    fail_reason: string
    openid: string
    user_name: string
    create_time: string
    update_time: string
  }
}
namespace WeChatPay.OpenAPI.V3.Ecommerce.MchTransfer.TransferBills.OutBillNo {
  export interface _out_bill_no_ {
    /**
     * 商户单号查询转账单
     * @link https://pay.weixin.qq.com/docs/partner/apis/platsolution-mch-transfer/transfer-bill/get-transfer-bill-by-out-no.html
     */
    get(config: _out_bill_no_.GetHttpMethod.RequestConfig): AxiosPromise<_out_bill_no_.GetHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Ecommerce.MchTransfer.TransferBills {
  export interface OutBillNo {
    _out_bill_no_: OutBillNo._out_bill_no_
  }
}
namespace WeChatPay.OpenAPI.V3.Ecommerce.MchTransfer {
  export interface TransferBills {
    outBillNo: TransferBills.OutBillNo
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
wxpay.v3.ecommerce.mchTransfer.transferBills.outBillNo._out_bill_no_.get({
//                                                                   ^^^
  out_bill_no,
  params,
})
.then(
  ({ // [!code hl:33]
    data: {
      mchid,
      sub_mchid,
      out_bill_no,
      transfer_bill_no,
      appid,
      transfer_scene_id,
      state,
      transfer_amount,
      transfer_remark,
      fail_reason,
      openid,
      user_name,
      create_time,
      update_time,
    },
  }) => ({
    mchid,
    sub_mchid,
    out_bill_no,
    transfer_bill_no,
    appid,
    transfer_scene_id,
    state,
    transfer_amount,
    transfer_remark,
    fail_reason,
    openid,
    user_name,
    create_time,
    update_time,
  })
)
```

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4013504213)
