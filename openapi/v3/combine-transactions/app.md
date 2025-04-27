---
title: 合单APP支付
description: 使用合单支付接口，用户只输入一次密码，即可完成多个订单的支付。目前最多一次可支持50笔订单进行合单支付。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { KeyLike } from 'crypto'
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.CombineTransactions.App.PostHttpMethod {
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
      detail: string
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
    contract_info?: {
      mchid: string
      appid: string
      out_contract_code: string
      plan_id: number
      contract_display_account: string
      notify_url: string
    }
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
  }
  export interface WellformedResponse {
    prepay_id: string
    contract_result?: {
      code: string
      message: string
    }
  }
}
namespace WeChatPay.OpenAPI.V3.CombineTransactions {
  export interface App {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/pay/combine/chapter3_1.shtml
     */
    (data: App.PostHttpMethod.JsonDataRequest, config?: App.PostHttpMethod.RequestConfig): AxiosPromise<App.PostHttpMethod.WellformedResponse>
    /**
     * 合单下单-APP支付API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/pay/combine/chapter3_1.shtml
     */
    post(data: App.PostHttpMethod.JsonDataRequest, config?: App.PostHttpMethod.RequestConfig): AxiosPromise<App.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface CombineTransactions {
    app: CombineTransactions.App
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
export var appid: WeChatPay.OpenAPI.V3.CombineTransactions.App.PostHttpMethod.JsonDataRequest['combine_appid']
export var partnerid: WeChatPay.OpenAPI.V3.CombineTransactions.App.PostHttpMethod.JsonDataRequest['combine_mchid']
export var merchantPrivateKeyInstance: KeyLike

// @filename: business.js
import { wxpay, appid, partnerid, merchantPrivateKeyInstance } from './virtual'
// ---cut---
const { Formatter, Rsa } = require('wechatpay-axios-plugin')

wxpay.v3.combineTransactions.app.post({
//                               ^^^^
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
  contract_info,
})
.then(({ data: { prepay_id: prepayid, contract_result, }, }) => {
  const noncestr = Formatter.nonce();
  const timestamp = '' + Formatter.timestamp();
  return { // [!code hl:12]
    appid,
    partnerid,
    prepayid,
    noncestr,
    timestamp,
    package: 'Sign=WXPay',
    sign: Rsa.sign(
      Formatter.joinedByLineFeed(appid, timestamp, noncestr, prepayid),
      merchantPrivateKeyInstance
    )
  }
})
```

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4012556944) [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4012545465) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012758021) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012707307) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012760622) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012884108)
