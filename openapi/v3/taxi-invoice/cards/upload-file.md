---
title: 上传出租车电子发票文件
description: 服务商调用插卡接口前，需调用本接口上传出租车电子发票文件来获取文件ID。文件ID有效期为3天，有效期内未成功调用插卡接口需重新调用本接口上传发票文件。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { ReadStream } from 'fs'
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.TaxiInvoice.Cards.UploadFile.PostHttpMethod {
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
namespace WeChatPay.OpenAPI.V3.TaxiInvoice.Cards {
  export interface UploadFile {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/docs/partner/apis/taxi-fapiao/taxi-invoice-card/upload-taxi-invoice-card-file.html
     */
    (data?: UploadFile.PostHttpMethod.BinaryDataRequest, config?: UploadFile.PostHttpMethod.RequestConfig): AxiosPromise<UploadFile.PostHttpMethod.WellformedResponse>
    /**
     * 上传出租车电子发票文件
     * @link https://pay.weixin.qq.com/docs/partner/apis/taxi-fapiao/taxi-invoice-card/upload-taxi-invoice-card-file.html
     */
    post(data?: UploadFile.PostHttpMethod.BinaryDataRequest, config?: UploadFile.PostHttpMethod.RequestConfig): AxiosPromise<UploadFile.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.TaxiInvoice {
  export interface Cards {
    uploadFile: Cards.UploadFile
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface TaxiInvoice {
    cards: TaxiInvoice.Cards
  }
}
namespace WeChatPay.OpenAPI {
  export interface V3 {
    taxiInvoice: V3.TaxiInvoice
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
var company_mchid = '', region_id = 0;
// ---cut---
const { createReadStream } = require('fs')
const { basename } = require('path')

const localFilePath = '/path/to/merchant-invoice-file.pdf'
const stream = createReadStream(localFilePath)
const meta = {
  company_mchid,
  region_id,
  digest_algorithm: 'DIGEST_ALGORITHM_SM3',
  digest: 'from upstream or local calculated',
}
const media = {
  meta: JSON.stringify(meta),
  file: stream,
}

wxpay.v3.taxiInvoice.cards.uploadFile.post(media, {
//                                    ^^^^
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

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012692904)
