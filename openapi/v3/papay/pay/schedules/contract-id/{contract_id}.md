---
title: 查询扣费预约
description: 商户调用「预约扣费」接口，因系统原因未能明确预约结果时，可使用本接口查询预结果。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/docs/merchant/apis/entrusted-payment/normal/normal-query-deduct-schedule.html)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Papay.Pay.Schedules.ContractId._contract_id_.GetHttpMethod {
  export interface RequestConfig extends AxiosRequestConfig {
    contract_id: string
  }
  export interface WellformedResponse {
    schedule_state: string
    deduct_start_date: string
    deduct_end_date: string
    scheduled_amount: {
      total: number
      currency: string
    }
    deduct_amount: {
      total: number
      currency: string
    }
    deduct_date: string
  }
}
namespace WeChatPay.OpenAPI.V3.Papay.Pay.Schedules.ContractId {
  export interface _contract_id_ {
    /**
     * 查询扣费预约API
     * @link https://pay.weixin.qq.com/docs/merchant/apis/entrusted-payment/normal/normal-query-deduct-schedule.html
     */
    get(config: _contract_id_.GetHttpMethod.RequestConfig): AxiosPromise<_contract_id_.GetHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Papay.Pay.Schedules {
  export interface ContractId {
    _contract_id_: ContractId._contract_id_
  }
}
namespace WeChatPay.OpenAPI.V3.Papay.Pay {
  export interface Schedules {
    contractId: Schedules.ContractId
  }
}
namespace WeChatPay.OpenAPI.V3.Papay {
  export interface Pay {
    schedules: Pay.Schedules
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface Papay {
    pay: Papay.Pay
  }
}
namespace WeChatPay.OpenAPI {
  export interface V3 {
    papay: V3.Papay
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
wxpay.v3.papay.pay.schedules.contractId._contract_id_.get({
//                                                    ^^^
  contract_id,
})
.then(
  ({ // [!code hl:17]
    data: {
      schedule_state,
      deduct_start_date,
      deduct_end_date,
      scheduled_amount,
      deduct_amount,
      deduct_date,
    },
  }) => ({
    schedule_state,
    deduct_start_date,
    deduct_end_date,
    scheduled_amount,
    deduct_amount,
    deduct_date,
  })
)
```
