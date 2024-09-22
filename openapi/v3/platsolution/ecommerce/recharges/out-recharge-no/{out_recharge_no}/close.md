---
title: 关闭二级商户充值
description: 以下情况可调用关单接口：1、商家操作超出规定时间限制，为防止重复处理。2、系统主动终止服务不再接受新的请求
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/docs/partner/apis/platsolution-mch-recharge/recharge/close.html)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Platsolution.Ecommerce.Recharges.OutRechargeNo._out_recharge_no_.Close.PostHttpMethod {
  export interface JsonDataRequest {
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
    out_recharge_no: string
    params: {
      sub_mchid: string
    }
  }
  export interface WellformedResponse {
    sp_mchid: string
    sub_mchid: string
    recharge_id: string
    out_recharge_no: string
    recharge_channel: string
    account_type: string
    recharge_state: string
    recharge_scene: string
    recharge_state_desc: string
    recharge_amount: {
      amount: number
      currency: string
    }
    bank_transfer_info: {
      bill_no: string
      memo: string
      return_time: string
      return_reason: string
      bank_name: string
      bank_card_tail: string
    }
    qr_recharge_info: {
      openid: string
    }
    accept_time: string
    success_time: string
    close_time: string
  }
}
namespace WeChatPay.OpenAPI.V3.Platsolution.Ecommerce.Recharges.OutRechargeNo._out_recharge_no_ {
  export interface Close {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/docs/partner/apis/platsolution-mch-recharge/recharge/close.html
     */
    (data: Close.PostHttpMethod.JsonDataRequest, config: Close.PostHttpMethod.RequestConfig): AxiosPromise<Close.PostHttpMethod.WellformedResponse>
    /**
     * 关闭充值
     * @link https://pay.weixin.qq.com/docs/partner/apis/platsolution-mch-recharge/recharge/close.html
     */
    post(data: Close.PostHttpMethod.JsonDataRequest, config: Close.PostHttpMethod.RequestConfig): AxiosPromise<Close.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Platsolution.Ecommerce.Recharges.OutRechargeNo {
  export interface _out_recharge_no_ {
    close: _out_recharge_no_.Close
  }
}
namespace WeChatPay.OpenAPI.V3.Platsolution.Ecommerce.Recharges {
  export interface OutRechargeNo {
    _out_recharge_no_: OutRechargeNo._out_recharge_no_
  }
}
namespace WeChatPay.OpenAPI.V3.Platsolution.Ecommerce {
  export interface Recharges {
    outRechargeNo: Recharges.OutRechargeNo
  }
}
namespace WeChatPay.OpenAPI.V3.Platsolution {
  export interface Ecommerce {
    recharges: Ecommerce.Recharges
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface Platsolution {
    ecommerce: Platsolution.Ecommerce
  }
}
namespace WeChatPay.OpenAPI {
  export interface V3 {
    platsolution: V3.Platsolution
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
wxpay.v3.platsolution.ecommerce.recharges.outRechargeNo._out_recharge_no_.close.post({}, {
//                                                                              ^^^^
  out_recharge_no,
  params,
})
.then(
  ({ // [!code hl:35]
    data: {
      sp_mchid,
      sub_mchid,
      recharge_id,
      out_recharge_no,
      recharge_channel,
      account_type,
      recharge_state,
      recharge_scene,
      recharge_state_desc,
      recharge_amount,
      bank_transfer_info,
      qr_recharge_info,
      accept_time,
      success_time,
      close_time,
    },
  }) => ({
    sp_mchid,
    sub_mchid,
    recharge_id,
    out_recharge_no,
    recharge_channel,
    account_type,
    recharge_state,
    recharge_scene,
    recharge_state_desc,
    recharge_amount,
    bank_transfer_info,
    qr_recharge_info,
    accept_time,
    success_time,
    close_time,
  })
)
```
