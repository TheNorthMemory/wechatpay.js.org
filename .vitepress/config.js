import { defineConfig } from 'vitepress'
import { transformerTwoslash } from '@shikijs/vitepress-twoslash'

const baseUri = 'https://wechatpay.js.org'

export default defineConfig({
  lang: 'zh-CN',
  title: 'wechatpay.js.org',
  description: 'Promise based and chained WeChatPay OpenAPI SDK for NodeJS',
  lastUpdated: true,
  cleanUrls: true,
  buildConcurrency: 24,
  metaChunk: true,
  markdown: {
    codeTransformers: [
      transformerTwoslash()
    ],
  },
  vite: {
    build: {
      chunkSizeWarningLimit: 600
    },
  },
  srcExclude: ['**/README.md'],
  sitemap: {
    hostname: baseUri,
    xslUrl: '/sitemap.xsl',
  },
  head: [
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' }],
    ['link', { rel: 'manifest', href: '/site.webmanifest' }],
    ['meta', { name: 'theme-color', content: '#19ab47' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:locale', content: 'zh_CN' }],
    ['meta', { property: 'og:site_name', content: 'wechatpay.js.org' }],
    ...(process?.argv?.[2] === 'dev' ? [] : [
      ['script', { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-8NRT7Z8PN5' }],
      ['script', {}, `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);}; gtag('js', new Date()); gtag('config', 'G-8NRT7Z8PN5');`],
    ]),
  ],
  transformHead(ctx) {
    const href = `${baseUri}/${ctx.pageData.relativePath}`.replace(/(?:index)?\.md$/, '')
    return [
      ['link', { rel: 'canonical', href }],
      ['meta', { property: 'og:url', content: href }],
      ['meta', { property: 'og:title', content: ctx.title }],
      ['meta', { property: 'og:description', content: ctx.description }],
      ['meta', { property: 'og:image', content: `${baseUri}/android-chrome-512x512.png` }],
    ]
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
      pattern: 'https://github.com/TheNorthMemory/wechatpay.js.org/blob/main/:path',
      text: '在 GitHub 上查看源文件',
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
      text: '更新于',
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
        text: 'v0.9.4',
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
      {
        text: 'PHP版',
        link: 'https://wechatpay.im/',
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
 * @param {string[]}
 */
function transArrayItem([ text, link ]) { return { text, link }; }

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
            ['发起付款', '/openapi/v2/mmpaymkttransfers/promotion/transfers'],
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
        {
          text: '委托代扣',
          collapsed: true,
          items: [
            {
              text: '微信车主服务',
              collapsed: true,
              items: [
                {
                  text: '直连商户模式',
                  collapsed: true,
                  items: [
                    ['用户入场通知', '/openapi/v2/vehicle/pay/notification'],
                    ['用户状态查询', '/openapi/v2/vehicle/pay/querystate'],
                    ['申请代扣', '/openapi/v2/vehicle/pay/payapply'],
                    ['查询订单', '/openapi/v2/transit/queryorder'],
                  ].map(transArrayItem),
                },
                {
                  text: '合作伙伴模式',
                  collapsed: true,
                  items: [
                    ['用户入场通知', '/openapi/v2/vehicle/partnerpay/notification'],
                    ['用户状态查询', '/openapi/v2/vehicle/partnerpay/querystate'],
                    ['申请代扣', '/openapi/v2/vehicle/partnerpay/payapply'],
                    ['查询订单', '/openapi/v2/transit/partnerpay/queryorder'],
                  ].map(transArrayItem),
                },
              ],
            },
            {
              text: '免压租借',
              collapsed: true,
              items: [
                ['创建租借订单', '/openapi/v2/wxv/createrentbill'],
                ['查询租借订单', '/openapi/v2/wxv/queryrentbill'],
                ['撤销租借订单', '/openapi/v2/wxv/cancelbill'],
                ['完结租借订单', '/openapi/v2/wxv/finishrentbill'],
                ['修改租借订单', '/openapi/v2/wxv/changerentmoney'],
              ].map(transArrayItem),
            },
            {
              text: '免压速住',
              collapsed: true,
              items: [
                ['创建速住订单', '/openapi/v2/wxv/createhotelbill'],
                ['查询速住订单', '/openapi/v2/wxv/queryhotelbill'],
                ['完结速住订单', '/openapi/v2/wxv/finishhotelbill'],
              ].map(transArrayItem),
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
                ['付款码支付', '/openapi/v3/pay/transactions/codepay'],
                ['APP下单', '/openapi/v3/pay/transactions/app'],
                ['H5下单', '/openapi/v3/pay/transactions/h5'],
                ['JSAPI下单', '/openapi/v3/pay/transactions/jsapi'],
                ['Native下单', '/openapi/v3/pay/transactions/native'],
                ['按平台单号查单', '/openapi/v3/pay/transactions/id/{transaction_id}'],
                ['按商户单号查单', '/openapi/v3/pay/transactions/out-trade-no/{out_trade_no}'],
                ['撤销订单', '/openapi/v3/pay/transactions/out-trade-no/{out_trade_no}/reverse'],
                ['关闭订单', '/openapi/v3/pay/transactions/out-trade-no/{out_trade_no}/close'],
              ].map(transArrayItem),
            },
            {
              text: '合作伙伴模式',
              collapsed: true,
              items: [
                ['付款码支付', '/openapi/v3/pay/partner/transactions/codepay'],
                ['APP下单', '/openapi/v3/pay/partner/transactions/app'],
                ['H5下单', '/openapi/v3/pay/partner/transactions/h5'],
                ['JSAPI下单', '/openapi/v3/pay/partner/transactions/jsapi'],
                ['Native下单', '/openapi/v3/pay/partner/transactions/native'],
                ['扫码支付下单', '/openapi/v3/pay/partner/transactions/scannedpos'],
                ['按平台单号查单', '/openapi/v3/pay/partner/transactions/id/{transaction_id}'],
                ['按商户单号查单', '/openapi/v3/pay/partner/transactions/out-trade-no/{out_trade_no}'],
                ['撤销订单', '/openapi/v3/pay/partner/transactions/out-trade-no/{out_trade_no}/reverse'],
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
          text: '免密支付',
          collapsed: true,
          items: [
            {
              text: '直连商户模式',
              collapsed: true,
              items: [
                ['JSAPI下单并授权', '/openapi/v3/pay/transactions/jsapi-with-contract'],
                ['小程序预签约', '/openapi/v3/password-exempt-contract/contracts/normal/pre-entrust-sign/mini-program'],
                ['支付后预签约', '/openapi/v3/password-exempt-contract/contracts/normal/pre-entrust-sign/pay-redirect-sign'],
              ].map(transArrayItem),
            },
            {
              text: '合作伙伴模式',
              collapsed: true,
              items: [
                ['JSAPI下单并授权', '/openapi/v3/pay/partner/transactions/jsapi-with-contract'],
                ['小程序预签约', '/openapi/v3/password-exempt-contract/contracts/service-provider/pre-entrust-sign/mini-program'],
                ['支付后预签约', '/openapi/v3/password-exempt-contract/contracts/service-provider/pre-entrust-sign/pay-redirect-sign'],
              ].map(transArrayItem),
            },
            ...[
              ['通过商户协议号查询协议', '/openapi/v3/password-exempt-contract/contracts/service-id/{service_id}/out-contract-code/{out_contract_code}'],
              ['通过商户协议号解约协议', '/openapi/v3/password-exempt-contract/contracts/service-id/{service_id}/out-contract-code/{out_contract_code}/terminate'],
            ].map(transArrayItem),
          ],
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
          text: '会员卡',
          collapsed: true,
          items: [
            ['设置回调地址', '/openapi/v3/marketing/membercard-open/callback#patch'],
            ['查询回调地址', '/openapi/v3/marketing/membercard-open/callback#get'],
            ['创建会员卡模板', '/openapi/v3/marketing/membercard-open/cards#post'],
            ['查询会员卡模板列表', '/openapi/v3/marketing/membercard-open/cards#get'],
            ['查询会员卡模板信息', '/openapi/v3/marketing/membercard-open/cards/{card_id}#get'],
            ['修改会员卡模板信息', '/openapi/v3/marketing/membercard-open/cards/{card_id}#patch'],
            ['删除会员卡模板信息', '/openapi/v3/marketing/membercard-open/cards/{card_id}#delete'],
            ['设置会员卡模板权益项', '/openapi/v3/marketing/membercard-open/cards/{card_id}/rights'],
            ['老会员卡模板升级', '/openapi/v3/marketing/membercard-open/cards/{card_id}/upgrade'],
            ['导入会员Code', '/openapi/v3/marketing/membercard-open/cards/{card_id}/codes/deposit'],
            ['根据openid导入用户会员卡', '/openapi/v3/marketing/membercard-open/cards/{card_id}/users/import'],
            ['根据手机号导入用户会员卡', '/openapi/v3/marketing/membercard-open/cards/{card_id}/phone-membercard/import'],
            ['通过加密手机号查询领卡状态', '/openapi/v3/marketing/membercard-open/phonenumber-member/search'],
            ['导入加密手机号提醒会员领卡', '/openapi/v3/marketing/membercard-open/phonenumber-member/import'],
            ['生成商户投放预授权凭证', '/openapi/v3/marketing/membercard-open/cards/{card_id}/permission-tokens'],
            ['查询用户在品牌下所有会员卡', '/openapi/v3/marketing/membercard-open/user/cards'],
            ['创建会员卡二维码', '/openapi/v3/marketing/membercard-open/cards/{card_id}/qrcode'],
            ['加密code解码(跳转型激活)', '/openapi/v3/marketing/membercard-open/cards/{card_id}/decrypt-code'],
            ['激活会员卡(跳转型激活)', '/openapi/v3/marketing/membercard-open/cards/{card_id}/codes/{code}/activate'],
            ['获取用户信息(跳转型激活)', '/openapi/v3/marketing/membercard-open/activate-informations/{activate_ticket}'],
            ['查询用户会员卡信息', '/openapi/v3/marketing/membercard-open/cards/{card_id}/codes/{code}#get'],
            ['修改用户会员卡信息', '/openapi/v3/marketing/membercard-open/cards/{card_id}/codes/{code}#patch'],
            ['作废用户会员卡', '/openapi/v3/marketing/membercard-open/cards/{card_id}/codes/{code}/unavailable'],
            ['设置会员权益', '/openapi/v3/marketing/membercard-open/cards/{card_id}/codes/{code}/rights'],
            ['支付结果页展示会员积分', '/openapi/v3/marketing/membercard-open/cards/{card_id}/codes/{code}/bonus/prepare'],
            ['设置支付后展示的积分到账', '/openapi/v3/marketing/membercard-open/cards/{card_id}/codes/{code}/bonus/commit'],
          ].map(transArrayItem).concat({
            text: '会员有礼',
            collapsed: true,
            items: [
              ['创建活动', '/openapi/v3/marketing/membercard-activity/activities#post'],
              ['查询活动列表', '/openapi/v3/marketing/membercard-activity/activities#get'],
              ['查询活动详情', '/openapi/v3/marketing/membercard-activity/activities/{activity_id}'],
              ['终止活动', '/openapi/v3/marketing/membercard-activity/activities/{activity_id}/terminate'],
            ].map(transArrayItem),
          }),
        },
        {
          text: '运营工具',
          collapsed: true,
          items: [
            transArrayItem(['图片文件上传', '/openapi/v3/marketing/favor/media/image-upload']),
            {
              text: '代金券',
              collapsed: true,
              items: [
                ['设置接收事件通知的URL', '/openapi/v3/marketing/favor/callbacks#post'],
                ['查询接收事件通知的URL', '/openapi/v3/marketing/favor/callbacks#get'],
                ['创建代金券批次', '/openapi/v3/marketing/favor/coupon-stocks'],
                ['条件查询批次列表', '/openapi/v3/marketing/favor/stocks'],
                ['查询批次详情', '/openapi/v3/marketing/favor/stocks/{stock_id}'],
                ['查询代金券可用单品', '/openapi/v3/marketing/favor/stocks/{stock_id}/items'],
                ['查询代金券可用商户', '/openapi/v3/marketing/favor/stocks/{stock_id}/merchants'],
                ['激活代金券批次', '/openapi/v3/marketing/favor/stocks/{stock_id}/start'],
                ['暂停代金券批次', '/openapi/v3/marketing/favor/stocks/{stock_id}/pause'],
                ['重启代金券批次', '/openapi/v3/marketing/favor/stocks/{stock_id}/restart'],
                ['发放代金券', '/openapi/v3/marketing/favor/users/{openid}/coupons#post'],
                ['根据商户号查用户的券', '/openapi/v3/marketing/favor/users/{openid}/coupons#get'],
                ['查询代金券详情', '/openapi/v3/marketing/favor/users/{openid}/coupons/{coupon_id}'],
                ['下载批次核销明细', '/openapi/v3/marketing/favor/stocks/{stock_id}/use-flow'],
                ['下载批次退款明细', '/openapi/v3/marketing/favor/stocks/{stock_id}/refund-flow'],
              ].map(transArrayItem),
            },
            {
              text: '消费金',
              collapsed: true,
              items: [
                ['发放指定批次', '/openapi/v3/multiuse/users/{openid}/coupons'],
                ['下载批次核销明细', '/openapi/v3/multiuse/stocks/{stock_id}/use-flow'],
                ['下载批次发放明细', '/openapi/v3/multiuse/stocks/{stock_id}/send-flow'],
                ['下载批次退款明细', '/openapi/v3/multiuse/stocks/{stock_id}/refund-flow'],
              ].map(transArrayItem),
            },
            {
              text: '商家券',
              collapsed: true,
              items: [
                ['设置接收事件通知的URL', '/openapi/v3/marketing/busifavor/callbacks#post'],
                ['查询接收事件通知的URL', '/openapi/v3/marketing/busifavor/callbacks#get'],
                ['上传预存code', '/openapi/v3/marketing/busifavor/stocks/{stock_id}/couponcodes#post'],
                ['查询预存code列表', '/openapi/v3/marketing/busifavor/stocks/{stock_id}/couponcodes#get'],
                ['查询预存code详情', '/openapi/v3/marketing/busifavor/stocks/{stock_id}/couponcodes/{coupon_code}#get'],
                ['删除预存code', '/openapi/v3/marketing/busifavor/stocks/{stock_id}/couponcodes/{coupon_code}#delete'],
                ['创建商家券', '/openapi/v3/marketing/busifavor/stocks'],
                ['查询商家券详情', '/openapi/v3/marketing/busifavor/stocks/{stock_id}#get'],
                ['修改商家券基本信息', '/openapi/v3/marketing/busifavor/stocks/{stock_id}#patch'],
                ['修改批次预算', '/openapi/v3/marketing/busifavor/stocks/{stock_id}/budget'],
                ['向用户发券', '/openapi/v3/marketing/busifavor/coupons/send'],
                ['使券失效', '/openapi/v3/marketing/busifavor/coupons/deactivate'],
                ['申请退券', '/openapi/v3/marketing/busifavor/coupons/return'],
                ['关联订单信息', '/openapi/v3/marketing/busifavor/coupons/associate'],
                ['取消关联订单信息', '/openapi/v3/marketing/busifavor/coupons/disassociate'],
                ['根据过滤条件查询用户券', '/openapi/v3/marketing/busifavor/users/{openid}/coupons'],
                ['查询用户单张券详情', '/openapi/v3/marketing/busifavor/users/{openid}/coupons/{coupon_code}/appids/{appid}'],
                ['核销用户券', '/openapi/v3/marketing/busifavor/coupons/use'],
                ['发放消费卡', '/openapi/v3/marketing/busifavor/coupons/{card_id}/send'],
                ['营销补差付款', '/openapi/v3/marketing/busifavor/subsidy/pay-receipts#post'],
                ['查询营销补差付款单列表', '/openapi/v3/marketing/busifavor/subsidy/pay-receipts#get'],
                ['查询营销补差付款单详情', '/openapi/v3/marketing/busifavor/subsidy/pay-receipts/{subsidy_receipt_id}'],
                ['营销补差回退', '/openapi/v3/marketing/busifavor/subsidy/return-receipts'],
                ['查询营销补差回退单详情', '/openapi/v3/marketing/busifavor/subsidy/return-receipts/{subsidy_return_receipt_id}'],
              ].map(transArrayItem),
            },
            {
              text: '委托营销',
              collapsed: true,
              items: [
                ['查询合作关系列表', '/openapi/v3/marketing/partnerships'],
                ['建立合作关系', '/openapi/v3/marketing/partnerships/build'],
                ['终止合作关系', '/openapi/v3/marketing/partnerships/terminate'],
              ].map(transArrayItem),
            },
            {
              text: '支付有礼',
              collapsed: true,
              items: [
                ['获取活动列表', '/openapi/v3/marketing/paygiftactivity/activities'],
                ['查询活动详情', '/openapi/v3/marketing/paygiftactivity/activities/{activity_id}'],
                ['创建全场满额送活动', '/openapi/v3/marketing/paygiftactivity/unique-threshold-activity'],
                ['终止活动', '/openapi/v3/marketing/paygiftactivity/activities/{activity_id}/terminate'],
                ['查询活动指定商品列表', '/openapi/v3/marketing/paygiftactivity/activities/{activity_id}/goods'],
                ['查询活动发券商户号', '/openapi/v3/marketing/paygiftactivity/activities/{activity_id}/merchants'],
                ['新增活动发券商户号', '/openapi/v3/marketing/paygiftactivity/activities/{activity_id}/merchants/add'],
                ['删除活动发券商户号', '/openapi/v3/marketing/paygiftactivity/activities/{activity_id}/merchants/delete'],
              ].map(transArrayItem),
            },
            {
              text: '支付即服务',
              collapsed: true,
              items: [
                ['服务人员注册', '/openapi/v3/smartguide/guides#post'],
                ['服务人员查询', '/openapi/v3/smartguide/guides#get'],
                ['服务人员信息更新', '/openapi/v3/smartguide/guides/{guide_id}'],
                ['服务人员分配', '/openapi/v3/smartguide/guides/{guide_id}/assign'],
              ].map(transArrayItem),
            },
            {
              text: '智慧商圈',
              collapsed: true,
              items: [
                ['会员积分服务授权状态查询', '/openapi/v3/businesscircle/user-authorizations/{openid}'],
                ['会员待积分状态查询', '/openapi/v3/businesscircle/users/{openid}/points/commit_status'],
                ['会员积分同步', '/openapi/v3/businesscircle/points/notify'],
                ['会员停车状态同步', '/openapi/v3/businesscircle/parkings'],
              ].map(transArrayItem),
            },
            {
              text: '品牌小店营销',
              collapsed: true,
              items: [
                ['按区域查询品牌加价购活动', '/openapi/v3/marketing/goods-subsidy-activity/activities'],
                ['门店报名品牌加价购活动', '/openapi/v3/marketing/goods-subsidy-activity/activity/{activity_id}/apply'],
                ['锁定品牌加价购活动资格', '/openapi/v3/marketing/goods-subsidy-activity/qualification/lock'],
                ['解锁品牌加价购活动资格', '/openapi/v3/marketing/goods-subsidy-activity/qualification/unlock'],
                ['查询小店活动门店列表', '/openapi/v3/marketing/goods-subsidy-activity/retail-store-act/{brand_id}/stores#get'],
                ['添加小店活动门店', '/openapi/v3/marketing/goods-subsidy-activity/retail-store-act/{brand_id}/stores#post'],
                ['删除小店活动门店', '/openapi/v3/marketing/goods-subsidy-activity/retail-store-act/{brand_id}/stores#delete'],
                ['查询小店活动门店详情', '/openapi/v3/marketing/goods-subsidy-activity/retail-store-act/{brand_id}/stores/{store_code}'],
                ['生成小店活动物料码', '/openapi/v3/marketing/goods-subsidy-activity/retail-store-act/{brand_id}/materials'],
                ['添加零售小店活动业务代理', '/openapi/v3/marketing/goods-subsidy-activity/retail-store-act/{activity_id}/representative#put'],
                ['删除零售小店活动业务代理', '/openapi/v3/marketing/goods-subsidy-activity/retail-store-act/{activity_id}/representative#delete'],
                ['查询零售小店活动业务代理', '/openapi/v3/marketing/goods-subsidy-activity/retail-store-act/{activity_id}/representatives'],
              ].map(transArrayItem),
            },
            {
              text: '电子小票',
              collapsed: true,
              items: [
                ['创建自定义入口', '/openapi/v3/marketing/shopping-receipt/customentrances'],
                ['查询自定义入口', '/openapi/v3/marketing/shopping-receipt/customentrances/{brand_id}#get'],
                ['更新自定义入口', '/openapi/v3/marketing/shopping-receipt/customentrances/{brand_id}#patch'],
                ['上传商家电子小票跳转信息', '/openapi/v3/marketing/shopping-receipt/merchantshoppingreceiptjumpinfos'],
                ['上传电子小票图片文件', '/openapi/v3/marketing/shopping-receipt/shoppingreceipts'],
              ].map(transArrayItem),
            },
            {
              text: '点金计划',
              collapsed: true,
              items: [
                ['点金计划管理', '/openapi/v3/goldplan/merchants/changegoldplanstatus'],
                ['商家小票管理', '/openapi/v3/goldplan/merchants/changecustompagestatus'],
                ['同业过滤标签管理', '/openapi/v3/goldplan/merchants/set-advertising-industry-filter'],
                ['开通广告展示', '/openapi/v3/goldplan/merchants/open-advertising-show'],
                ['关闭广告展示', '/openapi/v3/goldplan/merchants/close-advertising-show'],
              ].map(transArrayItem),
            },
            {
              text: '电子发票',
              collapsed: true,
              items: [
                ['检查子商户开票功能状态', '/openapi/v3/new-tax-control-fapiao/merchant/{sub_mchid}/check'],
                ['创建电子发票卡券模板', '/openapi/v3/new-tax-control-fapiao/card-template'],
                ['配置开发选项', '/openapi/v3/new-tax-control-fapiao/merchant/development-config#patch'],
                ['查询配置的开发选项', '/openapi/v3/new-tax-control-fapiao/merchant/development-config#get'],
                ['获取抬头填写链接', '/openapi/v3/new-tax-control-fapiao/user-title/title-url'],
                ['获取用户填写的抬头', '/openapi/v3/new-tax-control-fapiao/user-title'],
              ].map(transArrayItem).concat({
                text: '区块链电子发票',
                collapsed: true,
                items: [
                  ['获取商户开票基础信息', '/openapi/v3/new-tax-control-fapiao/merchant/base-information'],
                  ['获取商品和服务税收分类对照表', '/openapi/v3/new-tax-control-fapiao/merchant/tax-codes'],
                  ['开具电子发票', '/openapi/v3/new-tax-control-fapiao/fapiao-applications'],
                  ['冲红电子发票', '/openapi/v3/new-tax-control-fapiao/fapiao-applications/{fapiao_apply_id}/reverse'],
                  ['获取发票下载信息', '/openapi/v3/new-tax-control-fapiao/fapiao-applications/{fapiao_apply_id}/fapiao-files'],
                  ['下载发票文件', '/openapi/v3/new-tax-control-fapiao/download'],
                ].map(transArrayItem),
              }, {
                text: '自建/三方模式',
                collapsed: true,
                items: [
                  ['上传电子发票文件', '/openapi/v3/new-tax-control-fapiao/fapiao-applications/upload-fapiao-file'],
                  ['将电子发票插入卡包', '/openapi/v3/new-tax-control-fapiao/fapiao-applications/{fapiao_apply_id}/insert-cards'],
                ].map(transArrayItem),
              }, transArrayItem(
                ['查询电子发票', '/openapi/v3/new-tax-control-fapiao/fapiao-applications/{fapiao_apply_id}'],
              )),
            },
            {
              text: '出租车电子发票',
              collapsed: true,
              items: [
                ['新增出租车公司', '/openapi/v3/taxi-invoice/taxi-company/create-taxi-company'],
                ['获取出租车公司商户信息', '/openapi/v3/taxi-invoice/taxi-companies/{company_mchid}'],
                ['更新出租车信息', '/openapi/v3/taxi-invoice/taxi/update-taxi'],
                ['获取出租车信息', '/openapi/v3/taxi-invoice/taxies/{plate_number}'],
                ['更新司机信息', '/openapi/v3/taxi-invoice/driver/update-driver'],
                ['获取司机信息', '/openapi/v3/taxi-invoice/drivers/{driver_license}'],
                ['司机签到签退', '/openapi/v3/taxi-invoice/attendance/punch'],
                ['获取乘客行程单列表', '/openapi/v3/taxi-invoice/user-taxi-orders'],
                ['根据凭证查询乘客行程单', '/openapi/v3/taxi-invoice/user-taxi-order/find-by-token'],
                ['上传出租车电子发票文件', '/openapi/v3/taxi-invoice/cards/upload-file'],
                ['将出租车电子发票插入卡包', '/openapi/v3/taxi-invoice/cards'],
              ].map(transArrayItem),
            },
          ],
        },
        {
          text: '微工卡',
          collapsed: true,
          items: [
            ['生成用户授权token', '/openapi/v3/payroll-card/tokens'],
            ['查询授权关系', '/openapi/v3/payroll-card/relations/{openid}'],
            ['核身预下单', '/openapi/v3/payroll-card/authentications/pre-order'],
            ['核身预下单(流程中完成授权)', '/openapi/v3/payroll-card/authentications/pre-order-with-auth'],
            ['获取核身结果', '/openapi/v3/payroll-card/authentications/{authenticate_number}'],
            ['查询核身记录', '/openapi/v3/payroll-card/authentications'],
            ['校验核身结果', '/openapi/v3/payroll-card/wesure/token-validations'],
            ['生成投保结果', '/openapi/v3/payroll-card/wesure/insurance'],
            ['发起批量转账', '/openapi/v3/payroll-card/transfer-batches'],
          ].map(transArrayItem),
        },
        {
          text: '商家充值',
          collapsed: true,
          items: [
            ['申请银行转账充值', '/openapi/v3/recharge/bank-transfer-recharges/apply'],
            ['查询银行转账充值结果', '/openapi/v3/recharge/bank-transfer-recharges/out-recharge-no/{out_recharge_no}'],
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
            ...[
              ['申请转账账单电子回单', '/openapi/v3/transfer/bill-receipt'],
              ['查询账单回单受理结果', '/openapi/v3/transfer/bill-receipt/{out_batch_no}'],
              ['申请转账明细电子回单', '/openapi/v3/transfer-detail/electronic-receipts#post'],
              ['查询明细回单受理结果', '/openapi/v3/transfer-detail/electronic-receipts#get'],
              ['下载电子回单文件', '/openapi/v3/transferdownload/signfile'],
            ].map(transArrayItem),
            {
              text: '预约转账',
              collapsed: true,
              items: [
                ['受理商家转账', '/openapi/v3/platsolution/mch-transfer/batches/apply'],
                ['受理单次预约商家转账', '/openapi/v3/platsolution/mch-transfer/reservation/apply'],
                ['关闭预约商家转账记录', '/openapi/v3/platsolution/mch-transfer/reservation/out-reservation-no/{out_reservation_no}/close'],
                ['平台预约单号查询转账记录', '/openapi/v3/platsolution/mch-transfer/reservation/reservation-id/{reservation_id}'],
                ['商户预约单号查询转账记录', '/openapi/v3/platsolution/mch-transfer/reservation/out-reservation-no/{out_reservation_no}'],
                ['商户明细单号查询明细单', '/openapi/v3/platsolution/mch-transfer/batches/out-batch-no/{out_batch_no}/details/out-detail-no/{out_detail_no}'],
                ['商户批次单号查询批次单', '/openapi/v3/platsolution/mch-transfer/batches/out-batch-no/{out_batch_no}'],
                ['申请商家转账批次电子回单', '/openapi/v3/platsolution/mch-transfer/batches/summary-receipts/out-batch-no/{out_batch_no}/apply'],
                ['查询商家转账批次电子回单', '/openapi/v3/platsolution/mch-transfer/batches/summary-receipts/out-batch-no/{out_batch_no}'],
                ['平台批次单号查询批次单', '/openapi/v3/platsolution/mch-transfer/batches/batch-id/{batch_id}'],
                ['申请商家转账明细电子回单', '/openapi/v3/platsolution/mch-transfer/batches/detail-receipts/out-batch-no/{out_batch_no}/out-detail-no/{out_detail_no}/apply'],
                ['查询商家转账明细电子回单', '/openapi/v3/platsolution/mch-transfer/batches/detail-receipts/out-batch-no/{out_batch_no}/out-detail-no/{out_detail_no}'],
                ['平台明细单号查询明细单', '/openapi/v3/platsolution/mch-transfer/batches/batch-id/{batch_id}/details/detail-id/{detail_id}'],
              ].map(transArrayItem),
            },
            {
              text: '用户确认模式',
              collapsed: true,
              items: [
                ['发起转账', '/openapi/v3/fund-app/mch-transfer/transfer-bills'],
                ['撤销转账', '/openapi/v3/fund-app/mch-transfer/transfer-bills/out-bill-no/{out_bill_no}/cancel'],
                ['查询转账单(微信单号)', '/openapi/v3/fund-app/mch-transfer/transfer-bills/transfer-bill-no/{transfer_bill_no}'],
                ['查询转账单(商户单号)', '/openapi/v3/fund-app/mch-transfer/transfer-bills/out-bill-no/{out_bill_no}'],
                ['申请电子回单(微信单号)', '/openapi/v3/fund-app/mch-transfer/elecsign/transfer-bill-no'],
                ['申请电子回单(商户单号)', '/openapi/v3/fund-app/mch-transfer/elecsign/out-bill-no'],
                ['查询电子回单(微信单号)', '/openapi/v3/fund-app/mch-transfer/elecsign/transfer-bill-no/{transfer_bill_no}'],
                ['查询电子回单(商户单号)', '/openapi/v3/fund-app/mch-transfer/elecsign/out-bill-no/{out_bill_no}'],
                ['下载电子回单文件', '/openapi/v3/transferdownload/elecvoucherfile'],
              ].map(transArrayItem),
            },
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
                ['请求售后服务分账', '/openapi/v3/ecommerce/profitsharing/after-sales-orders#post'],
                ['查询售后服务分账结果', '/openapi/v3/ecommerce/profitsharing/after-sales-orders#get'],
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
                ['发起异常退款', '/openapi/v3/ecommerce/refunds/{refund_id}/apply-abnormal-refund'],
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
              text: '充值',
              collapsed: true,
              items: [
                ['申请二级商户充值', '/openapi/v3/platsolution/ecommerce/recharges/apply'],
                ['查询二级商户充值结果', '/openapi/v3/platsolution/ecommerce/recharges/out-recharge-no/{out_recharge_no}'],
                ['关闭二级商户充值', '/openapi/v3/platsolution/ecommerce/recharges/out-recharge-no/{out_recharge_no}/close'],
                ['申请银行转账充值', '/openapi/v3/platsolution/ecommerce/bank-transfer-recharges/apply'],
                ['查询银行转账充值结果', '/openapi/v3/platsolution/ecommerce/bank-transfer-recharges/out-recharge-no/{out_recharge_no}'],
              ].map(transArrayItem),
            },
            {
              text: '赔付',
              collapsed: true,
              items: [
                ['开通保险理赔功能', '/openapi/v3/platsolution/ecommerce/insurance-compensation-contracts'],
                ['查询保险理赔功能开通状态', '/openapi/v3/platsolution/ecommerce/insurance-compensation-contracts/sub-mchid/{sub_mchid}/check-opened'],
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
            {
              text: '免密支付',
              collapsed: true,
              items: [
                ['小程序预签约', '/openapi/v3/password-exempt-contract/contracts/ecommerce/pre-entrust-sign/mini-program'],
                ['支付后预签约', '/openapi/v3/password-exempt-contract/contracts/ecommerce/pre-entrust-sign/pay-redirect-sign'],
              ].map(transArrayItem),
            },
            {
              text: '合单代扣',
              collapsed: true,
              items: [
                ['APP预签约', '/openapi/v3/ecommerce/combine-papay/contracts/pre-entrust-sign'],
                ['小程序预签约', '/openapi/v3/ecommerce/combine-papay/contracts/pre-entrust-sign/mini-program'],
                ['查询协议', '/openapi/v3/ecommerce/combine-papay/contracts/plan-id/{plan_id}/out-contract-code/{out_contract_code}'],
                ['解约协议', '/openapi/v3/ecommerce/combine-papay/contracts/plan-id/{plan_id}/out-contract-code/{out_contract_code}/terminate'],
                ['撤销订单', '/openapi/v3/ecommerce/combine-papay/transactions/{combine_out_trade_no}/reverse'],
                ['查询订单', '/openapi/v3/ecommerce/combine-papay/transactions/{combine_out_trade_no}'],
                ['免密支付', '/openapi/v3/ecommerce/combine-papay/transactions'],
              ].map(transArrayItem),
            },
            {
              text: '商家转账',
              collapsed: true,
              items: [
                ['申请二级商户授权', '/openapi/v3/ecommerce/mch-transfer/authorizations'],
                ['查询二级商户授权状态', '/openapi/v3/ecommerce/mch-transfer/authorizations/{sub_mchid}'],
                ['发起转账', '/openapi/v3/ecommerce/mch-transfer/transfer-bills'],
                ['撤销转账', '/openapi/v3/ecommerce/mch-transfer/transfer-bills/out-bill-no/{out_bill_no}/cancel'],
                ['平台单号查询转账单', '/openapi/v3/ecommerce/mch-transfer/transfer-bills/transfer-bill-no/{transfer_bill_no}'],
                ['商户单号查询转账单', '/openapi/v3/ecommerce/mch-transfer/transfer-bills/out-bill-no/{out_bill_no}'],
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
          text: '商户管理',
          collapsed: true,
          items: [
            {
              text: '商户进件',
              collapsed: true,
              items: [
                ['提交进件申请单', '/openapi/v3/applyment4sub/applyment/'],
                ['查询进件状态(申请单号)', '/openapi/v3/applyment4sub/applyment/applyment_id/{applyment_id}'],
                ['查询进件状态(业务单号)', '/openapi/v3/applyment4sub/applyment/business_code/{business_code}'],
              ].map(transArrayItem),
            },
            {
              text: '特约商户资料变更',
              collapsed: true,
              items: [
                ['提交变更申请单', '/openapi/v3/mchalterapply/mchsubjectalterapplyment'],
                ['查询变更单状态(申请单号)', '/openapi/v3/mchalterapply/mchsubjectalterapplyment/{apply_id}'],
                ['查询变更单状态(业务单号)', '/openapi/v3/mchalterapply/mchsubjectalterapplyment/merchant/{merchant_code}/out-request-no/{out_request_no}'],
                ['撤销资料变更申请单', '/openapi/v3/mchalterapply/mchsubjectalterapplyment/{apply_id}/revoke'],
              ].map(transArrayItem),
            },
            {
              text: '特约商户结算账户',
              collapsed: true,
              items: [
                ['查询结算账户', '/openapi/v3/apply4sub/sub_merchants/{sub_mchid}/settlement'],
                ['修改结算账户', '/openapi/v3/apply4sub/sub_merchants/{sub_mchid}/modify-settlement'],
                ['查询结算账户修改状态', '/openapi/v3/apply4sub/sub_merchants/{sub_mchid}/application/{application_no}'],
              ].map(transArrayItem),
            },
            {
              text: '确认商户开户意愿',
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
              text: '不活跃商户身份核实',
              collapsed: true,
              items: [
                ['发起不活跃商户身份核实', '/openapi/v3/compliance/inactive-merchant-identity-verification/merchants'],
                ['查询商户身份核实结果', '/openapi/v3/compliance/inactive-merchant-identity-verification/merchants/{sub_mchid}/verifications/{verification_id}'],
              ].map(transArrayItem),
            },
            ...[
              ['商户图片文件上传', '/openapi/v3/merchant/media/upload'],
              ['商户视频文件上传', '/openapi/v3/merchant/media/video_upload'],
            ].map(transArrayItem),
            {
              text: '商户风险管理',
              collapsed: true,
              items: [
                ['维护接收违规通知的URL', '/openapi/v3/merchant-risk-manage/violation-notifications'],
                ['上报订单关联信息', '/openapi/v3/merchant-risk-manage/report-trade-union-information'],
                ['查询风险信息', '/openapi/v3/merchant-risk-manage/trade-risk-information'],
                ['处置结果回传', '/openapi/v3/merchant-risk-manage/trade-risk-result'],
                ['查询子商户管控情况', '/openapi/v3/mch-operation-manage/merchant-limitations/sub-mchid/{sub_mchid}'],
              ].map(transArrayItem),
            },
            ...[
              ['查询省份列表', '/openapi/v3/capital/capitallhh/areas/provinces'],
              ['查询城市列表', '/openapi/v3/capital/capitallhh/areas/provinces/{province_code}/cities'],
              ['查询支行列表', '/openapi/v3/capital/capitallhh/banks/{bank_alias_code}/branches'],
              ['查询支持对公业务的银行列表', '/openapi/v3/capital/capitallhh/banks/corporate-banking'],
              ['查询支持个人业务的银行列表', '/openapi/v3/capital/capitallhh/banks/personal-banking'],
              ['获取对私银行卡号开户银行', '/openapi/v3/capital/capitallhh/banks/search-banks-by-bank-account'],
            ].map(transArrayItem),
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
                ['查询投诉信息详情', '/openapi/v3/merchant-service/complaints/{transaction_id}'],
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
          text: '委托代扣',
          collapsed: true,
          items: [
            {
              text: '直连商户模式',
              collapsed: true,
              items: [
                ['JSAPI场景预约扣费预签约', '/openapi/v3/papay/scheduled-deduct-sign/contracts/pre-entrust-sign/jsapi'],
                ['App场景预约扣费预签约', '/openapi/v3/papay/scheduled-deduct-sign/contracts/pre-entrust-sign/app'],
                ['H5场景预约扣费预签约', '/openapi/v3/papay/scheduled-deduct-sign/contracts/pre-entrust-sign/h5'],
                ['小程序场景预约扣费预签约', '/openapi/v3/papay/scheduled-deduct-sign/contracts/pre-entrust-sign/mini-program'],
                ['查询签约协议', '/openapi/v3/papay/sign/contracts/plan-id/{plan_id}/out-contract-code/{out_contract_code}'],
                ['解除签约协议', '/openapi/v3/papay/sign/contracts/plan-id/{plan_id}/out-contract-code/{out_contract_code}/terminate'],
                ['预约扣费', '/openapi/v3/papay/pay/schedules/contract-id/{contract_id}/schedule'],
                ['查询扣费预约', '/openapi/v3/papay/pay/schedules/contract-id/{contract_id}'],
                ['发送预扣费通知', '/openapi/v3/papay/contracts/{contract_id}/notify'],
                ['受理扣款', '/openapi/v3/papay/pay/transactions/apply'],
                ['重试扣费通知', '/openapi/v3/papay/contracts/{contract_id}/fail-notify'],
              ].map(transArrayItem),
            },
            {
              text: '合作伙伴模式',
              collapsed: true,
              items: [
                ['JSAPI场景预约扣费预签约', '/openapi/v3/papay/scheduled-deduct-sign/partner/contracts/pre-entrust-sign/jsapi'],
                ['App场景预约扣费预签约', '/openapi/v3/papay/scheduled-deduct-sign/partner/contracts/pre-entrust-sign/app'],
                ['H5场景预约扣费预签约', '/openapi/v3/papay/scheduled-deduct-sign/partner/contracts/pre-entrust-sign/h5'],
                ['小程序场景预约扣费预签约', '/openapi/v3/papay/scheduled-deduct-sign/partner/contracts/pre-entrust-sign/mini-program'],
                ['查询签约协议', '/openapi/v3/papay/sign/partner/contracts/plan-id/{plan_id}/out-contract-code/{out_contract_code}'],
                ['解除签约协议', '/openapi/v3/papay/sign/partner/contracts/plan-id/{plan_id}/out-contract-code/{out_contract_code}/terminate'],
                ['预约扣费', '/openapi/v3/papay/pay/partner/schedules/contract-id/{contract_id}/schedule'],
                ['查询扣费预约', '/openapi/v3/papay/pay/partner/schedules/contract-id/{contract_id}'],
                ['发送预扣费通知', '/openapi/v3/partner-papay/contracts/{contract_id}/notify'],
                ['受理扣款', '/openapi/v3/papay/pay/partner/transactions/apply'],
                ['重试扣费通知', '/openapi/v3/partner-papay/contracts/{contract_id}/fail-notify'],
              ].map(transArrayItem),
            },
            {
              text: '保险商户委托代扣',
              collapsed: true,
              items: [
                ['查询保险自动续费预约', '/openapi/v3/papay/insurance-pay/policy-periods/contract-id/{contract_id}/policy-period-id/{policy_period_id}'],
                ['预约保险自动续费', '/openapi/v3/papay/insurance-pay/policy-periods/contract-id/{contract_id}/policy-period-id/{policy_period_id}/schedule'],
                ['受理保险自动续费扣款', '/openapi/v3/papay/insurance-pay/transactions/apply'],
                ['受理续期自动续费协议', '/openapi/v3/papay/insurance-sign/contracts/plan-id/{plan_id}/contract-id/{contract_id}/renew'],
                ['查询保险自动续费协议', '/openapi/v3/papay/insurance-sign/contracts/plan-id/{plan_id}/out-contract-code/{out_contract_code}'],
                ['解除保险自动续费协议', '/openapi/v3/papay/insurance-sign/contracts/plan-id/{plan_id}/out-contract-code/{out_contract_code}/terminate'],
                ['查询保险扣费周期列表', '/openapi/v3/papay/insurance-sign/policy_periods/plan-id/{plan_id}/out-contract-code/{out_contract_code}'],
                ['App预签约', '/openapi/v3/papay/insurance-sign/contracts/pre-entrust-sign/app'],
                ['H5预签约', '/openapi/v3/papay/insurance-sign/contracts/pre-entrust-sign/h5'],
                ['JSAPI预签约', '/openapi/v3/papay/insurance-sign/contracts/pre-entrust-sign/jsapi'],
                ['小程序预签约', '/openapi/v3/papay/insurance-sign/contracts/pre-entrust-sign/mini-program'],
              ].map(transArrayItem),
            },
            {
              text: '校园轻松付',
              collapsed: true,
              items: [
                ['查询用户签约列表', '/openapi/v3/eduschoolpay/users/{openid}/contracts'],
                ['提交预签约', '/openapi/v3/eduschoolpay/contracts/presign'],
                ['商户主动解约', '/openapi/v3/eduschoolpay/contracts/{contract_id}/terminate'],
                ['通过协议号查询签约信息', '/openapi/v3/eduschoolpay/contracts/{contract_id}'],
                ['使用签约协议号发起扣款', '/openapi/v3/eduschoolpay/transactions'],
                ['通过商户订单号查单', '/openapi/v3/eduschoolpay/transactions/out-trade-no/{out_trade_no}'],
                ['通过微信支付订单号查单', '/openapi/v3/eduschoolpay/transactions/id/{transaction_id}'],
                ['查询用户欠款状态', '/openapi/v3/eduschoolpay/users/{openid}/debt-state'],
              ].map(transArrayItem),
            },
            {
              text: '教育续费通',
              collapsed: true,
              items: [
                ['预签约', '/openapi/v3/edu-papay/contracts/presign'],
                ['通过协议号查询签约', '/openapi/v3/edu-papay/contracts/id/{contract_id}'],
                ['通过用户标识查询签约', '/openapi/v3/edu-papay/user/{openid}/contracts'],
                ['商户主动发起解约', '/openapi/v3/edu-papay/contracts/{contract_id}'],
                ['通过商户订单号查单', '/openapi/v3/edu-papay/transactions/out-trade-no/{out_trade_no}'],
                ['通过微信订单号查单', '/openapi/v3/edu-papay/transactions/id/{transaction_id}'],
                ['给用户发送扣款预通知', '/openapi/v3/edu-papay/user-notifications/{contract_id}/send'],
                ['受理扣款', '/openapi/v3/edu-papay/transactions'],
              ].map(transArrayItem),
            },
            {
              text: '停车服务',
              collapsed: true,
              items: [
                ['查询车牌服务开通信息', '/openapi/v3/vehicle/parking/services/find'],
                ['创建停车入场', '/openapi/v3/vehicle/parking/parkings'],
                ['扣费受理', '/openapi/v3/vehicle/transactions/parking'],
                ['查询订单', '/openapi/v3/vehicle/transactions/out-trade-no/{out_trade_no}'],
              ].map(transArrayItem),
            },
            {
              text: 'ETC授权',
              collapsed: true,
              items: [
                ['查询签约状态(OPENID)', '/openapi/v3/vehicle/etc/users/{openid}/contracts'],
                ['查询签约状态(商户绑定号)', '/openapi/v3/vehicle/etc/contracts/{contract_id}'],
                ['预开通用户ETC扣费', '/openapi/v3/vehicle/etc/preopen'],
                ['查询订单(商户订单号)', '/openapi/v3/vehicle/etc/transactions/out-trade-no/{out_trade_no}'],
                ['查询订单(微信订单号)', '/openapi/v3/vehicle/etc/transactions/id/{transaction_id}'],
                ['高速场景商户扣款', '/openapi/v3/vehicle/etc/transactions/highway'],
              ].map(transArrayItem),
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
                ...[
                  ['创建订单', '/openapi/v3/payscore/serviceorder#post'],
                  ['查询订单', '/openapi/v3/payscore/serviceorder#get'],
                  ['取消订单', '/openapi/v3/payscore/serviceorder/{out_order_no}/cancel'],
                  ['修改金额', '/openapi/v3/payscore/serviceorder/{out_order_no}/modify'],
                  ['完结订单', '/openapi/v3/payscore/serviceorder/{out_order_no}/complete'],
                  ['同步订单', '/openapi/v3/payscore/serviceorder/{out_order_no}/sync'],
                  ['请求催收', '/openapi/v3/payscore/serviceorder/{out_order_no}/pay'],
                  ['下发服务预扣费消息', '/openapi/v3/payscore/serviceorder/{out_order_no}/send-prepaidmessage'],
                  ['下发费用待处理消息', '/openapi/v3/payscore/serviceorder/{out_order_no}/send-pendingmessage'],
                  ['评估用户分层', '/openapi/v3/payscore/permissions/assess-user-risk-level'],
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
                  ['下发服务预扣费消息', '/openapi/v3/payscore/partner/serviceorder/{out_order_no}/send-prepaidmessage'],
                  ['下发费用待处理消息', '/openapi/v3/payscore/partner/serviceorder/{out_order_no}/send-pendingmessage'],
                  ['评估用户分层', '/openapi/v3/payscore/partner/permissions/assess-user-risk-level'],
                  ['支付场景中预授权', '/openapi/v3/payscore/partner/permissions/apply-for-scene'],
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
            {
              text: '签约计划',
              collapsed: true,
              items: [
                {
                  text: '直连商户模式',
                  collapsed: true,
                  items: [
                    ['创建支付分计划', '/openapi/v3/payscore/plan/payscore-plans'],
                    ['查询支付分计划', '/openapi/v3/payscore/plan/payscore-plans/merchant-plan-no/{merchant_plan_no}'],
                    ['停止支付分计划', '/openapi/v3/payscore/plan/payscore-plans/merchant-plan-no/{merchant_plan_no}/stop'],
                    ['创建用户的签约计划', '/openapi/v3/payscore/sign-plan/user-sign-plans'],
                    ['查询用户的签约计划', '/openapi/v3/payscore/sign-plan/user-sign-plans/merchant-sign-plan-no/{merchant_sign_plan_no}'],
                    ['取消用户的签约计划', '/openapi/v3/payscore/sign-plan/user-sign-plans/merchant-sign-plan-no/{merchant_sign_plan_no}/stop'],
                    ['创建签约计划服务单', '/openapi/v3/payscore/sign-plan/serviceorder'],
                  ].map(transArrayItem),
                },
                {
                  text: '合作伙伴模式',
                  collapsed: true,
                  items: [
                    ['创建支付分计划', '/openapi/v3/payscore/plan/partner/payscore-plans'],
                    ['查询支付分计划', '/openapi/v3/payscore/plan/partner/payscore-plans/merchant-plan-no/{merchant_plan_no}'],
                    ['停止支付分计划', '/openapi/v3/payscore/plan/partner/payscore-plans/merchant-plan-no/{merchant_plan_no}/stop'],
                    ['创建用户的签约计划', '/openapi/v3/payscore/sign-plan/partner/user-sign-plans'],
                    ['查询用户的签约计划', '/openapi/v3/payscore/sign-plan/partner/user-sign-plans/merchant-sign-plan-no/{merchant_sign_plan_no}'],
                    ['取消用户的签约计划', '/openapi/v3/payscore/sign-plan/partner/user-sign-plans/merchant-sign-plan-no/{merchant_sign_plan_no}/stop'],
                    ['创建签约计划服务单', '/openapi/v3/payscore/sign-plan/partner/serviceorder'],
                  ].map(transArrayItem),
                },
              ],
            },
            {
              text: '智慧零售',
              collapsed: true,
              items: [
                ['创建订单', '/openapi/v3/payscore/smartretail-orders#post'],
                ['查询订单', '/openapi/v3/payscore/smartretail-orders#get'],
                ['撤销订单', '/openapi/v3/payscore/smartretail-orders/{out_order_no}/cancel'],
                ['完结订单', '/openapi/v3/payscore/smartretail-orders/{out_order_no}/complete'],
              ].map(transArrayItem),
            },
            {
              text: '先享后付',
              collapsed: true,
              items: [
                ['创建订单', '/openapi/v3/payscore/payafter-orders#post'],
                ['查询订单', '/openapi/v3/payscore/payafter-orders#get'],
                ['撤销订单', '/openapi/v3/payscore/payafter-orders/{out_order_no}/cancel'],
                ['完结订单', '/openapi/v3/payscore/payafter-orders/{out_order_no}/complete'],
                ['同步订单', '/openapi/v3/payscore/payafter-orders/{out_order_no}/sync'],
              ].map(transArrayItem),
            },
            {
              text: '微信先享卡',
              collapsed: true,
              items: [
                ['预受理领卡请求', '/openapi/v3/discount-card/cards'],
                ['查询先享卡订单', '/openapi/v3/discount-card/cards/{out_card_code}'],
                ['更新先享卡订单', '/openapi/v3/discount-card/orders/{out_order_no}#patch'],
                ['通过先享卡订单号查询订单', '/openapi/v3/discount-card/orders/{out_order_no}#get'],
                ['通过商户订单号查询订单', '/openapi/v3/discount-card/orders/out-trade-no/{out_trade_no}'],
                ['增加用户记录', '/openapi/v3/discount-card/cards/{out_card_code}/add-user-records'],
              ].map(transArrayItem),
            },
          ],
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
        ['车牌状态变更通知', '/webhook/v2/vehicle-state-changed-for-parking'],
      ].map(transArrayItem).concat({
        text: '免压租借/速住',
        collapsed: true,
        items: [
          ['确认成功通知', '/webhook/v2/CHECK.SUCCESS'],
          ['确认失败通知', '/webhook/v2/CHECK.FAIL'],
          ['支付成功通知', '/webhook/v2/TRANSACTION.SUCCESS'],
          ['支付失败通知', '/webhook/v2/TRANSACTION.FAIL'],
        ].map(transArrayItem),
      }),
    },
    {
      text: 'JSON格式报文',
      items: [
        {
          text: '支付',
          collapsed: true,
          items: [
            ['支付成功通知', '/webhook/v3/TRANSACTION.SUCCESS#BASIC'],
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
          text: '分账动账',
          collapsed: true,
          items: [
            ['分账动账成功变动通知', '/webhook/v3/PROFITSHARING.SUCCESS'],
            ['分账动账成功回退通知', '/webhook/v3/PROFITSHARING.RETURN'],
          ].map(transArrayItem),
        },
        {
          text: '转账',
          collapsed: true,
          items: [
            ['转账批次完成通知', '/webhook/v3/MCHTRANSFER.BATCH.FINISHED'],
            ['转账批次关闭通知', '/webhook/v3/MCHTRANSFER.BATCH.CLOSED'],
            ['转账单据终态通知', '/webhook/v3/MCHTRANSFER.BILL.FINISHED'],
          ].map(transArrayItem),
        },
        {
          text: '平台收付通',
          collapsed: true,
          items: [
            {
              text: '合单代扣',
              collapsed: true,
              items: [
                ['签约成功通知', '/webhook/v3/ECOMMERCE_ENTRUST.SIGN'],
                ['解约成功通知', '/webhook/v3/ECOMMERCE_ENTRUST.TERMINATE'],
              ].map(transArrayItem),
            },{
              text: '商家充值',
              collapsed: true,
              items: [
                ['充值成功通知', '/webhook/v3/RECHARGE.SUCCESS'],
                ['关闭充值通知', '/webhook/v3/RECHARGE.CLOSED'],
              ].map(transArrayItem),
            }
          ],
        },
        {
          text: '会员卡',
          collapsed: true,
          items: [
            ['领卡事件通知', '/webhook/v3/MEMBERCARD.ACCEPT_CARD'],
            ['激活事件通知', '/webhook/v3/MEMBERCARD.ACTIVATE_CARD'],
            ['用户管理会员卡事件通知', '/webhook/v3/MEMBERCARD.USERCARD_MANAGE'],
          ].map(transArrayItem),
        },
        {
          text: '智慧商圈',
          collapsed: true,
          items: [
            ['会员积分服务授权结果通知', '/webhook/v3/MALL_AUTH.ACTIVATE_CARD'],
            ['会员支付结果通知', '/webhook/v3/MALL_TRANSACTION.SUCCESS'],
            ['会员退款成功通知', '/webhook/v3/MALL_REFUND.SUCCESS'],
          ].map(transArrayItem),
        },
        {
          text: '优惠券',
          collapsed: true,
          items: [
            ['核销事件回调通知', '/webhook/v3/COUPON.USE'],
            ['领券事件回调通知', '/webhook/v3/COUPON.SEND'],
          ].map(transArrayItem),
        },
        {
          text: '电子发票',
          collapsed: true,
          items: [
            ['用户发票抬头填写完成通知', '/webhook/v3/FAPIAO.USER_APPLIED'],
            ['发票卡券作废通知', '/webhook/v3/FAPIAO.CARD_DISCARDED'],
            ['发票插入用户卡包成功通知', '/webhook/v3/FAPIAO.CARD_INSERTED'],
            ['发票开具成功通知', '/webhook/v3/FAPIAO.ISSUED'],
            ['发票冲红成功通知', '/webhook/v3/FAPIAO.REVERSED'],
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
          text: '委托代扣',
          collapsed: true,
          items: [
            ['签约成功通知', '/webhook/v3/ENTRUST.SIGN'],
            ['解约成功通知', '/webhook/v3/ENTRUST.TERMINATE'],
            ['解约挽留信息通知', '/webhook/v3/ENTRUST.TERMINATE_RETENTION'],
          ].map(transArrayItem).concat({
            text: '保险商户委托代扣',
            collapsed: true,
            items: [
              ['签约成功通知', '/webhook/v3/INSURANCE_ENTRUST.SIGN'],
              ['解约成功通知', '/webhook/v3/INSURANCE_ENTRUST.TERMINATE'],
              ['续期完成通知', '/webhook/v3/INSURANCE_ENTRUST.RENEW'],
              ['支付成功通知', '/webhook/v3/TRANSACTION.SUCCESS#INSURANCE_ENTRUST'],
              ['支付失败通知', '/webhook/v3/TRANSACTION.FAIL#INSURANCE_ENTRUST'],
            ].map(transArrayItem),
          }).concat({
            text: '校园轻松付',
            collapsed: true,
            items: [
              ['用户签约成功通知', '/webhook/v3/PAYSCORE.USER_OPEN_SERVICE#EDUSCHOOLPAY'],
              ['用户解约成功通知', '/webhook/v3/PAYSCORE.USER_CLOSE_SERVICE#EDUSCHOOLPAY'],
              ['用户订单支付成功通知', '/webhook/v3/TRANSACTION.INDUSTRY_SUCCESS'],
              ['用户订单支付失败通知', '/webhook/v3/TRANSACTION.INDUSTRY_FAILED'],
              ['用户欠款状态变化通知', '/webhook/v3/EDU_SCHOOL_PAY.USER_DEBT_STATE_UPDATE'],
              ['用户还款通知', '/webhook/v3/TRANSACTION.PAY_BACK#EDUSCHOOLPAY'],
            ].map(transArrayItem),
          }).concat({
            text: '教育续费通',
            collapsed: true,
            items: [
              ['签约成功通知', '/webhook/v3/ENTRUST.SIGNING'],
              ['解约成功通知', '/webhook/v3/ENTRUST.RELEASE'],
            ].map(transArrayItem),
          }).concat({
            text: '停车服务',
            collapsed: true,
            items: [
              ['停车入场状态变更通知', '/webhook/v3/VEHICLE.ENTRANCE_STATE_CHANGE'],
              ['订单支付成功通知', '/webhook/v3/TRANSACTION.SUCCESS#PARKING'],
              ['订单支付失败通知', '/webhook/v3/TRANSACTION.FAIL#PARKING'],
              ['用户还款通知', '/webhook/v3/TRANSACTION.PAY_BACK#PARKING'],
            ].map(transArrayItem),
          }).concat({
            text: 'ETC授权',
            collapsed: true,
            items: [
              ['签约状态变化通知', '/webhook/v3/VEHICLE.USER_STATE_CHANGE'],
            ].map(transArrayItem),
          }),
        },
        {
          text: '微信支付分',
          collapsed: true,
          items: [
            ['用户授权成功通知', '/webhook/v3/PAYSCORE.USER_OPEN_SERVICE'],
            ['用户解除授权通知', '/webhook/v3/PAYSCORE.USER_CLOSE_SERVICE'],
            ['用户确认成功通知', '/webhook/v3/PAYSCORE.USER_CONFIRM'],
            ['用户支付成功通知', '/webhook/v3/PAYSCORE.USER_PAID'],
            ['账户绑定结果通知', '/webhook/v3/PAYSCORE.BIND_SERVICE_ACCOUNT']
          ].map(transArrayItem).concat({
            text: '签约计划',
            collapsed: true,
            items: [
              ['用户签约计划成功通知', '/webhook/v3/PAYSCORE.USER_SIGN_PLAN'],
              ['用户取消已签约的计划通知', '/webhook/v3/PAYSCORE.USER_CANCEL_SIGN_PLAN'],
            ].map(transArrayItem),
          }).concat(transArrayItem(
            ['智慧零售/先享后付订单确认', '/webhook/v3/PAYSCORE.USER_ACCEPTED']
          )).concat({
            text: '微信先享卡',
            collapsed: true,
            items: [
              ['用户领卡通知(预受理领卡)', '/webhook/v3/DISCOUNT_CARD.USER_ACCEPTED'],
              ['用户领卡通知(模板配置)', '/webhook/v3/DISCOUNT_CARD.GET_CARD'],
              ['守约状态变化通知', '/webhook/v3/DISCOUNT_CARD.AGREEMENT_ENDED'],
              ['扣费状态变化通知', '/webhook/v3/DISCOUNT_CARD.USER_PAID'],
              ['用户结算通知', '/webhook/v3/DISCOUNT_CARD.SETTLEMENT'],
            ].map(transArrayItem),
          }),
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
