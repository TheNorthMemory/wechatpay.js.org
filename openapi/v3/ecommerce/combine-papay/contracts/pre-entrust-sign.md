---
title: APP方式预签约(平台收付通)
description: 电商服务商从外部App拉起微信客户端发起签约前，需先后台调用预签约接口完成预签约，获取pre_entrustweb_id，再拉起微信客户端；用户完成签约授权后，再返回App。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Ecommerce.CombinePapay.Contracts.PreEntrustSign.PostHttpMethod {
  export interface JsonDataRequest {
    appid: string
    plan_id: number
    out_contract_code: string
    contract_display_account: string
    notify_url: string
    return_app: boolean
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
  }
  export interface WellformedResponse {
    pre_entrustweb_id: string
    mchid: string
    plan_id: number
    out_contract_code: string
  }
}
namespace WeChatPay.OpenAPI.V3.Ecommerce.CombinePapay.Contracts {
  export interface PreEntrustSign {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3_partner/Offline/apis/chapter5_5_1.shtml
     */
    (data: PreEntrustSign.PostHttpMethod.JsonDataRequest, config?: PreEntrustSign.PostHttpMethod.RequestConfig): AxiosPromise<PreEntrustSign.PostHttpMethod.WellformedResponse>
    /**
     * APP方式预签约API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3_partner/Offline/apis/chapter5_5_1.shtml
     */
    post(data: PreEntrustSign.PostHttpMethod.JsonDataRequest, config?: PreEntrustSign.PostHttpMethod.RequestConfig): AxiosPromise<PreEntrustSign.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Ecommerce.CombinePapay {
  export interface Contracts {
    preEntrustSign: Contracts.PreEntrustSign
  }
}
namespace WeChatPay.OpenAPI.V3.Ecommerce {
  export interface CombinePapay {
    contracts: CombinePapay.Contracts
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface Ecommerce {
    combinePapay: Ecommerce.CombinePapay
  }
}
namespace WeChatPay.OpenAPI {
  export interface V3 {
    ecommerce: V3.Ecommerce
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
wxpay.v3.ecommerce.combinePapay.contracts.preEntrustSign.post({
//                                                       ^^^^
  appid,
  plan_id,
  out_contract_code,
  contract_display_account,
  notify_url,
  return_app,
})
.then(
  ({ // [!code hl:13]
    data: {
      pre_entrustweb_id,
      mchid,
      plan_id,
      out_contract_code,
    },
  }) => ({
    pre_entrustweb_id,
    mchid,
    plan_id,
    out_contract_code,
  })
)
```

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012881608)
