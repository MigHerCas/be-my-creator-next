import { Box, Flex, Heading, Text, useColorMode } from "@chakra-ui/react";
import CalendlyIntegration from "@compositions/CalendlyIntegration";
import Layout from "@layout/index";
import type { NextPageWithLayout } from "@pages/_app";
import { NextSeo } from "next-seo";
import type { ReactElement } from "react";
import { useEffect } from "react";
import { Video } from "react-feather";

const NewCallView: NextPageWithLayout = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  useEffect(() => {
    if (colorMode === "light") toggleColorMode();
  }, [colorMode, toggleColorMode]);

  return (
    <>
      <NextSeo title="New project" />
      <Flex
        flexDir="column"
        alignItems="center"
        gap="30px"
        py="60px"
        className="glassmorphic--light"
      >
        <Flex alignItems="center" gap={8}>
          <Box
            p={5}
            display="inline-block"
            bgColor="#272727"
            borderRadius="full"
          >
            <Video height="40px" width="40px" stroke="#BCE500" />
          </Box>
          <Heading size="lg" textAlign="center" mb={0}>
            Book a call with us
          </Heading>
        </Flex>

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
