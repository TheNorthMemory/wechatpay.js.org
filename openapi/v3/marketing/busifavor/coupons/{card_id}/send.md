---
title: 发放消费卡
description: 商户通过调用本接口向用户发放消费卡，用户领到卡的同时会领取到一批代金券，消费卡会自动放入卡包中。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/marketing/coupons/chapter3_1.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Marketing.Busifavor.Coupons._card_id_.Send.PostHttpMethod {
  export interface JsonDataRequest {
    appid: string
    openid: string
    out_request_no: string
    send_time: string | Date
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
    card_id: string
  }
  export interface WellformedResponse {
    card_code: string
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing.Busifavor.Coupons._card_id_ {
  export interface Send {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/marketing/coupons/chapter3_1.shtml
     */
    (data: Send.PostHttpMethod.JsonDataRequest, config: Send.PostHttpMethod.RequestConfig): AxiosPromise<Send.PostHttpMethod.WellformedResponse>
    /**
     * 发放消费卡API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/marketing/coupons/chapter3_1.shtml
     */
    post(data: Send.PostHttpMethod.JsonDataRequest, config: Send.PostHttpMethod.RequestConfig): AxiosPromise<Send.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing.Busifavor.Coupons {
  export interface _card_id_ {
    send: _card_id_.Send
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing.Busifavor {
  export interface Coupons {
    _card_id_: Coupons._card_id_
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing {
  export interface Busifavor {
    coupons: Busifavor.Coupons
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface Marketing {
    busifavor: Marketing.Busifavor
  }
}
namespace WeChatPay.OpenAPI {
  export interface V3 {
    marketing: V3.Marketing
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
wxpay.v3.marketing.busifavor.coupons._card_id_.send.post({
//                                                  ^^^^
  appid,
  openid,
  out_request_no,
  send_time,
}, { card_id })
.then(
  ({ // [!code hl:7]
    data: {
      card_code,
    },
  }) => ({
    card_code,
  })
)
```
