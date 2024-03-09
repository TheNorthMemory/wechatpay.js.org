import { defineConfig } from 'vitepress'
import { transformerTwoslash } from '@shikijs/vitepress-twoslash'

export default defineConfig({
  lang: 'zh-CN',
  title: 'wechatpay.js.org',
  description: 'Promise based and chained WeChatPay OpenAPI client SDK for NodeJS',
  lastUpdated: true,
  cleanUrls: true,
  markdown: {
    codeTransformers: [
      transformerTwoslash()
    ],
  },
  srcExclude: ['**/README.md'],
  sitemap: {
    hostname: 'https://wechatpay.js.org',
    transformItems(items) {
      return items.filter((item) => !item.url.includes('README'))
    },
  },
  head: [
    ['meta', { name: 'theme-color', content: '#5f67ee' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:locale', content: 'zh' }],
    ['meta', { property: 'og:title', content: 'Promise based and chained WeChatPay OpenAPI client SDK for NodeJS' }],
    ['meta', { property: 'og:site_name', content: 'wechatpay.js.org' }],
    ['meta', { property: 'og:url', content: 'https://wechatpay.js.org/' }],
    ...(process?.argv?.at(2) === 'dev' ? [] : [
      ['script', { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-8NRT7Z8PN5' }],
      ['script', {}, `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);}; gtag('js', new Date()); gtag('config', 'G-8NRT7Z8PN5');`],
    ]),
  ],
  transformPageData(pageData) {
    const href = `https://wechatpay.js.org/${pageData.relativePath}`.replace(/(?:index)?\.md$/, '')
    pageData.frontmatter.head ??= []
    pageData.frontmatter.head?.push([ 'link', { rel: 'canonical', href, }])
  },
  themeConfig: {
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    aside: false,
    outline: {
      level: 'deep',
      label: '页面导航',
    },
    editLink: {
      pattern: 'https://github.com/TheNorthMemory/wechatpay.js.org/edit/main/:path',
      text: '在 GitHub 上编辑此页面',
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2020-present James ZHANG(TheNorthMemory)'
    },
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    notFound: {
      title: '未找到',
      quote: '您所访问的页面未找到，或者已失效',
      linkLabel: '返回首页',
      linkText: '返回首页',
    },
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'medium',
        timeStyle: 'short',
        hourCycle: 'h23',
        timeZone: 'Asia/Shanghai',
        forceLocale: false,
      },
    },
    nav: [
      {
        text: 'v0.8.12',
        items: [
          {
            text: '变更历史',
            link: 'https://github.com/TheNorthMemory/wechatpay-axios-plugin/releases'
          },
        ],
      },
      {
      	text: '指南',
      	link: '/guide/',
      	activeMatch: '^/guide/'
      },
      {
        text: '开放接口',
        link: '/openapi/',
        activeMatch: '^/openapi/'
      },
    ],
    socialLinks: [
      {
        icon: 'gitee',
        link: 'https://gitee.com/TheNorthMemory/wechatpay-axios-plugin',
      },
      {
        icon: 'npm',
        link: 'https://www.npmjs.com/package/wechatpay-axios-plugin',
      },
      {
        icon: 'github',
        link: 'https://github.com/TheNorthMemory/wechatpay-axios-plugin',
      },
    ],
    sidebar: {
      '/guide/': guideSidebar(),
      '/openapi/': openapiSidebar(),
    }
  }
})

function guideSidebar() {
  return [
    {
      text: '指南',
      link: '/guide/',
      items: [
        {
          text: '快速开始',
          link: '/guide/getting-started'
        },
      ],
    },
  ];
}

function openapiSidebar() {
  return [
    {
      text: 'APIv2',
      collapsed: false,
      items: [
        {
          text: '沙箱环境',
          collapsed: true,
          items: [
            {
              text: '获取沙箱密钥',
              link: '/openapi/v2/xdc/apiv2getsignkey/sign/getsignkey'
            },
            {
              text: '沙箱付款码支付',
              link: '/openapi/v2/xdc/apiv2sandbox/pay/micropay'
            },
            {
              text: '沙箱订单查询',
              link: '/openapi/v2/xdc/apiv2sandbox/pay/orderquery'
            },
          ],
        },
        {
          text: '基础支付',
          collapsed: true,
          items: [
            {
              text: '付款码支付',
              link: '/openapi/v2/pay/micropay'
            },
            {
              text: '授权码查询openid',
              link: '/openapi/v2/tools/authcodetoopenid'
            },
            {
              text: '撤销订单',
              link: '/openapi/v2/secapi/pay/reverse'
            },
            {
              text: '统一下单',
              link: '/openapi/v2/pay/unifiedorder'
            },
            {
              text: '转换短链接',
              link: '/openapi/v2/tools/shorturl'
            },
            {
              text: '查询订单',
              link: '/openapi/v2/pay/orderquery'
            },
            {
              text: '关闭订单',
              link: '/openapi/v2/pay/closeorder'
            },
            {
              text: '申请退款',
              link: '/openapi/v2/secapi/pay/refund'
            },
            {
              text: '申请退款(单品优惠)',
              link: '/openapi/v2/secapi/pay/refundv2'
            },
            {
              text: '查询退款',
              link: '/openapi/v2/pay/refundquery'
            },
            {
              text: '查询退款(单品优惠)',
              link: '/openapi/v2/pay/refundqueryv2'
            },
            {
              text: '交易保障',
              link: '/openapi/v2/payitil/report'
            },
          ],
        },
        {
          text: '合单支付',
          collapsed: true,
          items: [
            {
              text: '合单下单',
              link: '/openapi/v2/pay/combinedorder'
            },
            {
              text: '合单查单',
              link: '/openapi/v2/pay/querycombinedorder'
            },
            {
              text: '合单关单',
              link: '/openapi/v2/pay/closecombinedorder'
            },
          ]
        },
        {
          text: '分账',
          collapsed: true,
          items: [
            {
              text: '查询最大分账比例',
              link: '/openapi/v2/pay/profitsharingmerchantratioquery',
            },
            {
              text: '添加分账接收方',
              link: '/openapi/v2/pay/profitsharingaddreceiver',
            },
            {
              text: '删除分账接收方',
              link: '/openapi/v2/pay/profitsharingremovereceiver',
            },
            {
              text: '请求单次分账',
              link: '/openapi/v2/secapi/pay/profitsharing',
            },
            {
              text: '请求多次分账',
              link: '/openapi/v2/secapi/pay/multiprofitsharing',
            },
            {
              text: '查询分账结果',
              link: '/openapi/v2/pay/profitsharingquery',
            },
            {
              text: '查询订单待分账金额',
              link: '/openapi/v2/pay/profitsharingorderamountquery',
            },
            {
              text: '完结分账',
              link: '/openapi/v2/secapi/pay/profitsharingfinish',
            },
            {
              text: '分账回退',
              link: '/openapi/v2/secapi/pay/profitsharingreturn',
            },
            {
              text: '回退结果查询',
              link: '/openapi/v2/pay/profitsharingreturnquery',
            },
          ],
        },
        {
          text: '平台账单',
          collapsed: true,
          items: [
            {
              text: '下载交易账单',
              link: '/openapi/v2/pay/downloadbill'
            },
            {
              text: '下载资金账单',
              link: '/openapi/v2/pay/downloadfundflow'
            },
          ],
        },
        {
          text: '现金红包',
          collapsed: true,
          items: [
            {
              text: '发放普通红包',
              link: '/openapi/v2/mmpaymkttransfers/sendredpack'
            },
            {
              text: '发放裂变红包',
              link: '/openapi/v2/mmpaymkttransfers/sendgroupredpack'
            },
            {
              text: '查询红包记录',
              link: '/openapi/v2/mmpaymkttransfers/gethbinfo'
            },
            {
              text: '发放小程序红包',
              link: '/openapi/v2/mmpaymkttransfers/sendminiprogramhb'
            },
          ],
        },
        {
          text: '付款到零钱',
          collapsed: true,
          items: [
            {
              text: '发起付款',
              link: '/openapi/v2/mmpaymkttransfers/promottion/transfers'
            },
            {
              text: '查询付款',
              link: '/openapi/v2/mmpaymkttransfers/gettransferinfo'
            },
          ],
        },
        {
          text: '付款到银行卡',
          collapsed: true,
          items: [
            {
              text: '获取加密公钥',
              link: '/openapi/v2/risk/getpublickey'
            },
            {
              text: '发起付款',
              link: '/openapi/v2/mmpaysptrans/pay_bank'
            },
            {
              text: '查询付款',
              link: '/openapi/v2/mmpaymkttransfers/query_bank'
            },
          ],
        },
      ],
    },
    {
      text: 'APIv3',
      collapsed: false,
      items: [
        {
          text: '基础支付',
          collapsed: true,
          items: [
            {
              text: '直连商户模式',
              collapsed: true,
              items: [
                {
                  text: 'APP下单',
                  link: '/openapi/v3/pay/transactions/app'
                },
                {
                  text: 'H5下单',
                  link: '/openapi/v3/pay/transactions/h5'
                },
                {
                  text: 'JSAPI下单',
                  link: '/openapi/v3/pay/transactions/jsapi'
                },
                {
                  text: 'Native下单',
                  link: '/openapi/v3/pay/transactions/native'
                },
                {
                  text: '按平台单号查单',
                  link: '/openapi/v3/pay/transactions/id/{transaction_id}'
                },
                {
                  text: '按商户单号查单',
                  link: '/openapi/v3/pay/transactions/out-trade-no/{out_trade_no}'
                },
                {
                  text: '关闭订单',
                  link: '/openapi/v3/pay/transactions/out-trade-no/{out_trade_no}/close'
                },
              ],
            },
            {
              text: '合作伙伴模式',
              collapsed: true,
              items: [
                {
                  text: 'APP下单',
                  link: '/openapi/v3/pay/partner/transactions/app'
                },
                {
                  text: 'H5下单',
                  link: '/openapi/v3/pay/partner/transactions/h5'
                },
                {
                  text: 'JSAPI下单',
                  link: '/openapi/v3/pay/partner/transactions/jsapi'
                },
                {
                  text: 'Native下单',
                  link: '/openapi/v3/pay/partner/transactions/native'
                },
                {
                  text: '按平台单号查单',
                  link: '/openapi/v3/pay/partner/transactions/id/{transaction_id}'
                },
                {
                  text: '按商户单号查单',
                  link: '/openapi/v3/pay/partner/transactions/out-trade-no/{out_trade_no}'
                },
                {
                  text: '关闭订单',
                  link: '/openapi/v3/pay/partner/transactions/out-trade-no/{out_trade_no}/close'
                },
              ]
            },
            {
              text: '发起退款申请',
              link: '/openapi/v3/refund/domestic/refunds'
            },
            {
              text: '查询单笔退款',
              link: '/openapi/v3/refund/domestic/refunds/{out_refund_no}'
            },
            {
              text: '发起异常退款',
              link: '/openapi/v3/refund/domestic/refunds/{refund_id}/apply-abnormal-refund'
            },
          ]
        },
        {
          text: '合单支付',
          collapsed: true,
          items: [
            {
              text: '合单APP下单',
              link: '/openapi/v3/combine-transactions/app'
            },
            {
              text: '合单H5下单',
              link: '/openapi/v3/combine-transactions/h5'
            },
            {
              text: '合单JSAPI下单',
              link: '/openapi/v3/combine-transactions/jsapi'
            },
            {
              text: '合单Native下单',
              link: '/openapi/v3/combine-transactions/native'
            },
            {
              text: '合单查单',
              link: '/openapi/v3/combine-transactions/out-trade-no/{combine_out_trade_no}'
            },
            {
              text: '合单关单',
              link: '/openapi/v3/combine-transactions/out-trade-no/{combine_out_trade_no}/close'
            },
          ]
        },
        {
          text: '分账',
          collapsed: true,
          items: [
            {
              text: '查询最大分账比例',
              link: '/openapi/v3/profitsharing/merchant-configs/{sub_mchid}',
            },
            {
              text: '添加分账接收方',
              link: '/openapi/v3/profitsharing/receivers/add',
            },
            {
              text: '删除分账接收方',
              link: '/openapi/v3/profitsharing/receivers/delete',
            },
            {
              text: '请求分账',
              link: '/openapi/v3/profitsharing/orders',
            },
            {
              text: '查询分账结果',
              link: '/openapi/v3/profitsharing/orders/{out_order_no}',
            },
            {
              text: '查询剩余待分金额',
              link: '/openapi/v3/profitsharing/transactions/{transaction_id}/amounts',
            },
            {
              text: '解冻剩余资金',
              link: '/openapi/v3/profitsharing/orders/unfreeze',
            },
            {
              text: '请求分账回退',
              link: '/openapi/v3/profitsharing/return-orders',
            },
            {
              text: '查询分账回退结果',
              link: '/openapi/v3/profitsharing/return-orders/{out_return_no}',
            },
            {
              text: '申请分账账单',
              link: '/openapi/v3/profitsharing/bills',
            },
          ],
        },
        {
          text: '连锁品牌分账',
          collapsed: true,
          items: [
            {
              text: '查询最大分账比例',
              link: '/openapi/v3/brand/profitsharing/brand-configs/{brand_mchid}',
            },
            {
              text: '添加分账接收方',
              link: '/openapi/v3/brand/profitsharing/receivers/add',
            },
            {
              text: '删除分账接收方',
              link: '/openapi/v3/brand/profitsharing/receivers/delete',
            },
            {
              text: '请求分账',
              link: '/openapi/v3/brand/profitsharing/orders#post',
            },
            {
              text: '查询分账结果',
              link: '/openapi/v3/brand/profitsharing/orders#get',
            },
            {
              text: '查询剩余待分金额',
              link: '/openapi/v3/brand/profitsharing/orders/{transaction_id}/amounts',
            },
            {
              text: '完结分账',
              link: '/openapi/v3/brand/profitsharing/finish-order',
            },
            {
              text: '请求分账回退',
              link: '/openapi/v3/brand/profitsharing/returnorders#post',
            },
            {
              text: '查询分账回退结果',
              link: '/openapi/v3/brand/profitsharing/returnorders#get',
            },
          ],
        },
        {
          text: '平台账单',
          collapsed: true,
          items: [
            {
              text: '申请交易账单',
              link: '/openapi/v3/bill/tradebill'
            },
            {
              text: '申请资金账单',
              link: '/openapi/v3/bill/fundflowbill'
            },
            {
              text: '申请子商户资金账单',
              link: '/openapi/v3/bill/sub-merchant-fundflowbill'
            },
            {
              text: '下载账单文件',
              link: '/openapi/v3/billdownload/file'
            },
          ],
        },
        {
          text: '商家转账',
          collapsed: true,
          items: [
            {
              text: '直连商户模式',
              collapsed: true,
              items: [
                {
                  text: '发起商家转账',
                  link: '/openapi/v3/transfer/batches'
                },
                {
                  text: '查询批次单(平台批次单号)',
                  link: '/openapi/v3/transfer/batches/batch-id/{batch_id}'
                },
                {
                  text: '查询批次单(商家批次单号)',
                  link: '/openapi/v3/transfer/batches/out-batch-no/{out_batch_no}'
                },
                {
                  text: '查询明细单(平台批次单号)',
                  link: '/openapi/v3/transfer/batches/batch-id/{batch_id}/details/detail-id/{detail_id}'
                },
                {
                  text: '查询明细单(商家批次单号)',
                  link: '/openapi/v3/transfer/batches/out-batch-no/{out_batch_no}/details/out-detail-no/{out_detail_no}'
                },
              ],
            },
            {
              text: '合作伙伴模式',
              collapsed: true,
              items: [
                {
                  text: '发起商家转账',
                  link: '/openapi/v3/partner-transfer/batches'
                },
                {
                  text: '查询批次单(平台批次单号)',
                  link: '/openapi/v3/partner-transfer/batches/batch-id/{batch_id}'
                },
                {
                  text: '查询批次单(商家批次单号)',
                  link: '/openapi/v3/partner-transfer/batches/out-batch-no/{out_batch_no}'
                },
                {
                  text: '查询明细单(平台批次单号)',
                  link: '/openapi/v3/partner-transfer/batches/batch-id/{batch_id}/details/detail-id/{detail_id}'
                },
                {
                  text: '查询明细单(商家批次单号)',
                  link: '/openapi/v3/partner-transfer/batches/out-batch-no/{out_batch_no}/details/out-detail-no/{out_detail_no}'
                },
              ],
            },
            {
              text: '申请转账账单电子回单',
              link: '/openapi/v3/transfer/bill-receipt'
            },
            {
              text: '查询账单回单受理结果',
              link: '/openapi/v3/transfer/bill-receipt/{out_batch_no}'
            },
            {
              text: '申请转账明细电子回单',
              link: '/openapi/v3/transfer-detail/electronic-receipts#post'
            },
            {
              text: '查询明细回单受理结果',
              link: '/openapi/v3/transfer-detail/electronic-receipts#get'
            },
            {
              text: '下载电子回单文件',
              link: '/openapi/v3/transferdownload/signfile'
            },
          ],
        },
        {
          text: '平台收付通',
          collapsed: true,
          items: [
            {
              text: '二级商户进件',
              link: '/openapi/v3/ecommerce/applyments/',
            },
            {
              text: '查询进件状态(平台申请单号)',
              link: '/openapi/v3/ecommerce/applyments/{applyment_id}',
            },
            {
              text: '查询进件状态(业务申请编号)',
              link: '/openapi/v3/ecommerce/applyments/out-request-no/{out_request_no}',
            },
            {
              text: '补差',
              collapsed: true,
              items: [
                {
                  text: '请求补差',
                  link: '/openapi/v3/ecommerce/subsidies/create',
                },
                {
                  text: '取消补差',
                  link: '/openapi/v3/ecommerce/subsidies/cancel',
                },
                {
                  text: '请求补差回退',
                  link: '/openapi/v3/ecommerce/subsidies/return',
                },
              ],
            },
            {
              text: '分账',
              collapsed: true,
              items: [
                {
                  text: '添加分账接收方',
                  link: '/openapi/v3/ecommerce/profitsharing/receivers/add',
                },
                {
                  text: '删除分账接收方',
                  link: '/openapi/v3/ecommerce/profitsharing/receivers/delete',
                },
                {
                  text: '请求分账',
                  link: '/openapi/v3/ecommerce/profitsharing/orders#post',
                },
                {
                  text: '查询分账结果',
                  link: '/openapi/v3/ecommerce/profitsharing/orders#get',
                },
                {
                  text: '查询剩余待分金额',
                  link: '/openapi/v3/ecommerce/profitsharing/orders/{transaction_id}/amounts',
                },
                {
                  text: '完结分账',
                  link: '/openapi/v3/ecommerce/profitsharing/finish-order',
                },
                {
                  text: '请求分账回退',
                  link: '/openapi/v3/ecommerce/profitsharing/returnorders#post',
                },
                {
                  text: '查询分账回退结果',
                  link: '/openapi/v3/ecommerce/profitsharing/returnorders#get',
                },
              ],
            },
            {
              text: '退款',
              collapsed: true,
              items: [
                {
                  text: '发起退款申请',
                  link: '/openapi/v3/ecommerce/refunds/apply',
                },
                {
                  text: '查询退款(商户退款单号)',
                  link: '/openapi/v3/ecommerce/refunds/out-refund-no/{out_refund_no}',
                },
                {
                  text: '查询退款(平台退款单号)',
                  link: '/openapi/v3/ecommerce/refunds/id/{refund_id}',
                },
                {
                  text: '垫付退款回补',
                  link: '/openapi/v3/ecommerce/refunds/{refund_id}/return-advance#post',
                },
                {
                  text: '查询退款回补结果',
                  link: '/openapi/v3/ecommerce/refunds/{refund_id}/return-advance#get',
                },
              ],
            },
            {
              text: '销户',
              collapsed: true,
              items: [
                {
                  text: '注销申请图片上传',
                  link: '/openapi/v3/ecommerce/account/cancel-applications/media',
                },
                {
                  text: '提交注销申请单',
                  link: '/openapi/v3/ecommerce/account/cancel-applications',
                },
                {
                  text: '查询注销单状态',
                  link: '/openapi/v3/ecommerce/account/cancel-applications/out-apply-no/{out_apply_no}',
                },
                {
                  text: '申请销户号余额提现',
                  link: '/openapi/v3/mch_operate/risk/withdrawl-apply',
                },
                {
                  text: '查询提现状态(商户单号)',
                  link: '/openapi/v3/mch_operate/risk/withdrawl-apply/out-request-no/{out_request_no}',
                },
                {
                  text: '查询提现状态(平台单号)',
                  link: '/openapi/v3/mch_operate/risk/withdrawl-apply/applyment-id/{applyment_id}',
                },
              ],
            },
            {
              text: '二级商户账户余额提现',
              link: '/openapi/v3/ecommerce/fund/withdraw',
            },
            {
              text: '查询提现结果(商户提现单号)',
              link: '/openapi/v3/ecommerce/fund/withdraw/out-request-no/{out_request_no}',
            },
            {
              text: '查询提现结果(平台提现单号)',
              link: '/openapi/v3/ecommerce/fund/withdraw/{withdraw_id}',
            },
            {
              text: '查询二级商户账户实时余额',
              link: '/openapi/v3/ecommerce/fund/balance/{sub_mchid}',
            },
            {
              text: '查询二级商户账户日终余额',
              link: '/openapi/v3/ecommerce/fund/enddaybalance/{sub_mchid}',
            },
            {
              text: '申请二级商户资金账单',
              link: '/openapi/v3/ecommerce/bill/fundflowbill',
            },
            {
              text: '跨境付款',
              collapsed: true,
              items: [
                {
                  text: '查询订单剩余可出境余额',
                  link: '/openapi/v3/funds-to-oversea/transactions/{transaction_id}/available_abroad_amounts',
                },
                {
                  text: '申请资金出境',
                  link: '/openapi/v3/funds-to-oversea/orders',
                },
                {
                  text: '查询出境结果',
                  link: '/openapi/v3/funds-to-oversea/orders/{out_order_id}',
                },
                {
                  text: '获取购付汇账单',
                  link: '/openapi/v3/funds-to-oversea/bill-download-url',
                },
              ],
            },
          ],
        },
        {
          text: '商户进件',
          collapsed: true,
          items: [
            {
              text: '提交进件申请单',
              link: '/openapi/v3/applyment4sub/applyment/',
            },
            {
              text: '查询进件状态(申请单号)',
              link: '/openapi/v3/applyment4sub/applyment/applyment_id/{applyment_id}',
            },
            {
              text: '查询进件状态(业务申请编号)',
              link: '/openapi/v3/applyment4sub/applyment/business_code/{business_code}',
            },
          ],
        },
        {
          text: '结算账户',
          collapsed: true,
          items: [
            {
              text: '查询结算账户',
              link: '/openapi/v3/apply4sub/sub_merchants/{sub_mchid}/settlement',
            },
            {
              text: '修改结算账户',
              link: '/openapi/v3/apply4sub/sub_merchants/{sub_mchid}/modify-settlement',
            },
            {
              text: '查询结算账户修改状态',
              link: '/openapi/v3/apply4sub/sub_merchants/{sub_mchid}/application/{application_no}',
            },
          ],
        },
        {
          text: '确认开户意愿',
          collapsed: true,
          items: [
            {
              text: '查询商户确认状态',
              link: '/openapi/v3/apply4subject/applyment/merchants/{sub_mchid}/state',
            },
            {
              text: '提交商户申请单',
              link: '/openapi/v3/apply4subject/applyment#post',
            },
            {
              text: '查询申请单审核结果',
              link: '/openapi/v3/apply4subject/applyment#get',
            },
            {
              text: '撤销申请单(申请单编号)',
              link: '/openapi/v3/apply4subject/applyment/{applyment_id}/cancel',
            },
            {
              text: '撤销申请单(业务申请编号)',
              link: '/openapi/v3/apply4subject/applyment/{business_code}/cancel',
            },
          ],
        },
        {
          text: '文件上传',
          collapsed: true,
          items: [
            {
              text: '商户图片文件上传',
              link: '/openapi/v3/merchant/media/upload',
            },
            {
              text: '商户视频文件上传',
              link: '/openapi/v3/merchant/media/video_upload',
            },
          ],
        },
        {
          text: '微信支付分',
          collapsed: true,
          items: [
            {
              text: '直连商户模式',
              collapsed: true,
              items: [
                {
                  text: '创建订单',
                  link: '/openapi/v3/payscore/serviceorder#post',
                },
                {
                  text: '查询订单',
                  link: '/openapi/v3/payscore/serviceorder#get',
                },
                {
                  text: '取消订单',
                  link: '/openapi/v3/payscore/serviceorder/{out_order_no}/cancel',
                },
                {
                  text: '修改金额',
                  link: '/openapi/v3/payscore/serviceorder/{out_order_no}/modify',
                },
                {
                  text: '完结订单',
                  link: '/openapi/v3/payscore/serviceorder/{out_order_no}/complete',
                },
                {
                  text: '同步订单',
                  link: '/openapi/v3/payscore/serviceorder/{out_order_no}/sync',
                },
                {
                  text: '请求催收',
                  link: '/openapi/v3/payscore/serviceorder/{out_order_no}/pay',
                },
                {
                  text: '免确认',
                  collapsed: true,
                  items: [
                    {
                      text: '商户预授权',
                      link: '/openapi/v3/payscore/permissions'
                    },
                    {
                      text: '查询授权状态(CODE)',
                      link: '/openapi/v3/payscore/permissions/authorization-code/{authorization_code}',
                    },
                    {
                      text: '查询授权状态(OPENID)',
                      link: '/openapi/v3/payscore/permissions/openid/{openid}',
                    },
                    {
                      text: '查询授权状态',
                      link: '/openapi/v3/payscore/user-service-state',
                    },
                    {
                      text: '解除用户授权(CODE)',
                      link: '/openapi/v3/payscore/permissions/authorization-code/{authorization_code}/terminate',
                    },
                    {
                      text: '解除用户授权(OPENID)',
                      link: '/openapi/v3/payscore/permissions/openid/{openid}/terminate',
                    },
                    {
                      text: '解除用户授权',
                      link: '/openapi/v3/payscore/users/{openid}/permissions/{service_id}/terminate',
                    },
                  ],
                },
                {
                  text: '创建先用后付订单',
                  link: '/openapi/v3/payscore/servicepayondeliveryorder',
                },
                {
                  text: '创单结单合并',
                  link: '/openapi/v3/payscore/serviceorder/direct-complete',
                },
              ],
            },
            {
              text: '合作伙伴模式',
              collapsed: true,
              items: [
                {
                  text: '创建订单',
                  link: '/openapi/v3/payscore/partner/serviceorder#post',
                },
                {
                  text: '查询订单',
                  link: '/openapi/v3/payscore/partner/serviceorder#get',
                },
                {
                  text: '取消订单',
                  link: '/openapi/v3/payscore/partner/serviceorder/{out_order_no}/cancel',
                },
                {
                  text: '修改金额',
                  link: '/openapi/v3/payscore/partner/serviceorder/{out_order_no}/modify',
                },
                {
                  text: '完结订单',
                  link: '/openapi/v3/payscore/partner/serviceorder/{out_order_no}/complete',
                },
                {
                  text: '同步订单',
                  link: '/openapi/v3/payscore/partner/serviceorder/{out_order_no}/sync',
                },
                {
                  text: '请求催收',
                  link: '/openapi/v3/payscore/partner/serviceorder/{out_order_no}/pay',
                },
                {
                  text: '免确认',
                  collapsed: true,
                  items: [
                    {
                      text: '商户预授权',
                      link: '/openapi/v3/payscore/partner/permissions'
                    },
                    {
                      text: '查询授权状态(CODE)',
                      link: '/openapi/v3/payscore/partner/permissions/authorization-code/{authorization_code}',
                    },
                    {
                      text: '查询授权状态(OPENID)',
                      link: '/openapi/v3/payscore/partner/permissions/search',
                    },
                    {
                      text: '解除用户授权(CODE)',
                      link: '/openapi/v3/payscore/partner/permissions/authorization-code/{authorization_code}/terminate',
                    },
                    {
                      text: '解除用户授权(OPENID)',
                      link: '/openapi/v3/payscore/partner/permissions/terminate',
                    },
                  ],
                },
                {
                  text: '申请绑定服务',
                  link: '/openapi/v3/payscore/partner/service-account-applications',
                },
                {
                  text: '查询绑定结果',
                  link: '/openapi/v3/payscore/partner/service-account-applications/{out_apply_no}',
                },
                {
                  text: '查询先享金额分层',
                  link: '/openapi/v3/payscore/partner/servicequotas/service-id/{service_id}',
                },
                {
                  text: '创建先用后付订单',
                  link: '/openapi/v3/payscore/partner/servicepayondeliveryorder',
                },
                {
                  text: '创单结单合并',
                  link: '/openapi/v3/payscore/partner/serviceorder/direct-complete',
                },
              ],
            },
            {
              text: '申请对账单',
              link: '/openapi/v3/payscore/merchant-bill',
            },
          ],
        },
        {
          text: '消费者投诉',
          collapsed: true,
          items: [
            {
              text: ' 维护接收投诉通知的URL',
              link: '/openapi/v3/merchant-service/complaint-notifications',
            },
            {
              text: ' 2.0',
              collapsed: true,
              items: [
                {
                  text: '查询投诉单列表',
                  link: '/openapi/v3/merchant-service/complaints-v2',
                },
                {
                  text: '查询投诉单详情',
                  link: '/openapi/v3/merchant-service/complaints-v2/{complaint_id}',
                },
                {
                  text: '查询投诉单协商历史',
                  link: '/openapi/v3/merchant-service/complaints-v2/{complaint_id}/negotiation-historys',
                },
                {
                  text: '回复用户',
                  link: '/openapi/v3/merchant-service/complaints-v2/{complaint_id}/response',
                },
                {
                  text: '反馈处理完成',
                  link: '/openapi/v3/merchant-service/complaints-v2/{complaint_id}/complete',
                },
                {
                  text: '更新退款审批结果',
                  link: '/openapi/v3/merchant-service/complaints-v2/{complaint_id}/update-refund-progress',
                },
              ],
            },
            {
              text: ' 1.0',
              collapsed: true,
              items: [
                {
                  text: '查询投诉信息列表',
                  link: '/openapi/v3/merchant-service/complaints',
                },
                {
                  text: '查询投诉详情详情',
                  link: '/openapi/v3/merchant-service/complaints/{transaction_id}',
                },
                {
                  text: '查询投诉单协商历史',
                  link: '/openapi/v3/merchant-service/complaints/{transaction_id}/negotiation-historys',
                },
                {
                  text: '商户反馈',
                  link: '/openapi/v3/merchant-service/feedbacks',
                },
              ],
            },
            {
              text: '上传商户反馈图片文件',
              link: '/openapi/v3/merchant-service/images/upload',
            },
            {
              text: '投诉单详情图片文件下载',
              link: '/openapi/v3/merchant-service/images/{media_id}',
            },
          ],
        },
        {
          text: '获取平台证书列表',
          link: '/openapi/v3/certificates',
        },
      ]
    },
  ];
}
