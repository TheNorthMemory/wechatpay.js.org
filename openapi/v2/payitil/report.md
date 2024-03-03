---
title: 交易保障
description: 商户在调用微信支付提供的相关接口时，会得到微信支付返回的相关信息以及获得整个接口的响应时间。为提高整体的服务水平，协助商户一起提高服务质量，微信支付提供了相关接口调用耗时和返回信息的主动上报接口，微信支付可以根据商户侧上报的数据进一步优化网络部署，完善服务监控，和商户更好的协作为用户提供更好的业务体验。
---

# {{ $frontmatter.title }}

{{ $frontmatter.description }} [官方付款码文档](https://pay.weixin.qq.com/wiki/doc/api/micropay.php?chapter=9_14&index=8) [官方JSAPI文档](https://pay.weixin.qq.com/wiki/doc/api/jsapi.php?chapter=9_8&index=9) [官方NATIVE文档](https://pay.weixin.qq.com/wiki/doc/api/native.php?chapter=9_8&index=9) [官方APP文档](https://pay.weixin.qq.com/wiki/doc/api/app/app.php?chapter=9_8&index=10) [官方H5文档](https://pay.weixin.qq.com/wiki/doc/api/H5.php?chapter=9_8&index=9) [官方小程序支付文档](https://pay.weixin.qq.com/wiki/doc/api/wxa/wxa_api.php?chapter=9_8&index=9)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise, AxiosResponseTransformer } from 'axios'
namespace WeChatPay.OpenAPI.V2.Payitil.Report.PostHttpMethod {
  export interface XmlDataRequest {
    appid: string
    mch_id: string
    sub_appid?: string
    sub_mch_id?: string
    device_info?: string
    nonce_str?: string
    interface_url: 'https://api.mch.weixin.qq.com/pay/micropay/total' | string
    user_ip: string
    trades: string
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: XmlDataRequest
    transformResponse: AxiosResponseTransformer[]
  }
  export interface WellformedResponse {
    return_code: string
    return_msg: string
    result_code: string
  }
}
namespace WeChatPay.OpenAPI.V2.Payitil {
  export interface Report {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/wiki/doc/api/wxa/wxa_api.php?chapter=9_8&index=9
     */
    (data: Report.PostHttpMethod.XmlDataRequest, config?: Report.PostHttpMethod.RequestConfig): AxiosPromise<Report.PostHttpMethod.WellformedResponse>
    /**
     * 交易保障
     * @link https://pay.weixin.qq.com/wiki/doc/api/wxa/wxa_api.php?chapter=9_8&index=9
     */
    post(data: Report.PostHttpMethod.XmlDataRequest, config?: Report.PostHttpMethod.RequestConfig): AxiosPromise<Report.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V2 {
  export interface Payitil {
    report: Payitil.Report
  }
}
namespace WeChatPay.OpenAPI {
  export interface V2 {
    payitil: V2.Payitil
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
wxpay.v2.payitil.report.post({
//                      ^^^^
  appid,
  mch_id,
  sub_appid,
  sub_mch_id,
  device_info,
  nonce_str,
  interface_url,
  user_ip,
  trades,
}, { transformResponse: [Transformer.toObject], })
//   ^?
.then(
  ({ // [!code hl:11]
    data: {
      return_code,
      return_msg,
      result_code,
    },
  }) => ({
    return_code,
    return_msg,
    result_code,
  })
)
```
