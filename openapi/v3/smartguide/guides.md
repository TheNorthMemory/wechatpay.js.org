---
title: 服务人员注册
description: 用于服务商/商户开发者为商户注册服务人员使用。
---

# 服务人员注册 {#post}

用于服务商/商户开发者为商户注册服务人员使用。 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/smartguide/chapter3_1.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Smartguide.Guides.PostHttpMethod {
  export interface JsonDataRequest {
    sub_mchid: string
    corpid: string
    store_id: number
    userid: string
    name: string
    mobile: string
    qr_code: string
    avatar: string
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
    headers: {
      'Wechatpay-Serial': string
    }
  }
  export interface WellformedResponse {
    guide_id: string
  }
}
namespace WeChatPay.OpenAPI.V3.Smartguide {
  export interface Guides {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/smartguide/chapter3_1.shtml
     */
    (data: Guides.PostHttpMethod.JsonDataRequest, config: Guides.PostHttpMethod.RequestConfig): AxiosPromise<Guides.PostHttpMethod.WellformedResponse>
    /**
     * 服务人员注册API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/smartguide/chapter3_1.shtml
     */
    post(data: Guides.PostHttpMethod.JsonDataRequest, config: Guides.PostHttpMethod.RequestConfig): AxiosPromise<Guides.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface Smartguide {
    guides: Smartguide.Guides
  }
}
namespace WeChatPay.OpenAPI {
  export interface V3 {
    smartguide: V3.Smartguide
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
wxpay.v3.smartguide.guides.post({
//                         ^^^^
  sub_mchid,
  corpid,
  store_id,
  userid,
  name,
  mobile,
  qr_code,
  avatar,
}, { headers })
.then(
  ({ // [!code hl:7]
    data: {
      guide_id,
    },
  }) => ({
    guide_id,
  })
)
```

# 服务人员查询 {#get}

用于服务商/商户开发者查询已注册的服务人员ID等信息。 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/smartguide/chapter3_3.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Smartguide.Guides.GetHttpMethod {
  export interface RequestConfig extends AxiosRequestConfig {
    params: {
      sub_mchid: string
      store_id: number
      userid: string
      mobile: string
      work_id: string
      limit: number
      offset: number
    }
    headers: {
      'Wechatpay-Serial': string
    }
  }
  export interface WellformedResponse {
    total_count: number
    limit: number
    offset: number
    data: {
      guide_id: string
      store_id: number
      name: string
      mobile: string
      userid: string
      work_id: string
    }[]
  }
}
namespace WeChatPay.OpenAPI.V3.Smartguide {
  export interface Guides {
    /**
     * 服务人员查询API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/smartguide/chapter3_3.shtml
     */
    get(config: Guides.GetHttpMethod.RequestConfig): AxiosPromise<Guides.GetHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface Smartguide {
    guides: Smartguide.Guides
  }
}
namespace WeChatPay.OpenAPI {
  export interface V3 {
    smartguide: V3.Smartguide
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
wxpay.v3.smartguide.guides.get({
//                         ^^^^
  params,
  headers,
})
.then(
  ({ // [!code hl:13]
    data: {
      total_count,
      limit,
      offset,
      data,
    },
  }) => ({
    total_count,
    limit,
    offset,
    data,
  })
)
```
