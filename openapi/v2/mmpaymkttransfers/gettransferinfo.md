---
title: 查询企业向微信用户个人付款
description: 付款操作进行结果查询，返回付款操作详细结果。查询企业付款API只支持查询30天内的订单，30天之前的订单请登录商户平台查询。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/api/tools/mch_pay.php?chapter=14_3)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise, AxiosResponseTransformer } from 'axios'
namespace WeChatPay.OpenAPI.V2.Mmpaymkttransfers.Gettransferinfo.PostHttpMethod {
  export interface XmlDataRequest {
    nonce_str?: string
    partner_trade_no: string
    mch_id: string
    appid: string
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: XmlDataRequest
    security: true
  }
  export interface WellformedResponse {
    return_code: string
    return_msg: string
    result_code: string
    err_code: string
    err_code_des: string
    partner_trade_no: string
    appid: string
    mch_id: string
    detail_id: string
    status: string
    reason: string
    openid: string
    transfer_name: string
    payment_amount: string | number
    transfer_time: string
    payment_time: string
    desc: string
  }
}
namespace WeChatPay.OpenAPI.V2.Mmpaymkttransfers {
  export interface Gettransferinfo {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/wiki/doc/api/tools/mch_pay.php?chapter=14_3
     */
    (data: Gettransferinfo.PostHttpMethod.XmlDataRequest, config: Gettransferinfo.PostHttpMethod.RequestConfig): AxiosPromise<Gettransferinfo.PostHttpMethod.WellformedResponse>
    /**
     * 查询企业向微信用户个人付款
     * @link https://pay.weixin.qq.com/wiki/doc/api/tools/mch_pay.php?chapter=14_3
     */
    post(data: Gettransferinfo.PostHttpMethod.XmlDataRequest, config: Gettransferinfo.PostHttpMethod.RequestConfig): AxiosPromise<Gettransferinfo.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V2 {
  export interface Mmpaymkttransfers {
    gettransferinfo: Mmpaymkttransfers.Gettransferinfo
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

wxpay.v2.mmpaymkttransfers.gettransferinfo.post({
//                                         ^^^^
  nonce_str,
  partner_trade_no,
  mch_id,
  appid,
}, { security, })
.then(
  ({ // [!code hl:39]
    data: {
      return_code,
      return_msg,
      result_code,
      err_code,
      err_code_des,
      partner_trade_no,
      appid,
      mch_id,
      detail_id,
      status,
      reason,
      openid,
      transfer_name,
      payment_amount,
      transfer_time,
      payment_time,
      desc,
    },
  }) => ({
    return_code,
    return_msg,
    result_code,
    err_code,
    err_code_des,
    partner_trade_no,
    appid,
    mch_id,
    detail_id,
    status,
    reason,
    openid,
    transfer_name,
    payment_amount,
    transfer_time,
    payment_time,
    desc,
  })
)
```
