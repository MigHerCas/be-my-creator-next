import { Flex, Heading, Text, useColorMode } from "@chakra-ui/react";
import CalendlyIntegration from "@compositions/CalendlyIntegration";
import Layout from "@layout/index";
import type { NextPageWithLayout } from "@pages/_app";
import { NextSeo } from "next-seo";
import type { ReactElement } from "react";
import { useEffect } from "react";

const NewCallView: NextPageWithLayout = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  useEffect(() => {
    if (colorMode === "light") toggleColorMode();
  }, [colorMode, toggleColorMode]);

  return (
    <>
      <NextSeo title="New project" />
      <Flex flexDir="column" alignItems="center" gap="30px">
        <Heading size="lg" textAlign="center" mb="0">
          Book a call with us
        </Heading>
        <Text>
          Let&apos;s get started with a simple call to see how we can help each
          other.
        </Text>

        <CalendlyIntegration />
      </Flex>
    </>
  );
};

NewCallView.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default NewCallView;
