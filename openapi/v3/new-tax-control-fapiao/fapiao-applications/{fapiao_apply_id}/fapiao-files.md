---
title: 获取发票下载信息
description: 商户在开具发票成功后，调用本接口获取电子发票的下载地址。仅在微信支付侧开具的电子发票才允许下载发票文件。 注意：开票状态为ISSUED的发票才能获取到发票文件下载链接。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/docs/partner/apis/fapiao/fapiao-applications/get-fapiao-file-download-info.html)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.NewTaxControlFapiao.FapiaoApplications._fapiao_apply_id_.FapiaoFiles.GetHttpMethod {
  export interface RequestConfig extends AxiosRequestConfig {
    fapiao_apply_id: string
    params: {
      sub_mchid: string
      fapiao_id: string
    }
  }
  export interface WellformedResponse {
    fapiao_download_info_list: {
      fapiao_id: string
      download_url: string
      status: 'ISSUE_ACCEPTED'|'ISSUED'|'REVERSE_ACCEPTED'|'REVERSED'
    }[]
  }
}
namespace WeChatPay.OpenAPI.V3.NewTaxControlFapiao.FapiaoApplications._fapiao_apply_id_ {
  export interface FapiaoFiles {
    /**
     * 获取发票下载信息
     * @link https://pay.weixin.qq.com/docs/partner/apis/fapiao/fapiao-applications/get-fapiao-file-download-info.html
     */
    get(config: FapiaoFiles.GetHttpMethod.RequestConfig): AxiosPromise<FapiaoFiles.GetHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.NewTaxControlFapiao.FapiaoApplications {
  export interface _fapiao_apply_id_ {
    fapiaoFiles: _fapiao_apply_id_.FapiaoFiles
  }
}
namespace WeChatPay.OpenAPI.V3.NewTaxControlFapiao {
  export interface FapiaoApplications {
    _fapiao_apply_id_: FapiaoApplications._fapiao_apply_id_
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
// ---cut---
wxpay.v3.newTaxControlFapiao.fapiaoApplications._fapiao_apply_id_.fapiaoFiles.get({
//                                                                            ^^^
  fapiao_apply_id,
  params,
})
.then(
  ({ // [!code hl:7]
    data: {
      fapiao_download_info_list,
    },
  }) => ({
    fapiao_download_info_list,
  })
)
```
