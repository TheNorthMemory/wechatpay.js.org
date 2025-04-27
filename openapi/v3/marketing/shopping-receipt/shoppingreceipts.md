---
title: 上传电子小票
description: 商户将支付成功回传的参数填入指定字段，可以给指定微信支付订单上传电子小票。 上传成功后，用户可以在账单详情页看到商户上传的电子小票。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { Multipart } from 'wechatpay-axios-plugin'
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Marketing.ShoppingReceipt.Shoppingreceipts.PostHttpMethod {
  export interface BinaryDataRequest extends Multipart {
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: BinaryDataRequest
    headers: {
      'Wechatpay-Serial': string
    }
  }
  export interface WellformedResponse {
    receipt: {
      receipt_id: string
      state: string
      transaction_id: string
      transaction_mchid: string
      transaction_sub_mchid: string
      openid: string
      brand_id: number
      sha256: string
      image_type: string
      create_time: string | Date
      modify_time: string | Date
      merchant_contact_information: {
        consultation_phone_number: string
      }
      upload_time: string | Date
    }
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing.ShoppingReceipt {
  export interface Shoppingreceipts {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/docs/partner/apis/shopping-receipt/shopping-receipts/upload-shopping-receipt.html
     */
    (data: Shoppingreceipts.PostHttpMethod.BinaryDataRequest, config: Shoppingreceipts.PostHttpMethod.RequestConfig): AxiosPromise<Shoppingreceipts.PostHttpMethod.WellformedResponse>
    /**
     * 上传电子小票
     * @link https://pay.weixin.qq.com/docs/partner/apis/shopping-receipt/shopping-receipts/upload-shopping-receipt.html
     */
    post(data: Shoppingreceipts.PostHttpMethod.BinaryDataRequest, config: Shoppingreceipts.PostHttpMethod.RequestConfig): AxiosPromise<Shoppingreceipts.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing {
  export interface ShoppingReceipt {
    shoppingreceipts: ShoppingReceipt.Shoppingreceipts
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface Marketing {
    shoppingReceipt: Marketing.ShoppingReceipt
  }
}
namespace WeChatPay.OpenAPI {
  export interface V3 {
    marketing: V3.Marketing
  }
}
export interface Wechatpay {
  /**
   * APIv3 endpoint
   */
  v3: WeChatPay.OpenAPI.V3
}
export var wxpay: Wechatpay
// @filename: business.js
import { wxpay } from './virtual'
/**
 * @type {import('crypto').BinaryLike}
 */
var platformCertificateInstance;
var transaction_id = '', transaction_mchid = '', transaction_sub_mchid = '', out_trade_no = '', openid = '', upload_time = '', phone_number = ''
// ---cut---
const { Multipart, Rsa } = require('wechatpay-axios-plugin')
const { createReadStream } = require('fs')
const { basename } = require('path')

const localFilePath = '/path/to/merchant-receipt-file.jpg'
const stream = createReadStream(localFilePath)
const media = new Multipart()
  .append('meta', JSON.stringify({
    transaction_id,
    transaction_mchid,
    transaction_sub_mchid,
    out_trade_no,
    openid,
    upload_time,
    merchant_contact_information: {
      consultation_phone_number: Rsa.encrypt(phone_number, platformCertificateInstance),
    },
    sha256: 'from upstream or local calculated',
  }))
  .append('file', stream, basename(localFilePath))

wxpay.v3.marketing.shoppingReceipt.shoppingreceipts.post(media, { headers })
//                                                  ^^^^
.then(
  ({ // [!code hl:7]
    data: {
      receipt,
    },
  }) => ({
    receipt,
  })
)
```

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4012553506) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012698614)
