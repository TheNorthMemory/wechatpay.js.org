---
title: 创建电子发票卡券模板
description: 为商户创建电子发票的卡券模板，该卡券模板在开具的电子发票插入微信用户卡包时使用。调用该接口将覆盖商户之前配置的电子发票卡券模板。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/docs/merchant/apis/fapiao/fapiao-card-template/create-fapiao-card-template.html) [官方文档](https://pay.weixin.qq.com/docs/partner/apis/fapiao/fapiao-card-template/create-fapiao-card-template.html)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.NewTaxControlFapiao.CardTemplate.PostHttpMethod {
  export interface JsonDataRequest {
    sub_mchid?: string
    card_appid: string
    card_template_information: {
      payee_name: string
      logo_url: string
      custom_cell: {
        words: string
        description: string
        jump_url: string
        miniprogram_user_name: string
        miniprogram_path: string
      }
    }
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
  }
  export interface WellformedResponse {
    card_appid: string
    card_id: string
  }
}
namespace WeChatPay.OpenAPI.V3.NewTaxControlFapiao {
  export interface CardTemplate {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/new-tax-control-fapiao/chapter3_4.shtml
     */
    (data: CardTemplate.PostHttpMethod.JsonDataRequest, config?: CardTemplate.PostHttpMethod.RequestConfig): AxiosPromise<CardTemplate.PostHttpMethod.WellformedResponse>
    /**
     * 创建电子发票卡券模板
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/new-tax-control-fapiao/chapter3_4.shtml
     */
    post(data: CardTemplate.PostHttpMethod.JsonDataRequest, config?: CardTemplate.PostHttpMethod.RequestConfig): AxiosPromise<CardTemplate.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface NewTaxControlFapiao {
    cardTemplate: NewTaxControlFapiao.CardTemplate
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
wxpay.v3.newTaxControlFapiao.cardTemplate.post({
//                                        ^^^^
  sub_mchid,
  card_appid,
  card_template_information,
})
.then(
  ({ // [!code hl:9]
    data: {
      card_appid,
      card_id,
    },
  }) => ({
    card_appid,
    card_id,
  })
)
```
