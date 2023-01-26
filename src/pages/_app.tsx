import Layout from "@layout/Layout";
import { ChakraProvider } from "@providers/CustomChakraProvider";
import type { NextPage } from "next";
import { DefaultSeo } from "next-seo";
import type { AppProps } from "next/app";
import Head from "next/head";
import Router from "next/router";
import nProgress from "nprogress";
import type { ReactElement, ReactNode } from "react";

import defaultSEOConfig from "../../next-seo.config";

import "@styles/globals.css";

export type NextPageWithLayout<P = Record<string, unknown>, IP = P> = NextPage<
  P,
  IP
> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

// NProgress router event handler
Router.events.on("routeChangeStart", () => {
  nProgress.start();
});

Router.events.on("routeChangeComplete", () => {
  nProgress.done(false);
  window.scrollTo({ top: 0 });
});

Router.events.on("routeChangeError", () => nProgress.done());

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => <Layout>{page}</Layout>);

  return (
    <ChakraProvider>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
        />
      </Head>
      <DefaultSeo {...defaultSEOConfig} />
      {getLayout(<Component {...pageProps} />)}
    </ChakraProvider>
  );
};

export default MyApp;
