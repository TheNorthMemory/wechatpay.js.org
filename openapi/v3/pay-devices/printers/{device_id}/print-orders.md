---
title: 小票机打印
description: 服务商控制小票机进行打印。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} 。

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.PayDevices.Printers._device_id_.PrintOrders.PostHttpMethod {
  export interface JsonDataRequest {
    print_order_no: string
    template_id: string
    notify_url: string
    variable_list: {
      key: string
      value: string
    }[]
    table_list: {
      key: string
      row_list: {
        cell_list: string[]
      }[]
    }[]
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
    device_id: string
  }
  export interface WellformedResponse {
  }
}
namespace WeChatPay.OpenAPI.V3.PayDevices.Printers._device_id_ {
  export interface PrintOrders {
    /**
     * shortland
     * @link 服务商控制小票机进行打印。
     */
    (data: PrintOrders.PostHttpMethod.JsonDataRequest, config: PrintOrders.PostHttpMethod.RequestConfig): AxiosPromise<PrintOrders.PostHttpMethod.WellformedResponse>
    /**
     * 小票机打印
     * @link 服务商控制小票机进行打印。
     */
    post(data: PrintOrders.PostHttpMethod.JsonDataRequest, config: PrintOrders.PostHttpMethod.RequestConfig): AxiosPromise<PrintOrders.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.PayDevices.Printers {
  export interface _device_id_ {
    printOrders: _device_id_.PrintOrders
  }
}
namespace WeChatPay.OpenAPI.V3.PayDevices {
  export interface Printers {
    _device_id_: Printers._device_id_
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface PayDevices {
    printers: PayDevices.Printers
  }
}
namespace WeChatPay.OpenAPI {
  export interface V3 {
    payDevices: V3.PayDevices
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
wxpay.v3.payDevices.printers._device_id_.printOrders.post({
//                                                   ^^^^
  print_order_no,
  template_id,
  notify_url,
  variable_list,
  table_list,
}, { device_id, })
.then(({ status, }) => status === 204) // [!code hl]
```
