---
title: 服务人员分配
description: 用于服务商/商户开发者在顾客下单后为顾客分配服务人员使用。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/smartguide/chapter3_2.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Smartguide.Guides._guide_id_.Assign.PostHttpMethod {
  export interface JsonDataRequest {
    sub_mchid: string
    out_trade_no: string
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
    guide_id: string
  }
  export interface WellformedResponse {
  }
}
namespace WeChatPay.OpenAPI.V3.Smartguide.Guides._guide_id_ {
  export interface Assign {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/smartguide/chapter3_2.shtml
     */
    (data: Assign.PostHttpMethod.JsonDataRequest, config: Assign.PostHttpMethod.RequestConfig): AxiosPromise<Assign.PostHttpMethod.WellformedResponse>
    /**
     * 服务人员分配API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/smartguide/chapter3_2.shtml
     */
    post(data: Assign.PostHttpMethod.JsonDataRequest, config: Assign.PostHttpMethod.RequestConfig): AxiosPromise<Assign.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Smartguide.Guides {
  export interface _guide_id_ {
    assign: _guide_id_.Assign
  }
}
namespace WeChatPay.OpenAPI.V3.Smartguide {
  export interface Guides {
    _guide_id_: Guides._guide_id_
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface Smartguide {
    guides: Smartguide.Guides
  }
}
namespace WeChatPay.OpenAPI {
  export interface V3 {
    smartguide: V3.Smartguide
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
wxpay.v3.smartguide.guides._guide_id_.assign.post({
//                                           ^^^^
  sub_mchid,
  out_trade_no,
}, { guide_id })
.then(({ status, }) => status === 204) // [!code hl]
```
