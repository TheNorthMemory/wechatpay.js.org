---
title: 账户余额提现(平台收付通)
description: 电商平台通过余额提现API帮助二级商户发起账户余额提现申请，完成账户余额提现。
---

# {{ $frontmatter.title }}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3_partner/Offline/apis/chapter4_1_22.shtml) [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/ecommerce/fund/chapter3_2.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Ecommerce.Fund.Withdraw.PostHttpMethod {
  export interface JsonDataRequest {
    sub_mchid: string
    out_request_no: string
    amount: number
    remark: string
    bank_memo: string
    account_type: string
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
  }
  export interface WellformedResponse {
    sub_mchid: string
    withdraw_id: string
    out_request_no: string
    account_type: string
  }
}
namespace WeChatPay.OpenAPI.V3.Ecommerce.Fund {
  export interface Withdraw {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/ecommerce/fund/chapter3_2.shtml
     */
    (data: Withdraw.PostHttpMethod.JsonDataRequest, config?: Withdraw.PostHttpMethod.RequestConfig): AxiosPromise<Withdraw.PostHttpMethod.WellformedResponse>
    /**
     * 账户余额提现API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/ecommerce/fund/chapter3_2.shtml
     */
    post(data: Withdraw.PostHttpMethod.JsonDataRequest, config?: Withdraw.PostHttpMethod.RequestConfig): AxiosPromise<Withdraw.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Ecommerce {
  export interface Fund {
    withdraw: Fund.Withdraw
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface Ecommerce {
    fund: Ecommerce.Fund
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
wxpay.v3.ecommerce.fund.withdraw.post({
//                               ^^^^
  sub_mchid,
  out_request_no,
  amount,
  remark,
  bank_memo,
  account_type,
})
.then(
  ({ // [!code hl:13]
    data: {
      sub_mchid,
      withdraw_id,
      out_request_no,
      account_type,
    },
  }) => ({
    sub_mchid,
    withdraw_id,
    out_request_no,
    account_type,
  })
)
```