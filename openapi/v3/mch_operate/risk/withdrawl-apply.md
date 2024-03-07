---
title: 提交已注销商户号可用余额提现申请单
description: 针对被微信支付平台不收不付管控的电商子商户，如子商户账户内还有可用余额，且无法解脱（例如.营业执照注销吊销），则服务商可为子商户申请走注销提现的流程，将可用余额进行提现操作。在商户号注销后，电商平台可发起提现申请, 审批通过后, 将会按照指定的收款方式返回给商户。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3_partner/apis/chapter7_8_9.shtml)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V3.Mch_operate.Risk.WithdrawlApply.PostHttpMethod {
  export interface JsonDataRequest {
    sub_mchid: string
    out_account_type: 'BASIC_ACCOUNT' | 'OPERATE_ACCOUNT'
    amount: number
    out_request_no: string
    payee_type: 'CONTRIBUTION_MERCHANT' | 'SERVICE_PROVIDER_MERCHANT' | 'OTHER_MERCHANT' | 'INDIVIDUAL'
    payee_mchid: string
    payee_info: {
      account_type: string
      bank_account_info: {
        account_name: string
        account_bank: string
        bank_branch_id: string
        bank_name: string
        account_number: string
      }
      identity_info: {
        id_doc_type: string
        identification_name: string
        identification_no: string
      }
    }
    proof_media_list: {
      proof_payee_media: {
        proof_media_type: string
        proof_media: string
      }[]
    }
    additional_materials: {
      additional_media: string[]
    }
    remark: string
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: JsonDataRequest
    headers: {
      'Wechatpay-Serial': string
    }
  }
  export interface WellformedResponse {
    applyment_id: string
    out_request_no: string
  }
}
namespace WeChatPay.OpenAPI.V3.Mch_operate.Risk {
  export interface WithdrawlApply {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3_partner/apis/chapter7_8_9.shtml
     */
    (data: WithdrawlApply.PostHttpMethod.JsonDataRequest, config: WithdrawlApply.PostHttpMethod.RequestConfig): AxiosPromise<WithdrawlApply.PostHttpMethod.WellformedResponse>
    /**
     * 提交已注销商户号可用余额提现申请单API
     * @link https://pay.weixin.qq.com/wiki/doc/apiv3_partner/apis/chapter7_8_9.shtml
     */
    post(data: WithdrawlApply.PostHttpMethod.JsonDataRequest, config: WithdrawlApply.PostHttpMethod.RequestConfig): AxiosPromise<WithdrawlApply.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V3.Mch_operate {
  export interface Risk {
    withdrawlApply: Risk.WithdrawlApply
  }
}
namespace WeChatPay.OpenAPI.V3 {
  export interface Mch_operate {
    risk: Mch_operate.Risk
  }
}
namespace WeChatPay.OpenAPI {
  export interface V3 {
    mch_operate: V3.Mch_operate
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
wxpay.v3.mch_operate.risk.withdrawlApply.post({
//                                       ^^^^
  sub_mchid,
  out_account_type,
  amount,
  out_request_no,
  payee_type,
  payee_mchid,
  payee_info,
  proof_media_list,
  additional_materials,
  remark,
}, { headers, })
.then(
  ({ // [!code hl:9]
    data: {
      applyment_id,
      out_request_no,
    },
  }) => ({
    applyment_id,
    out_request_no,
  })
)
```
