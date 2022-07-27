export interface BlogConfig {
  title: string;
  author: string;
  link: string;
  description: string;
  lang?: 'zh-CN' | 'en' | any;
  appearance?: 'light' | 'dark' | 'auto';
  font?: 'sans-serif' | 'serif';
  /**
   * @description light mode color
   *
   * use hex value, don't forget '#' e.g #fffefc
   */
  lightBackground: string;
  darkBackground: string;
  /**
   * @description If leave this empty, current year will be used
   */
  since: number;
  showTitleBarText?: string;
  /**
   * @description The automatically collapsed navigation bar
   */
  autoCollapsedNavBar?: boolean;
  /**
   * @description The link to generate OG image, don't end with a slash
   */
  // ogImageGenerateURL: string;
  /**
   * @description
   * The link to share your craft config
   */
  craftConfigShareUrl: string;
  ogImageGenerateURL?: string;
  notesNav: {
    index: string;
    blog: string;
    contact: string;
  };
  notesLink: {
    index: string;
    blog: string;
    contact: string;
  };
  socialLink: {
    github: string;
  };
  seo: {
    keywords: string[];
    [key: string]: any;
  };
  isProd: boolean;
}
