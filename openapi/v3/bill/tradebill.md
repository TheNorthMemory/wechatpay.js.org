---
title: 申请交易账单
description: 微信支付按天提供交易账单文件，商户可以通过该接口获取账单文件的下载地址。文件内包含交易相关的金额、时间、营销等信息，供商户核对订单、退款、银行到账等情况。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Bill.Tradebill.GetHttpMethod {
  export interface RequestConfig extends AxiosRequestConfig {
    params: {
      bill_date: string
      sub_mchid?: string
      bill_type?: 'ALL' | 'SUCCESS' | 'REFUND' | 'RECHARGE_REFUND' | 'ALL_SPECIAL' | 'SUC_SPECIAL' | 'REF_SPECIAL'
      tar_type?: 'GZIP'
    }
  }
  export interface WellformedResponse {
    hash_type: string
    hash_value: string
    download_url: string
  }
}
namespace WeChatPay.OpenAPI.V3.Bill {
  export interface Tradebill {
    /**
     * 申请交易账单API
     * @link https://pay.weixin.qq.com/docs/merchant/apis/bill-download/trade-bill/get-trade-bill.html
     * @link https://pay.weixin.qq.com/docs/partner/apis/bill-download/trade-bill/get-trade-bill.html
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3_partner/apis/chapter7_9_1.shtml
     */
    get(config: Tradebill.GetHttpMethod.RequestConfig): AxiosPromise<Tradebill.GetHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface Bill {
    tradebill: Bill.Tradebill
  }
}
namespace WeChatPay.OpenAPI {
  export interface V3 {
    bill: V3.Bill
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
wxpay.v3.bill.tradebill.get({
//                      ^^^
  params,
//^?
})
.then(
  ({ // [!code hl:11]
    data: {
      hash_type,
      hash_value,
      download_url,
    },
  }) => ({
    hash_type,
    hash_value,
    download_url: new URL(download_url),
  })
)
```

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4012791866) [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4013070395) [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4012810606) [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4012791887) [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4012791907) [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4012556692) [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4013421176) [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4013421277) [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4013421361) [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4013421450) [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4013071227) [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4012551932) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012739068) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4013080242) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012759683) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012759737) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012760132) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012760228) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4013462129) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4013462197) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4013462343) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4013462604) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4013080595) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012709595) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012760532) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012886283) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012760667)
