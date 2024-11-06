---
title: 向微信用户个人付款
description: 该产品为付款至用户零钱的能力，支持通过API接口付款。目前支持向指定微信用户的openid付款。使用条件 1、商户号已入驻90日且截止今日回推30天商户号保持连续不间断的交易。 2、登录微信支付商户平台-产品中心，开通付款到零钱。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/api/tools/mch_pay.php?chapter=14_2)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise, AxiosResponseTransformer } from 'axios'
namespace WeChatPay.OpenAPI.V2.Mmpaymkttransfers.Promotion.Transfers.PostHttpMethod {
  export interface XmlDataRequest {
    mch_appid: string
    mchid: string
    device_info?: string
    nonce_str?: string
    partner_trade_no: string
    openid: string
    check_name: 'NO_CHECK' | 'FORCE_CHECK'
    re_user_name?: string
    amount: string | number
    desc: string
    spbill_create_ip?: string
    scene?: 'BRAND_REDPACKET'
    brand_id?: string | number
    finder_template_id?: string
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: XmlDataRequest
    security: true
  }
  export interface WellformedResponse {
    return_code: string
    return_msg: string
    mch_appid: string
    mchid: string
    device_info: string
    nonce_str: string
    result_code: string
    err_code: string
    err_code_des: string
    partner_trade_no: string
    payment_no: string
    payment_time: string
  }
}
namespace WeChatPay.OpenAPI.V2.Mmpaymkttransfers.Promotion {
  export interface Transfers {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/wiki/doc/api/tools/mch_pay.php?chapter=14_2
     */
    (data: Transfers.PostHttpMethod.XmlDataRequest, config: Transfers.PostHttpMethod.RequestConfig): AxiosPromise<Transfers.PostHttpMethod.WellformedResponse>
    /**
     * 向微信用户个人付款
     * @link https://pay.weixin.qq.com/wiki/doc/api/tools/mch_pay.php?chapter=14_2
     */
    post(data: Transfers.PostHttpMethod.XmlDataRequest, config: Transfers.PostHttpMethod.RequestConfig): AxiosPromise<Transfers.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V2.Mmpaymkttransfers {
  export interface Promotion {
    transfers: Promotion.Transfers
  }
}
namespace WeChatPay.OpenAPI.V2 {
  export interface Mmpaymkttransfers {
    promotion: Mmpaymkttransfers.Promotion
  }
}
namespace WeChatPay.OpenAPI {
  export interface V2 {
    mmpaymkttransfers: V2.Mmpaymkttransfers
  }
}
export interface Wechatpay {
  /**
   * APIv2 endpoint
   */
  v2: WeChatPay.OpenAPI.V2
}
export var wxpay: Wechatpay

// @filename: business.js
import { wxpay } from './virtual'
// ---cut---
const { Transformer } = require('wechatpay-axios-plugin')

wxpay.v2.mmpaymkttransfers.promotion.transfers.post({
//                                             ^^^^
  mch_appid,
  mchid,
  device_info,
  nonce_str,
  partner_trade_no,
  openid,
  check_name,
  re_user_name,
  amount,
  desc,
  spbill_create_ip,
  scene,
  brand_id,
  finder_template_id,
}, { security, transformResponse: [Transformer.toObject], })
//             ^?
.then(
  ({ // [!code hl:29]
    data: {
      return_code,
      return_msg,
      mch_appid,
      mchid,
      device_info,
      nonce_str,
      result_code,
      err_code,
      err_code_des,
      partner_trade_no,
      payment_no,
      payment_time,
    },
  }) => ({
    return_code,
    return_msg,
    mch_appid,
    mchid,
    device_info,
    nonce_str,
    result_code,
    err_code,
    err_code_des,
    partner_trade_no,
    payment_no,
    payment_time,
  })
)
```
