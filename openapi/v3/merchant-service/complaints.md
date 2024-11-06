---
title: 查询投诉信息
description: 商户可通过调用此接口，查询指定时间段的所有用户投诉信息，并在返回结果分页输出查询结果。对于服务商、渠道商，可通过调用此接口，查询指定子商户号对应子商户的投诉信息，若不指定，则查询所有子商户投诉信。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/tool/merchant-service/chapter3_1.shtml)

::: danger :no_entry_sign: {.im-deprecated}

本接口服务已于 `2020.11.27` (北京时间)下线，文档仅做留存参考。
:::

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.MerchantService.Complaints.GetHttpMethod {
  export interface RequestConfig extends AxiosRequestConfig {
    params: {
      limit: number
      offset: number
      begin_date: string
      end_date: string
      sub_mchid: string
    }
  }
  export interface WellformedResponse {
    offset: number
    limit: number
    total_count: number
    data: {
      out_trade_no: string
      complaint_time: string | Date
      amount: number
      payer_phone: string
      complaint_detail: string

      transaction_id: string
      frozen_end_time: string
      sub_mchid: string
    }[]
  }
}
namespace WeChatPay.OpenAPI.V3.MerchantService {
  export interface Complaints {
    /**
     * 查询投诉信息API
     * @deprecated - since 2020.11.27
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/tool/merchant-service/chapter3_1.shtml
     */
    get(config: Complaints.GetHttpMethod.RequestConfig): AxiosPromise<Complaints.GetHttpMethod.WellformedResponse>
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
wxpay.v3.merchantService.complaints.get({
//                                  ^^^
  params,
})
.then(
  ({ // [!code hl:13]
    data: {
      offset,
      limit,
      total_count,
      data,
    },
  }) => ({
    offset,
    limit,
    total_count,
    data,
  })
)
```
