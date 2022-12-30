import { Box, Center, Heading } from "@chakra-ui/react";
import ReviewBox from "@compositions/ReviewBox";
import type { FC } from "react";

const SuccessStories: FC = () => {
  return (
    <Box as="section" py="60px">
      <Center mb={["30px", null, "60px", "90px"]}>
        <Heading maxW="20ch" size={["md", null, "lg"]} textAlign="center">
          Trusted by <span style={{ color: "#00C4A2" }}>leaders</span> of the
          creative community
        </Heading>
      </Center>
      <ReviewBox />
    </Box>
  );
};

export default SuccessStories;
