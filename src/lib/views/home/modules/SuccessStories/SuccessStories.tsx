import { Box, Center, Heading } from "@chakra-ui/react";
import { SECTION_VERTICAL_SPACING, themeColors } from "@helpers/ui-values";
import type { FC } from "react";

import ReviewBox from "./ReviewBox";

const SuccessStories: FC = () => {
  return (
    <Box as="section" py={SECTION_VERTICAL_SPACING} pos="relative">
      <Center mb={["30px", null, "60px", null, "90px"]}>
        <Heading maxW="20ch" size="lg" textAlign="center" mb={0}>
          Trusted by <span style={{ color: themeColors.primary }}>leaders</span>{" "}
          of the creative community
        </Heading>
      </Center>
      <ReviewBox />
    </Box>
  );
};

export default SuccessStories;
