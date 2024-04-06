---
title: 服务人员信息更新
description: 用于服务商/用于服务商/商户开发者为商户更新门店服务人员的姓名、头像等信息
---

# {{ $frontmatter.title }} {#patch}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/smartguide/chapter3_4.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Smartguide.Guides._guide_id_.PatchHttpMethod {
  export interface JsonDataRequest {
    sub_mchid: string
    name: string
    mobile: string
    qr_code: string
    avatar: string
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
    guide_id: string
    headers: {
      'Wechatpay-Serial': string
    }
  }
  export interface WellformedResponse {
  }
}
namespace WeChatPay.OpenAPI.V3.Smartguide.Guides {
  export interface _guide_id_ {
    /**
     * 服务人员信息更新API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/smartguide/chapter3_4.shtml
     */
    patch(data: _guide_id_.PatchHttpMethod.JsonDataRequest, config: _guide_id_.PatchHttpMethod.RequestConfig): AxiosPromise<_guide_id_.PatchHttpMethod.WellformedResponse>
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
wxpay.v3.smartguide.guides._guide_id_.patch({
//                                    ^^^^^
  sub_mchid,
  name,
  mobile,
  qr_code,
  avatar,
}, { guide_id, headers, })
.then(({ status, }) => status === 204) // [!code hl]
```
