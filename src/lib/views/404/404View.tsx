import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import CTA from "@components/cta/CTA";
import { HEADER_HEIGHT } from "@helpers/ui-values";
import { NextSeo } from "next-seo";
import NextImage from "next/image";
import type { FC } from "react";

const Page404View: FC = () => {
  return (
    <Flex
      minHeight={`calc(100vh - ${HEADER_HEIGHT})`}
      direction="column"
      justifyContent="center"
    >
      <NextSeo title="404 Not Found" />
      <Box width={{ base: "100%", sm: "70%", md: "50%" }} margin="0 auto">
        <NextImage
          src="/404 Error-pana.svg"
          width={600}
          height={400}
          priority
          alt="Error 404 not found Illustration"
        />
      </Box>
      <Box marginY={4}>
        <Heading textAlign="center" size="lg">
          Page not Found.
        </Heading>

        <Box textAlign="center" marginTop={4}>
          <Text fontSize="sm" color="gray">
            It&apos;s Okay!
          </Text>

          <CTA
            href="/"
            variant="primary"
            icon="arrow"
            customStyles={{ mx: "auto" }}
          >
            Let&apos;s Head Back
          </CTA>
        </Box>
      </Box>
    </Flex>
  );
};

export default Page404View;
