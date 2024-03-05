---
title: 授权码查询openid
description: 通过授权码查询公众号Openid，调用查询后，该授权码只能由此商户号发起扣款，直至授权码更新。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方服务商付款码文档](https://pay.weixin.qq.com/wiki/doc/api/micropay_sl.php?chapter=9_12&index=8)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V2.Tools.Authcodetoopenid.PostHttpMethod {
  export interface XmlDataRequest {
    appid: string
    mch_id: string
    sub_appid?: string
    sub_mch_id?: string
    auth_code: string
    nonce_str: string
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: XmlDataRequest
  }
  export interface WellformedResponse {
    sub_appid?: string
    sub_mch_id?: string
    sub_openid?: string
    return_code: string
    return_msg: string
    appid: string
    mch_id: string
    nonce_str: string
    sign: string
    result_code: string
    err_code: string
    openid: string
  }
}
namespace WeChatPay.OpenAPI.V2.Tools {
  export interface Authcodetoopenid {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/wiki/doc/api/micropay_sl.php?chapter=9_12&index=8
     */
    (data: Authcodetoopenid.PostHttpMethod.XmlDataRequest, config?: Authcodetoopenid.PostHttpMethod.RequestConfig): AxiosPromise<Authcodetoopenid.PostHttpMethod.WellformedResponse>
    /**
     * 授权码查询openid
     * @link https://pay.weixin.qq.com/wiki/doc/api/micropay_sl.php?chapter=9_12&index=8
     */
    post(data: Authcodetoopenid.PostHttpMethod.XmlDataRequest, config?: Authcodetoopenid.PostHttpMethod.RequestConfig): AxiosPromise<Authcodetoopenid.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V2 {
  export interface Tools {
    authcodetoopenid: Tools.Authcodetoopenid
  }
}
namespace WeChatPay.OpenAPI {
  export interface V2 {
    tools: V2.Tools
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
wxpay.v2.tools.authcodetoopenid.post({
//                              ^^^^
  appid,
  mch_id,
  sub_appid,
  sub_mch_id,
  auth_code,
  nonce_str,
})
.then(
  ({ // [!code hl:29]
    data: {
      sub_appid,
      sub_mch_id,
      sub_openid,
      return_code,
      return_msg,
      appid,
      mch_id,
      nonce_str,
      sign,
      result_code,
      err_code,
      openid,
    },
  }) => ({
    sub_appid,
    sub_mch_id,
    sub_openid,
    return_code,
    return_msg,
    appid,
    mch_id,
    nonce_str,
    sign,
    result_code,
    err_code,
    openid,
  })
)
```