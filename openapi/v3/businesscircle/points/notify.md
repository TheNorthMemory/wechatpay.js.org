---
title: 商圈会员积分同步
description: 通过积分通知回调API，商圈商户/服务商可针对微信支付前序推送给商圈系统的顾客商圈内交易通知，告知微信支付系统该笔交易的积分情况
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/docs/merchant/apis/smart-business-circle/points/notify-points.html) [官方文档](https://pay.weixin.qq.com/docs/partner/apis/smart-business-circle/points/notify-points.html)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Businesscircle.Points.Notify.PostHttpMethod {
  export interface JsonDataRequest {
    sub_mchid?: string
    transaction_id: string
    appid: string
    openid: string
    earn_points: boolean
    increased_points: number
    points_update_time: string | Date
    no_points_remarks: string
    total_points: number
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
  }
  export interface WellformedResponse {
  }
}
namespace WeChatPay.OpenAPI.V3.Businesscircle.Points {
  export interface Notify {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/docs/partner/apis/smart-business-circle/points/notify-points.html
     */
    (data: Notify.PostHttpMethod.JsonDataRequest, config?: Notify.PostHttpMethod.RequestConfig): AxiosPromise<Notify.PostHttpMethod.WellformedResponse>
    /**
     * 商圈会员积分同步
     * @link https://pay.weixin.qq.com/docs/partner/apis/smart-business-circle/points/notify-points.html
     */
    post(data: Notify.PostHttpMethod.JsonDataRequest, config?: Notify.PostHttpMethod.RequestConfig): AxiosPromise<Notify.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Businesscircle {
  export interface Points {
    notify: Points.Notify
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface Businesscircle {
    points: Businesscircle.Points
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
wxpay.v3.businesscircle.points.notify.post({
//                                    ^^^^
  sub_mchid,
  transaction_id,
  appid,
  openid,
  earn_points,
  increased_points,
  points_update_time,
  no_points_remarks,
  total_points,
})
.then(({ status, }) => status === 204) // [!code hl]
```
