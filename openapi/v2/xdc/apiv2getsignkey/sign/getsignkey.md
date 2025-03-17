---
title: 获取沙箱环境密钥
description: 仿真系统与生产环境完全独立，包括存储层。商户在仿真系统所做的所有交易（如下单、支付、查询）均为无资金流的假数据，即：用户无需真实扣款，商户也不会有资金入账。代金券同理，沙箱环境中无需商户真实制券与发券，亦不会出现真实扣券情况。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方沙箱环境文档](https://pay.weixin.qq.com/wiki/doc/api/tools/sp_coupon.php?chapter=23_1&index=2)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { AxiosRequestConfig, AxiosPromise, AxiosResponseTransformer } from 'axios'
namespace WeChatPay.OpenAPI.V2.Xdc.Apiv2getsignkey.Sign.Getsignkey.PostHttpMethod {
  export interface XmlDataRequest {
    mch_id: string
    nonce_str?: string
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: XmlDataRequest
  }
  export interface WellformedResponse {
    return_code: 'SUCCESS' | 'FAIL'
    return_msg: 'OK' | string
    result_code: 'SUCCESS' | 'FAIL'
    err_code?: string
    err_code_des?: string
    mch_id: string
    sandbox_signkey?: string
  }
}
namespace WeChatPay.OpenAPI.V2.Xdc.Apiv2getsignkey.Sign {
  export interface Getsignkey {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/wiki/doc/api/tools/sp_coupon.php?chapter=23_1&index=2
     */
    (data: Getsignkey.PostHttpMethod.XmlDataRequest, config: Getsignkey.PostHttpMethod.RequestConfig): AxiosPromise<Getsignkey.PostHttpMethod.WellformedResponse>
    /**
     * 获取沙箱环境密钥
     * @link https://pay.weixin.qq.com/wiki/doc/api/tools/sp_coupon.php?chapter=23_1&index=2
     */
    post(data: Getsignkey.PostHttpMethod.XmlDataRequest, config: Getsignkey.PostHttpMethod.RequestConfig): AxiosPromise<Getsignkey.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V2.Xdc.Apiv2getsignkey {
  export interface Sign {
    getsignkey: Sign.Getsignkey
  }
}
namespace WeChatPay.OpenAPI.V2.Xdc {
  export interface Apiv2getsignkey {
    sign: Apiv2getsignkey.Sign
  }
}
namespace WeChatPay.OpenAPI.V2 {
  export interface Xdc {
    apiv2getsignkey: Xdc.Apiv2getsignkey
  }
}
namespace WeChatPay.OpenAPI {
  export interface V2 {
    xdc: V2.Xdc
  }
}
export interface Wechatpay {
  /**
   * APIv2 endpoint
   */
  v2: WeChatPay.OpenAPI.V2
}

export var wxpay: Wechatpay

// @filename: business.js
import { wxpay } from './virtual'
// ---cut---
const { Transformer } = require('wechatpay-axios-plugin')

wxpay.v2.xdc.apiv2getsignkey.sign.getsignkey.post({
  mch_id,
})
.then(
  ({ // [!code hl:8]
    data: {
      return_code,
      result_code,
      mch_id,
      sandbox_signkey,
    }
  }) => sandbox_signkey
)
```

> [!IMPORTANT] 重要提示
> 1. *wxpay* 构造实例化时，需要显式初始化 **secret** 字段，此为正式环境密钥；
> 2. 此接口请求时，会隐式按照[MD5数据签名算法](https://pay.weixin.qq.com/wiki/doc/api/jsapi.php?chapter=4_3)进行签名，填充请求的*sign*字段;
> 3. 此接口无返回值 **sign** 字段，SDK自v0.9起已内置忽略验签；
> 4. 此接口有QPS限制(官方未公布)，高频请求会被官方重定向到腾讯[公益404](https://wx.gtimg.com/core/404.html)页面；
> 5. *sandbox_signkey* 具有时效性，时长官方未公布，建议缓存1个小时即可，请按需缓存；
