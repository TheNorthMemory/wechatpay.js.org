---
title: 服务商模式支付后场景预签约
description: 服务商下单成功并获取`prepay_id`后，需先调用该预签约接口完成预签约。预签约成功后，若用户支付成功、且操作未超时（预签约会话在2小时的有效期内）、且无其他特殊原因，将提示用户可以开通免密支付签约；预签约失败时，将不会提示用户开通免密支付。 注意 用户在微信的页面中完成免密支付签约后，微信会同时将签约信息通过异步通知的方式通知给商户后台。 如果用户放弃签约或签约失败则不通知。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/docs/partner/apis/partner-password-free-contract/sign/sp-pay-redirect-sign-pre-entrust-sign.html)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.PasswordExemptContract.Contracts.ServiceProvider.PreEntrustSign.PayRedirectSign.PostHttpMethod {
  export interface JsonDataRequest {
    sp_appid: string
    sp_openid: string
    sub_mchid: string
    sub_appid: string
    sub_openid: string
    service_id: number
    out_contract_code: string
    notify_url: string
    contract_display_account: string
    prepay_id: string
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
  }
  export interface WellformedResponse {
    mchid: string
    sub_mchid: string
    service_id: number
    out_contract_code: string
  }
}
namespace WeChatPay.OpenAPI.V3.PasswordExemptContract.Contracts.ServiceProvider.PreEntrustSign {
  export interface PayRedirectSign {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/docs/partner/apis/partner-password-free-contract/sign/sp-pay-redirect-sign-pre-entrust-sign.html
     */
    (data: PayRedirectSign.PostHttpMethod.JsonDataRequest, config?: PayRedirectSign.PostHttpMethod.RequestConfig): AxiosPromise<PayRedirectSign.PostHttpMethod.WellformedResponse>
    /**
     * 服务商模式支付后场景预签约API
     * @link https://pay.weixin.qq.com/docs/partner/apis/partner-password-free-contract/sign/sp-pay-redirect-sign-pre-entrust-sign.html
     */
    post(data: PayRedirectSign.PostHttpMethod.JsonDataRequest, config?: PayRedirectSign.PostHttpMethod.RequestConfig): AxiosPromise<PayRedirectSign.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.PasswordExemptContract.Contracts.ServiceProvider {
  export interface PreEntrustSign {
    payRedirectSign: PreEntrustSign.PayRedirectSign
  }
}
namespace WeChatPay.OpenAPI.V3.PasswordExemptContract.Contracts {
  export interface ServiceProvider {
    preEntrustSign: ServiceProvider.PreEntrustSign
  }
}
namespace WeChatPay.OpenAPI.V3.PasswordExemptContract {
  export interface Contracts {
    serviceProvider: Contracts.ServiceProvider
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
wxpay.v3.passwordExemptContract.contracts.serviceProvider.preEntrustSign.payRedirectSign.post({
//                                                                                       ^^^^
  sp_appid,
  sp_openid,
  sub_mchid,
  sub_appid,
  sub_openid,
  service_id,
  out_contract_code,
  notify_url,
  contract_display_account,
  prepay_id,
})
.then(
  ({ // [!code hl:13]
    data: {
      mchid,
      sub_mchid,
      service_id,
      out_contract_code,
    },
  }) => ({
    mchid,
    sub_mchid,
    service_id,
    out_contract_code,
  })
)
```
