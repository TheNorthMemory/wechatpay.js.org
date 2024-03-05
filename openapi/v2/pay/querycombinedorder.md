---
title: 合单查单
description: 所有微信支付订单的查询，商户可以通过查询订单接口主动查询订单状态，完成下一步的业务逻辑。合单查单api只能使用合单单号combine_out_trade_no来查询，如果要使用子订单号查询，请使用公众api中的查单接口。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方合单支付文档](https://pay.weixin.qq.com/wiki/doc/api/combine.php?chapter=24_3&index=4)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V2.Pay.Querycombinedorder.PostHttpMethod {
  export interface XmlDataRequest {
    combine_appid: string
    combine_mch_id: string
    nonce_str: string
    sign: string
    sign_type: string
    combine_out_trade_no: string
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: XmlDataRequest
  }
  export interface WellformedResponse {
    return_code: string
    return_msg: string
    combine_appid: string
    combine_mch_id: string
    nonce_str: string
    device_info: string
    combine_openid: string
    combine_out_trade_no: string
    sign: string
    result_code: string
    result_msg: string
    err_code: string
    err_code_des: string
    sub_order_list: string
  }
}
namespace WeChatPay.OpenAPI.V2.Pay {
  export interface Querycombinedorder {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/wiki/doc/api/combine.php?chapter=24_3&index=4
     */
    (data: Querycombinedorder.PostHttpMethod.XmlDataRequest, config?: Querycombinedorder.PostHttpMethod.RequestConfig): AxiosPromise<Querycombinedorder.PostHttpMethod.WellformedResponse>
    /**
     * 合单查单
     * @link https://pay.weixin.qq.com/wiki/doc/api/combine.php?chapter=24_3&index=4
     */
    post(data: Querycombinedorder.PostHttpMethod.XmlDataRequest, config?: Querycombinedorder.PostHttpMethod.RequestConfig): AxiosPromise<Querycombinedorder.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V2 {
  export interface Pay {
    querycombinedorder: Pay.Querycombinedorder
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
wxpay.v2.pay.querycombinedorder.post({
//                              ^^^^
  combine_appid,
  combine_mch_id,
  nonce_str,
  sign_type,
  combine_out_trade_no,
})
.then(
  ({ // [!code hl:33]
    data: {
      return_code,
      return_msg,
      combine_appid,
      combine_mch_id,
      nonce_str,
      device_info,
      combine_openid,
      combine_out_trade_no,
      sign,
      result_code,
      result_msg,
      err_code,
      err_code_des,
      sub_order_list,
    },
  }) => ({
    return_code,
    return_msg,
    combine_appid,
    combine_mch_id,
    nonce_str,
    device_info,
    combine_openid,
    combine_out_trade_no,
    sign,
    result_code,
    result_msg,
    err_code,
    err_code_des,
    sub_order_list,
  })
)
```
