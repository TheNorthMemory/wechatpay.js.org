---
title: 终止活动
description: 将活动终止，不会再被曝光
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Marketing.MembercardActivity.Activities._activity_id_.Terminate.PostHttpMethod {
  export interface JsonDataRequest {
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
    activity_id: string
  }
  export interface WellformedResponse {
    activity_id: string
    terminate_time: string
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing.MembercardActivity.Activities._activity_id_ {
  export interface Terminate {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/marketing/membercard_open/chapter8_2.shtml
     * @link https://pay.weixin.qq.com/docs/merchant/apis/membership-card/member-gift/create-activity.html
     */
    (data: Terminate.PostHttpMethod.JsonDataRequest, config: Terminate.PostHttpMethod.RequestConfig): AxiosPromise<Terminate.PostHttpMethod.WellformedResponse>
    /**
     * 终止活动API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/marketing/membercard_open/chapter8_2.shtml
     * @link https://pay.weixin.qq.com/docs/merchant/apis/membership-card/member-gift/create-activity.html
     */
    post(data: Terminate.PostHttpMethod.JsonDataRequest, config: Terminate.PostHttpMethod.RequestConfig): AxiosPromise<Terminate.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing.MembercardActivity.Activities {
  export interface _activity_id_ {
    terminate: _activity_id_.Terminate
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing.MembercardActivity {
  export interface Activities {
    _activity_id_: Activities._activity_id_
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing {
  export interface MembercardActivity {
    activities: MembercardActivity.Activities
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface Marketing {
    membercardActivity: Marketing.MembercardActivity
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
wxpay.v3.marketing.membercardActivity.activities._activity_id_.terminate.post({}, { activity_id, })
//                                                                       ^^^^
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

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4012553381) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012714466)
