---
title: 查询用户捐赠单列表
description: 商户可根据品牌ID与用户标识查询捐赠单列表
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Lovefeast.Users._openid_.Orders.BrandId._brand_id_.GetHttpMethod {
  export interface RequestConfig extends AxiosRequestConfig {
    openid: string
    brand_id: string
    params: {
      offset: number
      limit: number
    }
  }
  export interface WellformedResponse {
    count: number
    limit: number
    offset: number
    total_count: number
    data: {
      welfare_trade_id: string
      appid: string
      sub_appid: string
      brand_id: string
      donate_source: string
      merchant_order: string
      institution_name: string
      business_id: string
      business_name: string
      success_time: string
      payer: {
        openid: string
        sub_openid: string
        avatar: string
        nickname: string
      }
      amount: {
        total: number
        payer_total: number
        currency: string
        payer_currency: string
      }
      device_id: string
    }[]
  }
}
namespace WeChatPay.OpenAPI.V3.Lovefeast.Users._openid_.Orders.BrandId {
  export interface _brand_id_ {
    /**
     * 查询用户捐赠单列表
     * @link 商户可根据品牌ID与用户标识查询捐赠单列表
     */
    get(config: _brand_id_.GetHttpMethod.RequestConfig): AxiosPromise<_brand_id_.GetHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Lovefeast.Users._openid_.Orders {
  export interface BrandId {
    _brand_id_: BrandId._brand_id_
  }
}
namespace WeChatPay.OpenAPI.V3.Lovefeast.Users._openid_ {
  export interface Orders {
    brandId: Orders.BrandId
  }
}
namespace WeChatPay.OpenAPI.V3.Lovefeast.Users {
  export interface _openid_ {
    orders: _openid_.Orders
  }
}
namespace WeChatPay.OpenAPI.V3.Lovefeast {
  export interface Users {
    _openid_: Users._openid_
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface Lovefeast {
    users: Lovefeast.Users
  }
}
namespace WeChatPay.OpenAPI {
  export interface V3 {
    lovefeast: V3.Lovefeast
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
wxpay.v3.lovefeast.users._openid_.orders.brandId._brand_id_.get({
//                                                          ^^^
  openid,
  brand_id,
  params,
})
.then(
  ({ // [!code hl:15]
    data: {
      count,
      limit,
      offset,
      total_count,
      data,
    },
  }) => ({
    count,
    limit,
    offset,
    total_count,
    data,
  })
)
```
