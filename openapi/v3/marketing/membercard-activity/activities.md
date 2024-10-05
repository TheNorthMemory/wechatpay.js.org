---
title: 创建活动/查询活动列表
description: 创建会员活动，可以创建支付后开卡有礼&老会员有礼、以及小程序开卡有礼&老会员有礼，共四种类型的活动。
---

# 创建活动 {#post}

创建会员活动，可以创建支付后开卡有礼&老会员有礼、以及小程序开卡有礼&老会员有礼，共四种类型的活动。 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/marketing/membercard_open/chapter8_1.shtml) [官方文档](https://pay.weixin.qq.com/docs/merchant/apis/membership-card/member-gift/create-activity.html)


```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Marketing.MembercardActivity.Activities.PostHttpMethod {
  export interface JsonDataRequest {
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
      mchid_list: string[]
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
          payment_scene_list: string[]
        }
        limit_bank: string
        goods_tags: string[]
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
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
  }
  export interface WellformedResponse {
    activity_id: string
    activity_status: string
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
      mchid_list: string[]
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
namespace WeChatPay.OpenAPI.V3.Marketing.MembercardActivity {
  export interface Activities {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/marketing/membercard_open/chapter8_1.shtml
     * @link https://pay.weixin.qq.com/docs/merchant/apis/membership-card/member-gift/create-activity.html
     */
    (data: Activities.PostHttpMethod.JsonDataRequest, config?: Activities.PostHttpMethod.RequestConfig): AxiosPromise<Activities.PostHttpMethod.WellformedResponse>
    /**
     * 创建活动API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/marketing/membercard_open/chapter8_1.shtml
     * @link https://pay.weixin.qq.com/docs/merchant/apis/membership-card/member-gift/create-activity.html
     */
    post(data: Activities.PostHttpMethod.JsonDataRequest, config?: Activities.PostHttpMethod.RequestConfig): AxiosPromise<Activities.PostHttpMethod.WellformedResponse>
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
wxpay.v3.marketing.membercardActivity.activities.post({
//                                               ^^^^
  card_id,
  activity_name,
  activity_type,
  begin_time,
  end_time,
  award_send_period,
  stock_list,
  out_request_no,
  pay_activity_setting,
})
.then(
  ({ // [!code hl:31]
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
  })
)
```

# 查询活动列表 {#get}

查询符合条件的多个活动 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/marketing/membercard_open/chapter8_3.shtml) [官方文档](https://pay.weixin.qq.com/docs/merchant/apis/membership-card/member-gift/query-activity-list.html)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Marketing.MembercardActivity.Activities.GetHttpMethod {
  export interface RequestConfig extends AxiosRequestConfig {
    params: {
      limit: number
      offset: number
      activity_type: 'NON_MEMBER_AFTERPAY' | 'MEMBER_AFTERPAY' | 'NON_MEMBER_MINIPROGRAM' | 'MEMBER_MINIPROGRAM'
      card_id: string
      activity_status: 'CREATED' | 'ONGOING' | 'TERMINATED' | 'OVER_TIME'
    }
  }
  export interface WellformedResponse {
    data: {
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
        mchid_list: string[]
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
    }[]
    offset: number
    limit: number
    total_count: number
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing.MembercardActivity {
  export interface Activities {
    /**
     * 查询活动列表API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/marketing/membercard_open/chapter8_3.shtml
     * @link https://pay.weixin.qq.com/docs/merchant/apis/membership-card/member-gift/query-activity-list.html
     */
    get(config: Activities.GetHttpMethod.RequestConfig): AxiosPromise<Activities.GetHttpMethod.WellformedResponse>
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
wxpay.v3.marketing.membercardActivity.activities.get({
//                                               ^^^
  params,
})
.then(
  ({ // [!code hl:13]
    data: {
      data,
      offset,
      limit,
      total_count,
    },
  }) => ({
    data,
    offset,
    limit,
    total_count,
  })
)
```
