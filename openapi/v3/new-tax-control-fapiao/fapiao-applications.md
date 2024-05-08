---
title: 开具电子发票
description: 商户完成收款后，调用本接口开具电子发票并插入微信用户的卡包。若是非微信支付场景，需要先通过【获取抬头填写链接】接口获取抬头填写链接，并等待用户完成填写才能调用本接口；若是微信支付场景，则无需额外获取抬头填写链接。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/docs/merchant/apis/fapiao/fapiao-applications/issue-fapiao-applications.html) [官方文档](https://pay.weixin.qq.com/docs/partner/apis/fapiao/fapiao-applications/issue-fapiao-applications.html)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.NewTaxControlFapiao.FapiaoApplications.PostHttpMethod {
  export interface JsonDataRequest {
    sub_mchid?: string
    scene: 'WITH_WECHATPAY' | 'WITHOUT_WECHATPAY'
    fapiao_apply_id: string
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
    fapiao_information: {
      fapiao_id: string
      total_amount: number
      need_list: boolean
      remark: string
      items: {
        tax_code: string
        specification: string
        unit: string
        quantity: number
        total_amount: number
        discount: boolean
      }[]
    }[]
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
    headers: {
      'Wechatpay-Serial': string
    }
  }
  export interface WellformedResponse {
  }
}
namespace WeChatPay.OpenAPI.V3.NewTaxControlFapiao {
  export interface FapiaoApplications {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/Offline/apis/chapter4_8_8.shtml
     */
    (data: FapiaoApplications.PostHttpMethod.JsonDataRequest, config: FapiaoApplications.PostHttpMethod.RequestConfig): AxiosPromise<FapiaoApplications.PostHttpMethod.WellformedResponse>
    /**
     * 开具电子发票
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/Offline/apis/chapter4_8_8.shtml
     */
    post(data: FapiaoApplications.PostHttpMethod.JsonDataRequest, config: FapiaoApplications.PostHttpMethod.RequestConfig): AxiosPromise<FapiaoApplications.PostHttpMethod.WellformedResponse>
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
wxpay.v3.newTaxControlFapiao.fapiaoApplications.post({
//                                              ^^^^
  sub_mchid,
  scene,
  fapiao_apply_id,
  buyer_information,
  fapiao_information,
}, { headers, })
.then(({ status }) => status === 202) // [!code hl]
```
