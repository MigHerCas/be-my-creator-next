import { Heading } from "@chakra-ui/react";
import type { NextPage } from "next";
import { NextSeo } from "next-seo";

const NewProjectView: NextPage = () => {
  return (
    <>
      <NextSeo title="Home" />
      <Heading>Demo!</Heading>
    </>
  );
};

export default NewProjectView;
