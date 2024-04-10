---
title: 扫码支付下单
description: 合作伙伴系统先调用该接口在微信支付服务后台生成预支付交易单，返回正确的预支付交易会话标识后再按Native、JSAPI、APP等不同场景生成交易串调起支付。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/docs/partner/apis/partner-scannedpos-payment/partner-ap-iv3/parner-scanned-pos-prepay.html)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Pay.Partner.Transactions.Scannedpos.PostHttpMethod {
  export interface JsonDataRequest {
    sp_appid: string
    sp_mchid: string
    sub_appid: string
    sub_mchid: string
    description: string
    out_trade_no: string
    time_expire: string | Date
    attach: string
    notify_url: string
    goods_tag: string
    support_fapiao: boolean
    amount: {
      total: number
      currency: string
    }
    payer: {
      sp_openid: string
      sub_openid: string
    }
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
        out_id: string
      }
    }
    settle_info: {
      profit_sharing: boolean
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
  export interface Scannedpos {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/docs/partner/apis/partner-scannedpos-payment/partner-ap-iv3/parner-scanned-pos-prepay.html
     */
    (data: Scannedpos.PostHttpMethod.JsonDataRequest, config?: Scannedpos.PostHttpMethod.RequestConfig): AxiosPromise<Scannedpos.PostHttpMethod.WellformedResponse>
    /**
     * 扫码支付下单
     * @link https://pay.weixin.qq.com/docs/partner/apis/partner-scannedpos-payment/partner-ap-iv3/parner-scanned-pos-prepay.html
     */
    post(data: Scannedpos.PostHttpMethod.JsonDataRequest, config?: Scannedpos.PostHttpMethod.RequestConfig): AxiosPromise<Scannedpos.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Pay.Partner {
  export interface Transactions {
    scannedpos: Transactions.Scannedpos
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
wxpay.v3.pay.partner.transactions.scannedpos.post({
//                                           ^^^^
  sp_appid,
  sp_mchid,
  sub_appid,
  sub_mchid,
  description,
  out_trade_no,
  time_expire,
  attach,
  notify_url,
  goods_tag,
  support_fapiao,
  amount,
  payer,
  detail,
  scene_info,
  settle_info,
})
.then(
  ({ // [!code hl:7]
    data: {
      prepay_id,
    },
  }) => ({
    prepay_id,
  })
)
```
