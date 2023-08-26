/** @type {import("pliny/config").PlinyConfig } */
const siteMetadata = {
  title: "pavel's blog",
  author: 'Pavel Zwerschke',
  headerTitle: "pavel's blog",
  description: '',
  language: 'en-us',
  theme: 'system', // system, dark or light
  siteUrl: 'https://pavel.pink',
  siteRepo: 'https://github.com/pavelzw/pavels-blog',
  siteLogo: '/static/images/logo.png',
  socialBanner: '/static/images/twitter-card.png',
  email: 'pavelzw@gmail.com',
  github: 'https://github.com/pavelzw',
  youtube: 'https://youtube.com/@pavelzw',
  linkedin: 'https://linkedin.com/in/zwerschke',
  locale: 'en-US',
  analytics: {
    umamiAnalytics: {
      // We use an env variable for this site to avoid other users cloning our analytics ID
      umamiWebsiteId: process.env.NEXT_UMAMI_ID, // e.g. 123e4567-e89b-12d3-a456-426614174000
    },
    // plausibleAnalytics: {
    //   plausibleDataDomain: '', // e.g. tailwind-nextjs-starter-blog.vercel.app
    // },
    // simpleAnalytics: {},
    // posthogAnalytics: {
    //   posthogProjectApiKey: '', // e.g. 123e4567-e89b-12d3-a456-426614174000
    // },
    // googleAnalytics: {
    //   googleAnalyticsId: '', // e.g. G-XXXXXXX
    // },
  },
  newsletter: {
    // supports mailchimp, buttondown, convertkit, klaviyo, revue, emailoctopus
    // Please add your .env file and modify it according to your selection
    // provider: 'buttondown',
  },
  // comments: {
  //   // If you want to use an analytics provider you have to add it to the
  //   // content security policy in the `next.config.js` file.
  //   // Select a provider and use the environment variables associated to it
  //   // https://vercel.com/docs/environment-variables
  //   provider: 'giscus', // supported providers: giscus, utterances, disqus
  //   giscusConfig: {
  //     // Visit the link below, and follow the steps in the 'configuration' section
  //     // https://giscus.app/
  //     repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
  //     repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
  //     category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
  //     categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
  //     mapping: 'pathname', // supported options: pathname, url, title
  //     reactions: '1', // Emoji reactions: 1 = enable / 0 = disable
  //     // Send discussion metadata periodically to the parent window: 1 = enable / 0 = disable
  //     metadata: '0',
  //     // theme example: light, dark, dark_dimmed, dark_high_contrast
  //     // transparent_dark, preferred_color_scheme, custom
  //     theme: 'light',
  //     // theme when dark mode
  //     darkTheme: 'dark_dimmed',
  //     // If the theme option above is set to 'custom`
  //     // please provide a link below to your custom theme css file.
  //     // example: https://giscus.app/themes/custom_example.css
  //     themeURL: '',
  //     // This corresponds to the `data-lang="en"` in giscus's configurations
  //     lang: 'en',
  //   },
  // },
  search: {
    provider: 'kbar',
    kbarConfig: {
      searchDocumentsPath: 'search.json',
    },
  },
}

module.exports = siteMetadata
