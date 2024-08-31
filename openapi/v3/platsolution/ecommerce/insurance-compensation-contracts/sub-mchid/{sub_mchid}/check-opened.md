---
title: 查询保险理赔功能开通状态(平台收付通)
description: 提交开通保险理赔功能请求后，通过调用该接口查询开通结果。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/docs/partner/apis/plat-compensation/plat-compensation/check-insurance-compensation-opened.html)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Platsolution.Ecommerce.InsuranceCompensationContracts.SubMchid._sub_mchid_.CheckOpened.PostHttpMethod {
  export interface JsonDataRequest {
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
    sub_mchid: string
  }
  export interface WellformedResponse {
    sub_mchid: string
    opened: boolean
    success_time: string
  }
}
namespace WeChatPay.OpenAPI.V3.Platsolution.Ecommerce.InsuranceCompensationContracts.SubMchid._sub_mchid_ {
  export interface CheckOpened {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/docs/partner/apis/plat-compensation/plat-compensation/check-insurance-compensation-opened.html
     */
    (data: CheckOpened.PostHttpMethod.JsonDataRequest, config: CheckOpened.PostHttpMethod.RequestConfig): AxiosPromise<CheckOpened.PostHttpMethod.WellformedResponse>
    /**
     * 查询保险理赔功能开通状态
     * @link https://pay.weixin.qq.com/docs/partner/apis/plat-compensation/plat-compensation/check-insurance-compensation-opened.html
     */
    post(data: CheckOpened.PostHttpMethod.JsonDataRequest, config: CheckOpened.PostHttpMethod.RequestConfig): AxiosPromise<CheckOpened.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Platsolution.Ecommerce.InsuranceCompensationContracts.SubMchid {
  export interface _sub_mchid_ {
    checkOpened: _sub_mchid_.CheckOpened
  }
}
namespace WeChatPay.OpenAPI.V3.Platsolution.Ecommerce.InsuranceCompensationContracts {
  export interface SubMchid {
    _sub_mchid_: SubMchid._sub_mchid_
  }
}
namespace WeChatPay.OpenAPI.V3.Platsolution.Ecommerce {
  export interface InsuranceCompensationContracts {
    subMchid: InsuranceCompensationContracts.SubMchid
  }
}
namespace WeChatPay.OpenAPI.V3.Platsolution {
  export interface Ecommerce {
    insuranceCompensationContracts: Ecommerce.InsuranceCompensationContracts
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface Platsolution {
    ecommerce: Platsolution.Ecommerce
  }
}
namespace WeChatPay.OpenAPI {
  export interface V3 {
    platsolution: V3.Platsolution
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
wxpay.v3.platsolution.ecommerce.insuranceCompensationContracts.subMchid._sub_mchid_.checkOpened.post({}, {
//                                                                                              ^^^^
  sub_mchid,
})
.then(
  ({ // [!code hl:11]
    data: {
      sub_mchid,
      opened,
      success_time,
    },
  }) => ({
    sub_mchid,
    opened,
    success_time,
  })
)
```
