---
title: 预签约
description: 商户通过调用该接口可获取预签约号（“presign_token”），预签约号对应用户一次的签约信息，之后用户可以从商户小程序跳转到微信签约小程序时使用该预签约号进行签约
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/docs/merchant/apis/education-fee-payment/contracts/pre-sign.html) [官方文档](https://pay.weixin.qq.com/docs/partner/apis/education-fee-payment/contracts/pre-sign.html)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.EduPapay.Contracts.Presign.PostHttpMethod {
  export interface JsonDataRequest {
    appid: string
    sub_mchid: string
    sub_appid: string
    openid: string
    sub_openid: string
    plan_id: string
    user_id: string
    period_start_date: string
    trade_scene: string
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
  }
  export interface WellformedResponse {
    presign_token: string
  }
}
namespace WeChatPay.OpenAPI.V3.EduPapay.Contracts {
  export interface Presign {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/Offline/apis/chapter5_2_1.shtml
     */
    (data: Presign.PostHttpMethod.JsonDataRequest, config?: Presign.PostHttpMethod.RequestConfig): AxiosPromise<Presign.PostHttpMethod.WellformedResponse>
    /**
     * 预签约API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/Offline/apis/chapter5_2_1.shtml
     */
    post(data: Presign.PostHttpMethod.JsonDataRequest, config?: Presign.PostHttpMethod.RequestConfig): AxiosPromise<Presign.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.EduPapay {
  export interface Contracts {
    presign: Contracts.Presign
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface EduPapay {
    contracts: EduPapay.Contracts
  }
}
namespace WeChatPay.OpenAPI {
  export interface V3 {
    eduPapay: V3.EduPapay
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
wxpay.v3.eduPapay.contracts.presign.post({
//                                  ^^^^
  appid,
  sub_mchid,
  sub_appid,
  openid,
  sub_openid,
  plan_id,
  user_id,
  period_start_date,
  trade_scene,
})
.then(
  ({ // [!code hl:7]
    data: {
      presign_token,
    },
  }) => ({
    presign_token,
  })
)
```
