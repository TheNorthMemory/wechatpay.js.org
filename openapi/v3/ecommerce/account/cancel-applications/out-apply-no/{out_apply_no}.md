---
title: 查询注销单状态(平台收付通)
description: 电商平台服务商发起注销申请后，通过本接口查询注销状态、进展。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/docs/partner/apis/ecommerce-cancel/cancel-applications/get-cancel-application.html)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Ecommerce.Account.CancelApplications.OutApplyNo._out_apply_no_.GetHttpMethod {
  export interface RequestConfig extends AxiosRequestConfig {
    out_apply_no: string
  }
  export interface WellformedResponse {
    out_apply_no: string
    sub_mchid: string
    reject_reason: string
    cancel_state: string
    update_time: string | Date
  }
}
namespace WeChatPay.OpenAPI.V3.Ecommerce.Account.CancelApplications.OutApplyNo {
  export interface _out_apply_no_ {
    /**
     * 查询注销单状态
     * @link https://pay.weixin.qq.com/docs/partner/apis/ecommerce-cancel/cancel-applications/get-cancel-application.html
     */
    get(config: _out_apply_no_.GetHttpMethod.RequestConfig): AxiosPromise<_out_apply_no_.GetHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Ecommerce.Account.CancelApplications {
  export interface OutApplyNo {
    _out_apply_no_: OutApplyNo._out_apply_no_
  }
}
namespace WeChatPay.OpenAPI.V3.Ecommerce.Account {
  export interface CancelApplications {
    outApplyNo: CancelApplications.OutApplyNo
  }
}
namespace WeChatPay.OpenAPI.V3.Ecommerce {
  export interface Account {
    cancelApplications: Account.CancelApplications
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface Ecommerce {
    account: Ecommerce.Account
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
wxpay.v3.ecommerce.account.cancelApplications.outApplyNo._out_apply_no_.get({
//                                                                      ^^^
  out_apply_no,
})
.then(
  ({ // [!code hl:15]
    data: {
      out_apply_no,
      sub_mchid,
      reject_reason,
      cancel_state,
      update_time,
    },
  }) => ({
    out_apply_no,
    sub_mchid,
    reject_reason,
    cancel_state,
    update_time,
  })
)
```