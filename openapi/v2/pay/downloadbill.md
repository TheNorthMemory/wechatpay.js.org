---
title: 下载对账单
description: 商户可以通过该接口下载历史交易清单。比如掉单、系统错误等导致商户侧和微信侧数据不一致，通过对账单核对后可校正支付状态。
---

# {{ $frontmatter.title }}

{{ $frontmatter.description }} [官方付款码文档](https://pay.weixin.qq.com/wiki/doc/api/micropay.php?chapter=9_6) [官方JSAPI文档](https://pay.weixin.qq.com/wiki/doc/api/jsapi.php?chapter=9_6) [官方NATIVE文档](https://pay.weixin.qq.com/wiki/doc/api/native.php?chapter=9_6) [官方APP文档](https://pay.weixin.qq.com/wiki/doc/api/app/app.php?chapter=9_6&index=8) [官方H5文档](https://pay.weixin.qq.com/wiki/doc/api/H5.php?chapter=9_6&index=6) [官方小程序支付文档](https://pay.weixin.qq.com/wiki/doc/api/wxa/wxa_api.php?chapter=9_6) [官方人脸支付文档](https://share.weiyun.com/5dxUgCw)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
import { ReadStream } from 'fs'
namespace WeChatPay.OpenAPI.V2.Pay.Downloadbill.PostHttpMethod {
  export interface XmlDataRequest {
    appid: string
    mch_id: string
    sub_appid?: string
    sub_mch_id?: string
    nonce_str?: string
    bill_date: string
    bill_type?: 'ALL' | 'SUCCESS' | 'REFUND' | 'RECHARGE_REFUND'
    tar_type?: 'GZIP'
    sign_type?: 'MD5' | 'HMAC-SHA256'
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: XmlDataRequest
    responseType: 'arraybuffer'
    transformResponse: []
  }
  export interface WellformedResponse extends ReadStream {
  }
}
namespace WeChatPay.OpenAPI.V2.Pay {
  export interface Downloadbill {
    /**
     * shortland
     * @link https://share.weiyun.com/5dxUgCw
     */
    (data: Downloadbill.PostHttpMethod.XmlDataRequest, config?: Downloadbill.PostHttpMethod.RequestConfig): AxiosPromise<Downloadbill.PostHttpMethod.WellformedResponse>
    /**
     * 下载对账单
     * @link https://share.weiyun.com/5dxUgCw
     */
    post(data: Downloadbill.PostHttpMethod.XmlDataRequest, config?: Downloadbill.PostHttpMethod.RequestConfig): AxiosPromise<Downloadbill.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V2 {
  export interface Pay {
    downloadbill: Pay.Downloadbill
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
wxpay.v2.pay.downloadbill.post({
//                        ^^^^
  appid,
  mch_id,
  sub_appid,
  sub_mch_id,
  nonce_str,
  bill_date,
  bill_type,
  tar_type,
  sign_type,
}, { responseType, transformResponse, })
//   ^?
.then(
  ({ // [!code hl:5]
    data,
  }) => {
    data.pipe(createWriteStream('./downloaded.csv.gz'))
  }
)
```
