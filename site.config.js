const CONFIG = {
  // profile setting (required)
  profile: {
    name: 'xMuu',
    image: '/avatar.svg',  // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: 'android developer',
    bio: '',
    email: 'imxmuu#gmail.com',
    linkedin: '',
    github: 'xMuu',
    instagram: '',
  },
  projects: [
    {
      name: `xMuu's Blog`,
      href: 'https://github.com/xMuu/morethan-log-xmuu'
    }
  ],
  // blog setting (required)
  blog: {
    title: "xMuu's Blog",
    description: 'Welcome!',
    theme: 'dark' // ['light', 'dark', 'auto']
  },

  // CONFIG configration (required)
  link: 'https://morethan-log-xmuu.vercel.app',
  since: 2023, // If leave this empty, current year will be used.
  lang: 'zh-CN', // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: 'https://og-image.vercel.app', // The link to generate OG image, don't end with a slash
  seo: {
    keywords: ['Blog', 'Website', 'Notion', 'xMuu'],
  },

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.GOOGLE_MEASUREMENT_ID || ''
    }
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.GOOGLE_SITE_VERIFICATION || ''
    }
  },
  utterances: {
    enable: true,
    config: {
      repo: 'xMuu/morethan-log-xmuu',
      'issue-term': 'og:title',
      label: '💬 Utterances',
    }
  },
  isProd: process.env.VERCEL_ENV === 'production' // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
}
module.exports = CONFIG
