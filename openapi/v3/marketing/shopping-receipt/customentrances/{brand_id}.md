---
title: 查询/更新自定义入口
description: 该接口为电子小票自定义入口查询或更新接口，商家可以通过该接口查询品牌的自定义入口展示内容。
---

# 查询自定义入口 {#get}

该接口为电子小票自定义入口查询接口，商家可以通过该接口查询品牌的自定义入口展示内容。

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Marketing.ShoppingReceipt.Customentrances._brand_id_.GetHttpMethod {
  export interface RequestConfig extends AxiosRequestConfig {
    brand_id: string
  }
  export interface WellformedResponse {
    custom_entrance_type: string
    subtitle: string
    goods_thumbnail_url: string
    custom_entrance_state: string
    start_time: string | Date
    end_time: string | Date
    brand_id: string
    create_time: string | Date
    modify_time: string | Date
    out_request_no: string
    jump_link: {
      mini_programs_appid: string
      mini_programs_path: string
    }
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing.ShoppingReceipt.Customentrances {
  export interface _brand_id_ {
    /**
     * 查询自定义入口
     * @link https://pay.weixin.qq.com/docs/partner/apis/shopping-receipt/custom-entrances/query-custom-entrance.html
     */
    get(config: _brand_id_.GetHttpMethod.RequestConfig): AxiosPromise<_brand_id_.GetHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing.ShoppingReceipt {
  export interface Customentrances {
    _brand_id_: Customentrances._brand_id_
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing {
  export interface ShoppingReceipt {
    customentrances: ShoppingReceipt.Customentrances
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
wxpay.v3.marketing.shoppingReceipt.customentrances._brand_id_.get({
//                                                            ^^^
  brand_id,
})
.then(
  ({ // [!code hl:27]
    data: {
      custom_entrance_type,
      subtitle,
      goods_thumbnail_url,
      custom_entrance_state,
      start_time,
      end_time,
      brand_id,
      create_time,
      modify_time,
      out_request_no,
      jump_link,
    },
  }) => ({
    custom_entrance_type,
    subtitle,
    goods_thumbnail_url,
    custom_entrance_state,
    start_time,
    end_time,
    brand_id,
    create_time,
    modify_time,
    out_request_no,
    jump_link,
  })
)
```

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4012526406) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012698331)

# 更新自定义入口 {#patch}

该接口为电子小票自定义入口更新接口，商家可以通过该接口为品牌更新自定义入口展示内容。

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Marketing.ShoppingReceipt.Customentrances._brand_id_.PatchHttpMethod {
  export interface JsonDataRequest {
    custom_entrance_type: string
    subtitle: string
    goods_thumbnail_url: string
    custom_entrance_state: string
    start_time: string | Date
    end_time: string | Date
    out_request_no: string
    jump_link: {
      mini_programs_appid: string
      mini_programs_path: string
    }
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
    brand_id: string
  }
  export interface WellformedResponse {
    custom_entrance_type: string
    subtitle: string
    goods_thumbnail_url: string
    custom_entrance_state: string
    start_time: string | Date
    end_time: string | Date
    brand_id: string
    create_time: string | Date
    modify_time: string | Date
    out_request_no: string
    jump_link: {
      mini_programs_appid: string
      mini_programs_path: string
    }
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing.ShoppingReceipt.Customentrances._brand_id_.GetHttpMethod {
  export interface RequestConfig extends AxiosRequestConfig {
    brand_id: string
  }
  export interface WellformedResponse {
    custom_entrance_type: string
    subtitle: string
    goods_thumbnail_url: string
    custom_entrance_state: string
    start_time: string | Date
    end_time: string | Date
    brand_id: string
    create_time: string | Date
    modify_time: string | Date
    out_request_no: string
    jump_link: {
      mini_programs_appid: string
      mini_programs_path: string
    }
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing.ShoppingReceipt.Customentrances {
  export interface _brand_id_ {
    /**
     * 更新自定义入口
     * @link https://pay.weixin.qq.com/docs/partner/apis/shopping-receipt/custom-entrances/update-custom-entrance.html
     */
    patch(data: _brand_id_.PatchHttpMethod.JsonDataRequest, config: _brand_id_.PatchHttpMethod.RequestConfig): AxiosPromise<_brand_id_.PatchHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing.ShoppingReceipt {
  export interface Customentrances {
    _brand_id_: Customentrances._brand_id_
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing {
  export interface ShoppingReceipt {
    customentrances: ShoppingReceipt.Customentrances
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
wxpay.v3.marketing.shoppingReceipt.customentrances._brand_id_.patch({
//                                                            ^^^^^
  custom_entrance_type,
  subtitle,
  goods_thumbnail_url,
  custom_entrance_state,
  start_time,
  end_time,
  out_request_no,
  jump_link,
}, { brand_id, })
.then(
  ({ // [!code hl:27]
    data: {
      custom_entrance_type,
      subtitle,
      goods_thumbnail_url,
      custom_entrance_state,
      start_time,
      end_time,
      brand_id,
      create_time,
      modify_time,
      out_request_no,
      jump_link,
    },
  }) => ({
    custom_entrance_type,
    subtitle,
    goods_thumbnail_url,
    custom_entrance_state,
    start_time,
    end_time,
    brand_id,
    create_time,
    modify_time,
    out_request_no,
    jump_link,
  })
)
```

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4012526475) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012697769)
