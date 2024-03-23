---
title: 查询车牌服务开通信息
description: 该接口仅支持停车场景，商户首先请求查询车牌服务开通信息接口，确认该车牌，是否被该用户开通车主服务。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/apis/chapter8_8_1.shtml) [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3_partner/apis/chapter8_8_1.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Vehicle.Parking.Services.Find.GetHttpMethod {
  export interface RequestConfig extends AxiosRequestConfig {
    params: {
      appid: string
      sub_mchid?: string
      plate_number: string
      plate_color: string
      openid: string
    }
  }
  export interface WellformedResponse {
    plate_number: string
    service_open_time: string
    openid: string
    service_state: string
  }
}
namespace WeChatPay.OpenAPI.V3.Vehicle.Parking.Services {
  export interface Find {
    /**
     * 查询车牌服务开通信息API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3_partner/apis/chapter8_8_1.shtml
     */
    get(config: Find.GetHttpMethod.RequestConfig): AxiosPromise<Find.GetHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Vehicle.Parking {
  export interface Services {
    find: Services.Find
  }
}
namespace WeChatPay.OpenAPI.V3.Vehicle {
  export interface Parking {
    services: Parking.Services
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface Vehicle {
    parking: Vehicle.Parking
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
wxpay.v3.vehicle.parking.services.find.get({
//                                     ^^^
  params,
})
.then(
  ({ // [!code hl:13]
    data: {
      plate_number,
      service_open_time,
      openid,
      service_state,
    },
  }) => ({
    plate_number,
    service_open_time,
    openid,
    service_state,
  })
)
```
