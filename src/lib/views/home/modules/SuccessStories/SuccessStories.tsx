import { Box, Center, Heading } from "@chakra-ui/react";
import type { FC } from "react";

import ReviewBox from "./ReviewBox";

const SuccessStories: FC = () => {
  return (
    <Box as="section" py={["30px", null, "40px", null, "60px"]} pos="relative">
      <Center mb={["30px", null, "60px", null, "90px"]}>
        <Heading maxW="20ch" size="lg" textAlign="center" mb={0}>
          Trusted by <span style={{ color: "#00C4A2" }}>leaders</span> of the
          creative community
        </Heading>
      </Center>
      <ReviewBox />
    </Box>
  );
};

export default SuccessStories;
