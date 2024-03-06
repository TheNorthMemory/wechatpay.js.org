---
title: 查询收付通子商户服务绑定结果(合作伙伴模式)
description: 收付通服务商查询子商户的支付分服务绑定结果
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3_partner/Offline/apis/chapter6_2_14.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Payscore.Partner.ServiceAccountApplications._out_apply_no_.GetHttpMethod {
  export interface RequestConfig extends AxiosRequestConfig {
    out_order_no: string
  }
  export interface WellformedResponse {
    service_id: string
    mchid: string
    appid: string
    sub_mchid: string
    sub_appid: string
    out_apply_no: string
    result_notify_url: string
    apply_state: string
    reject_reason: string
  }
}
namespace WeChatPay.OpenAPI.V3.Payscore.Partner.ServiceAccountApplications {
  export interface _out_apply_no_ {
    /**
     * 查询收付通子商户服务绑定结果
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3_partner/Offline/apis/chapter6_2_14.shtml
     */
    get(config: _out_apply_no_.GetHttpMethod.RequestConfig): AxiosPromise<_out_apply_no_.GetHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Payscore.Partner {
  export interface ServiceAccountApplications {
    _out_apply_no_: ServiceAccountApplications._out_apply_no_
  }
}
namespace WeChatPay.OpenAPI.V3.Payscore {
  export interface Partner {
    serviceAccountApplications: Partner.ServiceAccountApplications
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface Payscore {
    partner: Payscore.Partner
  }
}
namespace WeChatPay.OpenAPI {
  export interface V3 {
    payscore: V3.Payscore
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
wxpay.v3.payscore.partner.serviceAccountApplications._out_apply_no_.get({
//                                                                  ^^^
  out_order_no,
})
.then(
  ({ // [!code hl:23]
    data: {
      service_id,
      mchid,
      appid,
      sub_mchid,
      sub_appid,
      out_apply_no,
      result_notify_url,
      apply_state,
      reject_reason,
    },
  }) => ({
    service_id,
    mchid,
    appid,
    sub_mchid,
    sub_appid,
    out_apply_no,
    result_notify_url,
    apply_state,
    reject_reason,
  })
)
```
