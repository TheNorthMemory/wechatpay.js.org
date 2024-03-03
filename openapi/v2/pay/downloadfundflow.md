---
title: 下载资金账单
description: 商户可以通过该接口下载自2017年6月1日起 的历史资金流水账单。
---

# {{ $frontmatter.title }}

{{ $frontmatter.description }} [官方付款码文档](https://pay.weixin.qq.com/wiki/doc/api/micropay.php?chapter=9_18&index=7) [官方JSAPI文档](https://pay.weixin.qq.com/wiki/doc/api/jsapi.php?chapter=9_18&index=7) [官方NATIVE文档](https://pay.weixin.qq.com/wiki/doc/api/native.php?chapter=9_18&index=7) [官方APP文档](https://pay.weixin.qq.com/wiki/doc/api/app/app.php?chapter=9_18&index=9) [官方H5文档](https://pay.weixin.qq.com/wiki/doc/api/H5.php?chapter=9_18&index=7) [官方小程序支付文档](https://pay.weixin.qq.com/wiki/doc/api/wxa/wxa_api.php?chapter=9_18&index=7)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
import { ReadStream } from 'fs'
namespace WeChatPay.OpenAPI.V2.Pay.Downloadfundflow.PostHttpMethod {
  export interface XmlDataRequest {
    appid: string
    mch_id: string
    sub_appid?: string
    sub_mch_id?: string
    nonce_str?: string
    bill_date: string
    account_type: 'Basic' | 'Operation' | 'Fees'
    tar_type?: 'GZIP'
    sign_type: 'HMAC-SHA256'
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: XmlDataRequest
    security: true
    responseType: 'arraybuffer'
    transformResponse: []
  }
  export interface WellformedResponse extends ReadStream {
  }
}
namespace WeChatPay.OpenAPI.V2.Pay {
  export interface Downloadfundflow {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/wiki/doc/api/wxa/wxa_api.php?chapter=9_18&index=7
     */
    (data: Downloadfundflow.PostHttpMethod.XmlDataRequest, config: Downloadfundflow.PostHttpMethod.RequestConfig): AxiosPromise<Downloadfundflow.PostHttpMethod.WellformedResponse>
    /**
     * 下载资金账单
     * @link https://pay.weixin.qq.com/wiki/doc/api/wxa/wxa_api.php?chapter=9_18&index=7
     */
    post(data: Downloadfundflow.PostHttpMethod.XmlDataRequest, config: Downloadfundflow.PostHttpMethod.RequestConfig): AxiosPromise<Downloadfundflow.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V2 {
  export interface Pay {
    downloadfundflow: Pay.Downloadfundflow
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
const { createWriteStream } = require('fs')
wxpay.v2.pay.downloadfundflow.post({
//                            ^^^^
  appid,
  mch_id,
  sub_appid,
  sub_mch_id,
  nonce_str,
  sign_type,
  bill_date,
  account_type,
  tar_type,
}, { security, responseType, transformResponse, })
//             ^?
.then(
  ({ // [!code hl:5]
    data,
  }) => {
    data.pipe(createWriteStream('./downloaded.csv.gz'))
  }
)
```
