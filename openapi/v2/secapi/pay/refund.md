---
title: 申请退款
description: 当交易发生之后一段时间内，由于买家或者卖家的原因需要退款时，卖家可以通过退款接口将支付款退还给买家，微信支付将在收到退款请求并且验证成功之后，按照退款规则将支付款按原路退到买家账号上。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方付款码文档](https://pay.weixin.qq.com/wiki/doc/api/micropay.php?chapter=9_4) [官方JSAPI文档](https://pay.weixin.qq.com/wiki/doc/api/jsapi.php?chapter=9_4) [官方NATIVE文档](https://pay.weixin.qq.com/wiki/doc/api/native.php?chapter=9_4) [官方APP文档](https://pay.weixin.qq.com/wiki/doc/api/app/app.php?chapter=9_4&index=6) [官方H5文档](https://pay.weixin.qq.com/wiki/doc/api/H5.php?chapter=9_4&index=4) [官方小程序支付文档](https://pay.weixin.qq.com/wiki/doc/api/wxa/wxa_api.php?chapter=9_4) [官方刷脸支付文档](https://share.weiyun.com/5dxUgCw)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V2.Secapi.Pay.Refund.PostHttpMethod {
  export interface XmlDataRequest {
    appid: string
    sub_appid?: string
    mch_id: string
    sub_mch_id?: string
    nonce_str?: string
    sign_type?: 'MD5' | 'HMAC-SHA256'
    transaction_id: string
    out_trade_no: string
    out_refund_no: string
    total_fee: number
    refund_fee: number
    refund_fee_type: string
    refund_desc: string
    refund_account: string
    notify_url: string
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
    appid: string
    mch_id: string
    sub_appid?: string
    sub_mch_id?: string
    nonce_str: string
    sign: string
    transaction_id: string
    out_trade_no: string
    out_refund_no: string
    refund_id: string
    refund_fee: number
    settlement_refund_fee: number
    total_fee: number
    settlement_total_fee: number
    fee_type: string
    cash_fee: number
    cash_fee_type: string
    cash_refund_fee: number
    coupon_type_$n: string
    coupon_refund_fee: number
    coupon_refund_fee_$n: number
    coupon_refund_count: number
    coupon_refund_id_$n: string
  }
}
namespace WeChatPay.OpenAPI.V2.Secapi.Pay {
  export interface Refund {
    /**
     * shortland
     * @link https://share.weiyun.com/5dxUgCw
     */
    (data: Refund.PostHttpMethod.XmlDataRequest, config: Refund.PostHttpMethod.RequestConfig): AxiosPromise<Refund.PostHttpMethod.WellformedResponse>
    /**
     * 申请退款
     * @link https://share.weiyun.com/5dxUgCw
     */
    post(data: Refund.PostHttpMethod.XmlDataRequest, config: Refund.PostHttpMethod.RequestConfig): AxiosPromise<Refund.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V2.Secapi {
  export interface Pay {
    refund: Pay.Refund
  }
}
namespace WeChatPay.OpenAPI.V2 {
  export interface Secapi {
    pay: Secapi.Pay
  }
}
namespace WeChatPay.OpenAPI {
  export interface V2 {
    secapi: V2.Secapi
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
wxpay.v2.secapi.pay.refund.post({
//                         ^^^^
  appid,
  sub_appid,
  mch_id,
  sub_mch_id,
  nonce_str,
  sign_type,
  transaction_id,
  out_trade_no,
  out_refund_no,
  total_fee,
  refund_fee,
  refund_fee_type,
  refund_desc,
  refund_account,
  notify_url,
}, { security })
.then(
  ({ // [!code hl:32]
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
      transaction_id,
      out_trade_no,
      out_refund_no,
      refund_id,
      refund_fee,
      settlement_refund_fee,
      total_fee,
      settlement_total_fee,
      fee_type,
      cash_fee,
      cash_fee_type,
      cash_refund_fee,
      coupon_type_$n,
      coupon_refund_fee,
      coupon_refund_fee_$n,
      coupon_refund_count,
      coupon_refund_id_$n,
    },
  }) => return_code === 'SUCCESS' && result_code === 'SUCCESS'
)
```

> [!IMPORTANT] 注意：
> 1. *wxpay* 构造实例化时，需要显式初始化 **secret**、 **merchant.key** 以及 **merchant.cert** 字段，此*HTTPS*请求为私有**TLS**加密协议，需要双向证书；
> 1. 请求第二型参 **security** 需要显式传 **true**，即告诉SDK此请求需要使用商户私钥及证书进行通信；
> 1. 交易时间超过一年的订单无法提交退款；
> 1. 微信支付退款支持单笔交易分多次退款，多次退款需要提交原支付订单的商户订单号和设置不同的退款单号。申请退款总金额不能超过订单金额。 **一笔退款失败后重新提交，请不要更换退款单号，请使用原商户退款单号**；
> 1. 请求频率限制：150qps，即每秒钟正常的申请退款请求次数不超过150次；
> 1. 每个支付订单的部分退款次数不能超过50次；
> 1. 如果同一个用户有多笔退款，建议分不同批次进行退款，避免并发退款导致退款失败；
> 1. 申请退款接口的返回仅代表业务的受理情况，具体退款是否成功，需要通过退款查询接口获取结果。；
> 1. 一个月之前的订单申请退款频率限制为：5000/min；
> 1. 同一笔订单多次退款的请求需相隔1分钟；
> 1. **$n** 为下标，从 **0** 开始编号，真实数据并不会返回 **$n** 字样；
