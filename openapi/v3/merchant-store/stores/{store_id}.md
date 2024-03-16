---
title: 查询门店
description: “门店方确认中”状态说明：1）服务商/品牌方提交门店信息后，门店方需要在30天内完成授权，若过期未完成，将视同拒绝授权；2）等待门店方授权期间，服务商/品牌方可以在门店管理页面点击二次提醒收款方授权，该提醒每12小时限制发送一次；3）若一个商户号同时收款多个门店时，仅需确认授权一次；授权后若新增门店，平台仅发送通知性消息（不需要二次授权），告知门店方服务商/品牌方为其新增了门店；4）状态为【门店方确认中】的门店暂不支持修改，删除。
---

# 查询门店 {#get}

{{ $frontmatter.description }} [官方文档](https://kf.qq.com/faq/2009096ZF7Jf200909UVbY73.html)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.MerchantStore.Stores._store_id_.GetHttpMethod {
  export interface RequestConfig extends AxiosRequestConfig {
    store_id: number
    params: {
      sub_mchid?: string
    }
  }
  export interface WellformedResponse {
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
}
namespace WeChatPay.OpenAPI.V3.MerchantStore.Stores {
  export interface _store_id_ {
    /**
     * 查询门店API
     */
    get(config: _store_id_.GetHttpMethod.RequestConfig): AxiosPromise<_store_id_.GetHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.MerchantStore {
  export interface Stores {
    _store_id_: Stores._store_id_
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
wxpay.v3.merchantStore.stores._store_id_.get({
//                                       ^^^
  store_id,
  params,
})
.then(
  ({ // [!code hl:13]
    data: {
      store_basics,
      store_address,
      store_business,
      store_recipient,
    },
  }) => ({
    store_basics,
    store_address,
    store_business,
    store_recipient,
  })
)
```

# 修改门店 {#patch}

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.MerchantStore.Stores._store_id_.PatchHttpMethod {
  export interface JsonDataRequest {
    sub_mchid?: string
    store_basics: {
      store_reference_id: string
      brand_name: string
      store_name: string
      store_business: string
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
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
    store_id: number
  }
  export interface WellformedResponse {
  }
}
namespace WeChatPay.OpenAPI.V3.MerchantStore.Stores {
  export interface _store_id_ {
    /**
     * 修改门店API
     */
    patch(data: _store_id_.PatchHttpMethod.JsonDataRequest, config: _store_id_.PatchHttpMethod.RequestConfig): AxiosPromise<_store_id_.PatchHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.MerchantStore {
  export interface Stores {
    _store_id_: Stores._store_id_
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
wxpay.v3.merchantStore.stores._store_id_.patch({
//                                       ^^^^^
  sub_mchid,
  store_basics,
  store_address,
  store_business,
  store_recipient,
}, { store_id, })
.then(
  ({ // [!code hl:13]
    data: {
      store_basics,
      store_address,
      store_business,
      store_recipient,
    },
  }) => ({
    store_basics,
    store_address,
    store_business,
    store_recipient,
  })
)
```
