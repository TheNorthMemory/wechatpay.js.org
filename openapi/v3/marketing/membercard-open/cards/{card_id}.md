---
title: 查询/修改/删除会员卡模板信息
description: 通过此接口可查询指定会员卡模板的所有信息
---

# 查询会员卡模板信息 {#get}

通过此接口可查询指定会员卡模板的所有信息

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Marketing.MembercardOpen.Cards._card_id_.GetHttpMethod {
  export interface RequestConfig extends AxiosRequestConfig {
    card_id: string
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
namespace WeChatPay.OpenAPI.V3.Marketing.MembercardOpen.Cards {
  export interface _card_id_ {
    /**
     * 查询会员卡模板信息API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/marketing/membercard_open/chapter3_2.shtml
     */
    get(config: _card_id_.GetHttpMethod.RequestConfig): AxiosPromise<_card_id_.GetHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing.MembercardOpen {
  export interface Cards {
    _card_id_: Cards._card_id_
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
wxpay.v3.marketing.membercardOpen.cards._card_id_.get({
//                                                ^^^
  card_id,
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

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4012547650) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012709168)

# 修改会员卡模板信息 {#patch}

通过此接口可更新会员卡的信息，包括基本信息、储值信息、开卡信息、补充说明

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Marketing.MembercardOpen.Cards._card_id_.PatchHttpMethod {
  export interface JsonDataRequest {
    appid: string
    logo_url: string
    title: string
    background_picture_url: string
    description: string
    service_phone: string
    total_quantity: number
    date_information: {
      type: string
      available_end_time: string
      available_day_after_receive: number
      wait_days_after_receive: number
    }
    need_display_level: boolean
    init_level: string
    balance_information: {
      need_balance: boolean
      balance_appid: string
      balance_path: string
      balance_url: string
    }
    user_information_form: {
      can_modify_after_activate: boolean
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
    card_id: string
  }
  export interface WellformedResponse {
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing.MembercardOpen.Cards {
  export interface _card_id_ {
    /**
     * 修改会员卡模板信息API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/marketing/membercard_open/chapter3_9.shtml
     */
    patch(data: _card_id_.PatchHttpMethod.JsonDataRequest, config: _card_id_.PatchHttpMethod.RequestConfig): AxiosPromise<_card_id_.PatchHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing.MembercardOpen {
  export interface Cards {
    _card_id_: Cards._card_id_
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
wxpay.v3.marketing.membercardOpen.cards._card_id_.patch({
//                                                ^^^^^
  appid,
  logo_url,
  title,
  background_picture_url,
  description,
  service_phone,
  total_quantity,
  date_information,
  need_display_level,
  init_level,
  balance_information,
  user_information_form,
  additional_statement,
}, { card_id, })
.then(({ status }) => status === 204) // [!code hl]
```

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4012549567) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012709882)

# 删除会员卡模板 {#delete}

商户可调用此api删除会员卡。删除后，商家将无法通过任何渠道再投放该会员卡。

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Marketing.MembercardOpen.Cards._card_id_.DeleteHttpMethod {
  export interface RequestConfig extends AxiosRequestConfig {
    card_id: string
  }
  export interface WellformedResponse {
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing.MembercardOpen.Cards {
  export interface _card_id_ {
    /**
     * 删除会员卡模板API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/marketing/membercard_open/chapter3_11.shtml
     */
    delete(config: _card_id_.DeleteHttpMethod.RequestConfig): AxiosPromise<_card_id_.DeleteHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing.MembercardOpen {
  export interface Cards {
    _card_id_: Cards._card_id_
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
wxpay.v3.marketing.membercardOpen.cards._card_id_.delete({}, { card_id, })
//                                                ^^^^^^
.then(({ status }) => status === 204) // [!code hl]
```

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4012549682) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012726840)
