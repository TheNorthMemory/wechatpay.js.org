---
title: 删除分账接收方
description: 服务商发起删除分账接收方请求。删除后，不支持将分账方商户结算后的资金，分到该分账接收方
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3_partner/apis/chapter8_1_9.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Profitsharing.Receivers.Delete.PostHttpMethod {
  export interface JsonDataRequest {
    sub_mchid: string
    appid: string
    sub_appid: string
    type: string
    account: string
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
  }
  export interface WellformedResponse {
    sub_mchid: string
    type: string
    account: string
  }
}
namespace WeChatPay.OpenAPI.V3.Profitsharing.Receivers {
  export interface Delete {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3_partner/apis/chapter8_1_9.shtml
     */
    (data: Delete.PostHttpMethod.JsonDataRequest, config?: Delete.PostHttpMethod.RequestConfig): AxiosPromise<Delete.PostHttpMethod.WellformedResponse>
    /**
     * 删除分账接收方API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3_partner/apis/chapter8_1_9.shtml
     */
    post(data: Delete.PostHttpMethod.JsonDataRequest, config?: Delete.PostHttpMethod.RequestConfig): AxiosPromise<Delete.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Profitsharing {
  export interface Receivers {
    delete: Receivers.Delete
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
wxpay.v3.profitsharing.receivers.delete.post({
//                                      ^^^^
  sub_mchid,
  appid,
  sub_appid,
  type,
  account,
})
.then(
  ({ // [!code hl:11]
    data: {
      sub_mchid,
      type,
      account,
    },
  }) => ({
    sub_mchid,
    type,
    account,
  })
)
```
