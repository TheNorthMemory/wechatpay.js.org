---
title: 受理单次预约商家转账
description: 商户可调用接口预先指定转账的单次计划，预创建预约记录并获取微信预约记录单号和跳转信息（package_info），再携带该（package_info）参数，通过微信SDK拉起微信支付客户端的用户确认页面。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/docs/partner/apis/platsolution-mch-transfer/transfer-reservation/transfer-reservation-apply.html)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Platsolution.MchTransfer.Reservation.Apply.PostHttpMethod {
  export interface JsonDataRequest {
    sub_mchid: string
    sp_appid: string
    sub_appid: string
    out_reservation_no: string
    transfer_scene_id: string
    estimated_date: string
    estimated_max_amount: number
    exact_amount: number
    openid: string
    user_real_name: string
    reserve_remark: string
    notify_url: string
    scene_report_data: {
      insurance_policy: {
        product_registration_no: string
        policy_no: string
        name: string
        withdrawal_no: string
        claim_no: string
      }
    }
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
    headers: {
      'Wechatpay-Serial': string
    }
  }
  export interface WellformedResponse {
    sub_mchid: string
    out_reservation_no: string
    reservation_id: string
    accept_time: string | Date
    state: string
    package_info: string
  }
}
namespace WeChatPay.OpenAPI.V3.Platsolution.MchTransfer.Reservation {
  export interface Apply {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/docs/partner/apis/platsolution-mch-transfer/transfer-reservation/transfer-reservation-apply.html
     */
    (data: Apply.PostHttpMethod.JsonDataRequest, config: Apply.PostHttpMethod.RequestConfig): AxiosPromise<Apply.PostHttpMethod.WellformedResponse>
    /**
     * 受理单次预约商家转账
     * @link https://pay.weixin.qq.com/docs/partner/apis/platsolution-mch-transfer/transfer-reservation/transfer-reservation-apply.html
     */
    post(data: Apply.PostHttpMethod.JsonDataRequest, config: Apply.PostHttpMethod.RequestConfig): AxiosPromise<Apply.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Platsolution.MchTransfer {
  export interface Reservation {
    apply: Reservation.Apply
  }
}
namespace WeChatPay.OpenAPI.V3.Platsolution {
  export interface MchTransfer {
    reservation: MchTransfer.Reservation
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface Platsolution {
    mchTransfer: Platsolution.MchTransfer
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
wxpay.v3.platsolution.mchTransfer.reservation.apply.post({
//                                                  ^^^^
  sub_mchid,
  sp_appid,
  sub_appid,
  out_reservation_no,
  transfer_scene_id,
  estimated_date,
  estimated_max_amount,
  exact_amount,
  openid,
  user_real_name,
  reserve_remark,
  notify_url,
  scene_report_data,
}, { headers })
.then(
  ({ // [!code hl:17]
    data: {
      sub_mchid,
      out_reservation_no,
      reservation_id,
      accept_time,
      state,
      package_info,
    },
  }) => ({
    sub_mchid,
    out_reservation_no,
    reservation_id,
    accept_time,
    state,
    package_info,
  })
)
```
