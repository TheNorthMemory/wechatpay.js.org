---
title: 按微信支付订单号查单
description: 通过微信支付订单号查询订单状态
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/pay/transactions/chapter3_5.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Pay.Transactions.Id._transaction_id_.GetHttpMethod {
  export interface RequestConfig extends AxiosRequestConfig {
    transaction_id: string
    params: {
      mchid: string
    }
  }
  export interface WellformedResponse {
    transaction_id: string
    trade_type: string
    trade_state: string
    trade_state_desc: string
    bank_type: string
    success_time: string | Date
    appid: string
    mchid: string
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
  }
}
namespace WeChatPay.OpenAPI.V3.Pay.Transactions.Id {
  export interface _transaction_id_ {
    /**
     * 微信支付订单号查询
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/pay/transactions/chapter3_5.shtml
     */
    get(config: _transaction_id_.GetHttpMethod.RequestConfig): AxiosPromise<_transaction_id_.GetHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Pay.Transactions {
  export interface Id {
    _transaction_id_: Id._transaction_id_
    $transaction_id$: Id._transaction_id_
    '{transaction_id}': Id._transaction_id_
  }
}
namespace WeChatPay.OpenAPI.V3.Pay {
  export interface Transactions {
    id: Transactions.Id
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
export var wxpay: Wechatpay
// @filename: business.js
import { wxpay } from './virtual'
// ---cut---
wxpay.v3.pay.transactions.id._transaction_id_.get({
  transaction_id,
  params: { mchid }
})
.then(({ data: {
  transaction_id,
  trade_type,
  trade_state,
  trade_state_desc,
  bank_type,
  success_time,
  appid,
  mchid,
  description,
  attach,
  out_trade_no,
  amount,
  time_expire,
  notify_url,
  goods_tag,
  limit_pay,
  support_fapiao,
  detail,
  scene_info,
} }) => ({
  out_trade_no,
  trade_state,
  amount,
}))

// 或者
wxpay.v3.pay.transactions.id.$transaction_id$.get({
  transaction_id,
  params: { mchid }
})

// 或者
wxpay.v3.pay.transactions.id['{transaction_id}'].get({
  transaction_id,
  params: { mchid }
})
```

> [!IMPORTANT] 需要调用查询接口的情况：
> - 当商户后台、网络、服务器等出现异常，商户系统最终未接收到支付通知；
> - 调用支付接口后，返回系统错误或未知交易状态情况；
> - 调用付款码支付API，返回**USERPAYING**的状态；
> - 调用关单或撤销接口API之前，需确认支付状态；
