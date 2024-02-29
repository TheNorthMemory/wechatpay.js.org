---
title: 撤销订单
description: 支付交易返回失败或支付系统超时，调用该接口撤销交易。如果此订单用户支付失败，微信支付系统会将此订单关闭；如果用户支付成功，微信支付系统会将此订单资金退还给用户。
---

# {{ $frontmatter.title }}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/api/micropay.php?chapter=9_11&index=3)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V2.Secapi.Pay.Reverse.PostHttpMethod {
  export interface XmlDataRequest {
    appid: string
    sub_appid?: string
    mch_id: string
    sub_mch_id?: string
    transaction_id?: string
    out_trade_no?: string
    nonce_str?: string
    sign_type?: 'MD5' | 'HMAC-SHA256'
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: XmlDataRequest
    security: true
  }
  export interface WellformedResponse {
    return_code: 'SUCCESS' | 'FAIL'
    result_code: 'SUCCESS' | 'FAIL'
    return_msg: string
    appid: string
    sub_appid?: string
    mch_id: string
    sub_mch_id?: string
    nonce_str: string
    sign: string
    err_code: string
    err_code_des: string
    recall: 'Y' | 'N'
  }
}
namespace WeChatPay.OpenAPI.V2.Secapi.Pay {
  export interface Reverse {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/wiki/doc/api/micropay.php?chapter=9_11&index=3
     */
    (data: Reverse.PostHttpMethod.XmlDataRequest, config: Reverse.PostHttpMethod.RequestConfig): AxiosPromise<Reverse.PostHttpMethod.WellformedResponse>
    /**
     * 撤销订单
     * @link https://pay.weixin.qq.com/wiki/doc/api/micropay.php?chapter=9_11&index=3
     */
    post(data: Reverse.PostHttpMethod.XmlDataRequest, config: Reverse.PostHttpMethod.RequestConfig): AxiosPromise<Reverse.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V2.Secapi {
  export interface Pay {
    reverse: Pay.Reverse
  }
}
namespace WeChatPay.OpenAPI.V2 {
  export interface Secapi {
    pay: Secapi.Pay
  }
}
namespace WeChatPay.OpenAPI {
  export interface V2 {
    secapi: V2.Secapi
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
wxpay.v2.secapi.pay.reverse.post({
//                          ^^^^
  appid,
  mch_id,
  transaction_id,
  out_trade_no,
}, { security })
.then(
  ({ // [!code hl:13]
    data: {
      return_code,
      appid,
      mch_id,
      nonce_str,
      sign,
      result_code,
      err_code,
      err_code_des,
      recall,
    },
  }) => return_code === 'SUCCESS' && result_code === 'SUCCESS' && recall === 'N'
)
```

> [!IMPORTANT] 注意：
> 1. *wxpay* 构造实例化时，需要显式初始化 **secret**、 **merchant.key** 以及 **merchant.cert** 字段，此*HTTPS*请求为私有**TLS**加密协议，需要双向证书；
> 2. 7天以内的交易单可调用撤销，其他正常支付的单如需实现相同功能请调用申请退款API。提交支付交易后调用【[查询订单API](/openapi/v2/pay/orderquery)】，没有明确的支付结果再调用【撤销订单API】；
> 3. 调用支付接口后请勿立即调用撤销订单API，建议支付后至少**15s**后再调用撤销订单接口；
> 4. 请求参数 **transaction_id**、**out_trade_no**二选一，如果同时存在优先级： **transaction_id** > **out_trade_no**；
> 5. 请求第二型参 **security** 需要显式传 **true**，即告诉SDK此请求需要使用商户私钥及证书进行通信；
> 6. 返回值 **recall** 是否需要继续调用撤销，Y-需要，N-不需要；