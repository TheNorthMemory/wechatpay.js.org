---
title: 查询微信代扣订单状态(合作伙伴模式)
description: 该接口仅提供微信代扣订单的查询，商户可以通过该接口主动查询微信代扣订单状态，完成下一步的业务逻辑。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/api/vehicle_v2_sl.php?chapter=20_96&index=7&p=202)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V2.Transit.Partnerpay.Queryorder.PostHttpMethod {
  export interface XmlDataRequest {
    appid: string
    sub_appid: string
    mch_id: string
    sub_mch_id: string
    transaction_id?: string
    out_trade_no?: string
    nonce_str?: string
    sign_type: 'HMAC-SHA256'
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: XmlDataRequest
  }
  export interface WellformedResponse {
    return_code: string
    return_msg: string
    appid: string
    sub_appid: string
    mch_id: string
    sub_mch_id: string
    nonce_str: string
    sign: string
    result_code: string
    err_code: string
    err_code_des: string
    device_info: string
    openid: string
    sub_openid: string
    is_subscribe: string
    trade_type: string
    trade_state: string
    bank_type: string
    total_fee: number
    fee_type: string
    cash_fee: number
    cash_fee_type: string
    settlement_total_fee: number
    coupon_fee: number
    coupon_count: number
    coupon_type_$n: string
    coupon_id_$n: string
    coupon_fee_$n: number
    transaction_id: string
    out_trade_no: string
    attach: string
    time_end: string
    trade_state_desc: string
  }
}
namespace WeChatPay.OpenAPI.V2.Transit.Partnerpay {
  export interface Queryorder {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/wiki/doc/api/vehicle_v2_sl.php?chapter=20_96&index=7&p=202
     */
    (data: Queryorder.PostHttpMethod.XmlDataRequest, config?: Queryorder.PostHttpMethod.RequestConfig): AxiosPromise<Queryorder.PostHttpMethod.WellformedResponse>
    /**
     * 查询订单
     * @link https://pay.weixin.qq.com/wiki/doc/api/vehicle_v2_sl.php?chapter=20_96&index=7&p=202
     */
    post(data: Queryorder.PostHttpMethod.XmlDataRequest, config?: Queryorder.PostHttpMethod.RequestConfig): AxiosPromise<Queryorder.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V2.Transit {
  export interface Partnerpay {
    queryorder: Partnerpay.Queryorder
  }
}
namespace WeChatPay.OpenAPI.V2 {
  export interface Transit {
    partnerpay: Transit.Partnerpay
  }
}
namespace WeChatPay.OpenAPI {
  export interface V2 {
    transit: V2.Transit
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
wxpay.v2.transit.partnerpay.queryorder.post({
//                                     ^^^^
  appid,
  sub_appid,
  mch_id,
  sub_mch_id,
  transaction_id,
  nonce_str,
  sign_type,
})
.then(
  ({ // [!code hl:71]
    data: {
      return_code,
      return_msg,
      appid,
      sub_appid,
      mch_id,
      sub_mch_id,
      nonce_str,
      sign,
      result_code,
      err_code,
      err_code_des,
      device_info,
      openid,
      sub_openid,
      is_subscribe,
      trade_type,
      trade_state,
      bank_type,
      total_fee,
      fee_type,
      cash_fee,
      cash_fee_type,
      settlement_total_fee,
      coupon_fee,
      coupon_count,
      coupon_type_$n,
      coupon_id_$n,
      coupon_fee_$n,
      transaction_id,
      out_trade_no,
      attach,
      time_end,
      trade_state_desc,
    },
  }) => ({
    return_code,
    return_msg,
    appid,
    sub_appid,
    mch_id,
    sub_mch_id,
    nonce_str,
    sign,
    result_code,
    err_code,
    err_code_des,
    device_info,
    openid,
    sub_openid,
    is_subscribe,
    trade_type,
    trade_state,
    bank_type,
    total_fee,
    fee_type,
    cash_fee,
    cash_fee_type,
    settlement_total_fee,
    coupon_fee,
    coupon_count,
    coupon_type_$n,
    coupon_id_$n,
    coupon_fee_$n,
    transaction_id,
    out_trade_no,
    attach,
    time_end,
    trade_state_desc,
  })
)
```
