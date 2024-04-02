---
title: 使用签约协议号发起扣款
description: 使用签约协议号发起扣款，本接口支持两种模式，通过参数模式（payment_mode）进行选择。 同步扣款模式会立即返回扣款结果，异步扣款模式会立即返回受理结果，最终的扣款结果会通过回调的方式通知给商户 两种模式下，若出现超时或未回调时，商户均可调用商户订单号查单接口查询订单扣款结果。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/edu/eduschoolpay/chapter4_1.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Eduschoolpay.Transactions.PostHttpMethod {
  export interface JsonDataRequest {
    appid: string
    sub_mchid: string
    sub_appid: string
    description: string
    attach: string
    out_trade_no: string
    goods_tag: string
    notify_url: string
    contract_id: string
    user_id: string
    amount: {
      total: number
      currency: string
    }
    scene_info: {
      start_time: string
      school_id: string
      scene_type: string
    }
    device_info: {
      device_id: string
      device_ip: string
    }
    settle_info: {
      profit_sharing: boolean
    }
    payment_mode: 'SYNC' | 'ASYNC'
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
  }
  export interface WellformedResponse {
    mchid: string
    appid: string
    sub_mchid: string
    sub_appid: string
    out_trade_no: string
    transaction_id: string
    trade_type: string
    trade_state: string
    trade_state_desc: string
    bank_type: string
    attach: string
    success_time: string
    payer: {
      openid: string
      sub_openid: string
    }
    amount: {
      total: number
      payer_total: number
      discount_total: number
      currency: string
    }
    device_info: {
      device_id: string
      device_ip: string
    }
    promotion_detail: {
      coupon_id: string
      name: string
      scope: string
      type: string
      amount: number
      stock_id: string
      wechatpay_contribute: number
      merchant_contribute: number
      other_contribute: number
    }[]
  }
}
namespace WeChatPay.OpenAPI.V3.Eduschoolpay {
  export interface Transactions {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/edu/eduschoolpay/chapter4_1.shtml
     */
    (data: Transactions.PostHttpMethod.JsonDataRequest, config?: Transactions.PostHttpMethod.RequestConfig): AxiosPromise<Transactions.PostHttpMethod.WellformedResponse>
    /**
     * 扣款API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/edu/eduschoolpay/chapter4_1.shtml
     */
    post(data: Transactions.PostHttpMethod.JsonDataRequest, config?: Transactions.PostHttpMethod.RequestConfig): AxiosPromise<Transactions.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface Eduschoolpay {
    transactions: Eduschoolpay.Transactions
  }
}
namespace WeChatPay.OpenAPI {
  export interface V3 {
    eduschoolpay: V3.Eduschoolpay
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
wxpay.v3.eduschoolpay.transactions.post({
//                                 ^^^^
  appid,
  sub_mchid,
  sub_appid,
  description,
  attach,
  out_trade_no,
  goods_tag,
  notify_url,
  contract_id,
  user_id,
  amount,
  scene_info,
  device_info,
  settle_info,
  payment_mode,
})
.then(
  ({ // [!code hl:37]
    data: {
      mchid,
      appid,
      sub_mchid,
      sub_appid,
      out_trade_no,
      transaction_id,
      trade_type,
      trade_state,
      trade_state_desc,
      bank_type,
      attach,
      success_time,
      payer,
      amount,
      device_info,
      promotion_detail,
    },
  }) => ({
    mchid,
    appid,
    sub_mchid,
    sub_appid,
    out_trade_no,
    transaction_id,
    trade_type,
    trade_state,
    trade_state_desc,
    bank_type,
    attach,
    success_time,
    payer,
    amount,
    device_info,
    promotion_detail,
  })
)
```
