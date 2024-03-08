---
title: 添加分账接收方
description: 服务商发起添加分账接收方请求，建立分账接收方列表。后续可通过发起分账请求，将分账方商户结算后的资金，分到该分账接收方
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3_partner/apis/chapter8_1_8.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Profitsharing.Receivers.Add.PostHttpMethod {
  export interface JsonDataRequest {
    sub_mchid: string
    appid: string
    sub_appid: string
    type: string
    account: string
    name: string
    relation_type: string
    custom_relation: string
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
    headers: {
      'Wechatpay-Serial': string
    }
  }
  export interface WellformedResponse {
    sub_mchid: string
    type: string
    account: string
    name: string
    relation_type: string
    custom_relation: string
  }
}
namespace WeChatPay.OpenAPI.V3.Profitsharing.Receivers {
  export interface Add {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3_partner/apis/chapter8_1_8.shtml
     */
    (data: Add.PostHttpMethod.JsonDataRequest, config: Add.PostHttpMethod.RequestConfig): AxiosPromise<Add.PostHttpMethod.WellformedResponse>
    /**
     * 添加分账接收方API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3_partner/apis/chapter8_1_8.shtml
     */
    post(data: Add.PostHttpMethod.JsonDataRequest, config: Add.PostHttpMethod.RequestConfig): AxiosPromise<Add.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Profitsharing {
  export interface Receivers {
    add: Receivers.Add
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface Profitsharing {
    receivers: Profitsharing.Receivers
  }
}
namespace WeChatPay.OpenAPI {
  export interface V3 {
    profitsharing: V3.Profitsharing
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
wxpay.v3.profitsharing.receivers.add.post({
//                                   ^^^^
  sub_mchid,
  appid,
  sub_appid,
  type,
  account,
  name,
  relation_type,
  custom_relation,
})
.then(
  ({ // [!code hl:17]
    data: {
      sub_mchid,
      type,
      account,
      name,
      relation_type,
      custom_relation,
    },
  }) => ({
    sub_mchid,
    type,
    account,
    name,
    relation_type,
    custom_relation,
  })
)
```
