---
title: 查询小店活动门店详情
description: 该接口为服务商或商户给零售小店活动查询门店详情专用接口。 使用对象：品牌的品牌主商户号或品牌服务商。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/docs/partner/apis/retail-store/retail-store-act/get-store.html)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Marketing.GoodsSubsidyActivity.RetailStoreAct._brand_id_.Stores._store_code_.GetHttpMethod {
  export interface RequestConfig extends AxiosRequestConfig {
    brand_id: string
    store_code: string
  }
  export interface WellformedResponse {
    store_code: string
    store_name: string
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing.GoodsSubsidyActivity.RetailStoreAct._brand_id_.Stores {
  export interface _store_code_ {
    /**
     * 查询小店活动门店详情
     * @link https://pay.weixin.qq.com/docs/partner/apis/retail-store/retail-store-act/get-store.html
     */
    get(config: _store_code_.GetHttpMethod.RequestConfig): AxiosPromise<_store_code_.GetHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing.GoodsSubsidyActivity.RetailStoreAct._brand_id_ {
  export interface Stores {
    _store_code_: Stores._store_code_
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing.GoodsSubsidyActivity.RetailStoreAct {
  export interface _brand_id_ {
    stores: _brand_id_.Stores
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing.GoodsSubsidyActivity {
  export interface RetailStoreAct {
    _brand_id_: RetailStoreAct._brand_id_
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
wxpay.v3.marketing.goodsSubsidyActivity.retailStoreAct._brand_id_.stores._store_code_.get({
//                                                                                    ^^^
  brand_id,
  store_code,
})
.then(
  ({ // [!code hl:9]
    data: {
      store_code,
      store_name,
    },
  }) => ({
    store_code,
    store_name,
  })
)
```
