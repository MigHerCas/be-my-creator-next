import { Flex, Heading, Container } from "@chakra-ui/react";
import { NextSeo } from "next-seo";

import VideoModal from "lib/components/modal/VideoModal";
import VideoPlayer from "lib/components/video/VideoPlayer";

const Home = () => {
  return (
    <Container>
      <Heading size="xl">Be My Creator!</Heading>
      <Heading size="lg">Be My Creator!</Heading>
      <Heading size="md">Be My Creator!</Heading>
      <Heading size="sm">Be My Creator!</Heading>
      <Heading size="xs">Be My Creator!</Heading>

      <Flex>
        <NextSeo title="Home" />
        <VideoModal>
          <VideoPlayer />
        </VideoModal>
      </Flex>
    </Container>
  );
};

export default Home;
