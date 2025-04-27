---
title: 电商合单委托代扣查询订单
description: 商户可以通过该接口发起免密的合单查询
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Ecommerce.CombinePapay.Transactions._combine_out_trade_no_.GetHttpMethod {
  export interface RequestConfig extends AxiosRequestConfig {
    combine_out_trade_no: string
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
namespace WeChatPay.OpenAPI.V3.Ecommerce.CombinePapay.Transactions {
  export interface _combine_out_trade_no_ {
    /**
     * 电商合单委托代扣查询订单API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3_partner/Offline/apis/chapter5_5_6.shtml
     */
    get(config: _combine_out_trade_no_.GetHttpMethod.RequestConfig): AxiosPromise<_combine_out_trade_no_.GetHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Ecommerce.CombinePapay {
  export interface Transactions {
    _combine_out_trade_no_: Transactions._combine_out_trade_no_
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
wxpay.v3.ecommerce.combinePapay.transactions._combine_out_trade_no_.get({
//                                                                  ^^^
  combine_out_trade_no,
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

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012884130)
