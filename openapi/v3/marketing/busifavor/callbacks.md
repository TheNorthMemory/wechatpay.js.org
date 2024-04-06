---
title: 设置/查询商家券事件通知地址
description: 用于设置接收商家券相关事件通知的URL，可接收商家券相关的事件通知、包括发放通知等。需要设置接收通知的URL，并在商户平台开通营销事件推送的能力，即可接收到相关通知。
---

# 设置商家券事件通知地址 {#post}

用于设置接收商家券相关事件通知的URL，可接收商家券相关的事件通知、包括发放通知等。需要设置接收通知的URL，并在商户平台开通营销事件推送的能力，即可接收到相关通知。 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/apis/chapter9_2_7.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Marketing.Busifavor.Callbacks.PostHttpMethod {
  export interface JsonDataRequest {
    mchid: string
    notify_url: string
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
  }
  export interface WellformedResponse {
    update_time: string
    notify_url: string
    mchid: string
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing.Busifavor {
  export interface Callbacks {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/apis/chapter9_2_7.shtml
     */
    (data: Callbacks.PostHttpMethod.JsonDataRequest, config?: Callbacks.PostHttpMethod.RequestConfig): AxiosPromise<Callbacks.PostHttpMethod.WellformedResponse>
    /**
     * 设置商家券事件通知地址API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/apis/chapter9_2_7.shtml
     */
    post(data: Callbacks.PostHttpMethod.JsonDataRequest, config?: Callbacks.PostHttpMethod.RequestConfig): AxiosPromise<Callbacks.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing {
  export interface Busifavor {
    callbacks: Busifavor.Callbacks
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface Marketing {
    busifavor: Marketing.Busifavor
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
wxpay.v3.marketing.busifavor.callbacks.post({
//                                     ^^^^
  mchid,
  notify_url,
})
.then(
  ({ // [!code hl:11]
    data: {
      update_time,
      notify_url,
      mchid,
    },
  }) => ({
    update_time,
    notify_url,
    mchid,
  })
)
```

# 查询商家券事件通知地址 {#get}

通过调用此接口可查询设置的通知URL。 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/apis/chapter9_2_8.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Marketing.Busifavor.Callbacks.GetHttpMethod {
  export interface RequestConfig extends AxiosRequestConfig {
    params: {
      mchid: string
    }
  }
  export interface WellformedResponse {
    notify_url: string
    mchid: string
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing.Busifavor {
  export interface Callbacks {
    /**
     * 查询商家券事件通知地址API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/apis/chapter9_2_8.shtml
     */
    get(config: Callbacks.GetHttpMethod.RequestConfig): AxiosPromise<Callbacks.GetHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing {
  export interface Busifavor {
    callbacks: Busifavor.Callbacks
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface Marketing {
    busifavor: Marketing.Busifavor
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
wxpay.v3.marketing.busifavor.callbacks.get({
//                                     ^^^^
  params,
})
.then(
  ({ // [!code hl:11]
    data: {
      update_time,
      notify_url,
      mchid,
    },
  }) => ({
    update_time,
    notify_url,
    mchid,
  })
)
```
