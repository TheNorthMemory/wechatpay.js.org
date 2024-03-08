---
title: 查询剩余待分金额
description: 可调用此接口查询订单剩余待分金额
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3_partner/apis/chapter8_1_6.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Profitsharing.Transactions._transaction_id_.Amounts.GetHttpMethod {
  export interface RequestConfig extends AxiosRequestConfig {
    transaction_id: string
  }
  export interface WellformedResponse {
    transaction_id: string
    unsplit_amount: number
  }
}
namespace WeChatPay.OpenAPI.V3.Profitsharing.Transactions._transaction_id_ {
  export interface Amounts {
    /**
     * 查询剩余待分金额API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3_partner/apis/chapter8_1_6.shtml
     */
    get(config: Amounts.GetHttpMethod.RequestConfig): AxiosPromise<Amounts.GetHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Profitsharing.Transactions {
  export interface _transaction_id_ {
    amounts: _transaction_id_.Amounts
  }
}
namespace WeChatPay.OpenAPI.V3.Profitsharing {
  export interface Transactions {
    _transaction_id_: Transactions._transaction_id_
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface Profitsharing {
    transactions: Profitsharing.Transactions
  }
}
namespace WeChatPay.OpenAPI {
  export interface V3 {
    profitsharing: V3.Profitsharing
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
wxpay.v3.profitsharing.transactions._transaction_id_.amounts.get({
//                                                           ^^^
  transaction_id,
})
.then(
  ({ // [!code hl:9]
    data: {
      transaction_id,
      unsplit_amount,
    },
  }) => ({
    transaction_id,
    unsplit_amount,
  })
)
```
