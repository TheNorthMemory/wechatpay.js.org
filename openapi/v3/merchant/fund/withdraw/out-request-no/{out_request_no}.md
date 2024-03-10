---
title: 电商平台(商户提现单号查询)提现状态
description: 电商平台通过该接口查询其提现结果。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/ecommerce/fund/chapter3_6.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Merchant.Fund.Withdraw.OutRequestNo._out_request_no_.GetHttpMethod {
  export interface RequestConfig extends AxiosRequestConfig {
    out_request_no: string
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
    account_t    account_type: 'BASIC' | 'OPERATION' | 'FEES'
ype: string
    solution: string
  }
}
namespace WeChatPay.OpenAPI.V3.Merchant.Fund.Withdraw.OutRequestNo {
  export interface _out_request_no_ {
    /**
     * 电商平台(商户提现单号查询)提现状态API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/ecommerce/fund/chapter3_6.shtml
     */
    get(config: _out_request_no_.GetHttpMethod.RequestConfig): AxiosPromise<_out_request_no_.GetHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Merchant.Fund.Withdraw {
  export interface OutRequestNo {
    _out_request_no_: OutRequestNo._out_request_no_
  }
}
namespace WeChatPay.OpenAPI.V3.Merchant.Fund {
  export interface Withdraw {
    outRequestNo: Withdraw.OutRequestNo
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
wxpay.v3.merchant.fund.withdraw.outRequestNo._out_request_no_.get({
//                                                            ^^^
  out_request_no,
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
