---
title: 申请充值
description: 商户系统须通过调用此接口获取充值链接，随后发起充值流程
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/docs/partner/apis/platsolution-mch-recharge/recharge/apply.html)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Platsolution.Ecommerce.Recharges.Apply.PostHttpMethod {
  export interface JsonDataRequest {
    sub_mchid: string
    out_recharge_no: string
    recharge_scene: string
    account_type: string
    recharge_amount: {
      amount: number
      currency: string
    }
    notify_url: string
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
  }
  export interface WellformedResponse {
    recharge_id: string
    out_recharge_no: string
    recharge_url: string
  }
}
namespace WeChatPay.OpenAPI.V3.Platsolution.Ecommerce.Recharges {
  export interface Apply {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/docs/partner/apis/platsolution-mch-recharge/recharge/apply.html
     */
    (data: Apply.PostHttpMethod.JsonDataRequest, config?: Apply.PostHttpMethod.RequestConfig): AxiosPromise<Apply.PostHttpMethod.WellformedResponse>
    /**
     * 申请充值
     * @link https://pay.weixin.qq.com/docs/partner/apis/platsolution-mch-recharge/recharge/apply.html
     */
    post(data: Apply.PostHttpMethod.JsonDataRequest, config?: Apply.PostHttpMethod.RequestConfig): AxiosPromise<Apply.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Platsolution.Ecommerce {
  export interface Recharges {
    apply: Recharges.Apply
  }
}
namespace WeChatPay.OpenAPI.V3.Platsolution {
  export interface Ecommerce {
    recharges: Ecommerce.Recharges
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface Platsolution {
    ecommerce: Platsolution.Ecommerce
  }
}
namespace WeChatPay.OpenAPI {
  export interface V3 {
    platsolution: V3.Platsolution
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
wxpay.v3.platsolution.ecommerce.recharges.apply.post({
//                                              ^^^^
  sub_mchid,
  out_recharge_no,
  recharge_scene,
  account_type,
  recharge_amount,
  notify_url,
})
.then(
  ({ // [!code hl:11]
    data: {
      recharge_id,
      out_recharge_no,
      recharge_url,
    },
  }) => ({
    recharge_id,
    out_recharge_no,
    recharge_url,
  })
)
```
