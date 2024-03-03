---
title: 申请单个子商户资金账单
description: 微信支付按天提供微信支付账户的资金流水账单文件，服务商可以通过该接口获取子商户账单文件的下载地址。文件内包含子商户资金操作相关的业务单号、收支金额、记账时间等信息，供商户进行核对。
---

# {{ $frontmatter.title }}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3_partner/Offline/apis/chapter4_1_25.shtml) [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3_partner/apis/chapter4_1_12.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Bill.SubMerchantFundflowbill.GetHttpMethod {
  export interface RequestConfig extends AxiosRequestConfig {
    params: {
      sub_mchid: string
      bill_date: string
      tar_type?: 'GZIP'
      algorithm?: 'AEAD_AES_256_GCM' | 'SM4_GCM'
      account_type?: 'BASIC' | 'OPERATION' | 'FEES'
    }
  }
  export interface WellformedResponse {
    download_bill_count: number
    download_bill_list: {
      bill_sequence: number
      download_url: string
      encrypt_key: string
      hash_type: string
      hash_value: string
      nonce: string
    }[]
  }
}
namespace WeChatPay.OpenAPI.V3.Bill {
  export interface SubMerchantFundflowbill {
    /**
     * 申请单个子商户资金账单API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3_partner/apis/chapter4_1_12.shtml
     */
    get(config: SubMerchantFundflowbill.GetHttpMethod.RequestConfig): AxiosPromise<SubMerchantFundflowbill.GetHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface Bill {
    subMerchantFundflowbill: Bill.SubMerchantFundflowbill
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
wxpay.v3.bill.subMerchantFundflowbill.get({
//                                    ^^^
  params,
//^?
})
.then(
  ({ // [!code hl:9]
    data: {
      download_bill_count,
      download_bill_list,
    },
  }) => ({
    download_bill_count,
    download_bill_list: download_bill_list.map(n => Object.assign(n, 'download_url', new URL(n.download_url))),
  })
)
```
