import '../styles/globals.css';
import React from 'react';
import { GeistSans, } from "geist/font";
import { GeistMono } from 'geist/font/mono'

export default function App({ Component, pageProps }) {
  return (
    <div className={GeistMono.className}>
      <Component {...pageProps} />
    </div>
  );
}
