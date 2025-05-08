---
title: 上传电子发票文件
description: 调用【将电子发票插入微信用户卡包】接口之前，需要先调用本接口上传电子发票文件，获取文件ID。上传的发票文件会在三天后过期，因此上传后请尽快调用【将电子发票插入微信用户卡包】接口执行插入微信用户卡包的操作。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { ReadStream } from 'fs'
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.NewTaxControlFapiao.FapiaoApplications.UploadFapiaoFile.PostHttpMethod {
  export interface BinaryDataRequest {
    meta: string
    file: ReadStream
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: BinaryDataRequest
  }
  export interface WellformedResponse {
    fapiao_media_id: string
  }
}
namespace WeChatPay.OpenAPI.V3.NewTaxControlFapiao.FapiaoApplications {
  export interface UploadFapiaoFile {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/new-tax-control-fapiao/chapter3_10.shtml
     */
    (data?: UploadFapiaoFile.PostHttpMethod.BinaryDataRequest, config?: UploadFapiaoFile.PostHttpMethod.RequestConfig): AxiosPromise<UploadFapiaoFile.PostHttpMethod.WellformedResponse>
    /**
     * 上传电子发票文件
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/new-tax-control-fapiao/chapter3_10.shtml
     */
    post(data?: UploadFapiaoFile.PostHttpMethod.BinaryDataRequest, config?: UploadFapiaoFile.PostHttpMethod.RequestConfig): AxiosPromise<UploadFapiaoFile.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.NewTaxControlFapiao {
  export interface FapiaoApplications {
    uploadFapiaoFile: FapiaoApplications.UploadFapiaoFile
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface NewTaxControlFapiao {
    fapiaoApplications: NewTaxControlFapiao.FapiaoApplications
  }
}
namespace WeChatPay.OpenAPI {
  export interface V3 {
    newTaxControlFapiao: V3.NewTaxControlFapiao
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
var sub_mchid = ''
// ---cut---
const { createReadStream } = require('fs')
const { basename } = require('path')

const localFilePath = '/path/to/merchant-invoice-file.pdf'
const stream = createReadStream(localFilePath)
const meta = {
  sub_mchid,
  file_type: 'PDF',
  digest_alogrithm: 'SM3',
  digest: 'from upstream or local calculated',
}
const media = {
  meta: JSON.stringify(meta),
  file: stream,
}

wxpay.v3.newTaxControlFapiao.fapiaoApplications.uploadFapiaoFile.post(media, {
//                                                               ^^^^
  meta,
  headers: { 'Content-Type': 'multipart/form-data' },
})
.then(
  ({ // [!code hl:7]
    data: {
      fapiao_media_id,
    },
  }) => ({
    fapiao_media_id,
  })
)
```

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4012556605) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012696830)
