---
title: 消费者投诉相关图片下载
description: 下载图片API为通用接口，消费者投诉相关图片都可以通过该接口进行下载。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/docs/merchant/apis/consumer-complaint/images/query-images.html)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
import { ReadStream } from 'fs'
namespace WeChatPay.OpenAPI.V3.MerchantService.Images._media_id_.GetHttpMethod {
  export interface RequestConfig extends AxiosRequestConfig {
    media_id: string
    responseType: 'stream'
    transformResponse: []
  }
  export interface WellformedResponse extends ReadStream {
  }
}
namespace WeChatPay.OpenAPI.V3.MerchantService.Images {
  export interface _media_id_ {
    /**
     * 图片下载API
     * @link https://pay.weixin.qq.com/docs/merchant/apis/consumer-complaint/images/query-images.html
     */
    get(config: _media_id_.GetHttpMethod.RequestConfig): AxiosPromise<_media_id_.GetHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.MerchantService {
  export interface Images {
    _media_id_: Images._media_id_
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface MerchantService {
    images: MerchantService.Images
  }
}
namespace WeChatPay.OpenAPI {
  export interface V3 {
    merchantService: V3.MerchantService
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
wxpay.v3.merchantService.images._media_id_.get({
//                                         ^^^
  media_id,
  responseType,
  transformResponse: [],
})
.then(
  ({ // [!code hl:5]
    data,
  }) => {
    data.pipe(createWriteStream('./downloaded.jpg'))
  }
)
```
