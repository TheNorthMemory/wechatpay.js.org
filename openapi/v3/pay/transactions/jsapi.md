---
title: JSAPI下单
description: 除付款码支付场景以外，商户系统先调用该接口在微信支付服务后台生成预支付交易单，返回正确的预支付交易会话标识后再按Native、JSAPI、APP等不同场景生成交易串调起支付。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/pay/transactions/chapter3_2.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Pay.Transactions.Jsapi.PostHttpMethod {
  export interface JsonDataRequest {
    appid: string
    mchid: string
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
      openid: string
    }
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
  }
  export interface WellformedResponse {
    prepay_id: string
  }
}
namespace WeChatPay.OpenAPI.V3.Pay.Transactions {
  export interface Jsapi {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/pay/transactions/chapter3_2.shtml
     */
    (data: Jsapi.PostHttpMethod.JsonDataRequest, config?: Jsapi.PostHttpMethod.RequestConfig): AxiosPromise<Jsapi.PostHttpMethod.WellformedResponse>
    /**
     * APP下单API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/pay/transactions/chapter3_2.shtml
     */
    post(data: Jsapi.PostHttpMethod.JsonDataRequest, config?: Jsapi.PostHttpMethod.RequestConfig): AxiosPromise<Jsapi.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Pay {
  export interface Transactions {
    jsapi: Transactions.Jsapi
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface Pay {
    transactions: Pay.Transactions
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

import { KeyLike } from 'crypto'
export var wxpay: Wechatpay
export var appId: WeChatPay.OpenAPI.V3.Pay.Transactions.Jsapi.PostHttpMethod.JsonDataRequest['appid']
export var merchantPrivateKeyInstance: KeyLike

// @filename: business.js
import { wxpay, appId, merchantPrivateKeyInstance } from './virtual'
// ---cut---
const { Formatter, Rsa } = require('wechatpay-axios-plugin')

wxpay.v3.pay.transactions.jsapi.post({
                              //^^^^
  mchid,
  appid,
  description,
  out_trade_no,
  notify_url,
  amount: { total, currency },
  payer: { openid },
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
