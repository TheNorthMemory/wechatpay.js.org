---
title: 申请银行转账充值
description: 商户系统须通过调用此接口获取银行转账账号，随后发起充值流程
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/docs/merchant/apis/mch-recharge/bank-recharge/bank-transfer-recharge-apply.html)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Recharge.BankTransferRecharges.Apply.PostHttpMethod {
  export interface JsonDataRequest {
    out_recharge_no: string
    recharge_scene: string
    account_type: string
    recharge_amount: {
      amount: number
      currency: string
    }
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
  }
  export interface WellformedResponse {
    recharge_id: string
    out_recharge_no: string
    transfer_in_account: {
      bank_name: string
      bank_address_code: string
      bank_code: string
      bank_account_name: string
      bank_account_no: string
    }
  }
}
namespace WeChatPay.OpenAPI.V3.Recharge.BankTransferRecharges {
  export interface Apply {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/docs/merchant/apis/mch-recharge/bank-recharge/bank-transfer-recharge-apply.html
     */
    (data: Apply.PostHttpMethod.JsonDataRequest, config?: Apply.PostHttpMethod.RequestConfig): AxiosPromise<Apply.PostHttpMethod.WellformedResponse>
    /**
     * 申请银行转账充值
     * @link https://pay.weixin.qq.com/docs/merchant/apis/mch-recharge/bank-recharge/bank-transfer-recharge-apply.html
     */
    post(data: Apply.PostHttpMethod.JsonDataRequest, config?: Apply.PostHttpMethod.RequestConfig): AxiosPromise<Apply.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Recharge {
  export interface BankTransferRecharges {
    apply: BankTransferRecharges.Apply
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface Recharge {
    bankTransferRecharges: Recharge.BankTransferRecharges
  }
}
namespace WeChatPay.OpenAPI {
  export interface V3 {
    recharge: V3.Recharge
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
wxpay.v3.recharge.bankTransferRecharges.apply.post({
//                                            ^^^^
  out_recharge_no,
  recharge_scene,
  account_type,
  recharge_amount,
})
.then(
  ({ // [!code hl:11]
    data: {
      recharge_id,
      out_recharge_no,
      transfer_in_account,
    },
  }) => ({
    recharge_id,
    out_recharge_no,
    transfer_in_account,
  })
)
```
