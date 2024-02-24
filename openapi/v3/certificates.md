---
title: 获取平台证书列表
description: 获取商户当前可用的平台证书列表。微信支付提供该接口，帮助商户后台系统实现平台证书的平滑更换。
---

# {{ $frontmatter.title }}

{{ $frontmatter.description }} [官方开发文档](https://wechatpay-api.gitbook.io/wechatpay-api-v3/jie-kou-wen-dang/ping-tai-zheng-shu) [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/ecommerce/applyments/chapter3_3.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Certificates.GetHttpMethod {
  export interface RequestConfig extends AxiosRequestConfig {
    params?: {
      algorithm_type?: 'RSA' | 'SM2' | 'ALL'
    }
  }
  export interface WellformedResponse {
    data: {
      serial_no: string,
      effective_time: string,
      expire_time: string,
      encrypt_certificate: {
        algorithm: string,
        nonce: string,
        associated_data: string,
        ciphertext: string,
      },
    }[]
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface Certificates {
    /**
     * 获取平台证书列表
     * {@link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/ecommerce/applyments/chapter3_3.shtml}
     */
    get(config?: Certificates.GetHttpMethod.RequestConfig): AxiosPromise<Certificates.GetHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI {
  export interface V3 {
    certificates: V3.Certificates
  }
}
export interface Wechatpay {
  v3: WeChatPay.OpenAPI.V3
}
import { CipherKey } from 'crypto'
export var wxpay: Wechatpay
export var apiv3Key: CipherKey

// @filename: business.js
import { wxpay, apiv3Key } from './virtual'
// ---cut---
const { Aes } = require('wechatpay-axios-plugin')

wxpay.v3.certificates.get({ params })
//                    ^^^
.then(({ data: { data } }) => data.map(
  ({
    effective_time, expire_time, serial_no,
    encrypt_certificate: { ciphertext, nonce, associated_data }
  }) => ({
    effective_time, expire_time, serial_no,
    x509_certificate: Aes.AesGcm.decrypt(nonce, apiv3Key, ciphertext, associated_data) // [!code hl]
  })
))
```
