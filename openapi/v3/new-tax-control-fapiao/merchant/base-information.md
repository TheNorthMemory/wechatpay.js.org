---
title: 获取商户开票基础信息
description: 查询商户在微信支付商户平台中配置的电子发票开票基础信息。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/new-tax-control-fapiao/chapter3_3.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.NewTaxControlFapiao.Merchant.BaseInformation.GetHttpMethod {
  export interface RequestConfig extends AxiosRequestConfig {
    params: {
      sub_mchid: string
    }
  }
  export interface WellformedResponse {
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
  }
}
namespace WeChatPay.OpenAPI.V3.NewTaxControlFapiao.Merchant {
  export interface BaseInformation {
    /**
     * 获取商户开票基础信息
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/new-tax-control-fapiao/chapter3_3.shtml
     */
    get(config: BaseInformation.GetHttpMethod.RequestConfig): AxiosPromise<BaseInformation.GetHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.NewTaxControlFapiao {
  export interface Merchant {
    baseInformation: Merchant.BaseInformation
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface NewTaxControlFapiao {
    merchant: NewTaxControlFapiao.Merchant
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
wxpay.v3.newTaxControlFapiao.merchant.baseInformation.get({
//                                                    ^^^
  params,
})
.then(
  ({ // [!code hl:9]
    data: {
      seller_information,
      extra_information,
    },
  }) => ({
    seller_information,
    extra_information,
  })
)
```
