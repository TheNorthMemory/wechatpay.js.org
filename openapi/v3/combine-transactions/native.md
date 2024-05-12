---
title: 合单Native支付
description: 使用合单支付接口，用户只输入一次密码，即可完成多个订单的支付。目前最多一次可支持50笔订单进行合单支付。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/pay/combine/chapter3_10.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.CombineTransactions.Native.PostHttpMethod {
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
      goods_tag: string
      description: string
      settle_info: {
        profit_sharing: boolean
        subsidy_amount: number
      }
      sub_appid: string
    }[]
    time_start: string
    time_expire: string
    notify_url: string
    limit_pay?: 'no_balance' | 'no_debit' | 'balance_only'
    combine_payer_info?: {
      openid: string
      sub_openid?: string
    }
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
  }
  export interface WellformedResponse {
    code_url: string
  }
}
namespace WeChatPay.OpenAPI.V3.CombineTransactions {
  export interface Native {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/pay/combine/chapter3_10.shtml
     */
    (data: Native.PostHttpMethod.JsonDataRequest, config?: Native.PostHttpMethod.RequestConfig): AxiosPromise<Native.PostHttpMethod.WellformedResponse>
    /**
     * 合单下单-Native支付API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/pay/combine/chapter3_10.shtml
     */
    post(data: Native.PostHttpMethod.JsonDataRequest, config?: Native.PostHttpMethod.RequestConfig): AxiosPromise<Native.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface CombineTransactions {
    native: CombineTransactions.Native
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

// @filename: business.js
import { wxpay } from './virtual'
// ---cut---
wxpay.v3.combineTransactions.native.post({
//                                  ^^^^
  combine_appid,
  combine_mchid,
  combine_out_trade_no,
  scene_info,
  sub_orders,
  time_start,
  time_expire,
  notify_url,
  limit_pay,
  combine_payer_info,
})
.then(
  ({ // [!code hl:7]
    data: {
      code_url,
    },
  }) => ({
    code_url,
  })
)
```
