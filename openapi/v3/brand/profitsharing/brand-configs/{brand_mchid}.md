---
title: 查询最大分账比例
description: 可调用此接口查询品牌商户设置的允许服务商分账的最大比例
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Brand.Profitsharing.BrandConfigs._brand_mchid_.GetHttpMethod {
  export interface RequestConfig extends AxiosRequestConfig {
    brand_mchid: string
  }
  export interface WellformedResponse {
    brand_mchid: string
    max_ratio: number
  }
}
namespace WeChatPay.OpenAPI.V3.Brand.Profitsharing.BrandConfigs {
  export interface _brand_mchid_ {
    /**
     * 查询最大分账比例API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3_partner/apis/chapter8_7_10.shtml
     */
    get(config: _brand_mchid_.GetHttpMethod.RequestConfig): AxiosPromise<_brand_mchid_.GetHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Brand.Profitsharing {
  export interface BrandConfigs {
    _brand_mchid_: BrandConfigs._brand_mchid_
  }
}
namespace WeChatPay.OpenAPI.V3.Brand {
  export interface Profitsharing {
    brandConfigs: Profitsharing.BrandConfigs
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface Brand {
    profitsharing: Brand.Profitsharing
  }
}
namespace WeChatPay.OpenAPI {
  export interface V3 {
    brand: V3.Brand
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
wxpay.v3.brand.profitsharing.brandConfigs._brand_mchid_.get({
//                                                      ^^^
  brand_mchid,
})
.then(
  ({ // [!code hl:9]
    data: {
      brand_mchid,
      max_ratio,
    },
  }) => ({
    brand_mchid,
    max_ratio,
  })
)
```

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012467022)
