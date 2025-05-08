---
title: 商户上传反馈图片
description: 商户上传反馈图片的接口。 将媒体图片进行二进制转换，得到的媒体图片二进制内容，在请求body中上传此二进制内容。 媒体图片只支持jpg、png、bmp格式，文件大小不能超过2M。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { ReadStream } from 'fs'
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.MerchantService.Images.Upload.PostHttpMethod {
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
namespace WeChatPay.OpenAPI.V3.MerchantService.Images {
  export interface Upload {
    /**
     * shortland
     * @link https://pay.wechatpay.cn/docs/partner/apis/consumer-complaint/images/create-images.html
     */
    (data?: Upload.PostHttpMethod.BinaryDataRequest, config?: Upload.PostHttpMethod.RequestConfig): AxiosPromise<Upload.PostHttpMethod.WellformedResponse>
    /**
     * 商户上传反馈图片API
     * @link https://pay.wechatpay.cn/docs/partner/apis/consumer-complaint/images/create-images.html
     */
    post(data?: Upload.PostHttpMethod.BinaryDataRequest, config?: Upload.PostHttpMethod.RequestConfig): AxiosPromise<Upload.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.MerchantService {
  export interface Images {
    upload: Images.Upload
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
const { createReadStream } = require('fs')
const { basename } = require('path');

let localFilePath = '/path/to/merchant-image-file.jpg'
const stream = createReadStream(localFilePath)
const meta = {
  filename: basename(localFilePath),
  sha256: 'from upstream or local calculated',
}
const media = {
  meta: JSON.stringify(meta),
  file: stream,
}

wxpay.v3.merchantService.images.upload.post(media, {
//                                     ^^^^
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

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4012467250) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012467222)
