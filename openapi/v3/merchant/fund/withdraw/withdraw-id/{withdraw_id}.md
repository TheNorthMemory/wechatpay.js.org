---
title: 电商平台(微信支付提现单号)查询提现状态
description: 电商平台通过该接口查询其提现结果。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/ecommerce/fund/chapter3_6.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Merchant.Fund.Withdraw.WithdrawId._withdraw_id_.GetHttpMethod {
  export interface RequestConfig extends AxiosRequestConfig {
    withdraw_id: string
  }
  export interface WellformedResponse {
    status: string
    withdraw_id: string
    out_request_no: string
    amount: number
    create_time: string
    update_time: string
    reason: string
    remark: string
    bank_memo: string
    account_type: 'BASIC' | 'OPERATION' | 'FEES'
    solution: string
  }
}
namespace WeChatPay.OpenAPI.V3.Merchant.Fund.Withdraw.WithdrawId {
  export interface _withdraw_id_ {
    /**
     * 电商平台(微信支付提现单号)查询提现状态API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/ecommerce/fund/chapter3_6.shtml
     */
    get(config: _withdraw_id_.GetHttpMethod.RequestConfig): AxiosPromise<_withdraw_id_.GetHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Merchant.Fund.Withdraw {
  export interface WithdrawId {
    _withdraw_id_: WithdrawId._withdraw_id_
  }
}
namespace WeChatPay.OpenAPI.V3.Merchant.Fund {
  export interface Withdraw {
    withdrawId: Withdraw.WithdrawId
  }
}
namespace WeChatPay.OpenAPI.V3.Merchant {
  export interface Fund {
    withdraw: Fund.Withdraw
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface Merchant {
    fund: Merchant.Fund
  }
}
namespace WeChatPay.OpenAPI {
  export interface V3 {
    merchant: V3.Merchant
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
wxpay.v3.merchant.fund.withdraw.withdrawId._withdraw_id_.get({
//                                                       ^^^
  withdraw_id,
})
.then(
  ({ // [!code hl:27]
    data: {
      status,
      withdraw_id,
      out_request_no,
      amount,
      create_time,
      update_time,
      reason,
      remark,
      bank_memo,
      account_type,
      solution,
    },
  }) => ({
    status,
    withdraw_id,
    out_request_no,
    amount,
    create_time,
    update_time,
    reason,
    remark,
    bank_memo,
    account_type,
    solution,
  })
)
```
