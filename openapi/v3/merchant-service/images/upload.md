---
title: 商户上传反馈图片
description: 商户上传反馈图片的接口。 将媒体图片进行二进制转换，得到的媒体图片二进制内容，在请求body中上传此二进制内容。 媒体图片只支持jpg、png、bmp格式，文件大小不能超过2M。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/docs/partner/apis/consumer-complaint/images/create-images.html) [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/tool/merchant-service/chapter5_1.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
import { Multipart } from 'wechatpay-axios-plugin'
namespace WeChatPay.OpenAPI.V3.MerchantService.Images.Upload.PostHttpMethod {
  export interface BinaryDataRequest extends Multipart {
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
    post(data?: Multipart, config?: Upload.PostHttpMethod.RequestConfig): AxiosPromise<Upload.PostHttpMethod.WellformedResponse>
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

wxpay.v3.merchantService.images.upload.post(media)
//                                     ^^^^
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
