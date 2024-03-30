---
title: 获取对私银行卡号开户银行
description: 查询对私银行卡号对应的开户银行信息（仅支持部分银行的对私银行卡）
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3_partner/Offline/apis/chapter11_2_1.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Capital.Capitallhh.Banks.SearchBanksByBankAccount.GetHttpMethod {
  export interface RequestConfig extends AxiosRequestConfig {
    params: {
      account_number: string
    }
    headers: {
      'Wechatpay-Serial': string
    }
  }
  export interface WellformedResponse {
    total_count: number
    data: {
      bank_alias: string
      bank_alias_code: string
      account_bank: string
      account_bank_code: number
      need_bank_branch: boolean
    }[]
  }
}
namespace WeChatPay.OpenAPI.V3.Capital.Capitallhh.Banks {
  export interface SearchBanksByBankAccount {
    /**
     * 获取对私银行卡号开户银行API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3_partner/Offline/apis/chapter11_2_1.shtml
     */
    get(config: SearchBanksByBankAccount.GetHttpMethod.RequestConfig): AxiosPromise<SearchBanksByBankAccount.GetHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Capital.Capitallhh {
  export interface Banks {
    searchBanksByBankAccount: Banks.SearchBanksByBankAccount
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
wxpay.v3.capital.capitallhh.banks.searchBanksByBankAccount.get({
//                                                         ^^^
  params,
  headers,
})
.then(
  ({ // [!code hl:9]
    data: {
      total_count,
      data,
    },
  }) => ({
    total_count,
    data,
  })
)
```
