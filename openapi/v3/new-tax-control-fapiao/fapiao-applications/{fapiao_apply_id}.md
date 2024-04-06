---
title: 查询电子发票
description: 商户调用【开具电子发票】接口或【冲红电子发票】接口或【将电子发票插入微信用户卡包】接口成功后，应调用本接口查询电子发票开具/冲红/插卡结果，并获取已开具/冲红/插卡的电子发票信息。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/docs/merchant/apis/fapiao/fapiao-applications/get-fapiao-applications.html) [官方文档](https://pay.weixin.qq.com/docs/partner/apis/fapiao/fapiao-applications/get-fapiao-applications.html)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.NewTaxControlFapiao.FapiaoApplications._fapiao_apply_id_.GetHttpMethod {
  export interface RequestConfig extends AxiosRequestConfig {
    fapiao_apply_id: string
    params: {
      sub_mchid?: string
      fapiao_id: string
    }
  }
  export interface WellformedResponse {
    total_count: number
    fapiao_information: {
      fapiao_id: string
      status: string
      blue_fapiao: {
        fapiao_code: string
        fapiao_number: string
        check_code: string
        password: string
        fapiao_time: string
      }
      red_fapiao: {
        fapiao_code: string
        fapiao_number: string
        check_code: string
        password: string
        fapiao_time: string
      }
      card_information: {
        card_appid: string
        card_openid: string
        card_id: string
        card_code: string
        card_status: string
      }
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
}
namespace WeChatPay.OpenAPI.V3.NewTaxControlFapiao.FapiaoApplications {
  export interface _fapiao_apply_id_ {
    /**
     * 查询电子发票
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/Offline/apis/chapter4_8_9.shtml
     */
    get(config: _fapiao_apply_id_.GetHttpMethod.RequestConfig): AxiosPromise<_fapiao_apply_id_.GetHttpMethod.WellformedResponse>
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
wxpay.v3.newTaxControlFapiao.fapiaoApplications._fapiao_apply_id_.get({
//                                                                ^^^
  fapiao_apply_id,
  params,
})
.then(
  ({ // [!code hl:9]
    data: {
      total_count,
      fapiao_information,
    },
  }) => ({
    total_count,
    fapiao_information,
  })
)
```
