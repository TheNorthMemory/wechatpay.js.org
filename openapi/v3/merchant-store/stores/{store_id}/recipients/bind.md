---
title: 绑定门店收款信息
description: 该API接口可用于给一个特定的门店添加收款商户号。添加绑定成功后，商户号可为门店收款。一个门店目前最多只能添加绑定三个收款商户号，且添加绑定收款主体必须与品牌主主体或已有收款商户主体保持一致。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://kf.qq.com/faq/2009096ZF7Jf200909UVbY73.html)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.MerchantStore.Stores._store_id_.Recipients.Bind.PostHttpMethod {
  export interface JsonDataRequest {
    sub_mchid?: string
    store_recipient: {
      mchid: string
      company_name: string
    }[]
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
    store_id: number
  }
  export interface WellformedResponse {
    failed_store_recipient: {
      mchid: string
      failed_reason: string
    }[]
  }
}
namespace WeChatPay.OpenAPI.V3.MerchantStore.Stores._store_id_.Recipients {
  export interface Bind {
    /**
     * shortland
     * 该API接口可用于给一个特定的门店添加收款商户号。添加绑定成功后，商户号可为门店收款。一个门店目前最多只能添加绑定三个收款商户号，且添加绑定收款主体必须与品牌主主体或已有收款商户主体保持一致。
     */
    (data: Bind.PostHttpMethod.JsonDataRequest, config: Bind.PostHttpMethod.RequestConfig): AxiosPromise<Bind.PostHttpMethod.WellformedResponse>
    /**
     * 绑定门店收款信息
     * 该API接口可用于给一个特定的门店添加收款商户号。添加绑定成功后，商户号可为门店收款。一个门店目前最多只能添加绑定三个收款商户号，且添加绑定收款主体必须与品牌主主体或已有收款商户主体保持一致。
     */
    post(data: Bind.PostHttpMethod.JsonDataRequest, config: Bind.PostHttpMethod.RequestConfig): AxiosPromise<Bind.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.MerchantStore.Stores._store_id_ {
  export interface Recipients {
    bind: Recipients.Bind
  }
}
namespace WeChatPay.OpenAPI.V3.MerchantStore.Stores {
  export interface _store_id_ {
    recipients: _store_id_.Recipients
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
wxpay.v3.merchantStore.stores._store_id_.recipients.bind.post({
//                                                       ^^^^
  sub_mchid,
  store_recipient,
}, { store_id, })
.then(
  ({ // [!code hl:7]
    data: {
      failed_store_recipient,
    },
  }) => ({
    failed_store_recipient,
  })
)
```
