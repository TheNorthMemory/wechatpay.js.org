---
title: 查询最大分账比例
description: 可调用此接口查询特约商户设置的允许服务商分账的最大比例
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3_partner/apis/chapter8_1_7.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Profitsharing.MerchantConfigs._sub_mchid_.GetHttpMethod {
  export interface RequestConfig extends AxiosRequestConfig {
    sub_mchid: string
  }
  export interface WellformedResponse {
    sub_mchid: string
    max_ratio: number
  }
}
namespace WeChatPay.OpenAPI.V3.Profitsharing.MerchantConfigs {
  export interface _sub_mchid_ {
    /**
     * 查询最大分账比例API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3_partner/apis/chapter8_1_7.shtml
     */
    get(config: _sub_mchid_.GetHttpMethod.RequestConfig): AxiosPromise<_sub_mchid_.GetHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Profitsharing {
  export interface MerchantConfigs {
    _sub_mchid_: MerchantConfigs._sub_mchid_
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface Profitsharing {
    merchantConfigs: Profitsharing.MerchantConfigs
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
wxpay.v3.profitsharing.merchantConfigs._sub_mchid_.get({
//                                                 ^^^
  sub_mchid,
})
.then(
  ({ // [!code hl:9]
    data: {
      sub_mchid,
      max_ratio,
    },
  }) => ({
    sub_mchid,
    max_ratio,
  })
)
```
