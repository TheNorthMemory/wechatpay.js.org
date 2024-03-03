---
title: 发放普通红包
description: 现金红包发放后会以公众号消息的形式触达用户，不同情况下触达消息的形式会有差别，相关规则如下：1.已关注公众号的用户，使用“防伪消息”触达；2.未关注公众号的用户，使用“模板消息”触达。
---

# {{ $frontmatter.title }}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/api/tools/cash_coupon.php?chapter=13_4&index=3) [官方文档](https://pay.weixin.qq.com/wiki/doc/api/tools/cash_coupon_sl.php?chapter=13_4&index=3)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise, AxiosResponseTransformer } from 'axios'
namespace WeChatPay.OpenAPI.V2.Mmpaymkttransfers.Sendredpack.PostHttpMethod {
  export interface XmlDataRequest {
    nonce_str?: string
    mch_billno: string
    mch_id: string
    sub_mch_id?: string
    wxappid: string
    msgappid: string
    send_name: string
    re_openid: string
    total_amount: string | number
    total_num: string | number
    wishing: string
    client_ip: string
    act_name: string
    remark: string
    scene_id?: 'PRODUCT_1' | 'PRODUCT_2' | 'PRODUCT_3' | 'PRODUCT_4' | 'PRODUCT_5' | 'PRODUCT_6' | 'PRODUCT_7' | 'PRODUCT_8'
    risk_info?: string
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
    wxappid: string
    re_openid: string
    total_amount: string | number
    send_listid: string
  }
}
namespace WeChatPay.OpenAPI.V2.Mmpaymkttransfers {
  export interface Sendredpack {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/wiki/doc/api/tools/cash_coupon.php?chapter=13_4&index=3
     */
    (data: Sendredpack.PostHttpMethod.XmlDataRequest, config: Sendredpack.PostHttpMethod.RequestConfig): AxiosPromise<Sendredpack.PostHttpMethod.WellformedResponse>
    /**
     * 发放普通红包
     * @link https://pay.weixin.qq.com/wiki/doc/api/tools/cash_coupon.php?chapter=13_4&index=3
     */
    post(data: Sendredpack.PostHttpMethod.XmlDataRequest, config: Sendredpack.PostHttpMethod.RequestConfig): AxiosPromise<Sendredpack.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V2 {
  export interface Mmpaymkttransfers {
    sendredpack: Mmpaymkttransfers.Sendredpack
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
wxpay.v2.mmpaymkttransfers.sendredpack.post({
//                                     ^^^^
  nonce_str,
  mch_billno,
  mch_id,
  sub_mch_id,
  wxappid,
  msgappid,
  send_name,
  re_openid,
  total_amount,
  total_num,
  wishing,
  client_ip,
  act_name,
  remark,
  scene_id,
  risk_info,
}, { security, transformResponse: [Transformer.toObject], })
//             ^?
.then(
  ({ // [!code hl:27]
    data: {
      return_code,
      return_msg,
      result_code,
      err_code,
      err_code_des,
      mch_billno,
      mch_id,
      wxappid,
      re_openid,
      total_amount,
      send_listid,
    },
  }) => ({
    return_code,
    return_msg,
    result_code,
    err_code,
    err_code_des,
    mch_billno,
    mch_id,
    wxappid,
    re_openid,
    total_amount,
    send_listid,
  })
)
```
