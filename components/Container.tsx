import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BLOG from '@/blog.config';

interface PropsType {
  children?: React.ReactNode | React.ReactNode[];
  layout?: string;
  [key: string]: any;
}

const Container = ({ children, layout, ...customMeta }: PropsType) => {
  const meta: { title: string; type: string } & { [key: string]: any } = {
    title: BLOG.title,
    type: 'website',
    ...customMeta,
  };
  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        {/* <meta content={BLOG.darkBackground} name='theme-color' /> */}
        <meta name="robots" content="follow, index" />
        <meta charSet="UTF-8" />
        {BLOG.seo.googleSiteVerification && (
          <meta
            name="google-site-verification"
            content={BLOG.seo.googleSiteVerification}
          />
        )}
        {BLOG.seo.keywords && (
          <meta name="keywords" content={BLOG.seo.keywords.join(', ')} />
        )}
        <meta name="description" content={meta.description} />
        <meta property="og:locale" content={BLOG.lang} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta
          property="og:url"
          content={meta.slug ? `${BLOG.link}/${meta.slug}` : BLOG.link}
        />
        {BLOG.ogImageGenerateURL && <meta
          property="og:image"
          content={`${BLOG.ogImageGenerateURL}/${encodeURIComponent(
            meta.title,
          )}.png?theme=light&md=1&siteName=${encodeURIComponent(
            BLOG.title,
          )}%20|%20${encodeURIComponent(
            BLOG.description,
          )}&signature=${encodeURIComponent(
            BLOG.link,
          )}`}
        />}
        <meta property="og:type" content={meta.type} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:title" content={meta.title} />
        <meta
          name="twitter:image"
          content={`${BLOG.ogImageGenerateURL}/${encodeURIComponent(
            meta.title,
          )}.png?theme=light&md=1&siteName=${encodeURIComponent(
            BLOG.title,
          )}%20|%20${encodeURIComponent(
            BLOG.description,
          )}&signature=${encodeURIComponent(
            BLOG.link,
          )}`}
        />
        {meta.type === 'article' && (
          <>
            <meta
              property="article:published_time"
              content={meta.date || meta.createdTime}
            />
            <meta property="article:author" content={BLOG.author} />
          </>
        )}
      </Head>
      <div
        className={`wrapper ${
          BLOG.font === 'serif' ? 'font-serif' : 'font-sans'
        }`}
      >
        <Header navBarTitle={layout === 'blog' ? meta.title : null} />
        <main className="m-auto flex-grow w-full transition-all max-w-2xl px-4">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Container;
