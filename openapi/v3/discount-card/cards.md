---
title: 预受理领卡请求
description: 商户在引导用户跳转先享卡领卡前，需要请求先享卡预受理领卡请求接口，再根据返回数据引导用户跳转领卡。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/discount-card/chapter3_1.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.DiscountCard.Cards.PostHttpMethod {
  export interface JsonDataRequest {
    out_card_code: string
    card_template_id: string
    appid: string
    notify_url: string
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
  }
  export interface WellformedResponse {
    prepare_card_token: string
  }
}
namespace WeChatPay.OpenAPI.V3.DiscountCard {
  export interface Cards {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/discount-card/chapter3_1.shtml
     */
    (data: Cards.PostHttpMethod.JsonDataRequest, config?: Cards.PostHttpMethod.RequestConfig): AxiosPromise<Cards.PostHttpMethod.WellformedResponse>
    /**
     * 预受理领卡请求API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/discount-card/chapter3_1.shtml
     */
    post(data: Cards.PostHttpMethod.JsonDataRequest, config?: Cards.PostHttpMethod.RequestConfig): AxiosPromise<Cards.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface DiscountCard {
    cards: DiscountCard.Cards
  }
}
namespace WeChatPay.OpenAPI {
  export interface V3 {
    discountCard: V3.DiscountCard
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
wxpay.v3.discountCard.cards.post({
//                          ^^^^
  out_card_code,
  card_template_id,
  appid,
  notify_url,
})
.then(
  ({ // [!code hl:7]
    data: {
      prepare_card_token,
    },
  }) => ({
    prepare_card_token,
  })
)
```
