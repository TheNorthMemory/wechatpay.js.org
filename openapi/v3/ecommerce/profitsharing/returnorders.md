---
title: 分账回退及查询回退结果(平台收付通)
description: 订单已经分账，在退款时，可以先调此接口，将已分账的资金从分账接收方的账户回退给分账方，再发起退款。
---

# 请求分账回退(平台收付通) {#post}

订单已经分账，在退款时，可以先调此接口，将已分账的资金从分账接收方的账户回退给分账方，再发起退款。 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/ecommerce/profitsharing/chapter3_3.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Ecommerce.Profitsharing.Returnorders.PostHttpMethod {
  export interface JsonDataRequest {
    sub_mchid: string
    order_id?: string
    out_order_no?: string
    out_return_no: string
    return_mchid: string
    amount: number
    description: string
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
  }
  export interface WellformedResponse {
    sub_mchid: string
    order_id: string
    out_order_no: string
    out_return_no: string
    return_mchid: string
    amount: number
    return_no: string
    result: string
    fail_reason?: string
    finish_time: string | Date
  }
}
namespace WeChatPay.OpenAPI.V3.Ecommerce.Profitsharing {
  export interface Returnorders {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/ecommerce/profitsharing/chapter3_3.shtml
     */
    (data: Returnorders.PostHttpMethod.JsonDataRequest, config?: Returnorders.PostHttpMethod.RequestConfig): AxiosPromise<Returnorders.PostHttpMethod.WellformedResponse>
    /**
     * 请求分账回退API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/ecommerce/profitsharing/chapter3_3.shtml
     */
    post(data: Returnorders.PostHttpMethod.JsonDataRequest, config?: Returnorders.PostHttpMethod.RequestConfig): AxiosPromise<Returnorders.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Ecommerce {
  export interface Profitsharing {
    returnorders: Profitsharing.Returnorders
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
wxpay.v3.ecommerce.profitsharing.returnorders.post({
//                                            ^^^^
  sub_mchid,
  order_id,
  out_order_no,
  out_return_no,
  return_mchid,
  amount,
  description,
})
.then(
  ({ // [!code hl:25]
    data: {
      sub_mchid,
      order_id,
      out_order_no,
      out_return_no,
      return_mchid,
      amount,
      return_no,
      result,
      fail_reason,
      finish_time,
    },
  }) => ({
    sub_mchid,
    order_id,
    out_order_no,
    out_return_no,
    return_mchid,
    amount,
    return_no,
    result,
    fail_reason,
    finish_time,
  })
)
```

# 查询分账回退结果(平台收付通) {#get}

商户需要核实回退结果，可调用此接口查询回退结果;如果分账回退接口返回状态为处理中，可调用此接口查询回退结果。 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/ecommerce/profitsharing/chapter3_4.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Ecommerce.Profitsharing.Returnorders.GetHttpMethod {
  export interface RequestConfig extends AxiosRequestConfig {
    params: {
      sub_mchid: string
      order_id?: string
      out_order_no?: string
      out_return_no: string
    }
  }
  export interface WellformedResponse {
    sub_mchid: string
    order_id: string
    out_order_no: string
    out_return_no: string
    return_mchid: string
    amount: number
    return_no: string
    result: string
    fail_reason?: string
    finish_time: string | Date
  }
}
namespace WeChatPay.OpenAPI.V3.Ecommerce.Profitsharing {
  export interface Returnorders {
    /**
     * 查询分账回退结果API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/ecommerce/profitsharing/chapter3_4.shtml
     */
    get(config: Returnorders.GetHttpMethod.RequestConfig): AxiosPromise<Returnorders.GetHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Ecommerce {
  export interface Profitsharing {
    returnorders: Profitsharing.Returnorders
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
wxpay.v3.ecommerce.profitsharing.returnorders.get({
//                                            ^^^
  params,
})
.then(
  ({ // [!code hl:25]
    data: {
      sub_mchid,
      order_id,
      out_order_no,
      out_return_no,
      return_mchid,
      amount,
      return_no,
      result,
      fail_reason,
      finish_time,
    },
  }) => ({
    sub_mchid,
    order_id,
    out_order_no,
    out_return_no,
    return_mchid,
    amount,
    return_no,
    result,
    fail_reason,
    finish_time,
  })
)
```