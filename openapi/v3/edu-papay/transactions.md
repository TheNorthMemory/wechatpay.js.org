---
title: 受理扣款
description: 扣款受理接口，支付结果以回调为准，或者超时以后主动查单
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/docs/merchant/apis/education-fee-payment/transactions/create-transaction.html) [官方文档](https://pay.weixin.qq.com/docs/partner/apis/education-fee-payment/transactions/create-transaction.html)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.EduPapay.Transactions.PostHttpMethod {
  export interface JsonDataRequest {
    appid: string
    sub_mchid: string
    sub_appid: string
    body: string
    attach: string
    out_trade_no: string
    goods_tag: string
    notify_url: string
    contract_id: string
    trade_scene: string
    amount: {
      total: number
      currency: string
    }
    device_information: {
      device_id: string
      device_ip: string
    }
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
  }
  export interface WellformedResponse {
  }
}
namespace WeChatPay.OpenAPI.V3.EduPapay {
  export interface Transactions {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/Offline/apis/chapter5_2_7.shtml
     */
    (data: Transactions.PostHttpMethod.JsonDataRequest, config?: Transactions.PostHttpMethod.RequestConfig): AxiosPromise<Transactions.PostHttpMethod.WellformedResponse>
    /**
     * 教育通扣款受理API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/Offline/apis/chapter5_2_7.shtml
     */
    post(data: Transactions.PostHttpMethod.JsonDataRequest, config?: Transactions.PostHttpMethod.RequestConfig): AxiosPromise<Transactions.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface EduPapay {
    transactions: EduPapay.Transactions
  }
}
namespace WeChatPay.OpenAPI {
  export interface V3 {
    eduPapay: V3.EduPapay
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
wxpay.v3.eduPapay.transactions.post({
//                             ^^^^
  appid,
  sub_mchid,
  sub_appid,
  body,
  attach,
  out_trade_no,
  goods_tag,
  notify_url,
  contract_id,
  trade_scene,
  amount,
  device_information,
})
.then(({ status, }) => status === 204) // [!code hl]
```
