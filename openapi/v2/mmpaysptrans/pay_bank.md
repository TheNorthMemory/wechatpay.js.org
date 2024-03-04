---
title: 企业付款到银行卡
description: 企业付款业务是基于微信支付商户平台的资金管理能力，为了协助商户方便地实现企业向银行卡付款，针对部分有开发能力的商户，提供通过API完成企业付款到银行卡的功能。
---

# {{ $frontmatter.title }}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/api/tools/mch_pay.php?chapter=24_2)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V2.Mmpaysptrans.Pay_bank.PostHttpMethod {
  export interface XmlDataRequest {
    mch_id: string
    partner_trade_no: string
    nonce_str?: string
    enc_bank_no: string
    enc_true_name: string
    bank_code: string
    amount: string | number
    desc: string
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: XmlDataRequest
    security: true
  }
  export interface WellformedResponse {
    return_code: string
    return_msg: string
    result_code: string
    err_code: string
    err_code_des: string
    mch_id: string
    partner_trade_no: string
    amount: string | number
    nonce_str: string
    sign: string
    payment_no: string
    cmms_amt: string | number
  }
}
namespace WeChatPay.OpenAPI.V2.Mmpaysptrans {
  export interface Pay_bank {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/wiki/doc/api/tools/mch_pay.php?chapter=24_2
     */
    (data: Pay_bank.PostHttpMethod.XmlDataRequest, config: Pay_bank.PostHttpMethod.RequestConfig): AxiosPromise<Pay_bank.PostHttpMethod.WellformedResponse>
    /**
     * 企业付款到银行卡
     * @link https://pay.weixin.qq.com/wiki/doc/api/tools/mch_pay.php?chapter=24_2
     */
    post(data: Pay_bank.PostHttpMethod.XmlDataRequest, config: Pay_bank.PostHttpMethod.RequestConfig): AxiosPromise<Pay_bank.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V2 {
  export interface Mmpaysptrans {
    pay_bank: Mmpaysptrans.Pay_bank
  }
}
namespace WeChatPay.OpenAPI {
  export interface V2 {
    mmpaysptrans: V2.Mmpaysptrans
  }
}
export interface Wechatpay {
  /**
   * APIv2 endpoint
   */
  v2: WeChatPay.OpenAPI.V2
}
export var wxpay: Wechatpay

// @filename: business.js
import { wxpay } from './virtual'
// ---cut---
wxpay.v2.mmpaysptrans.pay_bank.post({
//                             ^^^^
  mch_id,
  partner_trade_no,
  nonce_str,
  enc_bank_no,
  enc_true_name,
  bank_code,
  amount,
  desc,
}, { security })
//   ^?
.then(
  ({ // [!code hl:29]
    data: {
      return_code,
      return_msg,
      result_code,
      err_code,
      err_code_des,
      mch_id,
      partner_trade_no,
      amount,
      nonce_str,
      sign,
      payment_no,
      cmms_amt,
    },
  }) => ({
    return_code,
    return_msg,
    result_code,
    err_code,
    err_code_des,
    mch_id,
    partner_trade_no,
    amount,
    nonce_str,
    sign,
    payment_no,
    cmms_amt,
  })
)
```
