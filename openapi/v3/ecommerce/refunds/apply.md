---
title: 退款申请(平台收付通)
description: 当交易发生之后一段时间内，由于买家或者卖家的原因需要退款时，卖家可以通过退款接口将支付款退还给买家，微信支付将在收到退款请求并且验证成功之后，按照退款规则将支付款按原路退到买家帐号上。
---

# {{ $frontmatter.title }}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/ecommerce/refunds/chapter3_1.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Ecommerce.Refunds.Apply.PostHttpMethod {
  export interface JsonDataRequest {
    sub_mchid: string
    sp_appid: string
    sub_appid: string
    transaction_id: string
    out_trade_no: string
    out_refund_no: string
    reason: string
    amount: {
      refund: number
      total: number
      currency: string
    }
    notify_url: string
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
  }
  export interface WellformedResponse {
    refund_id: string
    out_refund_no: string
    create_time: string
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
namespace WeChatPay.OpenAPI.V3.Ecommerce.Refunds {
  export interface Apply {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/ecommerce/refunds/chapter3_1.shtml
     */
    (data: Apply.PostHttpMethod.JsonDataRequest, config?: Apply.PostHttpMethod.RequestConfig): AxiosPromise<Apply.PostHttpMethod.WellformedResponse>
    /**
     * 退款申请API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/ecommerce/refunds/chapter3_1.shtml
     */
    post(data: Apply.PostHttpMethod.JsonDataRequest, config?: Apply.PostHttpMethod.RequestConfig): AxiosPromise<Apply.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Ecommerce {
  export interface Refunds {
    apply: Refunds.Apply
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
wxpay.v3.ecommerce.refunds.apply.post({
//                               ^^^^
  sub_mchid,
  sp_appid,
  sub_appid,
  transaction_id,
  out_trade_no,
  out_refund_no,
  reason,
  amount,
  notify_url,
})
.then(
  ({ // [!code hl:15]
    data: {
      refund_id,
      out_refund_no,
      create_time,
      amount,
      promotion_detail,
    },
  }) => ({
    refund_id,
    out_refund_no,
    create_time,
    amount,
    promotion_detail,
  })
)
```