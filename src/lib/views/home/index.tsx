import { NextSeo } from "next-seo";
import NextLink from "next/link";

import { Container, Flex } from "@chakra-ui/react";
import Logo from "@components/logo/Logo";
import VideoModal from "@components/modal/VideoModal";
import VideoPlayer from "@components/video/VideoPlayer";

const Home = () => {
  return (
    <Container>
      <Flex direction="column" gap={8}>
        <NextSeo title="Home" />

        <Logo />

        <VideoModal>
          <VideoPlayer />
        </VideoModal>

        <NextLink href="/styleguide" style={{ color: "#00c2ae" }}>
          To Style guide
        </NextLink>
      </Flex>
    </Container>
  );
};

export default Home;
