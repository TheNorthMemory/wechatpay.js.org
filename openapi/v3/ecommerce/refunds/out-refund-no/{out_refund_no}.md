---
title: 通过商户退款单号查询退款(平台收付通)
description: 提交退款申请后，通过调用该接口查询退款状态。
---

# {{ $frontmatter.title }}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/ecommerce/refunds/chapter3_2.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Ecommerce.Refunds.OutRefundNo._out_refund_no_.GetHttpMethod {
  export interface RequestConfig extends AxiosRequestConfig {
    out_refund_no: string
    params: {
      sub_mchid: string
    }
  }
  export interface WellformedResponse {
    refund_id: string
    out_refund_no: string
    transaction_id: string
    out_trade_no: string
    channel: string
    user_received_account: string
    success_time: string | Date
    create_time: string | Date
    status: string
    amount: {
      refund: number
      payer_refund: number
      discount_refund: number
      currency: string
    }
    promotion_detail: {
      promotion_id: string
      scope: string
      type: string
      amount: number
      refund_amount: number
    }[]
  }
}
namespace WeChatPay.OpenAPI.V3.Ecommerce.Refunds.OutRefundNo {
  export interface _out_refund_no_ {
    /**
     * 通过商户退款单号查询退款
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/ecommerce/refunds/chapter3_2.shtml
     */
    get(config: _out_refund_no_.GetHttpMethod.RequestConfig): AxiosPromise<_out_refund_no_.GetHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Ecommerce.Refunds {
  export interface OutRefundNo {
    _out_refund_no_: OutRefundNo._out_refund_no_
  }
}
namespace WeChatPay.OpenAPI.V3.Ecommerce {
  export interface Refunds {
    outRefundNo: Refunds.OutRefundNo
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface Ecommerce {
    refunds: Ecommerce.Refunds
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
wxpay.v3.ecommerce.refunds.outRefundNo._out_refund_no_.get({
//                                                     ^^^
  out_refund_no,
  params,
})
.then(
  ({ // [!code hl:27]
    data: {
      refund_id,
      out_refund_no,
      transaction_id,
      out_trade_no,
      channel,
      user_received_account,
      success_time,
      create_time,
      status,
      amount,
      promotion_detail,
    },
  }) => ({
    refund_id,
    out_refund_no,
    transaction_id,
    out_trade_no,
    channel,
    user_received_account,
    success_time,
    create_time,
    status,
    amount,
    promotion_detail,
  })
)
```