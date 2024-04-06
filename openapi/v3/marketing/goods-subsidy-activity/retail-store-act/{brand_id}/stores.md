---
title: 添加/删除/查询小店活动门店
description: 该接口为服务商或商户给零售小店活动添加门店专用接口。 使用对象：品牌的品牌主商户号或品牌服务商。
---

# 添加小店活动门店 {#post}

该接口为服务商或商户给零售小店活动添加门店专用接口。 使用对象：品牌的品牌主商户号或品牌服务商。 [官方文档](https://pay.weixin.qq.com/docs/partner/apis/retail-store/retail-store-act/add-stores.html)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Marketing.GoodsSubsidyActivity.RetailStoreAct._brand_id_.Stores.PostHttpMethod {
  export interface JsonDataRequest {
    out_request_no: string
    add_time: string | Date
    stores: {
      store_code: string
      store_name: string
    }[]
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
    brand_id: string
  }
  export interface WellformedResponse {
    add_time: string | Date
    failed_stores: {
      store_code: string
      store_name: string
    }[]
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing.GoodsSubsidyActivity.RetailStoreAct._brand_id_ {
  export interface Stores {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/docs/partner/apis/retail-store/retail-store-act/add-stores.html
     */
    (data: Stores.PostHttpMethod.JsonDataRequest, config: Stores.PostHttpMethod.RequestConfig): AxiosPromise<Stores.PostHttpMethod.WellformedResponse>
    /**
     * 添加小店活动门店
     * @link https://pay.weixin.qq.com/docs/partner/apis/retail-store/retail-store-act/add-stores.html
     */
    post(data: Stores.PostHttpMethod.JsonDataRequest, config: Stores.PostHttpMethod.RequestConfig): AxiosPromise<Stores.PostHttpMethod.WellformedResponse>
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
wxpay.v3.marketing.goodsSubsidyActivity.retailStoreAct._brand_id_.stores.post({
//                                                                       ^^^^
  out_request_no,
  add_time,
  stores,
}, { brand_id })
.then(
  ({ // [!code hl:9]
    data: {
      add_time,
      failed_stores,
    },
  }) => ({
    add_time,
    failed_stores,
  })
)
```

# 删除小店活动门店 {#delete}

该接口为服务商或商户给零售小店活动删除门店专用接口。 使用对象：品牌的品牌主商户号或品牌服务商。 [官方文档](https://pay.weixin.qq.com/docs/partner/apis/retail-store/retail-store-act/delete-stores.html)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Marketing.GoodsSubsidyActivity.RetailStoreAct._brand_id_.Stores.DeleteHttpMethod {
  export interface RequestConfig extends AxiosRequestConfig {
    brand_id: string
    data: {
      out_request_no: string
      delete_time: string | Date
      stores: {
        store_code: string
        store_name: string
      }[]
    }
  }
  export interface WellformedResponse {
    delete_time: string | Date
    failed_stores: {
      store_code: string
      store_name: string
    }[]
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing.GoodsSubsidyActivity.RetailStoreAct._brand_id_ {
  export interface Stores {
    /**
     * 删除小店活动门店
     * @link https://pay.weixin.qq.com/docs/partner/apis/retail-store/retail-store-act/delete-stores.html
     */
    delete(config: Stores.DeleteHttpMethod.RequestConfig): AxiosPromise<Stores.DeleteHttpMethod.WellformedResponse>
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
wxpay.v3.marketing.goodsSubsidyActivity.retailStoreAct._brand_id_.stores.delete({
//                                                                       ^^^^^^
  brand_id,
  data,
})
.then(
  ({ // [!code hl:9]
    data: {
      delete_time,
      failed_stores,
    },
  }) => ({
    delete_time,
    failed_stores,
  })
)
```

# 查询小店活动门店列表 {#get}

该接口为服务商或商户给零售小店活动查询门店列表专用接口。 使用对象：品牌的品牌主商户号或品牌服务商。 [官方文档](https://pay.weixin.qq.com/docs/partner/apis/retail-store/retail-store-act/list-store.html)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Marketing.GoodsSubsidyActivity.RetailStoreAct._brand_id_.Stores.GetHttpMethod {
  export interface RequestConfig extends AxiosRequestConfig {
    brand_id: string
    params: {
      offset: number
      limit: number
    }
  }
  export interface WellformedResponse {
    total_count: number
    data: {
      store_code: string
      store_name: string
    }[]
    offset: number
    limit: number
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing.GoodsSubsidyActivity.RetailStoreAct._brand_id_ {
  export interface Stores {
    /**
     * 查询小店活动门店列表
     * @link https://pay.weixin.qq.com/docs/partner/apis/retail-store/retail-store-act/list-store.html
     */
    get(config: Stores.GetHttpMethod.RequestConfig): AxiosPromise<Stores.GetHttpMethod.WellformedResponse>
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
wxpay.v3.marketing.goodsSubsidyActivity.retailStoreAct._brand_id_.stores.get({
//                                                                       ^^^
  brand_id,
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
