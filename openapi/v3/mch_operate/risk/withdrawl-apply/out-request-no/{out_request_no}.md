---
title: 商户提现申请单号查询提现申请单状态
description: 电商平台发起申请后, 电商平台调用此接口查询审批和出款进度。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3_partner/apis/chapter7_8_7.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Mch_operate.Risk.WithdrawlApply.OutRequestNo._out_request_no_.GetHttpMethod {
  export interface RequestConfig extends AxiosRequestConfig {
    out_request_no: string
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
namespace WeChatPay.OpenAPI.V3.Mch_operate.Risk.WithdrawlApply.OutRequestNo {
  export interface _out_request_no_ {
    /**
     * 商户提现申请单号查询提现申请单状态
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3_partner/apis/chapter7_8_7.shtml
     */
    get(config: _out_request_no_.GetHttpMethod.RequestConfig): AxiosPromise<_out_request_no_.GetHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Mch_operate.Risk.WithdrawlApply {
  export interface OutRequestNo {
    _out_request_no_: OutRequestNo._out_request_no_
  }
}
namespace WeChatPay.OpenAPI.V3.Mch_operate.Risk {
  export interface WithdrawlApply {
    outRequestNo: WithdrawlApply.OutRequestNo
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
wxpay.v3.mch_operate.risk.withdrawlApply.outRequestNo._out_request_no_.get({
//                                                                     ^^^
  out_request_no,
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
