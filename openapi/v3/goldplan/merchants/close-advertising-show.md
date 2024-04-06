---
title: 关闭广告展示
description: 使用此接口为特约商户的点金计划页面关闭广告展示功能
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3_partner/apis/chapter8_5_5.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Goldplan.Merchants.CloseAdvertisingShow.PostHttpMethod {
  export interface JsonDataRequest {
    sub_mchid: string
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
  }
  export interface WellformedResponse {
  }
}
namespace WeChatPay.OpenAPI.V3.Goldplan.Merchants {
  export interface CloseAdvertisingShow {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3_partner/apis/chapter8_5_5.shtml
     */
    (data: CloseAdvertisingShow.PostHttpMethod.JsonDataRequest, config?: CloseAdvertisingShow.PostHttpMethod.RequestConfig): AxiosPromise<CloseAdvertisingShow.PostHttpMethod.WellformedResponse>
    /**
     * 关闭广告展示API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3_partner/apis/chapter8_5_5.shtml
     */
    post(data: CloseAdvertisingShow.PostHttpMethod.JsonDataRequest, config?: CloseAdvertisingShow.PostHttpMethod.RequestConfig): AxiosPromise<CloseAdvertisingShow.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Goldplan {
  export interface Merchants {
    closeAdvertisingShow: Merchants.CloseAdvertisingShow
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
wxpay.v3.goldplan.merchants.closeAdvertisingShow.post({
//                                               ^^^^
  sub_mchid,
})
.then(({ status }) => status === 204) // [!code hl]
```
