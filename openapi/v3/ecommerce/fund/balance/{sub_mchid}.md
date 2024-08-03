---
title: 查询二级商户账户实时余额(平台收付通)
description: 服务商通过此接口可以查询特约商户账户余额信息。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3_partner/Offline/apis/chapter4_1_19.shtml) [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/ecommerce/amount/chapter3_1.shtml) [官方文档](https://pay.weixin.qq.com/docs/partner/apis/ecommerce-balance/accounts/query-e-commerce-balance.html)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Ecommerce.Fund.Balance._sub_mchid_.GetHttpMethod {
  export interface RequestConfig extends AxiosRequestConfig {
    sub_mchid: string
    params: {
      account_type?: 'BASIC' | 'OPERATION' | 'FEES' | 'DEPOSIT'
    }
  }
  export interface WellformedResponse {
    sub_mchid: string
    available_amount: number
    pending_amount: number
    account_type?: 'BASIC' | 'OPERATION' | 'FEES' | 'DEPOSIT'
  }
}
namespace WeChatPay.OpenAPI.V3.Ecommerce.Fund.Balance {
  export interface _sub_mchid_ {
    /**
     * 查询二级商户账户实时余额API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/ecommerce/amount/chapter3_1.shtml
     */
    get(config: _sub_mchid_.GetHttpMethod.RequestConfig): AxiosPromise<_sub_mchid_.GetHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Ecommerce.Fund {
  export interface Balance {
    _sub_mchid_: Balance._sub_mchid_
  }
}
namespace WeChatPay.OpenAPI.V3.Ecommerce {
  export interface Fund {
    balance: Fund.Balance
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface Ecommerce {
    fund: Ecommerce.Fund
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
wxpay.v3.ecommerce.fund.balance._sub_mchid_.get({
//                                          ^^^
  sub_mchid,
  params,
})
.then(
  ({ // [!code hl:13]
    data: {
      sub_mchid,
      available_amount,
      pending_amount,
      account_type,
    },
  }) => ({
    sub_mchid,
    available_amount,
    pending_amount,
    account_type,
  })
)
```