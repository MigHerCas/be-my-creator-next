import { Heading } from "@chakra-ui/react";
import type { NextPage } from "next";
import { NextSeo } from "next-seo";

const DemoView: NextPage = () => {
  return (
    <>
      <NextSeo title="Home" />
      <Heading>Demo!</Heading>
    </>
  );
};

export default DemoView;
