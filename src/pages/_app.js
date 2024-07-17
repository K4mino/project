import '../styles/globals.css';
import React from 'react';
import { GeistMono } from 'geist/font/mono'
import { Analytics } from "@vercel/analytics/react"

export default function App({ Component, pageProps }) {
  return (
    <div className={GeistMono.className}>
      <Component {...pageProps} />
      <Analytics />
    </div>
  );
}
