---
title: 获取RSA加密公钥
description: 提交付款到银行卡时，收款方银行卡号&收款方用户名 需要通过RSA-OAEP加密，加密所需的公钥由微信支付提供，向微信支付传输用户姓名和账号标识信息已合法征得用户授权。接口默认输出PKCS#1格式的公钥，商户需根据自己开发的语言选择公钥格式。
---

# {{ $frontmatter.title }}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/api/tools/mch_pay_yhk.php?chapter=24_7&index=4)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise, AxiosResponseTransformer } from 'axios'
namespace WeChatPay.OpenAPI.V2.Risk.Getpublickey.PostHttpMethod {
  export interface XmlDataRequest {
    mch_id: string
    nonce_str: string
    sign: string
    sign_type: string
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: XmlDataRequest
    security: true
    baseURL: 'https://fraud.mch.weixin.qq.com/'
    transformResponse: AxiosResponseTransformer[]
  }
  export interface WellformedResponse {
    return_code: string
    return_msg: string
    error_code: string
    error_code_des: string
    result_code: string
    mch_id: string
    pub_key: string
  }
}
namespace WeChatPay.OpenAPI.V2.Risk {
  export interface Getpublickey {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/wiki/doc/api/tools/mch_pay_yhk.php?chapter=24_7&index=4
     */
    (data: Getpublickey.PostHttpMethod.XmlDataRequest, config: Getpublickey.PostHttpMethod.RequestConfig): AxiosPromise<Getpublickey.PostHttpMethod.WellformedResponse>
    /**
     * 获取RSA加密公钥API
     * @link https://pay.weixin.qq.com/wiki/doc/api/tools/mch_pay_yhk.php?chapter=24_7&index=4
     */
    post(data: Getpublickey.PostHttpMethod.XmlDataRequest, config: Getpublickey.PostHttpMethod.RequestConfig): AxiosPromise<Getpublickey.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V2 {
  export interface Risk {
    getpublickey: Risk.Getpublickey
  }
}
namespace WeChatPay.OpenAPI {
  export interface V2 {
    risk: V2.Risk
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

wxpay.v2.risk.getpublickey.post({
//                         ^^^^
  mch_id,
  nonce_str,
  sign_type,
}, { security, baseURL, transformResponse: [Transformer.toObject], })
//             ^?
.then(
  ({ // [!code hl:19]
    data: {
      return_code,
      return_msg,
      error_code,
      error_code_des,
      result_code,
      mch_id,
      pub_key,
    },
  }) => ({
    return_code,
    return_msg,
    error_code,
    error_code_des,
    result_code,
    mch_id,
    pub_key,
  })
)
```
