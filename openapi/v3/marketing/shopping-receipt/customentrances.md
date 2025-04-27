---
title: 创建自定义入口
description: 接口介绍：该接口为电子小票自定义入口创建接口，商家可以通过该接口为品牌创建自定义入口展示内容。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/docs/partner/apis/shopping-receipt/custom-entrances/create-custom-entrance.html)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Marketing.ShoppingReceipt.Customentrances.PostHttpMethod {
  export interface JsonDataRequest {
    custom_entrance_type: string
    subtitle: string
    goods_thumbnail_url: string
    start_time: string
    end_time: string
    custom_entrance_state: string
    brand_id: string
    out_request_no: string
    jump_link: {
      mini_programs_appid: string
      mini_programs_path: string
    }
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
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
namespace WeChatPay.OpenAPI.V3.Marketing.ShoppingReceipt {
  export interface Customentrances {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/docs/partner/apis/shopping-receipt/custom-entrances/create-custom-entrance.html
     */
    (data: Customentrances.PostHttpMethod.JsonDataRequest, config?: Customentrances.PostHttpMethod.RequestConfig): AxiosPromise<Customentrances.PostHttpMethod.WellformedResponse>
    /**
     * 创建自定义入口
     * @link https://pay.weixin.qq.com/docs/partner/apis/shopping-receipt/custom-entrances/create-custom-entrance.html
     */
    post(data: Customentrances.PostHttpMethod.JsonDataRequest, config?: Customentrances.PostHttpMethod.RequestConfig): AxiosPromise<Customentrances.PostHttpMethod.WellformedResponse>
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
wxpay.v3.marketing.shoppingReceipt.customentrances.post({
//                                                 ^^^^
  custom_entrance_type,
  subtitle,
  goods_thumbnail_url,
  start_time,
  end_time,
  custom_entrance_state,
  brand_id,
  out_request_no,
  jump_link,
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

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4012526342) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012697703)
