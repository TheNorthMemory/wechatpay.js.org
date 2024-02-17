---
title: 统一下单
description: 除付款码支付场景以外，商户系统先调用该接口在微信支付服务后台生成预支付交易单，返回正确的预支付交易会话标识后再按Native、JSAPI、APP等不同场景生成交易串调起支付。
---

# {{ $frontmatter.title }}

{{ $frontmatter.description }} [官方JSAPI文档](https://pay.weixin.qq.com/wiki/doc/api/jsapi.php?chapter=9_1) [Native官方文档](https://pay.weixin.qq.com/wiki/doc/api/native.php?chapter=9_1) [官方APP文档](https://pay.weixin.qq.com/wiki/doc/api/app/app.php?chapter=9_1) [官方H5文档](https://pay.weixin.qq.com/wiki/doc/api/H5.php?chapter=9_20&index=1) [官方小程序支付文档](https://pay.weixin.qq.com/wiki/doc/api/wxa/wxa_api.php?chapter=9_1)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosResponse } from 'axios'
namespace WeChatPay.OpenAPI.V2.Pay.Unifiedorder.PostHttpMethod {
  export interface XmlDataRequest {
    appid: string
    mch_id: string
    body: string
    out_trade_no: string
    notify_url: string
    spbill_create_ip: string
    total_fee: string | number
    attach?: string
    trade_type: 'JSAPI' | 'NATIVE' | 'APP' | 'MWEB'
    fee_type?: 'CNY'
    limit_pay?: 'no_credit'
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
    trade_type: XmlDataRequest['trade_type']
    prepay_id?: string
    code_url?: string
  }
}
namespace WeChatPay.OpenAPI.V2.Pay {
  export interface Unifiedorder {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/wiki/doc/api/jsapi.php?chapter=9_1
     */
    (data: Unifiedorder.PostHttpMethod.XmlDataRequest, config?: Unifiedorder.PostHttpMethod.RequestConfig): Promise<AxiosResponse<Unifiedorder.PostHttpMethod.WellformedResponse>>
    /**
     * 统一下单
     * @link https://pay.weixin.qq.com/wiki/doc/api/jsapi.php?chapter=9_1
     */
    post(data: Unifiedorder.PostHttpMethod.XmlDataRequest, config?: Unifiedorder.PostHttpMethod.RequestConfig): Promise<AxiosResponse<Unifiedorder.PostHttpMethod.WellformedResponse>>
  }
}
namespace WeChatPay.OpenAPI.V2 {
  export interface Pay {
    unifiedorder: Pay.Unifiedorder
  }
}
namespace WeChatPay.OpenAPI {
  export interface V2 {
    pay: V2.Pay
  }
}
interface Wechatpay {
  /**
   * APIv2 endpoint
   */
  v2: WeChatPay.OpenAPI.V2
}

export var wxpay: Wechatpay

// @filename: business.js
import { wxpay } from './virtual'
// ---cut---

wxpay.v2.pay.unifiedorder.post({
                        //^^^^
  mch_id,
  appid,
  body,
  out_trade_no,
  notify_url,
  total_fee,
  trade_type,
})
.then(
  ({ // [!code hl:8]
    data: {
      return_code,
      result_code,
      trade_type,
      code_url,
    }
  }) => code_url
)
```
