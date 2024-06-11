---
title: 下载电子回单
description: 下载电子回单API为通用接口，商家转账等业务电子回单均可通过该接口进行下载。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3_partner/Offline/apis/chapter4_1_15.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { ReadStream } from 'fs'
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Transferdownload.Signfile.GetHttpMethod {
  export interface RequestConfig extends AxiosRequestConfig {
    params: {
      token: string
    }
    responseType: 'stream'
    transformResponse: []
  }
  export interface WellformedResponse extends ReadStream {
  }
}
namespace WeChatPay.OpenAPI.V3.Transferdownload {
  export interface Signfile {
    /**
     * 下载电子回单API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3_partner/Offline/apis/chapter4_1_15.shtml
     */
    get(config: Signfile.GetHttpMethod.RequestConfig): AxiosPromise<Signfile.GetHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface Transferdownload {
    signfile: Transferdownload.Signfile
  }
}
namespace WeChatPay.OpenAPI {
  export interface V3 {
    transferdownload: V3.Transferdownload
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
const { createWriteStream } = require('fs')

wxpay.v3.transferdownload.signfile.get({
//                                 ^^^
  params,
  responseType,
  transformResponse: [],
})
.then(
  ({ // [!code hl:5]
    data,
  }) => {
    data.pipe(createWriteStream('./downloaded.pdf'))
  }
)
```
