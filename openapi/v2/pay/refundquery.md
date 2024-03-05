---
title: 查询退款
description: 提交退款申请后，通过调用该接口查询退款状态。退款有一定延时，用零钱支付的退款20分钟内到账，银行卡支付的退款3个工作日后重新查询退款状态。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/api/micropay.php?chapter=9_5) [官方JSAPI文档](https://pay.weixin.qq.com/wiki/doc/api/jsapi.php?chapter=9_5) [官方NATIVE文档](https://pay.weixin.qq.com/wiki/doc/api/native.php?chapter=9_5) [官方APP文档](https://pay.weixin.qq.com/wiki/doc/api/app/app.php?chapter=9_5&index=7) [官方H5文档](https://pay.weixin.qq.com/wiki/doc/api/H5.php?chapter=9_5&index=5) [官方小程序支付文档](https://pay.weixin.qq.com/wiki/doc/api/wxa/wxa_api.php?chapter=9_5) [官方人脸支付文档](https://share.weiyun.com/5dxUgCw)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V2.Pay.Refundquery.PostHttpMethod {
  export interface XmlDataRequest {
    appid: string
    mch_id: string
    sub_appid?: string
    sub_mch_id?: string
    nonce_str?: string
    sign_type?: 'MD5' | 'HMAC-SHA256'
    transaction_id: string
    offset: number
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: XmlDataRequest
  }
  export interface WellformedResponse {
    return_code: string
    return_msg: string
    result_code: string
    err_code: string
    err_code_des: string
    appid: string
    mch_id: string
    sub_appid: string
    sub_mch_id: string
    nonce_str: string
    sign: string
    total_refund_count: number
    transaction_id: string
    out_trade_no: string
    total_fee: number
    settlement_total_fee: number
    fee_type: string
    cash_fee: number
    refund_count: number
    out_refund_no_$n: string
    refund_id_$n: string
    refund_channel_$n: string
    refund_fee_$n: number
    settlement_refund_fee_$n: number
    coupon_type_$n_$m: string
    coupon_refund_fee_$n: number
    coupon_refund_count_$n: number
    coupon_refund_id_$n_$m: string
    coupon_refund_fee_$n_$m: number
    refund_status_$n: string
    refund_account_$n: string
    refund_recv_accout_$n: string
    refund_success_time_$n: string
  }
}
namespace WeChatPay.OpenAPI.V2.Pay {
  export interface Refundquery {
    /**
     * shortland
     * @link https://share.weiyun.com/5dxUgCw
     */
    (data: Refundquery.PostHttpMethod.XmlDataRequest, config?: Refundquery.PostHttpMethod.RequestConfig): AxiosPromise<Refundquery.PostHttpMethod.WellformedResponse>
    /**
     * 查询退款
     * @link https://share.weiyun.com/5dxUgCw
     */
    post(data: Refundquery.PostHttpMethod.XmlDataRequest, config?: Refundquery.PostHttpMethod.RequestConfig): AxiosPromise<Refundquery.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V2 {
  export interface Pay {
    refundquery: Pay.Refundquery
  }
}
namespace WeChatPay.OpenAPI {
  export interface V2 {
    pay: V2.Pay
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
wxpay.v2.pay.refundquery.post({
//                       ^^^^
  appid,
  mch_id,
  sub_appid,
  sub_mch_id,
  nonce_str,
  sign_type,
  transaction_id,
  offset,
})
.then(
  ({ // [!code hl:37]
    data: {
      return_code,
      return_msg,
      result_code,
      err_code,
      err_code_des,
      appid,
      mch_id,
      sub_appid,
      sub_mch_id,
      nonce_str,
      sign,
      total_refund_count,
      transaction_id,
      out_trade_no,
      total_fee,
      settlement_total_fee,
      fee_type,
      cash_fee,
      refund_count,
      out_refund_no_$n,
      refund_id_$n,
      refund_channel_$n,
      refund_fee_$n,
      settlement_refund_fee_$n,
      coupon_type_$n_$m,
      coupon_refund_fee_$n,
      coupon_refund_count_$n,
      coupon_refund_id_$n_$m,
      coupon_refund_fee_$n_$m,
      refund_status_$n,
      refund_account_$n,
      refund_recv_accout_$n,
      refund_success_time_$n,
    },
  }) => return_code === 'SUCCESS' && result_code === 'SUCCESS'
)
```
