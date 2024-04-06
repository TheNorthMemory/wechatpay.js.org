---
title: 营销补差付款
description: 给核销了商家券的商户做营销资金补差
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/apis/chapter9_2_16.shtml)

---
title: 查询营销补差付款单列表
description: 查询商家券营销补差付款单列表
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/apis/chapter9_2_19.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Marketing.Busifavor.Subsidy.PayReceipts.GetHttpMethod {
  export interface RequestConfig extends AxiosRequestConfig {
    params: {
      stock_id: string
      coupon_code: string
      out_subsidy_no: string
    }
  }
  export interface WellformedResponse {
    pay_receipt_list: {
      subsidy_receipt_id: string
      stock_id: string
      coupon_code: string
      transaction_id: string
      payer_merchant: string
      payee_merchant: string
      amount: number
      description: string
      status: string
      fail_reason: string
      success_time: string
      out_subsidy_no: string
      create_time: string
    }[]
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing.Busifavor.Subsidy.PayReceipts.PostHttpMethod {
  export interface JsonDataRequest {
    stock_id: string
    coupon_code: string
    transaction_id: string
    payer_merchant: string
    payee_merchant: string
    amount: number
    description: string
    out_subsidy_no: string
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
  }
  export interface WellformedResponse {
    subsidy_receipt_id: string
    stock_id: string
    coupon_code: string
    transaction_id: string
    payer_merchant: string
    payee_merchant: string
    amount: number
    description: string
    status: string
    fail_reason: string
    success_time: string
    out_subsidy_no: string
    create_time: string
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing.Busifavor.Subsidy {
  export interface PayReceipts {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/apis/chapter9_2_16.shtml
     */
    (data: PayReceipts.PostHttpMethod.JsonDataRequest, config?: PayReceipts.PostHttpMethod.RequestConfig): AxiosPromise<PayReceipts.PostHttpMethod.WellformedResponse>
    /**
     * 营销补差付款API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/apis/chapter9_2_16.shtml
     */
    post(data: PayReceipts.PostHttpMethod.JsonDataRequest, config?: PayReceipts.PostHttpMethod.RequestConfig): AxiosPromise<PayReceipts.PostHttpMethod.WellformedResponse>
    /**
     * 查询营销补差付款单列表API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/apis/chapter9_2_19.shtml
     */
    get(config: PayReceipts.GetHttpMethod.RequestConfig): AxiosPromise<PayReceipts.GetHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing.Busifavor {
  export interface Subsidy {
    payReceipts: Subsidy.PayReceipts
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing {
  export interface Busifavor {
    subsidy: Busifavor.Subsidy
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface Marketing {
    busifavor: Marketing.Busifavor
  }
}
namespace WeChatPay.OpenAPI {
  export interface V3 {
    marketing: V3.Marketing
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
wxpay.v3.marketing.busifavor.subsidy.payReceipts.post({
//                                               ^^^^
  stock_id,
  coupon_code,
  transaction_id,
  payer_merchant,
  payee_merchant,
  amount,
  description,
  out_subsidy_no,
})
.then(
  ({ // [!code hl:31]
    data: {
      subsidy_receipt_id,
      stock_id,
      coupon_code,
      transaction_id,
      payer_merchant,
      payee_merchant,
      amount,
      description,
      status,
      fail_reason,
      success_time,
      out_subsidy_no,
      create_time,
    },
  }) => ({
    subsidy_receipt_id,
    stock_id,
    coupon_code,
    transaction_id,
    payer_merchant,
    payee_merchant,
    amount,
    description,
    status,
    fail_reason,
    success_time,
    out_subsidy_no,
    create_time,
  })
)
```
