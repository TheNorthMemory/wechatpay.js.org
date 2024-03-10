---
title: 开放接口概览
description: 微信支付官方开放的基于XML(APIv2)及JSON(APIv3)协议的OpenAPI接口地址。
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
| 分账v2{rowspan=10} | &nbsp; | [查询最大分账比例](/openapi/v2/pay/profitsharingmerchantratioquery)
| [添加分账接收方](/openapi/v2/pay/profitsharingaddreceiver) {colspan=2}
| [删除分账接收方](/openapi/v2/pay/profitsharingremovereceiver) {colspan=2}
| [请求单次分账](/openapi/v2/secapi/pay/profitsharing) {colspan=2}
| [请求多次分账](/openapi/v2/secapi/pay/multiprofitsharing) {colspan=2}
| [查询分账结果](/openapi/v2/pay/profitsharingquery) {colspan=2}
| [查询订单待分账金额](/openapi/v2/pay/profitsharingorderamountquery) {colspan=2}
| [完结分账](/openapi/v2/secapi/pay/profitsharingfinish) {colspan=2}
| [分账回退](/openapi/v2/secapi/pay/profitsharingreturn) {colspan=2}
| [回退结果查询](/openapi/v2/pay/profitsharingreturnquery) {colspan=2}
| 平台账单v2{rowspan=2} | [下载交易账单](/openapi/v2/pay/downloadbill) {colspan=2}
| [下载资金账单](/openapi/v2/pay/downloadfundflow) {colspan=2}
| 现金红包v2{rowspan=4} | [发放普通红包](/openapi/v2/mmpaymkttransfers/sendredpack) {colspan=2}
| [发放裂变红包](/openapi/v2/mmpaymkttransfers/sendgroupredpack) {colspan=2}
| [查询红包记录](/openapi/v2/mmpaymkttransfers/gethbinfo) {colspan=2}
| [发放小程序红包](/openapi/v2/mmpaymkttransfers/sendminiprogramhb) | &nbsp;
| 付款到零钱v2{rowspan=2} | [发起付款](/openapi/v2/mmpaymkttransfers/promottion/transfers) | &nbsp;
| [查询付款](/openapi/v2/mmpaymkttransfers/gettransferinfo) | &nbsp;
| 付款到银行卡v2{rowspan=3} | [获取加密公钥](/openapi/v2/risk/getpublickey) | &nbsp;
| [发起付款](/openapi/v2/mmpaysptrans/pay_bank) | &nbsp;
| [查询付款](/openapi/v2/mmpaymkttransfers/query_bank) | &nbsp;
| 基础支付v3{rowspan=10} | [APP下单](/openapi/v3/pay/transactions/app) | [APP下单](/openapi/v3/pay/partner/transactions/app)
| [H5下单](/openapi/v3/pay/transactions/h5) | [H5下单](/openapi/v3/pay/partner/transactions/h5)
| [JSAPI下单](/openapi/v3/pay/transactions/jsapi) | [JSAPI下单](/openapi/v3/pay/partner/transactions/jsapi)
| [Native下单](/openapi/v3/pay/transactions/native) | [Native下单](/openapi/v3/pay/partner/transactions/native)
| [按平台单号查单](/openapi/v3/pay/transactions/id/{transaction_id}) | [按平台单号查单](/openapi/v3/pay/partner/transactions/id/{transaction_id})
| [按商户单号查单](/openapi/v3/pay/transactions/out-trade-no/{out_trade_no}) | [按商户单号查单](/openapi/v3/pay/partner/transactions/out-trade-no/{out_trade_no})
| [关闭订单](/openapi/v3/pay/transactions/out-trade-no/{out_trade_no}/close) | [关闭订单](/openapi/v3/pay/partner/transactions/out-trade-no/{out_trade_no}/close)
| [发起退款申请](/openapi/v3/refund/domestic/refunds) {colspan=2}
| [查询单笔退款](/openapi/v3/refund/domestic/refunds/{out_refund_no}) {colspan=2}
| [发起异常退款](/openapi/v3/refund/domestic/refunds/{refund_id}/apply-abnormal-refund) {colspan=2}
| 合单支付v3{rowspan=6} | [合单APP下单](/openapi/v3/combine-transactions/app) {colspan=2}
| [合单H5下单](/openapi/v3/combine-transactions/h5) {colspan=2}
| [合单JSAPI下单](/openapi/v3/combine-transactions/jsapi) {colspan=2}
| [合单Native下单](/openapi/v3/combine-transactions/native) {colspan=2}
| [合单查单](/openapi/v3/combine-transactions/out-trade-no/{combine_out_trade_no}) {colspan=2}
| [合单关单](/openapi/v3/combine-transactions/out-trade-no/{combine_out_trade_no}/close) {colspan=2}
| 分账v3{rowspan=10} | &nbsp; | [查询最大分账比例](/openapi/v3/profitsharing/merchant-configs/{sub_mchid})
| | [添加分账接收方](/openapi/v3/profitsharing/receivers/add)
| | [删除分账接收方](/openapi/v3/profitsharing/receivers/delete)
| | [请求分账](/openapi/v3/profitsharing/orders)
| | [查询分账结果](/openapi/v3/profitsharing/orders/{out_order_no})
| | [查询剩余待分金额](/openapi/v3/profitsharing/transactions/{transaction_id}/amounts)
| | [解冻剩余资金](/openapi/v3/profitsharing/orders/unfreeze)
| | [请求分账回退](/openapi/v3/profitsharing/return-orders)
| | [查询分账回退结果](/openapi/v3/profitsharing/return-orders/{out_return_no})
| | [申请分账账单](/openapi/v3/profitsharing/bills)
| 连锁品牌分账v3{rowspan=9} | &nbsp; | [查询最大分账比例](/openapi/v3/brand/profitsharing/brand-configs/{brand_mchid})
| | [添加分账接收方](/openapi/v3/brand/profitsharing/receivers/add)
| | [删除分账接收方](/openapi/v3/brand/profitsharing/receivers/delete)
| | [请求分账](/openapi/v3/brand/profitsharing/orders#post)
| | [查询分账结果](/openapi/v3/brand/profitsharing/orders#get)
| | [查询剩余待分金额](/openapi/v3/brand/profitsharing/orders/{transaction_id}/amounts)
| | [完结分账](/openapi/v3/brand/profitsharing/finish-order)
| | [请求分账回退](/openapi/v3/brand/profitsharing/returnorders#post)
| | [查询分账回退结果](/openapi/v3/brand/profitsharing/returnorders#get)
| 平台账单v3{rowspan=4} | [申请交易账单](/openapi/v3/bill/tradebill) {colspan=2}
| [申请资金账单](/openapi/v3/bill/fundflowbill) {colspan=2}
| | [申请子商户资金账单](/openapi/v3/bill/sub-merchant-fundflowbill)
| [下载账单文件](/openapi/v3/billdownload/file) {colspan=2}
| 商家转账v3{rowspan=10} | [发起商家转账](/openapi/v3/transfer/batches) | [发起商家转账](/openapi/v3/partner-transfer/batches)
| [查询批次单(平台批次单号)](/openapi/v3/transfer/batches/batch-id/{batch_id}) | [查询批次单(平台批次单号)](/openapi/v3/partner-transfer/batches/batch-id/{batch_id})
| [查询批次单(商家批次单号)](/openapi/v3/transfer/batches/out-batch-no/{out_batch_no}) | [查询批次单(商家批次单号)](/openapi/v3/partner-transfer/batches/out-batch-no/{out_batch_no})
| [查询明细单(平台批次单号)](/openapi/v3/transfer/batches/batch-id/{batch_id}/details/detail-id/{detail_id}) | [查询明细单(平台批次单号)](/openapi/v3/partner-transfer/batches/batch-id/{batch_id}/details/detail-id/{detail_id})
| [查询明细单(商家批次单号)](/openapi/v3/transfer/batches/out-batch-no/{out_batch_no}/details/out-detail-no/{out_detail_no}) | [查询明细单(商家批次单号)](/openapi/v3/partner-transfer/batches/out-batch-no/{out_batch_no}/details/out-detail-no/{out_detail_no})
| [申请转账账单电子回单](/openapi/v3/transfer/bill-receipt) {colspan=2}
| [查询账单回单受理结果](/openapi/v3/transfer/bill-receipt/{out_batch_no}) {colspan=2}
| [申请转账明细电子回单](/openapi/v3/transfer-detail/electronic-receipts#post) {colspan=2}
| [查询明细回单受理结果](/openapi/v3/transfer-detail/electronic-receipts#get) {colspan=2}
| [下载电子回单文件](/openapi/v3/transferdownload/signfile) {colspan=2}
| 平台收付通v3{rowspan=35} | &nbsp; | [二级商户进件](/openapi/v3/ecommerce/applyments/)
| | [查询进件状态(平台申请单号)](/openapi/v3/ecommerce/applyments/{applyment_id})
| | [查询进件状态(业务申请编号)](/openapi/v3/ecommerce/applyments/out-request-no/{out_request_no})
| | [请求补差](/openapi/v3/ecommerce/subsidies/create)
| | [取消补差](/openapi/v3/ecommerce/subsidies/cancel)
| | [请求补差回退](/openapi/v3/ecommerce/subsidies/return)
| | [添加分账接收方](/openapi/v3/ecommerce/profitsharing/receivers/add)
| | [删除分账接收方](/openapi/v3/ecommerce/profitsharing/receivers/delete)
| | [请求分账](/openapi/v3/ecommerce/profitsharing/orders#post)
| | [查询分账结果](/openapi/v3/ecommerce/profitsharing/orders#get)
| | [查询剩余待分金额](/openapi/v3/ecommerce/profitsharing/orders/{transaction_id}/amounts)
| | [完结分账](/openapi/v3/ecommerce/profitsharing/finish-order)
| | [请求分账回退](/openapi/v3/ecommerce/profitsharing/returnorders#post)
| | [查询分账回退结果](/openapi/v3/ecommerce/profitsharing/returnorders#get)
| | [发起退款申请](/openapi/v3/ecommerce/refunds/apply)
| | [查询退款(商户退款单号)](/openapi/v3/ecommerce/refunds/out-refund-no/{out_refund_no})
| | [查询退款(平台退款单号)](/openapi/v3/ecommerce/refunds/id/{refund_id})
| | [垫付退款回补](/openapi/v3/ecommerce/refunds/{refund_id}/return-advance#post)
| | [查询退款回补结果](/openapi/v3/ecommerce/refunds/{refund_id}/return-advance#get)
| | [注销申请图片上传](/openapi/v3/ecommerce/account/cancel-applications/media)
| | [提交注销申请单](/openapi/v3/ecommerce/account/cancel-applications)
| | [查询注销单状态](/openapi/v3/ecommerce/account/cancel-applications/out-apply-no/{out_apply_no})
| | [申请销户号余额提现](/openapi/v3/mch_operate/risk/withdrawl-apply)
| | [查询销户号余额提现状态(商户提现单号)](/openapi/v3/mch_operate/risk/withdrawl-apply/out-request-no/{out_request_no})
| | [查询销户号余额提现状态(平台提现单号)](/openapi/v3/mch_operate/risk/withdrawl-apply/applyment-id/{applyment_id})
| | [二级商户账户余额提现](/openapi/v3/ecommerce/fund/withdraw)
| | [查询提现结果(商户提现单号)](/openapi/v3/ecommerce/fund/withdraw/out-request-no/{out_request_no})
| | [查询提现结果(平台提现单号)](/openapi/v3/ecommerce/fund/withdraw/{withdraw_id})
| | [查询二级商户账户实时余额](/openapi/v3/ecommerce/fund/balance/{sub_mchid})
| | [查询二级商户账户日终余额](/openapi/v3/ecommerce/fund/enddaybalance/{sub_mchid})
| | [申请二级商户资金账单](/openapi/v3/ecommerce/bill/fundflowbill)
| | [查询订单剩余可出境余额](/openapi/v3/funds-to-oversea/transactions/{transaction_id}/available_abroad_amounts)
| | [申请资金出境](/openapi/v3/funds-to-oversea/orders)
| | [查询出境结果](/openapi/v3/funds-to-oversea/orders/{out_order_id})
| | [获取购付汇账单](/openapi/v3/funds-to-oversea/bill-download-url)
| 商户进件v3{rowspan=3} | &nbsp; | [提交进件申请单](/openapi/v3/applyment4sub/applyment/)
| | [查询进件状态(申请单号)](/openapi/v3/applyment4sub/applyment/applyment_id/{applyment_id})
| | [查询进件状态(业务申请编号)](/openapi/v3/applyment4sub/applyment/business_code/{business_code})
| 结算账户v3{rowspan=3} | &nbsp; | [查询结算账户](/openapi/v3/apply4sub/sub_merchants/{sub_mchid}/settlement)
| | [修改结算账户](/openapi/v3/apply4sub/sub_merchants/{sub_mchid}/modify-settlement)
| | [查询结算账户修改状态](/openapi/v3/apply4sub/sub_merchants/{sub_mchid}/application/{application_no})
| 确认开户意愿v3{rowspan=5} | &nbsp; | [查询商户确认状态](/openapi/v3/apply4subject/applyment/merchants/{sub_mchid}/state)
| | [提交商户申请单](/openapi/v3/apply4subject/applyment#post)
| | [查询申请单审核结果](/openapi/v3/apply4subject/applyment#get)
| | [撤销申请单(申请单编号)](/openapi/v3/apply4subject/applyment/{applyment_id}/cancel)
| | [撤销申请单(业务申请编号)](/openapi/v3/apply4subject/applyment/{business_code}/cancel)
| 文件上传v3{rowspan=2} | &nbsp; | [商户图片文件上传](/openapi/v3/merchant/media/upload)
| | [商户视频文件上传](/openapi/v3/merchant/media/video_upload)
| 微信支付分v3{rowspan=20} | [创建支付分订单](/openapi/v3/payscore/serviceorder#post) | [创建支付分订单](/openapi/v3/payscore/partner/serviceorder#post)
| [查询支付分订单](/openapi/v3/payscore/serviceorder#get) | [查询支付分订单](/openapi/v3/payscore/partner/serviceorder#get)
| [取消支付分订单](/openapi/v3/payscore/serviceorder/{out_order_no}/cancel) | | [取消支付分订单](/openapi/v3/payscore/partner/serviceorder/{out_order_no}/cancel)
| [修改支付分金额](/openapi/v3/payscore/serviceorder/{out_order_no}/modify) | [修改支付分金额](/openapi/v3/payscore/partner/serviceorder/{out_order_no}/modify)
| [完结支付分订单](/openapi/v3/payscore/serviceorder/{out_order_no}/complete) | [完结支付分订单](/openapi/v3/payscore/partner/serviceorder/{out_order_no}/complete)
| [同步支付分订单](/openapi/v3/payscore/serviceorder/{out_order_no}/sync) | [同步支付分订单](/openapi/v3/payscore/partner/serviceorder/{out_order_no}/sync)
| [请求支付分催收](/openapi/v3/payscore/serviceorder/{out_order_no}/pay) | [请求支付分催收](/openapi/v3/payscore/partner/serviceorder/{out_order_no}/pay)
| [创建先用后付订单](/openapi/v3/payscore/servicepayondeliveryorder) | [创建先用后付订单](/openapi/v3/payscore/partner/servicepayondeliveryorder)
| [商户预授权(免确认)](/openapi/v3/payscore/permissions) | [商户预授权(免确认)](/openapi/v3/payscore/partner/permissions)
| [查询授权状态(CODE)(免确认)](/openapi/v3/payscore/permissions/authorization-code/{authorization_code}) | [查询授权状态(CODE)(免确认)](/openapi/v3/payscore/partner/permissions/authorization-code/{authorization_code})
| [查询授权状态(OPENID)(免确认)](/openapi/v3/payscore/permissions/openid/{openid}) | [查询授权状态(OPENID)(免确认)](/openapi/v3/payscore/partner/permissions/search)
| [查询授权状态](/openapi/v3/payscore/user-service-state) | &nbsp;
| [解除用户授权(CODE)(免确认)](/openapi/v3/payscore/permissions/authorization-code/{authorization_code}/terminate)| [解除用户授权(CODE)(免确认)](/openapi/v3/payscore/partner/permissions/authorization-code/{authorization_code}/terminate)
| [解除用户授权(OPENID)(免确认)](/openapi/v3/payscore/permissions/openid/{openid}/terminate) | [解除用户授权(OPENID)(免确认)](/openapi/v3/payscore/partner/permissions/terminate)
| [解除用户授权](/openapi/v3/payscore/users/{openid}/permissions/{service_id}/terminate) | &nbsp;
| [创单结单合并(免确认)](/openapi/v3/payscore/serviceorder/direct-complete) | [创单结单合并(免确认)](/openapi/v3/payscore/partner/serviceorder/direct-complete)
| | [查询先享金额分层](/openapi/v3/payscore/partner/servicequotas/service-id/{service_id})
| | [申请绑定支付分服务](/openapi/v3/payscore/partner/service-account-applications)
| | [查询支付分绑定结果](/openapi/v3/payscore/partner/service-account-applications/{out_apply_no})
| [申请对账单](/openapi/v3/payscore/merchant-bill) {colspan=2}
| 消费者投诉v3{rowspan=16} | [创建投诉通知回调](/openapi/v3/merchant-service/complaint-notifications#post) {colspan=2}
| [查询投诉通知回调](/openapi/v3/merchant-service/complaint-notifications#get) {colspan=2}
| [修改投诉通知回调](/openapi/v3/merchant-service/complaint-notifications#put) {colspan=2}
| [删除投诉通知回调](/openapi/v3/merchant-service/complaint-notifications#delete) {colspan=2}
| [查询投诉单列表](/openapi/v3/merchant-service/complaints-v2) {colspan=2}
| [查询投诉单详情](/openapi/v3/merchant-service/complaints-v2/{complaint_id}) {colspan=2}
| [查询投诉单协商历史](/openapi/v3/merchant-service/complaints-v2/{complaint_id}/negotiation-historys) {colspan=2}
| [回复用户](/openapi/v3/merchant-service/complaints-v2/{complaint_id}/response) {colspan=2}
| [反馈处理完成](/openapi/v3/merchant-service/complaints-v2/{complaint_id}/complete) {colspan=2}
| [更新退款审批结果](/openapi/v3/merchant-service/complaints-v2/{complaint_id}/update-refund-progress) {colspan=2}
| [上传商户反馈图片文件](/openapi/v3/merchant-service/images/upload) {colspan=2}
| [投诉单详情图片文件下载](/openapi/v3/merchant-service/images/{media_id}) {colspan=2}
| :thumbsdown:[~~查询投诉信息列表~~](/openapi/v3/merchant-service/complaints) {colspan=2}
| :thumbsdown:[~~查询投诉详情详情~~](/openapi/v3/merchant-service/complaints/{transaction_id}) {colspan=2}
| :thumbsdown:[~~查询投诉单协商历史~~](/openapi/v3/merchant-service/complaints/{transaction_id}/negotiation-historys) {colspan=2}
| :thumbsdown:[~~商户反馈~~](/openapi/v3/merchant-service/feedbacks) {colspan=2}
| 平台证书v3{rowspan=1} | [获取平台证书列表](/openapi/v3/certificates) {colspan=2}

{.vp-table}
