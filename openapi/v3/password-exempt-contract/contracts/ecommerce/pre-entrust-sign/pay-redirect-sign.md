---
title: 电商收付通模式支付后场景预签约
description: 电商收付通服务商下单成功并获取`prepay_id`后，需先调用该预签约接口完成预签约。预签约成功后，若用户支付成功、且操作未超时（预签约会话在2小时的有效期内）、且无其他特殊原因，将提示用户可以开通免密支付签约；预签约失败时，将不会提示用户开通免密支付。 注意 用户在微信的页面中完成免密支付签约后，微信会同时将签约信息通过异步通知的方式通知给商户后台。 如果用户放弃签约或签约失败则不通知。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/docs/partner/apis/partner-password-free-contract/sign/ec-pay-redirect-sign-pre-entrust-sign.html)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.PasswordExemptContract.Contracts.Ecommerce.PreEntrustSign.PayRedirectSign.PostHttpMethod {
  export interface JsonDataRequest {
    appid: string
    service_id: number
    out_contract_code: string
    notify_url: string
    contract_display_account: string
    prepay_id: string
    openid: string
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
  }
  export interface WellformedResponse {
    mchid: string
    service_id: number
    out_contract_code: string
  }
}
namespace WeChatPay.OpenAPI.V3.PasswordExemptContract.Contracts.Ecommerce.PreEntrustSign {
  export interface PayRedirectSign {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/docs/partner/apis/partner-password-free-contract/sign/ec-pay-redirect-sign-pre-entrust-sign.html
     */
    (data: PayRedirectSign.PostHttpMethod.JsonDataRequest, config?: PayRedirectSign.PostHttpMethod.RequestConfig): AxiosPromise<PayRedirectSign.PostHttpMethod.WellformedResponse>
    /**
     * 电商收付通模式支付后场景预签约API
     * @link https://pay.weixin.qq.com/docs/partner/apis/partner-password-free-contract/sign/ec-pay-redirect-sign-pre-entrust-sign.html
     */
    post(data: PayRedirectSign.PostHttpMethod.JsonDataRequest, config?: PayRedirectSign.PostHttpMethod.RequestConfig): AxiosPromise<PayRedirectSign.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.PasswordExemptContract.Contracts.Ecommerce {
  export interface PreEntrustSign {
    payRedirectSign: PreEntrustSign.PayRedirectSign
  }
}
namespace WeChatPay.OpenAPI.V3.PasswordExemptContract.Contracts {
  export interface Ecommerce {
    preEntrustSign: Ecommerce.PreEntrustSign
  }
}
namespace WeChatPay.OpenAPI.V3.PasswordExemptContract {
  export interface Contracts {
    ecommerce: Contracts.Ecommerce
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface PasswordExemptContract {
    contracts: PasswordExemptContract.Contracts
  }
}
namespace WeChatPay.OpenAPI {
  export interface V3 {
    passwordExemptContract: V3.PasswordExemptContract
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
wxpay.v3.passwordExemptContract.contracts.ecommerce.preEntrustSign.payRedirectSign.post({
//                                                                                 ^^^^
  appid,
  service_id,
  out_contract_code,
  notify_url,
  contract_display_account,
  prepay_id,
  openid,
})
.then(
  ({ // [!code hl:11]
    data: {
      mchid,
      service_id,
      out_contract_code,
    },
  }) => ({
    mchid,
    service_id,
    out_contract_code,
  })
)
```
