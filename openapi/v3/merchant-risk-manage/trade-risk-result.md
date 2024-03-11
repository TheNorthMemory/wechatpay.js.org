---
title: 处置结果回传
description: 从业机构/服务商/渠道商/商户查询订单风险后，调用该接口回传对风险订单/风险商户的调查、处置信息.
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/docs/partner/apis/risk-manage/trade-risk-result/create-trade-risk-result.html)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.MerchantRiskManage.TradeRiskResult.PostHttpMethod {
  export interface JsonDataRequest {
    sp_mchid: string
    acquiring_bank_id: string
    channel_id: string
    sub_mchid: string
    out_trade_no: string
    risk_type: string
    punish_type: string
    additional_punish_type: string
    complaints_information: string
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
  }
  export interface WellformedResponse {
    sp_mchid: string
    acquiring_bank_id: string
    channel_id: string
    sub_mchid: string
    out_trade_no: string
    risk_type: string
    punish_type: string
    additional_punish_type: string
    punish_description: string
  }
}
namespace WeChatPay.OpenAPI.V3.MerchantRiskManage {
  export interface TradeRiskResult {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/docs/partner/apis/risk-manage/trade-risk-result/create-trade-risk-result.html
     */
    (data: TradeRiskResult.PostHttpMethod.JsonDataRequest, config?: TradeRiskResult.PostHttpMethod.RequestConfig): AxiosPromise<TradeRiskResult.PostHttpMethod.WellformedResponse>
    /**
     * 处置结果回传
     * @link https://pay.weixin.qq.com/docs/partner/apis/risk-manage/trade-risk-result/create-trade-risk-result.html
     */
    post(data: TradeRiskResult.PostHttpMethod.JsonDataRequest, config?: TradeRiskResult.PostHttpMethod.RequestConfig): AxiosPromise<TradeRiskResult.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface MerchantRiskManage {
    tradeRiskResult: MerchantRiskManage.TradeRiskResult
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
wxpay.v3.merchantRiskManage.tradeRiskResult.post({
//                                          ^^^^
  sp_mchid,
  acquiring_bank_id,
  channel_id,
  sub_mchid,
  out_trade_no,
  risk_type,
  punish_type,
  additional_punish_type,
  complaints_information,
})
.then(
  ({ // [!code hl:23]
    data: {
      sp_mchid,
      acquiring_bank_id,
      channel_id,
      sub_mchid,
      out_trade_no,
      risk_type,
      punish_type,
      additional_punish_type,
      punish_description,
    },
  }) => ({
    sp_mchid,
    acquiring_bank_id,
    channel_id,
    sub_mchid,
    out_trade_no,
    risk_type,
    punish_type,
    additional_punish_type,
    punish_description,
  })
)
```
