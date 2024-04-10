---
title: 门店报名品牌加价购活动
description: 指定服务商可通过该接口报名加价购活动、查询某个区域内的加价购活动列表、锁定加价活动购资格以及解锁加价购活动资格。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/docs/merchant/products/retail-store/introduction.html)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Marketing.GoodsSubsidyActivity.Activity._activity_id_.Apply.PostHttpMethod {
  export interface JsonDataRequest {
    caller_merchant_id: string
    apply_infos: {
      store_info: {
        store_id: string
        accounting_merchant_id: string
        merchant_id: string
      }
      goods_original_price: number
    }[]
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
    activity_id: string
  }
  export interface WellformedResponse {
    return_message: string
    failed_apply_infos: {
      store_info: {
        store_id: string
        accounting_merchant_id: string
        merchant_id: string
      }
      goods_original_price: number
    }[]
    succeed_apply_infos: {
      store_info: {
        store_id: string
        accounting_merchant_id: string
        merchant_id: string
      }
      goods_original_price: number
    }[]
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing.GoodsSubsidyActivity.Activity._activity_id_ {
  export interface Apply {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/docs/merchant/products/retail-store/introduction.html
     */
    (data: Apply.PostHttpMethod.JsonDataRequest, config: Apply.PostHttpMethod.RequestConfig): AxiosPromise<Apply.PostHttpMethod.WellformedResponse>
    /**
     * 门店报名品牌加价购活动
     * @link https://pay.weixin.qq.com/docs/merchant/products/retail-store/introduction.html
     */
    post(data: Apply.PostHttpMethod.JsonDataRequest, config: Apply.PostHttpMethod.RequestConfig): AxiosPromise<Apply.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing.GoodsSubsidyActivity.Activity {
  export interface _activity_id_ {
    apply: _activity_id_.Apply
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing.GoodsSubsidyActivity {
  export interface Activity {
    _activity_id_: Activity._activity_id_
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing {
  export interface GoodsSubsidyActivity {
    activity: GoodsSubsidyActivity.Activity
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
wxpay.v3.marketing.goodsSubsidyActivity.activity._activity_id_.apply.post({
//                                                                   ^^^^
  caller_merchant_id,
  apply_infos,
}, { activity_id })
.then(
  ({ // [!code hl:11]
    data: {
      return_message,
      failed_apply_infos,
      succeed_apply_infos,
    },
  }) => ({
    return_message,
    failed_apply_infos,
    succeed_apply_infos,
  })
)
```
