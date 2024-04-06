---
title: 下载发票文件
description: 调用【获取发票下载信息】接口后，调用该接口下载发票文件。该接口不支持签名和验签。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/docs/merchant/apis/fapiao/fapiao-applications/download-invoice-file.html) [官方文档](https://pay.weixin.qq.com/docs/partner/apis/fapiao/fapiao-applications/download-invoice-file.html)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { ReadStream } from 'fs'
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.Invoicing.Fapiao.FapiaoFile.GetHttpMethod {
  export interface RequestConfig extends AxiosRequestConfig {
    baseURL: 'https://pay.wechatpay.cn/'
    params: {
      token: string
      mchid: string
      sub_mchid?: string
      openid: string
      invoice_code: string
      invoice_no: string
      fapiao_id: string
    }
    responseType: 'arraybuffer'
  }
  export interface WellformedResponse extends ReadStream {
  }
}
namespace WeChatPay.OpenAPI.Invoicing.Fapiao {
  export interface FapiaoFile {
    /**
     * 下载发票文件
     * @link https://pay.weixin.qq.com/docs/partner/apis/fapiao/fapiao-applications/download-invoice-file.html
     */
    get(config: FapiaoFile.GetHttpMethod.RequestConfig): AxiosPromise<FapiaoFile.GetHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.Invoicing {
  export interface Fapiao {
    fapiaoFile: Fapiao.FapiaoFile
  }
}
namespace WeChatPay.OpenAPI {
  export interface Invoicing {
    fapiao: Invoicing.Fapiao
  }
}
export interface Wechatpay {
  invoicing: WeChatPay.OpenAPI.Invoicing
}
export var baseURL: WeChatPay.OpenAPI.Invoicing.Fapiao.FapiaoFile.GetHttpMethod.RequestConfig['baseURL']
export var params: WeChatPay.OpenAPI.Invoicing.Fapiao.FapiaoFile.GetHttpMethod.RequestConfig['params']
export var responseType: WeChatPay.OpenAPI.Invoicing.Fapiao.FapiaoFile.GetHttpMethod.RequestConfig['responseType']
// @filename: business.js
import { baseURL, params, responseType } from './virtual'
// ---cut---
const axios = require('axios')
const { createWriteStream } = require('fs')
axios.get('/invoicing/fapiao/fapiao-file', {
//    ^^^
  baseURL,
  params,
  responseType,
})
.then(
  ({ // [!code hl:8]
    data,
    headers: {
      'sm3-digest': sm3DigestString
    },
  }) => {
    data.pipe(createWriteStream('./downloaded.pdf'))
  }
)
```
