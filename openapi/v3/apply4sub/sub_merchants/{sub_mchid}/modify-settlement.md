---
title: 修改结算帐号
description: 修改结算帐号API
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Apply4sub.Sub_merchants._sub_mchid_.ModifySettlement.PostHttpMethod {
  export interface JsonDataRequest {
    modify_mode: 'MODIFY_MODE_ASYNC'
    account_type: string
    account_name: string
    account_bank: string
    bank_address_code: string
    bank_name: string
    bank_branch_id: string
    account_number: string
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
    sub_mchid: string
    headers: {
      'Wechatpay-Serial': string
    }
  }
  export interface WellformedResponse {
    application_no: string
  }
}
namespace WeChatPay.OpenAPI.V3.Apply4sub.Sub_merchants._sub_mchid_ {
  export interface ModifySettlement {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/tool/applyment4sub/chapter3_3.shtml
     */
    (data: ModifySettlement.PostHttpMethod.JsonDataRequest, config: ModifySettlement.PostHttpMethod.RequestConfig): AxiosPromise<ModifySettlement.PostHttpMethod.WellformedResponse>
    /**
     * 修改结算帐号API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/tool/applyment4sub/chapter3_3.shtml
     */
    post(data: ModifySettlement.PostHttpMethod.JsonDataRequest, config: ModifySettlement.PostHttpMethod.RequestConfig): AxiosPromise<ModifySettlement.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Apply4sub.Sub_merchants {
  export interface _sub_mchid_ {
    modifySettlement: _sub_mchid_.ModifySettlement
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
wxpay.v3.apply4sub.sub_merchants._sub_mchid_.modifySettlement.post({
//                                                            ^^^^
  modify_mode,
  account_type,
  account_name,
  account_bank,
  bank_address_code,
  bank_name,
  bank_branch_id,
  account_number,
}, { sub_mchid, headers, })
.then(
  ({ // [!code hl:7]
    data: {
      application_no,
    },
  }) => ({
    application_no,
  })
)
```

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012761138) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012761102) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012721277) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012760618)
