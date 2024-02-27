---
title: 关闭订单
description: 以下情况需要调用关单接口：商户订单支付失败需要生成新单号重新发起支付，要对原订单号调用关单，避免重复支付；系统下单后，用户支付超时，系统退出不再受理，避免用户继续，请调用关单接口。
---

# {{ $frontmatter.title }}

{{ $frontmatter.description }} [官方JSAPI文档](https://pay.weixin.qq.com/wiki/doc/api/jsapi.php?chapter=9_3) [官方NATIVE文档](https://pay.weixin.qq.com/wiki/doc/api/native.php?chapter=9_3) [官方APP文档](https://pay.weixin.qq.com/wiki/doc/api/app/app.php?chapter=9_3&index=5) [官方H5文档](https://pay.weixin.qq.com/wiki/doc/api/H5.php?chapter=9_3&index=3) [官方小程序支付文档](https://pay.weixin.qq.com/wiki/doc/api/wxa/wxa_api.php?chapter=9_3)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V2.Pay.Closeorder.PostHttpMethod {
  export interface JsonDataRequest {
    appid: string
    mch_id: string
    out_trade_no: string
    nonce_str?: string
    sign_type?: 'MD5' | 'HMAC-SHA256'
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
  }
  export interface WellformedResponse {
    return_code: 'SUCCESS' | 'FAIL'
    result_code: 'SUCCESS' | 'FAIL'
    appid: string
    mch_id: string
    nonce_str: string
    sign: string
    result_msg: string
    err_code: string
    err_code_des: string
  }
}
namespace WeChatPay.OpenAPI.V2.Pay {
  export interface Closeorder {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/wiki/doc/api/jsapi.php?chapter=9_3
     * @link https://pay.weixin.qq.com/wiki/doc/api/native.php?chapter=9_3
     * @link https://pay.weixin.qq.com/wiki/doc/api/app/app.php?chapter=9_3&index=5
     * @link https://pay.weixin.qq.com/wiki/doc/api/H5.php?chapter=9_3&index=3
     * @link https://pay.weixin.qq.com/wiki/doc/api/wxa/wxa_api.php?chapter=9_3
     */
    (data: Closeorder.PostHttpMethod.JsonDataRequest, config?: Closeorder.PostHttpMethod.RequestConfig): AxiosPromise<Closeorder.PostHttpMethod.WellformedResponse>
    /**
     * 关闭订单
     * @link https://pay.weixin.qq.com/wiki/doc/api/jsapi.php?chapter=9_3
     * @link https://pay.weixin.qq.com/wiki/doc/api/native.php?chapter=9_3
     * @link https://pay.weixin.qq.com/wiki/doc/api/app/app.php?chapter=9_3&index=5
     * @link https://pay.weixin.qq.com/wiki/doc/api/H5.php?chapter=9_3&index=3
     * @link https://pay.weixin.qq.com/wiki/doc/api/wxa/wxa_api.php?chapter=9_3
     */
    post(data: Closeorder.PostHttpMethod.JsonDataRequest, config?: Closeorder.PostHttpMethod.RequestConfig): AxiosPromise<Closeorder.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V2 {
  export interface Pay {
    closeorder: Pay.Closeorder
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
wxpay.v2.pay.closeorder.post({
                      //^^^^
  appid,
  mch_id,
  out_trade_no,
  nonce_str,
  sign_type,
})
.then(
  ({ // [!code hl:13]
    data: {
      return_code,
      appid,
      mch_id,
      nonce_str,
      sign,
      result_code,
      result_msg,
      err_code,
      err_code_des,
    },
  }) => return_code === 'SUCCESS' && result_code === 'SUCCESS'
)
```

> [!IMPORTANT] 注意：
> - 订单生成后不能马上调用关单接口，最短调用时间间隔为5分钟。
