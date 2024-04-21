// _app.tsx

import React from 'react';
import type { AppProps } from 'next/app';
import LanguageProvider from '../providers/LanguageProvider';
import '../globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LanguageProvider>
      <Component {...pageProps} />
    </LanguageProvider>
  );
}

export default MyApp;
