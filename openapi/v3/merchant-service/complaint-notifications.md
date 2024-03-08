---
title: 创建投诉通知回调
description: 商户通过调用此接口创建投诉通知回调URL，当用户产生新投诉且投诉状态已变更时，微信支付会通过回 调URL通知商户。对于服务商、渠道商，会收到所有子商户的投诉信息推送。
---

# 创建投诉通知回调 {#post}

商户通过调用此接口创建投诉通知回调URL，当用户产生新投诉且投诉状态已变更时，微信支付会通过回 调URL通知商户。对于服务商、渠道商，会收到所有子商户的投诉信息推送。 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/tool/merchant-service/chapter3_2.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.MerchantService.ComplaintNotifications.PostHttpMethod {
  export interface JsonDataRequest {
    url: string
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
  }
  export interface WellformedResponse {
    mchid: string
    url: string
  }
}
namespace WeChatPay.OpenAPI.V3.MerchantService {
  export interface ComplaintNotifications {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/tool/merchant-service/chapter3_2.shtml
     */
    (data: ComplaintNotifications.PostHttpMethod.JsonDataRequest, config?: ComplaintNotifications.PostHttpMethod.RequestConfig): AxiosPromise<ComplaintNotifications.PostHttpMethod.WellformedResponse>
    /**
     * 创建投诉通知回调API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/tool/merchant-service/chapter3_2.shtml
     */
    post(data: ComplaintNotifications.PostHttpMethod.JsonDataRequest, config?: ComplaintNotifications.PostHttpMethod.RequestConfig): AxiosPromise<ComplaintNotifications.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface MerchantService {
    complaintNotifications: MerchantService.ComplaintNotifications
  }
}
namespace WeChatPay.OpenAPI {
  export interface V3 {
    merchantService: V3.MerchantService
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
wxpay.v3.merchantService.complaintNotifications.post({
//                                              ^^^^
  url,
})
.then(
  ({ // [!code hl:9]
    data: {
      mchid,
      url,
    },
  }) => ({
    mchid,
    url,
  })
)
```

# 查询投诉通知回调 {#get}

商户通过调用此接口查询投诉通知的回调URL。 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/tool/merchant-service/chapter3_3.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.MerchantService.ComplaintNotifications.GetHttpMethod {
  export interface RequestConfig extends AxiosRequestConfig {
  }
  export interface WellformedResponse {
    mchid: string
    url: string
  }
}
namespace WeChatPay.OpenAPI.V3.MerchantService {
  export interface ComplaintNotifications {
    /**
     * 查询投诉通知回调API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/tool/merchant-service/chapter3_3.shtml
     */
    get(config?: ComplaintNotifications.GetHttpMethod.RequestConfig): AxiosPromise<ComplaintNotifications.GetHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface MerchantService {
    complaintNotifications: MerchantService.ComplaintNotifications
  }
}
namespace WeChatPay.OpenAPI {
  export interface V3 {
    merchantService: V3.MerchantService
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
wxpay.v3.merchantService.complaintNotifications.get()
//                                              ^^^
.then(
  ({ // [!code hl:9]
    data: {
      mchid,
      url,
    },
  }) => ({
    mchid,
    url,
  })
)
```

# 更新投诉通知回调 {#put}

商户通过调用此接口更新投诉通知的回调URL。[官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/tool/merchant-service/chapter3_4.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.MerchantService.ComplaintNotifications.PutHttpMethod {
  export interface JsonDataRequest {
    url: string
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
  }
  export interface WellformedResponse {
    mchid: string
    url: string
  }
}
namespace WeChatPay.OpenAPI.V3.MerchantService {
  export interface ComplaintNotifications {
    /**
     * 更新投诉通知回调API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/tool/merchant-service/chapter3_4.shtml
     */
    put(data: ComplaintNotifications.PutHttpMethod.JsonDataRequest, config?: ComplaintNotifications.PutHttpMethod.RequestConfig): AxiosPromise<ComplaintNotifications.PutHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface MerchantService {
    complaintNotifications: MerchantService.ComplaintNotifications
  }
}
namespace WeChatPay.OpenAPI {
  export interface V3 {
    merchantService: V3.MerchantService
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
wxpay.v3.merchantService.complaintNotifications.put({
//                                              ^^^
  url,
})
.then(
  ({ // [!code hl:9]
    data: {
      mchid,
      url,
    },
  }) => ({
    mchid,
    url,
  })
)
```

# 删除投诉通知回调 {#delete}

当商户不再需要推送通知时，可通过调用此接口删除投诉通知的回调URL，取消通知回调。 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/tool/merchant-service/chapter3_5.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.MerchantService.ComplaintNotifications.DeleteHttpMethod {
  export interface RequestConfig extends AxiosRequestConfig {
  }
  export interface WellformedResponse {
  }
}
namespace WeChatPay.OpenAPI.V3.MerchantService {
  export interface ComplaintNotifications {
    /**
     * 删除投诉通知回调API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/tool/merchant-service/chapter3_5.shtml
     */
    delete(config?: ComplaintNotifications.DeleteHttpMethod.RequestConfig): AxiosPromise<ComplaintNotifications.DeleteHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface MerchantService {
    complaintNotifications: MerchantService.ComplaintNotifications
  }
}
namespace WeChatPay.OpenAPI {
  export interface V3 {
    merchantService: V3.MerchantService
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
wxpay.v3.merchantService.complaintNotifications.delete()
//                                              ^^^^^^
.then(({ status, }) => status === 204) // [!code hl]
```
