---
title: 特约商户银行来账查询
description: 服务商通过本接口查询指定日期内特约商户银行来账记录列表，列表内包含特约商户银行来账相关的业务单号、金额、完成时间等信息，供服务商进行查询和核对。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3_partner/Offline/apis/chapter4_1_27.shtml) [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/pay/transfer_partner/chapter3_6.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Merchantfund.Partner.IncomeRecords.GetHttpMethod {
  export interface RequestConfig extends AxiosRequestConfig {
    params: {
      sub_mchid: string
      account_type: 'BASIC' | 'OPERATION' | 'FEES'
      offset: number
      limit: number
    }
  }
  export interface WellformedResponse {
    total_count: number
    offset: number
    limit: number
    data: {
      sub_mchid: string
      account_type: 'BASIC' | 'OPERATION' | 'FEES'
      income_record_type: string
      income_record_id: string
      amount: number
      success_time: string
      bank_name: string
      bank_account_name: string
      bank_account_number: string
      recharge_remark: string
    }[]
    links: {
      next: string
      prev: string
      self: string
    }
  }
}
namespace WeChatPay.OpenAPI.V3.Merchantfund.Partner {
  export interface IncomeRecords {
    /**
     * 特约商户银行来账查询API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/pay/transfer_partner/chapter3_6.shtml
     */
    get(config: IncomeRecords.GetHttpMethod.RequestConfig): AxiosPromise<IncomeRecords.GetHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Merchantfund {
  export interface Partner {
    incomeRecords: Partner.IncomeRecords
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface Merchantfund {
    partner: Merchantfund.Partner
  }
}
namespace WeChatPay.OpenAPI {
  export interface V3 {
    merchantfund: V3.Merchantfund
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
wxpay.v3.merchantfund.partner.incomeRecords.get({
//                                          ^^^
  params,
})
.then(
  ({ // [!code hl:15]
    data: {
      total_count,
      offset,
      limit,
      data,
      links,
    },
  }) => ({
    total_count,
    offset,
    limit,
    data,
    links,
  })
)
```
