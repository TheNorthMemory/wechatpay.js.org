---
title: 设置/获取已设置的消息通知地址
description: 用于查询已经设置的接收营销事件通知的URL。
---

# 设置消息通知地址 {#post}

用于设置接收营销事件通知的URL，可接收营销相关的事件通知，包括核销、发放、退款等。 [官方文档](https://pay.weixin.qq.com/docs/merchant/apis/cash-coupons/call-back-url/set-callback.html)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Marketing.Favor.Callbacks.PostHttpMethod {
  export interface JsonDataRequest {
    mchid: string
    notify_url: string
    switch: boolean
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
  }
  export interface WellformedResponse {
    update_time: string
    notify_url: string
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing.Favor {
  export interface Callbacks {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/docs/merchant/apis/cash-coupons/call-back-url/set-callback.html
     */
    (data: Callbacks.PostHttpMethod.JsonDataRequest, config?: Callbacks.PostHttpMethod.RequestConfig): AxiosPromise<Callbacks.PostHttpMethod.WellformedResponse>
    /**
     * 设置消息通知地址API
     * @link https://pay.weixin.qq.com/docs/merchant/apis/cash-coupons/call-back-url/set-callback.html
     */
    post(data: Callbacks.PostHttpMethod.JsonDataRequest, config?: Callbacks.PostHttpMethod.RequestConfig): AxiosPromise<Callbacks.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing {
  export interface Favor {
    callbacks: Favor.Callbacks
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
/** @type true */
var flag
// ---cut---
wxpay.v3.marketing.favor.callbacks.post({
//                                 ^^^^
  mchid,
  notify_url,
  switch: flag,
})
.then(
  ({ // [!code hl:9]
    data: {
      update_time,
      notify_url,
    },
  }) => ({
    update_time,
    notify_url,
  })
)
```

# 获取已设置的消息通知地址 {#get}

用于查询已经设置的接收营销事件通知的URL。 [官方文档](https://pay.weixin.qq.com/docs/merchant/apis/cash-coupons/call-back-url/query-callback.html)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Marketing.Favor.Callbacks.GetHttpMethod {
  export interface RequestConfig extends AxiosRequestConfig {
    params: {
      mchid: string
    }
  }
  export interface WellformedResponse {
    mchid: string
    notify_url: string
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing.Favor {
  export interface Callbacks {
    /**
     * 获取已设置的消息通知地址API
     * @link https://pay.weixin.qq.com/docs/merchant/apis/cash-coupons/call-back-url/query-callback.html
     */
    get(config: Callbacks.GetHttpMethod.RequestConfig): AxiosPromise<Callbacks.GetHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing {
  export interface Favor {
    callbacks: Favor.Callbacks
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
wxpay.v3.marketing.favor.callbacks.get({
//                                 ^^^
  params,
})
.then(
  ({ // [!code hl:9]
    data: {
      mchid,
      notify_url,
    },
  }) => ({
    mchid,
    notify_url,
  })
)
```
