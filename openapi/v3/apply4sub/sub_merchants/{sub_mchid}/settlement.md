---
title: 查询结算账户
description: 普通服务商（支付机构、银行不可用），可使用本接口查询其进件、已签约的特约商户-结算账户信息（敏感信息掩码）。 该接口可用于核实是否成功修改结算账户信息、及查询系统汇款验证结果。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Apply4sub.Sub_merchants._sub_mchid_.Settlement.GetHttpMethod {
  export interface RequestConfig extends AxiosRequestConfig {
    sub_mchid: string
  }
  export interface WellformedResponse {
    account_type: string
    account_name: string
    account_bank: string
    bank_address_code: string
    bank_name: string
    bank_branch_id: string
    account_number: string
    verify_result: string
  }
}
namespace WeChatPay.OpenAPI.V3.Apply4sub.Sub_merchants._sub_mchid_ {
  export interface Settlement {
    /**
     * 查询结算账户API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/tool/applyment4sub/chapter3_4.shtml
     */
    get(config: Settlement.GetHttpMethod.RequestConfig): AxiosPromise<Settlement.GetHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Apply4sub.Sub_merchants {
  export interface _sub_mchid_ {
    settlement: _sub_mchid_.Settlement
  }
}
namespace WeChatPay.OpenAPI.V3.Apply4sub {
  export interface Sub_merchants {
    _sub_mchid_: Sub_merchants._sub_mchid_
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface Apply4sub {
    sub_merchants: Apply4sub.Sub_merchants
  }
}
namespace WeChatPay.OpenAPI {
  export interface V3 {
    apply4sub: V3.Apply4sub
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
wxpay.v3.apply4sub.sub_merchants._sub_mchid_.settlement.get({
//                                                      ^^^
  sub_mchid,
})
.then(
  ({ // [!code hl:21]
    data: {
      account_type,
      account_name,
      account_bank,
      bank_address_code,
      bank_name,
      bank_branch_id,
      account_number,
      verify_result,
    },
  }) => ({
    account_type,
    account_name,
    account_bank,
    bank_address_code,
    bank_name,
    bank_branch_id,
    account_number,
    verify_result,
  })
)
```

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012761142) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012761113) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012721295) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012760642)
