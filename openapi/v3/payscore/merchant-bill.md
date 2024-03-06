---
title: 商户申请获取对账单
description: 商户可以调用此接口获取对账单文件的下载链接，并在有效期内请求下载链接可以下载对账单文件。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/apis/chapter6_1_29.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Payscore.MerchantBill.GetHttpMethod {
  export interface RequestConfig extends AxiosRequestConfig {
    params: {
      bill_date: string
      tar_type?: 'GZIP'
      encryption_algorithm: 'AEAD_AES_256_GCM'
      service_id: string
    }
  }
  export interface WellformedResponse {
    download_bill_count: number
    download_bill_list: {
      bill_sequence: number
      hash_type: string
      hash_value: string
      download_url: string
      encrypt_key: string
      nonce: string
    }[]
  }
}
namespace WeChatPay.OpenAPI.V3.Payscore {
  export interface MerchantBill {
    /**
     * 商户申请获取对账单API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/apis/chapter6_1_29.shtml
     */
    get(config: MerchantBill.GetHttpMethod.RequestConfig): AxiosPromise<MerchantBill.GetHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface Payscore {
    merchantBill: Payscore.MerchantBill
  }
}
namespace WeChatPay.OpenAPI {
  export interface V3 {
    payscore: V3.Payscore
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
wxpay.v3.payscore.merchantBill.get({
//                             ^^^
  params,
})
.then(
  ({ // [!code hl:9]
    data: {
      download_bill_count,
      download_bill_list,
    },
  }) => ({
    download_bill_count,
    download_bill_list,
  })
)
```
