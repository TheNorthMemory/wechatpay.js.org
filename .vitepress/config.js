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
    xslUrl: 'https://wechatpay.js.org/sitemap.xsl',
  },
  head: [
    ['meta', { name: 'theme-color', content: '#00c250' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:locale', content: 'zh_CN' }],
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
      message: 'Released under the MIT License. (<a href="https://wechatpay.js.org/sitemap.xml">SITEMAP</a>)',
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
        activeMatch: '^/guide/(?!digital)'
      },
      {
        text: '数据签名',
        link: '/guide/digital-signature',
        activeMatch: '^/guide/digital-signature'
      },
      {
        text: '开放接口',
        link: '/openapi/',
        activeMatch: '^/openapi/'
      },
      {
        text: '回调通知',
        link: '/webhook/',
        activeMatch: '^/webhook/'
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
      {
        icon: 'devtools',
        link: 'https://www.devtools.cn/',
      },
    ],
    sidebar: {
      '/guide/': guideSidebar(),
      '/openapi/': openapiSidebar(),
      '/webhook/': webhookSidebar(),
    }
  }
})

function guideSidebar() {
  return [
    {
      text: '指南',
      link: '/guide/',
      items: [
        ['快速开始', '/guide/getting-started'],
        ['数据签名', '/guide/digital-signature'],
      ].map(transArrayItem),
    },
    {
      text: '开放接口概览',
      link: '/openapi/',
      items: [],
    },
    {
      text: '回调通知概览',
      link: '/webhook/',
      items: [],
    },
  ];
}

/**
 * @param {string[]} param0
 */
