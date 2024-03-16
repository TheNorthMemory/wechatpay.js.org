---
title: 创建门店
description: 连锁品牌方案，是微信支付为「连锁经营品牌商家」定制的行业解决方案。方案基于“品牌-门店”的商业关系，向连锁经营品牌商家提供进件、交易场景配置、流量开放、资金管理、数据管理、营销管理等场景的专项解决方案。服务商/品牌方在门店在创建时，需要经过门店方授权确认，确认后方可建立“品牌-门店”关系。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://kf.qq.com/faq/2009096ZF7Jf200909UVbY73.html)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.MerchantStore.Stores.PostHttpMethod {
  export interface JsonDataRequest {
    sub_mchid?: string
    store_basics: {
      store_reference_id: string
      brand_name: string
      store_name: string
      branch_name: string
    }
    store_address: {
      address_code: string
      address_detail: string
      address_complements: string
      longitude: string
      latitude: string
    }
    store_business: {
      service_phone: string
      business_hours: string
    }
    store_recipient: {
      mchid: string
      company_name: string
    }[]
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
  }
  export interface WellformedResponse {
    store_id: number
  }
}
namespace WeChatPay.OpenAPI.V3.MerchantStore {
  export interface Stores {
    /**
     * shortland
     */
    (data: Stores.PostHttpMethod.JsonDataRequest, config?: Stores.PostHttpMethod.RequestConfig): AxiosPromise<Stores.PostHttpMethod.WellformedResponse>
    /**
     * 创建门店API
     */
    post(data: Stores.PostHttpMethod.JsonDataRequest, config?: Stores.PostHttpMethod.RequestConfig): AxiosPromise<Stores.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface MerchantStore {
    stores: MerchantStore.Stores
  }
}
namespace WeChatPay.OpenAPI {
  export interface V3 {
    merchantStore: V3.MerchantStore
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
wxpay.v3.merchantStore.stores.post({
//                            ^^^^
  sub_mchid,
  store_basics,
  store_address,
  store_business,
  store_recipient,
})
.then(
  ({ // [!code hl:7]
    data: {
      store_id,
    },
  }) => ({
    store_id,
  })
)
```
