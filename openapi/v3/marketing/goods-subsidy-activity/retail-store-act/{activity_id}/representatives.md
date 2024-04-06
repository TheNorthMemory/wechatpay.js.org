---
title: 查询零售小店活动业务代理
description: 该接口为服务商或商户给零售小店活动查询业务代理的专用接口。 使用对象：活动创建方商户号、活动归属品牌的品牌主商户号或品牌经营商户号。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/docs/partner/apis/retail-store/retail-store-act/list-representative.html)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Marketing.GoodsSubsidyActivity.RetailStoreAct._activity_id_.Representatives.GetHttpMethod {
  export interface RequestConfig extends AxiosRequestConfig {
    activity_id: string
    params: {
      offset: number
      limit: number
    }
  }
  export interface WellformedResponse {
    total_count: number
    data: {
      openid: string
    }[]
    offset: number
    limit: number
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing.GoodsSubsidyActivity.RetailStoreAct._activity_id_ {
  export interface Representatives {
    /**
     * 查询零售小店活动业务代理
     * @link https://pay.weixin.qq.com/docs/partner/apis/retail-store/retail-store-act/list-representative.html
     */
    get(config: Representatives.GetHttpMethod.RequestConfig): AxiosPromise<Representatives.GetHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing.GoodsSubsidyActivity.RetailStoreAct {
  export interface _activity_id_ {
    representatives: _activity_id_.Representatives
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing.GoodsSubsidyActivity {
  export interface RetailStoreAct {
    _activity_id_: RetailStoreAct._activity_id_
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing {
  export interface GoodsSubsidyActivity {
    retailStoreAct: GoodsSubsidyActivity.RetailStoreAct
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
wxpay.v3.marketing.goodsSubsidyActivity.retailStoreAct._activity_id_.representatives.get({
//                                                                                   ^^^
  activity_id,
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
