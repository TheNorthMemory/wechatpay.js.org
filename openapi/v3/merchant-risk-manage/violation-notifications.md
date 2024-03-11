---
title: 维护商户违规通知回调地址
description: 调用该接口设置商户违规通知回调地址，开启违规通知，当子商户被处罚或拦截时，微信支付会通过回调地址通知从业机构/服务商/渠道商。
---

# 创建商户违规通知回调地址 {#post}

调用该接口设置商户违规通知回调地址，开启违规通知，当子商户被处罚或拦截时，微信支付会通过回调地址通知从业机构/服务商/渠道商。 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3_partner/apis/chapter10_3_1.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.MerchantRiskManage.ViolationNotifications.PostHttpMethod {
  export interface JsonDataRequest {
    notify_url: string
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
  }
  export interface WellformedResponse {
    notify_url: string
  }
}
namespace WeChatPay.OpenAPI.V3.MerchantRiskManage {
  export interface ViolationNotifications {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3_partner/apis/chapter10_3_1.shtml
     */
    (data: ViolationNotifications.PostHttpMethod.JsonDataRequest, config?: ViolationNotifications.PostHttpMethod.RequestConfig): AxiosPromise<ViolationNotifications.PostHttpMethod.WellformedResponse>
    /**
     * 创建商户违规通知回调地址API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3_partner/apis/chapter10_3_1.shtml
     */
    post(data: ViolationNotifications.PostHttpMethod.JsonDataRequest, config?: ViolationNotifications.PostHttpMethod.RequestConfig): AxiosPromise<ViolationNotifications.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface MerchantRiskManage {
    violationNotifications: MerchantRiskManage.ViolationNotifications
  }
}
namespace WeChatPay.OpenAPI {
  export interface V3 {
    merchantRiskManage: V3.MerchantRiskManage
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
wxpay.v3.merchantRiskManage.violationNotifications.post({
//                                                 ^^^^
  notify_url,
})
.then(
  ({ // [!code hl:7]
    data: {
      notify_url,
    },
  }) => ({
    notify_url,
  })
)
```

# 查询商户违规通知回调地址 {#get}

调用该接口查询商户违规通知回调地址，如果已设置回调地址，说明已开启违规通知，当子商户被处罚或拦截时，微信支付会通过回调地址通知从业机构/服务商/渠道商。 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3_partner/apis/chapter10_3_2.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.MerchantRiskManage.ViolationNotifications.GetHttpMethod {
  export interface RequestConfig extends AxiosRequestConfig {
  }
  export interface WellformedResponse {
    notify_url: string
  }
}
namespace WeChatPay.OpenAPI.V3.MerchantRiskManage {
  export interface ViolationNotifications {
    /**
     * 查询商户违规通知回调地址API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3_partner/apis/chapter10_3_2.shtml
     */
    get(config?: ViolationNotifications.GetHttpMethod.RequestConfig): AxiosPromise<ViolationNotifications.GetHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface MerchantRiskManage {
    violationNotifications: MerchantRiskManage.ViolationNotifications
  }
}
namespace WeChatPay.OpenAPI {
  export interface V3 {
    merchantRiskManage: V3.MerchantRiskManage
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
wxpay.v3.merchantRiskManage.violationNotifications.get()
//                                                 ^^^
.then(
  ({ // [!code hl:7]
    data: {
      notify_url,
    },
  }) => ({
    notify_url,
  })
)
```

# 修改商户违规通知回调地址 {#put}

调用该接口修改商户违规通知回调地址，开启违规通知，当子商户被处罚或拦截时，微信支付会通过回调地址通知从业机构/服务商/渠道商。 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3_partner/apis/chapter10_3_3.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.MerchantRiskManage.ViolationNotifications.PutHttpMethod {
  export interface JsonDataRequest {
    notify_url: string
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
  }
  export interface WellformedResponse {
    notify_url: string
  }
}
namespace WeChatPay.OpenAPI.V3.MerchantRiskManage {
  export interface ViolationNotifications {
    /**
     * 修改商户违规通知回调地址API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3_partner/apis/chapter10_3_3.shtml
     */
    put(data: ViolationNotifications.PutHttpMethod.JsonDataRequest, config?: ViolationNotifications.PutHttpMethod.RequestConfig): AxiosPromise<ViolationNotifications.PutHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface MerchantRiskManage {
    violationNotifications: MerchantRiskManage.ViolationNotifications
  }
}
namespace WeChatPay.OpenAPI {
  export interface V3 {
    merchantRiskManage: V3.MerchantRiskManage
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
wxpay.v3.merchantRiskManage.violationNotifications.put({
//                                                 ^^^
  notify_url,
})
.then(
  ({ // [!code hl:7]
    data: {
      notify_url,
    },
  }) => ({
    notify_url,
  })
)
```

# 删除商户违规通知回调地址 {#delete}

调用该接口删除商户违规通知回调地址，关闭违规通知，当子商户被处罚或拦截时，微信支付不会再通知从业机构/服务商/渠道商。 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3_partner/apis/chapter10_3_4.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.MerchantRiskManage.ViolationNotifications.DeleteHttpMethod {
  export interface RequestConfig extends AxiosRequestConfig {
  }
  export interface WellformedResponse {
  }
}
namespace WeChatPay.OpenAPI.V3.MerchantRiskManage {
  export interface ViolationNotifications {
    /**
     * 删除商户违规通知回调地址API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3_partner/apis/chapter10_3_4.shtml
     */
    delete(config?: ViolationNotifications.DeleteHttpMethod.RequestConfig): AxiosPromise<ViolationNotifications.DeleteHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface MerchantRiskManage {
    violationNotifications: MerchantRiskManage.ViolationNotifications
  }
}
namespace WeChatPay.OpenAPI {
  export interface V3 {
    merchantRiskManage: V3.MerchantRiskManage
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
wxpay.v3.merchantRiskManage.violationNotifications.delete()
//                                                 ^^^^^^
.then(({ status }) => status === 204) // [!code hl]
```
