---
title: 申请二级商户资金账单(平台收付通)
description: 微信支付按天提供微信支付账户的资金流水账单文件，电商平台可以通过该接口获取二级商户账单文件的下载地址。文件内包含电商平台二级商户资金操作相关的业务单号、收支金额、记账时间等信息，供电商平台进行核对。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3_partner/apis/chapter7_9_5.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Ecommerce.Bill.Fundflowbill.GetHttpMethod {
  export interface RequestConfig extends AxiosRequestConfig {
    params: {
      bill_date: string
      account_type: string
      tar_type: string
      algorithm: string
    }
  }
  export interface WellformedResponse {
    download_bill_count: number
    download_bill_list: {
      bill_sequence: number
      hash_type: string
      hash_value: string
      download_url: string
      encrypt_key: string
      nonce: string
    }[]
  }
}
namespace WeChatPay.OpenAPI.V3.Ecommerce.Bill {
  export interface Fundflowbill {
    /**
     * 申请二级商户资金账单API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3_partner/apis/chapter7_9_5.shtml
     */
    get(config: Fundflowbill.GetHttpMethod.RequestConfig): AxiosPromise<Fundflowbill.GetHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Ecommerce {
  export interface Bill {
    fundflowbill: Bill.Fundflowbill
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface Ecommerce {
    bill: Ecommerce.Bill
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
wxpay.v3.ecommerce.bill.fundflowbill.get({
//                                   ^^^
  params,
})
.then(
  ({ // [!code hl:9]
    data: {
      download_bill_count,
      download_bill_list,
    },
  }) => ({
    download_bill_count,
    download_bill_list,
  })
)
```