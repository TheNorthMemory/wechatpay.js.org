---
title: 通过协议号查询签约
description: 商户通过签约协议号可查询签约信息，如果对应签约状态为“已签约”，返回签约信息，如果对应签约状态为“已解约”，返回明确错误码
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.EduPapay.Contracts.Id._contract_id_.GetHttpMethod {
  export interface RequestConfig extends AxiosRequestConfig {
    contract_id: string
    params: {
      appid: string
      sub_mchid: string
      sub_appid: string
    }
  }
  export interface WellformedResponse {
    sp_mchid: string
    appid: string
    sub_mchid: string
    sub_appid: string
    openid: string
    sub_openid: string
    plan_id: string
    contract_information: {
      contract_id: string
      contract_status: string
      create_time: string
    }
  }
}
namespace WeChatPay.OpenAPI.V3.EduPapay.Contracts.Id {
  export interface _contract_id_ {
    /**
     * 通过协议号查询签约API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3/Offline/apis/chapter5_2_2.shtml
     */
    get(config: _contract_id_.GetHttpMethod.RequestConfig): AxiosPromise<_contract_id_.GetHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.EduPapay.Contracts {
  export interface Id {
    _contract_id_: Id._contract_id_
  }
}
namespace WeChatPay.OpenAPI.V3.EduPapay {
  export interface Contracts {
    id: Contracts.Id
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
wxpay.v3.eduPapay.contracts.id._contract_id_.get({
//                                           ^^^
  contract_id,
  params,
})
.then(
  ({ // [!code hl:21]
    data: {
      sp_mchid,
      appid,
      sub_mchid,
      sub_appid,
      openid,
      sub_openid,
      plan_id,
      contract_information,
    },
  }) => ({
    sp_mchid,
    appid,
    sub_mchid,
    sub_appid,
    openid,
    sub_openid,
    plan_id,
    contract_information,
  })
)
```

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4012522951) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012465367)
