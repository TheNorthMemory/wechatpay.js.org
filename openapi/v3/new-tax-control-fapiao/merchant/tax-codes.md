---
title: 获取商品和服务税收分类对照表
description: 查询商户在微信支付商户平台中配置的电子发票税收分类编码对照表。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/new-tax-control-fapiao/chapter3_2.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.NewTaxControlFapiao.Merchant.TaxCodes.GetHttpMethod {
  export interface RequestConfig extends AxiosRequestConfig {
    params: {
      sub_mchid?: string
      offset: number
      limit: number
    }
  }
  export interface WellformedResponse {
    offset: number
    limit: number
    links: {
      next: string
      prev: string
      self: string
    }
    data: {
      goods_name: string
      goods_id: number
      goods_category: string
      tax_code: string
      tax_rate: number
      tax_prefer_mark: string
    }[]
    total_count: number
  }
}
namespace WeChatPay.OpenAPI.V3.NewTaxControlFapiao.Merchant {
  export interface TaxCodes {
    /**
     * 获取商品和服务税收分类对照表
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/new-tax-control-fapiao/chapter3_2.shtml
     */
    get(config: TaxCodes.GetHttpMethod.RequestConfig): AxiosPromise<TaxCodes.GetHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.NewTaxControlFapiao {
  export interface Merchant {
    taxCodes: Merchant.TaxCodes
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface NewTaxControlFapiao {
    merchant: NewTaxControlFapiao.Merchant
  }
}
namespace WeChatPay.OpenAPI {
  export interface V3 {
    newTaxControlFapiao: V3.NewTaxControlFapiao
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
wxpay.v3.newTaxControlFapiao.merchant.taxCodes.get({
//                                             ^^^
  params,
})
.then(
  ({ // [!code hl:15]
    data: {
      offset,
      limit,
      links,
      data,
      total_count,
    },
  }) => ({
    offset,
    limit,
    links,
    data,
    total_count,
  })
)
```
