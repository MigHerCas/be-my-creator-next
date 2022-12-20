import { Container, Flex, Link } from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import NextLink from "next/link";

import VideoModal from "lib/components/modal/VideoModal";
import VideoPlayer from "lib/components/video/VideoPlayer";

const Home = () => {
  return (
    <Container>
      <Flex>
        <NextSeo title="Home" />
        <VideoModal>
          <VideoPlayer />
        </VideoModal>

        <Link as={NextLink} href="/styleguide">
          To Styleguide
        </Link>
      </Flex>
    </Container>
  );
};

export default Home;
