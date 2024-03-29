---
title: 回调通知概览
description: 后台通知交互时，如果微信收到商户的应答不符合规范或超时，微信会判定本次通知失败，重新发送通知，直到成功为止。这里通知发送可能会多台服务器进行发送，且发送时间可能会在几秒内，但微信不保证通知最终一定能成功。商户系统必须能够正确处理重复的通知。
---

| 通知格式 | 直连商户模式 | 合作伙伴模式 |
| :------: | :----------: | :----------: |
| XML {rowspan=4} | [普通支付通知](/webhook/v2/transaction-success) {colspan=2}
| [合单支付通知](/webhook/v2/combined-transactions-success) {colspan=2}
| [退款结果通知](/webhook/v2/refund-processed) {colspan=2}
| [车牌状态变更通知](/webhook/v2/vehicle-state-changed-for-parking) {colspan=2}
| JSON {rowspan=3} | [普通支付通知](/webhook/v3/TRANSACTION.SUCCESS#BASIC) {colspan=2}
| [服务商支付通知](/webhook/v3/TRANSACTION.SUCCESS#PARTNER) {colspan=2}
| [合单支付通知](/webhook/v3/TRANSACTION.SUCCESS#COMBINE) {colspan=2}
| JSON {rowspan=3} | [退款成功通知](/webhook/v3/REFUND.SUCCESS) {colspan=2}
| [退款异常通知](/webhook/v3/REFUND.ABNORMAL) {colspan=2}
| [退款关闭通知](/webhook/v3/REFUND.CLOSED) {colspan=2}
| JSON {rowspan=2} | [分账成功通知](/webhook/v3/PROFITSHARING.SUCCESS) {colspan=2}
| [分账回退通知](/webhook/v3/PROFITSHARING.RETURN) {colspan=2}
| JSON {rowspan=2} | [商家转账批次完成通知](/webhook/v3/MCHTRANSFER.BATCH.FINISHED) {colspan=2}
| [商家转账批次关闭通知](/webhook/v3/MCHTRANSFER.BATCH.CLOSED) {colspan=2}
| JSON {rowspan=2} | [产生新投诉通知](/webhook/v3/COMPLAINT.CREATE) {colspan=2}
| [投诉状态变化通知](/webhook/v3/COMPLAINT.STATE_CHANGE) {colspan=2}
| JSON {rowspan=5} | [支付分服务用户授权成功通知](/webhook/v3/PAYSCORE.USER_OPEN_SERVICE) {colspan=2}
| [支付分服务用户解除授权通知](/webhook/v3/PAYSCORE.USER_CLOSE_SERVICE) {colspan=2}
| [支付分服务用户确认成功通知](/webhook/v3/PAYSCORE.USER_CONFIRM) {colspan=2}
| [支付分服务用户支付成功通知](/webhook/v3/PAYSCORE.USER_PAID) {colspan=2}
| | [支付分服务账户绑定结果通知](/webhook/v3/PAYSCORE.BIND_SERVICE_ACCOUNT)
| JSON {rowspan=4} | [停车入场状态变更通知](/webhook/v3/VEHICLE.ENTRANCE_STATE_CHANGE) {colspan=2}
| [停车服务订单支付成功通知](/webhook/v3/TRANSACTION.SUCCESS#PARKING) {colspan=2}
| [停车服务订单支付失败通知](/webhook/v3/TRANSACTION.FAIL) {colspan=2}
| [停车服务用户还款通知](/webhook/v3/TRANSACTION.PAY_BACK) {colspan=2}
| JSON {rowspan=3} | &nbsp; | [处罚二级商户通知](/webhook/v3/VIOLATION.PUNISH)
| | [拦截二级商户通知](/webhook/v3/VIOLATION.INTERCEPT)
| | [二级商户申诉通知](/webhook/v3/VIOLATION.APPEAL)

{.vp-table}