function transArrayItem([ text, link ]) { return { text, link }; }

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
            ['获取沙箱密钥', '/openapi/v2/xdc/apiv2getsignkey/sign/getsignkey'],
            ['沙箱付款码支付', '/openapi/v2/xdc/apiv2sandbox/pay/micropay'],
            ['沙箱订单查询', '/openapi/v2/xdc/apiv2sandbox/pay/orderquery'],
          ].map(transArrayItem),
        },
        {
          text: '基础支付',
          collapsed: true,
          items: [
            ['付款码支付', '/openapi/v2/pay/micropay'],
            ['授权码查询openid', '/openapi/v2/tools/authcodetoopenid'],
            ['撤销订单', '/openapi/v2/secapi/pay/reverse'],
            ['统一下单', '/openapi/v2/pay/unifiedorder'],
            ['转换短链接', '/openapi/v2/tools/shorturl'],
            ['查询订单', '/openapi/v2/pay/orderquery'],
            ['关闭订单', '/openapi/v2/pay/closeorder'],
            ['申请退款', '/openapi/v2/secapi/pay/refund'],
            ['申请退款(单品优惠)', '/openapi/v2/secapi/pay/refundv2'],
            ['查询退款', '/openapi/v2/pay/refundquery'],
            ['查询退款(单品优惠)', '/openapi/v2/pay/refundqueryv2'],
            ['交易保障', '/openapi/v2/payitil/report'],
          ].map(transArrayItem),
        },
        {
          text: '合单支付',
          collapsed: true,
          items: [
            ['合单下单', '/openapi/v2/pay/combinedorder'],
            ['合单查单', '/openapi/v2/pay/querycombinedorder'],
            ['合单关单', '/openapi/v2/pay/closecombinedorder'],
          ].map(transArrayItem),
        },
        {
          text: '分账',
          collapsed: true,
          items: [
            ['查询最大分账比例', '/openapi/v2/pay/profitsharingmerchantratioquery'],
            ['添加分账接收方', '/openapi/v2/pay/profitsharingaddreceiver'],
            ['删除分账接收方', '/openapi/v2/pay/profitsharingremovereceiver'],
            ['请求单次分账', '/openapi/v2/secapi/pay/profitsharing'],
            ['请求多次分账', '/openapi/v2/secapi/pay/multiprofitsharing'],
            ['查询分账结果', '/openapi/v2/pay/profitsharingquery'],
            ['查询订单待分账金额', '/openapi/v2/pay/profitsharingorderamountquery'],
            ['完结分账', '/openapi/v2/secapi/pay/profitsharingfinish'],
            ['分账回退', '/openapi/v2/secapi/pay/profitsharingreturn'],
            ['回退结果查询', '/openapi/v2/pay/profitsharingreturnquery'],
          ].map(transArrayItem),
        },
        {
          text: '平台账单',
          collapsed: true,
          items: [
            ['下载交易账单', '/openapi/v2/pay/downloadbill'],
            ['下载资金账单', '/openapi/v2/pay/downloadfundflow'],
          ].map(transArrayItem),
        },
        {
          text: '现金红包',
          collapsed: true,
          items: [
            ['发放普通红包', '/openapi/v2/mmpaymkttransfers/sendredpack'],
            ['发放裂变红包', '/openapi/v2/mmpaymkttransfers/sendgroupredpack'],
            ['查询红包记录', '/openapi/v2/mmpaymkttransfers/gethbinfo'],
            ['发放小程序红包', '/openapi/v2/mmpaymkttransfers/sendminiprogramhb'],
          ].map(transArrayItem),
        },
        {
          text: '付款到零钱',
          collapsed: true,
          items: [
            ['发起付款', '/openapi/v2/mmpaymkttransfers/promottion/transfers'],
            ['查询付款', '/openapi/v2/mmpaymkttransfers/gettransferinfo'],
          ].map(transArrayItem),
        },
        {
          text: '付款到银行卡',
          collapsed: true,
          items: [
            ['获取加密公钥', '/openapi/v2/risk/getpublickey'],
            ['发起付款', '/openapi/v2/mmpaysptrans/pay_bank'],
            ['查询付款', '/openapi/v2/mmpaymkttransfers/query_bank'],
          ].map(transArrayItem),
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
                ['APP下单', '/openapi/v3/pay/transactions/app'],
                ['H5下单', '/openapi/v3/pay/transactions/h5'],
                ['JSAPI下单', '/openapi/v3/pay/transactions/jsapi'],
                ['Native下单', '/openapi/v3/pay/transactions/native'],
                ['按平台单号查单', '/openapi/v3/pay/transactions/id/{transaction_id}'],
                ['按商户单号查单', '/openapi/v3/pay/transactions/out-trade-no/{out_trade_no}'],
                ['关闭订单', '/openapi/v3/pay/transactions/out-trade-no/{out_trade_no}/close'],
              ].map(transArrayItem),
            },
            {
              text: '合作伙伴模式',
              collapsed: true,
              items: [
                ['APP下单', '/openapi/v3/pay/partner/transactions/app'],
                ['H5下单', '/openapi/v3/pay/partner/transactions/h5'],
                ['JSAPI下单', '/openapi/v3/pay/partner/transactions/jsapi'],
                ['Native下单', '/openapi/v3/pay/partner/transactions/native'],
                ['按平台单号查单', '/openapi/v3/pay/partner/transactions/id/{transaction_id}'],
                ['按商户单号查单', '/openapi/v3/pay/partner/transactions/out-trade-no/{out_trade_no}'],
                ['关闭订单', '/openapi/v3/pay/partner/transactions/out-trade-no/{out_trade_no}/close'],
              ].map(transArrayItem),
            },
            ...[
              ['发起退款申请', '/openapi/v3/refund/domestic/refunds'],
              ['查询单笔退款', '/openapi/v3/refund/domestic/refunds/{out_refund_no}'],
              ['发起异常退款', '/openapi/v3/refund/domestic/refunds/{refund_id}/apply-abnormal-refund'],
            ].map(transArrayItem),
          ]
        },
        {
          text: '合单支付',
          collapsed: true,
          items: [
            ['合单APP下单', '/openapi/v3/combine-transactions/app'],
            ['合单H5下单', '/openapi/v3/combine-transactions/h5'],
            ['合单JSAPI下单', '/openapi/v3/combine-transactions/jsapi'],
            ['合单Native下单', '/openapi/v3/combine-transactions/native'],
            ['合单查单', '/openapi/v3/combine-transactions/out-trade-no/{combine_out_trade_no}'],
            ['合单关单', '/openapi/v3/combine-transactions/out-trade-no/{combine_out_trade_no}/close'],
          ].map(transArrayItem),
        },
        {
          text: '分账',
          collapsed: true,
          items: [
            ['查询最大分账比例', '/openapi/v3/profitsharing/merchant-configs/{sub_mchid}'],
            ['添加分账接收方', '/openapi/v3/profitsharing/receivers/add'],
            ['删除分账接收方', '/openapi/v3/profitsharing/receivers/delete'],
            ['请求分账', '/openapi/v3/profitsharing/orders'],
            ['查询分账结果', '/openapi/v3/profitsharing/orders/{out_order_no}'],
            ['查询剩余待分金额', '/openapi/v3/profitsharing/transactions/{transaction_id}/amounts'],
            ['解冻剩余资金', '/openapi/v3/profitsharing/orders/unfreeze'],
            ['请求分账回退', '/openapi/v3/profitsharing/return-orders'],
            ['查询分账回退结果', '/openapi/v3/profitsharing/return-orders/{out_return_no}'],
            ['申请分账账单', '/openapi/v3/profitsharing/bills'],
          ].map(transArrayItem),
        },
        {
          text: '连锁品牌',
          collapsed: true,
          items: [
            {
              text: '分账',
              collapsed: true,
              items: [
                ['查询最大分账比例', '/openapi/v3/brand/profitsharing/brand-configs/{brand_mchid}'],
                ['添加分账接收方', '/openapi/v3/brand/profitsharing/receivers/add'],
                ['删除分账接收方', '/openapi/v3/brand/profitsharing/receivers/delete'],
                ['请求分账', '/openapi/v3/brand/profitsharing/orders#post'],
                ['查询分账结果', '/openapi/v3/brand/profitsharing/orders#get'],
                ['查询剩余待分金额', '/openapi/v3/brand/profitsharing/orders/{transaction_id}/amounts'],
                ['完结分账', '/openapi/v3/brand/profitsharing/finish-order'],
                ['请求分账回退', '/openapi/v3/brand/profitsharing/returnorders#post'],
                ['查询分账回退结果', '/openapi/v3/brand/profitsharing/returnorders#get'],
              ].map(transArrayItem),
            },
            {
              text: '门店',
              collapsed: true,
              items: [
                ['创建门店', '/openapi/v3/merchant-store/stores'],
                ['管理门店', '/openapi/v3/merchant-store/stores/{store_id}'],
                ['绑定收款商户号', '/openapi/v3/merchant-store/stores/{store_id}/recipients/bind'],
                ['解绑收款商户号', '/openapi/v3/merchant-store/stores/{store_id}/recipients/unbind'],
              ].map(transArrayItem),
            },
          ],
        },
        {
          text: '平台账单',
          collapsed: true,
          items: [
            ['申请交易账单', '/openapi/v3/bill/tradebill'],
            ['申请资金账单', '/openapi/v3/bill/fundflowbill'],
            ['申请子商户资金账单', '/openapi/v3/bill/sub-merchant-fundflowbill'],
            ['下载账单文件', '/openapi/v3/billdownload/file'],
          ].map(transArrayItem),
        },
        {
          text: '商家转账',
          collapsed: true,
          items: [
            {
              text: '直连商户模式',
              collapsed: true,
              items: [
                ['发起商家转账', '/openapi/v3/transfer/batches'],
                ['查询批次单(平台批次单号)', '/openapi/v3/transfer/batches/batch-id/{batch_id}'],
                ['查询批次单(商家批次单号)', '/openapi/v3/transfer/batches/out-batch-no/{out_batch_no}'],
                ['查询明细单(平台批次单号)', '/openapi/v3/transfer/batches/batch-id/{batch_id}/details/detail-id/{detail_id}'],
                ['查询明细单(商家批次单号)', '/openapi/v3/transfer/batches/out-batch-no/{out_batch_no}/details/out-detail-no/{out_detail_no}'],
              ].map(transArrayItem),
            },
            {
              text: '合作伙伴模式',
              collapsed: true,
              items: [
                ['发起商家转账', '/openapi/v3/partner-transfer/batches'],
                ['查询批次单(平台批次单号)', '/openapi/v3/partner-transfer/batches/batch-id/{batch_id}'],
                ['查询批次单(商家批次单号)', '/openapi/v3/partner-transfer/batches/out-batch-no/{out_batch_no}'],
                ['查询明细单(平台批次单号)', '/openapi/v3/partner-transfer/batches/batch-id/{batch_id}/details/detail-id/{detail_id}'],
                ['查询明细单(商家批次单号)', '/openapi/v3/partner-transfer/batches/out-batch-no/{out_batch_no}/details/out-detail-no/{out_detail_no}'],
              ].map(transArrayItem),
            },
            [
              ['申请转账账单电子回单', '/openapi/v3/transfer/bill-receipt'],
              ['查询账单回单受理结果', '/openapi/v3/transfer/bill-receipt/{out_batch_no}'],
              ['申请转账明细电子回单', '/openapi/v3/transfer-detail/electronic-receipts#post'],
              ['查询明细回单受理结果', '/openapi/v3/transfer-detail/electronic-receipts#get'],
              ['下载电子回单文件', '/openapi/v3/transferdownload/signfile'],
            ].map(transArrayItem),
          ],
        },
        {
          text: '平台收付通',
          collapsed: true,
          items: [
            ...[
              ['二级商户进件', '/openapi/v3/ecommerce/applyments/'],
              ['查询进件状态(平台申请单号)', '/openapi/v3/ecommerce/applyments/{applyment_id}'],
              ['查询进件状态(业务申请编号)', '/openapi/v3/ecommerce/applyments/out-request-no/{out_request_no}'],
            ].map(transArrayItem),
            {
              text: '补差',
              collapsed: true,
              items: [
                ['请求补差', '/openapi/v3/ecommerce/subsidies/create'],
                ['取消补差', '/openapi/v3/ecommerce/subsidies/cancel'],
                ['请求补差回退', '/openapi/v3/ecommerce/subsidies/return'],
              ].map(transArrayItem),
            },
            {
              text: '分账',
              collapsed: true,
              items: [
                ['添加分账接收方', '/openapi/v3/ecommerce/profitsharing/receivers/add'],
                ['删除分账接收方', '/openapi/v3/ecommerce/profitsharing/receivers/delete'],
                ['请求分账', '/openapi/v3/ecommerce/profitsharing/orders#post'],
                ['查询分账结果', '/openapi/v3/ecommerce/profitsharing/orders#get'],
                ['查询剩余待分金额', '/openapi/v3/ecommerce/profitsharing/orders/{transaction_id}/amounts'],
                ['完结分账', '/openapi/v3/ecommerce/profitsharing/finish-order'],
                ['请求分账回退', '/openapi/v3/ecommerce/profitsharing/returnorders#post'],
                ['查询分账回退结果', '/openapi/v3/ecommerce/profitsharing/returnorders#get'],
              ].map(transArrayItem),
            },
            {
              text: '退款',
              collapsed: true,
              items: [
                ['发起退款申请', '/openapi/v3/ecommerce/refunds/apply'],
                ['查询退款(商户退款单号)', '/openapi/v3/ecommerce/refunds/out-refund-no/{out_refund_no}'],
                ['查询退款(平台退款单号)', '/openapi/v3/ecommerce/refunds/id/{refund_id}'],
                ['垫付退款回补', '/openapi/v3/ecommerce/refunds/{refund_id}/return-advance#post'],
                ['查询退款回补结果', '/openapi/v3/ecommerce/refunds/{refund_id}/return-advance#get'],
              ].map(transArrayItem),
            },
            {
              text: '销户',
              collapsed: true,
              items: [
                ['注销申请图片上传', '/openapi/v3/ecommerce/account/cancel-applications/media'],
                ['提交注销申请单', '/openapi/v3/ecommerce/account/cancel-applications'],
                ['查询注销单状态', '/openapi/v3/ecommerce/account/cancel-applications/out-apply-no/{out_apply_no}'],
                ['申请销户号余额提现', '/openapi/v3/mch_operate/risk/withdrawl-apply'],
                ['查询提现状态(商户单号)', '/openapi/v3/mch_operate/risk/withdrawl-apply/out-request-no/{out_request_no}'],
                ['查询提现状态(平台单号)', '/openapi/v3/mch_operate/risk/withdrawl-apply/applyment-id/{applyment_id}'],
              ].map(transArrayItem),
            },
            {
              text: '二级商户提现',
              collapsed: true,
              items: [
                ['预约提现', '/openapi/v3/ecommerce/fund/withdraw'],
                ['查询提现结果(商户单号)', '/openapi/v3/ecommerce/fund/withdraw/out-request-no/{out_request_no}'],
                ['查询提现结果(平台单号)', '/openapi/v3/ecommerce/fund/withdraw/{withdraw_id}'],
                ['查询账户实时余额', '/openapi/v3/ecommerce/fund/balance/{sub_mchid}'],
                ['查询账户日终余额', '/openapi/v3/ecommerce/fund/enddaybalance/{sub_mchid}'],
                ['申请资金账单', '/openapi/v3/ecommerce/bill/fundflowbill'],
              ].map(transArrayItem),
            },
            {
              text: '跨境付款',
              collapsed: true,
              items: [
                ['查询订单剩余可出境余额', '/openapi/v3/funds-to-oversea/transactions/{transaction_id}/available_abroad_amounts'],
                ['申请资金出境', '/openapi/v3/funds-to-oversea/orders'],
                ['查询出境结果', '/openapi/v3/funds-to-oversea/orders/{out_order_id}'],
                ['获取购付汇账单', '/openapi/v3/funds-to-oversea/bill-download-url'],
              ].map(transArrayItem),
            },
          ],
        },
        {
          text: '商户提现',
          collapsed: true,
          items: [
            ['预约提现', '/openapi/v3/merchant/fund/withdraw'],
            ['查询预约提现状态(商户单号)', '/openapi/v3/merchant/fund/withdraw/out-request-no/{out_request_no}'],
            ['查询预约提现状态(平台单号)', '/openapi/v3/merchant/fund/withdraw/withdraw-id/{withdraw_id}'],
            ['查询账户实时余额', '/openapi/v3/merchant/fund/balance/{account_type}'],
            ['查询账户日终余额', '/openapi/v3/merchant/fund/dayendbalance/{account_type}'],
            ['按日下载提现异常文件', '/openapi/v3/merchant/fund/withdraw/bill-type/{bill_type}'],
          ].map(transArrayItem),
        },
        {
          text: '来账识别',
          collapsed: true,
          items: [
            ['合作伙伴银行来账查询', '/openapi/v3/merchantfund/merchant/income-records'],
            ['二级商户银行来账查询', '/openapi/v3/merchantfund/partner/income-records'],
          ].map(transArrayItem),
        },
        {
          text: '商户进件',
          collapsed: true,
          items: [
            ['提交进件申请单', '/openapi/v3/applyment4sub/applyment/'],
            ['查询进件状态(申请单号)', '/openapi/v3/applyment4sub/applyment/applyment_id/{applyment_id}'],
            ['查询进件状态(业务申请编号)', '/openapi/v3/applyment4sub/applyment/business_code/{business_code}'],
          ].map(transArrayItem),
        },
        {
          text: '结算账户',
          collapsed: true,
          items: [
            ['查询结算账户', '/openapi/v3/apply4sub/sub_merchants/{sub_mchid}/settlement'],
            ['修改结算账户', '/openapi/v3/apply4sub/sub_merchants/{sub_mchid}/modify-settlement'],
            ['查询结算账户修改状态', '/openapi/v3/apply4sub/sub_merchants/{sub_mchid}/application/{application_no}'],
          ].map(transArrayItem),
        },
        {
          text: '确认开户意愿',
          collapsed: true,
          items: [
            ['查询商户确认状态', '/openapi/v3/apply4subject/applyment/merchants/{sub_mchid}/state'],
            ['提交商户申请单', '/openapi/v3/apply4subject/applyment#post'],
            ['查询申请单审核结果', '/openapi/v3/apply4subject/applyment#get'],
            ['撤销申请单(申请单编号)', '/openapi/v3/apply4subject/applyment/{applyment_id}/cancel'],
            ['撤销申请单(业务申请编号)', '/openapi/v3/apply4subject/applyment/{business_code}/cancel'],
          ].map(transArrayItem),
        },
        {
          text: '文件上传',
          collapsed: true,
          items: [
            ['商户图片文件上传', '/openapi/v3/merchant/media/upload'],
            ['商户视频文件上传', '/openapi/v3/merchant/media/video_upload'],
          ].map(transArrayItem),
        },
        {
          text: '微信支付分',
          collapsed: true,
          items: [
            {
              text: '直连商户模式',
              collapsed: true,
              items: [
                ...[
                  ['创建订单', '/openapi/v3/payscore/serviceorder#post'],
                  ['查询订单', '/openapi/v3/payscore/serviceorder#get'],
                  ['取消订单', '/openapi/v3/payscore/serviceorder/{out_order_no}/cancel'],
                  ['修改金额', '/openapi/v3/payscore/serviceorder/{out_order_no}/modify'],
                  ['完结订单', '/openapi/v3/payscore/serviceorder/{out_order_no}/complete'],
                  ['同步订单', '/openapi/v3/payscore/serviceorder/{out_order_no}/sync'],
                  ['请求催收', '/openapi/v3/payscore/serviceorder/{out_order_no}/pay'],
                ].map(transArrayItem),
                {
                  text: '免确认',
                  collapsed: true,
                  items: [
                    ['商户预授权', '/openapi/v3/payscore/permissions'],
                    ['查询授权状态(CODE)', '/openapi/v3/payscore/permissions/authorization-code/{authorization_code}'],
                    ['查询授权状态(OPENID)', '/openapi/v3/payscore/permissions/openid/{openid}'],
                    ['查询授权状态', '/openapi/v3/payscore/user-service-state'],
                    ['解除用户授权(CODE)', '/openapi/v3/payscore/permissions/authorization-code/{authorization_code}/terminate'],
                    ['解除用户授权(OPENID)', '/openapi/v3/payscore/permissions/openid/{openid}/terminate'],
                    ['解除用户授权', '/openapi/v3/payscore/users/{openid}/permissions/{service_id}/terminate'],
                  ].map(transArrayItem),
                },
                ...[
                  ['创建先用后付订单', '/openapi/v3/payscore/servicepayondeliveryorder'],
                  ['创单结单合并', '/openapi/v3/payscore/serviceorder/direct-complete'],
                ].map(transArrayItem),
              ],
            },
            {
              text: '合作伙伴模式',
              collapsed: true,
              items: [
                ...[
                  ['创建订单', '/openapi/v3/payscore/partner/serviceorder#post'],
                  ['查询订单', '/openapi/v3/payscore/partner/serviceorder#get'],
                  ['取消订单', '/openapi/v3/payscore/partner/serviceorder/{out_order_no}/cancel'],
                  ['修改金额', '/openapi/v3/payscore/partner/serviceorder/{out_order_no}/modify'],
                  ['完结订单', '/openapi/v3/payscore/partner/serviceorder/{out_order_no}/complete'],
                  ['同步订单', '/openapi/v3/payscore/partner/serviceorder/{out_order_no}/sync'],
                  ['请求催收', '/openapi/v3/payscore/partner/serviceorder/{out_order_no}/pay'],
                ].map(transArrayItem),
                {
                  text: '免确认',
                  collapsed: true,
                  items: [
                    ['商户预授权', '/openapi/v3/payscore/partner/permissions'],
                    ['查询授权状态(CODE)', '/openapi/v3/payscore/partner/permissions/authorization-code/{authorization_code}'],
                    ['查询授权状态(OPENID)', '/openapi/v3/payscore/partner/permissions/search'],
                    ['解除用户授权(CODE)', '/openapi/v3/payscore/partner/permissions/authorization-code/{authorization_code}/terminate'],
                    ['解除用户授权(OPENID)', '/openapi/v3/payscore/partner/permissions/terminate'],
                  ].map(transArrayItem),
                },
                ...[
                  ['申请绑定服务', '/openapi/v3/payscore/partner/service-account-applications'],
                  ['查询绑定结果', '/openapi/v3/payscore/partner/service-account-applications/{out_apply_no}'],
                  ['查询先享金额分层', '/openapi/v3/payscore/partner/servicequotas/service-id/{service_id}'],
                  ['创建先用后付订单', '/openapi/v3/payscore/partner/servicepayondeliveryorder'],
                  ['创单结单合并', '/openapi/v3/payscore/partner/serviceorder/direct-complete'],
                ].map(transArrayItem),
              ],
            },
            transArrayItem(
              ['申请对账单', '/openapi/v3/payscore/merchant-bill']
            ),
          ],
        },
        {
          text: '消费者投诉',
          collapsed: true,
          items: [
            transArrayItem(
              [' 维护接收投诉通知的URL', '/openapi/v3/merchant-service/complaint-notifications']
            ),
            {
              text: ' 2.0',
              collapsed: true,
              items: [
                ['查询投诉单列表', '/openapi/v3/merchant-service/complaints-v2'],
                ['查询投诉单详情', '/openapi/v3/merchant-service/complaints-v2/{complaint_id}'],
                ['查询投诉单协商历史', '/openapi/v3/merchant-service/complaints-v2/{complaint_id}/negotiation-historys'],
                ['回复用户', '/openapi/v3/merchant-service/complaints-v2/{complaint_id}/response'],
                ['反馈处理完成', '/openapi/v3/merchant-service/complaints-v2/{complaint_id}/complete'],
                ['更新退款审批结果', '/openapi/v3/merchant-service/complaints-v2/{complaint_id}/update-refund-progress'],
              ].map(transArrayItem),
            },
            {
              text: ' 1.0',
              collapsed: true,
              items: [
                ['查询投诉信息列表', '/openapi/v3/merchant-service/complaints'],
                ['查询投诉详情详情', '/openapi/v3/merchant-service/complaints/{transaction_id}'],
                ['查询投诉单协商历史', '/openapi/v3/merchant-service/complaints/{transaction_id}/negotiation-historys'],
                ['商户反馈', '/openapi/v3/merchant-service/feedbacks'],
              ].map(transArrayItem),
            },
            ...[
              ['上传商户反馈图片文件', '/openapi/v3/merchant-service/images/upload'],
              ['投诉单详情图片文件下载', '/openapi/v3/merchant-service/images/{media_id}'],
            ].map(transArrayItem),
          ],
        },
        {
          text: '商户风险管理',
          collapsed: true,
          items: [
            ['维护接收违规通知的URL', '/openapi/v3/merchant-risk-manage/violation-notifications'],
            ['上报订单关联信息', '/openapi/v3/merchant-risk-manage/report-trade-union-information'],
            ['查询风险信息', '/openapi/v3/merchant-risk-manage/trade-risk-information'],
            ['处置结果回传', '/openapi/v3/merchant-risk-manage/trade-risk-result'],
          ].map(transArrayItem),
        },
        transArrayItem(
          ['获取平台证书列表', '/openapi/v3/certificates'],
        ),
      ]
    },
  ];
}

