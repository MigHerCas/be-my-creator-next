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
        className="glassmorphic--light"
        flexDir="column"
        alignItems="center"
        borderRadius={[0, null, "20px 20px 0 0"]}
        gap={["30px", "40px", "50px", "60px"]}
        mx={["-30px", null, "initial"]}
        p={["30px", null, "50px", "60px"]}
      >
        <Flex justifyContent="center" alignItems="center" gap={8} wrap="wrap">
          <Box
            p={[3, null, null, 5]}
            display="inline-block"
            bgColor="#272727"
            borderRadius="full"
          >
            <Video height="30px" width="30px" stroke="#BCE500" />
          </Box>
          <Heading size="lg" textAlign="center" mb={0}>
            Let&apos;s have a chat
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
  return <Layout hideBlobsOnMobile>{page}</Layout>;
};

export default NewCallView;
