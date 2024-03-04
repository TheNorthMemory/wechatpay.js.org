---
title: 查询结算账户修改申请状态
description: 服务商/电商平台（不包括支付机构、银行），可使用本接口，查询其进件且已签约特约商户/二级商户的结算账户的修改申请单信息和审核结果。
---

# {{ $frontmatter.title }}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/docs/partner/apis/modify-settlement/sub-merchants/get-application.html)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Apply4sub.Sub_merchants._sub_mchid_.Application._application_no_.GetHttpMethod {
  export interface RequestConfig extends AxiosRequestConfig {
    sub_mchid: string
    application_no: string
  }
  export interface WellformedResponse {
    account_name: string
    account_type: string
    account_bank: string
    bank_name: string
    bank_branch_id: string
    account_number: string
    verify_result: string
    verify_fail_reason: string
    verify_finish_time: string
  }
}
namespace WeChatPay.OpenAPI.V3.Apply4sub.Sub_merchants._sub_mchid_.Application {
  export interface _application_no_ {
    /**
     * 查询结算账户修改申请状态
     * @link https://pay.weixin.qq.com/docs/partner/apis/modify-settlement/sub-merchants/get-application.html
     */
    get(config: _application_no_.GetHttpMethod.RequestConfig): AxiosPromise<_application_no_.GetHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Apply4sub.Sub_merchants._sub_mchid_ {
  export interface Application {
    _application_no_: Application._application_no_
  }
}
namespace WeChatPay.OpenAPI.V3.Apply4sub.Sub_merchants {
  export interface _sub_mchid_ {
    application: _sub_mchid_.Application
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
wxpay.v3.apply4sub.sub_merchants._sub_mchid_.application._application_no_.get({
//                                                                        ^^^
  sub_mchid,
  application_no,
})
.then(
  ({ // [!code hl:23]
    data: {
      account_name,
      account_type,
      account_bank,
      bank_name,
      bank_branch_id,
      account_number,
      verify_result,
      verify_fail_reason,
      verify_finish_time,
    },
  }) => ({
    account_name,
    account_type,
    account_bank,
    bank_name,
    bank_branch_id,
    account_number,
    verify_result,
    verify_fail_reason,
    verify_finish_time,
  })
)
```