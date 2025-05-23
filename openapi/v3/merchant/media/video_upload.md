---
title: 视频上传
description: 部分微信支付业务指定商户需要使用图片上传 部分微信支付业务指定商户需要使用视频上传 API来上报视频信息，从而获得必传参数的值：视频MediaID 。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { ReadStream } from 'fs'
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Merchant.Media.Video_upload.PostHttpMethod {
  export interface BinaryDataRequest {
    meta: string
    file: ReadStream
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: BinaryDataRequest
  }
  export interface WellformedResponse {
    media_id: string
  }
}
namespace WeChatPay.OpenAPI.V3.Merchant.Media {
  export interface Video_upload {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/tool/chapter3_2.shtml
     */
    (data?: Video_upload.PostHttpMethod.BinaryDataRequest, config?: Video_upload.PostHttpMethod.RequestConfig): AxiosPromise<Video_upload.PostHttpMethod.WellformedResponse>
    /**
     * 视频上传API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/tool/chapter3_2.shtml
     */
    post(data?: Video_upload.PostHttpMethod.BinaryDataRequest, config?: Video_upload.PostHttpMethod.RequestConfig): AxiosPromise<Video_upload.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Merchant {
  export interface Media {
    video_upload: Media.Video_upload
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
const { createReadStream } = require('fs')
const { basename } = require('path');

let localFilePath = '/path/to/merchant-video-file.mp4'
const stream = createReadStream(localFilePath)
const meta = {
  filename: basename(localFilePath),
  sha256: 'from upstream or local calculated',
}
const media = {
  meta: JSON.stringify(meta),
  file: stream,
}

wxpay.v3.merchant.media.video_upload.post(media, {
//                                   ^^^^
  meta,
  headers: { 'Content-Type': 'multipart/form-data' },
})
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

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012761084)
