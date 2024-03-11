---
title: 查询风险信息
description: 从业机构/服务商/渠道商/商户可调用该接口，在商户订单支付完成后，进行订单风险查询，从而进行后置风险管控&生态建设。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/docs/partner/apis/risk-manage/trade-risk/query-trade-risk-information.html)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.MerchantRiskManage.TradeRiskInformation.GetHttpMethod {
  export interface RequestConfig extends AxiosRequestConfig {
    params: {
      sp_mchid: string
      acquiring_bank_id: string
      channel_id: string
      sub_mchid: string
      out_trade_no: string
      complaints_information: string
    }
  }
  export interface WellformedResponse {
    risk_score: number
    risk_type: string
    punish_type: string
    punish_description: string
  }
}
namespace WeChatPay.OpenAPI.V3.MerchantRiskManage {
  export interface TradeRiskInformation {
    /**
     * 查询风险信息
     * @link https://pay.weixin.qq.com/docs/partner/apis/risk-manage/trade-risk/query-trade-risk-information.html
     */
    get(config: TradeRiskInformation.GetHttpMethod.RequestConfig): AxiosPromise<TradeRiskInformation.GetHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface MerchantRiskManage {
    tradeRiskInformation: MerchantRiskManage.TradeRiskInformation
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
wxpay.v3.merchantRiskManage.tradeRiskInformation.get({
//                                               ^^^
  params,
})
.then(
  ({ // [!code hl:13]
    data: {
      risk_score,
      risk_type,
      punish_type,
      punish_description,
    },
  }) => ({
    risk_score,
    risk_type,
    punish_type,
    punish_description,
  })
)
```
