---
title: 商圈会员停车状态同步
description: 通过此API，商圈商户/服务商可将会员的停车状态同步给微信支付，以辅助判断用户到场，用户在商圈内门店消费可自动积商圈会员积分。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/docs/merchant/apis/smart-business-circle/parkings/update-parkings.html) [官方文档](https://pay.weixin.qq.com/docs/partner/apis/smart-business-circle/parkings/update-parkings.html)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Businesscircle.Parkings.PostHttpMethod {
  export interface JsonDataRequest {
    sub_mchid?: string
    brandid: number
    appid: string
    openid: string
    plate_number: string
    state: 'IN' | 'OUT'
    time: string
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
  }
  export interface WellformedResponse {
  }
}
namespace WeChatPay.OpenAPI.V3.Businesscircle {
  export interface Parkings {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/docs/partner/apis/smart-business-circle/parkings/update-parkings.html
     */
    (data: Parkings.PostHttpMethod.JsonDataRequest, config?: Parkings.PostHttpMethod.RequestConfig): AxiosPromise<Parkings.PostHttpMethod.WellformedResponse>
    /**
     * 商圈会员停车状态同步
     * @link https://pay.weixin.qq.com/docs/partner/apis/smart-business-circle/parkings/update-parkings.html
     */
    post(data: Parkings.PostHttpMethod.JsonDataRequest, config?: Parkings.PostHttpMethod.RequestConfig): AxiosPromise<Parkings.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface Businesscircle {
    parkings: Businesscircle.Parkings
  }
}
namespace WeChatPay.OpenAPI {
  export interface V3 {
    businesscircle: V3.Businesscircle
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
wxpay.v3.businesscircle.parkings.post({
//                               ^^^^
  sub_mchid,
  brandid,
  appid,
  openid,
  plate_number,
  state,
  time,
})
.then(({ status, }) => status === 204) // [!code hl]
```
