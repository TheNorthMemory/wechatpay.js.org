---
title: 开通广告展示
description: 此接口为特约商户的点金计划页面开通广告展示功能，可同时配置同业过滤标签，防止特约商户支付后出现同行业的广告内容。
---

# {{ $frontmatter.title }} {#patch}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3_partner/apis/chapter8_5_4.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Goldplan.Merchants.OpenAdvertisingShow.PatchHttpMethod {
  export interface JsonDataRequest {
    sub_mchid: string
    advertising_industry_filters?: ('E_COMMERCE' | 'LOVE_MARRIAGE' | 'POTOGRAPHY' | 'EDUCATION' | 'FINANCE' | 'TOURISM' | 'SKINCARE' | 'FOOD' | 'SPORT' | 'JEWELRY_WATCH' | 'HEALTHCARE' | 'BUSSINESS' | 'PARENTING' | 'CATERING' | 'RETAIL' | 'SERVICES' | 'LAW' | 'ESTATE' | 'TRANSPORTATION' | 'ENERGY_SAVING' | 'SECURITY' | 'BUILDING_MATERIAL' | 'COMMUNICATION' | 'MERCHANDISE' | 'ASSOCIATION' | 'COMMUNITY' | 'ONLINE_AVR' | 'WE_MEDIA' | 'CAR' | 'SOFTWARE' | 'GAME' | 'CLOTHING' | 'INDUSTY' | 'AGRICULTURE' | 'PUBLISHING_MEDIA' | 'HOME_DIGITAL')[]
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
  }
  export interface WellformedResponse {
  }
}
namespace WeChatPay.OpenAPI.V3.Goldplan.Merchants {
  export interface OpenAdvertisingShow {
    /**
     * 开通广告展示API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3_partner/apis/chapter8_5_4.shtml
     */
    patch(data: OpenAdvertisingShow.PatchHttpMethod.JsonDataRequest, config?: OpenAdvertisingShow.PatchHttpMethod.RequestConfig): AxiosPromise<OpenAdvertisingShow.PatchHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Goldplan {
  export interface Merchants {
    openAdvertisingShow: Merchants.OpenAdvertisingShow
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface Goldplan {
    merchants: Goldplan.Merchants
  }
}
namespace WeChatPay.OpenAPI {
  export interface V3 {
    goldplan: V3.Goldplan
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
wxpay.v3.goldplan.merchants.openAdvertisingShow.patch({
//                                              ^^^^^
  sub_mchid,
  advertising_industry_filters,
})
.then(({ status }) => status === 204) // [!code hl]
```
