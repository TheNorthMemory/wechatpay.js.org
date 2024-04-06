---
title: 查询活动发券商户号
description: 商户创建活动后，可以通过该接口查询支付有礼的发券商户号，用于管理活动。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/marketing/paygiftactivity/chapter3_5.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Marketing.Paygiftactivity.Activities._activity_id_.Merchants.GetHttpMethod {
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
      mchid: string
      merchant_name: string
      create_time: string | Date
      update_time: string | Date
    }[]
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing.Paygiftactivity.Activities._activity_id_ {
  export interface Merchants {
    /**
     * 查询活动发券商户号API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/marketing/paygiftactivity/chapter3_5.shtml
     */
    get(config: Merchants.GetHttpMethod.RequestConfig): AxiosPromise<Merchants.GetHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing.Paygiftactivity.Activities {
  export interface _activity_id_ {
    merchants: _activity_id_.Merchants
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
wxpay.v3.marketing.paygiftactivity.activities._activity_id_.merchants.get({
//                                                                    ^^^
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
