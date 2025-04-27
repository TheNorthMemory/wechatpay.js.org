---
title: 删除分账接收方
description: 服务商发起删除分账接收方请求。删除后，不再支持品牌主或门店分到该分账接收方。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Brand.Profitsharing.Receivers.Delete.PostHttpMethod {
  export interface JsonDataRequest {
    brand_mchid: string
    appid: string
    sub_appid: string
    type: string
    account: string
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
  }
  export interface WellformedResponse {
    brand_mchid: string
    type: string
    account: string
  }
}
namespace WeChatPay.OpenAPI.V3.Brand.Profitsharing.Receivers {
  export interface Delete {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/brand/chapter3_8.shtml
     */
    (data: Delete.PostHttpMethod.JsonDataRequest, config?: Delete.PostHttpMethod.RequestConfig): AxiosPromise<Delete.PostHttpMethod.WellformedResponse>
    /**
     * 删除分账接收方API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/brand/chapter3_8.shtml
     */
    post(data: Delete.PostHttpMethod.JsonDataRequest, config?: Delete.PostHttpMethod.RequestConfig): AxiosPromise<Delete.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Brand.Profitsharing {
  export interface Receivers {
    delete: Receivers.Delete
  }
}
namespace WeChatPay.OpenAPI.V3.Brand {
  export interface Profitsharing {
    receivers: Profitsharing.Receivers
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface Brand {
    profitsharing: Brand.Profitsharing
  }
}
namespace WeChatPay.OpenAPI {
  export interface V3 {
    brand: V3.Brand
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
wxpay.v3.brand.profitsharing.receivers.delete.post({
//                                            ^^^^
  brand_mchid,
  appid,
  sub_appid,
  type,
  account,
})
.then(
  ({ // [!code hl:11]
    data: {
      brand_mchid,
      type,
      account,
    },
  }) => ({
    brand_mchid,
    type,
    account,
  })
)
```

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012467103)
