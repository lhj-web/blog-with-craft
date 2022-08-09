import type { DocumentContext } from 'next/document';
import Document, { Head, Html, Main, NextScript } from 'next/document';
import BLOG from '@/blog.config';
const { theme: { extend: { colors: { day, night } } } } = require('tailwind.config');

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang={BLOG.lang}>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
          <meta name="author" content={BLOG.author} />
          <meta name="baidu-site-verification" content="code-J4jkHpixMQ" />
          {BLOG.appearance === 'auto'
            ? (
            <>
              <meta
                name="theme-color"
                content={day.DEFAULT}
                media="(prefers-color-scheme: light)"
              />
              <meta
                name="theme-color"
                content={night.DEFAULT}
                media="(prefers-color-scheme: dark)"
              />
            </>
              )
            : (
            <meta
              name="theme-color"
              content={
                BLOG.appearance === 'dark'
                  ? night.default
                  : day.default
              }
            />
              )}
        </Head>
        <body className="bg-day dark:bg-night">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
