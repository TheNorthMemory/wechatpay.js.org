---
title: 查询子商户管控情况
description: 服务商查询子商户的管控情况。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/docs/partner/apis/limited-functions-and-reasons/mch-limitations/query-sub-mch-limitation.html)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.MchOperationManage.MerchantLimitations.SubMchid._sub_mchid_.GetHttpMethod {
  export interface RequestConfig extends AxiosRequestConfig {
    sub_mchid: string
  }
  export interface WellformedResponse {
    mchid: string
    limited_functions: string[]
    recovery_specifications: {
      limitation_reason: string
      recover_way: string
      recover_help_url: string
      limitation_reason_type: string
      relate_limitations: string[]
      other_relate_limitations: string
    }[]
    other_limited_functions: string
  }
}
namespace WeChatPay.OpenAPI.V3.MchOperationManage.MerchantLimitations.SubMchid {
  export interface _sub_mchid_ {
    /**
     * 查询子商户管控情况
     * @link https://pay.weixin.qq.com/docs/partner/apis/limited-functions-and-reasons/mch-limitations/query-sub-mch-limitation.html
     */
    get(config: _sub_mchid_.GetHttpMethod.RequestConfig): AxiosPromise<_sub_mchid_.GetHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.MchOperationManage.MerchantLimitations {
  export interface SubMchid {
    _sub_mchid_: SubMchid._sub_mchid_
  }
}
namespace WeChatPay.OpenAPI.V3.MchOperationManage {
  export interface MerchantLimitations {
    subMchid: MerchantLimitations.SubMchid
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface MchOperationManage {
    merchantLimitations: MchOperationManage.MerchantLimitations
  }
}
namespace WeChatPay.OpenAPI {
  export interface V3 {
    mchOperationManage: V3.MchOperationManage
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
wxpay.v3.mchOperationManage.merchantLimitations.subMchid._sub_mchid_.get({
//                                                                   ^^^
  sub_mchid,
})
.then(
  ({ // [!code hl:13]
    data: {
      mchid,
      limited_functions,
      recovery_specifications,
      other_limited_functions,
    },
  }) => ({
    mchid,
    limited_functions,
    recovery_specifications,
    other_limited_functions,
  })
)
```
