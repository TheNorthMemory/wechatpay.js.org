---
title: 保险商户JSAPI预签约
description: 商户可调用本接口预先指定签约及交易信息（交易信息可选填），生成预签约会话及对应的跳转URL，引导用户在微信内访问跳转URL跳转至微信支付的页面。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/docs/merchant/apis/insurance-entrusted-payment/insurance/jsapi-sign-and-create-transaction.html)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Papay.InsuranceSign.Contracts.PreEntrustSign.Jsapi.PostHttpMethod {
  export interface JsonDataRequest {
    appid: string
    openid: string
    plan_id: number
    out_contract_code: string
    insured_display_name: string
    contract_notify_url: string
    policy_start_date: string
    policy_end_date: string
    policy_periods: {
      policy_period_id: number
      estimated_deduct_date: string
      estimated_deduct_amount: {
        total: number
        currency: string
      }
    }[]
    amount: {
      total: number
      currency: string
    }
    out_trade_no: string
    description: string
    transaction_notify_url: string
    out_user_code: string
    goods_tag: string
    attach: string
    can_auto_insure: boolean
    can_auto_reinsure: boolean
    real_identity: {
      real_name: string
      id_card_number: string
      identity_type: string
    }
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
    headers: {
      'Wechatpay-Serial': string
    }
  }
  export interface WellformedResponse {
    redirect_url: string
  }
}
namespace WeChatPay.OpenAPI.V3.Papay.InsuranceSign.Contracts.PreEntrustSign {
  export interface Jsapi {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/docs/merchant/apis/insurance-entrusted-payment/insurance/jsapi-sign-and-create-transaction.html
     */
    (data: Jsapi.PostHttpMethod.JsonDataRequest, config: Jsapi.PostHttpMethod.RequestConfig): AxiosPromise<Jsapi.PostHttpMethod.WellformedResponse>
    /**
     * 保险商户JSAPI预签约API
     * @link https://pay.weixin.qq.com/docs/merchant/apis/insurance-entrusted-payment/insurance/jsapi-sign-and-create-transaction.html
     */
    post(data: Jsapi.PostHttpMethod.JsonDataRequest, config: Jsapi.PostHttpMethod.RequestConfig): AxiosPromise<Jsapi.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Papay.InsuranceSign.Contracts {
  export interface PreEntrustSign {
    jsapi: PreEntrustSign.Jsapi
  }
}
namespace WeChatPay.OpenAPI.V3.Papay.InsuranceSign {
  export interface Contracts {
    preEntrustSign: Contracts.PreEntrustSign
  }
}
namespace WeChatPay.OpenAPI.V3.Papay {
  export interface InsuranceSign {
    contracts: InsuranceSign.Contracts
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface Papay {
    insuranceSign: Papay.InsuranceSign
  }
}
namespace WeChatPay.OpenAPI {
  export interface V3 {
    papay: V3.Papay
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
wxpay.v3.papay.insuranceSign.contracts.preEntrustSign.jsapi.post({
//                                                          ^^^^
  appid,
  openid,
  plan_id,
  out_contract_code,
  insured_display_name,
  contract_notify_url,
  policy_start_date,
  policy_end_date,
  policy_periods,
  amount,
  out_trade_no,
  description,
  transaction_notify_url,
  out_user_code,
  goods_tag,
  attach,
  can_auto_insure,
  can_auto_reinsure,
  real_identity,
}, { headers, })
.then(
  ({ // [!code hl:7]
    data: {
      redirect_url,
    },
  }) => ({
    redirect_url,
  })
)
```
