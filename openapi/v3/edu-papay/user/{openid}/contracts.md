---
title: 通过用户标识查询签约
description: 商户通过用户标识+签约模板号来查询用户签约信息，只返回用户在该签约模板下的有效签约（一个签约模板仅会存在一个有效签约）；若用户未与该签约模板签约，返回明确错误码
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/docs/merchant/apis/education-fee-payment/contracts/list-user-contracts.html) [官方文档](https://pay.weixin.qq.com/docs/partner/apis/education-fee-payment/contracts/list-user-contracts.html)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.EduPapay.User._openid_.Contracts.GetHttpMethod {
  export interface RequestConfig extends AxiosRequestConfig {
    openid: string
    params: {
      appid: string
      sub_mchid: string
      sub_appid: string
      sub_openid: string
      plan_id: string
      contract_status: string
      offset: number
      limit: number
    }
  }
  export interface WellformedResponse {
    data: {
      sp_mchid: string
      appid: string
      sub_mchid: string
      sub_appid: string
      openid: string
      sub_openid: string
      plan_id: string
      contract_information: {
        contract_id: string
        contract_status: string
        create_time: string
      }
    }[]
    total_count: number
    offset: number
    limit: number
  }
}
namespace WeChatPay.OpenAPI.V3.EduPapay.User._openid_ {
  export interface Contracts {
    /**
     * 通过用户标识查询签约API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/Offline/apis/chapter5_2_3.shtml
     */
    get(config: Contracts.GetHttpMethod.RequestConfig): AxiosPromise<Contracts.GetHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.EduPapay.User {
  export interface _openid_ {
    contracts: _openid_.Contracts
  }
}
namespace WeChatPay.OpenAPI.V3.EduPapay {
  export interface User {
    _openid_: User._openid_
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface EduPapay {
    user: EduPapay.User
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
wxpay.v3.eduPapay.user._openid_.contracts.get({
//                                        ^^^
  openid,
  params,
})
.then(
  ({ // [!code hl:13]
    data: {
      data,
      total_count,
      offset,
      limit,
    },
  }) => ({
    data,
    total_count,
    offset,
    limit,
  })
)
```
