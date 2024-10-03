---
title: 查询银行转账充值结果(平台收付通)
description: 提交充值申请后，可调用该接口查询充值状态。银行充值到账存在延迟：一般可在10分钟内到账。受央行大额系统工作时间限制，周一至周四17:15-20:30，周五17:15-24:00，节假日全天会延迟到账
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/docs/partner/apis/platsolution-mch-recharge/bank-recharge/bank-transfer-recharge-get-by-out-no.html)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Platsolution.Ecommerce.BankTransferRecharges.OutRechargeNo._out_recharge_no_.GetHttpMethod {
  export interface RequestConfig extends AxiosRequestConfig {
    out_recharge_no: string
  }
  export interface WellformedResponse {
    mchid: string
    recharge_id: string
    out_recharge_no: string
    account_type: string
    recharge_state: string
    recharge_scene: string
    recharge_state_desc: string
    recharge_amount: {
      amount: number
      currency: string
    }
    bank_transfer_info: {
      memo: string
      return_time: string
      return_reason: string
      bank_name: string
      bank_card_tail: string
    }
    accept_time: string
    success_time: string
    close_time: string
  }
}
namespace WeChatPay.OpenAPI.V3.Platsolution.Ecommerce.BankTransferRecharges.OutRechargeNo {
  export interface _out_recharge_no_ {
    /**
     * 查询银行转账充值结果
     * @link https://pay.weixin.qq.com/docs/partner/apis/platsolution-mch-recharge/bank-recharge/bank-transfer-recharge-get-by-out-no.html
     */
    get(config: _out_recharge_no_.GetHttpMethod.RequestConfig): AxiosPromise<_out_recharge_no_.GetHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Platsolution.Ecommerce.BankTransferRecharges {
  export interface OutRechargeNo {
    _out_recharge_no_: OutRechargeNo._out_recharge_no_
  }
}
namespace WeChatPay.OpenAPI.V3.Platsolution.Ecommerce {
  export interface BankTransferRecharges {
    outRechargeNo: BankTransferRecharges.OutRechargeNo
  }
}
namespace WeChatPay.OpenAPI.V3.Platsolution {
  export interface Ecommerce {
    bankTransferRecharges: Ecommerce.BankTransferRecharges
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface Platsolution {
    ecommerce: Platsolution.Ecommerce
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
wxpay.v3.platsolution.ecommerce.bankTransferRecharges.outRechargeNo._out_recharge_no_.get({
//                                                                                    ^^^
  out_recharge_no,
})
.then(
  ({ // [!code hl:29]
    data: {
      mchid,
      recharge_id,
      out_recharge_no,
      account_type,
      recharge_state,
      recharge_scene,
      recharge_state_desc,
      recharge_amount,
      bank_transfer_info,
      accept_time,
      success_time,
      close_time,
    },
  }) => ({
    mchid,
    recharge_id,
    out_recharge_no,
    account_type,
    recharge_state,
    recharge_scene,
    recharge_state_desc,
    recharge_amount,
    bank_transfer_info,
    accept_time,
    success_time,
    close_time,
  })
)
```
