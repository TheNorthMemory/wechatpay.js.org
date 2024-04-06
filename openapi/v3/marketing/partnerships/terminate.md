---
title: 终止合作关系
description: 该接口主要为商户提供营销资源的终止授权能力，便于商户管理运营现存的合作关系。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/marketing/partnerships/chapter3_2.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Marketing.Partnerships.Terminate.PostHttpMethod {
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
    terminate_time: string | Date
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing.Partnerships {
  export interface Terminate {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/marketing/partnerships/chapter3_2.shtml
     */
    (data: Terminate.PostHttpMethod.JsonDataRequest, config: Terminate.PostHttpMethod.RequestConfig): AxiosPromise<Terminate.PostHttpMethod.WellformedResponse>
    /**
     * 终止合作关系API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/marketing/partnerships/chapter3_2.shtml
     */
    post(data: Terminate.PostHttpMethod.JsonDataRequest, config: Terminate.PostHttpMethod.RequestConfig): AxiosPromise<Terminate.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing {
  export interface Partnerships {
    terminate: Partnerships.Terminate
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
wxpay.v3.marketing.partnerships.terminate.post({
//                                        ^^^^
  partner,
  authorized_data,
}, { headers })
.then(
  ({ // [!code hl:7]
    data: {
      terminate_time,
    },
  }) => ({
    terminate_time,
  })
)
```
