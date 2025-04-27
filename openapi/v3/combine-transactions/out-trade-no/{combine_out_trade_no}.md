---
title: 合单查单
description: 电商平台通过合单查询订单API查询订单状态，完成下一步的业务逻辑。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.CombineTransactions.OutTradeNo._combine_out_trade_no_.GetHttpMethod {
  export interface RequestConfig extends AxiosRequestConfig {
    combine_out_trade_no: string
  }
  export interface WellformedResponse {
    combine_appid: string
    combine_mchid: string
    combine_out_trade_no: string
    scene_info: {
      device_id: string
    }
    sub_orders: {
      mchid: string
      trade_type: string
      trade_state: string
      bank_type: string
      attach: string
      success_time: string
      transaction_id: string
      out_trade_no: string
      sub_mchid: string
      sub_appid: string
      sub_openid: string
      amount: {
        total_amount: number
        currency: string
        payer_amount: number
        payer_currency: string
        settlement_rate: number
      }
      settlement_rate: number
    }[]
    combine_payer_info: {
      openid: string
    }
  }
}
namespace WeChatPay.OpenAPI.V3.CombineTransactions.OutTradeNo {
  export interface _combine_out_trade_no_ {
    /**
     * 合单查询订单API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/pay/combine/chapter3_3.shtml
     */
    get(config: _combine_out_trade_no_.GetHttpMethod.RequestConfig): AxiosPromise<_combine_out_trade_no_.GetHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.CombineTransactions {
  export interface OutTradeNo {
    _combine_out_trade_no_: OutTradeNo._combine_out_trade_no_
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface CombineTransactions {
    outTradeNo: CombineTransactions.OutTradeNo
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
wxpay.v3.combineTransactions.outTradeNo._combine_out_trade_no_.get({
//                                                             ^^^
  combine_out_trade_no,
})
.then(
  ({ // [!code hl:17]
    data: {
      combine_appid,
      combine_mchid,
      combine_out_trade_no,
      scene_info,
      sub_orders,
      combine_payer_info,
    },
  }) => ({
    combine_appid,
    combine_mchid,
    combine_out_trade_no,
    scene_info,
    sub_orders,
    combine_payer_info,
  })
)
```

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4012557006) [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4013421126) [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4013421222) [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4013421316) [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4013421401) [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4012551745) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012761057) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4013462099) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4013462164) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4013462240) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4013462520) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012708988) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012602253) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012761049)
