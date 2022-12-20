import { Flex } from "@chakra-ui/react";
import { NextSeo } from "next-seo";

import Modal from "lib/components/modal/Modal";
import VideoPlayer from "lib/components/video/VideoPlayer";

const Home = () => {
  return (
    <Flex>
      <NextSeo title="Home" />
      <Modal>
        <VideoPlayer />
      </Modal>
    </Flex>
  );
};

export default Home;