function webhookSidebar() {
  return [
    {
      text: 'XML格式报文',
      items: [
        ['普通支付通知', '/webhook/v2/transaction-success'],
        ['合单支付通知', '/webhook/v2/combined-transactions-success'],
        ['退款结果通知', '/webhook/v2/refund-processed'],
      ].map(transArrayItem),
    },
    {
      text: 'JSON格式报文',
      items: [
        {
          text: '支付',
          collapsed: true,
          items: [
            ['支付成功通知', '/webhook/v3/TRANSACTION.SUCCESS'],
          ].map(transArrayItem),
        },
        {
          text: '退款',
          collapsed: true,
          items: [
            ['退款成功通知', '/webhook/v3/REFUND.SUCCESS'],
            ['退款异常通知', '/webhook/v3/REFUND.ABNORMAL'],
            ['退款关闭通知', '/webhook/v3/REFUND.CLOSED'],
          ].map(transArrayItem),
        },
        {
          text: '分账',
          collapsed: true,
          items: [
            ['分账成功通知', '/webhook/v3/PROFITSHARING.SUCCESS'],
            ['分账回退通知', '/webhook/v3/PROFITSHARING.RETURN'],
          ].map(transArrayItem),
        },
        {
          text: '投诉',
          collapsed: true,
          items: [
            ['产生新投诉通知', '/webhook/v3/COMPLAINT.CREATE'],
            ['投诉状态变化通知', '/webhook/v3/COMPLAINT.STATE_CHANGE'],
          ].map(transArrayItem),
        },
        {
          text: '支付分',
          collapsed: true,
          items: [
            ['用户授权成功通知', '/webhook/v3/PAYSCORE.USER_OPEN_SERVICE'],
            ['用户解除授权通知', '/webhook/v3/PAYSCORE.USER_CLOSE_SERVICE'],
            ['用户确认成功通知', '/webhook/v3/PAYSCORE.USER_CONFIRM'],
            ['用户支付成功通知', '/webhook/v3/PAYSCORE.USER_PAID'],
            ['账户绑定结果通知', '/webhook/v3/PAYSCORE.BIND_SERVICE_ACCOUNT']
          ].map(transArrayItem),
        },
        {
          text: '违规',
          collapsed: true,
          items: [
            ['处罚二级商户通知', '/webhook/v3/VIOLATION.PUNISH'],
            ['拦截二级商户通知', '/webhook/v3/VIOLATION.INTERCEPT'],
            ['二级商户申诉通知', '/webhook/v3/VIOLATION.APPEAL'],
          ].map(transArrayItem),
        },
      ],
    },
  ];
}
