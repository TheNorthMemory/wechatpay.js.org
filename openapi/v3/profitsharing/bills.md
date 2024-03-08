---
title: 申请分账账单
description: 微信支付按天提供分账账单文件，商户可以通过该接口获取账单文件的下载地址。文件内包含分账相关的金额、时间等信息，供商户核对到账等情况。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3_partner/apis/chapter8_1_11.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Profitsharing.Bills.GetHttpMethod {
  export interface RequestConfig extends AxiosRequestConfig {
    params: {
      sub_mchid: string
      bill_date: string
      tar_type: string
    }
  }
  export interface WellformedResponse {
    download_url: string
    hash_type: string
    hash_value: string
  }
}
namespace WeChatPay.OpenAPI.V3.Profitsharing {
  export interface Bills {
    /**
     * 申请分账账单API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3_partner/apis/chapter8_1_11.shtml
     */
    get(config: Bills.GetHttpMethod.RequestConfig): AxiosPromise<Bills.GetHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface Profitsharing {
    bills: Profitsharing.Bills
  }
}
namespace WeChatPay.OpenAPI {
  export interface V3 {
    profitsharing: V3.Profitsharing
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
wxpay.v3.profitsharing.bills.get({
//                           ^^^
  params,
})
.then(
  ({ // [!code hl:11]
    data: {
      download_url,
      hash_type,
      hash_value,
    },
  }) => ({
    download_url,
    hash_type,
    hash_value,
  })
)
```
