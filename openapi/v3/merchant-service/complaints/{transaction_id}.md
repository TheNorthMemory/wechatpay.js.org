---
title: 查询投诉详情
description: 商户可通过调用此接口，查询指定投诉的用户投诉详情，包含投诉内容、投诉订单、投诉人联系方式等信息，方便商户获取投诉详情处理投诉。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/tool/merchant-service/chapter3_8.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.MerchantService.Complaints._transaction_id_.GetHttpMethod {
  export interface RequestConfig extends AxiosRequestConfig {
    transaction_id: string
  }
  export interface WellformedResponse {
    out_trade_no: string
    complaint_time: string
    amount: number
    payer_phone: string
    complaint_detail: string
    complaint_state: string
    transaction_id: string
    frozen_end_time: string
    sub_mchid: string
    complaint_handle_state: string
  }
}
namespace WeChatPay.OpenAPI.V3.MerchantService.Complaints {
  export interface _transaction_id_ {
    /**
     * 查询投诉详情API
     * @deprecated - since 2020.11.27
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/tool/merchant-service/chapter3_8.shtml
     */
    get(config: _transaction_id_.GetHttpMethod.RequestConfig): AxiosPromise<_transaction_id_.GetHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.MerchantService {
  export interface Complaints {
    _transaction_id_: Complaints._transaction_id_
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface MerchantService {
    complaints: MerchantService.Complaints
  }
}
namespace WeChatPay.OpenAPI {
  export interface V3 {
    merchantService: V3.MerchantService
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
wxpay.v3.merchantService.complaints._transaction_id_.get({
//                                                   ^^^
  transaction_id,
})
.then(
  ({ // [!code hl:25]
    data: {
      out_trade_no,
      complaint_time,
      amount,
      payer_phone,
      complaint_detail,
      complaint_state,
      transaction_id,
      frozen_end_time,
      sub_mchid,
      complaint_handle_state,
    },
  }) => ({
    out_trade_no,
    complaint_time,
    amount,
    payer_phone,
    complaint_detail,
    complaint_state,
    transaction_id,
    frozen_end_time,
    sub_mchid,
    complaint_handle_state,
  })
)
```
