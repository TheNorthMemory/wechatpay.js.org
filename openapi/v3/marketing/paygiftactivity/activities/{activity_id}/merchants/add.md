---
title: 新增活动发券商户号
description: 商户创建活动后，可以通过该接口增加支付有礼的发券商户号，用于管理活动。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Marketing.Paygiftactivity.Activities._activity_id_.Merchants.Add.PostHttpMethod {
  export interface JsonDataRequest {
    merchant_id_list: string[]
    add_request_no: string
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
    activity_id: string
  }
  export interface WellformedResponse {
    activity_id: string
    add_time: string | Date
    invalid_merchant_id_list: {
      mchid: string
      invalid_reason: string
    }[]
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing.Paygiftactivity.Activities._activity_id_.Merchants {
  export interface Add {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/marketing/paygiftactivity/chapter3_8.shtml
     */
    (data: Add.PostHttpMethod.JsonDataRequest, config: Add.PostHttpMethod.RequestConfig): AxiosPromise<Add.PostHttpMethod.WellformedResponse>
    /**
     * 新增活动发券商户号API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/marketing/paygiftactivity/chapter3_8.shtml
     */
    post(data: Add.PostHttpMethod.JsonDataRequest, config: Add.PostHttpMethod.RequestConfig): AxiosPromise<Add.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing.Paygiftactivity.Activities._activity_id_ {
  export interface Merchants {
    add: Merchants.Add
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
wxpay.v3.marketing.paygiftactivity.activities._activity_id_.merchants.add.post({
//                                                                        ^^^^
  merchant_id_list,
  add_request_no,
})
.then(
  ({ // [!code hl:11]
    data: {
      activity_id,
      add_time,
      invalid_merchant_id_list,
    },
  }) => ({
    activity_id,
    add_time,
    invalid_merchant_id_list,
  })
)
```

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4012466671) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012466735)
