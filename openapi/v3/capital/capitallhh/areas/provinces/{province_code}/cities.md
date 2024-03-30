---
title: 查询城市列表
description: 通过本接口根据省份编码获取省份下的城市列表信息，不包含中国港澳台地区城市信息，可用于支行数据过滤查询
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3_partner/Offline/apis/chapter11_2_5.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Capital.Capitallhh.Areas.Provinces._province_code_.Cities.GetHttpMethod {
  export interface RequestConfig extends AxiosRequestConfig {
    province_code: number
  }
  export interface WellformedResponse {
    data: {
      city_name: string
      city_code: number
    }[]
    total_count: number
  }
}
namespace WeChatPay.OpenAPI.V3.Capital.Capitallhh.Areas.Provinces._province_code_ {
  export interface Cities {
    /**
     * 查询城市列表API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3_partner/Offline/apis/chapter11_2_5.shtml
     */
    get(config: Cities.GetHttpMethod.RequestConfig): AxiosPromise<Cities.GetHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Capital.Capitallhh.Areas.Provinces {
  export interface _province_code_ {
    cities: _province_code_.Cities
  }
}
namespace WeChatPay.OpenAPI.V3.Capital.Capitallhh.Areas {
  export interface Provinces {
    _province_code_: Provinces._province_code_
  }
}
namespace WeChatPay.OpenAPI.V3.Capital.Capitallhh {
  export interface Areas {
    provinces: Areas.Provinces
  }
}
namespace WeChatPay.OpenAPI.V3.Capital {
  export interface Capitallhh {
    areas: Capitallhh.Areas
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface Capital {
    capitallhh: Capital.Capitallhh
  }
}
namespace WeChatPay.OpenAPI {
  export interface V3 {
    capital: V3.Capital
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
wxpay.v3.capital.capitallhh.areas.provinces._province_code_.cities.get({
//                                                                 ^^^
  province_code,
})
.then(
  ({ // [!code hl:9]
    data: {
      data,
      total_count,
    },
  }) => ({
    data,
    total_count,
  })
)
```
