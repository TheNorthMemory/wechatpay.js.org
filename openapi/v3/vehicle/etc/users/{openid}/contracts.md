---
title: 查询ETC签约状态
description: 通过用户标识、ETC扣费授权协议号查询ETC绑定信息。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/docs/partner/apis/etc-authorization/contracts/get-no.html)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Vehicle.Etc.Users._openid_.Contracts.GetHttpMethod {
  export interface RequestConfig extends AxiosRequestConfig {
    openid: string
    params: {
      sub_mchid: string
      plan_id: string
      plate_number: string
    }
  }
  export interface WellformedResponse {
    appid: string
    sp_mchid: string
    sp_openid: string
    sub_appid: string
    sub_mchid: string
    contract_id: string
    bind_state: string
    plate_number: string
    sub_openid: string
  }
}
namespace WeChatPay.OpenAPI.V3.Vehicle.Etc.Users._openid_ {
  export interface Contracts {
    /**
     * 查询ETC签约状态API
     * @link https://pay.weixin.qq.com/docs/partner/apis/etc-authorization/contracts/get-no.html
     */
    get(config: Contracts.GetHttpMethod.RequestConfig): AxiosPromise<Contracts.GetHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Vehicle.Etc.Users {
  export interface _openid_ {
    contracts: _openid_.Contracts
  }
}
namespace WeChatPay.OpenAPI.V3.Vehicle.Etc {
  export interface Users {
    _openid_: Users._openid_
  }
}
namespace WeChatPay.OpenAPI.V3.Vehicle {
  export interface Etc {
    users: Etc.Users
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface Vehicle {
    etc: Vehicle.Etc
  }
}
namespace WeChatPay.OpenAPI {
  export interface V3 {
    vehicle: V3.Vehicle
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
wxpay.v3.vehicle.etc.users._openid_.contracts.get({
//                                            ^^^
  openid,
  params,
})
.then(
  ({ // [!code hl:23]
    data: {
      appid,
      sp_mchid,
      sp_openid,
      sub_appid,
      sub_mchid,
      contract_id,
      bind_state,
      plate_number,
      sub_openid,
    },
  }) => ({
    appid,
    sp_mchid,
    sp_openid,
    sub_appid,
    sub_mchid,
    contract_id,
    bind_state,
    plate_number,
    sub_openid,
  })
)
```
