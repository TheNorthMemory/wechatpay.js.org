---
title: 电商平台预约提现
description: 电商平台通过该接口可将其平台的收入进行提现
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/ecommerce/fund/chapter3_5.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Merchant.Fund.Withdraw.PostHttpMethod {
  export interface JsonDataRequest {
    out_request_no: string
    amount: number
    remark: string
    bank_memo: string
    account_type: 'BASIC' | 'OPERATION' | 'FEES'
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
  }
  export interface WellformedResponse {
    withdraw_id: string
    out_request_no: string
  }
}
namespace WeChatPay.OpenAPI.V3.Merchant.Fund {
  export interface Withdraw {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/ecommerce/fund/chapter3_5.shtml
     */
    (data: Withdraw.PostHttpMethod.JsonDataRequest, config?: Withdraw.PostHttpMethod.RequestConfig): AxiosPromise<Withdraw.PostHttpMethod.WellformedResponse>
    /**
     * 电商平台预约提现API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/ecommerce/fund/chapter3_5.shtml
     */
    post(data: Withdraw.PostHttpMethod.JsonDataRequest, config?: Withdraw.PostHttpMethod.RequestConfig): AxiosPromise<Withdraw.PostHttpMethod.WellformedResponse>
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
wxpay.v3.merchant.fund.withdraw.post({
//                              ^^^^
  out_request_no,
  amount,
  remark,
  bank_memo,
  account_type,
})
.then(
  ({ // [!code hl:9]
    data: {
      withdraw_id,
      out_request_no,
    },
  }) => ({
    withdraw_id,
    out_request_no,
  })
)
```
