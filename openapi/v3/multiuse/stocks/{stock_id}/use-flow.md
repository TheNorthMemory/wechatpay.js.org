---
title: 下载批次核销明细(消费金)
description: 可获取到某批次的核销明细数据，包括订单号、单品信息、银行流水号等，用于对账/数据分析。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/docs/merchant/apis/multiuse-coupon/stock/use-flow.html)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Multiuse.Stocks._stock_id_.UseFlow.GetHttpMethod {
  export interface RequestConfig extends AxiosRequestConfig {
    stock_id: string
  }
  export interface WellformedResponse {
    url: string
  }
}
namespace WeChatPay.OpenAPI.V3.Multiuse.Stocks._stock_id_ {
  export interface UseFlow {
    /**
     * 下载核销明细
     * @link https://pay.weixin.qq.com/docs/merchant/apis/multiuse-coupon/stock/use-flow.html
     */
    get(config: UseFlow.GetHttpMethod.RequestConfig): AxiosPromise<UseFlow.GetHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Multiuse.Stocks {
  export interface _stock_id_ {
    useFlow: _stock_id_.UseFlow
  }
}
namespace WeChatPay.OpenAPI.V3.Multiuse {
  export interface Stocks {
    _stock_id_: Stocks._stock_id_
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface Multiuse {
    stocks: Multiuse.Stocks
  }
}
namespace WeChatPay.OpenAPI {
  export interface V3 {
    multiuse: V3.Multiuse
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
wxpay.v3.multiuse.stocks._stock_id_.useFlow.get({
//                                          ^^^
  stock_id,
})
.then(
  ({ // [!code hl:7]
    data: {
      url,
    },
  }) => ({
    url,
  })
)
```
