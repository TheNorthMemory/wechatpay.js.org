---
title: 电商收付通模式小程序场景预签约
description: 电商收付通服务商从商户小程序拉起微信签约小程序发起签约前，需先后台调用预签约接口完成预签约，获取预签约ID，再拉起微信签约小程序；用户完成签约授权后，再返回商户小程序。 注意 用户在微信的页面中完成免密支付签约后，微信会同时将签约信息通过异步通知的方式通知给商户后台。 如果用户放弃签约或签约失败则不通知; 商户获取的签约会话有效期为2小时。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/docs/partner/apis/partner-password-free-contract/sign/ec-mini-program-pre-entrust-sign.html)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.PasswordExemptContract.Contracts.Ecommerce.PreEntrustSign.MiniProgram.PostHttpMethod {
  export interface JsonDataRequest {
    appid: string
    service_id: number
    out_contract_code: string
    notify_url: string
    contract_display_account: string
    openid: string
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
  }
  export interface WellformedResponse {
    pre_entrustweb_id: string
    mchid: string
    service_id: number
    out_contract_code: string
    sign_mp_appid: string
    sign_mp_path: string
  }
}
namespace WeChatPay.OpenAPI.V3.PasswordExemptContract.Contracts.Ecommerce.PreEntrustSign {
  export interface MiniProgram {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/docs/partner/apis/partner-password-free-contract/sign/ec-mini-program-pre-entrust-sign.html
     */
    (data: MiniProgram.PostHttpMethod.JsonDataRequest, config?: MiniProgram.PostHttpMethod.RequestConfig): AxiosPromise<MiniProgram.PostHttpMethod.WellformedResponse>
    /**
     * 电商收付通模式小程序场景预签约API
     * @link https://pay.weixin.qq.com/docs/partner/apis/partner-password-free-contract/sign/ec-mini-program-pre-entrust-sign.html
     */
    post(data: MiniProgram.PostHttpMethod.JsonDataRequest, config?: MiniProgram.PostHttpMethod.RequestConfig): AxiosPromise<MiniProgram.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.PasswordExemptContract.Contracts.Ecommerce {
  export interface PreEntrustSign {
    miniProgram: PreEntrustSign.MiniProgram
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
wxpay.v3.passwordExemptContract.contracts.ecommerce.preEntrustSign.miniProgram.post({
//                                                                             ^^^^
  appid,
  service_id,
  out_contract_code,
  notify_url,
  contract_display_account,
  openid,
})
.then(
  ({ // [!code hl:17]
    data: {
      pre_entrustweb_id,
      mchid,
      service_id,
      out_contract_code,
      sign_mp_appid,
      sign_mp_path,
    },
  }) => ({
    pre_entrustweb_id,
    mchid,
    service_id,
    out_contract_code,
    sign_mp_appid,
    sign_mp_path,
  })
)
```
