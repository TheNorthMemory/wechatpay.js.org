---
title: 解约
description: 商户通过调用该接口可主动解除与用户的签约关系，在商户查询时不会返回已解约的信息
---

# {{ $frontmatter.title }} {#delete}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/docs/merchant/apis/education-fee-payment/contracts/delete-contract.html) [官方文档](https://pay.weixin.qq.com/docs/partner/apis/education-fee-payment/contracts/delete-contract.html)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.EduPapay.Contracts._contract_id_.DeleteHttpMethod {
  export interface RequestConfig extends AxiosRequestConfig {
    contract_id: string
  }
  export interface WellformedResponse {
  }
}
namespace WeChatPay.OpenAPI.V3.EduPapay.Contracts {
  export interface _contract_id_ {
    /**
     * 解约API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/Offline/apis/chapter5_2_4.shtml
     */
    delete(config: _contract_id_.DeleteHttpMethod.RequestConfig): AxiosPromise<_contract_id_.DeleteHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.EduPapay {
  export interface Contracts {
    _contract_id_: Contracts._contract_id_
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface EduPapay {
    contracts: EduPapay.Contracts
  }
}
namespace WeChatPay.OpenAPI {
  export interface V3 {
    eduPapay: V3.EduPapay
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
wxpay.v3.eduPapay.contracts._contract_id_.delete({ contract_id })
//                                        ^^^^^^
.then(({ status, }) => status === 204) // [!code hl]
```
