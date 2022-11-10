import type { BlogConfig } from '@/interfaces/config'

const BLOG: BlogConfig = {
  title: 'Lovell Liu',
  author: 'Lovell Liu',
  link: 'https://blog.water6.ltd',
  description: '山光悦鸟性，潭影空人心',
  appearance: 'auto', // ['light', 'dark', 'auto'],
  font: 'sans-serif', // ['sans-serif', 'serif']
  since: 2022,
  showTitleBarText: 'false',
  autoCollapsedNavBar: false,
  ogImageGenerateURL: '',
  craftConfigShareUrl: 'https://www.craft.do/s/K9XaIzHKp20R9C',
  notesNav: {
    index: '主页',
    blog: '我的博客',
    contact: '联系我',
  },
  notesLink: {
    index: '/',
    blog: 'https://lovelliu.me',
    contact: 'https://lovelliu.me/contact',
  },
  socialLink: {
    github: 'https://github.com/lovelliu',
  },
  seo: {
    keywords: ['Blog', 'Craft.do', 'Craft Docs', 'Next.js', 'Lovell Liu', 'lovelliu', 'notes', 'Lovell Liu的博客'],
  },
  // analytics: {
  //   provider: '',
  //   umamiConfig: {
  //     scriptUrl: '', // The url of your Umami script
  //     websiteId: '', // The website id of your Umami instance
  //   },
  // },
  isProd: process.env.VERCEL_ENV === 'production', // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
}

export default BLOG
