---
title: 上传及查询预存code
description: 商家券的Code码可由微信后台随机分配，同时支持商户自定义。如商家已有自己的优惠券系统，可直接使用自定义模式。即商家预先向微信支付上传券Code，当券在发放时，微信支付自动从已导入的Code中随机取值（不能指定），派发给用户。
---

# 上传预存code {#post}

商家券的Code码可由微信后台随机分配，同时支持商户自定义。如商家已有自己的优惠券系统，可直接使用自定义模式。即商家预先向微信支付上传券Code，当券在发放时，微信支付自动从已导入的Code中随机取值（不能指定），派发给用户。

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Marketing.Busifavor.Stocks._stock_id_.Couponcodes.PostHttpMethod {
  export interface JsonDataRequest {
    coupon_code_list: string[]
    upload_request_no: string
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
    stock_id: string
  }
  export interface WellformedResponse {
    stock_id: string
    total_count: number
    success_count: number
    success_codes: string[]
    success_time: string
    fail_count: number
    fail_codes: {
      coupon_code: string
      code: string
      message: string
    }[]
    exist_codes: string[]
    duplicate_codes: string[]
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing.Busifavor.Stocks._stock_id_ {
  export interface Couponcodes {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/apis/chapter9_2_6.shtml
     */
    (data: Couponcodes.PostHttpMethod.JsonDataRequest, config: Couponcodes.PostHttpMethod.RequestConfig): AxiosPromise<Couponcodes.PostHttpMethod.WellformedResponse>
    /**
     * 上传预存code API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/apis/chapter9_2_6.shtml
     */
    post(data: Couponcodes.PostHttpMethod.JsonDataRequest, config: Couponcodes.PostHttpMethod.RequestConfig): AxiosPromise<Couponcodes.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing.Busifavor.Stocks {
  export interface _stock_id_ {
    couponcodes: _stock_id_.Couponcodes
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing.Busifavor {
  export interface Stocks {
    _stock_id_: Stocks._stock_id_
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing {
  export interface Busifavor {
    stocks: Busifavor.Stocks
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface Marketing {
    busifavor: Marketing.Busifavor
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
wxpay.v3.marketing.busifavor.stocks._stock_id_.couponcodes.post({
//                                                         ^^^^
  coupon_code_list,
  upload_request_no,
}, { stock_id, })
.then(
  ({ // [!code hl:23]
    data: {
      stock_id,
      total_count,
      success_count,
      success_codes,
      success_time,
      fail_count,
      fail_codes,
      exist_codes,
      duplicate_codes,
    },
  }) => ({
    stock_id,
    total_count,
    success_count,
    success_codes,
    success_time,
    fail_count,
    fail_codes,
    exist_codes,
    duplicate_codes,
  })
)
```

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4012487038) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012492853)

# 查询预存code列表 {#get}

[官方文档](https://pay.weixin.qq.com/docs/merchant/products/merchant-exclusive-coupon/introduction.html)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Marketing.Busifavor.Stocks._stock_id_.Couponcodes.GetHttpMethod {
  export interface RequestConfig extends AxiosRequestConfig {
    stock_id: string
    params: {
      status: string
      appid: string
      offset: number
      limit: number
    }
  }
  export interface WellformedResponse {
    stock_id: string
    total_count: number
    limit: number
    offset: number
    data: {
      code: string
      code_status: string
      upload_time: string | Date
      dispatched_time: string | Date
      openid: string
      unionid: string
      coupon_code: string
    }[]
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing.Busifavor.Stocks._stock_id_ {
  export interface Couponcodes {
    /**
     * 查询预存code列表
     * @link https://pay.weixin.qq.com/docs/merchant/products/merchant-exclusive-coupon/introduction.html
     */
    get(config: Couponcodes.GetHttpMethod.RequestConfig): AxiosPromise<Couponcodes.GetHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing.Busifavor.Stocks {
  export interface _stock_id_ {
    couponcodes: _stock_id_.Couponcodes
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing.Busifavor {
  export interface Stocks {
    _stock_id_: Stocks._stock_id_
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing {
  export interface Busifavor {
    stocks: Busifavor.Stocks
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface Marketing {
    busifavor: Marketing.Busifavor
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
wxpay.v3.marketing.busifavor.stocks._stock_id_.couponcodes.get({
//                                                         ^^^
  stock_id,
  params,
})
.then(
  ({ // [!code hl:15]
    data: {
      stock_id,
      total_count,
      limit,
      offset,
      data,
    },
  }) => ({
    stock_id,
    total_count,
    limit,
    offset,
    data,
  })
)
```
