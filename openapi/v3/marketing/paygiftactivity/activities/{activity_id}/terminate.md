---
title: 终止活动
description: 商户可通过该接口停止支付有礼活动。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/marketing/paygiftactivity/chapter3_7.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Marketing.Paygiftactivity.Activities._activity_id_.Terminate.PostHttpMethod {
  export interface JsonDataRequest {
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
    activity_id: string
  }
  export interface WellformedResponse {
    activity_id: string
    terminate_time: string | Date
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing.Paygiftactivity.Activities._activity_id_ {
  export interface Terminate {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/marketing/paygiftactivity/chapter3_7.shtml
     */
    (data: Terminate.PostHttpMethod.JsonDataRequest, config: Terminate.PostHttpMethod.RequestConfig): AxiosPromise<Terminate.PostHttpMethod.WellformedResponse>
    /**
     * 终止活动API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/marketing/paygiftactivity/chapter3_7.shtml
     */
    post(data: Terminate.PostHttpMethod.JsonDataRequest, config: Terminate.PostHttpMethod.RequestConfig): AxiosPromise<Terminate.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing.Paygiftactivity.Activities {
  export interface _activity_id_ {
    terminate: _activity_id_.Terminate
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
wxpay.v3.marketing.paygiftactivity.activities._activity_id_.terminate.post({
//                                                                    ^^^^

})
.then(
  ({ // [!code hl:9]
    data: {
      activity_id,
      terminate_time,
    },
  }) => ({
    activity_id,
    terminate_time,
  })
)
```
