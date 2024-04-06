---
title: 查询营销补差付款单详情
description: 查询商家券营销补差付款单详情
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/apis/chapter9_2_18.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Marketing.Busifavor.Subsidy.PayReceipts._subsidy_receipt_id_.GetHttpMethod {
  export interface RequestConfig extends AxiosRequestConfig {
    subsidy_receipt_id: string
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
namespace WeChatPay.OpenAPI.V3.Marketing.Busifavor.Subsidy.PayReceipts {
  export interface _subsidy_receipt_id_ {
    /**
     * 查询营销补差付款单详情API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/apis/chapter9_2_18.shtml
     */
    get(config: _subsidy_receipt_id_.GetHttpMethod.RequestConfig): AxiosPromise<_subsidy_receipt_id_.GetHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing.Busifavor.Subsidy {
  export interface PayReceipts {
    _subsidy_receipt_id_: PayReceipts._subsidy_receipt_id_
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
wxpay.v3.marketing.busifavor.subsidy.payReceipts._subsidy_receipt_id_.get({
//                                                                    ^^^
  subsidy_receipt_id,
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
