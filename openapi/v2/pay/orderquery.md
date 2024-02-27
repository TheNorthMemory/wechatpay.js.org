---
title: 查询订单
description: 该接口提供所有微信支付订单的查询，商户可以通过查询订单接口主动查询订单状态，完成下一步的业务逻辑。
---

# {{ $frontmatter.title }}

{{ $frontmatter.description }} [官方付款码文档](https://pay.weixin.qq.com/wiki/doc/api/micropay.php?chapter=9_2) [官方JSAPI文档](https://pay.weixin.qq.com/wiki/doc/api/jsapi.php?chapter=9_2) [官方NATIVE文档](https://pay.weixin.qq.com/wiki/doc/api/native.php?chapter=9_2) [官方APP文档](https://pay.weixin.qq.com/wiki/doc/api/app/app.php?chapter=9_2&index=4) [官方H5文档](https://pay.weixin.qq.com/wiki/doc/api/H5.php?chapter=9_2&index=2) [官方小程序支付文档](https://pay.weixin.qq.com/wiki/doc/api/wxa/wxa_api.php?chapter=9_2)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V2.Pay.Orderquery.PostHttpMethod {
  export interface XmlDataRequest {
    appid: string
    sub_appid?: string
    mch_id: string
    sub_mch_id?: string
    transaction_id?: string
    out_trade_no?: string
    nonce_str?: string
    sign_type?: 'MD5' | 'HMAC-SHA256'
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: XmlDataRequest
  }
  export interface WellformedResponse {
    return_code: string
    return_msg: string
    appid: string
    sub_appid?: string
    mch_id: string
    sub_mch_id?: string
    nonce_str: string
    sign: string
    result_code: string
    err_code: string
    err_code_des: string
    device_info: string
    openid: string
    is_subscribe: string
    sub_openid: string
    sub_is_subscribe: string
    trade_type: string
    trade_state: string
    bank_type: string
    total_fee: string
    settlement_total_fee: string
    fee_type: string
    cash_fee: string
    cash_fee_type: string
    coupon_fee: string
    coupon_count: string
    coupon_type_$n: string
    coupon_id_$n: string
    coupon_fee_$n: string
    transaction_id: string
    out_trade_no: string
    attach: string
    time_end: string
    trade_state_desc: string
    promotion_detail: string
    consume_fee: string
  }
}
namespace WeChatPay.OpenAPI.V2.Pay {
  export interface Orderquery {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/wiki/doc/api/micropay.php?chapter=9_2
     * @link https://pay.weixin.qq.com/wiki/doc/api/jsapi.php?chapter=9_2
     * @link https://pay.weixin.qq.com/wiki/doc/api/native.php?chapter=9_2
     * @link https://pay.weixin.qq.com/wiki/doc/api/app/app.php?chapter=9_2&index=4
     * @link https://pay.weixin.qq.com/wiki/doc/api/H5.php?chapter=9_2&index=2
     * @link https://pay.weixin.qq.com/wiki/doc/api/wxa/wxa_api.php?chapter=9_2
     */
    (data: Orderquery.PostHttpMethod.XmlDataRequest, config?: Orderquery.PostHttpMethod.RequestConfig): AxiosPromise<Orderquery.PostHttpMethod.WellformedResponse>
    /**
     * 查询订单
     * @link https://pay.weixin.qq.com/wiki/doc/api/micropay.php?chapter=9_2
     * @link https://pay.weixin.qq.com/wiki/doc/api/jsapi.php?chapter=9_2
     * @link https://pay.weixin.qq.com/wiki/doc/api/native.php?chapter=9_2
     * @link https://pay.weixin.qq.com/wiki/doc/api/app/app.php?chapter=9_2&index=4
     * @link https://pay.weixin.qq.com/wiki/doc/api/H5.php?chapter=9_2&index=2
     * @link https://pay.weixin.qq.com/wiki/doc/api/wxa/wxa_api.php?chapter=9_2
     */
    post(data: Orderquery.PostHttpMethod.XmlDataRequest, config?: Orderquery.PostHttpMethod.RequestConfig): AxiosPromise<Orderquery.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V2 {
  export interface Pay {
    orderquery: Pay.Orderquery
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
wxpay.v2.pay.orderquery.post({
                      //^^^^
  appid,
  sub_appid,
  mch_id,
  sub_mch_id,
  transaction_id,
  out_trade_no,
  nonce_str,
  sign_type,
})
.then(
  ({ // [!code hl:40]
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
      is_subscribe,
      sub_openid,
      sub_is_subscribe,
      trade_type,
      trade_state,
      bank_type,
      total_fee,
      settlement_total_fee,
      fee_type,
      cash_fee,
      cash_fee_type,
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
      promotion_detail,
      consume_fee,
    }
  }) => total_fee
)
```

> [!IMPORTANT] 需要调用查询接口的情况：
> - 当商户后台、网络、服务器等出现异常，商户系统最终未接收到支付通知；
> - 调用支付接口后，返回系统错误或未知交易状态情况；
> - 调用付款码支付API，返回**USERPAYING**的状态；
> - 调用关单或撤销接口API之前，需确认支付状态；
> - **$n** 为下标，从 **0** 开始编号，真实数据并不会返回 **$n** 字样；
