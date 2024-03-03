---
title: 统一下单
description: 除付款码支付场景以外，商户系统先调用该接口在微信支付服务后台生成预支付交易单，返回正确的预支付交易会话标识后再按Native、JSAPI、APP等不同场景生成交易串调起支付。
---

# {{ $frontmatter.title }}

{{ $frontmatter.description }} [官方JSAPI文档](https://pay.weixin.qq.com/wiki/doc/api/jsapi.php?chapter=9_1) [Native官方文档](https://pay.weixin.qq.com/wiki/doc/api/native.php?chapter=9_1) [官方APP文档](https://pay.weixin.qq.com/wiki/doc/api/app/app.php?chapter=9_1) [官方H5文档](https://pay.weixin.qq.com/wiki/doc/api/H5.php?chapter=9_20&index=1) [官方小程序支付文档](https://pay.weixin.qq.com/wiki/doc/api/wxa/wxa_api.php?chapter=9_1)

```js twoslash
// @filename: virtual.ts
/// <reference types="node" />
import { CipherKey } from 'crypto'
import { AxiosRequestConfig, AxiosPromise } from 'axios'
namespace WeChatPay.OpenAPI.V2.Pay.Unifiedorder.PostHttpMethod {
  export interface XmlDataRequest {
    appid: string
    mch_id: string
    body: string
    out_trade_no: string
    notify_url: string
    spbill_create_ip: string
    total_fee: string | number
    attach?: string
    scene_info?: string
    trade_type: 'JSAPI' | 'NATIVE' | 'APP' | 'MWEB'
    fee_type?: 'CNY'
    limit_pay?: 'no_credit'
    sign_type?: 'MD5' | 'HMAC-SHA256'
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
    trade_type: XmlDataRequest['trade_type']
    prepay_id?: string
    code_url?: string
    mweb_url?: string
  }
}
namespace WeChatPay.OpenAPI.V2.Pay {
  export interface Unifiedorder {
    /**
     * shortland
     * @link https://pay.weixin.qq.com/wiki/doc/api/jsapi.php?chapter=9_1
     * @link https://pay.weixin.qq.com/wiki/doc/api/native.php?chapter=9_1
     * @link https://pay.weixin.qq.com/wiki/doc/api/app/app.php?chapter=9_1
     * @link https://pay.weixin.qq.com/wiki/doc/api/H5.php?chapter=9_20&index=1
     * @link https://pay.weixin.qq.com/wiki/doc/api/wxa/wxa_api.php?chapter=9_1
     */
    (data: Unifiedorder.PostHttpMethod.XmlDataRequest, config?: Unifiedorder.PostHttpMethod.RequestConfig): AxiosPromise<Unifiedorder.PostHttpMethod.WellformedResponse>
    /**
     * 统一下单
     * @link https://pay.weixin.qq.com/wiki/doc/api/jsapi.php?chapter=9_1
     * @link https://pay.weixin.qq.com/wiki/doc/api/native.php?chapter=9_1
     * @link https://pay.weixin.qq.com/wiki/doc/api/app/app.php?chapter=9_1
     * @link https://pay.weixin.qq.com/wiki/doc/api/H5.php?chapter=9_20&index=1
     * @link https://pay.weixin.qq.com/wiki/doc/api/wxa/wxa_api.php?chapter=9_1
     */
    post(data: Unifiedorder.PostHttpMethod.XmlDataRequest, config?: Unifiedorder.PostHttpMethod.RequestConfig): AxiosPromise<Unifiedorder.PostHttpMethod.WellformedResponse>
  }
}
namespace WeChatPay.OpenAPI.V2 {
  export interface Pay {
    unifiedorder: Pay.Unifiedorder
  }
}
namespace WeChatPay.OpenAPI {
  export interface V2 {
    pay: V2.Pay
  }
}
interface Wechatpay {
  /**
   * APIv2 endpoint
   */
  v2: WeChatPay.OpenAPI.V2
}

export var wxpay: Wechatpay
export var previousSignType: WeChatPay.OpenAPI.V2.Pay.Unifiedorder.PostHttpMethod.XmlDataRequest['sign_type']
export var appid:  WeChatPay.OpenAPI.V2.Pay.Unifiedorder.PostHttpMethod.XmlDataRequest['appid']
export var appId: typeof appid
export var partnerid:  WeChatPay.OpenAPI.V2.Pay.Unifiedorder.PostHttpMethod.XmlDataRequest['mch_id']
export var apiv2Secret: CipherKey

// @filename: business.js
import { wxpay, previousSignType, appid, appId, partnerid, apiv2Secret } from './virtual'
// ---cut---
const { Formatter, Hash } = require('wechatpay-axios-plugin')

// 直连模式 NATIVE 支付场景
wxpay.v2.pay.unifiedorder.post({
                        //^^^^
  mch_id,
  appid,
  body,
  out_trade_no,
  notify_url,
  total_fee,
  trade_type: 'NATIVE',
})
.then(
  ({ // [!code hl:8]
    data: {
      return_code,
      result_code,
      trade_type,
      code_url,
    }
  }) => code_url
)

// 直连模式 JSAPI 支付场景
wxpay.v2.pay.unifiedorder.post({
                        //^^^^
  mch_id,
  appid,
  body,
  out_trade_no,
  notify_url,
  total_fee,
  trade_type: 'JSAPI',
  sign_type,
})
.then(
  ({
    data: {
      return_code,
      result_code,
      trade_type,
      prepay_id,
    }
  }) => {
  const nonceStr = Formatter.nonce();
  const timeStamp = '' + Formatter.timestamp();
  const packageStr = 'prepay_id=' + prepay_id;
  const signType = previousSignType || 'MD5';
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
})

// 直连模式 APP 支付场景
wxpay.v2.pay.unifiedorder.post({
                        //^^^^
  mch_id,
  appid,
  body,
  out_trade_no,
  notify_url,
  total_fee,
  trade_type: 'APP',
  sign_type,
})
.then(
  ({
    data: {
      return_code,
      result_code,
      trade_type,
      prepay_id: prepayid,
    }
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
})

// 直连模式 MWEB 支付场景
wxpay.v2.pay.unifiedorder.post({
                        //^^^^
  mch_id,
  appid,
  body,
  scene_info,
  out_trade_no,
  notify_url,
  total_fee,
  trade_type: 'MWEB',
})
.then(
  ({ // [!code hl:8]
    data: {
      return_code,
      result_code,
      trade_type,
      mweb_url,
    }
  }) => mweb_url
)
```
