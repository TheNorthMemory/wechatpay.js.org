---
title: 查询订单
description: 服务商查询设备下的打印订单详情
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }} 情

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.PayDevices.Printers._device_id_.PrintOrders._print_order_no_.GetHttpMethod {
  export interface RequestConfig extends AxiosRequestConfig {
    device_id: string
    print_order_no: string
  }
  export interface WellformedResponse {
    print_order_no: string
    template_id: string
    notify_url: string
    print_state: string
    print_state_description: string
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
}
namespace WeChatPay.OpenAPI.V3.PayDevices.Printers._device_id_.PrintOrders {
  export interface _print_order_no_ {
    /**
     * 查询订单
     * @link 服务商查询设备下的打印订单详情
     */
    get(config: _print_order_no_.GetHttpMethod.RequestConfig): AxiosPromise<_print_order_no_.GetHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.PayDevices.Printers._device_id_ {
  export interface PrintOrders {
    _print_order_no_: PrintOrders._print_order_no_
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
wxpay.v3.payDevices.printers._device_id_.printOrders._print_order_no_.get({
//                                                                    ^^^
  device_id,
  print_order_no,
})
.then(
  ({ // [!code hl:19]
    data: {
      print_order_no,
      template_id,
      notify_url,
      print_state,
      print_state_description,
      variable_list,
      table_list,
    },
  }) => ({
    print_order_no,
    template_id,
    notify_url,
    print_state,
    print_state_description,
    variable_list,
    table_list,
  })
)
```
