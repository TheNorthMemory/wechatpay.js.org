---
title: 删除分账接收方(平台收付通)
description: 电商平台发起删除分账接收方请求。删除后，不支持将电商平台下二级商户结算后的资金，分到该分账接收方。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Ecommerce.Profitsharing.Receivers.Delete.PostHttpMethod {
  export interface JsonDataRequest {
    appid: string
    type: string
    account: string
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
  }
  export interface WellformedResponse {
    type: string
    account: string
  }
}
namespace WeChatPay.OpenAPI.V3.Ecommerce.Profitsharing.Receivers {
  export interface Delete {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/ecommerce/profitsharing/chapter3_8.shtml
     */
    (data: Delete.PostHttpMethod.JsonDataRequest, config?: Delete.PostHttpMethod.RequestConfig): AxiosPromise<Delete.PostHttpMethod.WellformedResponse>
    /**
     * 删除分账接收方API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/ecommerce/profitsharing/chapter3_8.shtml
     */
    post(data: Delete.PostHttpMethod.JsonDataRequest, config?: Delete.PostHttpMethod.RequestConfig): AxiosPromise<Delete.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Ecommerce.Profitsharing {
  export interface Receivers {
    Delete: Receivers.Delete
  }
}
namespace WeChatPay.OpenAPI.V3.Ecommerce {
  export interface Profitsharing {
    receivers: Profitsharing.Receivers
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface Ecommerce {
    profitsharing: Ecommerce.Profitsharing
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
wxpay.v3.ecommerce.profitsharing.receivers.Delete.post({
//                                                ^^^^
  appid,
  type,
  account,
})
.then(
  ({ // [!code hl:9]
    data: {
      type,
      account,
    },
  }) => ({
    type,
    account,
  })
)
```

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012477759)
