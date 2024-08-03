---
title: 查询账户实时余额
description: 商户通过此接口可以查询本商户号的账号余额情况。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3_partner/Offline/apis/chapter4_1_20.shtml) [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/ecommerce/amount/chapter3_3.shtml) [官方文档](https://pay.weixin.qq.com/docs/partner/apis/ecommerce-balance/accounts/query-balance.html)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Merchant.Fund.Balance._account_type_.GetHttpMethod {
  export interface RequestConfig extends AxiosRequestConfig {
    account_type: 'BASIC' | 'OPERATION' | 'FEES'
  }
  export interface WellformedResponse {
    available_amount: number
    pending_amount: number
  }
}
namespace WeChatPay.OpenAPI.V3.Merchant.Fund.Balance {
  export interface _account_type_ {
    /**
     * 查询账户实时余额API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/ecommerce/amount/chapter3_3.shtml
     */
    get(config: _account_type_.GetHttpMethod.RequestConfig): AxiosPromise<_account_type_.GetHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Merchant.Fund {
  export interface Balance {
    _account_type_: Balance._account_type_
  }
}
namespace WeChatPay.OpenAPI.V3.Merchant {
  export interface Fund {
    balance: Fund.Balance
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface Merchant {
    fund: Merchant.Fund
  }
}
namespace WeChatPay.OpenAPI {
  export interface V3 {
    merchant: V3.Merchant
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
wxpay.v3.merchant.fund.balance._account_type_.get({
//                                            ^^^
  account_type,
})
.then(
  ({ // [!code hl:9]
    data: {
      available_amount,
      pending_amount,
    },
  }) => ({
    available_amount,
    pending_amount,
  })
)
```
