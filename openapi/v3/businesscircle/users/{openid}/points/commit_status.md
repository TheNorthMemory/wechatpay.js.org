---
title: 商圈会员待积分状态查询
description: 通过此API，商圈商户/服务商可以自行查询已授权“商圈会员积分服务”的会员用户当日在该商圈的待积分状态。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Businesscircle.Users._openid_.Points.Commit_status.GetHttpMethod {
  export interface RequestConfig extends AxiosRequestConfig {
    openid: string
    params: {
      sub_mchid?: string
      brandid: number
      appid: string
    }
  }
  export interface WellformedResponse {
    points_commit_status: 'PENDING' | 'FINISHED'
  }
}
namespace WeChatPay.OpenAPI.V3.Businesscircle.Users._openid_.Points {
  export interface Commit_status {
    /**
     * 商圈会员待积分状态查询
     * @link https://pay.weixin.qq.com/docs/partner/apis/smart-business-circle/points/get-points-commit-status.html
     */
    get(config: Commit_status.GetHttpMethod.RequestConfig): AxiosPromise<Commit_status.GetHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Businesscircle.Users._openid_ {
  export interface Points {
    commit_status: Points.Commit_status
  }
}
namespace WeChatPay.OpenAPI.V3.Businesscircle.Users {
  export interface _openid_ {
    points: _openid_.Points
  }
}
namespace WeChatPay.OpenAPI.V3.Businesscircle {
  export interface Users {
    _openid_: Users._openid_
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface Businesscircle {
    users: Businesscircle.Users
  }
}
namespace WeChatPay.OpenAPI {
  export interface V3 {
    businesscircle: V3.Businesscircle
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
wxpay.v3.businesscircle.users._openid_.points.commit_status.get({
//                                                          ^^^
  openid,
  params,
})
.then(
  ({ // [!code hl:7]
    data: {
      points_commit_status,
    },
  }) => ({
    points_commit_status,
  })
)
```

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4012534994) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012474129)
