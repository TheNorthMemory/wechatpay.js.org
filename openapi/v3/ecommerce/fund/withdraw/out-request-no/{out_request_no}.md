---
title: 商户提现单号查询提现结果(平台收付通)
description: 电商平台通过查询提现状态API查询二级商户提现单的提现结果。
---

# {{ $frontmatter.title }}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3_partner/Offline/apis/chapter4_1_23.shtml) [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/ecommerce/fund/chapter3_3.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Ecommerce.Fund.Withdraw.OutRequestNo._out_request_no_.GetHttpMethod {
  export interface RequestConfig extends AxiosRequestConfig {
    out_request_no: string
    params: {
      sub_mchid: string
    }
  }
  export interface WellformedResponse {
    sub_mchid: string
    sp_mchid: string
    status: string
    withdraw_id: string
    out_request_no: string
    amount: number
    create_time: string
    update_time: string
    reason: string
    remark: string
    bank_memo: string
    account_type: string
    account_number: string
    account_bank: string
    bank_name: string
  }
}
namespace WeChatPay.OpenAPI.V3.Ecommerce.Fund.Withdraw.OutRequestNo {
  export interface _out_request_no_ {
    /**
     * 商户提现单号查询
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/ecommerce/fund/chapter3_3.shtml
     */
    get(config: _out_request_no_.GetHttpMethod.RequestConfig): AxiosPromise<_out_request_no_.GetHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Ecommerce.Fund.Withdraw {
  export interface OutRequestNo {
    _out_request_no_: OutRequestNo._out_request_no_
  }
}
namespace WeChatPay.OpenAPI.V3.Ecommerce.Fund {
  export interface Withdraw {
    outRequestNo: Withdraw.OutRequestNo
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
wxpay.v3.ecommerce.fund.withdraw.outRequestNo._out_request_no_.get({
//                                                             ^^^
  out_request_no,
  params,
})
.then(
  ({ // [!code hl:35]
    data: {
      sub_mchid,
      sp_mchid,
      status,
      withdraw_id,
      out_request_no,
      amount,
      create_time,
      update_time,
      reason,
      remark,
      bank_memo,
      account_type,
      account_number,
      account_bank,
      bank_name,
    },
  }) => ({
    sub_mchid,
    sp_mchid,
    status,
    withdraw_id,
    out_request_no,
    amount,
    create_time,
    update_time,
    reason,
    remark,
    bank_memo,
    account_type,
    account_number,
    account_bank,
    bank_name,
  })
)
```