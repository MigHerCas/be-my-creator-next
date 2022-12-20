import { Flex } from "@chakra-ui/react";
import { NextSeo } from "next-seo";

import VideoModal from "lib/components/modal/VideoModal";
import VideoPlayer from "lib/components/video/VideoPlayer";

const Home = () => {
  return (
    <Flex>
      <NextSeo title="Home" />
      <VideoModal>
        <VideoPlayer />
      </VideoModal>
    </Flex>
  );
};

export default Home;
