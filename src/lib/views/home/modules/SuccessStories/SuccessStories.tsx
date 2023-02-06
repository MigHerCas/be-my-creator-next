import { Box, Center, Heading } from "@chakra-ui/react";
import { SECTION_VERTICAL_SPACING, themeColors } from "@helpers/ui-values";

import ReviewBox from "./ReviewBox";

const SuccessStories = () => {
  return (
    <Box as="section" py={SECTION_VERTICAL_SPACING} pos="relative">
      <Center mb={["30px", null, "60px", null, "90px"]}>
        <Heading maxW="20ch" size="lg" textAlign="center" mb={0}>
          Let creators{" "}
          <span style={{ color: themeColors.primary }}>empower</span> your brand
          with UGC
        </Heading>
      </Center>
      <ReviewBox />
    </Box>
  );
};

export default SuccessStories;
