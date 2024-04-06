---
title: 查询支付有礼活动详情
description: 商户创建活动后，可以通过该接口查询支付有礼的活动详情，用于管理活动。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/marketing/paygiftactivity/chapter3_4.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Marketing.Paygiftactivity.Activities._activity_id_.GetHttpMethod {
  export interface RequestConfig extends AxiosRequestConfig {
    activity_id: string
  }
  export interface WellformedResponse {
    activity_id: string
    activity_type: string
    activity_status: string
    creator_merchant_id: string
    belong_merchant_id: string
    pause_time: string | Date
    recovery_time: string | Date
    create_time: string | Date
    update_time: string | Date
    activity_base_info: {
      activity_name: string
      activity_second_title: string
      merchant_logo_url: string
      background_color: string
      begin_time: string | Date
      end_time: string | Date
      available_periods: {
        available_time: {
          begin_time: string | Date
          end_time: string | Date
        }[]
        available_day_time: {
          begin_day_time: string
          end_day_time: string
        }[]
      }
      out_request_no: string
      delivery_purpose: string
      mini_programs_appid: string
      mini_programs_path: string
    }
    advanced_setting: {
      delivery_user_category: string
      merchant_member_appid: string
      payment_mode: {
        payment_scene_list: string[]
        payment_method_information: {
          payment_method: string
          bank_abbreviation: string
        }
      }
      goods_tags: string[]
    }
    award_send_rule: {
      full_send_rule: {
        award_type: string
        merchant_option: string
        transaction_amount_minimum: number
        send_content: string
        award_list: {
          stock_id: string
          original_image_url: string
          thumbnail_url: string
        }[]
      }
      step_send_rule: {
        award_type: string
        merchant_option: string
      }
    }
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing.Paygiftactivity.Activities {
  export interface _activity_id_ {
    /**
     * 查询活动详情接口API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/marketing/paygiftactivity/chapter3_4.shtml
     */
    get(config: _activity_id_.GetHttpMethod.RequestConfig): AxiosPromise<_activity_id_.GetHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing.Paygiftactivity {
  export interface Activities {
    _activity_id_: Activities._activity_id_
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing {
  export interface Paygiftactivity {
    activities: Paygiftactivity.Activities
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface Marketing {
    paygiftactivity: Marketing.Paygiftactivity
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
wxpay.v3.marketing.paygiftactivity.activities._activity_id_.get({
//                                                          ^^^
  activity_id,
})
.then(
  ({ // [!code hl:29]
    data: {
      activity_id,
      activity_type,
      activity_status,
      creator_merchant_id,
      belong_merchant_id,
      pause_time,
      recovery_time,
      create_time,
      update_time,
      activity_base_info,
      advanced_setting,
      award_send_rule,
    },
  }) => ({
    activity_id,
    activity_type,
    activity_status,
    creator_merchant_id,
    belong_merchant_id,
    pause_time,
    recovery_time,
    create_time,
    update_time,
    activity_base_info,
    advanced_setting,
    award_send_rule,
  })
)
```
