---
title: 查询商家券营销补差回退单详情
description: 商户查询商家券营销补差回退单详情
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/apis/chapter9_2_21.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Marketing.Busifavor.Subsidy.ReturnReceipts._subsidy_return_receipt_id_.GetHttpMethod {
  export interface RequestConfig extends AxiosRequestConfig {
    subsidy_return_receipt_id: string
  }
  export interface WellformedResponse {
    subsidy_return_receipt_id: string
    stock_id: string
    coupon_code: string
    transaction_id: string
    refund_id: string
    payer_merchant: string
    payee_merchant: string
    amount: number
    description: string
    status: string
    fail_reason: string
    return_done_time: string
    subsidy_receipt_id: string
    out_subsidy_return_no: string
    return_create_time: string
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing.Busifavor.Subsidy.ReturnReceipts {
  export interface _subsidy_return_receipt_id_ {
    /**
     * 查询商家券营销补差回退单详情
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/apis/chapter9_2_21.shtml
     */
    get(config: _subsidy_return_receipt_id_.GetHttpMethod.RequestConfig): AxiosPromise<_subsidy_return_receipt_id_.GetHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing.Busifavor.Subsidy {
  export interface ReturnReceipts {
    _subsidy_return_receipt_id_: ReturnReceipts._subsidy_return_receipt_id_
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing.Busifavor {
  export interface Subsidy {
    returnReceipts: Subsidy.ReturnReceipts
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
wxpay.v3.marketing.busifavor.subsidy.returnReceipts._subsidy_return_receipt_id_.get({
//                                                                              ^^^
  subsidy_return_receipt_id,
})
.then(
  ({ // [!code hl:35]
    data: {
      subsidy_return_receipt_id,
      stock_id,
      coupon_code,
      transaction_id,
      refund_id,
      payer_merchant,
      payee_merchant,
      amount,
      description,
      status,
      fail_reason,
      return_done_time,
      subsidy_receipt_id,
      out_subsidy_return_no,
      return_create_time,
    },
  }) => ({
    subsidy_return_receipt_id,
    stock_id,
    coupon_code,
    transaction_id,
    refund_id,
    payer_merchant,
    payee_merchant,
    amount,
    description,
    status,
    fail_reason,
    return_done_time,
    subsidy_receipt_id,
    out_subsidy_return_no,
    return_create_time,
  })
)
```
