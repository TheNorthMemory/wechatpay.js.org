---
title: 查询订单剩余可出境余额
description: 电商收付通中，针对多次请求出境的场景，商家需要查询可出境金额之后再进行出境请求其中：订单剩余可出境金额=订单可出境金额-已累计出境金额
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.FundsToOversea.Transactions._transaction_id_.Available_abroad_amounts.GetHttpMethod {
  export interface RequestConfig extends AxiosRequestConfig {
    transaction_id: string
    params: {
      sub_mchid: string
    }
  }
  export interface WellformedResponse {
    transaction_id: string
    available_abroad_amount: number
  }
}
namespace WeChatPay.OpenAPI.V3.FundsToOversea.Transactions._transaction_id_ {
  export interface Available_abroad_amounts {
    /**
     * 查询订单剩余可出境余额API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3_partner/apis/chapter7_10_1.shtml
     */
    get(config: Available_abroad_amounts.GetHttpMethod.RequestConfig): AxiosPromise<Available_abroad_amounts.GetHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.FundsToOversea.Transactions {
  export interface _transaction_id_ {
    available_abroad_amounts: _transaction_id_.Available_abroad_amounts
  }
}
namespace WeChatPay.OpenAPI.V3.FundsToOversea {
  export interface Transactions {
    _transaction_id_: Transactions._transaction_id_
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface FundsToOversea {
    transactions: FundsToOversea.Transactions
  }
}
namespace WeChatPay.OpenAPI {
  export interface V3 {
    fundsToOversea: V3.FundsToOversea
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
wxpay.v3.fundsToOversea.transactions._transaction_id_.available_abroad_amounts.get({
//                                                                             ^^^
  transaction_id,
  params,
})
.then(
  ({ // [!code hl:9]
    data: {
      transaction_id,
      available_abroad_amount,
    },
  }) => ({
    transaction_id,
    available_abroad_amount,
  })
)
```

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012476109)
