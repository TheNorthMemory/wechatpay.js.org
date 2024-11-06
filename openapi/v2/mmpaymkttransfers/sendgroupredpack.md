---
title: 发放裂变红包
description: 裂变红包：一次可以发放一组红包。首先领取的用户为种子用户，种子用户领取一组红包当中的一个，并可以通过社交分享将剩下的红包给其他用户。裂变红包充分利用了人际传播的优势。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/api/tools/cash_coupon.php?chapter=13_5&index=4) [官方文档](https://pay.weixin.qq.com/wiki/doc/api/tools/cash_coupon_sl.php?chapter=13_5&index=4)

::: danger :no_entry_sign: {.im-deprecated}

本接口服务已于 `2024.06.05` (北京时间)下线，文档仅做留存参考。
:::

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise, AxiosResponseTransformer } from 'axios'
namespace WeChatPay.OpenAPI.V2.Mmpaymkttransfers.Sendgroupredpack.PostHttpMethod {
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
    amt_type: string
    wishing: string
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
  export interface Sendgroupredpack {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/wiki/doc/api/tools/cash_coupon.php?chapter=13_5&index=4
     */
    (data: Sendgroupredpack.PostHttpMethod.XmlDataRequest, config: Sendgroupredpack.PostHttpMethod.RequestConfig): AxiosPromise<Sendgroupredpack.PostHttpMethod.WellformedResponse>
    /**
     * 发放裂变红包
     * @link https://pay.weixin.qq.com/wiki/doc/api/tools/cash_coupon.php?chapter=13_5&index=4
     */
    post(data: Sendgroupredpack.PostHttpMethod.XmlDataRequest, config: Sendgroupredpack.PostHttpMethod.RequestConfig): AxiosPromise<Sendgroupredpack.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V2 {
  export interface Mmpaymkttransfers {
    sendgroupredpack: Mmpaymkttransfers.Sendgroupredpack
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
wxpay.v2.mmpaymkttransfers.sendgroupredpack.post({
//                                          ^^^^
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
  amt_type,
  wishing,
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
