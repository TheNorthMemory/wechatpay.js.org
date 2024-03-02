---
title: 合单下单
description: 使用合单支付接口，用户只输入一次密码，即可完成多个订单的支付。目前最多一次可支持10笔订单进行合单支付。用合单下单api在微信支付服务后台生成预支付交易单，返回正确的预支付交易会话标识后再按扫码、JSAPI、APP、H5等不同场景生成交易串调起支付。
---

# {{ $frontmatter.title }}

{{ $frontmatter.description }} [官方合单支付文档](https://pay.weixin.qq.com/wiki/doc/api/combine.php?chapter=24_1&index=2)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V2.Pay.Combinedorder.PostHttpMethod {
  export interface XmlDataRequest {
    combine_appid: string
    combine_mch_id: string
    device_info: string
    nonce_str: string
    sign: string
    sign_type: string
    combine_out_trade_no: string
    spbill_create_ip: string
    time_start: string
    time_expire: string
    notify_url: string
    trade_type: string
    product_id: string
    combine_openid: string
    scene_info: string
    sub_order_list: string
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: XmlDataRequest
  }
  export interface WellformedResponse {
    return_code: string
    return_msg: string
    combine_appid: string
    combine_mch_id: string
    device_info: string
    nonce_str: string
    sign: string
    result_code: string
    err_code: string
    err_code_des: string
    trade_type: string
    code_url: string
    prepay_id: string
    mweb_url: string
  }
}
namespace WeChatPay.OpenAPI.V2.Pay {
  export interface Combinedorder {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/wiki/doc/api/combine.php?chapter=24_1&index=2
     */
    (data: Combinedorder.PostHttpMethod.XmlDataRequest, config?: Combinedorder.PostHttpMethod.RequestConfig): AxiosPromise<Combinedorder.PostHttpMethod.WellformedResponse>
    /**
     * 合单下单
     * @link https://pay.weixin.qq.com/wiki/doc/api/combine.php?chapter=24_1&index=2
     */
    post(data: Combinedorder.PostHttpMethod.XmlDataRequest, config?: Combinedorder.PostHttpMethod.RequestConfig): AxiosPromise<Combinedorder.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V2 {
  export interface Pay {
    combinedorder: Pay.Combinedorder
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
wxpay.v2.pay.combinedorder.post({
//                         ^^^^
  combine_appid,
  combine_mch_id,
  device_info,
  nonce_str,
  sign_type,
  combine_out_trade_no,
  spbill_create_ip,
  time_start,
  time_expire,
  notify_url,
  trade_type,
  product_id,
  combine_openid,
  scene_info,
  sub_order_list,
})
.then(
  ({ // [!code hl:33]
    data: {
      return_code,
      return_msg,
      combine_appid,
      combine_mch_id,
      device_info,
      nonce_str,
      sign,
      result_code,
      err_code,
      err_code_des,
      trade_type,
      code_url,
      prepay_id,
      mweb_url,
    },
  }) => ({
    return_code,
    return_msg,
    combine_appid,
    combine_mch_id,
    device_info,
    nonce_str,
    sign,
    result_code,
    err_code,
    err_code_des,
    trade_type,
    code_url,
    prepay_id,
    mweb_url,
  })
)
```
