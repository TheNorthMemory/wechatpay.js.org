---
title: 创建全场满额送活动
description: 商户可以创建满额送活动，用户支付后送全场券，提升交易额。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Marketing.Paygiftactivity.UniqueThresholdActivity.PostHttpMethod {
  export interface JsonDataRequest {
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
      award_type: string
      merchant_option: string
      transaction_amount_minimum: number
      send_content: string
      award_list: {
        stock_id: string
        original_image_url: string
        thumbnail_url: string
      }[]
      merchant_id_list: string[]
    }
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
  }
  export interface WellformedResponse {
    activity_id: string
    create_time: string | Date
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing.Paygiftactivity {
  export interface UniqueThresholdActivity {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/marketing/paygiftactivity/chapter3_2.shtml
     */
    (data: UniqueThresholdActivity.PostHttpMethod.JsonDataRequest, config?: UniqueThresholdActivity.PostHttpMethod.RequestConfig): AxiosPromise<UniqueThresholdActivity.PostHttpMethod.WellformedResponse>
    /**
     * 创建全场满额送活动API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/marketing/paygiftactivity/chapter3_2.shtml
     */
    post(data: UniqueThresholdActivity.PostHttpMethod.JsonDataRequest, config?: UniqueThresholdActivity.PostHttpMethod.RequestConfig): AxiosPromise<UniqueThresholdActivity.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing {
  export interface Paygiftactivity {
    uniqueThresholdActivity: Paygiftactivity.UniqueThresholdActivity
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
wxpay.v3.marketing.paygiftactivity.uniqueThresholdActivity.post({
//                                                         ^^^^
  activity_base_info,
  advanced_setting,
  award_send_rule,
})
.then(
  ({ // [!code hl:9]
    data: {
      activity_id,
      create_time,
    },
  }) => ({
    activity_id,
    create_time,
  })
)
```

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4012487898) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012492900)
