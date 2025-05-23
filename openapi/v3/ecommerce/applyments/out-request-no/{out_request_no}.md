---
title: 通过业务申请编号查询申请状态(平台收付通)
description: 电商平台通过查询申请状态API查询二级商户入驻申请结果。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Ecommerce.Applyments.OutRequestNo._out_request_no_.GetHttpMethod {
  export interface RequestConfig extends AxiosRequestConfig {
    out_request_no: string
  }
  export interface WellformedResponse {
    applyment_state: string
    applyment_state_desc: string
    sign_url: string
    sub_mchid: string
    account_validation: {
      account_name: string
      account_no: string
      pay_amount: number
      destination_account_number: string
      destination_account_name: string
      destination_account_bank: string
      city: string
      remark: string
      deadline: string
    }
    audit_detail: {
      param_name: string
      reject_reason: string
    }[]
    legal_validation_url: string
    out_request_no: string
    applyment_id: number
    sign_state: 'UNSIGNED' | 'SIGNED' | 'NOT_SIGNABLE'
  }
}
namespace WeChatPay.OpenAPI.V3.Ecommerce.Applyments.OutRequestNo {
  export interface _out_request_no_ {
    /**
     * 通过业务申请编号查询申请状态
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/ecommerce/applyments/chapter3_2.shtml
     */
    get(config: _out_request_no_.GetHttpMethod.RequestConfig): AxiosPromise<_out_request_no_.GetHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Ecommerce.Applyments {
  export interface OutRequestNo {
    _out_request_no_: OutRequestNo._out_request_no_
  }
}
namespace WeChatPay.OpenAPI.V3.Ecommerce {
  export interface Applyments {
    outRequestNo: Applyments.OutRequestNo
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface Ecommerce {
    applyments: Ecommerce.Applyments
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
wxpay.v3.ecommerce.applyments.outRequestNo._out_request_no_.get({
//                                                          ^^^
  out_request_no,
})
.then(
  ({ // [!code hl:23]
    data: {
      applyment_state,
      applyment_state_desc,
      sign_url,
      sub_mchid,
      account_validation,
      audit_detail,
      legal_validation_url,
      out_request_no,
      applyment_id,
      sign_state,
    },
  }) => ({
    applyment_state,
    applyment_state_desc,
    sign_url,
    sub_mchid,
    account_validation,
    audit_detail,
    legal_validation_url,
    out_request_no,
    applyment_id,
    sign_state,
  })
)
```

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012691376)
