---
title: 微信单号查询电子回单(用户确认模式)
description: 商户可以通过该接口查看回单申请进度；请务必对比下载的回单文件的摘要值与查询接口返回的摘要值的一致性，确保得到的回单文件的真实性和完整性。下载地址的有效期为10分钟，超过10分钟后需要重新通过该接口获取下载地址（不需要重新申请）。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.FundApp.MchTransfer.Elecsign.TransferBillNo._transfer_bill_no_.GetHttpMethod {
  export interface RequestConfig extends AxiosRequestConfig {
    transfer_bill_no: string
  }
  export interface WellformedResponse {
    state: string
    create_time: string
    update_time: string
    hash_type: string
    hash_value: string
    download_url: string
    fail_reason: string
  }
}
namespace WeChatPay.OpenAPI.V3.FundApp.MchTransfer.Elecsign.TransferBillNo {
  export interface _transfer_bill_no_ {
    /**
     * 微信单号查询电子回单
     * @link https://pay.weixin.qq.com/docs/merchant/apis/mch-trans/elecsign/query-elecsign-by-no.html
     */
    get(config: _transfer_bill_no_.GetHttpMethod.RequestConfig): AxiosPromise<_transfer_bill_no_.GetHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.FundApp.MchTransfer.Elecsign {
  export interface TransferBillNo {
    _transfer_bill_no_: TransferBillNo._transfer_bill_no_
  }
}
namespace WeChatPay.OpenAPI.V3.FundApp.MchTransfer {
  export interface Elecsign {
    transferBillNo: Elecsign.TransferBillNo
  }
}
namespace WeChatPay.OpenAPI.V3.FundApp {
  export interface MchTransfer {
    elecsign: MchTransfer.Elecsign
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface FundApp {
    mchTransfer: FundApp.MchTransfer
  }
}
namespace WeChatPay.OpenAPI {
  export interface V3 {
    fundApp: V3.FundApp
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
wxpay.v3.fundApp.mchTransfer.elecsign.transferBillNo._transfer_bill_no_.get({
//                                                                      ^^^
  transfer_bill_no,
})
.then(
  ({ // [!code hl:19]
    data: {
      state,
      create_time,
      update_time,
      hash_type,
      hash_value,
      download_url,
      fail_reason,
    },
  }) => ({
    state,
    create_time,
    update_time,
    hash_type,
    hash_value,
    download_url,
    fail_reason,
  })
)
```

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4012716455)
