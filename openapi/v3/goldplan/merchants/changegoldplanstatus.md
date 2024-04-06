---
title: 点金计划管理
description: 用于服务商/服务商为特约商户开通或关闭点金计划。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/goldplan/chapter3_1.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Goldplan.Merchants.Changegoldplanstatus.PostHttpMethod {
  export interface JsonDataRequest {
    sub_mchid: string
    operation_type: 'OPEN' | 'CLOSE'
    operation_pay_scene?: 'JSAPI_AND_MINIPROGRAM' | 'JSAPI' | 'MINIPROGRAM'
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
  }
  export interface WellformedResponse {
    sub_mchid: string
  }
}
namespace WeChatPay.OpenAPI.V3.Goldplan.Merchants {
  export interface Changegoldplanstatus {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/goldplan/chapter3_1.shtml
     */
    (data: Changegoldplanstatus.PostHttpMethod.JsonDataRequest, config?: Changegoldplanstatus.PostHttpMethod.RequestConfig): AxiosPromise<Changegoldplanstatus.PostHttpMethod.WellformedResponse>
    /**
     * 点金计划管理API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/goldplan/chapter3_1.shtml
     */
    post(data: Changegoldplanstatus.PostHttpMethod.JsonDataRequest, config?: Changegoldplanstatus.PostHttpMethod.RequestConfig): AxiosPromise<Changegoldplanstatus.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Goldplan {
  export interface Merchants {
    changegoldplanstatus: Merchants.Changegoldplanstatus
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface Goldplan {
    merchants: Goldplan.Merchants
  }
}
namespace WeChatPay.OpenAPI {
  export interface V3 {
    goldplan: V3.Goldplan
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
wxpay.v3.goldplan.merchants.changegoldplanstatus.post({
//                                               ^^^^
  sub_mchid,
  operation_type,
  operation_pay_scene,
})
.then(
  ({ // [!code hl:7]
    data: {
      sub_mchid,
    },
  }) => ({
    sub_mchid,
  })
)
```
