---
title: 查询支行列表
description: 本接口可以用于根据银行别名编码（仅支持需要填写支行的银行别名编码）和城市编码过滤查询支行列表数据
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3_partner/Offline/apis/chapter11_2_6.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Capital.Capitallhh.Banks._bank_alias_code_.Branches.GetHttpMethod {
  export interface RequestConfig extends AxiosRequestConfig {
    bank_alias_code: string
    params: {
      city_code: number
      offset: number
      limit: number
    }
  }
  export interface WellformedResponse {
    total_count: number
    count: number
    data: {
      bank_branch_name: string
      bank_branch_id: string
    }[]
    offset: number
    links: {
      next: string
      prev: string
      self: string
    }
    account_bank: string
    account_bank_code: number
    bank_alias: string
    bank_alias_code: string
  }
}
namespace WeChatPay.OpenAPI.V3.Capital.Capitallhh.Banks._bank_alias_code_ {
  export interface Branches {
    /**
     * 查询支行列表API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3_partner/Offline/apis/chapter11_2_6.shtml
     */
    get(config: Branches.GetHttpMethod.RequestConfig): AxiosPromise<Branches.GetHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Capital.Capitallhh.Banks {
  export interface _bank_alias_code_ {
    branches: _bank_alias_code_.Branches
  }
}
namespace WeChatPay.OpenAPI.V3.Capital.Capitallhh {
  export interface Banks {
    _bank_alias_code_: Banks._bank_alias_code_
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
wxpay.v3.capital.capitallhh.banks._bank_alias_code_.branches.get({
//                                                           ^^^
  bank_alias_code,
  params,
})
.then(
  ({ // [!code hl:23]
    data: {
      total_count,
      count,
      data,
      offset,
      links,
      account_bank,
      account_bank_code,
      bank_alias,
      bank_alias_code,
    },
  }) => ({
    total_count,
    count,
    data,
    offset,
    links,
    account_bank,
    account_bank_code,
    bank_alias,
    bank_alias_code,
  })
)
```
