---
title: 通过商户ETC绑定号查询签约状态
description: 通过商户etc绑定号查询签约状态。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/docs/partner/apis/etc-authorization/contracts/get-by.html)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Vehicle.Etc.Contracts._contract_id_.GetHttpMethod {
  export interface RequestConfig extends AxiosRequestConfig {
    contract_id: string
    params: {
      sub_mchid: string
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
namespace WeChatPay.OpenAPI.V3.Vehicle.Etc.Contracts {
  export interface _contract_id_ {
    /**
     * 通过商户ETC绑定号查询签约状态
     * @link https://pay.weixin.qq.com/docs/partner/apis/etc-authorization/contracts/get-by.html
     */
    get(config: _contract_id_.GetHttpMethod.RequestConfig): AxiosPromise<_contract_id_.GetHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Vehicle.Etc {
  export interface Contracts {
    _contract_id_: Contracts._contract_id_
  }
}
namespace WeChatPay.OpenAPI.V3.Vehicle {
  export interface Etc {
    contracts: Etc.Contracts
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
wxpay.v3.vehicle.etc.contracts._contract_id_.get({
//                                           ^^^
  contract_id,
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
