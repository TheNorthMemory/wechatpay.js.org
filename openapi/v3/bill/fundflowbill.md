---
title: 申请资金账单
description: 微信支付按天提供微信支付账户的资金流水账单文件，商户可以通过该接口获取账单文件的下载地址。文件内包含该账户资金操作相关的业务单号、收支金额、记账时间等信息，供商户进行核对。
---

# {{ $frontmatter.title }}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3_partner/apis/chapter7_9_2.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Bill.Fundflowbill.GetHttpMethod {
  export interface RequestConfig extends AxiosRequestConfig {
    params: {
      bill_date: string
      sub_mchid?: string
      tar_type?: 'GZIP'
      account_type?: 'BASIC' | 'OPERATION' | 'FEES'
    }
  }
  export interface WellformedResponse {
    hash_type: string
    hash_value: string
    download_url: string
  }
}
namespace WeChatPay.OpenAPI.V3.Bill {
  export interface Fundflowbill {
    /**
     * 申请资金账单API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3_partner/apis/chapter7_9_2.shtml
     */
    get(config: Fundflowbill.GetHttpMethod.RequestConfig): AxiosPromise<Fundflowbill.GetHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface Bill {
    fundflowbill: Bill.Fundflowbill
  }
}
namespace WeChatPay.OpenAPI {
  export interface V3 {
    bill: V3.Bill
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
wxpay.v3.bill.fundflowbill.get({
//                         ^^^
  params,
//^?
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
