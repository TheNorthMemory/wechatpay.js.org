---
title: 查询账户日终余额
description: 通过此接口可以查询本商户号指定日期当天24点的账户余额。**注意：**• 可查询90天内的日终余额。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/ecommerce/amount/chapter3_4.shtml) [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3_partner/Offline/apis/chapter4_1_21.shtml) [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/ecommerce/amount/chapter3_4.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Merchant.Fund.Dayendbalance._account_type_.GetHttpMethod {
  export interface RequestConfig extends AxiosRequestConfig {
    account_type: 'BASIC' | 'OPERATION' | 'FEES'
    params: {
      bill_date: string
    }
  }
  export interface WellformedResponse {
    available_amount: number
    pending_amount: number
  }
}
namespace WeChatPay.OpenAPI.V3.Merchant.Fund.Dayendbalance {
  export interface _account_type_ {
    /**
     * 查询账户日终余额API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/ecommerce/amount/chapter3_4.shtml
     */
    get(config: _account_type_.GetHttpMethod.RequestConfig): AxiosPromise<_account_type_.GetHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Merchant.Fund {
  export interface Dayendbalance {
    _account_type_: Dayendbalance._account_type_
  }
}
namespace WeChatPay.OpenAPI.V3.Merchant {
  export interface Fund {
    dayendbalance: Fund.Dayendbalance
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
wxpay.v3.merchant.fund.dayendbalance._account_type_.get({
//                                                  ^^^
  account_type,
  params,
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
