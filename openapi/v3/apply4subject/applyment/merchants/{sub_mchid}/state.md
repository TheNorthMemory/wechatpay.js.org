---
title: 获取商户开户意愿确认状态
description: 当服务商需要确认微信支付子商户号是否完成确认时，如果调用此接口提到”已授权“状态，则说明该商户号已完成开户意愿确认。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Apply4subject.Applyment.Merchants._sub_mchid_.State.GetHttpMethod {
  export interface RequestConfig extends AxiosRequestConfig {
    sub_mchid: string
  }
  export interface WellformedResponse {
    authorize_state: 'AUTHORIZE_STATE_UNAUTHORIZED' | 'AUTHORIZE_STATE_AUTHORIZED'
  }
}
namespace WeChatPay.OpenAPI.V3.Apply4subject.Applyment.Merchants._sub_mchid_ {
  export interface State {
    /**
     * 获取商户开户意愿确认状态API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/applysubject/chapter5_4.shtml
     */
    get(config: State.GetHttpMethod.RequestConfig): AxiosPromise<State.GetHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Apply4subject.Applyment.Merchants {
  export interface _sub_mchid_ {
    state: _sub_mchid_.State
  }
}
namespace WeChatPay.OpenAPI.V3.Apply4subject.Applyment {
  export interface Merchants {
    _sub_mchid_: Merchants._sub_mchid_
  }
}
namespace WeChatPay.OpenAPI.V3.Apply4subject {
  export interface Applyment {
    merchants: Applyment.Merchants
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface Apply4subject {
    applyment: Apply4subject.Applyment
  }
}
namespace WeChatPay.OpenAPI {
  export interface V3 {
    apply4subject: V3.Apply4subject
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
wxpay.v3.apply4subject.applyment.merchants._sub_mchid_.state.get({
//                                                           ^^^
  sub_mchid,
})
.then(
  ({ // [!code hl:7]
    data: {
      authorize_state
    },
  }) => ({
    authorize_state
  })
)
```

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012467549)
