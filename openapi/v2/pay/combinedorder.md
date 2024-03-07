---
title: 合单下单
description: 使用合单支付接口，用户只输入一次密码，即可完成多个订单的支付。目前最多一次可支持10笔订单进行合单支付。用合单下单api在微信支付服务后台生成预支付交易单，返回正确的预支付交易会话标识后再按扫码、JSAPI、APP、H5等不同场景生成交易串调起支付。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [官方合单支付文档](https://pay.weixin.qq.com/wiki/doc/api/combine.php?chapter=24_1&index=2)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { CipherKey } from 'crypto'
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V2.Pay.Combinedorder.PostHttpMethod {
  export interface XmlDataRequest {
    combine_appid: string
    combine_mch_id: string
    device_info: string
    nonce_str?: string
    sign_type: 'HMAC-SHA256'
    combine_out_trade_no: string
    spbill_create_ip: string
    time_start: string
    time_expire: string
    notify_url: string
    trade_type: 'JSAPI' | 'NATIVE' | 'APP' | 'MWEB'
    product_id?: string
    combine_openid?: string
    scene_info?: string
    sub_order_list: string
  }
  export interface RequestConfig extends AxiosRequestConfig {
    data?: XmlDataRequest
  }
  export interface WellformedResponse {
    return_code: string
    return_msg: string
    combine_appid: string
    combine_mch_id: string
    device_info: string
    nonce_str: string
    sign: string
    result_code: string
    err_code: string
    err_code_des: string
    trade_type: string
    code_url?: string
    prepay_id: string
    mweb_url?: string
  }
}
namespace WeChatPay.OpenAPI.V2.Pay {
  export interface Combinedorder {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/wiki/doc/api/combine.php?chapter=24_1&index=2
     */
    (data: Combinedorder.PostHttpMethod.XmlDataRequest, config?: Combinedorder.PostHttpMethod.RequestConfig): AxiosPromise<Combinedorder.PostHttpMethod.WellformedResponse>
    /**
     * 合单下单
     * @link https://pay.weixin.qq.com/wiki/doc/api/combine.php?chapter=24_1&index=2
     */
    post(data: Combinedorder.PostHttpMethod.XmlDataRequest, config?: Combinedorder.PostHttpMethod.RequestConfig): AxiosPromise<Combinedorder.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V2 {
  export interface Pay {
    combinedorder: Pay.Combinedorder
  }
}
namespace WeChatPay.OpenAPI {
  export interface V2 {
    pay: V2.Pay
  }
}
export interface Wechatpay {
  /**
   * APIv2 endpoint
   */
  v2: WeChatPay.OpenAPI.V2
}
export var wxpay: Wechatpay
export var previousSignType: WeChatPay.OpenAPI.V2.Pay.Combinedorder.PostHttpMethod.XmlDataRequest['sign_type']
export var appid: WeChatPay.OpenAPI.V2.Pay.Combinedorder.PostHttpMethod.XmlDataRequest['combine_appid']
export var appId: typeof appid
export var partnerid:  WeChatPay.OpenAPI.V2.Pay.Combinedorder.PostHttpMethod.XmlDataRequest['combine_mch_id']
export var apiv2Secret: CipherKey

// @filename: business.js
import { wxpay, previousSignType, appid, appId, partnerid, apiv2Secret } from './virtual'
// ---cut---
const { Formatter, Hash } = require('wechatpay-axios-plugin')

// 合单 NATIVE 支付场景
wxpay.v2.pay.combinedorder.post({
//                         ^^^^
  combine_appid,
  combine_mch_id,
  device_info,
  nonce_str,
  sign_type,
  combine_out_trade_no,
  spbill_create_ip,
  time_start,
  time_expire,
  notify_url,
  trade_type: 'NATIVE',
  product_id,
  sub_order_list,
})
.then(
  ({ // [!code hl:18]
    data: {
      return_code,
      return_msg,
      combine_appid,
      combine_mch_id,
      device_info,
      nonce_str,
      sign,
      result_code,
      err_code,
      err_code_des,
      trade_type,
      code_url,
    },
  }) => ({
    code_url,
  })
)

// 合单 JSAPI 支付场景
wxpay.v2.pay.combinedorder.post({
//                         ^^^^
  combine_appid,
  combine_mch_id,
  device_info,
  nonce_str,
  sign_type,
  combine_out_trade_no,
  spbill_create_ip,
  time_start,
  time_expire,
  notify_url,
  trade_type: 'JSAPI',
  combine_openid,
  sub_order_list,
})
.then(
  ({
    data: {
      return_code,
      return_msg,
      combine_appid,
      combine_mch_id,
      device_info,
      nonce_str,
      sign,
      result_code,
      err_code,
      err_code_des,
      trade_type,
      prepay_id,
    },
  }) => {
    const nonceStr = Formatter.nonce();
    const timeStamp = '' + Formatter.timestamp();
    const packageStr = 'prepay_id=' + prepay_id;
    const signType = previousSignType;
    return { // [!code hl:12]
      appId,
      timeStamp,
      nonceStr,
      package: packageStr,
      signType,
      paySign: Hash.sign(
        signType,
        { appId, timeStamp, nonceStr, package: packageStr, signType },
        apiv2Secret
      )
    }
  }
)

// 合单 APP 支付场景
wxpay.v2.pay.combinedorder.post({
//                         ^^^^
  combine_appid,
  combine_mch_id,
  device_info,
  nonce_str,
  sign_type,
  combine_out_trade_no,
  spbill_create_ip,
  time_start,
  time_expire,
  notify_url,
  trade_type: 'APP',
  scene_info,
  sub_order_list,
})
.then(
  ({
    data: {
      return_code,
      return_msg,
      combine_appid,
      combine_mch_id,
      device_info,
      nonce_str,
      sign,
      result_code,
      err_code,
      err_code_des,
      trade_type,
      prepay_id: prepayid,
    },
  }) => {
    const noncestr = Formatter.nonce();
    const timestamp = '' + Formatter.timestamp();
    const packageStr = 'Sign=WXPay';
    const signType = previousSignType || 'MD5';
    return { // [!code hl:13]
      appid,
      partnerid,
      prepayid,
      package: packageStr,
      timestamp,
      noncestr,
      sign: Hash.sign(
        signType,
        { appid, partnerid, prepayid, package: packageStr, timestamp, noncestr },
        apiv2Secret
      )
    }
  }
)

// 合单 MWEB 支付场景
wxpay.v2.pay.combinedorder.post({
//                         ^^^^
  combine_appid,
  combine_mch_id,
  device_info,
  nonce_str,
  sign_type,
  combine_out_trade_no,
  spbill_create_ip,
  time_start,
  time_expire,
  notify_url,
  trade_type: 'MWEB',
  scene_info,
  sub_order_list,
})
.then(
  ({ // [!code hl:18]
    data: {
      return_code,
      return_msg,
      combine_appid,
      combine_mch_id,
      device_info,
      nonce_str,
      sign,
      result_code,
      err_code,
      err_code_des,
      trade_type,
      mweb_url,
    },
  }) => ({
    mweb_url,
  })
)
```
