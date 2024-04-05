---
title: JSAPI场景预约扣费类型签约的预签约
description: 商户可调用本接口预先指定签约信息，生成预签约会话及对应的跳转URL，引导用户在微信内访问跳转签约流程的URL跳转至微信支付的页面。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/docs/partner/apis/entrusted-payment/partner/partner-jsapi-scheduled-deduct-pre-sign.html)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Papay.ScheduledDeductSign.Partner.Contracts.PreEntrustSign.Jsapi.PostHttpMethod {
  export interface JsonDataRequest {
    sp_appid: string
    sp_openid: string
    sub_mchid: string
    sub_appid: string
    sub_openid: string
    plan_id: number
    out_contract_code: string
    contract_display_account: string
    contract_notify_url: string
    out_user_code: string
    deduct_schedule: {
      estimated_deduct_date: string
      estimated_deduct_amount: {
        total: number
        currency: string
      }
      description: string
    }
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
  }
  export interface WellformedResponse {
    redirect_url: string
  }
}
namespace WeChatPay.OpenAPI.V3.Papay.ScheduledDeductSign.Partner.Contracts.PreEntrustSign {
  export interface Jsapi {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/docs/partner/apis/entrusted-payment/partner/partner-jsapi-scheduled-deduct-pre-sign.html
     */
    (data: Jsapi.PostHttpMethod.JsonDataRequest, config?: Jsapi.PostHttpMethod.RequestConfig): AxiosPromise<Jsapi.PostHttpMethod.WellformedResponse>
    /**
     * JSAPI场景预约扣费类型签约的预签约API
     * @link https://pay.weixin.qq.com/docs/partner/apis/entrusted-payment/partner/partner-jsapi-scheduled-deduct-pre-sign.html
     */
    post(data: Jsapi.PostHttpMethod.JsonDataRequest, config?: Jsapi.PostHttpMethod.RequestConfig): AxiosPromise<Jsapi.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Papay.ScheduledDeductSign.Partner.Contracts {
  export interface PreEntrustSign {
    jsapi: PreEntrustSign.Jsapi
  }
}
namespace WeChatPay.OpenAPI.V3.Papay.ScheduledDeductSign.Partner {
  export interface Contracts {
    preEntrustSign: Contracts.PreEntrustSign
  }
}
namespace WeChatPay.OpenAPI.V3.Papay.ScheduledDeductSign {
  export interface Partner {
    contracts: Partner.Contracts
  }
}
namespace WeChatPay.OpenAPI.V3.Papay {
  export interface ScheduledDeductSign {
    partner: ScheduledDeductSign.Partner
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface Papay {
    scheduledDeductSign: Papay.ScheduledDeductSign
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
wxpay.v3.papay.scheduledDeductSign.partner.contracts.preEntrustSign.jsapi.post({
//                                                                        ^^^^
  sp_appid,
  sp_openid,
  sub_mchid,
  sub_appid,
  sub_openid,
  plan_id,
  out_contract_code,
  contract_display_account,
  contract_notify_url,
  out_user_code,
  deduct_schedule,
})
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
