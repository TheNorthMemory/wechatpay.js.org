---
title: 查询支持个人业务的银行列表
description: 通过本接口可以查询支持个人业务的银行列表
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3_partner/Offline/apis/chapter11_2_2.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Capital.Capitallhh.Banks.PersonalBanking.GetHttpMethod {
  export interface RequestConfig extends AxiosRequestConfig {
    params: {
      offset: number
      limit: number
    }
  }
  export interface WellformedResponse {
    total_count: number
    count: number
    data: {
      bank_alias: string
      bank_alias_code: string
      account_bank: string
      account_bank_code: number
      need_bank_branch: boolean
    }[]
    offset: number
    links: {
      next: string
      prev: string
      self: string
    }
  }
}
namespace WeChatPay.OpenAPI.V3.Capital.Capitallhh.Banks {
  export interface PersonalBanking {
    /**
     * 查询支持个人业务的银行列表API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3_partner/Offline/apis/chapter11_2_2.shtml
     */
    get(config: PersonalBanking.GetHttpMethod.RequestConfig): AxiosPromise<PersonalBanking.GetHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Capital.Capitallhh {
  export interface Banks {
    personalBanking: Banks.PersonalBanking
  }
}
namespace WeChatPay.OpenAPI.V3.Capital {
  export interface Capitallhh {
    banks: Capitallhh.Banks
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface Capital {
    capitallhh: Capital.Capitallhh
  }
}
namespace WeChatPay.OpenAPI {
  export interface V3 {
    capital: V3.Capital
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
wxpay.v3.capital.capitallhh.banks.personalBanking.get({
//                                                ^^^
  params,
})
.then(
  ({ // [!code hl:15]
    data: {
      total_count,
      count,
      data,
      offset,
      links,
    },
  }) => ({
    total_count,
    count,
    data,
    offset,
    links,
  })
)
```
