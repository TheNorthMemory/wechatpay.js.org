---
title: 获取用户填写的抬头
description: 商户调用本接口，检查用户是否已完成抬头填写，并获取用户填写的抬头信息。在微信支付场景下，若该笔订单在下单时指定在支付凭证上展示开票入口，则也可以调用本接口查询用户填写的抬头。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/docs/merchant/apis/fapiao/user-title/get-user-title.html) [官方文档](https://pay.weixin.qq.com/docs/partner/apis/fapiao/user-title/get-user-title.html)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.NewTaxControlFapiao.UserTitle.GetHttpMethod {
  export interface RequestConfig extends AxiosRequestConfig {
    params: {
      sub_mchid?: string
      scene: 'WITH_WECHATPAY' | 'WITHOUT_WECHATPAY'
      fapiao_apply_id: string
    }
  }
  export interface WellformedResponse {
    type: string
    name: string
    taxpayer_id: string
    address: string
    telephone: string
    bank_name: string
    bank_account: string
    phone: string
    email: string
  }
}
namespace WeChatPay.OpenAPI.V3.NewTaxControlFapiao {
  export interface UserTitle {
    /**
     * 获取用户填写的抬头
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/new-tax-control-fapiao/chapter3_6.shtml
     */
    get(config: UserTitle.GetHttpMethod.RequestConfig): AxiosPromise<UserTitle.GetHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface NewTaxControlFapiao {
    userTitle: NewTaxControlFapiao.UserTitle
  }
}
namespace WeChatPay.OpenAPI {
  export interface V3 {
    newTaxControlFapiao: V3.NewTaxControlFapiao
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
wxpay.v3.newTaxControlFapiao.userTitle.get({
//                                     ^^^
  params,
})
.then(
  ({ // [!code hl:23]
    data: {
      type,
      name,
      taxpayer_id,
      address,
      telephone,
      bank_name,
      bank_account,
      phone,
      email,
    },
  }) => ({
    type,
    name,
    taxpayer_id,
    address,
    telephone,
    bank_name,
    bank_account,
    phone,
    email,
  })
)
```
