import type { BlogConfig } from '@/interfaces/config';

const blog: BlogConfig = {
  title: 'Blog-By-Craft',
  author: 'Name6',
  link: 'https://blog.water6.ltd',
  description: '山光悦鸟性，潭影空人心',
  lang: 'zh-CN', // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW']
  appearance: 'auto', // ['light', 'dark', 'auto'],
  font: 'sans-serif', // ['sans-serif', 'serif']
  lightBackground: '#F2F2F2',
  darkBackground: '#212936', // use hex value, don't forget '#'
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
    blog: 'https://blog.water6.ltd/en',
    contact: 'https://blog.water6.ltd/en/contact',
  },
  socialLink: {
    github: 'https://github.com/lhj-web',
  },
  seo: {
    keywords: ['Blog', 'Craft.do', 'Craft Docs', 'Next.js', 'TailwindCSS'],
  },
  // analytics: {
  //   provider: '',
  //   umamiConfig: {
  //     scriptUrl: '', // The url of your Umami script
  //     websiteId: '', // The website id of your Umami instance
  //   },
  // },
  isProd: process.env.VERCEL_ENV === 'production', // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
};

export default blog;
