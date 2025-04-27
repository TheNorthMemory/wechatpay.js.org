---
title: 查询爱心餐品牌信息
description: 商户根据品牌ID查询爱心餐品牌的捐赠与供餐信息。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Lovefeast.Brands._brand_id_.GetHttpMethod {
  export interface RequestConfig extends AxiosRequestConfig {
    brand_id: string
  }
  export interface WellformedResponse {
    donate_count: number
    consume_count: number
  }
}
namespace WeChatPay.OpenAPI.V3.Lovefeast.Brands {
  export interface _brand_id_ {
    /**
     * 查询爱心餐品牌信息
     * @link https://pay.weixin.qq.com/docs/partner/apis/lovefeast/brands/get-brand.html
     */
    get(config: _brand_id_.GetHttpMethod.RequestConfig): AxiosPromise<_brand_id_.GetHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Lovefeast {
  export interface Brands {
    _brand_id_: Brands._brand_id_
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface Lovefeast {
    brands: Lovefeast.Brands
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
wxpay.v3.lovefeast.brands._brand_id_.get({
//                                   ^^^
  brand_id,
})
.then(
  ({ // [!code hl:9]
    data: {
      donate_count,
      consume_count,
    },
  }) => ({
    donate_count,
    consume_count,
  })
)
```

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4012472863) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012466619)
