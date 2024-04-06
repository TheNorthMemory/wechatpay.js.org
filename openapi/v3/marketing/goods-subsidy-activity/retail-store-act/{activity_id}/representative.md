---
title: 添加零售小店活动业务代理
description: 该接口为服务商或商户给零售小店活动添加业务代理的专用接口。 使用对象：活动创建方商户号、活动归属品牌的品牌主商户号或品牌经营商户号。
---

# 添加零售小店活动业务代理 {#put}

该接口为服务商或商户给零售小店活动添加业务代理的专用接口。 使用对象：活动创建方商户号、活动归属品牌的品牌主商户号或品牌经营商户号。 [官方文档](https://pay.weixin.qq.com/docs/partner/apis/retail-store/retail-stores/add-representative.html)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Marketing.GoodsSubsidyActivity.RetailStoreAct._activity_id_.Representative.PutHttpMethod {
  export interface JsonDataRequest {
    representative_info_list: {
      openid: string
    }[]
    out_request_no: string
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
    activity_id: string
  }
  export interface WellformedResponse {
    activity_id: string
    failed_representative_info_list: {
      openid: string
    }[]
    add_time: string | Date
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing.GoodsSubsidyActivity.RetailStoreAct._activity_id_ {
  export interface Representative {
    /**
     * 添加零售小店活动业务代理
     * @link https://pay.weixin.qq.com/docs/partner/apis/retail-store/retail-stores/add-representative.html
     */
    put(data: Representative.PutHttpMethod.JsonDataRequest, config: Representative.PutHttpMethod.RequestConfig): AxiosPromise<Representative.PutHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing.GoodsSubsidyActivity.RetailStoreAct {
  export interface _activity_id_ {
    representative: _activity_id_.Representative
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
wxpay.v3.marketing.goodsSubsidyActivity.retailStoreAct._activity_id_.representative.put({
//                                                                                  ^^^
  representative_info_list,
  out_request_no,
}, { activity_id })
.then(
  ({ // [!code hl:11]
    data: {
      activity_id,
      failed_representative_info_list,
      add_time,
    },
  }) => ({
    activity_id,
    failed_representative_info_list,
    add_time,
  })
)
```

# 删除零售小店活动业务代理 {#delete}

该接口为服务商或商户给零售小店活动删除业务代理的专用接口。 使用对象：活动创建方商户号、活动归属品牌的品牌主商户号或品牌经营商户号。 [官方文档](https://pay.weixin.qq.com/docs/partner/apis/retail-store/retail-store-act/delete-representative.html)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Marketing.GoodsSubsidyActivity.RetailStoreAct._activity_id_.Representative.DeleteHttpMethod {
  export interface RequestConfig extends AxiosRequestConfig {
    activity_id: string
    data: {
      representative_info_list: {
        openid: string
      }[]
      out_request_no: string
      delete_time: string | Date
    }
  }
  export interface WellformedResponse {
    activity_id: string
    failed_representative_info_list: {
      openid: string
    }[]
    out_request_no: string
    delete_time: string | Date
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing.GoodsSubsidyActivity.RetailStoreAct._activity_id_ {
  export interface Representative {
    /**
     * 删除零售小店活动业务代理
     * @link https://pay.weixin.qq.com/docs/partner/apis/retail-store/retail-store-act/delete-representative.html
     */
    delete(config: Representative.DeleteHttpMethod.RequestConfig): AxiosPromise<Representative.DeleteHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing.GoodsSubsidyActivity.RetailStoreAct {
  export interface _activity_id_ {
    representative: _activity_id_.Representative
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
wxpay.v3.marketing.goodsSubsidyActivity.retailStoreAct._activity_id_.representative.delete({
//                                                                                  ^^^^^^
  activity_id,
  data,
})
.then(
  ({ // [!code hl:11]
    data: {
      activity_id,
      failed_representative_info_list,
      delete_time,
    },
  }) => ({
    activity_id,
    failed_representative_info_list,
    delete_time,
  })
)
```
