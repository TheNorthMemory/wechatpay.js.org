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
        text: 'v0.8.11',
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
        icon: 'npm',
        link: 'https://www.npmjs.com/package/wechatpay-axios-plugin',
      },
      {
        icon: 'gitee',
        link: 'https://gitee.com/TheNorthMemory/wechatpay-axios-plugin',
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
      collapsed: true,
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
          collapsed: false,
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
          collapsed: false,
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
          collapsed: false,
          items: [
            {
              text: '直连商户模式',
              collapsed: false,
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
              text: '退款业务',
              collapsed: false,
              items: [
                {
                  text: '申请退款',
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
              ],
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
          text: '获取平台证书列表',
          link: '/openapi/v3/certificates',
        },
      ]
    },
  ];
}
