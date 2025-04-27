---
title: 查询二级商户账户日终余额(平台收付通)
description: 电商服务商通过该接口可以查询二级商户指定日期当天24点的账户余额。**注意：**• 可查询90天内的日终余额。• 当日日终余额在次日生成，建议商户在上午 10 点以后查询。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Ecommerce.Fund.Enddaybalance._sub_mchid_.GetHttpMethod {
  export interface RequestConfig extends AxiosRequestConfig {
    sub_mchid: string
    params: {
      date: string
      account_type?: 'BASIC' | 'DEPOSIT'
    }
  }
  export interface WellformedResponse {
    sub_mchid: string
    available_amount: number
    pending_amount: number
    account_type?: 'BASIC' | 'DEPOSIT'
  }
}
namespace WeChatPay.OpenAPI.V3.Ecommerce.Fund.Enddaybalance {
  export interface _sub_mchid_ {
    /**
     * 查询二级商户账户日终余额API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/ecommerce/amount/chapter3_2.shtml
     */
    get(config: _sub_mchid_.GetHttpMethod.RequestConfig): AxiosPromise<_sub_mchid_.GetHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Ecommerce.Fund {
  export interface Enddaybalance {
    _sub_mchid_: Enddaybalance._sub_mchid_
  }
}
namespace WeChatPay.OpenAPI.V3.Ecommerce {
  export interface Fund {
    enddaybalance: Fund.Enddaybalance
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
wxpay.v3.ecommerce.fund.enddaybalance._sub_mchid_.get({
//                                                ^^^
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

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012476693)
