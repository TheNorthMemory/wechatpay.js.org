---
title: 查询活动详情
description: 查出活动id对应的活动详情
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Marketing.MembercardActivity.Activities._activity_id_.GetHttpMethod {
  export interface RequestConfig extends AxiosRequestConfig {
    activity_id: string
  }
  export interface WellformedResponse {
    activity_id: string
    activity_status: 'CREATED' | 'ONGOING' | 'TERMINATED' | 'OVER_TIME'
    create_time: string
    update_time: string
    card_id: string
    activity_name: string
    activity_type: 'NON_MEMBER_AFTERPAY' | 'MEMBER_AFTERPAY' | 'NON_MEMBER_MINIPROGRAM' | 'MEMBER_MINIPROGRAM'
    begin_time: string
    end_time: string
    award_send_period: {
      award_send_time: {
        begin_time: string
        end_time: string
      }[]
      award_send_day_time: {
        begin_day_time: {
          hours: number
          minutes: number
          seconds: number
        }
        end_day_time: {
          hours: number
          minutes: number
          seconds: number
        }
      }[]
    }
    stock_list: {
      stock_creator_mchid: string
      stock_id: string
    }[]
    out_request_no: string
    pay_activity_setting: {
      logo_url: string
      activity_second_title: string
      mchid_list: []
      activate_setting: {
        activate_type: string
        activate_url: string
        activate_miniprogram: {
          activate_appid: string
          activate_path: string
        }
      }
      payment_setting: {
        payment_mode: {
          payment_scene_list: []
        }
        limit_bank: string
        goods_tags: []
      }
    }
    miniprogram_activity_setting?: {
      outer_str: string[]
      award_jump_deploy: {
        mini_program_appid: string
        mini_program_path: string
        button_text: string
      }
    }
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing.MembercardActivity.Activities {
  export interface _activity_id_ {
    /**
     * 查询活动详情API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/marketing/membercard_open/chapter8_4.shtml
     * @link https://pay.weixin.qq.com/docs/merchant/apis/membership-card/member-gift/query-activity-detail.html
     */
    get(config: _activity_id_.GetHttpMethod.RequestConfig): AxiosPromise<_activity_id_.GetHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing.MembercardActivity {
  export interface Activities {
    _activity_id_: Activities._activity_id_
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing {
  export interface MembercardActivity {
    activities: MembercardActivity.Activities
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface Marketing {
    membercardActivity: Marketing.MembercardActivity
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
wxpay.v3.marketing.membercardActivity.activities._activity_id_.get({
//                                                             ^^^
  activity_id,
})
.then(
  ({ // [!code hl:33]
    data: {
      activity_id,
      activity_status,
      create_time,
      update_time,
      card_id,
      activity_name,
      activity_type,
      begin_time,
      end_time,
      award_send_period,
      stock_list,
      out_request_no,
      pay_activity_setting,
      miniprogram_activity_setting,
    },
  }) => ({
    activity_id,
    activity_status,
    create_time,
    update_time,
    card_id,
    activity_name,
    activity_type,
    begin_time,
    end_time,
    award_send_period,
    stock_list,
    out_request_no,
    pay_activity_setting,
    miniprogram_activity_setting,
  })
)
```

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4012553365) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012714471)
