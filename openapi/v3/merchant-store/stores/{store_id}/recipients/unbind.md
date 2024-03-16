---
title: 解除门店收款信息绑定
description: 该API接口可用于给一个特定的门店解除收款商户号。解除成功后，商户号不能再为门店收款。目前只支持解除此前收款方拒绝的收款商户号。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://kf.qq.com/faq/2009096ZF7Jf200909UVbY73.html)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.MerchantStore.Stores._store_id_.Recipients.Unbind.PostHttpMethod {
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
  export interface Unbind {
    /**
     * shortland
     * 该API接口可用于给一个特定的门店解除收款商户号。解除成功后，商户号不能再为门店收款。目前只支持解除此前收款方拒绝的收款商户号。
     */
    (data: Unbind.PostHttpMethod.JsonDataRequest, config: Unbind.PostHttpMethod.RequestConfig): AxiosPromise<Unbind.PostHttpMethod.WellformedResponse>
    /**
     * 解除门店收款信息绑定
     * 该API接口可用于给一个特定的门店解除收款商户号。解除成功后，商户号不能再为门店收款。目前只支持解除此前收款方拒绝的收款商户号。
     */
    post(data: Unbind.PostHttpMethod.JsonDataRequest, config: Unbind.PostHttpMethod.RequestConfig): AxiosPromise<Unbind.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.MerchantStore.Stores._store_id_ {
  export interface Recipients {
    unbind: Recipients.Unbind
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
wxpay.v3.merchantStore.stores._store_id_.recipients.unbind.post({
//                                                         ^^^^
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
