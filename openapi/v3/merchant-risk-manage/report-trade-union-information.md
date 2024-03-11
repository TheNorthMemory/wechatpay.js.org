---
title: 上报订单关联信息
description: 从业机构/服务商/渠道商/商户可调用该接口，在商户订单下单完成后，上报订单关联信息，以便后续在支付环节进行风险管控
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/docs/partner/apis/risk-manage/trade-risk/report-trade-risk-information.html)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.MerchantRiskManage.ReportTradeUnionInformation.PostHttpMethod {
  export interface JsonDataRequest {
    sp_mchid: string
    acquiring_bank_id: string
    channel_id: string
    sub_mchid: string
    out_trade_no: string
    openid: string
    phone: string
    certificates_number: string
    client_ip: string
    risk_level: number
    line_type: number
    goods_type: number
    seller_type: number
    is_need_deliver: boolean
    device_type: number
    userid: string
    phone_from: number
    seller_userid: string
    scene: number
    recharge_fields: {
      account_type: number
      account: string
    }
    living_expenses_fields: {
      acc_no: string
      type: number
      city: string
      address: string
      acc_name: string
      company_name: string
      amount: number
    }
    extra_fields1: string
    extra_fields2: string
    extra_fields3: string
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
    headers: {
      'Wechatpay-Serial': string
    }
  }
  export interface WellformedResponse {
    sp_mchid: string
    acquiring_bank_id: string
    channel_id: string
    sub_mchid: string
    out_trade_no: string
  }
}
namespace WeChatPay.OpenAPI.V3.MerchantRiskManage {
  export interface ReportTradeUnionInformation {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/docs/partner/apis/risk-manage/trade-risk/report-trade-risk-information.html
     */
    (data: ReportTradeUnionInformation.PostHttpMethod.JsonDataRequest, config: ReportTradeUnionInformation.PostHttpMethod.RequestConfig): AxiosPromise<ReportTradeUnionInformation.PostHttpMethod.WellformedResponse>
    /**
     * 上报订单关联信息
     * @link https://pay.weixin.qq.com/docs/partner/apis/risk-manage/trade-risk/report-trade-risk-information.html
     */
    post(data: ReportTradeUnionInformation.PostHttpMethod.JsonDataRequest, config: ReportTradeUnionInformation.PostHttpMethod.RequestConfig): AxiosPromise<ReportTradeUnionInformation.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface MerchantRiskManage {
    reportTradeUnionInformation: MerchantRiskManage.ReportTradeUnionInformation
  }
}
namespace WeChatPay.OpenAPI {
  export interface V3 {
    merchantRiskManage: V3.MerchantRiskManage
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
wxpay.v3.merchantRiskManage.reportTradeUnionInformation.post({
//                                                      ^^^^
  sp_mchid,
  acquiring_bank_id,
  channel_id,
  sub_mchid,
  out_trade_no,
  openid,
  phone,
  certificates_number,
  client_ip,
  risk_level,
  line_type,
  goods_type,
  seller_type,
  is_need_deliver,
  device_type,
  userid,
  phone_from,
  seller_userid,
  scene,
  recharge_fields,
  living_expenses_fields,
  extra_fields1,
  extra_fields2,
  extra_fields3,
})
.then(
  ({ // [!code hl:15]
    data: {
      sp_mchid,
      acquiring_bank_id,
      channel_id,
      sub_mchid,
      out_trade_no,
    },
  }) => ({
    sp_mchid,
    acquiring_bank_id,
    channel_id,
    sub_mchid,
    out_trade_no,
  })
)
```
