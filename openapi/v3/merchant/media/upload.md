---
title: 商户图片上传
description: 部分微信支付业务指定商户需要使用图片上传API来上报图片信息，从而获得必传参数的值：图片MediaID 。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/tool/chapter3_1.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
import { Multipart } from 'wechatpay-axios-plugin'
namespace WeChatPay.OpenAPI.V3.Merchant.Media.Upload.PostHttpMethod {
  export interface BinaryDataRequest extends Multipart {
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: BinaryDataRequest
  }
  export interface WellformedResponse {
    media_id: string
  }
}
namespace WeChatPay.OpenAPI.V3.Merchant.Media {
  export interface Upload {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/tool/chapter3_1.shtml
     */
    (data?: Upload.PostHttpMethod.BinaryDataRequest, config?: Upload.PostHttpMethod.RequestConfig): AxiosPromise<Upload.PostHttpMethod.WellformedResponse>
    /**
     * 图片上传API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/tool/chapter3_1.shtml
     */
    post(data?: Multipart, config?: Upload.PostHttpMethod.RequestConfig): AxiosPromise<Upload.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Merchant {
  export interface Media {
    upload: Media.Upload
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface Merchant {
    media: Merchant.Media
  }
}
namespace WeChatPay.OpenAPI {
  export interface V3 {
    merchant: V3.Merchant
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
const { Multipart } = require('wechatpay-axios-plugin')
const { createReadStream } = require('fs')
const { basename } = require('path');

let localFilePath = '/path/to/merchant-image-file.jpg'
const stream = createReadStream(localFilePath)
const media = new Multipart()
  .append('meta', JSON.stringify({
    filename: basename(localFilePath),
    sha256: 'from upstream or local calculated',
  }))
  .append('file', stream, basename(localFilePath))

wxpay.v3.merchant.media.upload.post(media)
//                             ^^^^
.then(
  ({ // [!code hl:7]
    data: {
      media_id,
    },
  }) => ({
    media_id,
  })
)
```
