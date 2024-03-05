---
title: 添加分账接收方(平台收付通)
description: 电商平台可通过此接口添加分账接收方，建立分账接收方列表。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/ecommerce/profitsharing/chapter3_7.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Ecommerce.Profitsharing.Receivers.Add.PostHttpMethod {
  export interface JsonDataRequest {
    appid: string
    type: string
    account: string
    name: string
    encrypted_name: string
    relation_type: string
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
    headers: {
      'Wechatpay-Serial': string
    }
  }
  export interface WellformedResponse {
    type: string
    account: string
  }
}
namespace WeChatPay.OpenAPI.V3.Ecommerce.Profitsharing.Receivers {
  export interface Add {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/ecommerce/profitsharing/chapter3_7.shtml
     */
    (data: Add.PostHttpMethod.JsonDataRequest, config: Add.PostHttpMethod.RequestConfig): AxiosPromise<Add.PostHttpMethod.WellformedResponse>
    /**
     * 添加分账接收方API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/ecommerce/profitsharing/chapter3_7.shtml
     */
    post(data: Add.PostHttpMethod.JsonDataRequest, config: Add.PostHttpMethod.RequestConfig): AxiosPromise<Add.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Ecommerce.Profitsharing {
  export interface Receivers {
    add: Receivers.Add
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
wxpay.v3.ecommerce.profitsharing.receivers.add.post({
//                                             ^^^^
  appid,
  type,
  account,
  name,
  encrypted_name,
  relation_type,
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