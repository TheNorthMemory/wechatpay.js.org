---
title: 关联订单信息
description: 将有效态（未核销）的商家券与订单信息关联，用于后续参与摇奖&返佣激励等操作的统计。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Marketing.Busifavor.Coupons.Associate.PostHttpMethod {
  export interface JsonDataRequest {
    stock_id: string
    coupon_code: string
    out_trade_no: string
    out_request_no: string
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
  }
  export interface WellformedResponse {
    wechatpay_associate_time: string | Date
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing.Busifavor.Coupons {
  export interface Associate {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/apis/chapter9_2_9.shtml
     */
    (data: Associate.PostHttpMethod.JsonDataRequest, config?: Associate.PostHttpMethod.RequestConfig): AxiosPromise<Associate.PostHttpMethod.WellformedResponse>
    /**
     * 关联订单信息API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/apis/chapter9_2_9.shtml
     */
    post(data: Associate.PostHttpMethod.JsonDataRequest, config?: Associate.PostHttpMethod.RequestConfig): AxiosPromise<Associate.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing.Busifavor {
  export interface Coupons {
    associate: Coupons.Associate
  }
}
namespace WeChatPay.OpenAPI.V3.Marketing {
  export interface Busifavor {
    coupons: Busifavor.Coupons
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface Marketing {
    busifavor: Marketing.Busifavor
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
wxpay.v3.marketing.busifavor.coupons.associate.post({
//                                             ^^^^
  stock_id,
  coupon_code,
  out_trade_no,
  out_request_no,
})
.then(
  ({ // [!code hl:7]
    data: {
      wechatpay_associate_time,
    },
  }) => ({
    wechatpay_associate_time,
  })
)
```

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4012465596) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012465640)
