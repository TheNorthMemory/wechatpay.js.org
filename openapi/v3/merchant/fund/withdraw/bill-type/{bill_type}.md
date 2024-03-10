---
title: 按日下载提现异常文件
description: 电商服务商按日查询并下载提现状态为异常的提现单，提现异常包括提现失败和银行退票。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3_partner/Offline/apis/chapter4_1_24.shtml) [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/ecommerce/fund/chapter3_4.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Merchant.Fund.Withdraw.BillType._bill_type_.GetHttpMethod {
  export interface RequestConfig extends AxiosRequestConfig {
    bill_type: 'NO_SUCC'
    params: {
      bill_date: string
      tar_type: string
    }
  }
  export interface WellformedResponse {
    hash_type: string
    hash_value: string
    download_url: string
  }
}
namespace WeChatPay.OpenAPI.V3.Merchant.Fund.Withdraw.BillType {
  export interface _bill_type_ {
    /**
     * 按日下载提现异常文件API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/ecommerce/fund/chapter3_4.shtml
     */
    get(config: _bill_type_.GetHttpMethod.RequestConfig): AxiosPromise<_bill_type_.GetHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Merchant.Fund.Withdraw {
  export interface BillType {
    _bill_type_: BillType._bill_type_
  }
}
namespace WeChatPay.OpenAPI.V3.Merchant.Fund {
  export interface Withdraw {
    billType: Withdraw.BillType
  }
}
namespace WeChatPay.OpenAPI.V3.Merchant {
  export interface Fund {
    withdraw: Fund.Withdraw
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface Merchant {
    fund: Merchant.Fund
  }
}
namespace WeChatPay.OpenAPI {
  export interface V3 {
    merchant: V3.Merchant
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
wxpay.v3.merchant.fund.withdraw.billType._bill_type_.get({
//                                                   ^^^
  bill_type,
  params,
})
.then(
  ({ // [!code hl:11]
    data: {
      hash_type,
      hash_value,
      download_url,
    },
  }) => ({
    hash_type,
    hash_value,
    download_url,
  })
)
```
