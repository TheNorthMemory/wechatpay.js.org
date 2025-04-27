---
title: 注销申请图片上传(平台收付通)
description: 电商平台服务商调用注销申请接口时，需要先调用本接口上传相关的资料图片，获取图片ID后，再填写到注销申请请求中。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
import { Multipart } from 'wechatpay-axios-plugin'
namespace WeChatPay.OpenAPI.V3.Ecommerce.Account.CancelApplications.Media.PostHttpMethod {
  export interface BinaryDataRequest extends Multipart {
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: BinaryDataRequest
  }
  export interface WellformedResponse {
    media_id: string
  }
}
namespace WeChatPay.OpenAPI.V3.Ecommerce.Account.CancelApplications {
  export interface Media {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/docs/partner/apis/ecommerce-cancel/media/upload-media.html
     */
    (data?: Media.PostHttpMethod.BinaryDataRequest, config?: Media.PostHttpMethod.RequestConfig): AxiosPromise<Media.PostHttpMethod.WellformedResponse>
    /**
     * 图片上传API
     * @link https://pay.weixin.qq.com/docs/partner/apis/ecommerce-cancel/media/upload-media.html
     */
    post(data?: Media.PostHttpMethod.BinaryDataRequest, config?: Media.PostHttpMethod.RequestConfig): AxiosPromise<Media.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Ecommerce.Account {
  export interface CancelApplications {
    media: CancelApplications.Media
  }
}
namespace WeChatPay.OpenAPI.V3.Ecommerce {
  export interface Account {
    cancelApplications: Account.CancelApplications
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface Ecommerce {
    account: Ecommerce.Account
  }
}
namespace WeChatPay.OpenAPI {
  export interface V3 {
    ecommerce: V3.Ecommerce
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

let localFilePath = '/path/to/merchant-certificate-file.jpg'
const stream = createReadStream(localFilePath)
const media = new Multipart()
  .append('meta', JSON.stringify({
    file_name: basename(localFilePath),
    file_digest: 'from upstream or local calculated',
  }))
  .append('file', stream, basename(localFilePath))

wxpay.v3.ecommerce.account.cancelApplications.media.post(media)
//                                                  ^^^^
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

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012691710)
