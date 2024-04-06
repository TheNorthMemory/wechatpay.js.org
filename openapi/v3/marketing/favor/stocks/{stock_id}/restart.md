---
title: 重启代金券批次
description: 通过此接口可重启指定代金券批次。重启后，该代金券批次可以再次发放。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/marketing/convention/chapter3_14.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Marketing.Favor.Stocks._stock_id_.Restart.PostHttpMethod {
  export interface JsonDataRequest {
    stock_creator_mchid: string
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
    stock_id: string
  }
  export interface WellformedResponse {
    restart_time: string | Date
    stock_id: string
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing.Favor.Stocks._stock_id_ {
  export interface Restart {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/marketing/convention/chapter3_14.shtml
     */
    (data: Restart.PostHttpMethod.JsonDataRequest, config: Restart.PostHttpMethod.RequestConfig): AxiosPromise<Restart.PostHttpMethod.WellformedResponse>
    /**
     * 重启代金券批次API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/marketing/convention/chapter3_14.shtml
     */
    post(data: Restart.PostHttpMethod.JsonDataRequest, config: Restart.PostHttpMethod.RequestConfig): AxiosPromise<Restart.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing.Favor.Stocks {
  export interface _stock_id_ {
    restart: _stock_id_.Restart
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
wxpay.v3.marketing.favor.stocks._stock_id_.restart.post({
//                                                 ^^^^
  stock_creator_mchid,
}, { stock_id })
.then(
  ({ // [!code hl:9]
    data: {
      restart_time,
      stock_id,
    },
  }) => ({
    restart_time,
    stock_id,
  })
)
```
