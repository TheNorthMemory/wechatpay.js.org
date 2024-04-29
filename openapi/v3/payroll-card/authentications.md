---
title: 查询核身记录
description: 查询指定用户指定日期微工卡核身记录，查询结果仅展示核身成功的记录
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3_partner/Offline/apis/chapter4_1_5.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.PayrollCard.Authentications.GetHttpMethod {
  export interface RequestConfig extends AxiosRequestConfig {
    params: {
      openid: string
      appid: string
      sub_appid: string
      sub_mchid: string
      authenticate_date: string
      authenticate_state: string
      offset: number
      limit: number
    }
  }
  export interface WellformedResponse {
    data: {
      mchid: string
      sub_mchid: string
      openid: string
      authenticate_scene: string
      authenticate_source: string
      project_name: string
      employer_name: string
      authenticate_state: string
      authenticate_time: string
      authenticate_number: string
    }[]
    total_count: number
    offset: number
    limit: number
  }
}
namespace WeChatPay.OpenAPI.V3.PayrollCard {
  export interface Authentications {
    /**
     * 查询核身记录API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3_partner/Offline/apis/chapter4_1_5.shtml
     */
    get(config: Authentications.GetHttpMethod.RequestConfig): AxiosPromise<Authentications.GetHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface PayrollCard {
    authentications: PayrollCard.Authentications
  }
}
namespace WeChatPay.OpenAPI {
  export interface V3 {
    payrollCard: V3.PayrollCard
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
wxpay.v3.payrollCard.authentications.get({
//                                   ^^^
  params,
})
.then(
  ({ // [!code hl:13]
    data: {
      data,
      total_count,
      offset,
      limit,
    },
  }) => ({
    data,
    total_count,
    offset,
    limit,
  })
)
```
