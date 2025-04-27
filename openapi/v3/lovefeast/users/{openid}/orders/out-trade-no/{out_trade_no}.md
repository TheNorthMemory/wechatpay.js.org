---
title: 查询用户捐赠单详情
description: 商户根据商户订单号与用户标识查询捐赠单详情
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Lovefeast.Users._openid_.Orders.OutTradeNo._out_trade_no_.GetHttpMethod {
  export interface RequestConfig extends AxiosRequestConfig {
    openid: string
    out_trade_no: string
  }
  export interface WellformedResponse {
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
    }
    device_id: string
  }
}
namespace WeChatPay.OpenAPI.V3.Lovefeast.Users._openid_.Orders.OutTradeNo {
  export interface _out_trade_no_ {
    /**
     * 查询用户捐赠单详情
     * @link 商户根据商户订单号与用户标识查询捐赠单详情
     */
    get(config: _out_trade_no_.GetHttpMethod.RequestConfig): AxiosPromise<_out_trade_no_.GetHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Lovefeast.Users._openid_.Orders {
  export interface OutTradeNo {
    _out_trade_no_: OutTradeNo._out_trade_no_
  }
}
namespace WeChatPay.OpenAPI.V3.Lovefeast.Users._openid_ {
  export interface Orders {
    outTradeNo: Orders.OutTradeNo
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
wxpay.v3.lovefeast.users._openid_.orders.outTradeNo._out_trade_no_.get({
//                                                                 ^^^
  openid,
  out_trade_no,
})
.then(
  ({ // [!code hl:31]
    data: {
      welfare_trade_id,
      appid,
      sub_appid,
      brand_id,
      donate_source,
      merchant_order,
      institution_name,
      business_id,
      business_name,
      success_time,
      payer,
      amount,
      device_id,
    },
  }) => ({
    welfare_trade_id,
    appid,
    sub_appid,
    brand_id,
    donate_source,
    merchant_order,
    institution_name,
    business_id,
    business_name,
    success_time,
    payer,
    amount,
    device_id,
  })
)
```
