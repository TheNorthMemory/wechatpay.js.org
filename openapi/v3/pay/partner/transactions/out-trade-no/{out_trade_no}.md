---
title: 按商户订单号查单
description: 通过商户订单号查询订单状态
---

# {{ $frontmatter.title }}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/pay/transactions/chapter5_5.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Pay.Partner.Transactions.OutTradeNo._out_trade_no_.GetHttpMethod {
  export interface RequestConfig extends AxiosRequestConfig {
    out_trade_no: string
    params: {
      sp_mchid: string
      sub_mchid: string
    }
  }
  export interface WellformedResponse {
    sp_appid: string
    sp_mchid: string
    sub_appid: string
    sub_mchid: string
    settle_info: {
      profit_sharing: boolean
      subsidy_amount: number
    }
    transaction_id: string
    trade_type: string
    trade_state: string
    trade_state_desc: string
    bank_type: string
    success_time: string | Date
    description: string
    attach: string
    out_trade_no: string
    amount: {
      total: number
      currency: string
    }
    time_expire: string | Date
    notify_url: string
    goods_tag: string
    limit_pay: string[]
    support_fapiao: boolean
    detail: {
      cost_price: number
      invoice_id: string
      goods_detail: {
        merchant_goods_id: string
        wechatpay_goods_id: string
        goods_name: string
        quantity: number
        unit_price: number
      }[]
    }
    scene_info: {
      payer_client_ip: string
      device_id: string
      store_info: {
        id: string
        name: string
        area_code: string
        address: string
      }
    }
    payer: {
      sp_openid: string
      sub_openid: string
    }
  }
}
namespace WeChatPay.OpenAPI.V3.Pay.Partner.Transactions.OutTradeNo {
  export interface _out_trade_no_ {
    /**
     * 商户订单号查询
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/pay/transactions/chapter5_5.shtml
     */
    get(config: _out_trade_no_.GetHttpMethod.RequestConfig): AxiosPromise<_out_trade_no_.GetHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Pay.Partner.Transactions {
  export interface OutTradeNo {
    _out_trade_no_: OutTradeNo._out_trade_no_
  }
}
namespace WeChatPay.OpenAPI.V3.Pay.Partner {
  export interface Transactions {
    outTradeNo: Transactions.OutTradeNo
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
export var wxpay: Wechatpay
// @filename: business.js
import { wxpay } from './virtual'
// ---cut---
wxpay.v3.pay.partner.transactions.outTradeNo._out_trade_no_.get({
  out_trade_no,
  params: { sp_mchid, sub_mchid }
}).then(({ data }) => data)
```

> [!IMPORTANT] 需要调用查询接口的情况：
> - 当商户后台、网络、服务器等出现异常，商户系统最终未接收到支付通知；
> - 调用支付接口后，返回系统错误或未知交易状态情况；
> - 调用付款码支付API，返回**USERPAYING**的状态；
> - 调用关单或撤销接口API之前，需确认支付状态；
