---
title: 发起异常退款
description: 提交退款申请后，查询退款确认状态为退款异常，可调用此接口发起异常退款处理。支持退款至用户、退款至交易商户银行账户两种处理方式。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/docs/merchant/apis/refund/refunds/create-abnormal-refund.html) [官方文档](https://pay.weixin.qq.com/docs/partner/apis/refund/refunds/create-abnormal-refund.html)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { BinaryLike } from 'crypto'
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Refund.Domestic.Refunds._refund_id_.ApplyAbnormalRefund.PostHttpMethod {
  export interface JsonDataRequest {
    sub_mchid?: string
    out_refund_no: string
    type: 'USER_BANK_CARD' | 'MERCHANT_BANK_CARD'
    bank_type?: string
    bank_account?: string
    real_name?: string
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
    refund_id: string
    headers: {
      'Wechatpay-Serial': typeof platformCertificateSerial
    }
  }
  export interface WellformedResponse {
    refund_id: string
    out_refund_no: string
    transaction_id: string
    out_trade_no: string
    channel: string
    user_received_account: string
    success_time: string
    create_time: string
    status: string
    funds_account: string
    amount: {
      total: number
      refund: number
      from: {
        account: string
        amount: number
      }[]
      payer_total: number
      payer_refund: number
      settlement_refund: number
      settlement_total: number
      discount_refund: number
      currency: string
    }
    promotion_detail?: {
      promotion_id: string
      scope: string
      type: string
      amount: number
      refund_amount: number
      goods_detail?: {
        merchant_goods_id: string
        wechatpay_goods_id: string
        goods_name: string
        unit_price: number
        refund_amount: number
        refund_quantity: number
      }[]
    }[]
  }
}
namespace WeChatPay.OpenAPI.V3.Refund.Domestic.Refunds._refund_id_ {
  export interface ApplyAbnormalRefund {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/docs/partner/apis/refund/refunds/create-abnormal-refund.html
     */
    (data: ApplyAbnormalRefund.PostHttpMethod.JsonDataRequest, config: ApplyAbnormalRefund.PostHttpMethod.RequestConfig): AxiosPromise<ApplyAbnormalRefund.PostHttpMethod.WellformedResponse>
    /**
     * 发起异常退款
     * @link https://pay.weixin.qq.com/docs/partner/apis/refund/refunds/create-abnormal-refund.html
     */
    post(data: ApplyAbnormalRefund.PostHttpMethod.JsonDataRequest, config: ApplyAbnormalRefund.PostHttpMethod.RequestConfig): AxiosPromise<ApplyAbnormalRefund.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Refund.Domestic.Refunds {
  export interface _refund_id_ {
    applyAbnormalRefund: _refund_id_.ApplyAbnormalRefund
  }
}
namespace WeChatPay.OpenAPI.V3.Refund.Domestic {
  export interface Refunds {
    _refund_id_: Refunds._refund_id_
  }
}
namespace WeChatPay.OpenAPI.V3.Refund {
  export interface Domestic {
    refunds: Domestic.Refunds
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface Refund {
    domestic: Refund.Domestic
  }
}
namespace WeChatPay.OpenAPI {
  export interface V3 {
    refund: V3.Refund
  }
}
export interface Wechatpay {
  /**
   * APIv3 endpoint
   */
  v3: WeChatPay.OpenAPI.V3
}
export var wxpay: Wechatpay
export var platformCertificateSerial: string
export var platformCertificateInstance: BinaryLike

// @filename: business.js
import { wxpay, platformCertificateSerial, platformCertificateInstance } from './virtual'
// ---cut---
const { Rsa } = require('wechatpay-axios-plugin')

wxpay.v3.refund.domestic.refunds._refund_id_.applyAbnormalRefund.post({
//                                                               ^^^^
  sub_mchid,
  out_refund_no,
  type,
  bank_type,
  bank_account: Rsa.encrypt('6225880103000000', platformCertificateInstance),
  real_name: Rsa.encrypt('张三', platformCertificateInstance),
}, { refund_id, headers, })
.then(
  ({ // [!code hl:16]
    data: {
      refund_id,
      out_refund_no,
      transaction_id,
      out_trade_no,
      channel,
      user_received_account,
      success_time,
      create_time,
      status,
      funds_account,
      amount,
      promotion_detail,
    },
  }) => amount
//      ^?
)
```

> [!IMPORTANT] 注意：
> 1. 这是一个**直连商户**、**合作伙伴**共用接口，区分以*wxpay*初始化时的**mchid**身份而定，当其是**合作伙伴**商户号时，请求参数的**sub_mchid**为必填参数
> 1. 退款至用户时，仅支持以下银行的借记卡：招行、交通银行、农行、建行、工商、中行、平安、浦发、中信、光大、民生、兴业、广发、邮储、宁波银行。
> 2. 请求频率限制：150qps，即每秒钟正常的申请退款请求次数不超过150次
