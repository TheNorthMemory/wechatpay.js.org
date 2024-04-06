---
title: 下载批次核销明细
description: 可获取到某批次的核销明细数据，包括订单号、单品信息、银行流水号等，用于对账/数据分析。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/marketing/convention/chapter3_10.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Marketing.Favor.Stocks._stock_id_.UseFlow.GetHttpMethod {
  export interface RequestConfig extends AxiosRequestConfig {
    stock_id: string
  }
  export interface WellformedResponse {
    url: string
    hash_value: string
    hash_type: string
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing.Favor.Stocks._stock_id_ {
  export interface UseFlow {
    /**
     * 下载批次核销明细API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/marketing/convention/chapter3_10.shtml
     */
    get(config: UseFlow.GetHttpMethod.RequestConfig): AxiosPromise<UseFlow.GetHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing.Favor.Stocks {
  export interface _stock_id_ {
    useFlow: _stock_id_.UseFlow
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing.Favor {
  export interface Stocks {
    _stock_id_: Stocks._stock_id_
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing {
  export interface Favor {
    stocks: Favor.Stocks
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface Marketing {
    favor: Marketing.Favor
  }
}
namespace WeChatPay.OpenAPI {
  export interface V3 {
    marketing: V3.Marketing
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
wxpay.v3.marketing.favor.stocks._stock_id_.useFlow.get({
//                                                 ^^^
  stock_id,
})
.then(
  ({ // [!code hl:11]
    data: {
      url,
      hash_value,
      hash_type,
    },
  }) => ({
    url,
    hash_value,
    hash_type,
  })
)
```
