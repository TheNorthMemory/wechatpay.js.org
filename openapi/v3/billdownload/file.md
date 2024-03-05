---
title: 下载账单
description: 下载账单API为通用接口，交易/资金账单都可以通过该接口获取到对应的账单。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/pay/bill/chapter3_3.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
import { ReadStream } from 'fs'
namespace WeChatPay.OpenAPI.V3.Billdownload.File.GetHttpMethod {
  export interface RequestConfig extends AxiosRequestConfig {
    params: {
      token: string
      tartype?: 'GZIP'
    }
    responseType: 'arraybuffer'
    transformResponse: []
  }
  export interface WellformedResponse extends ReadStream {
  }
}
namespace WeChatPay.OpenAPI.V3.Billdownload {
  export interface File {
    /**
     * 下载账单API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/pay/bill/chapter3_3.shtml
     */
    get(config: File.GetHttpMethod.RequestConfig): AxiosPromise<File.GetHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface Billdownload {
    file: Billdownload.File
  }
}
namespace WeChatPay.OpenAPI {
  export interface V3 {
    billdownload: V3.Billdownload
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
wxpay.v3.billdownload.file.get({
//                         ^^^
  params,
  responseType,
//^?
  transformResponse,
})
.then(
  ({ // [!code hl:5]
    data,
  }) => {
    data.pipe(createWriteStream('./downloaded.csv.gz'))
  }
)
```
