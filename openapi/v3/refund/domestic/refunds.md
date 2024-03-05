---
title: 申请退款
description: 当交易发生之后一年内，由于买家或者卖家的原因需要退款时，卖家可以通过退款接口将支付金额退还给买家，微信支付将在收到退款请求并且验证成功之后，将支付款按原路退还至买家账号上。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/apis/chapter3_5_9.shtml) [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3_partner/apis/chapter4_5_9.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Refund.Domestic.Refunds.PostHttpMethod {
  export interface JsonDataRequest {
    sub_mchid?: string
    transaction_id: string
    out_trade_no: string
    out_refund_no: string
    reason: string
    notify_url: string
    funds_account: string
    amount: {
      refund: number
      from: {
        account: string
        amount: number
      }[]
      total: number
      currency: string
    }
    goods_detail?: {
      merchant_goods_id: string
      wechatpay_goods_id: string
      goods_name: string
      unit_price: number
      refund_amount: number
      refund_quantity: number
    }[]
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
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
      goods_detail: {
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
namespace WeChatPay.OpenAPI.V3.Refund.Domestic {
  export interface Refunds {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/apis/chapter3_5_9.shtml
     */
    (data: Refunds.PostHttpMethod.JsonDataRequest, config?: Refunds.PostHttpMethod.RequestConfig): AxiosPromise<Refunds.PostHttpMethod.WellformedResponse>
    /**
     * 申请退款API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/apis/chapter3_5_9.shtml
     */
    post(data: Refunds.PostHttpMethod.JsonDataRequest, config?: Refunds.PostHttpMethod.RequestConfig): AxiosPromise<Refunds.PostHttpMethod.WellformedResponse>
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
wxpay.v3.refund.domestic.refunds.post({
//                               ^^^^
  sub_mchid,
  transaction_id,
  out_trade_no,
  out_refund_no,
  reason,
  notify_url,
  funds_account,
  amount,
  goods_detail,
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
> 1. 这是一个**直连商户**、**合作伙伴**共用接口，区分以*wxpay*初始化时的**mchid**身份而定，当其是**合作伙伴**商户号时，请求参数的**sub_mchid**为必填参数
> 1. 交易时间超过一年的订单无法提交退款
> 2. 微信支付退款支持单笔交易分多次退款（不超50次），多次退款需要提交原支付订单的商户订单号和设置不同的退款单号。申请退款总金额不能超过订单金额。 一笔退款失败后重新提交，请不要更换退款单号，请使用原商户退款单号
> 3. 错误或无效请求频率限制：6qps，即每秒钟异常或错误的退款申请请求不超过6次
> 4. 每个支付订单的部分退款次数不能超过50次
> 5. 如果同一个用户有多笔退款，建议分不同批次进行退款，避免并发退款导致退款失败
> 6. 申请退款接口的返回仅代表业务的受理情况，具体退款是否成功，需要通过退款查询接口获取结果
> 7. 一个月之前的订单申请退款频率限制为：5000/min
> 8. 同一笔订单多次退款的请求需相隔1分钟
