---
title: 转账明细电子回单受理
description: 受理转账明细电子回单接口，商户通过该接口可以申请受理转账明细单电子回单服务。查询转账明细电子回单受理结果接口，商户通过该接口可以查询电子回单受理进度信息，包括电子回单据信息，电子回单文件的hash值，电子回单文件的下载地址等。
---

# 转账明细电子回单受理 {#post}

受理转账明细电子回单接口，商户通过该接口可以申请受理转账明细单电子回单服务。 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3_partner/Offline/apis/chapter4_1_13.shtml) [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/pay/transfer_partner/chapter4_4.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.TransferDetail.ElectronicReceipts.PostHttpMethod {
  export interface JsonDataRequest {
    accept_type: 'BATCH_TRANSFER' | 'TRANSFER_TO_POCKET' | 'TRANSFER_TO_BANK'
    out_batch_no: string
    out_detail_no: string
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
  }
  export interface WellformedResponse {
    accept_type: 'BATCH_TRANSFER' | 'TRANSFER_TO_POCKET' | 'TRANSFER_TO_BANK'
    out_batch_no: string
    out_detail_no: string
    signature_no: string
    signature_status: 'ACCEPTED' | 'FINISHED'
    hash_type: string
    hash_value: string
    download_url: string
  }
}
namespace WeChatPay.OpenAPI.V3.TransferDetail {
  export interface ElectronicReceipts {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/pay/transfer_partner/chapter4_4.shtml
     */
    (data: ElectronicReceipts.PostHttpMethod.JsonDataRequest, config?: ElectronicReceipts.PostHttpMethod.RequestConfig): AxiosPromise<ElectronicReceipts.PostHttpMethod.WellformedResponse>
    /**
     * 转账明细电子回单受理API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/pay/transfer_partner/chapter4_4.shtml
     */
    post(data: ElectronicReceipts.PostHttpMethod.JsonDataRequest, config?: ElectronicReceipts.PostHttpMethod.RequestConfig): AxiosPromise<ElectronicReceipts.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface TransferDetail {
    electronicReceipts: TransferDetail.ElectronicReceipts
  }
}
namespace WeChatPay.OpenAPI {
  export interface V3 {
    transferDetail: V3.TransferDetail
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
wxpay.v3.transferDetail.electronicReceipts.post({
//                                         ^^^^
  accept_type,
  out_batch_no,
  out_detail_no,
})
.then(
  ({ // [!code hl:21]
    data: {
      accept_type,
      out_batch_no,
      out_detail_no,
      signature_no,
      signature_status,
      hash_type,
      hash_value,
      download_url,
    },
  }) => ({
    accept_type,
    out_batch_no,
    out_detail_no,
    signature_no,
    signature_status,
    hash_type,
    hash_value,
    download_url,
  })
)
```

# 查询转账明细电子回单受理结果 {#get}

查询转账明细电子回单受理结果接口，商户通过该接口可以查询电子回单受理进度信息，包括电子回单据信息，电子回单文件的hash值，电子回单文件的下载地址等。 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3_partner/Offline/apis/chapter4_1_14.shtml) [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/pay/transfer_partner/chapter4_5.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.TransferDetail.ElectronicReceipts.GetHttpMethod {
  export interface RequestConfig extends AxiosRequestConfig {
    params: {
    accept_type: 'BATCH_TRANSFER' | 'TRANSFER_TO_POCKET' | 'TRANSFER_TO_BANK'
      out_batch_no: string
      out_detail_no: string
    }
  }
  export interface WellformedResponse {
    accept_type: 'BATCH_TRANSFER' | 'TRANSFER_TO_POCKET' | 'TRANSFER_TO_BANK'
    out_batch_no: string
    out_detail_no: string
    signature_no: string
    signature_status: 'ACCEPTED' | 'FINISHED'
    hash_type: string
    hash_value: string
    download_url: string
  }
}
namespace WeChatPay.OpenAPI.V3.TransferDetail {
  export interface ElectronicReceipts {
    /**
     * 查询转账明细电子回单受理结果API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/pay/transfer_partner/chapter4_5.shtml
     */
    get(config: ElectronicReceipts.GetHttpMethod.RequestConfig): AxiosPromise<ElectronicReceipts.GetHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface TransferDetail {
    electronicReceipts: TransferDetail.ElectronicReceipts
  }
}
namespace WeChatPay.OpenAPI {
  export interface V3 {
    transferDetail: V3.TransferDetail
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
wxpay.v3.transferDetail.electronicReceipts.get({
//                                         ^^^
  params,
})
.then(
  ({ // [!code hl:21]
    data: {
      accept_type,
      out_batch_no,
      out_detail_no,
      signature_no,
      signature_status,
      hash_type,
      hash_value,
      download_url,
    },
  }) => ({
    accept_type,
    out_batch_no,
    out_detail_no,
    signature_no,
    signature_status,
    hash_type,
    hash_value,
    download_url,
  })
)
```
