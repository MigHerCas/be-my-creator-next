import { DefaultSeo } from "next-seo";
import Head from "next/head";

import { Chakra } from "@components/Chakra";
import Layout from "@layout/index";
import defaultSEOConfig from "../../next-seo.config";
import type { AppProps } from "next/app";

import "lib/styles/globals.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Chakra>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
        />
      </Head>
      <DefaultSeo {...defaultSEOConfig} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Chakra>
  );
};

export default MyApp;
