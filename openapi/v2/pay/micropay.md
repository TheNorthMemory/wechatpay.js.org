---
title: 付款码支付
description: 收银员使用扫码设备读取微信用户付款码以后，二维码或条码信息会传送至商户收银台，由商户收银台或者商户后台调用该接口发起支付。
---

# {{ $frontmatter.title }}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/api/micropay.php?chapter=9_10&index=1)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V2.Pay.Micropay.PostHttpMethod {
  export interface XmlDataRequest {
    appid: string
    mch_id: string
    body: string
    out_trade_no: string
    attach?: string
    notify_url: string
    auth_code: string
    spbill_create_ip: string
    total_fee: string
    fee_type?: 'CNY'
    sign_type?: 'MD5' | 'HMAC-SHA256'
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: XmlDataRequest
  }
  export interface WellformedResponse {
    return_code: 'SUCCESS' | 'FAIL'
    return_msg: 'OK' | string
    result_code: 'SUCCESS' | 'FAIL'
    err_code?: string
    err_code_des?: string
    trade_type: 'MICROPAY'
    code_url?: string
    transaction_id?: string
    total_fee?: string
  }
}
namespace WeChatPay.OpenAPI.V2.Pay {
  export interface Micropay {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/wiki/doc/api/micropay.php?chapter=9_10&index=1
     */
    (data: Micropay.PostHttpMethod.XmlDataRequest, config?: Micropay.PostHttpMethod.RequestConfig): AxiosPromise<Micropay.PostHttpMethod.WellformedResponse>
    /**
     * 付款码支付
     * @link https://pay.weixin.qq.com/wiki/doc/api/micropay.php?chapter=9_10&index=1
     */
    post(data: Micropay.PostHttpMethod.XmlDataRequest, config?: Micropay.PostHttpMethod.RequestConfig): AxiosPromise<Micropay.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V2 {
  export interface Pay {
    micropay: Pay.Micropay
  }
}
namespace WeChatPay.OpenAPI {
  export interface V2 {
    pay: V2.Pay
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

wxpay.v2.pay.micropay.post({
                    //^^^^
  mch_id,
  appid,
  body,
  out_trade_no,
  notify_url,
  total_fee,
  auth_code,
})
.then(
  ({ // [!code hl:9]
    data: {
      return_code,
      result_code,
      trade_type,
      total_fee,
      transaction_id,
    }
  }) => total_fee
)
```
