---
title: JSAPI下单并授权
description: 商户系统先通过预签约生成token或者用户免密签约后，再调用该接口在微信支付服务后台生成预支付交易单，返回正确的预支付交易会话标识后再按JSAPI方式调起支付。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/docs/merchant/apis/hide-jsapi-payment/direct-jsons/jsapi-contract-prepay.html)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Pay.Transactions.JsapiWithContract.PostHttpMethod {
  export interface JsonDataRequest {
    appid: string
    mchid: string
    description: string
    out_trade_no: string
    time_expire: string
    attach: string
    notify_url: string
    goods_tag: string
    support_fapiao: boolean
    amount: {
      total: number
      currency: string
    }
    payer: {
      openid: string
    }
    detail: {
      cost_price: number
      invoice_id: string
      goods_detail: {
        merchant_goods_id: string
        wechatpay_goods_id: string
        goods_name: string
        quantity: number
        unit_price: number
      }[]
    }
    scene_info: {
      payer_client_ip: string
      device_id: string
      store_info: {
        id: string
        name: string
        area_code: string
        address: string
      }
    }
    settle_info: {
      profit_sharing: boolean
    }
    contract_info: {
      token: string
      password_free_contract_id: string
    }
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
  }
  export interface WellformedResponse {
    prepay_id: string
  }
}
namespace WeChatPay.OpenAPI.V3.Pay.Transactions {
  export interface JsapiWithContract {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/docs/merchant/apis/hide-jsapi-payment/direct-jsons/jsapi-contract-prepay.html
     */
    (data: JsapiWithContract.PostHttpMethod.JsonDataRequest, config?: JsapiWithContract.PostHttpMethod.RequestConfig): AxiosPromise<JsapiWithContract.PostHttpMethod.WellformedResponse>
    /**
     * JSAPI下单并授权
     * @link https://pay.weixin.qq.com/docs/merchant/apis/hide-jsapi-payment/direct-jsons/jsapi-contract-prepay.html
     */
    post(data: JsapiWithContract.PostHttpMethod.JsonDataRequest, config?: JsapiWithContract.PostHttpMethod.RequestConfig): AxiosPromise<JsapiWithContract.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Pay {
  export interface Transactions {
    jsapiWithContract: Transactions.JsapiWithContract
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface Pay {
    transactions: Pay.Transactions
  }
}
namespace WeChatPay.OpenAPI {
  export interface V3 {
    pay: V3.Pay
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
wxpay.v3.pay.transactions.jsapiWithContract.post({
//                                          ^^^^
  appid,
  mchid,
  description,
  out_trade_no,
  time_expire,
  attach,
  notify_url,
  goods_tag,
  support_fapiao,
  amount,
  payer,
  detail,
  scene_info,
  settle_info,
  contract_info,
})
.then(
  ({ // [!code hl:7]
    data: {
      prepay_id,
    },
  }) => ({
    prepay_id,
  })
)
```
