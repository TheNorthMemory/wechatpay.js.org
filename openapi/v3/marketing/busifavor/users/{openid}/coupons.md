---
title: 根据过滤条件查询用户券
description: 服务商自定义筛选条件（如创建商户号、归属商户号、发放商户号等），查询指定微信用户卡包中满足对应条件的所有商家券信息。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Marketing.Busifavor.Users._openid_.Coupons.GetHttpMethod {
  export interface RequestConfig extends AxiosRequestConfig {
    openid: string
    params: {
      appid: string
      stock_id: string
      coupon_state: string
      creator_merchant: string
      belong_merchant: string
      sender_merchant: string
      offset: number
      limit: number
    }
  }
  export interface WellformedResponse {
    total_count: number
    offset: number
    limit: number
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing.Busifavor.Users._openid_ {
  export interface Coupons {
    /**
     * 根据过滤条件查询用户券API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/apis/chapter9_2_4.shtml
     */
    get(config: Coupons.GetHttpMethod.RequestConfig): AxiosPromise<Coupons.GetHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing.Busifavor.Users {
  export interface _openid_ {
    coupons: _openid_.Coupons
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing.Busifavor {
  export interface Users {
    _openid_: Users._openid_
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing {
  export interface Busifavor {
    users: Busifavor.Users
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
wxpay.v3.marketing.busifavor.users._openid_.coupons.get({
//                                                  ^^^
  openid,
  params,
})
.then(
  ({ // [!code hl:11]
    data: {
      total_count,
      offset,
      limit,
    },
  }) => ({
    total_count,
    offset,
    limit,
  })
)
```

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4012534963) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012693087)
