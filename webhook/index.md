---
title: 回调通知
description: 同样的通知可能会多次发送给商户系统。商户系统必须能够正确处理重复的通知。
---

| 通知格式 | 直连商户模式 | 合作伙伴模式 |
| :------: | :----------: | :----------: |
| XML {rowspan=3} | [普通支付通知](/webhook/v2/transaction-success) {colspan=2}
| [合单支付通知](/webhook/v2/combined-transactions-success) {colspan=2}
| [退款结果通知](/webhook/v2/refund-processed) {colspan=2}
| JSON {rowspan=3} | [普通支付通知](/webhook/v3/TRANSACTION.SUCCESS) {colspan=2}
| [服务商支付通知](/webhook/v3/TRANSACTION.SUCCESS) {colspan=2}
| [合单支付通知](/webhook/v3/TRANSACTION.SUCCESS) {colspan=2}
| JSON {rowspan=3} | [退款成功通知](/webhook/v3/REFUND.SUCCESS) {colspan=2}
| [退款异常通知](/webhook/v3/REFUND.ABNORMAL) {colspan=2}
| [退款关闭通知](/webhook/v3/REFUND.CLOSED) {colspan=2}
| JSON {rowspan=2} | [分账成功通知](/webhook/v3/PROFITSHARING.SUCCESS) {colspan=2}
| [分账回退通知](/webhook/v3/PROFITSHARING.RETURN) {colspan=2}

{.vp-table}