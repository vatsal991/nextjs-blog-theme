import * as React from 'react';
import type { AppProps } from 'next/app';
import '../styles/globals.css';
import NavbarComp from '../components/navbar';
import Footer from '../components/footer';
import NextTopLoader from 'nextjs-toploader';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <NextTopLoader color="#DA0037" />
      <NavbarComp />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
