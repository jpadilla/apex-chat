import '../styles/app.css';

import React from 'react';
import App, { createUrl } from 'next/app';
import Layout from '../layouts/main';

export default class CustomApp extends App {
  render() {
    const { router, Component, pageProps } = this.props;
    const url = createUrl(router);
    return (
      <Layout>
        <Component {...pageProps} url={url} />
      </Layout>
    );
  }
}
