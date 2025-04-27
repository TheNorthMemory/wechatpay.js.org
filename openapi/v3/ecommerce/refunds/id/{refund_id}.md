---
title: 通过微信支付退款单号查询退款(平台收付通)
description: 提交退款申请后，通过调用该接口查询退款状态。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Ecommerce.Refunds.Id._refund_id_.GetHttpMethod {
  export interface RequestConfig extends AxiosRequestConfig {
    refund_id: string
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
      from?: {
        account: 'AVAILABLE' | 'UNAVAILABLE'
        amount: number
      }[]
      payer_refund: number
      advance: number
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
    refund_account: 'REFUND_SOURCE_SUB_MERCHANT' | 'REFUND_SOURCE_PARTNER_ADVANCE'
    funds_account: 'AVAILABLE'
  }
}
namespace WeChatPay.OpenAPI.V3.Ecommerce.Refunds.Id {
  export interface _refund_id_ {
    /**
     * 通过微信支付退款单号查询退款
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/ecommerce/refunds/chapter3_2.shtml
     */
    get(config: _refund_id_.GetHttpMethod.RequestConfig): AxiosPromise<_refund_id_.GetHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Ecommerce.Refunds {
  export interface Id {
    _refund_id_: Id._refund_id_
  }
}
namespace WeChatPay.OpenAPI.V3.Ecommerce {
  export interface Refunds {
    id: Refunds.Id
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
wxpay.v3.ecommerce.refunds.id._refund_id_.get({
//                                        ^^^
  refund_id,
  params,
})
.then(
  ({ // [!code hl:31]
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
      refund_account,
      funds_account,
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
    refund_account,
    funds_account,
  })
)
```

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012650253) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012476908)
