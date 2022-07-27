import type { AppProps } from 'next/app';

import { ThemeProvider } from 'next-themes';
import Scripts from '@/components/Scripts';

import '@/styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Scripts />
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
