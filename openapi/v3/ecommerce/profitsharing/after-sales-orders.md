---
title: 请求及查询售后服务分账
description: 请求及查询售后服务分账API
---

# 请求售后服务分账(平台收付通) {#post}

[官方文档](https://pay.weixin.qq.com/docs/partner/products/ecommerce/introduction.html)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Ecommerce.Profitsharing.AfterSalesOrders.PostHttpMethod {
  export interface JsonDataRequest {
    sub_mchid: string
    transaction_id: string
    amount: number
    type: string
    scene: string
    refund_id: string
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
  }
  export interface WellformedResponse {
    sub_mchid: string
    transaction_id: string
    amount: number
  }
}
namespace WeChatPay.OpenAPI.V3.Ecommerce.Profitsharing {
  export interface AfterSalesOrders {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/docs/partner/products/ecommerce/introduction.html
     */
    (data: AfterSalesOrders.PostHttpMethod.JsonDataRequest, config?: AfterSalesOrders.PostHttpMethod.RequestConfig): AxiosPromise<AfterSalesOrders.PostHttpMethod.WellformedResponse>
    /**
     * 请求售后服务分账
     * @link https://pay.weixin.qq.com/docs/partner/products/ecommerce/introduction.html
     */
    post(data: AfterSalesOrders.PostHttpMethod.JsonDataRequest, config?: AfterSalesOrders.PostHttpMethod.RequestConfig): AxiosPromise<AfterSalesOrders.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Ecommerce {
  export interface Profitsharing {
    afterSalesOrders: Profitsharing.AfterSalesOrders
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface Ecommerce {
    profitsharing: Ecommerce.Profitsharing
  }
}
namespace WeChatPay.OpenAPI {
  export interface V3 {
    ecommerce: V3.Ecommerce
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
wxpay.v3.ecommerce.profitsharing.afterSalesOrders.post({
//                                                ^^^^
  sub_mchid,
  transaction_id,
  amount,
  type,
  scene,
  refund_id,
})
.then(
  ({ // [!code hl:11]
    data: {
      sub_mchid,
      transaction_id,
      amount,
    },
  }) => ({
    sub_mchid,
    transaction_id,
    amount,
  })
)
```

# 查询售后服务分账结果(平台收付通) {#get}

[官方文档](https://pay.weixin.qq.com/docs/partner/products/ecommerce/introduction.html)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Ecommerce.Profitsharing.AfterSalesOrders.GetHttpMethod {
  export interface RequestConfig extends AxiosRequestConfig {
    params: {
      sub_mchid: string
      transaction_id: string
    }
  }
  export interface WellformedResponse {
    sub_mchid: string
    transaction_id: string
    amount: number
    result: string
    fail_reason: string
    finish_time: string | Date
  }
}
namespace WeChatPay.OpenAPI.V3.Ecommerce.Profitsharing {
  export interface AfterSalesOrders {
    /**
     * 查询售后服务分账结果
     * @link https://pay.weixin.qq.com/docs/partner/products/ecommerce/introduction.html
     */
    get(config: AfterSalesOrders.GetHttpMethod.RequestConfig): AxiosPromise<AfterSalesOrders.GetHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Ecommerce {
  export interface Profitsharing {
    afterSalesOrders: Profitsharing.AfterSalesOrders
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface Ecommerce {
    profitsharing: Ecommerce.Profitsharing
  }
}
namespace WeChatPay.OpenAPI {
  export interface V3 {
    ecommerce: V3.Ecommerce
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
wxpay.v3.ecommerce.profitsharing.afterSalesOrders.get({
//                                                ^^^
  params,
})
.then(
  ({ // [!code hl:17]
    data: {
      sub_mchid,
      transaction_id,
      amount,
      result,
      fail_reason,
      finish_time,
    },
  }) => ({
    sub_mchid,
    transaction_id,
    amount,
    result,
    fail_reason,
    finish_time,
  })
)
```
