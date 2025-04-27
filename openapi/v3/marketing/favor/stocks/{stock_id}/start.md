---
title: 激活代金券批次
description: 制券成功后，通过调用此接口激活批次，如果是预充值代金券，激活时会从商户账户余额中锁定本批次的营销资金。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Marketing.Favor.Stocks._stock_id_.Start.PostHttpMethod {
  export interface JsonDataRequest {
    stock_creator_mchid: string
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
    stock_id: string
  }
  export interface WellformedResponse {
    start_time: string | Date
    stock_id: string
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing.Favor.Stocks._stock_id_ {
  export interface Start {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/marketing/convention/chapter3_3.shtml
     */
    (data: Start.PostHttpMethod.JsonDataRequest, config: Start.PostHttpMethod.RequestConfig): AxiosPromise<Start.PostHttpMethod.WellformedResponse>
    /**
     * 激活代金券批次API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/marketing/convention/chapter3_3.shtml
     */
    post(data: Start.PostHttpMethod.JsonDataRequest, config: Start.PostHttpMethod.RequestConfig): AxiosPromise<Start.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing.Favor.Stocks {
  export interface _stock_id_ {
    start: _stock_id_.Start
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing.Favor {
  export interface Stocks {
    _stock_id_: Stocks._stock_id_
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing {
  export interface Favor {
    stocks: Favor.Stocks
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface Marketing {
    favor: Marketing.Favor
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
wxpay.v3.marketing.favor.stocks._stock_id_.start.post({
//                                               ^^^^
  stock_creator_mchid,
}, { stock_id })
.then(
  ({ // [!code hl:9]
    data: {
      start_time,
      stock_id,
    },
  }) => ({
    start_time,
    stock_id,
  })
)
```

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4012460137) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012460237)
