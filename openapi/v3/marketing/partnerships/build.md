---
title: 建立合作关系
description: 该接口主要为商户提供营销资源的授权能力，可授权给其他商户或小程序，方便商户间的互利合作。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/marketing/partnerships/chapter3_1.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Marketing.Partnerships.Build.PostHttpMethod {
  export interface JsonDataRequest {
    partner: {
      type: string
      appid: string
      merchant_id: string
    }
    authorized_data: {
      business_type: string
      stock_id: string
    }
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
    headers: {
      'Idempotency-Key': string
    }
  }
  export interface WellformedResponse {
    partner: {
      type: string
      appid: string
      merchant_id: string
    }
    authorized_data: {
      business_type: string
      stock_id: string
    }
    build_time: string | Date
    create_time: string | Date
    update_time: string | Date
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing.Partnerships {
  export interface Build {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/marketing/partnerships/chapter3_1.shtml
     */
    (data: Build.PostHttpMethod.JsonDataRequest, config: Build.PostHttpMethod.RequestConfig): AxiosPromise<Build.PostHttpMethod.WellformedResponse>
    /**
     * 建立合作关系API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/marketing/partnerships/chapter3_1.shtml
     */
    post(data: Build.PostHttpMethod.JsonDataRequest, config: Build.PostHttpMethod.RequestConfig): AxiosPromise<Build.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing {
  export interface Partnerships {
    build: Partnerships.Build
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface Marketing {
    partnerships: Marketing.Partnerships
  }
}
namespace WeChatPay.OpenAPI {
  export interface V3 {
    marketing: V3.Marketing
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
wxpay.v3.marketing.partnerships.build.post({
//                                    ^^^^
  partner,
  authorized_data,
}, { headers })
.then(
  ({ // [!code hl:15]
    data: {
      partner,
      authorized_data,
      build_time,
      create_time,
      update_time,
    },
  }) => ({
    partner,
    authorized_data,
    build_time,
    create_time,
    update_time,
  })
)
```
