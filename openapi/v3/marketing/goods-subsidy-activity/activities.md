---
title: 按区域查询品牌加价购活动
description: 指定服务商可通过该接口报名加价购活动、查询某个区域内的加价购活动列表、锁定加价活动购资格以及解锁加价购活动资格。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/docs/merchant/products/retail-store/introduction.html)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Marketing.GoodsSubsidyActivity.Activities.GetHttpMethod {
  export interface RequestConfig extends AxiosRequestConfig {
    params: {
      city_id: string
      offset: number
      limit: number
    }
  }
  export interface WellformedResponse {
    total_count: number
    data: {
      activity_id: string
      brand_id: string
      creator_merchant_id: string
      activity_info: {
        activity_name: string
        apply_start_time: string | Date
        apply_end_time: string | Date
        activity_start_time: string | Date
        activity_end_time: string | Date
        activity_description: string
      }
      goods_information: {
        goods_id: string
        goods_name: string
        goods_picture_url: string
      }
      rule_information: {
        store_subsidy: string
        service_provider_subsidy: string
        store_subsidy_quota: string
        user_subsidy_quota: string
        areas: {
          province: string
          city: string
          district: string
        }[]
      }
    }[]
    offset: number
    limit: number
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing.GoodsSubsidyActivity {
  export interface Activities {
    /**
     * 按区域查询品牌加价购活动
     * @link https://pay.weixin.qq.com/docs/merchant/products/retail-store/introduction.html
     */
    get(config: Activities.GetHttpMethod.RequestConfig): AxiosPromise<Activities.GetHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing {
  export interface GoodsSubsidyActivity {
    activities: GoodsSubsidyActivity.Activities
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
wxpay.v3.marketing.goodsSubsidyActivity.activities.get({
//                                                 ^^^
  params,
})
.then(
  ({ // [!code hl:13]
    data: {
      total_count,
      data,
      offset,
      limit,
    },
  }) => ({
    total_count,
    data,
    offset,
    limit,
  })
)
```
