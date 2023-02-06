import { Box, Flex, Heading, Text, useColorMode } from "@chakra-ui/react";
import { themeColors } from "@helpers/ui-values";
import Layout from "@layout/Layout";
import type { NextPageWithLayout } from "@pages/_app";
import { NextSeo } from "next-seo";
import type { ReactElement } from "react";
import { useEffect } from "react";
import { Video } from "react-feather";

import CalendlyIntegration from "lib/shared/modules/CalendlyIntegration";

const NewCallView: NextPageWithLayout = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  useEffect(() => {
    if (colorMode === "light") toggleColorMode();
  }, [colorMode, toggleColorMode]);

  return (
    <>
      <NextSeo title="Book a call with us | BeMyCreator" />
      <Flex
        className="glassmorphic--light"
        flexDir="column"
        alignItems="center"
        borderRadius={[0, null, "20px 20px 0 0"]}
        gap="30px"
        mx={["-30px", null, "initial"]}
        p={["30px", null, "50px", "60px"]}
        sx={{
          "-webkit-overflow-scrolling": "touch",
        }}
      >
        <Flex justifyContent="center" alignItems="center" gap={8} wrap="wrap">
          <Box
            p={[3, null, null, 5]}
            display="inline-block"
            bgColor={themeColors.darkGrey}
            borderRadius="full"
          >
            <Video height="30px" width="30px" stroke={themeColors.pistache} />
          </Box>
          <Heading size="lg" textAlign="center" mb={0}>
            Let&apos;s have a chat
          </Heading>
        </Flex>

        <Text mb={0}>
          Let&apos;s get started with a simple call to see how we can help each
          other.
        </Text>

        <CalendlyIntegration />
      </Flex>
    </>
  );
};

NewCallView.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout
      mainCTA={{
        href: "/new-project",
        text: "Create a project",
      }}
    >
      {page}
    </Layout>
  );
};

export default NewCallView;
