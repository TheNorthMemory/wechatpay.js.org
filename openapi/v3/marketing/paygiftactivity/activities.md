---
title: 获取支付有礼活动列表
description: 商户根据一定过滤条件，查询已创建的支付有礼活动。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Marketing.Paygiftactivity.Activities.GetHttpMethod {
  export interface RequestConfig extends AxiosRequestConfig {
    params: {
      offset: number
      limit: number
      activity_name: string
      activity_status: string
      award_type: string
    }
  }
  export interface WellformedResponse {
    offset: number
    limit: number
    total_count: number
    activity_id: string
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing.Paygiftactivity {
  export interface Activities {
    /**
     * 获取支付有礼活动列表API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/marketing/paygiftactivity/chapter3_9.shtml
     */
    get(config: Activities.GetHttpMethod.RequestConfig): AxiosPromise<Activities.GetHttpMethod.WellformedResponse>
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
wxpay.v3.marketing.paygiftactivity.activities.get({
//                                            ^^^
  params,
})
.then(
  ({ // [!code hl:13]
    data: {
      offset,
      limit,
      total_count,
      activity_id,
    },
  }) => ({
    offset,
    limit,
    total_count,
    activity_id,
  })
)
```

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4012489126) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012493214)
