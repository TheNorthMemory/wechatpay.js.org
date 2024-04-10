---
title: 解锁品牌加价购活动资格
description: 指定服务商可通过该接口报名加价购活动、查询某个区域内的加价购活动列表、锁定加价活动购资格以及解锁加价购活动资格。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/docs/merchant/products/retail-store/introduction.html)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Marketing.GoodsSubsidyActivity.Qualification.Unlock.PostHttpMethod {
  export interface JsonDataRequest {
    order_information: {
      payer_openid: string
      out_trade_no: string
      total_fee: number
      store_id: string
      store_merchant_id: string
    }
    qualification_ids: string[]
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
  }
  export interface WellformedResponse {
    return_message: string
    failed_qualification_ids: string[]
    succeed_qualification_ids: string[]
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing.GoodsSubsidyActivity.Qualification {
  export interface Unlock {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/docs/merchant/products/retail-store/introduction.html
     */
    (data: Unlock.PostHttpMethod.JsonDataRequest, config?: Unlock.PostHttpMethod.RequestConfig): AxiosPromise<Unlock.PostHttpMethod.WellformedResponse>
    /**
     * 解锁品牌加价购活动资格
     * @link https://pay.weixin.qq.com/docs/merchant/products/retail-store/introduction.html
     */
    post(data: Unlock.PostHttpMethod.JsonDataRequest, config?: Unlock.PostHttpMethod.RequestConfig): AxiosPromise<Unlock.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing.GoodsSubsidyActivity {
  export interface Qualification {
    unlock: Qualification.Unlock
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing {
  export interface GoodsSubsidyActivity {
    qualification: GoodsSubsidyActivity.Qualification
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface Marketing {
    goodsSubsidyActivity: Marketing.GoodsSubsidyActivity
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
wxpay.v3.marketing.goodsSubsidyActivity.qualification.unlock.post({
//                                                           ^^^^
  order_information,
  qualification_ids,
})
.then(
  ({ // [!code hl:11]
    data: {
      return_message,
      failed_qualification_ids,
      succeed_qualification_ids,
    },
  }) => ({
    return_message,
    failed_qualification_ids,
    succeed_qualification_ids,
  })
)
```
