import { Box, Center, Heading } from "@chakra-ui/react";
import ReviewBox from "@compositions/ReviewBox";
import type { FC } from "react";

const SuccessStories: FC = () => {
  return (
    <Box as="section" py="60px">
      <Center>
        <Heading maxW="20ch" size="lg" textAlign="center" mb="60px">
          Trusted by <span style={{ color: "#00C4A2" }}>leaders</span> of the
          creative community
        </Heading>
      </Center>
      <ReviewBox />
    </Box>
  );
};

export default SuccessStories;
