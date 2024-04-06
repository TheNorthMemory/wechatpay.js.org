---
title: 删除活动发券商户号
description: 商户创建活动后，可以通过该接口删除支付有礼的发券商户号，用于管理活动。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/marketing/paygiftactivity/chapter3_10.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Marketing.Paygiftactivity.Activities._activity_id_.Merchants.Delete.PostHttpMethod {
  export interface JsonDataRequest {
    merchant_id_list: string[]
    delete_request_no: string
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
    activity_id: string
  }
  export interface WellformedResponse {
    activity_id: string
    delete_time: string | Date
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing.Paygiftactivity.Activities._activity_id_.Merchants {
  export interface Delete {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/marketing/paygiftactivity/chapter3_10.shtml
     */
    (data: Delete.PostHttpMethod.JsonDataRequest, config: Delete.PostHttpMethod.RequestConfig): AxiosPromise<Delete.PostHttpMethod.WellformedResponse>
    /**
     * 删除活动发券商户号API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/marketing/paygiftactivity/chapter3_10.shtml
     */
    post(data: Delete.PostHttpMethod.JsonDataRequest, config: Delete.PostHttpMethod.RequestConfig): AxiosPromise<Delete.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing.Paygiftactivity.Activities._activity_id_ {
  export interface Merchants {
    Delete: Merchants.Delete
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
wxpay.v3.marketing.paygiftactivity.activities._activity_id_.merchants.Delete.post({
//                                                                           ^^^^
  merchant_id_list,
  delete_request_no,
})
.then(
  ({ // [!code hl:9]
    data: {
      activity_id,
      delete_time,
    },
  }) => ({
    activity_id,
    delete_time,
  })
)
```
