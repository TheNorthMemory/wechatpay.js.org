---
title: 发放小程序红包
description: 红包金额大于200或者小于1元时，请求参数scene_id必传，参数说明见下文。◆ 根据监管要求，新申请商户号使用小程序红包需要满足两个条件：1、入驻时间超过90天 2、连续正常交易30天。◆ 移动应用的appid无法使用红包接口。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/api/tools/cash_coupon_xcx.php?chapter=18_2&index=3) [官方文档](https://pay.weixin.qq.com/wiki/doc/api/tools/cash_coupon_sl.php?chapter=18_2&index=3)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { CipherKey } from 'crypto'
import { AxiosRequestConfig, AxiosPromise, AxiosResponseTransformer } from 'axios'
namespace WeChatPay.OpenAPI.V2.Mmpaymkttransfers.Sendminiprogramhb.PostHttpMethod {
  export interface XmlDataRequest {
    nonce_str?: string
    mch_billno: string
    mch_id: string
    wxappid: string
    send_name: string
    re_openid: string
    total_amount: string | number
    total_num: string | number
    wishing: string
    act_name: string
    remark: string
    notify_way: 'MINI_PROGRAM_JSAPI'
    scene_id?: 'PRODUCT_1' | 'PRODUCT_2' | 'PRODUCT_3' | 'PRODUCT_4' | 'PRODUCT_5' | 'PRODUCT_6' | 'PRODUCT_7' | 'PRODUCT_8'
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
    package: string
  }
}
namespace WeChatPay.OpenAPI.V2.Mmpaymkttransfers {
  export interface Sendminiprogramhb {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/wiki/doc/api/tools/cash_coupon_xcx.php?chapter=18_2&index=3
     */
    (data: Sendminiprogramhb.PostHttpMethod.XmlDataRequest, config: Sendminiprogramhb.PostHttpMethod.RequestConfig): AxiosPromise<Sendminiprogramhb.PostHttpMethod.WellformedResponse>
    /**
     * 发放小程序红包接口
     * @link https://pay.weixin.qq.com/wiki/doc/api/tools/cash_coupon_xcx.php?chapter=18_2&index=3
     */
    post(data: Sendminiprogramhb.PostHttpMethod.XmlDataRequest, config: Sendminiprogramhb.PostHttpMethod.RequestConfig): AxiosPromise<Sendminiprogramhb.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V2 {
  export interface Mmpaymkttransfers {
    sendminiprogramhb: Mmpaymkttransfers.Sendminiprogramhb
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
export var appId:  WeChatPay.OpenAPI.V2.Mmpaymkttransfers.Sendminiprogramhb.PostHttpMethod.XmlDataRequest['wxappid']
export var apiv2Secret: CipherKey

// @filename: business.js
import { wxpay, appId, apiv2Secret } from './virtual'
// ---cut---
const { Formatter, Hash, Transformer } = require('wechatpay-axios-plugin')

wxpay.v2.mmpaymkttransfers.sendminiprogramhb.post({
//                                           ^^^^
  nonce_str,
  mch_billno,
  mch_id,
  wxappid,
  send_name,
  re_openid,
  total_amount,
  total_num,
  wishing,
  act_name,
  remark,
  notify_way,
  scene_id,
}, { security, transformResponse: [Transformer.toObject], })
//             ^?
.then(
  ({
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
      package: packageStr,
    },
  }) => {
    const nonceStr = Formatter.nonce();
    const timeStamp = '' + Formatter.timestamp();
    const signType = 'MD5';
    return { // [!code hl:12]
      appId,
      timeStamp,
      nonceStr,
      package: encodeURIComponent(packageStr),
      signType,
      paySign: Hash.sign(
        signType,
        { appId, timeStamp, nonceStr, package: packageStr },
        apiv2Secret
      )
    }
  }
)
```
