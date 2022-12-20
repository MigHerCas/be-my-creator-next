import { Box, Flex } from "@chakra-ui/react";
import { NextSeo } from "next-seo";

import VideoPlayer from "lib/components/video/VideoPlayer";

const Home = () => {
  return (
    <Flex>
      <NextSeo title="Home" />

      <Box
        w={220}
        minH={380}
        border="4px"
        borderColor="white"
        borderRadius="25"
        overflow="hidden"
      >
        <VideoPlayer />
      </Box>
    </Flex>
  );
};

export default Home;
