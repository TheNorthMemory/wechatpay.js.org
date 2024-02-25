---
title: 沙箱付款码支付
description: 该系统分为两种用例类型：支付成功用例与支付异常用例。请严格按照用例的顺序、金额执行用例，确保用例的检查点完全符合预期。
---

# {{ $frontmatter.title }}

{{ $frontmatter.description }} [支付成功用例](https://pay.weixin.qq.com/wiki/doc/api/download/sandbox-micropay-SUCCESS.docx)根据测试用例金额的不同返回不同的响应报文，[支付异常用例](https://pay.weixin.qq.com/wiki/doc/api/download/sandbox-micropay-ERROR.docx)的识别将通过 Http Header 中添加异常头 `Wechatpay-Negative-Test: {用例名}` 识别。[官方文档](https://pay.weixin.qq.com/wiki/doc/api/tools/sp_coupon.php?chapter=23_1&index=2)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V2.Xdc.Apiv2sandbox.Pay.Micropay.PostHttpMethod {
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
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: XmlDataRequest
    headers?: {
      'Wechatpay-Negative-Test': 'MICROPAY_USERPAYING' | 'MICROPAY_TIMEOUT' | 'MICROPAY_PAYERROR' | 'MICROPAY_PAY_QUERY_TIMEOUT'
    }
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
namespace WeChatPay.OpenAPI.V2.Xdc.Apiv2sandbox.Pay {
  export interface Micropay {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/wiki/doc/api/tools/sp_coupon.php?chapter=23_1&index=2
     */
    (data: Micropay.PostHttpMethod.XmlDataRequest, config?: Micropay.PostHttpMethod.RequestConfig): AxiosPromise<Micropay.PostHttpMethod.WellformedResponse>
    /**
     * 沙箱付款码支付
     * @link https://pay.weixin.qq.com/wiki/doc/api/tools/sp_coupon.php?chapter=23_1&index=2
     */
    post(data: Micropay.PostHttpMethod.XmlDataRequest, config?: Micropay.PostHttpMethod.RequestConfig): AxiosPromise<Micropay.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V2.Xdc.Apiv2sandbox {
  export interface Pay {
    micropay: Pay.Micropay
  }
}
namespace WeChatPay.OpenAPI.V2.Xdc {
  export interface Apiv2sandbox {
    pay: Apiv2sandbox.Pay
  }
}
namespace WeChatPay.OpenAPI.V2 {
  export interface Xdc {
    apiv2sandbox: Xdc.Apiv2sandbox
  }
}
namespace WeChatPay.OpenAPI {
  export interface V2 {
    xdc: V2.Xdc
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
wxpay.v2.xdc.apiv2sandbox.pay.micropay.post({
                                     //^^^^
  mch_id,
  appid,
  body,
  out_trade_no,
  notify_url,
  total_fee,
  auth_code,
}, { headers })
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

> [!IMPORTANT] 重要提示
> 1. *wxpay* 构造实例化时，需要显式初始化 **secret** 字段，此为沙箱环境密钥，即前序[获取沙箱环境密钥](/openapi/v2/xdc/apiv2getsignkey/sign/getsignkey)获取到的 **sandbox_signkey**；
> 2. 请求参数的**appid**为任意值，官方沙箱环境未做要求，也无需有[绑定关系](https://kf.qq.com/faq/1801116VJfua1801113QVNVz.html)；
> 3. 此接口请求时，官方会按照[支付成功用例](https://pay.weixin.qq.com/wiki/doc/api/download/sandbox-micropay-SUCCESS.docx)所需参数进行校验，即：
>    1. 【付款码-正常】订单金额**0.01**元，用户支付成功
>    2. 【付款码-正常】订单金额**0.02**元（含0.01元代金券），用户支付成功
>    3. 【付款码-正常】订单金额**0.03**元（含0.01元代金券和0.02元免充值现金券），用户支付成功
> 4. 此接口第二参数 **headers** 字段为可选字段，按需显式传递 *Wechatpay-Negative-Test* 对应的用例名称；
> 5. 此接口有QPS限制(官方未公布)，高频请求会被官方重定向到腾讯[公益404](https://wx.gtimg.com/core/404.html)页面；
