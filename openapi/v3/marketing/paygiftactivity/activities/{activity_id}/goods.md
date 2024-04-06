---
title: 查询活动指定商品列表
description: 商户创建活动后，可以通过该接口查询支付有礼的活动指定商品，用于管理活动。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/marketing/paygiftactivity/chapter3_6.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Marketing.Paygiftactivity.Activities._activity_id_.Goods.GetHttpMethod {
  export interface RequestConfig extends AxiosRequestConfig {
    activity_id: string
    params: {
      offset: number
      limit: number
    }
  }
  export interface WellformedResponse {
    offset: number
    limit: number
    total_count: number
    activity_id: string
    data: {
      goods_id: string
      create_time: string | Date
      update_time: string | Date
    }[]
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing.Paygiftactivity.Activities._activity_id_ {
  export interface Goods {
    /**
     * 查询活动指定商品列表API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/marketing/paygiftactivity/chapter3_6.shtml
     */
    get(config: Goods.GetHttpMethod.RequestConfig): AxiosPromise<Goods.GetHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing.Paygiftactivity.Activities {
  export interface _activity_id_ {
    goods: _activity_id_.Goods
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing.Paygiftactivity {
  export interface Activities {
    _activity_id_: Activities._activity_id_
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing {
  export interface Paygiftactivity {
    activities: Paygiftactivity.Activities
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface Marketing {
    paygiftactivity: Marketing.Paygiftactivity
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
wxpay.v3.marketing.paygiftactivity.activities._activity_id_.goods.get({
//                                                                ^^^
  activity_id,
  params,
})
.then(
  ({ // [!code hl:15]
    data: {
      offset,
      limit,
      total_count,
      activity_id,
      data,
    },
  }) => ({
    offset,
    limit,
    total_count,
    activity_id,
    data,
  })
)
```
