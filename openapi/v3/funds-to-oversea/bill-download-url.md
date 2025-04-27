---
title: 获取购付汇账单文件下载链接
description: 服务商可以调用此接口获取购付汇账单文件下载链接。在有效期内请求下载链接可以下载出账日为指定日期的购付汇账单文件。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.FundsToOversea.BillDownloadUrl.GetHttpMethod {
  export interface RequestConfig extends AxiosRequestConfig {
    params: {
      bill_date: string
      sub_mchid: string
    }
  }
  export interface WellformedResponse {
    hash_type: string
    hash_value: string
    download_url: string
  }
}
namespace WeChatPay.OpenAPI.V3.FundsToOversea {
  export interface BillDownloadUrl {
    /**
     * 获取购付汇账单文件下载链接API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3_partner/apis/chapter7_10_4.shtml
     */
    get(config: BillDownloadUrl.GetHttpMethod.RequestConfig): AxiosPromise<BillDownloadUrl.GetHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface FundsToOversea {
    billDownloadUrl: FundsToOversea.BillDownloadUrl
  }
}
namespace WeChatPay.OpenAPI {
  export interface V3 {
    fundsToOversea: V3.FundsToOversea
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
wxpay.v3.fundsToOversea.billDownloadUrl.get({
//                                      ^^^
  params,
})
.then(
  ({ // [!code hl:11]
    data: {
      hash_type,
      hash_value,
      download_url,
    },
  }) => ({
    hash_type,
    hash_value,
    download_url: new URL(download_url),
  })
)
```

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012476132)
