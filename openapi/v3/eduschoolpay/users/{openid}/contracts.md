---
title: 查询用户签约列表
description: 商户使用本接口来查询用户签约信息，返回用户在该签约模板下的合约列表（包括处于「已解约」状态下的合约）；被用户主动删除的合约无法被查询到。结果中「已签约」合约排列于「已解约」合约之前。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/edu/eduschoolpay/chapter3_4.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Eduschoolpay.Users._openid_.Contracts.GetHttpMethod {
  export interface RequestConfig extends AxiosRequestConfig {
    openid: string
    params: {
      plan_id: string
      contract_status: string
      offset: number
      limit: number
    }
  }
  export interface WellformedResponse {
    data: {
      contract_id: string
      mchid: string
      appid: string
      openid: string
      plan_id: string
      contract_status: string
      create_time: string
      out_contract_code: string
    }[]
    offset: number
    limit: number
    total_count: number
    links: {
      next: string
      prev: string
      self: string
    }
  }
}
namespace WeChatPay.OpenAPI.V3.Eduschoolpay.Users._openid_ {
  export interface Contracts {
    /**
     * 查询用户签约列表API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/edu/eduschoolpay/chapter3_4.shtml
     */
    get(config: Contracts.GetHttpMethod.RequestConfig): AxiosPromise<Contracts.GetHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Eduschoolpay.Users {
  export interface _openid_ {
    contracts: _openid_.Contracts
  }
}
namespace WeChatPay.OpenAPI.V3.Eduschoolpay {
  export interface Users {
    _openid_: Users._openid_
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface Eduschoolpay {
    users: Eduschoolpay.Users
  }
}
namespace WeChatPay.OpenAPI {
  export interface V3 {
    eduschoolpay: V3.Eduschoolpay
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
wxpay.v3.eduschoolpay.users._openid_.contracts.get({
//                                             ^^^
  openid,
  params,
})
.then(
  ({ // [!code hl:15]
    data: {
      data,
      offset,
      limit,
      total_count,
      links,
    },
  }) => ({
    data,
    offset,
    limit,
    total_count,
    links,
  })
)
```
