---
title: 配置开发选项
description: 配置开发选项(例如回调地址等)
---

# 配置开发选项 {#patch}

配置开发选项（例如回调地址、全部账单展示开发票入口开关），适用于直连商户和服务商，该配置对其绑定的同主体商户号也生效。 [官方文档](https://pay.weixin.qq.com/docs/merchant/apis/fapiao/fapiao-merchant/update-development-config.html) [官方文档](https://pay.weixin.qq.com/docs/partner/apis/fapiao/fapiao-merchant/update-development-config.html)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.NewTaxControlFapiao.Merchant.DevelopmentConfig.PatchHttpMethod {
  export interface JsonDataRequest {
    callback_url: string
    sub_mch_code?: string
    show_fapiao_cell?: boolean
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
  }
  export interface WellformedResponse {
    callback_url: string
  }
}
namespace WeChatPay.OpenAPI.V3.NewTaxControlFapiao.Merchant {
  export interface DevelopmentConfig {
    /**
     * 配置开发选项
     * @link https://pay.weixin.qq.com/docs/merchant/apis/fapiao/fapiao-merchant/update-development-config.html
     */
    patch(data: DevelopmentConfig.PatchHttpMethod.JsonDataRequest, config?: DevelopmentConfig.PatchHttpMethod.RequestConfig): AxiosPromise<DevelopmentConfig.PatchHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.NewTaxControlFapiao {
  export interface Merchant {
    developmentConfig: Merchant.DevelopmentConfig
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface NewTaxControlFapiao {
    merchant: NewTaxControlFapiao.Merchant
  }
}
namespace WeChatPay.OpenAPI {
  export interface V3 {
    newTaxControlFapiao: V3.NewTaxControlFapiao
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
wxpay.v3.newTaxControlFapiao.merchant.developmentConfig.patch({
//                                                      ^^^^^
  callback_url,
  sub_mch_code,
  show_fapiao_cell,
})
.then(
  ({ // [!code hl:7]
    data: {
      callback_url,
    },
  }) => ({
    callback_url,
  })
)
```

# 查询商户配置的开发选项 {#get}

查询商户配置的开发选项 [官方文档](https://pay.weixin.qq.com/docs/merchant/apis/fapiao/fapiao-merchant/query-development-config.html) [官方文档](https://pay.weixin.qq.com/docs/partner/apis/fapiao/fapiao-merchant/query-development-config.html)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.NewTaxControlFapiao.Merchant.DevelopmentConfig.GetHttpMethod {
  export interface RequestConfig extends AxiosRequestConfig {
    params: {
      sub_mch_code?: string
    }
  }
  export interface WellformedResponse {
    callback_url: string
    show_fapiao_cell?: boolean
  }
}
namespace WeChatPay.OpenAPI.V3.NewTaxControlFapiao.Merchant {
  export interface DevelopmentConfig {
    /**
     * 查询商户配置的开发选项
     * @link https://pay.weixin.qq.com/docs/merchant/apis/fapiao/fapiao-merchant/query-development-config.html
     */
    get(config?: DevelopmentConfig.GetHttpMethod.RequestConfig): AxiosPromise<DevelopmentConfig.GetHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.NewTaxControlFapiao {
  export interface Merchant {
    developmentConfig: Merchant.DevelopmentConfig
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface NewTaxControlFapiao {
    merchant: NewTaxControlFapiao.Merchant
  }
}
namespace WeChatPay.OpenAPI {
  export interface V3 {
    newTaxControlFapiao: V3.NewTaxControlFapiao
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
wxpay.v3.newTaxControlFapiao.merchant.developmentConfig.get({ params })
//                                                      ^^^
.then(
  ({ // [!code hl:9]
    data: {
      callback_url,
      show_fapiao_cell,
    },
  }) => ({
    callback_url,
    show_fapiao_cell,
  })
)
```
