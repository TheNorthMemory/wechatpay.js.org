---
title: 转换短链接
description: 超长的链接在生成二维码时，码密度比较大，不容易被识别，此接口提供超长的链接转成短链接(weixin://wxpay/s/XXXXXX)能力，减小二维码数据量，提升扫描速度和精确度。
---

# {{ $frontmatter.title }}

{{ $frontmatter.description }} [官方NATIVE文档](https://pay.weixin.qq.com/wiki/doc/api/native.php?chapter=9_9&index=10) [官方服务商NATIVE文档](https://pay.weixin.qq.com/wiki/doc/api/native_sl.php?chapter=9_9)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V2.Tools.Shorturl.PostHttpMethod {
  export interface XmlDataRequest {
    appid: string
    mch_id: string
    sub_appid?: string
    sub_mch_id?: string
    long_url: string
    nonce_str?: string
    sign_type?: string
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: XmlDataRequest
  }
  export interface WellformedResponse {
    return_code: string
    return_msg: string
    appid: string
    mch_id: string
    sub_appid?: string
    sub_mch_id?: string
    nonce_str: string
    sign: string
    result_code: string
    err_code: string
    short_url: string
  }
}
namespace WeChatPay.OpenAPI.V2.Tools {
  export interface Shorturl {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/wiki/doc/api/native.php?chapter=9_9&index=10
     */
    (data: Shorturl.PostHttpMethod.XmlDataRequest, config?: Shorturl.PostHttpMethod.RequestConfig): AxiosPromise<Shorturl.PostHttpMethod.WellformedResponse>
    /**
     * 转换短链接
     * @link https://pay.weixin.qq.com/wiki/doc/api/native.php?chapter=9_9&index=10
     */
    post(data: Shorturl.PostHttpMethod.XmlDataRequest, config?: Shorturl.PostHttpMethod.RequestConfig): AxiosPromise<Shorturl.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V2 {
  export interface Tools {
    shorturl: Tools.Shorturl
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
wxpay.v2.tools.shorturl.post({
//                      ^^^^
  appid,
  mch_id,
  sub_appid,
  sub_mch_id,
  long_url,
  nonce_str,
  sign_type,
})
.then(
  ({ // [!code hl:27]
    data: {
      return_code,
      return_msg,
      appid,
      mch_id,
      sub_appid,
      sub_mch_id,
      nonce_str,
      sign,
      result_code,
      err_code,
      short_url,
    },
  }) => ({
    return_code,
    return_msg,
    appid,
    mch_id,
    sub_appid,
    sub_mch_id,
    nonce_str,
    sign,
    result_code,
    err_code,
    short_url,
  })
)
```
