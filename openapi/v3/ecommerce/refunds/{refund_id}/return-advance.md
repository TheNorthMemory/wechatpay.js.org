---
title: 垫付退款回补(平台收付通)
description: 提交垫付退款后，发起退款方可通过该接口发起垫付退款资金回补，把退款垫付的资金从二级商户回补到电商平台账户。
---

# 垫付退款回补(平台收付通) {#post}

提交垫付退款后，发起退款方可通过该接口发起垫付退款资金回补，把退款垫付的资金从二级商户回补到电商平台账户。 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3_partner/apis/chapter7_6_4.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Ecommerce.Refunds._refund_id_.ReturnAdvance.PostHttpMethod {
  export interface JsonDataRequest {
    sub_mchid: string
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
    refund_id: string
  }
  export interface WellformedResponse {
    refund_id: string
    advance_return_id: string
    return_amount: number
    payer_mchid: string
    payer_account: string
    payee_mchid: string
    payee_account: string
    result: string
    success_time: string
  }
}
namespace WeChatPay.OpenAPI.V3.Ecommerce.Refunds._refund_id_ {
  export interface ReturnAdvance {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3_partner/apis/chapter7_6_4.shtml
     */
    (data: ReturnAdvance.PostHttpMethod.JsonDataRequest, config: ReturnAdvance.PostHttpMethod.RequestConfig): AxiosPromise<ReturnAdvance.PostHttpMethod.WellformedResponse>
    /**
     * 垫付退款回补API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3_partner/apis/chapter7_6_4.shtml
     */
    post(data: ReturnAdvance.PostHttpMethod.JsonDataRequest, config: ReturnAdvance.PostHttpMethod.RequestConfig): AxiosPromise<ReturnAdvance.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Ecommerce.Refunds {
  export interface _refund_id_ {
    returnAdvance: _refund_id_.ReturnAdvance
  }
}
namespace WeChatPay.OpenAPI.V3.Ecommerce {
  export interface Refunds {
    _refund_id_: Refunds._refund_id_
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface Ecommerce {
    refunds: Ecommerce.Refunds
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
wxpay.v3.ecommerce.refunds._refund_id_.returnAdvance.post({
//                                                   ^^^^
  sub_mchid,
}, { refund_id })
.then(
  ({ // [!code hl:23]
    data: {
      refund_id,
      advance_return_id,
      return_amount,
      payer_mchid,
      payer_account,
      payee_mchid,
      payee_account,
      result,
      success_time,
    },
  }) => ({
    refund_id,
    advance_return_id,
    return_amount,
    payer_mchid,
    payer_account,
    payee_mchid,
    payee_account,
    result,
    success_time,
  })
)
```

# 查询垫付回补结果(平台收付通) {#get}

提交垫付退款回补后，通过调用该接口查询垫付回补结果。 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3_partner/apis/chapter7_6_5.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Ecommerce.Refunds._refund_id_.ReturnAdvance.GetHttpMethod {
  export interface RequestConfig extends AxiosRequestConfig {
    refund_id: string
    params: {
      sub_mchid: string
    }
  }
  export interface WellformedResponse {
    refund_id: string
    advance_return_id: string
    return_amount: number
    payer_mchid: string
    payer_account: string
    payee_mchid: string
    payee_account: string
    result: string
    success_time: string
  }
}
namespace WeChatPay.OpenAPI.V3.Ecommerce.Refunds._refund_id_ {
  export interface ReturnAdvance {
    /**
     * 查询垫付回补结果API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3_partner/apis/chapter7_6_5.shtml
     */
    get(config: ReturnAdvance.GetHttpMethod.RequestConfig): AxiosPromise<ReturnAdvance.GetHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Ecommerce.Refunds {
  export interface _refund_id_ {
    returnAdvance: _refund_id_.ReturnAdvance
  }
}
namespace WeChatPay.OpenAPI.V3.Ecommerce {
  export interface Refunds {
    _refund_id_: Refunds._refund_id_
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface Ecommerce {
    refunds: Ecommerce.Refunds
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
wxpay.v3.ecommerce.refunds._refund_id_.returnAdvance.get({
//                                                   ^^^
  refund_id,
  params,
})
.then(
  ({ // [!code hl:23]
    data: {
      refund_id,
      advance_return_id,
      return_amount,
      payer_mchid,
      payer_account,
      payee_mchid,
      payee_account,
      result,
      success_time,
    },
  }) => ({
    refund_id,
    advance_return_id,
    return_amount,
    payer_mchid,
    payer_account,
    payee_mchid,
    payee_account,
    result,
    success_time,
  })
)
```
