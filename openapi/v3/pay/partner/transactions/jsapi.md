---
title: JSAPI下单(合作伙伴模式)
description: 除付款码支付场景以外，商户系统先调用该接口在微信支付服务后台生成预支付交易单，返回正确的预支付交易会话标识后再按Native、JSAPI、APP等不同场景生成交易串调起支付。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/pay/transactions/chapter5_2.shtml) [官方文档](https://pay.weixin.qq.com/docs/partner/apis/partner-jsapi-payment/partner-jsons/partner-jsapi-prepay.html)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Pay.Partner.Transactions.Jsapi.PostHttpMethod {
  export interface JsonDataRequest {
    sp_appid: string
    sp_mchid: string
    sub_mchid: string
    sub_appid?: string
    description: string
    out_trade_no: string
    time_expire?: string | Date
    attach?: string
    notify_url: string
    amount: {
      total: number
      currency?: 'CNY'
    }
    payer: {
      sp_openid?: string
      sub_openid?: string
    }
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
  }
  export interface WellformedResponse {
    prepay_id: string
  }
}
namespace WeChatPay.OpenAPI.V3.Pay.Partner.Transactions {
  export interface Jsapi {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/docs/partner/apis/partner-jsapi-payment/partner-jsons/partner-jsapi-prepay.html
     */
    (data: Jsapi.PostHttpMethod.JsonDataRequest, config?: Jsapi.PostHttpMethod.RequestConfig): AxiosPromise<Jsapi.PostHttpMethod.WellformedResponse>
    /**
     * APP下单API
     * @link https://pay.weixin.qq.com/docs/partner/apis/partner-jsapi-payment/partner-jsons/partner-jsapi-prepay.html
     */
    post(data: Jsapi.PostHttpMethod.JsonDataRequest, config?: Jsapi.PostHttpMethod.RequestConfig): AxiosPromise<Jsapi.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Pay.Partner {
  export interface Transactions {
    jsapi: Transactions.Jsapi
  }
}
namespace WeChatPay.OpenAPI.V3.Pay {
  export interface Partner {
    transactions: Partner.Transactions
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface Pay {
    partner: Pay.Partner
  }
}
namespace WeChatPay.OpenAPI {
  export interface V3 {
    pay: V3.Pay
  }
}
export interface Wechatpay {
  /**
   * APIv3 endpoint
   */
  v3: WeChatPay.OpenAPI.V3
}

import { BinaryLike } from 'crypto'
export var wxpay: Wechatpay
export var appId: WeChatPay.OpenAPI.V3.Pay.Partner.Transactions.Jsapi.PostHttpMethod.JsonDataRequest['sub_appid']
export var merchantPrivateKeyInstance: BinaryLike

// @filename: business.js
import { wxpay, appId, merchantPrivateKeyInstance } from './virtual'
// ---cut---
const { Formatter, Rsa } = require('wechatpay-axios-plugin')

wxpay.v3.pay.partner.transactions.jsapi.post({
                                      //^^^^
  sp_mchid,
  sp_appid,
  sub_mchid,
  sub_appid,
  description,
  out_trade_no,
  notify_url,
  amount: { total, currency },
  payer: { sp_openid, sub_openid },
})
.then(({ data: { prepay_id } }) => {
  const nonceStr = Formatter.nonce();
  const timeStamp = '' + Formatter.timestamp();
  const packageStr = 'prepay_id=' + prepay_id;
  return { // [!code hl:11]
    appId,
    timeStamp,
    nonceStr,
    package: packageStr,
    signType: 'RSA',
    paySign: Rsa.sign(
      Formatter.joinedByLineFeed(appId, timeStamp, nonceStr, packageStr),
      merchantPrivateKeyInstance
    )
  }
})
```
