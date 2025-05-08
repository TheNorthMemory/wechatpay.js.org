---
title: （营销）图片上传
description: 通过本接口上传图片后可获得图片url地址。图片url可在微信支付营销相关的API使用，包括商家券、代金券、支付有礼等。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { ReadStream } from 'fs'
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Marketing.Favor.Media.ImageUpload.PostHttpMethod {
  export interface BinaryDataRequest {
    meta: string
    file: ReadStream
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: BinaryDataRequest
  }
  export interface WellformedResponse {
    media_url: string
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing.Favor.Media {
  export interface ImageUpload {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/tool/chapter3_1.shtml
     */
    (data?: ImageUpload.PostHttpMethod.BinaryDataRequest, config?: ImageUpload.PostHttpMethod.RequestConfig): AxiosPromise<ImageUpload.PostHttpMethod.WellformedResponse>
    /**
     * （营销）图片上传API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/tool/chapter3_1.shtml
     */
    post(data?: ImageUpload.PostHttpMethod.BinaryDataRequest, config?: ImageUpload.PostHttpMethod.RequestConfig): AxiosPromise<ImageUpload.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing.Favor {
  export interface Media {
    imageUpload: Media.ImageUpload
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing {
  export interface Favor {
    media: Favor.Media
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface Marketing {
    favor: Marketing.Favor
  }
}
namespace WeChatPay.OpenAPI {
  export interface V3 {
    marketing: V3.Marketing
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
const { createReadStream } = require('fs')
const { basename } = require('path')

const localFilePath = '/path/to/merchant-image-file.jpg'
const stream = createReadStream(localFilePath)
const meta = {
  filename: basename(localFilePath),
  sha256: 'from upstream or local calculated',
}
const media = {
  meta: JSON.stringify(meta),
  file: stream,
}

wxpay.v3.marketing.favor.media.imageUpload.post(media, {
//                                         ^^^^
  meta,
  headers: { 'Content-Type': 'multipart/form-data' },
})
.then(
  ({ // [!code hl:7]
    data: {
      media_url,
    },
  }) => ({
    media_url,
  })
)
```

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4012557233) [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4012557243) [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4012557248) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012759802) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012760240) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012760270)
