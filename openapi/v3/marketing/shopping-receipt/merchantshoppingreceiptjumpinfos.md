---
title: 上传商家电子小票跳转信息
description: 接口介绍：可通过该接口给对应的微信支付订单上传商家电子小票跳转信息。上传成功后，用户可以在账单详情页看到对应的跳转入口。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Marketing.ShoppingReceipt.Merchantshoppingreceiptjumpinfos.PostHttpMethod {
  export interface JsonDataRequest {
    transaction_id: string
    transaction_mchid: string
    transaction_sub_mchid: string
    openid: string
    merchant_upload_time: string
    jump_info: {
      merchant_appid: string
      merchant_path: string
    }
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
  }
  export interface WellformedResponse {
    merchant_jump_info: {
      transaction_id: string
      transaction_mchid: string
      transaction_sub_mchid: string
      openid: string
      merchant_upload_time: string
      jump_info: {
        merchant_appid: string
        merchant_path: string
      }
      create_time: string
      modify_time: string
      brand_id: number
    }
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing.ShoppingReceipt {
  export interface Merchantshoppingreceiptjumpinfos {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/docs/partner/apis/shopping-receipt/merchant-shopping-receipt-jump-infos/create-merchant-shopping-receipt-jump-info.html
     */
    (data: Merchantshoppingreceiptjumpinfos.PostHttpMethod.JsonDataRequest, config?: Merchantshoppingreceiptjumpinfos.PostHttpMethod.RequestConfig): AxiosPromise<Merchantshoppingreceiptjumpinfos.PostHttpMethod.WellformedResponse>
    /**
     * 上传商家电子小票跳转信息
     * @link https://pay.weixin.qq.com/docs/partner/apis/shopping-receipt/merchant-shopping-receipt-jump-infos/create-merchant-shopping-receipt-jump-info.html
     */
    post(data: Merchantshoppingreceiptjumpinfos.PostHttpMethod.JsonDataRequest, config?: Merchantshoppingreceiptjumpinfos.PostHttpMethod.RequestConfig): AxiosPromise<Merchantshoppingreceiptjumpinfos.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing {
  export interface ShoppingReceipt {
    merchantshoppingreceiptjumpinfos: ShoppingReceipt.Merchantshoppingreceiptjumpinfos
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
// ---cut---
wxpay.v3.marketing.shoppingReceipt.merchantshoppingreceiptjumpinfos.post({
//                                                                  ^^^^
  transaction_id,
  transaction_mchid,
  transaction_sub_mchid,
  openid,
  merchant_upload_time,
  jump_info,
})
.then(
  ({ // [!code hl:7]
    data: {
      merchant_jump_info,
    },
  }) => ({
    merchant_jump_info,
  })
)
```

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4012443843) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012443825)
