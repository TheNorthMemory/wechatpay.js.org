---
title: 服务商模式小程序场景预签约
description: 服务商从商户小程序拉起微信签约小程序发起签约前，需先后台调用预签约接口完成预签约，获取预签约ID，再拉起微信签约小程序；用户完成签约授权后，再返回商户小程序。 注意 用户在微信的页面中完成免密支付签约后，微信会同时将签约信息通过异步通知的方式通知给商户后台。 如果用户放弃签约或签约失败则不通知; 商户获取的签约会话有效期为2小时。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/docs/partner/apis/partner-password-free-contract/sign/sp-mini-program-pre-entrust-sign.html)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.PasswordExemptContract.Contracts.ServiceProvider.PreEntrustSign.MiniProgram.PostHttpMethod {
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
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
  }
  export interface WellformedResponse {
    pre_entrustweb_id: string
    mchid: string
    sub_mchid: string
    service_id: number
    out_contract_code: string
    sign_mp_appid: string
    sign_mp_path: string
  }
}
namespace WeChatPay.OpenAPI.V3.PasswordExemptContract.Contracts.ServiceProvider.PreEntrustSign {
  export interface MiniProgram {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/docs/partner/apis/partner-password-free-contract/sign/sp-mini-program-pre-entrust-sign.html
     */
    (data: MiniProgram.PostHttpMethod.JsonDataRequest, config?: MiniProgram.PostHttpMethod.RequestConfig): AxiosPromise<MiniProgram.PostHttpMethod.WellformedResponse>
    /**
     * 服务商模式小程序场景预签约API
     * @link https://pay.weixin.qq.com/docs/partner/apis/partner-password-free-contract/sign/sp-mini-program-pre-entrust-sign.html
     */
    post(data: MiniProgram.PostHttpMethod.JsonDataRequest, config?: MiniProgram.PostHttpMethod.RequestConfig): AxiosPromise<MiniProgram.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.PasswordExemptContract.Contracts.ServiceProvider {
  export interface PreEntrustSign {
    miniProgram: PreEntrustSign.MiniProgram
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
wxpay.v3.passwordExemptContract.contracts.serviceProvider.preEntrustSign.miniProgram.post({
//                                                                                   ^^^^
  sp_appid,
  sp_openid,
  sub_mchid,
  sub_appid,
  sub_openid,
  service_id,
  out_contract_code,
  notify_url,
  contract_display_account,
})
.then(
  ({ // [!code hl:19]
    data: {
      pre_entrustweb_id,
      mchid,
      sub_mchid,
      service_id,
      out_contract_code,
      sign_mp_appid,
      sign_mp_path,
    },
  }) => ({
    pre_entrustweb_id,
    mchid,
    sub_mchid,
    service_id,
    out_contract_code,
    sign_mp_appid,
    sign_mp_path,
  })
)
```
