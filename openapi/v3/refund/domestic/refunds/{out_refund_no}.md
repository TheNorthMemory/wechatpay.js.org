---
title: 查询单笔退款
description: 提交退款申请后，通过调用该接口查询退款状态。退款有一定延时，建议在提交退款申请后1分钟发起查询退款状态，一般来说零钱支付的退款5分钟内到账，银行卡支付的退款1-3个工作日到账。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/apis/chapter3_5_10.shtml) [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3_partner/apis/chapter4_5_10.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Refund.Domestic.Refunds._out_refund_no_.GetHttpMethod {
  export interface RequestConfig extends AxiosRequestConfig {
    out_refund_no: string
    params: {
      sub_mchid?: string
    }
  }
  export interface WellformedResponse {
    refund_id: string
    out_refund_no: string
    transaction_id: string
    out_trade_no: string
    channel: string
    user_received_account: string
    success_time: string
    create_time: string
    status: string
    funds_account: string
    amount: {
      total: number
      refund: number
      from: {
        account: string
        amount: number
      }[]
      payer_total: number
      payer_refund: number
      settlement_refund: number
      settlement_total: number
      discount_refund: number
      currency: string
    }
    promotion_detail?: {
      promotion_id: string
      scope: string
      type: string
      amount: number
      refund_amount: number
      goods_detail?: {
        merchant_goods_id: string
        wechatpay_goods_id: string
        goods_name: string
        unit_price: number
        refund_amount: number
        refund_quantity: number
      }[]
    }[]
  }
}
namespace WeChatPay.OpenAPI.V3.Refund.Domestic.Refunds {
  export interface _out_refund_no_ {
    /**
     * 查询单笔退款API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/apis/chapter3_5_10.shtml
     */
    get(config: _out_refund_no_.GetHttpMethod.RequestConfig): AxiosPromise<_out_refund_no_.GetHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Refund.Domestic {
  export interface Refunds {
    _out_refund_no_: Refunds._out_refund_no_
  }
}
namespace WeChatPay.OpenAPI.V3.Refund {
  export interface Domestic {
    refunds: Domestic.Refunds
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface Refund {
    domestic: Refund.Domestic
  }
}
namespace WeChatPay.OpenAPI {
  export interface V3 {
    refund: V3.Refund
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
wxpay.v3.refund.domestic.refunds._out_refund_no_.get({
//                                               ^^^
  out_refund_no,
  params,
})
.then(
  ({ // [!code hl:16]
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
      funds_account,
      amount,
      promotion_detail,
    },
  }) => amount
//      ^?
)
```

> [!IMPORTANT] 注意：
> 1. 这是一个**直连商户**、**合作伙伴**共用接口，区分以*wxpay*初始化时的**mchid**身份而定，当其是**合作伙伴**商户号时，第二请求参数的**params.sub_mchid**为必填参数
> 1. 本接口只支持根据**商户退款单号**查询，商户退款单号是指商户系统内部的退款单号，商户系统内部唯一；
