---
title: 下载电子回单PDF文件
description: 请务必对比下载的回单文件的摘要值与查询接口返回的摘要值的一致性，确保得到的回单文件的真实性和完整性。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

::: warning :warning: {.im-parsed}

本接口依赖前序 [查询回单](/openapi/v3/fund-app/mch-transfer/elecsign/transfer-bill-no/{transfer_bill_no}) 或 [查询回单](/openapi/v3/fund-app/mch-transfer/elecsign/out-bill-no/{out_bill_no}) 接口返回的 `download_url`，其中下载地址的域名，路径，参数都可能变化，此文档仅做实现参考。

:::

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { ReadStream } from 'fs'
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Transferdownload.Elecvoucherfile.GetHttpMethod {
  export interface RequestConfig extends AxiosRequestConfig {
    params: {
      token: string
      source: 'elecsign'
    }
    responseType: 'stream'
  }
  export interface WellformedResponse extends ReadStream {
  }
}
namespace WeChatPay.OpenAPI.V3.Transferdownload {
  export interface Elecvoucherfile {
    /**
     * 下载电子回单API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3_partner/Offline/apis/chapter4_1_15.shtml
     */
    get(config: Elecvoucherfile.GetHttpMethod.RequestConfig): AxiosPromise<Elecvoucherfile.GetHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface Transferdownload {
    elecvoucherfile: Transferdownload.Elecvoucherfile
  }
}
namespace WeChatPay.OpenAPI {
  export interface V3 {
    transferdownload: V3.Transferdownload
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

wxpay.v3.transferdownload.elecvoucherfile.get({
//                                        ^^^
  params,
  responseType,
})
.then(
  ({ // [!code hl:5]
    data,
  }) => {
    data.pipe(createWriteStream('./downloaded.pdf'))
  }
)
```

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4012716436) [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4012716455)
