---
title: 查询红包记录
description: 用于商户对已发放的红包进行查询红包的具体信息，可支持普通红包和裂变包。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/api/tools/cash_coupon.php?chapter=13_6&index=5) [官方文档](https://pay.weixin.qq.com/wiki/doc/api/tools/cash_coupon_sl.php?chapter=13_6&index=5)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise, AxiosResponseTransformer } from 'axios'
namespace WeChatPay.OpenAPI.V2.Mmpaymkttransfers.Gethbinfo.PostHttpMethod {
  export interface XmlDataRequest {
    nonce_str?: string
    mch_billno: string
    mch_id: string
    appid: string
    bill_type: 'MCHT'
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: XmlDataRequest
    security: true
    transformResponse: AxiosResponseTransformer[]
  }
  export interface WellformedResponse {
    return_code: string
    return_msg: string
    result_code: string
    err_code: string
    err_code_des: string
    mch_billno: string
    mch_id: string
    detail_id: string
    status: string
    send_type: string
    hb_type: string
    total_num: string | number
    total_amount: string | number
    reason: string
    send_time: string
    refund_time: string
    refund_amount: string | number
    wishing: string
    remark: string
    act_name: string
    hblist?: {
      openid: string
      amount: string | number
    }[]
    openid: string
    amount: string | number
    rcv_time: string
  }
}
namespace WeChatPay.OpenAPI.V2.Mmpaymkttransfers {
  export interface Gethbinfo {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/wiki/doc/api/tools/cash_coupon.php?chapter=13_6&index=5
     */
    (data: Gethbinfo.PostHttpMethod.XmlDataRequest, config: Gethbinfo.PostHttpMethod.RequestConfig): AxiosPromise<Gethbinfo.PostHttpMethod.WellformedResponse>
    /**
     * 查询红包记录
     * @link https://pay.weixin.qq.com/wiki/doc/api/tools/cash_coupon.php?chapter=13_6&index=5
     */
    post(data: Gethbinfo.PostHttpMethod.XmlDataRequest, config: Gethbinfo.PostHttpMethod.RequestConfig): AxiosPromise<Gethbinfo.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V2 {
  export interface Mmpaymkttransfers {
    gethbinfo: Mmpaymkttransfers.Gethbinfo
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
wxpay.v2.mmpaymkttransfers.gethbinfo.post({
//                                   ^^^^
  nonce_str,
  mch_billno,
  mch_id,
  appid,
  bill_type,
}, { security, transformResponse: [Transformer.toObject], })
//             ^?
.then(
  ({ // [!code hl:53]
    data: {
      return_code,
      return_msg,
      result_code,
      err_code,
      err_code_des,
      mch_billno,
      mch_id,
      detail_id,
      status,
      send_type,
      hb_type,
      total_num,
      total_amount,
      reason,
      send_time,
      refund_time,
      refund_amount,
      wishing,
      remark,
      act_name,
      hblist,
      openid,
      amount,
      rcv_time,
    },
  }) => ({
    return_code,
    return_msg,
    result_code,
    err_code,
    err_code_des,
    mch_billno,
    mch_id,
    detail_id,
    status,
    send_type,
    hb_type,
    total_num,
    total_amount,
    reason,
    send_time,
    refund_time,
    refund_amount,
    wishing,
    remark,
    act_name,
    hblist,
    openid,
    amount,
    rcv_time,
  })
)
```
