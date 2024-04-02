---
title: 通过协议号查询签约
description: 商户通过签约协议号可查询签约信息，当合约不存在时返回NOT_FOUND错误码
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/edu/eduschoolpay/chapter3_2.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Eduschoolpay.Contracts._contract_id_.GetHttpMethod {
  export interface RequestConfig extends AxiosRequestConfig {
    contract_id: string
  }
  export interface WellformedResponse {
    contract_id: string
    mchid: string
    appid: string
    openid: string
    plan_id: string
    contract_status: string
    create_time: string
    out_contract_code: string
  }
}
namespace WeChatPay.OpenAPI.V3.Eduschoolpay.Contracts {
  export interface _contract_id_ {
    /**
     * 通过协议号查询签约API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/edu/eduschoolpay/chapter3_2.shtml
     */
    get(config: _contract_id_.GetHttpMethod.RequestConfig): AxiosPromise<_contract_id_.GetHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Eduschoolpay {
  export interface Contracts {
    _contract_id_: Contracts._contract_id_
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface Eduschoolpay {
    contracts: Eduschoolpay.Contracts
  }
}
namespace WeChatPay.OpenAPI {
  export interface V3 {
    eduschoolpay: V3.Eduschoolpay
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
wxpay.v3.eduschoolpay.contracts._contract_id_.get({
//                                            ^^^
  contract_id,
})
.then(
  ({ // [!code hl:21]
    data: {
      contract_id,
      mchid,
      appid,
      openid,
      plan_id,
      contract_status,
      create_time,
      out_contract_code,
    },
  }) => ({
    contract_id,
    mchid,
    appid,
    openid,
    plan_id,
    contract_status,
    create_time,
    out_contract_code,
  })
)
```
