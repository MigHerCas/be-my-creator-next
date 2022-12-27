import { NextSeo } from "next-seo";

import { Container, Flex } from "@chakra-ui/react";
import VideoModal from "@components/modal/VideoModal";
import VideoPlayer from "@components/video/VideoPlayer";

const Home = () => {
  return (
    <Container>
      <Flex direction="column" gap={8}>
        <NextSeo title="Home" />

        <VideoModal>
          <VideoPlayer />
        </VideoModal>
      </Flex>
    </Container>
  );
};

export default Home;
