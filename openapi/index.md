---
title: 开放接口概览
---

| 业务标签 | 直连商户模式 | 合作伙伴模式
| :----: | :------: | :--------:
| 沙箱环境v2{rowspan=3} | [获取沙箱环境密钥](/openapi/v2/xdc/apiv2getsignkey/sign/getsignkey) | [获取沙箱环境密钥](/openapi/v2/xdc/apiv2getsignkey/sign/getsignkey)
| [沙箱付款码支付](/openapi/v2/xdc/apiv2sandbox/pay/micropay) | [沙箱付款码支付](/openapi/v2/xdc/apiv2sandbox/pay/micropay)
| [沙箱订单查询](/openapi/v2/xdc/apiv2sandbox/pay/orderquery) | [沙箱订单查询](/openapi/v2/xdc/apiv2sandbox/pay/orderquery)
| 基础支付v2{rowspan=4} | [付款码支付](/openapi/v2/pay/micropay) | [付款码支付](/openapi/v2/pay/micropay)
| [统一下单](/openapi/v2/pay/unifiedorder) | [统一下单](/openapi/v2/pay/unifiedorder)
| [查询订单](/openapi/v2/pay/orderquery) | [查询订单](/openapi/v2/pay/orderquery)
| [关闭订单](/openapi/v2/pay/closeorder) | [关闭订单](/openapi/v2/pay/closeorder)
| 基础支付v3{rowspan=7} | [APP下单](/openapi/v3/pay/transactions/app) | [APP下单](/openapi/v3/pay/partner/transactions/app)
| [H5下单](/openapi/v3/pay/transactions/h5) | [H5下单](/openapi/v3/pay/partner/transactions/h5)
| [JSAPI下单](/openapi/v3/pay/transactions/jsapi) | [JSAPI下单](/openapi/v3/pay/partner/transactions/jsapi)
| [Native下单](/openapi/v3/pay/transactions/native) | [Native下单](/openapi/v3/pay/partner/transactions/native)
| [按微信支付订单号查单](/openapi/v3/pay/transactions/id/{transaction_id}) | [按微信支付订单号查单](/openapi/v3/pay/partner/transactions/id/{transaction_id})
| [按商户订单号查单](/openapi/v3/pay/transactions/out-trade-no/{out_trade_no}) | [按商户订单号查单](/openapi/v3/pay/partner/transactions/out-trade-no/{out_trade_no})
| [关闭订单](/openapi/v3/pay/transactions/out-trade-no/{out_trade_no}/close) | [关闭订单](/openapi/v3/pay/partner/transactions/out-trade-no/{out_trade_no}/close)
| 平台证书v3 | [获取列表](/openapi/v3/certificates) | [获取列表](/openapi/v3/certificates)

{.vp-table}

<style>
  .vp-table tbody td:empty {display:none}
</style>
