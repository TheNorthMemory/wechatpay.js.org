---
title: 将电子发票插入微信用户卡包
description: 商户自行开具电子发票后，可调用本接口将电子发票插入微信用户的卡包。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/new-tax-control-fapiao/chapter3_11.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.NewTaxControlFapiao.FapiaoApplications._fapiao_apply_id_.InsertCards.PostHttpMethod {
  export interface JsonDataRequest {
    sub_mchid: string
    scene: string
    buyer_information: {
      type: string
      name: string
      taxpayer_id: string
      address: string
      telephone: string
      bank_name: string
      bank_account: string
      phone: string
      email: string
    }
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
    }[]
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
    fapiao_apply_id: string
    headers: {
      'Wechatpay-Serial': string
    }
  }
  export interface WellformedResponse {
  }
}
namespace WeChatPay.OpenAPI.V3.NewTaxControlFapiao.FapiaoApplications._fapiao_apply_id_ {
  export interface InsertCards {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/new-tax-control-fapiao/chapter3_11.shtml
     */
    (data: InsertCards.PostHttpMethod.JsonDataRequest, config: InsertCards.PostHttpMethod.RequestConfig): AxiosPromise<InsertCards.PostHttpMethod.WellformedResponse>
    /**
     * 将电子发票插入微信用户卡包
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/new-tax-control-fapiao/chapter3_11.shtml
     */
    post(data: InsertCards.PostHttpMethod.JsonDataRequest, config: InsertCards.PostHttpMethod.RequestConfig): AxiosPromise<InsertCards.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.NewTaxControlFapiao.FapiaoApplications {
  export interface _fapiao_apply_id_ {
    insertCards: _fapiao_apply_id_.InsertCards
  }
}
namespace WeChatPay.OpenAPI.V3.NewTaxControlFapiao {
  export interface FapiaoApplications {
    _fapiao_apply_id_: FapiaoApplications._fapiao_apply_id_
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface NewTaxControlFapiao {
    fapiaoApplications: NewTaxControlFapiao.FapiaoApplications
  }
}
namespace WeChatPay.OpenAPI {
  export interface V3 {
    newTaxControlFapiao: V3.NewTaxControlFapiao
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
wxpay.v3.newTaxControlFapiao.fapiaoApplications._fapiao_apply_id_.insertCards.post({
//                                                                            ^^^^
  sub_mchid,
  scene,
  buyer_information,
  fapiao_card_information,
}, { fapiao_apply_id, headers, })
.then(({ status }) => status === 204) // [!code hl]
```
