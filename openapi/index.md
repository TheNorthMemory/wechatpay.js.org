---
title: 开放接口概览
---

| 业务标签 | 直连商户模式 | 合作伙伴模式
| :----: | :------: | :--------:
| 沙箱环境v2 {rowspan=3} | [获取沙箱环境密钥](/openapi/v2/xdc/apiv2getsignkey/sign/getsignkey) {colspan=2}
| [沙箱付款码支付](/openapi/v2/xdc/apiv2sandbox/pay/micropay) {colspan=2}
| [沙箱订单查询](/openapi/v2/xdc/apiv2sandbox/pay/orderquery) {colspan=2}
| 基础支付v2 {rowspan=12} | [付款码支付](/openapi/v2/pay/micropay) {colspan=2}
| [撤销订单](/openapi/v2/secapi/pay/reverse) {colspan=2}
| [授权码查询openid](/openapi/v2/tools/authcodetoopenid) {colspan=2}
| [统一下单](/openapi/v2/pay/unifiedorder) {colspan=2}
| [转换短链接](/openapi/v2/tools/shorturl) {colspan=2}
| [查询订单](/openapi/v2/pay/orderquery) {colspan=2}
| [关闭订单](/openapi/v2/pay/closeorder) {colspan=2}
| [申请退款](/openapi/v2/secapi/pay/refund) {colspan=2}
| [申请退款(单品优惠)](/openapi/v2/secapi/pay/refundv2) {colspan=2}
| [查询退款](/openapi/v2/pay/refundquery) {colspan=2}
| [查询退款(单品优惠)](/openapi/v2/pay/refundqueryv2) {colspan=2}
| [交易保障](/openapi/v2/payitil/report) {colspan=2}
| 合单支付v2{rowspan=3} | [合单下单](/openapi/v2/pay/combinedorder) {colspan=2}
| [合单查单](/openapi/v2/pay/querycombinedorder) {colspan=2}
| [合单关单](/openapi/v2/pay/closecombinedorder) {colspan=2}
| 平台账单v2{rowspan=2} | [下载交易账单](/openapi/v2/pay/downloadbill) {colspan=2}
| [下载资金账单](/openapi/v2/pay/downloadfundflow) {colspan=2}
| 现金红包v2{rowspan=3} | [发放普通红包](/openapi/v2/mmpaymkttransfers/sendredpack) {colspan=2}
| [发放裂变红包](/openapi/v2/mmpaymkttransfers/sendgroupredpack) {colspan=2}
| [查询红包记录](/openapi/v2/mmpaymkttransfers/gethbinfo) {colspan=2}
| 基础支付v3{rowspan=10} | [APP下单](/openapi/v3/pay/transactions/app) | [APP下单](/openapi/v3/pay/partner/transactions/app)
| [H5下单](/openapi/v3/pay/transactions/h5) | [H5下单](/openapi/v3/pay/partner/transactions/h5)
| [JSAPI下单](/openapi/v3/pay/transactions/jsapi) | [JSAPI下单](/openapi/v3/pay/partner/transactions/jsapi)
| [Native下单](/openapi/v3/pay/transactions/native) | [Native下单](/openapi/v3/pay/partner/transactions/native)
| [按平台单号查单](/openapi/v3/pay/transactions/id/{transaction_id}) | [按平台单号查单](/openapi/v3/pay/partner/transactions/id/{transaction_id})
| [按商户单号查单](/openapi/v3/pay/transactions/out-trade-no/{out_trade_no}) | [按商户单号查单](/openapi/v3/pay/partner/transactions/out-trade-no/{out_trade_no})
| [关闭订单](/openapi/v3/pay/transactions/out-trade-no/{out_trade_no}/close) | [关闭订单](/openapi/v3/pay/partner/transactions/out-trade-no/{out_trade_no}/close)
| [申请退款](/openapi/v3/refund/domestic/refunds) {colspan=2}
| [查询单笔退款](/openapi/v3/refund/domestic/refunds/{out_refund_no}) {colspan=2}
| [发起异常退款](/openapi/v3/refund/domestic/refunds/{refund_id}/apply-abnormal-refund) {colspan=2}
| 合单支付v3{rowspan=6} | [合单APP下单](/openapi/v3/combine-transactions/app) {colspan=2}
| [合单H5下单](/openapi/v3/combine-transactions/h5) {colspan=2}
| [合单JSAPI下单](/openapi/v3/combine-transactions/jsapi) {colspan=2}
| [合单Native下单](/openapi/v3/combine-transactions/native) {colspan=2}
| [合单查单](/openapi/v3/combine-transactions/out-trade-no/{combine_out_trade_no}) {colspan=2}
| [合单关单](/openapi/v3/combine-transactions/out-trade-no/{combine_out_trade_no}/close) {colspan=2}
| 平台账单v3{rowspan=4} | [申请交易账单](/openapi/v3/bill/tradebill) {colspan=2}
| [申请资金账单](/openapi/v3/bill/fundflowbill) {colspan=2}
| | [申请子商户资金账单](/openapi/v3/bill/sub-merchant-fundflowbill)
| [下载账单文件](/openapi/v3/billdownload/file) {colspan=2}
| 平台证书v3 | [获取列表](/openapi/v3/certificates) {colspan=2}

{.vp-table}
