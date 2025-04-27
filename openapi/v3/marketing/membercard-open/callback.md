---
title: 设置/查询回调地址
description: 通过此接口商户可设置回调地址，用于接收会员业务的相关信息营销事件推送：点击开通产品权限。由会员卡创建方登录Pay平台，操作开通。
---

# 设置回调地址 {#patch}

通过此接口商户可设置回调地址，用于接收会员业务的相关信息营销事件推送：点击开通产品权限。由会员卡创建方登录Pay平台，操作开通。

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Marketing.MembercardOpen.Callback.PatchHttpMethod {
  export interface JsonDataRequest {
    notify_url: string
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
  }
  export interface WellformedResponse {
    notify_url: string
    mchid: string
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing.MembercardOpen {
  export interface Callback {
    /**
     * 设置回调地址API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/marketing/membercard_open/chapter6_1.shtml
     */
    patch(data: Callback.PatchHttpMethod.JsonDataRequest, config?: Callback.PatchHttpMethod.RequestConfig): AxiosPromise<Callback.PatchHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing {
  export interface MembercardOpen {
    callback: MembercardOpen.Callback
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface Marketing {
    membercardOpen: Marketing.MembercardOpen
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
wxpay.v3.marketing.membercardOpen.callback.patch({
//                                         ^^^^^
  notify_url,
})
.then(
  ({ // [!code hl:9]
    data: {
      notify_url,
      mchid,
    },
  }) => ({
    notify_url,
    mchid,
  })
)
```

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4012552251) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012714353)

# 查询回调地址 {#get}

通过此接口可查询以前设置的回调地址

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Marketing.MembercardOpen.Callback.GetHttpMethod {
  export interface RequestConfig extends AxiosRequestConfig {
  }
  export interface WellformedResponse {
    notify_url: string
    mchid: string
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing.MembercardOpen {
  export interface Callback {
    /**
     * 查询回调地址API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/marketing/membercard_open/chapter6_2.shtml
     */
    get(config?: Callback.GetHttpMethod.RequestConfig): AxiosPromise<Callback.GetHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing {
  export interface MembercardOpen {
    callback: MembercardOpen.Callback
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface Marketing {
    membercardOpen: Marketing.MembercardOpen
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
wxpay.v3.marketing.membercardOpen.callback.get({})
//                                         ^^^
.then(
  ({ // [!code hl:9]
    data: {
      notify_url,
      mchid,
    },
  }) => ({
    notify_url,
    mchid,
  })
)
```

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4012552275) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012714354)
