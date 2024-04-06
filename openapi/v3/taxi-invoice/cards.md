---
title: 将出租车电子发票插入微信用户卡包
description: 服务商开具出租车电子发票后，调用本接口将发票插入微信用户的卡包。调用本接口需要发票文件ID，可调用【上传出租车电子发票文件】来获取。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/docs/partner/apis/taxi-fapiao/taxi-invoice-card/create-taxi-invoice-card.html)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.TaxiInvoice.Cards.PostHttpMethod {
  export interface JsonDataRequest {
    company_mchid: string
    trade_number: string
    appid: string
    openid: string
    region_id: number
    driver_license: string
    plate_number: string
    fapiao_card_information: {
      fapiao_media_id: string
      fapiao_number: string
      fapiao_code: string
      fapiao_time: string
      check_code: string
      password: string
      total_amount: number
      tax_amount: number
      amount: number
      buyer_information: {
        type: string
        name: string
        taxpayer_id: string
        address: string
        telephone: string
        bank_name: string
        bank_account: string
      }
      seller_information: {
        name: string
        taxpayer_id: string
        address: string
        telephone: string
        bank_name: string
        bank_account: string
      }
      extra_information: {
        payee: string
        reviewer: string
        drawer: string
      }
      items: {
        tax_code: string
        goods_name: string
        specification: string
        unit: string
        quantity: number
        unit_price: number
        amount: number
        tax_amount: number
        total_amount: number
        tax_rate: number
        tax_prefer_mark: string
        discount: boolean
      }[]
      remark: string
    }
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
  }
  export interface WellformedResponse {
    card_appid: string
    card_openid: string
    card_id: string
    card_code: string
  }
}
namespace WeChatPay.OpenAPI.V3.TaxiInvoice {
  export interface Cards {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/docs/partner/apis/taxi-fapiao/taxi-invoice-card/create-taxi-invoice-card.html
     */
    (data: Cards.PostHttpMethod.JsonDataRequest, config?: Cards.PostHttpMethod.RequestConfig): AxiosPromise<Cards.PostHttpMethod.WellformedResponse>
    /**
     * 将出租车电子发票插入微信用户卡包API
     * @link https://pay.weixin.qq.com/docs/partner/apis/taxi-fapiao/taxi-invoice-card/create-taxi-invoice-card.html
     */
    post(data: Cards.PostHttpMethod.JsonDataRequest, config?: Cards.PostHttpMethod.RequestConfig): AxiosPromise<Cards.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface TaxiInvoice {
    cards: TaxiInvoice.Cards
  }
}
namespace WeChatPay.OpenAPI {
  export interface V3 {
    taxiInvoice: V3.TaxiInvoice
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
wxpay.v3.taxiInvoice.cards.post({
//                         ^^^^
  company_mchid,
  trade_number,
  appid,
  openid,
  region_id,
  driver_license,
  plate_number,
  fapiao_card_information,
})
.then(
  ({ // [!code hl:13]
    data: {
      card_appid,
      card_openid,
      card_id,
      card_code,
    },
  }) => ({
    card_appid,
    card_openid,
    card_id,
    card_code,
  })
)
```
