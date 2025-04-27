---
title: 查询省份列表
description: 通过本接口获取省份列表数据（不包含中国港澳台地区），可用于省份下的城市数据查询
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Capital.Capitallhh.Areas.Provinces.GetHttpMethod {
  export interface RequestConfig extends AxiosRequestConfig {
  }
  export interface WellformedResponse {
    data: {
      province_name: string
      province_code: number
    }[]
    total_count: number
  }
}
namespace WeChatPay.OpenAPI.V3.Capital.Capitallhh.Areas {
  export interface Provinces {
    /**
     * 查询省份列表API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3_partner/Offline/apis/chapter11_2_4.shtml
     */
    get(config?: Provinces.GetHttpMethod.RequestConfig): AxiosPromise<Provinces.GetHttpMethod.WellformedResponse>
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
wxpay.v3.capital.capitallhh.areas.provinces.get({})
//                                          ^^^
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

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012698641)
