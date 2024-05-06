---
title: 电商合单委托代扣支付
description: 商户可以通过该接口发起免密的合单支付
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3_partner/Offline/apis/chapter5_5_4.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Ecommerce.CombinePapay.Transactions.PostHttpMethod {
  export interface JsonDataRequest {
    combine_appid: string
    combine_mchid: string
    combine_out_trade_no: string
    contract_id: string
    sub_orders: {
      mchid: string
      attach: string
      amount: {
        total_amount: number
        currency: string
      }
      out_trade_no: string
      sub_mchid: string
      sub_appid: string
      description: string
      settle_info: {
        profit_sharing: boolean
        subsidy_amount: number
      }
    }[]
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
  }
  export interface WellformedResponse {
    combine_appid: string
    combine_mchid: string
    combine_out_trade_no: string
    sub_orders: {
      mchid: string
      trade_type: string
      trade_state: string
      bank_type: string
      attach: string
      success_time: string
      transaction_id: string
      out_trade_no: string
      sub_mchid: string
      sub_appid: string
      amount: {
        total_amount: number
        currency: string
        payer_amount: number
        payer_currency: string
      }
    }[]
    combine_payer_info: {
      openid: string
    }
  }
}
namespace WeChatPay.OpenAPI.V3.Ecommerce.CombinePapay {
  export interface Transactions {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3_partner/Offline/apis/chapter5_5_4.shtml
     */
    (data: Transactions.PostHttpMethod.JsonDataRequest, config?: Transactions.PostHttpMethod.RequestConfig): AxiosPromise<Transactions.PostHttpMethod.WellformedResponse>
    /**
     * 电商合单委托代扣支付API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3_partner/Offline/apis/chapter5_5_4.shtml
     */
    post(data: Transactions.PostHttpMethod.JsonDataRequest, config?: Transactions.PostHttpMethod.RequestConfig): AxiosPromise<Transactions.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Ecommerce {
  export interface CombinePapay {
    transactions: CombinePapay.Transactions
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface Ecommerce {
    combinePapay: Ecommerce.CombinePapay
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
wxpay.v3.ecommerce.combinePapay.transactions.post({
//                                           ^^^^
  combine_appid,
  combine_mchid,
  combine_out_trade_no,
  contract_id,
  sub_orders,
})
.then(
  ({ // [!code hl:15]
    data: {
      combine_appid,
      combine_mchid,
      combine_out_trade_no,
      sub_orders,
      combine_payer_info,
    },
  }) => ({
    combine_appid,
    combine_mchid,
    combine_out_trade_no,
    sub_orders,
    combine_payer_info,
  })
)
```
