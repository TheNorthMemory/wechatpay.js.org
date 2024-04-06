---
title: 同业过滤标签管理
description: 服务商使用此接口为特约商户配置同业过滤标签，防止特约商户支付后出现同行业的广告内容。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/goldplan/chapter3_3.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Goldplan.Merchants.SetAdvertisingIndustryFilter.PostHttpMethod {
  export interface JsonDataRequest {
    sub_mchid: string
    advertising_industry_filters: ('E_COMMERCE' | 'LOVE_MARRIAGE' | 'POTOGRAPHY' | 'EDUCATION' | 'FINANCE' | 'TOURISM' | 'SKINCARE' | 'FOOD' | 'SPORT' | 'JEWELRY_WATCH' | 'HEALTHCARE' | 'BUSSINESS' | 'PARENTING' | 'CATERING' | 'RETAIL' | 'SERVICES' | 'LAW' | 'ESTATE' | 'TRANSPORTATION' | 'ENERGY_SAVING' | 'SECURITY' | 'BUILDING_MATERIAL' | 'COMMUNICATION' | 'MERCHANDISE' | 'ASSOCIATION' | 'COMMUNITY' | 'ONLINE_AVR' | 'WE_MEDIA' | 'CAR' | 'SOFTWARE' | 'GAME' | 'CLOTHING' | 'INDUSTY' | 'AGRICULTURE' | 'PUBLISHING_MEDIA' | 'HOME_DIGITAL')[]
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
  }
  export interface WellformedResponse {
  }
}
namespace WeChatPay.OpenAPI.V3.Goldplan.Merchants {
  export interface SetAdvertisingIndustryFilter {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/goldplan/chapter3_3.shtml
     */
    (data: SetAdvertisingIndustryFilter.PostHttpMethod.JsonDataRequest, config?: SetAdvertisingIndustryFilter.PostHttpMethod.RequestConfig): AxiosPromise<SetAdvertisingIndustryFilter.PostHttpMethod.WellformedResponse>
    /**
     * 同业过滤标签管理API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/goldplan/chapter3_3.shtml
     */
    post(data: SetAdvertisingIndustryFilter.PostHttpMethod.JsonDataRequest, config?: SetAdvertisingIndustryFilter.PostHttpMethod.RequestConfig): AxiosPromise<SetAdvertisingIndustryFilter.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Goldplan {
  export interface Merchants {
    setAdvertisingIndustryFilter: Merchants.SetAdvertisingIndustryFilter
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
wxpay.v3.goldplan.merchants.setAdvertisingIndustryFilter.post({
//                                                       ^^^^
  sub_mchid,
  advertising_industry_filters,
})
.then(({ status }) => status === 204) // [!code hl]
```
