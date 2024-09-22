---
title: 撤销资料变更申请单
description: 当申请单状态为编辑中/审核中/已驳回时，才支持撤销
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3_partner/Offline/apis/chapter11_3_4.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Mchalterapply.Mchsubjectalterapplyment._apply_id_.Revoke.PostHttpMethod {
  export interface JsonDataRequest {
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
    apply_id: string
  }
  export interface WellformedResponse {
    result: string
  }
}
namespace WeChatPay.OpenAPI.V3.Mchalterapply.Mchsubjectalterapplyment._apply_id_ {
  export interface Revoke {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3_partner/Offline/apis/chapter11_3_4.shtml
     */
    (data: Revoke.PostHttpMethod.JsonDataRequest, config: Revoke.PostHttpMethod.RequestConfig): AxiosPromise<Revoke.PostHttpMethod.WellformedResponse>
    /**
     * 撤销资料变更申请单
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3_partner/Offline/apis/chapter11_3_4.shtml
     */
    post(data: Revoke.PostHttpMethod.JsonDataRequest, config: Revoke.PostHttpMethod.RequestConfig): AxiosPromise<Revoke.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Mchalterapply.Mchsubjectalterapplyment {
  export interface _apply_id_ {
    revoke: _apply_id_.Revoke
  }
}
namespace WeChatPay.OpenAPI.V3.Mchalterapply {
  export interface Mchsubjectalterapplyment {
    _apply_id_: Mchsubjectalterapplyment._apply_id_
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface Mchalterapply {
    mchsubjectalterapplyment: Mchalterapply.Mchsubjectalterapplyment
  }
}
namespace WeChatPay.OpenAPI {
  export interface V3 {
    mchalterapply: V3.Mchalterapply
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
wxpay.v3.mchalterapply.mchsubjectalterapplyment._apply_id_.revoke.post({}, { apply_id })
//                                                                ^^^^
.then(
  ({ // [!code hl:7]
    data: {
      result,
    },
  }) => ({
    result,
  })
)
```
