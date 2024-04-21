---
title: 预开通用户ETC指定卡扣费
description: 该接口用于在开通ETC自动扣费前上传一些必要的信息。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/docs/partner/apis/etc-authorization/contracts/pre-open-etc.html)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Vehicle.Etc.Preopen.PostHttpMethod {
  export interface JsonDataRequest {
    sp_appid: string
    sub_appid: string
    sub_mchid: string
    openid: string
    plan_id: string
    etc_device_id: string
    plate_number: string
    identify: {
      encrypted_real_name: string
      encrypted_credential_id: string
      credential_type: string
    }
    bank_card_no: string
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
    headers: {
      'Wechatpay-Serial': string
    }
  }
  export interface WellformedResponse {
    preopen_id: string
  }
}
namespace WeChatPay.OpenAPI.V3.Vehicle.Etc {
  export interface Preopen {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3_partner/Offline/apis/chapter4_4_1.shtml
     */
    (data: Preopen.PostHttpMethod.JsonDataRequest, config: Preopen.PostHttpMethod.RequestConfig): AxiosPromise<Preopen.PostHttpMethod.WellformedResponse>
    /**
     * 预开通用户ETC指定卡扣费API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3_partner/Offline/apis/chapter4_4_1.shtml
     */
    post(data: Preopen.PostHttpMethod.JsonDataRequest, config: Preopen.PostHttpMethod.RequestConfig): AxiosPromise<Preopen.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Vehicle {
  export interface Etc {
    preopen: Etc.Preopen
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
wxpay.v3.vehicle.etc.preopen.post({
//                           ^^^^
  sp_appid,
  sub_appid,
  sub_mchid,
  openid,
  plan_id,
  etc_device_id,
  plate_number,
  identify,
  bank_card_no,
}, { headers })
.then(
  ({ // [!code hl:7]
    data: {
      preopen_id,
    },
  }) => ({
    preopen_id,
  })
)
```
