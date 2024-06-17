import '../styles/globals.css';
import React from 'react';
import { GeistMono } from 'geist/font/mono'

export default function App({ Component, pageProps }) {
  return (
    <div className={GeistMono.className}>
      <Component {...pageProps} />
    </div>
  );
}
