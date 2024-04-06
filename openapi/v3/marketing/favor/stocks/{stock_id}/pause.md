---
title: 暂停代金券批次
description: 通过此接口可暂停指定代金券批次。暂停后，该代金券批次暂停发放，用户无法通过任何渠道再领取该批次的券。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/marketing/convention/chapter3_13.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Marketing.Favor.Stocks._stock_id_.Pause.PostHttpMethod {
  export interface JsonDataRequest {
    stock_creator_mchid: string
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
    stock_id: string
  }
  export interface WellformedResponse {
    pause_time: string | Date
    stock_id: string
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing.Favor.Stocks._stock_id_ {
  export interface Pause {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/marketing/convention/chapter3_13.shtml
     */
    (data: Pause.PostHttpMethod.JsonDataRequest, config: Pause.PostHttpMethod.RequestConfig): AxiosPromise<Pause.PostHttpMethod.WellformedResponse>
    /**
     * 暂停代金券批次API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/marketing/convention/chapter3_13.shtml
     */
    post(data: Pause.PostHttpMethod.JsonDataRequest, config: Pause.PostHttpMethod.RequestConfig): AxiosPromise<Pause.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing.Favor.Stocks {
  export interface _stock_id_ {
    pause: _stock_id_.Pause
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
wxpay.v3.marketing.favor.stocks._stock_id_.pause.post({
//                                               ^^^^
  stock_creator_mchid,
}, { stock_id })
.then(
  ({ // [!code hl:9]
    data: {
      pause_time,
      stock_id,
    },
  }) => ({
    pause_time,
    stock_id,
  })
)
```
