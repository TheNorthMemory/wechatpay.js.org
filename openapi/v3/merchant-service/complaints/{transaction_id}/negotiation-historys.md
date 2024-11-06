---
title: 查询投诉协商历史
description: 商户可通过调用此接口，查询指定投诉的用户商户协商历史，方便商户根据处理历史来制定后续处理方案。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/tool/merchant-service/chapter3_7.shtml)

::: danger :no_entry_sign: {.im-deprecated}

本接口服务已于 `2020.11.27` (北京时间)下线，文档仅做留存参考。
:::

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.MerchantService.Complaints._transaction_id_.NegotiationHistorys.GetHttpMethod {
  export interface RequestConfig extends AxiosRequestConfig {
    transaction_id: string
  }
  export interface WellformedResponse {
    complaint_negotiation_history: {
      operate_user: string
      operate_time: string
      operate_type: string
      operate_details: string
      image_list: []
    }[]
  }
}
namespace WeChatPay.OpenAPI.V3.MerchantService.Complaints._transaction_id_ {
  export interface NegotiationHistorys {
    /**
     * 查询投诉协商历史API
     * @deprecated - since 2021.01.08
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/tool/merchant-service/chapter3_7.shtml
     */
    get(config: NegotiationHistorys.GetHttpMethod.RequestConfig): AxiosPromise<NegotiationHistorys.GetHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.MerchantService.Complaints {
  export interface _transaction_id_ {
    negotiationHistorys: _transaction_id_.NegotiationHistorys
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
wxpay.v3.merchantService.complaints._transaction_id_.negotiationHistorys.get({
//                                                                       ^^^
  transaction_id,
})
.then(
  ({ // [!code hl:7]
    data: {
      complaint_negotiation_history,
    },
  }) => ({
    complaint_negotiation_history,
  })
)
```
