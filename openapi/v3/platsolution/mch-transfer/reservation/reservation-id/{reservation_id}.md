---
title: 微信支付预约单号查询预约商家转账记录
description: 商户可通过接口查询预约商家转账记录详情。预计最晚转账日期、预计最大转账金额等预约相关信息，仅在预约记录状态为已预约或已关闭且关闭原因不为用户超时未确认、商户通过API主动关闭已受理的记录、预约失败后关闭时返回。API提供的查询时限为3个月，创建时间超过3个月的预约记录不支持查询。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/docs/partner/apis/platsolution-mch-transfer/transfer-reservation/transfer-reservation-get-by-id.html)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Platsolution.MchTransfer.Reservation.ReservationId._reservation_id_.GetHttpMethod {
  export interface RequestConfig extends AxiosRequestConfig {
    reservation_id: string
    params: {
      sub_mchid: string
    }
  }
  export interface WellformedResponse {
    sp_mchid: string
    sub_mchid: string
    sp_appid: string
    sub_appid: string
    reservation_id: string
    out_reservation_no: string
    transfer_scene_id: string
    estimated_date: string
    estimated_max_amount: number
    exact_amount: number
    openid: string
    bank_type: string
    state: string
    accept_time: string
    reserve_time: string
    close_info: {
      close_time: string
      close_reason: string
    }
  }
}
namespace WeChatPay.OpenAPI.V3.Platsolution.MchTransfer.Reservation.ReservationId {
  export interface _reservation_id_ {
    /**
     * 微信支付预约单号查询预约商家转账记录
     * @link https://pay.weixin.qq.com/docs/partner/apis/platsolution-mch-transfer/transfer-reservation/transfer-reservation-get-by-id.html
     */
    get(config: _reservation_id_.GetHttpMethod.RequestConfig): AxiosPromise<_reservation_id_.GetHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Platsolution.MchTransfer.Reservation {
  export interface ReservationId {
    _reservation_id_: ReservationId._reservation_id_
  }
}
namespace WeChatPay.OpenAPI.V3.Platsolution.MchTransfer {
  export interface Reservation {
    reservationId: Reservation.ReservationId
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
wxpay.v3.platsolution.mchTransfer.reservation.reservationId._reservation_id_.get({
//                                                                           ^^^
  reservation_id,
  params,
})
.then(
  ({ // [!code hl:37]
    data: {
      sp_mchid,
      sub_mchid,
      sp_appid,
      sub_appid,
      reservation_id,
      out_reservation_no,
      transfer_scene_id,
      estimated_date,
      estimated_max_amount,
      exact_amount,
      openid,
      bank_type,
      state,
      accept_time,
      reserve_time,
      close_info,
    },
  }) => ({
    sp_mchid,
    sub_mchid,
    sp_appid,
    sub_appid,
    reservation_id,
    out_reservation_no,
    transfer_scene_id,
    estimated_date,
    estimated_max_amount,
    exact_amount,
    openid,
    bank_type,
    state,
    accept_time,
    reserve_time,
    close_info,
  })
)
```
