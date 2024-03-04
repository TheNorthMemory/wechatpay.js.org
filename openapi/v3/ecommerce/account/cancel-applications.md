---
title: 提交注销申请单(平台收付通)
description: 电商子商户需注销商户号时，由其所属电商平台服务商调用本接口发起注销申请。
---

# {{ $frontmatter.title }}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/docs/partner/apis/ecommerce-cancel/cancel-applications/create-cancel-application.html)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Ecommerce.Account.CancelApplications.PostHttpMethod {
  export interface JsonDataRequest {
    sub_mchid: string
    out_apply_no: string
    application_info: {
      application_type: string
      application_media_id: string
    }[]
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
  }
  export interface WellformedResponse {
    out_apply_no: string
    sub_mchid: string
    reject_reason: string
    cancel_state: string
    update_time: string | Date
  }
}
namespace WeChatPay.OpenAPI.V3.Ecommerce.Account {
  export interface CancelApplications {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/docs/partner/apis/ecommerce-cancel/cancel-applications/create-cancel-application.html
     */
    (data: CancelApplications.PostHttpMethod.JsonDataRequest, config?: CancelApplications.PostHttpMethod.RequestConfig): AxiosPromise<CancelApplications.PostHttpMethod.WellformedResponse>
    /**
     * 提交注销申请单
     * @link https://pay.weixin.qq.com/docs/partner/apis/ecommerce-cancel/cancel-applications/create-cancel-application.html
     */
    post(data: CancelApplications.PostHttpMethod.JsonDataRequest, config?: CancelApplications.PostHttpMethod.RequestConfig): AxiosPromise<CancelApplications.PostHttpMethod.WellformedResponse>
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
wxpay.v3.ecommerce.account.cancelApplications.post({
//                                            ^^^^
  sub_mchid,
  out_apply_no,
  application_info,
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