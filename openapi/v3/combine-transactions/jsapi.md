---
title: 合单JSAPI支付
description: 使用合单支付接口，用户只输入一次密码，即可完成多个订单的支付。目前最多一次可支持50笔订单进行合单支付。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { KeyLike } from 'crypto'
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.CombineTransactions.Jsapi.PostHttpMethod {
  export interface JsonDataRequest {
    combine_appid: string
    combine_mchid: string
    combine_out_trade_no: string
    scene_info: {
      device_id: string
      payer_client_ip: string
    }
    sub_orders: {
      mchid: string
      attach: string
      amount: {
        total_amount: number
        currency: string
      }
      out_trade_no: string
      sub_mchid: string
      detail?: string
      goods_tag: string
      description: string
      settle_info: {
        profit_sharing: boolean
        subsidy_amount: number
      }
      sub_appid: string
    }[]
    combine_payer_info: {
      openid: string
      sub_openid?: string
    }
    time_start: string
    time_expire: string
    notify_url: string
    limit_pay?: 'no_balance' | 'no_debit' | 'balance_only'
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
  }
  export interface WellformedResponse {
    prepay_id: string
  }
}
namespace WeChatPay.OpenAPI.V3.CombineTransactions {
  export interface Jsapi {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/pay/combine/chapter3_2.shtml
     */
    (data: Jsapi.PostHttpMethod.JsonDataRequest, config?: Jsapi.PostHttpMethod.RequestConfig): AxiosPromise<Jsapi.PostHttpMethod.WellformedResponse>
    /**
     * 合单下单-JSAPI支付API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/pay/combine/chapter3_2.shtml
     */
    post(data: Jsapi.PostHttpMethod.JsonDataRequest, config?: Jsapi.PostHttpMethod.RequestConfig): AxiosPromise<Jsapi.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface CombineTransactions {
    jsapi: CombineTransactions.Jsapi
  }
}
namespace WeChatPay.OpenAPI {
  export interface V3 {
    combineTransactions: V3.CombineTransactions
  }
}
export interface Wechatpay {
  /**
   * APIv3 endpoint
   */
  v3: WeChatPay.OpenAPI.V3
}
export var wxpay: Wechatpay
export var appId: WeChatPay.OpenAPI.V3.CombineTransactions.Jsapi.PostHttpMethod.JsonDataRequest['combine_appid']
export var merchantPrivateKeyInstance: KeyLike

// @filename: business.js
import { wxpay, appId, merchantPrivateKeyInstance } from './virtual'
// ---cut---
const { Formatter, Rsa } = require('wechatpay-axios-plugin')

wxpay.v3.combineTransactions.jsapi.post({
//                                 ^^^^
  combine_appid,
  combine_mchid,
  combine_out_trade_no,
  scene_info,
  sub_orders,
  combine_payer_info,
  time_start,
  time_expire,
  notify_url,
  limit_pay,
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

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4012556926) [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4012556931) [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4012545654) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012757938) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012758246) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012707323) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012760615) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012760633)
