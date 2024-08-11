---
title: 发放指定批次的消费金
description: 商户平台/API完成制券/消费金后，可使用发放代金券接口发券/消费金。通过调用此接口可发放指定批次给指定用户。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/docs/merchant/apis/multiuse-coupon/multiuse-coupon/send-multiuse-coupon.html)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Multiuse.Users._openid_.Coupons.PostHttpMethod {
  export interface JsonDataRequest {
    stock_id: string
    out_request_no: string
    user_name: string
    id_card_number: string
    amount: number
    appid: string
    card_type: string
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
    openid: string
    headers: {
      'Wechatpay-Serial': string
    }
  }
  export interface WellformedResponse {
    coupon_id: string
  }
}
namespace WeChatPay.OpenAPI.V3.Multiuse.Users._openid_ {
  export interface Coupons {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/docs/merchant/apis/multiuse-coupon/multiuse-coupon/send-multiuse-coupon.html
     */
    (data: Coupons.PostHttpMethod.JsonDataRequest, config: Coupons.PostHttpMethod.RequestConfig): AxiosPromise<Coupons.PostHttpMethod.WellformedResponse>
    /**
     * 发放指定批次的消费金
     * @link https://pay.weixin.qq.com/docs/merchant/apis/multiuse-coupon/multiuse-coupon/send-multiuse-coupon.html
     */
    post(data: Coupons.PostHttpMethod.JsonDataRequest, config: Coupons.PostHttpMethod.RequestConfig): AxiosPromise<Coupons.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Multiuse.Users {
  export interface _openid_ {
    coupons: _openid_.Coupons
  }
}
namespace WeChatPay.OpenAPI.V3.Multiuse {
  export interface Users {
    _openid_: Users._openid_
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface Multiuse {
    users: Multiuse.Users
  }
}
namespace WeChatPay.OpenAPI {
  export interface V3 {
    multiuse: V3.Multiuse
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
wxpay.v3.multiuse.users._openid_.coupons.post({
//                                       ^^^^
  stock_id,
  out_request_no,
  user_name,
  id_card_number,
  amount,
  appid,
  card_type,
}, { openid, headers, })
.then(
  ({ // [!code hl:7]
    data: {
      coupon_id,
    },
  }) => ({
    coupon_id,
  })
)
```
