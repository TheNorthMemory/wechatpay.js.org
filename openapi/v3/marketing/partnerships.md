---
title: 查询合作关系列表
description: 该接口主要为商户提供合作关系列表的查询能力。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/apis/chapter9_5_3.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Marketing.Partnerships.GetHttpMethod {
  export interface RequestConfig extends AxiosRequestConfig {
    params: {
      partner: string
      authorized_data: string
      limit: number
      offset: number
    }
  }
  export interface WellformedResponse {
    data: {
      partner: {
        type: string
        appid: string
        merchant_id: string
      }
      authorized_data: {
        business_type: string
        stock_id: string
      }
      build_time: string
      terminate_time: string
      create_time: string
      update_time: string
    }[]
    limit: number
    offset: number
    total_count: number
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing {
  export interface Partnerships {
    /**
     * 查询合作关系列表API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/apis/chapter9_5_3.shtml
     */
    get(config: Partnerships.GetHttpMethod.RequestConfig): AxiosPromise<Partnerships.GetHttpMethod.WellformedResponse>
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
wxpay.v3.marketing.partnerships.get({
//                              ^^^
  params,
})
.then(
  ({ // [!code hl:13]
    data: {
      data,
      limit,
      offset,
      total_count,
    },
  }) => ({
    data,
    limit,
    offset,
    total_count,
  })
)
```
