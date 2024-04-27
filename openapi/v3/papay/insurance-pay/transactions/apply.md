---
title: 保险商户受理保险自动续费扣款
description: 商户调用「预约保险自动续费」接口预约成功后，可调用本接口发起委托代扣扣款。系统受理扣款请求后，异步进行扣款，并通过商户指定的回调地址通知扣费结果。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/docs/merchant/apis/insurance-entrusted-payment/deduct/create-transaction.html)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Papay.InsurancePay.Transactions.Apply.PostHttpMethod {
  export interface JsonDataRequest {
    appid: string
    out_trade_no: string
    description: string
    transaction_notify_url: string
    contract_id: string
    policy_period_id: number
    amount: {
      total: number
      currency: string
    }
    goods_tag: string
    attach: string
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
  }
  export interface WellformedResponse {
    out_trade_no: string
    amount: {
      total: number
      currency: string
    }
  }
}
namespace WeChatPay.OpenAPI.V3.Papay.InsurancePay.Transactions {
  export interface Apply {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/docs/merchant/apis/insurance-entrusted-payment/deduct/create-transaction.html
     */
    (data: Apply.PostHttpMethod.JsonDataRequest, config?: Apply.PostHttpMethod.RequestConfig): AxiosPromise<Apply.PostHttpMethod.WellformedResponse>
    /**
     * 保险商户受理保险自动续费扣款API
     * @link https://pay.weixin.qq.com/docs/merchant/apis/insurance-entrusted-payment/deduct/create-transaction.html
     */
    post(data: Apply.PostHttpMethod.JsonDataRequest, config?: Apply.PostHttpMethod.RequestConfig): AxiosPromise<Apply.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Papay.InsurancePay {
  export interface Transactions {
    apply: Transactions.Apply
  }
}
namespace WeChatPay.OpenAPI.V3.Papay {
  export interface InsurancePay {
    transactions: InsurancePay.Transactions
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface Papay {
    insurancePay: Papay.InsurancePay
  }
}
namespace WeChatPay.OpenAPI {
  export interface V3 {
    papay: V3.Papay
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
wxpay.v3.papay.insurancePay.transactions.apply.post({
//                                             ^^^^
  appid,
  out_trade_no,
  description,
  transaction_notify_url,
  contract_id,
  policy_period_id,
  amount,
  goods_tag,
  attach,
})
.then(
  ({ // [!code hl:9]
    data: {
      out_trade_no,
      amount,
    },
  }) => ({
    out_trade_no,
    amount,
  })
)
```
