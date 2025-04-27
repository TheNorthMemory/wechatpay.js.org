---
title: 修改批次预算
description: 商户可以通过该接口修改批次单天发放上限数量或者批次最大发放数量
---

# {{ $frontmatter.title }} {#patch}

{{ $frontmatter.description }}

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Marketing.Busifavor.Stocks._stock_id_.Budget.PatchHttpMethod {
  export interface JsonDataRequest {
    target_max_coupons: number
    target_max_coupons_by_day: number
    current_max_coupons: number
    current_max_coupons_by_day: number
    modify_budget_request_no: string
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
    stock_id: string
  }
  export interface WellformedResponse {
    max_coupons: number
    max_coupons_by_day: number
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing.Busifavor.Stocks._stock_id_ {
  export interface Budget {
    /**
     * 修改批次预算API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/apis/chapter9_2_11.shtml
     */
    patch(data: Budget.PatchHttpMethod.JsonDataRequest, config: Budget.PatchHttpMethod.RequestConfig): AxiosPromise<Budget.PatchHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing.Busifavor.Stocks {
  export interface _stock_id_ {
    budget: _stock_id_.Budget
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing.Busifavor {
  export interface Stocks {
    _stock_id_: Stocks._stock_id_
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing {
  export interface Busifavor {
    stocks: Busifavor.Stocks
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface Marketing {
    busifavor: Marketing.Busifavor
  }
}
namespace WeChatPay.OpenAPI {
  export interface V3 {
    marketing: V3.Marketing
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
wxpay.v3.marketing.busifavor.stocks._stock_id_.budget.patch({
//                                                    ^^^^^
  target_max_coupons,
  target_max_coupons_by_day,
  current_max_coupons,
  current_max_coupons_by_day,
  modify_budget_request_no,
})
.then(
  ({ // [!code hl:9]
    data: {
      max_coupons,
      max_coupons_by_day,
    },
  }) => ({
    max_coupons,
    max_coupons_by_day,
  })
)
```

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4012465739) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012465809)
