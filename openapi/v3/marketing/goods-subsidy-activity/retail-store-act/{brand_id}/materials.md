---
title: 生成小店活动物料码
description: 该接口为服务商或商户给零售小店活动申请物料码专用接口。 使用对象：品牌的品牌主商户号或品牌服务商。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Marketing.GoodsSubsidyActivity.RetailStoreAct._brand_id_.Materials.PostHttpMethod {
  export interface JsonDataRequest {
    out_request_no: string
    material_num: number
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
    brand_id: string
  }
  export interface WellformedResponse {
    material_list: {
      material_id: string
      material_url: string
    }[]
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing.GoodsSubsidyActivity.RetailStoreAct._brand_id_ {
  export interface Materials {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/docs/partner/apis/retail-store/retail-store-act/create-materials.html
     */
    (data: Materials.PostHttpMethod.JsonDataRequest, config: Materials.PostHttpMethod.RequestConfig): AxiosPromise<Materials.PostHttpMethod.WellformedResponse>
    /**
     * 生成小店活动物料码
     * @link https://pay.weixin.qq.com/docs/partner/apis/retail-store/retail-store-act/create-materials.html
     */
    post(data: Materials.PostHttpMethod.JsonDataRequest, config: Materials.PostHttpMethod.RequestConfig): AxiosPromise<Materials.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing.GoodsSubsidyActivity.RetailStoreAct {
  export interface _brand_id_ {
    materials: _brand_id_.Materials
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
wxpay.v3.marketing.goodsSubsidyActivity.retailStoreAct._brand_id_.materials.post({
//                                                                          ^^^^
  out_request_no,
  material_num,
}, { brand_id })
.then(
  ({ // [!code hl:7]
    data: {
      material_list,
    },
  }) => ({
    material_list,
  })
)
```

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4012384337) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012384395)
