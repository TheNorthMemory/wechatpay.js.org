---
title: 下载批次退款明细(消费金)
description: 可获取到某批次的退款明细数据，包括订单号、单品信息、银行流水号等，用于对账/数据分析。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/docs/merchant/apis/multiuse-coupon/stock/refund-flow.html)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Multiuse.Stocks._stock_id_.RefundFlow.GetHttpMethod {
  export interface RequestConfig extends AxiosRequestConfig {
    stock_id: string
  }
  export interface WellformedResponse {
    url: string
  }
}
namespace WeChatPay.OpenAPI.V3.Multiuse.Stocks._stock_id_ {
  export interface RefundFlow {
    /**
     * 下载批次退款明细
     * @link https://pay.weixin.qq.com/docs/merchant/apis/multiuse-coupon/stock/refund-flow.html
     */
    get(config: RefundFlow.GetHttpMethod.RequestConfig): AxiosPromise<RefundFlow.GetHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Multiuse.Stocks {
  export interface _stock_id_ {
    refundFlow: _stock_id_.RefundFlow
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
wxpay.v3.multiuse.stocks._stock_id_.refundFlow.get({
//                                             ^^^
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
