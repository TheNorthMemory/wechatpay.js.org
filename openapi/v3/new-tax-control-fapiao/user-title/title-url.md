---
title: 获取抬头填写链接
description: 非微信支付场景中，商户需先调用本接口获取抬头填写链接，供用户填写发票抬头。当用户提交抬头信息后，微信支付会根据商户配置的回调地址进行回调通知。 注意：获取到的抬头填写链接有30分钟的有效期，若在用户填写发票抬头之前链接过期，商户需要重新获取（此时无需更换发票申请单号）
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/docs/merchant/apis/fapiao/user-title/acquire-fapiao-title-url.html) [官方文档](https://pay.weixin.qq.com/docs/partner/apis/fapiao/user-title/acquire-fapiao-title-url.html)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.NewTaxControlFapiao.UserTitle.TitleUrl.GetHttpMethod {
  export interface RequestConfig extends AxiosRequestConfig {
    params: {
      sub_mchid?: string
      fapiao_apply_id: string
      source: string
      appid: string
      openid: string
      total_amount: number
      seller_name: string
      show_phone_cell: boolean
      must_input_phone: boolean
      show_email_cell: boolean
      must_input_email: boolean
    }
  }
  export interface WellformedResponse {
    title_url: string
    miniprogram_appid: string
    miniprogram_path: string
  }
}
namespace WeChatPay.OpenAPI.V3.NewTaxControlFapiao.UserTitle {
  export interface TitleUrl {
    /**
     * 获取抬头填写链接
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/new-tax-control-fapiao/chapter3_5.shtml
     */
    get(config: TitleUrl.GetHttpMethod.RequestConfig): AxiosPromise<TitleUrl.GetHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.NewTaxControlFapiao {
  export interface UserTitle {
    titleUrl: UserTitle.TitleUrl
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
wxpay.v3.newTaxControlFapiao.userTitle.titleUrl.get({
//                                              ^^^
  params,
})
.then(
  ({ // [!code hl:11]
    data: {
      title_url,
      miniprogram_appid,
      miniprogram_path,
    },
  }) => ({
    title_url,
    miniprogram_appid,
    miniprogram_path,
  })
)
```
