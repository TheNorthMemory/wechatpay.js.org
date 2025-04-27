---
title: 创建会员卡模板
description: 通过此接口可以创建一张会员卡模板，创建成功将获得会员卡模板card_id
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Marketing.MembercardOpen.Cards.PostHttpMethod {
  export interface JsonDataRequest {
    appid: string
    logo_url: string
    brand: {
      brand_id: string
      display_name: string
    }
    title: string
    background_picture_url: string
    description: string
    service_phone: string
    code_type: string
    total_quantity: number
    date_information: {
      type: string
      available_begin_time: string | Date
      available_end_time: string | Date
      available_day_after_receive: number
    }
    code_mode: string
    need_display_level: boolean
    init_level: string
    out_request_no: string
    balance_information: {
      need_balance: boolean
      balance_appid: string
      balance_path: string
      balance_url: string
    }
    user_information_form: {
      common_field_list: string[]
      custom_field_list: {
        type: string
        name: string
        values: string[]
      }[]
    }
    additional_statement: {
      title: string
      url: string
      appid: string
      path: string
    }
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
  }
  export interface WellformedResponse {
    card_id: string
    create_time: string | Date
    update_time: string | Date
    remain_quantity: number
    status: string
    brand: {
      brand_id: string
      display_name: string
    }
    appid: string
    logo_url: string
    title: string
    background_picture_url: string
    description: string
    service_phone: string
    code_type: string
    total_quantity: number
    date_information: {
      type: string
      available_begin_time: string | Date
      available_end_time: string | Date
      available_day_after_receive: number
    }
    code_mode: string
    need_display_level: boolean
    init_level: string
    out_request_no: string
    balance_information: {
      need_balance: boolean
      balance_appid: string
      balance_path: string
      balance_url: string
    }
    user_information_form: {
      common_field_list: string[]
      custom_field_list: {
        type: string
        name: string
        values: string[]
      }[]
    }
    additional_statement: {
      title: string
      url: string
      appid: string
      path: string
    }
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing.MembercardOpen {
  export interface Cards {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/marketing/membercard_open/chapter3_1.shtml
     */
    (data: Cards.PostHttpMethod.JsonDataRequest, config?: Cards.PostHttpMethod.RequestConfig): AxiosPromise<Cards.PostHttpMethod.WellformedResponse>
    /**
     * 创建会员卡模板API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/marketing/membercard_open/chapter3_1.shtml
     */
    post(data: Cards.PostHttpMethod.JsonDataRequest, config?: Cards.PostHttpMethod.RequestConfig): AxiosPromise<Cards.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing {
  export interface MembercardOpen {
    cards: MembercardOpen.Cards
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface Marketing {
    membercardOpen: Marketing.MembercardOpen
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
wxpay.v3.marketing.membercardOpen.cards.post({
//                                      ^^^^
  appid,
  logo_url,
  brand,
  title,
  background_picture_url,
  description,
  service_phone,
  code_type,
  total_quantity,
  date_information,
  code_mode,
  need_display_level,
  init_level,
  out_request_no,
  balance_information,
  user_information_form,
  additional_statement,
})
.then(
  ({ // [!code hl:49]
    data: {
      card_id,
      create_time,
      update_time,
      remain_quantity,
      status,
      brand,
      appid,
      logo_url,
      title,
      background_picture_url,
      description,
      service_phone,
      code_type,
      total_quantity,
      date_information,
      code_mode,
      need_display_level,
      init_level,
      out_request_no,
      balance_information,
      user_information_form,
      additional_statement,
    },
  }) => ({
    card_id,
    create_time,
    update_time,
    remain_quantity,
    status,
    brand,
    appid,
    logo_url,
    title,
    background_picture_url,
    description,
    service_phone,
    code_type,
    total_quantity,
    date_information,
    code_mode,
    need_display_level,
    init_level,
    out_request_no,
    balance_information,
    user_information_form,
    additional_statement,
  })
)
```

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4012545584) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012708314)

# 查询会员卡模板列表 {#get}

通过此接口可查询指定某品牌的所有会员卡模板列表

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Marketing.MembercardOpen.Cards.GetHttpMethod {
  export interface RequestConfig extends AxiosRequestConfig {
    params: {
      brand_id: string
      appid: string
      offset: number
      limit: number
    }
  }
  export interface WellformedResponse {
    total_count: number
    limit: number
    offset: number
    data: {
      card_id: string
      create_time: string | Date
      update_time: string | Date
      remain_quantity: number
      status: string
      brand: {
        brand_id: string
        display_name: string
      }
      appid: string
      logo_url: string
      title: string
      background_picture_url: string
      description: string
      service_phone: string
      code_type: string
      total_quantity: number
      date_information: {
        type: string
        available_begin_time: string | Date
        available_end_time: string | Date
        available_day_after_receive: number
      }
      code_mode: string
      need_display_level: boolean
      init_level: string
      out_request_no: string
      balance_information: {
        need_balance: boolean
        balance_appid: string
        balance_path: string
        balance_url: string
      }
      user_information_form: {
        common_field_list: string[]
        custom_field_list: {
          type: string
          name: string
          values: string[]
        }[]
      }
      additional_statement: {
        title: string
        url: string
        appid: string
        path: string
      }
    }[]
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing.MembercardOpen {
  export interface Cards {
    /**
     * 查询会员卡模板列表API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/marketing/membercard_open/chapter3_3.shtml
     */
    get(config: Cards.GetHttpMethod.RequestConfig): AxiosPromise<Cards.GetHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing {
  export interface MembercardOpen {
    cards: MembercardOpen.Cards
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface Marketing {
    membercardOpen: Marketing.MembercardOpen
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
wxpay.v3.marketing.membercardOpen.cards.get({
//                                      ^^^
  params,
})
.then(
  ({ // [!code hl:12]
    data: {
      total_count,
      limit,
      offset,
      data,
    },
  }) => ({
    total_count,
    limit,
    offset,
    data,
  })
)
```

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4012547108) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012709010)
