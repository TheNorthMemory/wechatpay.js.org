---
title: 添加分账接收方
description: 服务商可通过此接口添加分账接收方，建立分账接收方列表。连锁加盟模式下，服务商添加的分账接收方统一在品牌主商户号维度进行管理。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/brand/chapter3_7.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Brand.Profitsharing.Receivers.Add.PostHttpMethod {
  export interface JsonDataRequest {
    brand_mchid: string
    appid: string
    sub_appid: string
    type: string
    account: string
    name: string
    relation_type: string
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
  export interface Add {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/brand/chapter3_7.shtml
     */
    (data: Add.PostHttpMethod.JsonDataRequest, config?: Add.PostHttpMethod.RequestConfig): AxiosPromise<Add.PostHttpMethod.WellformedResponse>
    /**
     * 添加分账接收方API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/brand/chapter3_7.shtml
     */
    post(data: Add.PostHttpMethod.JsonDataRequest, config?: Add.PostHttpMethod.RequestConfig): AxiosPromise<Add.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Brand.Profitsharing {
  export interface Receivers {
    add: Receivers.Add
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
wxpay.v3.brand.profitsharing.receivers.add.post({
//                                         ^^^^
  brand_mchid,
  appid,
  sub_appid,
  type,
  account,
  name,
  relation_type,
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
