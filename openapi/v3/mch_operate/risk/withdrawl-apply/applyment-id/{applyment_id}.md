---
title: 微信支付提现申请单号查询提现申请单状态
description: 微信支付提现申请单号查询提现申请单状态,电商平台发起申请后, 电商平台调用此接口查询审批和出款进度
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3_partner/apis/chapter7_8_8.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Mch_operate.Risk.WithdrawlApply.ApplymentId._applyment_id_.GetHttpMethod {
  export interface RequestConfig extends AxiosRequestConfig {
    applyment_id: string
  }
  export interface WellformedResponse {
    withdrawl_apply: {
      applyment_id: string
      out_request_no: string
      state: string
      fail_reason: string
      modify_time: string
    }
  }
}
namespace WeChatPay.OpenAPI.V3.Mch_operate.Risk.WithdrawlApply.ApplymentId {
  export interface _applyment_id_ {
    /**
     * 微信支付提现申请单号查询提现申请单状态API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3_partner/apis/chapter7_8_8.shtml
     */
    get(config: _applyment_id_.GetHttpMethod.RequestConfig): AxiosPromise<_applyment_id_.GetHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Mch_operate.Risk.WithdrawlApply {
  export interface ApplymentId {
    _applyment_id_: ApplymentId._applyment_id_
  }
}
namespace WeChatPay.OpenAPI.V3.Mch_operate.Risk {
  export interface WithdrawlApply {
    applymentId: WithdrawlApply.ApplymentId
  }
}
namespace WeChatPay.OpenAPI.V3.Mch_operate {
  export interface Risk {
    withdrawlApply: Risk.WithdrawlApply
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface Mch_operate {
    risk: Mch_operate.Risk
  }
}
namespace WeChatPay.OpenAPI {
  export interface V3 {
    mch_operate: V3.Mch_operate
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
wxpay.v3.mch_operate.risk.withdrawlApply.applymentId._applyment_id_.get({
//                                                                  ^^^
  applyment_id,
})
.then(
  ({ // [!code hl:7]
    data: {
      withdrawl_apply,
    },
  }) => ({
    withdrawl_apply,
  })
)
```
