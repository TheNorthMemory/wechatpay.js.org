---
title: 商家小票管理
description: 用于服务商/服务商使用此接口为特约商户开通或关闭商家小票功能。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Goldplan.Merchants.Changecustompagestatus.PostHttpMethod {
  export interface JsonDataRequest {
    sub_mchid: string
    operation_type: 'OPEN' | 'CLOSE'
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
  }
  export interface WellformedResponse {
    sub_mchid: string
  }
}
namespace WeChatPay.OpenAPI.V3.Goldplan.Merchants {
  export interface Changecustompagestatus {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/goldplan/chapter3_2.shtml
     */
    (data: Changecustompagestatus.PostHttpMethod.JsonDataRequest, config?: Changecustompagestatus.PostHttpMethod.RequestConfig): AxiosPromise<Changecustompagestatus.PostHttpMethod.WellformedResponse>
    /**
     * 商家小票管理API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/goldplan/chapter3_2.shtml
     */
    post(data: Changecustompagestatus.PostHttpMethod.JsonDataRequest, config?: Changecustompagestatus.PostHttpMethod.RequestConfig): AxiosPromise<Changecustompagestatus.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Goldplan {
  export interface Merchants {
    changecustompagestatus: Merchants.Changecustompagestatus
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
wxpay.v3.goldplan.merchants.changecustompagestatus.post({
//                                                 ^^^^
  sub_mchid,
  operation_type,
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

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012473788)
