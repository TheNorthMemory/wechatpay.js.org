---
title: 查询企业付款银行卡
description: 用于对商户企业付款到银行卡操作进行结果查询，返回付款操作详细结果。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/api/tools/mch_pay.php?chapter=24_3)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise, AxiosResponseTransformer } from 'axios'
namespace WeChatPay.OpenAPI.V2.Mmpaymkttransfers.Query_bank.PostHttpMethod {
  export interface XmlDataRequest {
    mch_id: string
    partner_trade_no: string
    nonce_str?: string
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
    payment_no: string
    bank_no_md5: string
    true_name_md5: string
    amount: string | number
    status: string
    cmms_amt: string | number
    create_time: string
    pay_succ_time: string
    reason: string
  }
}
namespace WeChatPay.OpenAPI.V2.Mmpaymkttransfers {
  export interface Query_bank {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/wiki/doc/api/tools/mch_pay.php?chapter=24_3
     */
    (data: Query_bank.PostHttpMethod.XmlDataRequest, config: Query_bank.PostHttpMethod.RequestConfig): AxiosPromise<Query_bank.PostHttpMethod.WellformedResponse>
    /**
     * 查询企业付款银行卡
     * @link https://pay.weixin.qq.com/wiki/doc/api/tools/mch_pay.php?chapter=24_3
     */
    post(data: Query_bank.PostHttpMethod.XmlDataRequest, config: Query_bank.PostHttpMethod.RequestConfig): AxiosPromise<Query_bank.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V2 {
  export interface Mmpaymkttransfers {
    query_bank: Mmpaymkttransfers.Query_bank
  }
}
namespace WeChatPay.OpenAPI {
  export interface V2 {
    mmpaymkttransfers: V2.Mmpaymkttransfers
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
const { Transformer } = require('wechatpay-axios-plugin')

wxpay.v2.mmpaymkttransfers.query_bank.post({
//                                    ^^^^
  mch_id,
  partner_trade_no,
  nonce_str,
}, { security, })
.then(
  ({ // [!code hl:37]
    data: {
      return_code,
      return_msg,
      result_code,
      err_code,
      err_code_des,
      mch_id,
      partner_trade_no,
      payment_no,
      bank_no_md5,
      true_name_md5,
      amount,
      status,
      cmms_amt,
      create_time,
      pay_succ_time,
      reason,
    },
  }) => ({
    return_code,
    return_msg,
    result_code,
    err_code,
    err_code_des,
    mch_id,
    partner_trade_no,
    payment_no,
    bank_no_md5,
    true_name_md5,
    amount,
    status,
    cmms_amt,
    create_time,
    pay_succ_time,
    reason,
  })
)
```
